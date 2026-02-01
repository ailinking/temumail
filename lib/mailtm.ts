export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.mail.tm';

export interface Domain {
  id: string;
  domain: string;
  isActive: boolean;
  private: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Account {
  id: string;
  address: string;
  quota: number;
  used: number;
  isDisabled: boolean;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface MessageSummary {
  id: string;
  accountId: string;
  msgid: string;
  from: {
    address: string;
    name: string;
  };
  to: {
    address: string;
    name: string;
  }[];
  subject: string;
  intro: string;
  seen: boolean;
  isDeleted: boolean;
  hasAttachments: boolean;
  size: number;
  downloadUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface MessageDetail extends MessageSummary {
  text: string;
  html: string[];
  retention: boolean;
  retentionDate: string;
}

export async function getDomains(): Promise<Domain[]> {
  const res = await fetch(`${API_BASE_URL}/domains`);
  if (!res.ok) throw new Error('Failed to fetch domains');
  const data = await res.json();
  return data['hydra:member'];
}

export async function createAccount(address: string, password: string): Promise<Account> {
  const res = await fetch(`${API_BASE_URL}/accounts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ address, password }),
  });
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.detail || 'Failed to create account');
  }
  return res.json();
}

export async function getToken(address: string, password: string): Promise<string> {
  const res = await fetch(`${API_BASE_URL}/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ address, password }),
  });
  if (!res.ok) throw new Error('Failed to get token');
  const data = await res.json();
  return data.token;
}

export async function getMessages(token: string, page = 1): Promise<MessageSummary[]> {
  const res = await fetch(`${API_BASE_URL}/messages?page=${page}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error('Failed to fetch messages');
  const data = await res.json();
  return data['hydra:member'];
}

export async function getMessage(token: string, id: string): Promise<MessageDetail> {
  const res = await fetch(`${API_BASE_URL}/messages/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error('Failed to fetch message detail');
  return res.json();
}

export async function deleteMessage(token: string, id: string): Promise<void> {
  const res = await fetch(`${API_BASE_URL}/messages/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error('Failed to delete message');
}

export function generateRandomString(length = 8): string {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}
