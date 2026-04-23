window.FeaturedArticle = function FeaturedArticle({ lang }) {
  const a = window.FEATURED_ARTICLE;
  if (!a) return null;
  const [copied, setCopied] = React.useState(false);

  const eyebrow = lang==='es' ? a.eyebrow_es : a.eyebrow_en;
  const title   = lang==='es' ? a.title_es   : a.title_en;
  const abs     = lang==='es' ? a.abstract_es: a.abstract_en;

  // Resolve paths relative to ui_kits/website/index.html (../../ from there)
  const prefix = '../../';
  const pdfHref = a.pdf      ? prefix + a.pdf      : null;
  const slug = value => value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
  const shortSlug = value => slug(value).split('_').filter(Boolean).slice(0, 3).join('_');
  const imgCandidates = [
    a.abstract ? prefix + a.abstract : null,
    `img/miniatures/${shortSlug(title)}.png`,
    `img/miniatures/${slug(title)}.png`,
  ].filter(Boolean);

  // If the image fails to load (file not uploaded yet), fall back to placeholder.
  const [imgIndex, setImgIndex] = React.useState(0);
  const showImg = imgCandidates[imgIndex];
  const citation = `${a.authors.map(au => au.name).join(', ')} (${a.year}). ${title}. ${a.venue}${a.doi ? `. doi:${a.doi}` : ''}`;
  const copyCitation = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(citation).then(() => {
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1800);
      });
    } else {
      window.prompt(lang==='es'?'Copiar cita':'Copy citation', citation);
    }
  };

  return (
    <section className="featured-article" style={faStyles.wrap}>
      <style>{`
        @media (max-width: 920px) {
          .featured-article-banner { grid-template-columns: 1fr !important; gap: 28px !important; }
          .featured-article-figure { min-height: 280px !important; }
        }
        @media (max-width: 680px) {
          .featured-article { padding: 36px 22px 12px !important; }
          .featured-article-masthead { align-items: flex-start; flex-direction: column; gap: 6px; }
          .featured-article-title { font-size: 30px !important; }
          .featured-article-ctas { flex-wrap: wrap; }
        }
      `}</style>
      <div className="featured-article-masthead" style={faStyles.masthead}>
        <span style={{fontWeight:600, color:'var(--fg)'}}>{eyebrow}</span>
        <span>{a.year} · {a.venue}</span>
      </div>
      <div className="featured-article-banner" style={faStyles.banner}>
        <div className="featured-article-figure" style={faStyles.figure}>
          {showImg ? (
            <img
              src={showImg}
              alt=""
              style={faStyles.img}
              onError={() => setImgIndex(current => current + 1)}
            />
          ) : (
            <div style={faStyles.placeholder}>
              <div style={faStyles.phLabel}>GRAPHICAL ABSTRACT</div>
              <div style={faStyles.phHint}>
                {lang==='es'
                  ? 'Colocar imagen en pappers/graphical-abstract.png'
                  : 'Place image at pappers/graphical-abstract.png'}
              </div>
            </div>
          )}
          <div style={faStyles.figCap}>
            <span style={faStyles.figNum}>Fig. — {lang==='es'?'Abstract gráfico':'Graphical abstract'}</span>
          </div>
        </div>

        <div style={faStyles.body}>
          <div style={faStyles.pill}>
            <span style={faStyles.pillDot} />
            {lang==='es'?'Publicado':'Published'} · {a.year}
          </div>

          <h2 className="featured-article-title" style={faStyles.title}>{title}</h2>

          <div style={faStyles.authors}>
            {a.authors.map((au, i) => (
              <span key={i} style={faStyles.author}>
                <span style={faStyles.authorName}>{au.name}</span>
                <span style={faStyles.authorRole}>{au.role}</span>
                {i < a.authors.length - 1 && <span style={faStyles.sep}>·</span>}
              </span>
            ))}
          </div>

          <p style={faStyles.abstract}>{abs}</p>

          <div style={faStyles.meta}>
            <span style={faStyles.venue}>{a.venue}</span>
            {a.doi   && <><span style={faStyles.dot}>·</span><span>doi:{a.doi}</span></>}
            {a.arxiv && <><span style={faStyles.dot}>·</span><span>arXiv:{a.arxiv}</span></>}
          </div>

          <div className="featured-article-ctas" style={faStyles.ctas}>
            {pdfHref && (
              <a href={pdfHref} target="_blank" rel="noopener" style={faStyles.primary}>
                {lang==='es'?'Leer PDF':'Read PDF'} <span style={{marginLeft:8}}>↗</span>
              </a>
            )}
            <button type="button" onClick={copyCitation} style={faStyles.ghostButton}>
              {copied ? (lang==='es'?'Cita copiada':'Citation copied') : (lang==='es'?'Copiar cita':'Copy citation')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const faStyles = {
  wrap: { padding:'56px 48px 24px', maxWidth:1280, margin:'0 auto' },
  masthead: {
    borderTop:'3px double var(--rule)', borderBottom:'1px solid var(--rule)',
    padding:'8px 0', display:'flex', justifyContent:'space-between',
    fontFamily:'var(--font-sans)', fontSize:11, letterSpacing:'0.14em',
    textTransform:'uppercase', color:'var(--fg-muted)', marginBottom:28,
  },
  banner: {
    display:'grid', gridTemplateColumns:'1.1fr 1fr', gap:48,
    alignItems:'stretch',
  },
  figure: {
    background:'var(--navy-900)', border:'1px solid var(--navy-800)',
    position:'relative', minHeight:380, overflow:'hidden', borderRadius:2,
    display:'flex', flexDirection:'column',
  },
  img: { width:'100%', height:'100%', objectFit:'cover', flex:1, display:'block' },
  placeholder: {
    flex:1, display:'flex', flexDirection:'column', alignItems:'center',
    justifyContent:'center', gap:10, color:'#a8b3d1', textAlign:'center', padding:32,
  },
  phLabel: {
    fontFamily:'var(--font-sans)', fontSize:11, fontWeight:600,
    letterSpacing:'0.18em', color:'#7a87aa',
  },
  phHint: {
    fontFamily:'var(--font-serif)', fontStyle:'italic', fontSize:14, color:'#a8b3d1',
  },
  figCap: {
    padding:'10px 14px', borderTop:'1px solid var(--navy-700)',
    background:'var(--navy-950)',
  },
  figNum: {
    fontFamily:'var(--font-sans)', fontSize:10, letterSpacing:'0.14em',
    textTransform:'uppercase', color:'#a8b3d1',
  },
  body: { display:'flex', flexDirection:'column', justifyContent:'center' },
  pill: {
    display:'inline-flex', alignItems:'center', gap:8, alignSelf:'flex-start',
    padding:'4px 10px 4px 8px', border:'1px solid var(--border)', borderRadius:999,
    fontFamily:'var(--font-sans)', fontSize:10, fontWeight:600,
    letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--fg-muted)',
    marginBottom:18,
  },
  pillDot: { width:6, height:6, borderRadius:'50%', background:'#0a7a3e' },
  title: {
    fontFamily:'var(--font-serif)', fontSize:36, fontWeight:500, lineHeight:1.15,
    letterSpacing:'-0.015em', color:'var(--fg)', margin:'0 0 18px',
  },
  authors: { display:'flex', flexWrap:'wrap', gap:6, marginBottom:18, alignItems:'baseline' },
  author: { display:'inline-flex', alignItems:'baseline', gap:6 },
  authorName: { fontFamily:'var(--font-serif)', fontStyle:'italic', fontSize:16, color:'var(--fg)' },
  authorRole: {
    fontFamily:'var(--font-sans)', fontSize:9, fontWeight:600,
    letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--fg-muted)',
  },
  sep: { color:'var(--fg-faint)', marginLeft:2 },
  abstract: {
    fontFamily:'var(--font-serif)', fontSize:17, lineHeight:1.6,
    color:'var(--fg)', margin:'0 0 20px', maxWidth:'50ch',
  },
  meta: {
    display:'flex', flexWrap:'wrap', gap:8, alignItems:'center',
    fontFamily:'var(--font-mono)', fontSize:12, color:'var(--fg-muted)',
    paddingBottom:18, marginBottom:18, borderBottom:'1px solid var(--border)',
  },
  venue: { color:'var(--fg)' },
  dot: { color:'var(--fg-faint)' },
  ctas: { display:'flex', gap:16, alignItems:'center' },
  primary: {
    fontFamily:'var(--font-sans)', fontSize:13, fontWeight:500,
    padding:'10px 18px', background:'var(--accent)', color:'#fff',
    border:'1px solid var(--accent)', borderRadius:4,
    textDecoration:'none', display:'inline-flex', alignItems:'center',
    whiteSpace:'nowrap',
  },
  ghost: {
    fontFamily:'var(--font-sans)', fontSize:13, fontWeight:500,
    padding:'10px 4px', color:'var(--fg)', textDecoration:'none',
    borderBottom:'1px solid var(--fg)',
    whiteSpace:'nowrap',
  },
  ghostButton: {
    fontFamily:'var(--font-sans)', fontSize:13, fontWeight:500,
    padding:'10px 4px', color:'var(--fg)', background:'transparent',
    border:'none', borderBottom:'1px solid var(--fg)',
    whiteSpace:'nowrap', cursor:'pointer',
  },
};
