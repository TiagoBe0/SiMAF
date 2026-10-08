// Carrusel de nuevas publicaciones: muestra de a una las entradas de
// window.NEWS_PAPERS (pappers/novedades.js) en formato card.
function NewsCarouselImage({ paper, index }) {
  const [failed, setFailed] = React.useState(false);
  React.useEffect(() => setFailed(false), [paper.image]);
  const hue = (index * 60 + 210) % 360;
  if (paper.image && !failed) {
    return <img src={paper.image} alt="" style={ncStyles.img} onError={() => setFailed(true)} />;
  }
  return (
    <svg viewBox="-50 -50 100 100" style={ncStyles.placeholder} aria-hidden="true">
      {Array.from({ length: 36 }, (_, k) => {
        const a = (k / 36) * 2 * Math.PI;
        const r = 30 + 8 * Math.sin(3 * a + index);
        return <circle key={k} cx={r * Math.cos(a)} cy={r * Math.sin(a)} r={2.4}
                       fill={`hsl(${(k * 10 + hue) % 360} 85% 58%)`} />;
      })}
    </svg>
  );
}

window.NewsCarousel = function NewsCarousel({ lang }) {
  const papers = window.NEWS_PAPERS || [];
  const [current, setCurrent] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const count = papers.length;

  React.useEffect(() => {
    if (paused || count < 2) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setInterval(() => setCurrent(i => (i + 1) % count), 7000);
    return () => window.clearInterval(id);
  }, [paused, count]);

  if (!count) return null;
  const p = papers[current];
  const abstract = lang === 'es' ? p.abstract_es : p.abstract_en;
  const go = step => setCurrent(i => (i + step + count) % count);

  return (
    <aside className="news-carousel" style={ncStyles.wrap}
           onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
           onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}
           aria-roledescription="carousel"
           aria-label={lang === 'es' ? 'Nuevas publicaciones' : 'New publications'}>
      <style>{`
        @keyframes simaf-news-in {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes simaf-news-float {
          0%, 100% { transform: translateY(0) rotate(-0.35deg); }
          50% { transform: translateY(-14px) rotate(0.35deg); }
        }
        @keyframes simaf-news-shadow {
          0%, 100% { transform: scaleX(1); opacity: .32; }
          50% { transform: scaleX(.82); opacity: .16; }
        }
        .news-carousel-float { animation: simaf-news-float 6.5s ease-in-out infinite; will-change: transform; }
        .news-carousel-shadow { animation: simaf-news-shadow 6.5s ease-in-out infinite; }
        .news-carousel:hover .news-carousel-float,
        .news-carousel:hover .news-carousel-shadow { animation-play-state: paused; }
        .news-carousel-card { animation: simaf-news-in .45s ease both; }
        .news-carousel-btn:hover { border-color: var(--fg, #0c0f1a) !important; color: var(--fg, #0c0f1a) !important; }
        .news-carousel-link:hover { text-decoration: underline; }
        @media (prefers-reduced-motion: reduce) {
          .news-carousel-card, .news-carousel-float, .news-carousel-shadow { animation: none; }
        }
      `}</style>
      <div style={ncStyles.head}>
        <span style={{fontWeight:600, color:'var(--fg, #0c0f1a)'}}>{lang === 'es' ? 'Nuevas publicaciones' : 'New publications'}</span>
        <span>{String(current + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}</span>
      </div>
      <div style={ncStyles.stage}>
      <div className="news-carousel-float">
      <article key={current} className="news-carousel-card" style={ncStyles.card}
               aria-roledescription="slide" aria-live={paused ? 'polite' : 'off'}>
        <div style={ncStyles.figure}>
          <NewsCarouselImage paper={p} index={current} />
        </div>
        <div style={ncStyles.body}>
          <div style={ncStyles.meta}>{p.venue} · {p.year}</div>
          <h3 style={ncStyles.title}>{p.title}</h3>
          {p.authors && <div style={ncStyles.authors}>{p.authors}</div>}
          {abstract && <p style={ncStyles.abstract}>{abstract}</p>}
          {p.url && (
            <a className="news-carousel-link" href={p.url} target="_blank" rel="noopener" style={ncStyles.link}>
              {lang === 'es' ? 'Leer artículo ↗' : 'Read article ↗'}
            </a>
          )}
        </div>
      </article>
      </div>
      <div className="news-carousel-shadow" style={ncStyles.shadow} aria-hidden="true" />
      </div>
      {count > 1 && (
        <div style={ncStyles.controls}>
          <button type="button" className="news-carousel-btn" style={ncStyles.btn} onClick={() => go(-1)}
                  aria-label={lang === 'es' ? 'Anterior' : 'Previous'}>←</button>
          <div style={ncStyles.dots}>
            {papers.map((_, i) => (
              <button key={i} type="button" onClick={() => setCurrent(i)}
                      aria-label={`${i + 1}`} aria-current={i === current}
                      style={{...ncStyles.dot, background: i === current ? 'var(--fg, #0c0f1a)' : 'var(--border-strong, #c5cad8)', width: i === current ? 18 : 6}} />
            ))}
          </div>
          <button type="button" className="news-carousel-btn" style={ncStyles.btn} onClick={() => go(1)}
                  aria-label={lang === 'es' ? 'Siguiente' : 'Next'}>→</button>
        </div>
      )}
    </aside>
  );
};

