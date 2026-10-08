// Carrusel de nuevas publicaciones: muestra de a una las entradas de
// window.NEWS_PAPERS (pappers/novedades.js) en formato card.
function NewsCarouselImage({ paper, index }) {
  const [failed, setFailed] = React.useState(false);
  React.useEffect(() => setFailed(false), [paper.image]);
  const hue = (index * 60 + 210) % 360;
  if (paper.image && !failed) {
    return <img src={`../../${paper.image}`} alt="" style={ncStyles.img} onError={() => setFailed(true)} />;
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
        .news-carousel-card { animation: simaf-news-in .45s ease both; }
        .news-carousel-btn:hover { border-color: var(--fg) !important; color: var(--fg) !important; }
        .news-carousel-link:hover { text-decoration: underline; }
        @media (prefers-reduced-motion: reduce) {
          .news-carousel-card { animation: none; }
        }
      `}</style>
      <div style={ncStyles.head}>
        <span style={{fontWeight:600, color:'var(--fg)'}}>{lang === 'es' ? 'Nuevas publicaciones' : 'New publications'}</span>
        <span>{String(current + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}</span>
      </div>
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
      {count > 1 && (
        <div style={ncStyles.controls}>
          <button type="button" className="news-carousel-btn" style={ncStyles.btn} onClick={() => go(-1)}
                  aria-label={lang === 'es' ? 'Anterior' : 'Previous'}>←</button>
          <div style={ncStyles.dots}>
            {papers.map((_, i) => (
              <button key={i} type="button" onClick={() => setCurrent(i)}
                      aria-label={`${i + 1}`} aria-current={i === current}
                      style={{...ncStyles.dot, background: i === current ? 'var(--fg)' : 'var(--border-strong)', width: i === current ? 18 : 6}} />
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
  head: { borderTop:'3px double var(--rule)', borderBottom:'1px solid var(--rule)', padding:'8px 0', display:'flex', justifyContent:'space-between', gap:12, fontFamily:'var(--font-sans)', fontSize:11, letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--fg-muted)' },
  card: { border:'1px solid var(--border)', borderRadius:6, overflow:'hidden', background:'var(--bg-elev-1)', boxShadow:'0 14px 30px -22px rgba(15,53,111,0.45)' },
  figure: { aspectRatio:'16 / 10', background:'var(--navy-900)', display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden' },
  img: { width:'100%', height:'100%', objectFit:'contain', display:'block', background:'#fff' },
  placeholder: { width:'62%', height:'62%' },
  body: { padding:'18px 20px 20px', display:'flex', flexDirection:'column', gap:8 },
  meta: { fontFamily:'var(--font-mono)', fontSize:11, color:'var(--fg-muted)' },
  title: { fontFamily:'var(--font-serif)', fontSize:20, fontWeight:500, lineHeight:1.25, color:'var(--fg)', margin:0 },
  authors: { fontFamily:'var(--font-serif)', fontStyle:'italic', fontSize:14, color:'var(--fg-muted)' },
  abstract: { fontFamily:'var(--font-serif)', fontSize:15, lineHeight:1.5, color:'var(--fg)', margin:'4px 0 0', display:'-webkit-box', WebkitLineClamp:6, WebkitBoxOrient:'vertical', overflow:'hidden' },
  link: { marginTop:4, fontFamily:'var(--font-sans)', fontSize:12, fontWeight:600, color:'var(--accent)', textDecoration:'none', alignSelf:'flex-start' },
  controls: { display:'flex', alignItems:'center', justifyContent:'space-between', gap:12 },
  btn: { width:36, height:36, borderRadius:'50%', border:'1px solid var(--border-strong)', background:'transparent', color:'var(--fg-muted)', cursor:'pointer', fontSize:16, lineHeight:1, transition:'border-color .2s, color .2s' },
  dots: { display:'flex', gap:6, alignItems:'center', flexWrap:'wrap', justifyContent:'center' },
  dot: { height:6, borderRadius:3, border:0, padding:0, cursor:'pointer', transition:'width .25s ease, background .25s ease' },
};
