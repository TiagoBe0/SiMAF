function withSrcFallback(nextSources) {
  return function onImageError(e) {
    const img = e.currentTarget;
    const pending = img.dataset.fallbacks ? img.dataset.fallbacks.split('|') : nextSources.slice();
    const next = pending.shift();
    img.dataset.fallbacks = pending.join('|');
    if (next) img.src = next;
  };
}

window.Footer = function Footer({ lang }) {
  return (
    <footer className="site-footer" style={ftStyles.wrap}>
      <style>{`
        @media (max-width: 820px) {
          .site-footer-inner { grid-template-columns: 1fr !important; gap: 34px !important; }
          .site-footer-cols { grid-template-columns: 1fr !important; gap: 24px !important; }
          .site-footer-rule { align-items: flex-start; flex-direction: column; gap: 8px; }
        }
        @media (max-width: 680px) {
          .site-footer { padding: 48px 22px 28px !important; }
        }
      `}</style>
      <div className="site-footer-inner" style={ftStyles.inner}>
        <div style={ftStyles.brand}>
          <img
            src="img/logo-final.png"
            data-fallbacks="../../img/logo-final.png|/img/logo-final.png|../../assets/logo-final.png|/assets/logo-final.png"
            onError={withSrcFallback(['../../img/logo-final.png', '/img/logo-final.png', '../../assets/logo-final.png', '/assets/logo-final.png'])}
            alt=""
            style={ftStyles.mark}
          />
          <div>
            <div style={ftStyles.wm}>SiMAF</div>
            <div style={ftStyles.sub}>{lang==='es'?'Laboratorio de Simulaciones en Materiales, Astrofísica y Física · Universidad de Mendoza':'Laboratory of Simulations in Materials, Astrophysics & Physics · Universidad de Mendoza'}</div>
          </div>
        </div>
        <div className="site-footer-cols" style={ftStyles.cols}>
          <div>
            <div style={ftStyles.ch}>{lang==='es'?'Contacto':'Contact'}</div>
            <div style={ftStyles.item}><a style={ftStyles.link} href="mailto:simaf@uncu.edu.ar">simaf@uncu.edu.ar</a></div>
            <div style={ftStyles.item}><a style={ftStyles.link} href="mailto:ebringa@mendoza-conicet.gob.ar">ebringa@mendoza-conicet.gob.ar</a></div>
          </div>
          <div>
            <div style={ftStyles.ch}>{lang==='es'?'Dirección':'Address'}</div>
            <div style={ftStyles.item}>Facultad de Ingeniería</div>
            <div style={ftStyles.item}>Universidad de Mendoza, Argentina</div>
          </div>
          <div>
            <div style={ftStyles.ch}>{lang==='es'?'Enlaces':'Links'}</div>
            <div style={ftStyles.itemMuted}>arXiv · {lang==='es'?'pendiente':'pending'}</div>
            <div style={ftStyles.itemMuted}>GitHub · {lang==='es'?'pendiente':'pending'}</div>
            <div style={ftStyles.itemMuted}>ORCID · {lang==='es'?'pendiente':'pending'}</div>
          </div>
        </div>
      </div>
      <div className="site-footer-rule" style={ftStyles.rule}>
        <span>© SiMAF 2019–2026</span>
        <span style={{fontFamily:'var(--font-serif)', fontStyle:'italic'}}>Vol. XII · №04</span>
      </div>
    </footer>
  );
};
const ftStyles = {
  wrap: { background:'var(--navy-900)', color:'#e9edf7', marginTop:80, padding:'64px 48px 32px' },
  inner: { maxWidth:1280, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1.2fr', gap:60 },
  brand: { display:'flex', gap:16, alignItems:'flex-start' },
  mark: { width:56, height:56, objectFit:'cover', borderRadius:'50%' },
  wm: { fontFamily:'var(--font-serif)', fontSize:26, fontWeight:500, color:'#fbf9f4' },
  sub: { fontFamily:'var(--font-serif)', fontStyle:'italic', fontSize:14, color:'#a8b3d1', marginTop:4, maxWidth:'32ch', lineHeight:1.4 },
  cols: { display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:32 },
  ch: { fontFamily:'var(--font-sans)', fontSize:11, fontWeight:600, letterSpacing:'0.14em', textTransform:'uppercase', color:'#a8b3d1', marginBottom:12 },
  item: { fontFamily:'var(--font-sans)', fontSize:13, color:'#e9edf7', marginTop:6 },
  itemMuted: { fontFamily:'var(--font-sans)', fontSize:13, color:'#a8b3d1', marginTop:6 },
  link: { color:'#e9edf7', textDecoration:'none', borderBottom:'1px solid #4d88ff' },
  rule: { maxWidth:1280, margin:'48px auto 0', paddingTop:16, borderTop:'1px solid #0f356f', display:'flex', justifyContent:'space-between', fontFamily:'var(--font-sans)', fontSize:11, letterSpacing:'0.12em', color:'#a8b3d1' },
};
