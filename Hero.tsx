
import { Mic, ArrowRight } from './Icons';

interface HeroProps {
  heroInput: string;
  setHeroInput: (val: string) => void;
  isListening: boolean;
  handleMicToggle: () => void;
  isGenerating: boolean;
  handleGenerate: () => void;
}

export function Hero({ heroInput, setHeroInput, isListening, handleMicToggle, isGenerating, handleGenerate }: HeroProps) {
  return (
    <section className="hero-section section-padding">
      <h1 className="hero-title serif">What's your vibe today?</h1>
      <p className="hero-subtitle sans">Describe your mood. Get a moodboard built around it — visuals, sounds, fits, and feelings.</p>
      
      <div className="input-wrapper">
        <input 
          type="text" 
          className="mood-input" 
          placeholder={isListening ? "Listening..." : "rainy sunday, slow coffee, quiet corners…"}
          value={heroInput}
          onChange={(e) => setHeroInput(e.target.value)}
        />
        <button 
          className={`mic-btn ${isListening ? 'mic-pulse' : ''}`}
          onClick={handleMicToggle}
          style={{ color: isListening ? 'var(--coral)' : '' }}
        >
          <Mic size={20} />
        </button>
      </div>
      
      <button className="cta-btn coral-text" onClick={handleGenerate}>
        {isGenerating ? (
          <>Curating your vibe <span className="loader"></span></>
        ) : (
          <>Build my moodboard <ArrowRight size={18} /></>
        )}
      </button>
    </section>
  );
}
