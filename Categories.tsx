

interface CategoriesProps {
  onSelect: (category: string) => void;
}

const categoriesData = [
  { name: "Cottagecore", desc: "soft, slow, green" },
  { name: "Dark Academia", desc: "books, brass, autumn" },
  { name: "Coquette", desc: "ribbons, blush, light" },
  { name: "Y2K", desc: "chrome, neon, nostalgia" },
  { name: "Minimalist", desc: "white, quiet, clean" },
  { name: "Maximalist", desc: "loud, layered, bold" },
  { name: "Coastal Grandmother", desc: "linen, lemons, breeze" },
  { name: "Indie Sleaze", desc: "grain, smoke, late nights" }
];

export function Categories({ onSelect }: CategoriesProps) {
  return (
    <section className="categories-section section-padding">
      <h2 className="serif" style={{fontSize: '2.5rem', marginBottom: '1rem'}}>Not sure? Start here.</h2>
      <div className="categories-grid">
        {categoriesData.map((cat, idx) => (
          <div 
            key={idx} 
            className="category-card border-thin-bottom border-thin-top"
            onClick={() => {
              onSelect(cat.name);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <h4 className="category-title serif">{cat.name}</h4>
            <p className="small-caps" style={{color: '#666'}}>· {cat.desc} ·</p>
          </div>
        ))}
      </div>
    </section>
  );
}
