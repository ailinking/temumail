"use client";

import React, { useState } from "react";
import { useMailTm } from "@/hooks/useMailTm";
import { EmailList } from "@/components/EmailList";
import { EmailView } from "@/components/EmailView";
import { MessageSummary } from "@/lib/mailtm";
import { motion } from "framer-motion";
import { Zap, Shield, Smartphone, Copy, Check, RefreshCw } from "lucide-react";

export default function Home() {
  const { account, messages, loading, error, createRandomAccount, deleteMsg, refresh, refreshing } = useMailTm();
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

  return (
    <div className="flex flex-col min-h-screen">
      <section className="container pt-24 pb-20 md:pt-32 md:pb-32">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            {!account && (
              <>
                <h1 className="text-5xl md:text-7xl font-black tracking-tight text-balance leading-[1.1] mb-6">
                  The email platform <br />
                  <span className="text-gradient-brand">built for privacy.</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                  Stop spam. Protect your identity. Get a secure, anonymous temporary email address in seconds.
                </p>
              </>
            )}

            {error && (
               <div className="bg-destructive/10 text-destructive px-4 py-2 rounded-lg mb-6 inline-block">
                 {error}
               </div>
            )}

            {loading ? (
               <div className="flex items-center justify-center space-x-2 text-xl font-medium animate-pulse text-primary">
                 <RefreshCw className="w-6 h-6 animate-spin" />
                 <span>Creating your secure inbox...</span>
               </div>
            ) : !account ? (
              <button
                onClick={createRandomAccount}
                className="inline-flex h-14 items-center justify-center rounded-xl bg-primary px-8 text-lg font-bold text-primary-foreground shadow-lg hover:bg-primary/90 transition-all hover:scale-105"
              >
                Create Temporary Email
              </button>
            ) : (
              <div className="w-full max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="bento-card p-6 md:p-8 bg-card border-primary/20 shadow-xl">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 pb-8 border-b border-border">
                     <div className="flex flex-col items-start gap-2">
                        <span className="text-sm font-medium text-muted-foreground">Your Temporary Address</span>
                        <div className="flex items-center gap-3 bg-muted/50 p-2 rounded-lg border border-border">
                           <span className="font-mono text-xl md:text-3xl font-bold tracking-tight text-foreground px-2">{account.address}</span>
                           <button 
                             onClick={handleCopy}
                             className="p-2 hover:bg-background rounded-md transition-colors border border-transparent hover:border-border shadow-sm"
                             title="Copy address"
                           >
                             {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5 text-muted-foreground" />}
                           </button>
                        </div>
                     </div>
                     <div className="flex items-center gap-2">
                        <button 
                           onClick={refresh}
                           disabled={refreshing}
                           className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors text-sm font-medium"
                        >
                           <RefreshCw className={`w-4 h-4 ${refreshing ? "animate-spin" : ""}`} />
                           {refreshing ? "Refreshing..." : "Refresh Inbox"}
                        </button>
                     </div>
                  </div>
                  
                  {/* Inbox Area */}
                  <div className="text-left grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
                    {/* List */}
                    <div className="lg:col-span-1 border border-border rounded-lg overflow-hidden bg-background flex flex-col">
                       <div className="p-4 border-b border-border bg-muted/30 flex justify-between items-center">
                          <h3 className="font-semibold">Inbox</h3>
                          <span className="text-xs font-medium px-2 py-0.5 bg-primary/10 text-primary rounded-full">{messages.length}</span>
                       </div>
                       <div className="flex-1 overflow-y-auto">
                         <EmailList 
                           messages={messages} 
                           onSelect={setSelectedMsg} 
                           selectedId={selectedMsg?.id}
                           onDelete={handleDelete}
                         />
                       </div>
                    </div>
                    
                    {/* View */}
                    <div className="lg:col-span-2 border border-border rounded-lg overflow-hidden bg-background relative flex flex-col">
                      {selectedMsg ? (
                        <EmailView 
                            message={selectedMsg} 
                            token={account.token}
                            onClose={() => setSelectedMsg(null)}
                            onDelete={(id) => {
                                deleteMsg(id);
                                setSelectedMsg(null);
                            }} 
                        />
                      ) : (
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground p-8 text-center bg-muted/10">
                          <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                            <Zap className="w-8 h-8 text-muted-foreground/50" />
                          </div>
                          <p className="font-medium">Select an email to read</p>
                          <p className="text-sm mt-2 max-w-xs">Emails will appear here instantly. No need to refresh.</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {!account && (
        <section className="container py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bento-card p-8">
              <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Instant Delivery</h3>
              <p className="text-muted-foreground">
                Don"t wait for refresh. Emails are pushed to your screen the millisecond they arrive.
              </p>
            </div>
            <div className="bento-card p-8">
              <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Privacy First</h3>
              <p className="text-muted-foreground">
                No logs, no tracking. Your emails are automatically deleted after 1 hour.
              </p>
            </div>
            <div className="bento-card p-8">
              <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-6 text-green-600 dark:text-green-400">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Mobile Ready</h3>
              <p className="text-muted-foreground">
                Access your temporary inbox from any device. Fully responsive design.
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
