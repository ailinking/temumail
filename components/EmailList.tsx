import React from 'react';
import { MessageSummary } from '../lib/mailtm';

interface EmailListProps {
  messages: MessageSummary[];
  onSelect: (msg: MessageSummary) => void;
  selectedId?: string;
  onDelete: (e: React.MouseEvent, id: string) => void;
}

export function EmailList({ messages, onSelect, selectedId, onDelete }: EmailListProps) {
  if (messages.length === 0) {
    return (
      <div className="p-8 text-center text-gray-500">
        <p>Your inbox is empty.</p>
        <p className="text-sm mt-2">Waiting for incoming emails...</p>
      </div>
    );
  }

  return (
    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
      {messages.map((msg) => (
        <li
          key={msg.id}
          className={\
            cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors
            \   
          \}
          onClick={() => onSelect(msg)}
        >
          <div className="p-4 sm:px-6">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-blue-600 truncate dark:text-blue-400">
                {msg.from.name || msg.from.address}
              </p>
              <div className="ml-2 flex-shrink-0 flex">
                <p className={\px-2 inline-flex text-xs leading-5 font-semibold rounded-full \\}>
                  {msg.seen ? 'Read' : 'New'}
                </p>
              </div>
            </div>
            <div className="mt-2 flex justify-between">
              <div className="sm:flex">
                <p className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  {msg.subject || '(No Subject)'}
                </p>
              </div>
              <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 dark:text-gray-400">
                <p>
                  {new Date(msg.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                </p>
                <button
                  onClick={(e) => onDelete(e, msg.id)}
                  className="ml-4 text-red-500 hover:text-red-700 p-1"
                  title="Delete"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-2 text-xs text-gray-400 truncate">
                {msg.intro}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
