'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useMailTm } from '@/hooks/useMailTm';
import { EmailList } from '@/components/EmailList';
import { EmailView } from '@/components/EmailView';
import { MessageSummary } from '@/lib/mailtm';

export default function Home() {
  const { account, messages, loading, refreshing, error, createRandomAccount, refresh, logout, deleteMsg } = useMailTm();
  const [selectedMsg, setSelectedMsg] = useState<MessageSummary | null>(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (account?.address) {
      navigator.clipboard.writeText(account.address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDelete = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    deleteMsg(id);
    if (selectedMsg?.id === id) {
      setSelectedMsg(null);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <div className="text-center">
          <p className="text-xl font-semibold">Creating temporary account...</p>
        </div>
      </div>
    );
  }

  if (!account) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
        <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
          <h1 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400">TemuMail</h1>
          <p className="mb-8 text-gray-600 dark:text-gray-300">
            Secure, anonymous, temporary email addresses.
            Protect your privacy and avoid spam.
          </p>
          
          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
              {error}
            </div>
          )}

          <button
            onClick={createRandomAccount}
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Create Temporary Email
          </button>

          <div className="mt-8 pt-6 border-t dark:border-gray-700">
            <Link href="/blog" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
              Read our Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b dark:border-gray-700">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">TemuMail</h1>
            <nav className="hidden md:block">
              <Link href="/blog" className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
                Blog
              </Link>
            </nav>
          </div>
          
          <div className="flex items-center gap-3 bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg">
            <span className="font-mono text-lg">{account.address}</span>
            <button 
              onClick={handleCopy}
              className="p-1 hover:text-blue-500 transition-colors"
              title="Copy address"
            >
              {copied ? (
                <span className="text-green-500"></span>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5" />
                </svg>
              )}
            </button>
          </div>

          <div className="flex gap-2">
            <button
              onClick={refresh}
              disabled={refreshing}
              className={`p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${refreshing ? 'animate-spin' : ''}`}
              title="Refresh inbox"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
            </button>
            <button
              onClick={logout}
              className="px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
            >
              Destroy Account
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[calc(100vh-10rem)]">
          {/* Email List */}
          <div className="md:col-span-1 bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden flex flex-col">
             <div className="p-3 border-b dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50 flex justify-between items-center">
                <h2 className="font-semibold">Inbox ({messages.length})</h2>
                {refreshing && <span className="text-xs text-gray-500">Updating...</span>}
             </div>
             <div className="flex-1 overflow-y-auto">
                <EmailList 
                  messages={messages} 
                  selectedId={selectedMsg?.id}
                  onSelect={setSelectedMsg}
                  onDelete={handleDelete}
                />
             </div>
          </div>

          {/* Email View */}
          <div className="md:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden flex flex-col">
            {selectedMsg ? (
              <EmailView 
                token={account.token} 
                message={selectedMsg} 
                onDelete={(id) => {
                  deleteMsg(id);
                  setSelectedMsg(null);
                }}
                onClose={() => setSelectedMsg(null)}
              />
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-gray-400 p-8">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-24 h-24 mb-4 opacity-50">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <p>Select an email to read</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
