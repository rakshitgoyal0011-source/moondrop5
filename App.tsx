import React, { useState, useRef } from 'react';
import './App.css';

import { Hero } from './components/Hero';
import { LiveMoodboard } from './components/LiveMoodboard';
import { HowItWorks } from './components/HowItWorks';
import { Categories } from './components/Categories';
import { MuseChat } from './components/MuseChat';
import { SaveEvolve } from './components/SaveEvolve';
import { Footer } from './components/Footer';

function getMuseResponse(input: string): string {
  const lower = input.toLowerCase();
  if (lower.includes('rain') || lower.includes('sad')) {
    return "wool textures, gray skies, something acoustic. building it now. want a fit to match — oversized and cozy?";
  }
  if (lower.includes('pretty') || lower.includes('lowkey')) {
    return "got it. soft cream, slow jazz, light through linen curtains. opening your board now.";
  }
  if (lower.includes('movie') || lower.includes('22')) {
    return "indie soundtrack, golden hour, cigarettes you don't actually smoke. one second.";
  }
  if (lower.includes('idk') || lower.includes('weird') || lower.includes('confused')) {
    return "tell me one thing. what's the weather doing where you are?";
  }
  return "i hear that. soft tones, a bit of texture. opening your board now.";
}

function App() {
  const [heroInput, setHeroInput] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  
  const [chatMessages, setChatMessages] = useState<{sender: 'user' | 'muse', text: string}[]>([
    { sender: 'user', text: "i feel lowkey but pretty today" },
    { sender: 'muse', text: "got it. soft cream, jazz, slow lighting. opening your board now…" }
  ]);
  const [chatInput, setChatInput] = useState('');
  
  const previewRef = useRef<HTMLElement>(null);

  const handleMicToggle = () => {
    setIsListening(!isListening);
    if (!isListening) {
      setTimeout(() => {
        setHeroInput(prev => prev ? prev + '... rainy sunday' : 'rainy sunday');
        setIsListening(false);
      }, 2000);
    }
  };

  const handleGenerate = () => {
    if (isGenerating) return;
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      previewRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 1500);
  };

  const handleChatSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!chatInput.trim()) return;

    const userText = chatInput.trim();
    setChatMessages(prev => [...prev, { sender: 'user', text: userText }]);
    setChatInput('');

    setTimeout(() => {
      setChatMessages(prev => [...prev, { sender: 'muse', text: getMuseResponse(userText) }]);
    }, 1000);
  };

  return (
    <div className="app-container">
      <Hero 
        heroInput={heroInput}
        setHeroInput={setHeroInput}
        isListening={isListening}
        handleMicToggle={handleMicToggle}
        isGenerating={isGenerating}
        handleGenerate={handleGenerate}
      />
      
      <LiveMoodboard 
        ref={previewRef}
        heroInput={heroInput}
      />
      
      <HowItWorks />
      
      <Categories 
        onSelect={(cat) => setHeroInput(cat)}
      />
      
      <MuseChat 
        chatMessages={chatMessages}
        chatInput={chatInput}
        setChatInput={setChatInput}
        handleChatSubmit={handleChatSubmit}
      />
      
      <SaveEvolve />
      
      <Footer />
    </div>
  );
}

export default App;
