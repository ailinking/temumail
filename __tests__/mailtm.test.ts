import { describe, it, expect, vi, beforeEach } from 'vitest';
import * as mailtm from '../lib/mailtm';

// Mock fetch
global.fetch = vi.fn();

describe('MailTM Client', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('getDomains returns a list of domains', async () => {
    const mockDomains = [{ domain: 'example.com', isActive: true }];
    (global.fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ 'hydra:member': mockDomains }),
    });

    const domains = await mailtm.getDomains();
    expect(domains).toEqual(mockDomains);
    expect(global.fetch).toHaveBeenCalledWith('https://api.mail.tm/domains');
  });

  it('createAccount creates an account', async () => {
    const mockAccount = { id: '123', address: 'test@example.com' };
    (global.fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => mockAccount,
    });

    const account = await mailtm.createAccount('test@example.com', 'password');
    expect(account).toEqual(mockAccount);
    expect(global.fetch).toHaveBeenCalledWith(
      'https://api.mail.tm/accounts',
      expect.objectContaining({
        method: 'POST',
        body: JSON.stringify({ address: 'test@example.com', password: 'password' }),
      })
    );
  });

  it('getToken returns a token', async () => {
    (global.fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ token: 'abc-123' }),
    });

    const token = await mailtm.getToken('test@example.com', 'password');
    expect(token).toBe('abc-123');
  });
});
