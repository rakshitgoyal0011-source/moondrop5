

export function SaveEvolve() {
  return (
    <section className="evolve-section">
      <div className="evolve-left">
        <h2 className="muse-title serif">Boards that grow with you.</h2>
        <p className="muse-desc sans" style={{maxWidth: '500px'}}>
          Muse re-curates your moodboard daily based on weather, time of day, and listening history. Your aesthetic isn't static. It breathes.
        </p>
      </div>
      <div className="evolve-right">
        <div className="evolve-mockup">
          <div className="evolve-card">
            <span className="small-caps">Day 1: Rainy</span>
            <img src="https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&q=80&w=300" alt="day 1" />
          </div>
          <div className="evolve-card">
            <span className="small-caps">Day 2: Overcast</span>
            <img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=300" alt="day 2" />
          </div>
        </div>
      </div>
    </section>
  );
}
