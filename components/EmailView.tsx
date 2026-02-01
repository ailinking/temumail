import React, { useEffect, useState } from 'react';
import { MessageSummary, MessageDetail, getMessage } from '../lib/mailtm';

interface EmailViewProps {
  message: MessageSummary;
  token: string;
  onClose: () => void;
  onDelete?: (id: string) => void;
}

export function EmailView({ message, token, onClose, onDelete }: EmailViewProps) {
  const [detail, setDetail] = useState<MessageDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    getMessage(token, message.id)
      .then(data => {
        if (mounted) {
          setDetail(data);
          setLoading(false);
        }
      })
      .catch(err => {
        if (mounted) {
          setError(err.message);
          setLoading(false);
        }
      });

    return () => { mounted = false; };
  }, [token, message.id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full p-10">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 text-red-500">
        Error loading email: {error}
      </div>
    );
  }

  if (!detail) return null;

  return (
    <div className="flex flex-col h-full bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-start">
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {detail.subject || '(No Subject)'}
          </h2>
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mb-1">
            <span className="font-semibold mr-2">From:</span>
            <span>{detail.from.name} &lt;{detail.from.address}&gt;</span>
          </div>
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
            <span className="font-semibold mr-2">To:</span>
            <span>{detail.to.map(t => t.address).join(', ')}</span>
          </div>
          <div className="text-xs text-gray-500 mt-1">
            {new Date(detail.createdAt).toLocaleString()}
          </div>
        </div>
        <div className="flex gap-2">
           {onDelete && (
            <button
              onClick={() => onDelete(detail.id)}
              className="text-red-400 hover:text-red-600"
              title="Delete"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
            </button>
           )}
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-auto p-4 bg-white dark:bg-gray-800 dark:text-gray-100">
        {detail.html && detail.html.length > 0 ? (
           <div
             className="prose max-w-none dark:prose-invert"
             dangerouslySetInnerHTML={{ __html: detail.html[0] }}
           />
        ) : (
           <pre className="whitespace-pre-wrap font-sans">
             {detail.text}
           </pre>
        )}
      </div>
    </div>
  );
}
