
import { ArrowUpRight } from './Icons';

export function Footer() {
  return (
    <>
      <section className="final-cta section-padding">
        <h2 className="final-title serif">Feelings, but visualized.</h2>
        <p className="sans" style={{fontSize: '1.2rem', color: '#555'}}>Moodboard is free. Start with how you feel today.</p>
        <button 
          className="cta-btn coral-text" 
          style={{fontSize: '1.3rem', marginTop: '1rem'}}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Build your first board <ArrowUpRight size={24} />
        </button>
      </section>

      <footer className="footer border-thin-top">
        <div className="serif" style={{fontSize: '1.5rem'}}>moodboard.</div>
        <div className="footer-links small-caps">
          <a href="#">Manifesto</a>
          <a href="#">Press</a>
          <a href="#">Instagram</a>
          <a href="#">Pinterest</a>
        </div>
      </footer>
    </>
  );
}
