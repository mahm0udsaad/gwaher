'use client';

import { useEffect, useRef, useState } from 'react';
import { Send, Sparkles } from 'lucide-react';
import { Chat, useChat } from '@ai-sdk/react';
import { DefaultChatTransport, type UIMessage } from 'ai';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Header } from '@/components/Header';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import { ServicesDisplay } from '@/components/gen-ui/ServicesDisplay';
import { WhyChooseUs } from '@/components/gen-ui/WhyChooseUs';

type RecordLike = Record<string, unknown>;
const isRecordLike = (value: unknown): value is RecordLike => typeof value === 'object' && value !== null;

const isTextPart = (part: unknown): part is { type: 'text'; text: string } =>
  isRecordLike(part) && part.type === 'text' && typeof part.text === 'string';

const isToolPart = (part: unknown): part is { type: string; state?: string; output?: unknown } =>
  isRecordLike(part) && typeof part.type === 'string' && part.type.startsWith('tool-');

const getServiceIds = (output: unknown): string[] | null => {
  if (!isRecordLike(output)) return null;
  const ids = output.serviceIds;
  if (!Array.isArray(ids)) return null;
  if (!ids.every((id) => typeof id === 'string')) return null;
  return ids;
};

const getShowFlag = (output: unknown): boolean => {
  if (!isRecordLike(output)) return false;
  return output.show === true;
};

const AISupport = () => {
  const { t, dir, language } = useLanguage();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [input, setInput] = useState('');

  const chatRef = useRef<Chat<UIMessage> | null>(null);
  if (!chatRef.current) {
    chatRef.current = new Chat({
      transport: new DefaultChatTransport({ api: '/api/ai-support' }),
      messages: [
        {
          id: 'welcome',
          role: 'assistant',
          parts: [{ type: 'text', text: t.aiSupport.welcomeMessage }],
        },
      ],
    });
  }

  const { messages, status, sendMessage, setMessages } = useChat({ chat: chatRef.current });

  const isLoading = status === 'submitted' || status === 'streaming';

  useEffect(() => {
    // Reset welcome message on language change if no other messages
    if (messages.length <= 1) {
       setMessages([
        {
          id: `welcome-${language}`,
          role: 'assistant',
          parts: [{ type: 'text', text: t.aiSupport.welcomeMessage }],
        },
      ]);
    }
  }, [language, t.aiSupport.welcomeMessage, messages.length, setMessages]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handlePromptClick = (prompt: string) => {
    if (isLoading) return;
    void sendMessage({ text: prompt });
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const text = input.trim();
    if (!text || isLoading) {
      return;
    }
    void sendMessage({ text });
    setInput('');
  };

  return (
    <div className="flex flex-col min-h-screen" dir={dir}>
      <Header />

      <div className="flex-1 flex flex-col pt-20 overflow-hidden">
        <div className="px-4 pt-6 pb-2">
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-2xl sm:text-3xl font-bold">{t.aiSupport.title}</h1>
              <Badge variant="secondary" className="gap-2">
                <Sparkles className="h-3.5 w-3.5" />
                {t.aiSupport.poweredBy}
              </Badge>
            </div>
            <p className="text-muted-foreground">{t.aiSupport.subtitle}</p>
            <div className="flex flex-wrap gap-2">
              {t.aiSupport.quickPrompts.map((prompt) => (
                <Button
                  key={prompt}
                  variant="outline"
                  size="sm"
                  className="rounded-full"
                  onClick={() => handlePromptClick(prompt)}
                >
                  {prompt}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-6">
          <div className="max-w-4xl mx-auto space-y-6">
            {messages.map((message) => {
              const isUser = message.role === 'user';
              // Extract text from parts
              const parts = (message.parts ?? []) as unknown[];
              const textParts = parts.filter(isTextPart);
              const hasTextContent = textParts.length > 0;

              return (
                <div
                  key={message.id}
                  className={cn('flex flex-col gap-3', isUser ? 'items-end' : 'items-start')}
                >
                  <div className={cn('flex gap-4 max-w-full', isUser ? 'justify-end' : 'justify-start')}>
                    {!isUser && (
                      <div className="w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center flex-shrink-0 shadow-gold mt-1">
                        <span className="text-sm font-bold text-primary-foreground">AI</span>
                      </div>
                    )}
                    
                    <div className="flex flex-col gap-2 max-w-[90%]">
                      {hasTextContent && (
                        <div
                          className={cn(
                            'rounded-2xl px-4 py-3 text-sm sm:text-base leading-relaxed',
                            isUser
                              ? 'bg-primary text-primary-foreground shadow-gold'
                              : 'bg-card border border-border shadow-sm',
                          )}
                        >
                          {textParts.map((part, idx) => (
                            <p key={idx} className="whitespace-pre-wrap">{part.text}</p>
                          ))}
                        </div>
                      )}

                      {/* Render Tool Parts (Generative UI) */}
                      {parts.filter(isToolPart).map((part, idx) => {
                        // Handle displayServices tool
                        if (part.type === 'tool-displayServices') {
                          if (part.state === 'input-available') {
                            return (
                              <div key={idx} className="w-full">
                                <div className="animate-pulse text-muted-foreground text-sm">
                                  {t.aiSupport.thinking}...
                                </div>
                              </div>
                            );
                          }
                          const serviceIds = part.state === 'output-available' ? getServiceIds(part.output) : null;
                          if (serviceIds) {
                            return (
                              <div key={idx} className="w-full">
                                <ServicesDisplay serviceIds={serviceIds} />
                              </div>
                            );
                          }
                        }

                        // Handle displayWhyChooseUs tool
                        if (part.type === 'tool-displayWhyChooseUs') {
                          if (part.state === 'input-available') {
                            return (
                              <div key={idx} className="w-full">
                                <div className="animate-pulse text-muted-foreground text-sm">
                                  {t.aiSupport.thinking}...
                                </div>
                              </div>
                            );
                          }
                          if (part.state === 'output-available' && getShowFlag(part.output)) {
                            return (
                              <div key={idx} className="w-full">
                                <WhyChooseUs />
                              </div>
                            );
                          }
                        }

                        return null;
                      })}
                    </div>

                    {isUser && (
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-sm font-medium">You</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {isLoading && messages[messages.length - 1]?.role === 'user' && (
              <div className="flex flex-col gap-3 items-start">
                <div className="flex gap-4">
                  <Skeleton className="w-10 h-10 rounded-full" />
                  <div className="rounded-2xl border border-border bg-card px-4 py-3 w-[70%]">
                    <Skeleton className="h-4 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-1/2" />
                    <p className="text-xs text-muted-foreground mt-3 animate-pulse">{t.aiSupport.thinking}</p>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>

        <div className="border-t border-border bg-background/80 backdrop-blur-lg px-4 py-4">
          <form onSubmit={handleFormSubmit} className="max-w-4xl mx-auto space-y-3">
            <div className="flex gap-3">
              <Input
                value={input ?? ''}
                onChange={(event) => setInput(event.target.value)}
                placeholder={t.aiSupport.placeholder}
                className="flex-1 rounded-xl h-12 bg-background/50"
                disabled={isLoading}
              />
              <Button
                type="submit"
                size="icon"
                className="w-12 h-12 rounded-xl shadow-gold"
                disabled={isLoading || !input?.trim()}
              >
                {isLoading ? (
                  <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AISupport;
