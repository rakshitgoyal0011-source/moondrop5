import { useRef, useEffect } from 'react';
import { Send } from './Icons';

interface MuseChatProps {
  chatMessages: { sender: 'user' | 'muse', text: string }[];
  chatInput: string;
  setChatInput: (val: string) => void;
  handleChatSubmit: (e?: React.FormEvent) => void;
}

export function MuseChat({ chatMessages, chatInput, setChatInput, handleChatSubmit }: MuseChatProps) {
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  return (
    <section className="muse-section">
      <div className="muse-left">
        <h2 className="muse-title serif">Talk to Muse.</h2>
        <p className="muse-desc sans">
          Muse is your AI aesthetic companion. Tell her about your day, your playlist, your weather — she'll evolve your moodboard with you.
        </p>
      </div>
      <div className="muse-right">
        <div className="chat-mockup">
          <div className="chat-messages">
            {chatMessages.map((msg, i) => (
              <div key={i} className={`chat-msg ${msg.sender === 'user' ? 'msg-user' : 'msg-muse'}`}>
                <span className="msg-label small-caps" style={{ alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}>
                  {msg.sender === 'user' ? 'You' : 'Muse'}
                </span>
                <div className={`msg-bubble ${msg.sender === 'user' ? 'sans' : ''}`}>{msg.text}</div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <form className="chat-input-wrapper" onSubmit={handleChatSubmit}>
            <input 
              type="text" 
              className="chat-input"
              placeholder="tell muse how you feel..."
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
            />
            <button type="submit" className="chat-send-btn"><Send size={18} /></button>
          </form>
        </div>
      </div>
    </section>
  );
}
