'use client';

import { useState, useEffect, useCallback } from 'react';
import * as mailtm from '../lib/mailtm';

const STORAGE_KEY = 'temumail_account';

interface StoredAccount {
  address: string;
  password: string;
  token: string;
  id: string;
}

export function useMailTm() {
  const [account, setAccount] = useState<StoredAccount | null>(null);
  const [messages, setMessages] = useState<mailtm.MessageSummary[]>([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Load account from storage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setAccount(parsed);
      } catch (e) {
        console.error('Failed to parse stored account', e);
      }
    }
  }, []);

  const fetchMessages = useCallback(async () => {
    if (!account?.token) return;
    try {
      setRefreshing(true);
      const msgs = await mailtm.getMessages(account.token);
      setMessages(msgs);
      setError(null);
    } catch (err: any) {
      console.error('Fetch messages error:', err);
      // If token is invalid, maybe we should re-login or clear?
      if (err.message.includes('401')) {
         // Try to get new token?
      }
    } finally {
      setRefreshing(false);
    }
  }, [account]);

  // Initial fetch when account changes
  useEffect(() => {
    if (account) {
      fetchMessages();
    } else {
      setMessages([]);
    }
  }, [account, fetchMessages]);

  // Polling
  useEffect(() => {
    if (!account) return;
    const interval = setInterval(fetchMessages, 10000); // Poll every 10s
    return () => clearInterval(interval);
  }, [account, fetchMessages]);

  const createRandomAccount = async () => {
    setLoading(true);
    setError(null);
    try {
      const domains = await mailtm.getDomains();
      if (!domains.length) throw new Error('No domains available');

      const domain = domains[0].domain;
      const username = mailtm.generateRandomString(10);
      const password = mailtm.generateRandomString(12);
      const address = `${username}@${domain}`;

      const newAccount = await mailtm.createAccount(address, password);
      const token = await mailtm.getToken(address, password);

      const accountData: StoredAccount = {
        address,
        password,
        token,
        id: newAccount.id
      };

      localStorage.setItem(STORAGE_KEY, JSON.stringify(accountData));
      setAccount(accountData);
    } catch (err: any) {
      setError(err.message || 'Failed to create account');
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem(STORAGE_KEY);
    setAccount(null);
    setMessages([]);
  };

  const deleteMsg = async (msgId: string) => {
    if (!account?.token) return;
    try {
      // Optimistic update
      setMessages(prev => prev.filter(m => m.id !== msgId));
      await mailtm.deleteMessage(account.token, msgId);
    } catch (err) {
      console.error('Failed to delete message', err);
      fetchMessages(); // Revert/Refresh on error
    }
  };

  return {
    account,
    messages,
    loading,
    refreshing,
    error,
    createRandomAccount,
    refresh: fetchMessages,
    logout,
    deleteMsg,
  };
}
