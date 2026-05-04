import { forwardRef } from 'react';
import { Play } from './Icons';

interface LiveMoodboardProps {
  heroInput: string;
}

export const LiveMoodboard = forwardRef<HTMLElement, LiveMoodboardProps>(({ heroInput }, ref) => {
  return (
    <section className="moodboard-preview-section section-padding" ref={ref}>
      <div className="grid-container">
        <div className="grid-item item-colors">
          <div className="color-swatch" style={{backgroundColor: '#D9D0C1'}}></div>
          <div className="color-swatch" style={{backgroundColor: '#8C8173'}}></div>
          <div className="color-swatch" style={{backgroundColor: '#595147'}}></div>
          <div className="color-swatch" style={{backgroundColor: '#E5634D'}}></div>
          <div className="color-swatch" style={{backgroundColor: '#1A1A1A'}}></div>
        </div>

        <div className="grid-item item-img-large">
          <img src="https://images.unsplash.com/photo-1518002171953-a080ee817e1f?auto=format&fit=crop&q=80&w=1000" alt="linen texture" />
          <span className="item-label small-caps">texture: linen</span>
        </div>

        <div className="grid-item item-img-medium">
          <img src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=600" alt="kyoto" />
          <span className="item-label small-caps">place: kyoto, march</span>
        </div>

        <div className="grid-item item-quote serif italic">
          "{heroInput || 'i feel lowkey but pretty today'}"
        </div>

        <div className="grid-item item-music">
          <div>
            <span className="small-caps">now listening</span>
            <div className="serif italic" style={{marginTop: '0.5rem', fontSize: '1.2rem'}}>ambient · 4 tracks queued</div>
          </div>
          <div className="music-player">
            <button className="play-btn"><Play size={16} fill="currentColor" /></button>
            <div style={{flex: 1, height: '2px', backgroundColor: 'var(--charcoal)'}}></div>
          </div>
        </div>

        <div className="grid-item item-fit">
          <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1}}>
            <img src="https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?auto=format&fit=crop&q=80&w=400" alt="fit top" />
            <img src="https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=400" alt="fit bottom" />
          </div>
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: '0.5rem'}}>
             <span className="small-caps" style={{writingMode: 'vertical-rl', transform: 'rotate(180deg)'}}>daily uniform</span>
          </div>
        </div>
      </div>
    </section>
  );
});