const ncStyles = {
  wrap: { position:'sticky', top:96, display:'flex', flexDirection:'column', gap:16 },
  head: { borderTop:'3px double var(--rule, #0c0f1a)', borderBottom:'1px solid var(--rule, #0c0f1a)', padding:'8px 0', display:'flex', justifyContent:'space-between', gap:12, fontFamily:'var(--font-sans, Inter, system-ui, sans-serif)', fontSize:11, letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--fg-muted, #4a5578)' },
  stage: { padding:'6px 4px 0' },
  shadow: { height:14, margin:'18px 8% 0', borderRadius:'50%', background:'radial-gradient(ellipse at center, rgba(15,53,111,0.55) 0%, rgba(15,53,111,0) 70%)' },
  card: { border:'1px solid var(--border, #e3e6ee)', borderRadius:10, overflow:'hidden', background:'var(--bg-elev-1, #ffffff)', boxShadow:'0 24px 48px -26px rgba(15,53,111,0.55)' },
  figure: { aspectRatio:'16 / 10', background:'var(--navy-900, #00173c)', display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden' },
  img: { width:'100%', height:'100%', objectFit:'contain', display:'block', background:'#fff' },
  placeholder: { width:'62%', height:'62%' },
  body: { padding:'24px 28px 28px', display:'flex', flexDirection:'column', gap:8 },
  meta: { fontFamily:'var(--font-mono, ui-monospace, monospace)', fontSize:12, color:'var(--fg-muted, #4a5578)' },
  title: { fontFamily:'var(--font-serif, Georgia, serif)', fontSize:26, fontWeight:500, lineHeight:1.2, color:'var(--fg, #0c0f1a)', margin:0 },
  authors: { fontFamily:'var(--font-serif, Georgia, serif)', fontStyle:'italic', fontSize:15, color:'var(--fg-muted, #4a5578)' },
  abstract: { fontFamily:'var(--font-serif, Georgia, serif)', fontSize:17, lineHeight:1.5, color:'var(--fg, #0c0f1a)', margin:'6px 0 0', display:'-webkit-box', WebkitLineClamp:7, WebkitBoxOrient:'vertical', overflow:'hidden' },
  link: { marginTop:4, fontFamily:'var(--font-sans, Inter, system-ui, sans-serif)', fontSize:12, fontWeight:600, color:'var(--accent, #0050f0)', textDecoration:'none', alignSelf:'flex-start' },
  controls: { display:'flex', alignItems:'center', justifyContent:'space-between', gap:12 },
  btn: { width:36, height:36, borderRadius:'50%', border:'1px solid var(--border-strong, #c5cad8)', background:'transparent', color:'var(--fg-muted, #4a5578)', cursor:'pointer', fontSize:16, lineHeight:1, transition:'border-color .2s, color .2s' },
  dots: { display:'flex', gap:6, alignItems:'center', flexWrap:'wrap', justifyContent:'center' },
  dot: { height:6, borderRadius:3, border:0, padding:0, cursor:'pointer', transition:'width .25s ease, background .25s ease' },
};
