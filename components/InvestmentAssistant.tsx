
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { MessageCircle, Send, User, Bot, Loader2 } from 'lucide-react';
import { ChatMessage } from '../types';

const InvestmentAssistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', content: "Hello! I'm the TGI Digital Assistant. How can I help you explore Zimbabwean gold, diamonds, or investment opportunities today?" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setLoading(true);

    try {
      // Fix: Always initialize GoogleGenAI with a named parameter for the API key from environment variables
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      // Fix: Use ai.models.generateContent directly and move persona to systemInstruction
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: `You are the digital investment concierge for Transcontinental Gems International (TGI), a Zimbabwean gold and diamond trading company.
Facts:
- Based in Zimbabwe.
- Leading gold, diamond, and emerald trader.
- Specialists in custom jewelry.
- We have 200 hectares of mining claims in prime gold belts.
- We seek Joint Ventures with international investors.
- Key assets: Sandawana emeralds, 24K gold, certified diamonds.
- Tone: Professional, high-end, futuristic, encouraging.`,
          temperature: 0.7,
          // Note: Removed maxOutputTokens to avoid potential empty responses caused by missing thinkingBudget
        }
      });

      // Fix: Directly access the .text property (not a method) as per SDK guidelines
      const reply = response.text || "I'm sorry, I'm having trouble connecting right now. Please try again or contact us directly.";
      setMessages(prev => [...prev, { role: 'model', content: reply }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', content: "An error occurred. Our team is available for direct inquiries at +263 123 456 789." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-[600px] glass rounded-[2.5rem] border border-white/10 flex flex-col overflow-hidden shadow-2xl relative">
      {/* Header */}
      <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center border border-yellow-500/30">
            <MessageCircle className="w-5 h-5 text-yellow-500" />
          </div>
          <div>
            <h4 className="font-bold text-sm tracking-tight">TGI Assistant</h4>
            <p className="text-[10px] text-emerald-500 font-bold uppercase tracking-widest">Active • AI Powered</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center border ${msg.role === 'user' ? 'bg-white/10 border-white/20' : 'bg-yellow-500/20 border-yellow-500/30'}`}>
                {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4 text-yellow-500" />}
              </div>
              <div className={`p-4 rounded-2xl text-sm leading-relaxed ${msg.role === 'user' ? 'bg-yellow-500 text-black font-medium' : 'glass border-white/10 text-gray-300'}`}>
                {msg.content}
              </div>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="flex gap-3 items-center">
              <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center border border-yellow-500/30">
                <Loader2 className="w-4 h-4 text-yellow-500 animate-spin" />
              </div>
              <span className="text-xs text-gray-500 italic">Analyzing market data...</span>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-6 border-t border-white/10 bg-white/5">
        <div className="relative flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about joint ventures or gold purity..."
            className="flex-1 bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-yellow-500/50 transition-all"
          />
          <button
            onClick={handleSend}
            disabled={loading || !input.trim()}
            className="p-4 bg-yellow-500 text-black rounded-xl hover:bg-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvestmentAssistant;
