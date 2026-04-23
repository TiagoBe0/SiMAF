const { useState } = React;

function withSrcFallback(nextSources) {
  return function onImageError(e) {
    const img = e.currentTarget;
    const pending = img.dataset.fallbacks ? img.dataset.fallbacks.split('|') : nextSources.slice();
    const next = pending.shift();
    img.dataset.fallbacks = pending.join('|');
    if (next) img.src = next;
  };
}

window.Header = function Header({ screen, setScreen, lang, setLang }) {
  const nav = [
    { id: 'home', es: 'Inicio', en: 'Home' },
    { id: 'research', es: 'Investigación', en: 'Research' },
    { id: 'publications', es: 'Publicaciones', en: 'Publications' },
    { id: 'people', es: 'Personas', en: 'People' },
    { id: 'network', es: 'Red', en: 'Network' },
    { id: 'collaborations', es: 'Colaboraciones', en: 'Collaborations' },
  ];
  return (
    <header style={headerStyles.bar}>
      <style>{`
        @media (max-width: 980px) {
          .site-header-inner { align-items: flex-start !important; flex-direction: column; gap: 16px !important; padding: 12px 22px !important; }
          .site-header-nav { width: 100%; overflow-x: auto; gap: 20px !important; padding-bottom: 4px; }
          .site-header-nav button { white-space: nowrap; }
        }
      `}</style>
      <div className="site-header-inner" style={headerStyles.inner}>
        <button type="button" onClick={()=>setScreen('home')} style={headerStyles.brand}>
          <img
            src="img/logo-final.png"
            data-fallbacks="../../img/logo-final.png|/img/logo-final.png|../../assets/logo-final.png|/assets/logo-final.png"
            onError={withSrcFallback(['../../img/logo-final.png', '/img/logo-final.png', '../../assets/logo-final.png', '/assets/logo-final.png'])}
            alt=""
            style={headerStyles.mark}
          />
          <div>
            <div style={headerStyles.wm}>SiMAF</div>
            <div style={headerStyles.wmSub}>{lang==='es'?'Universidad de Mendoza':'Universidad de Mendoza'}</div>
          </div>
        </button>
        <nav className="site-header-nav" style={headerStyles.nav}>
          {nav.map(item => (
            <button key={item.id} type="button" onClick={()=>setScreen(item.id)}
               style={{...headerStyles.link, ...(screen===item.id?headerStyles.linkActive:{})}}>
              {item[lang]}
            </button>
          ))}
          <div style={headerStyles.lang}>
            <button onClick={()=>setLang('es')} style={{...headerStyles.langBtn,...(lang==='es'?headerStyles.langOn:{})}}>ES</button>
            <span style={{color:'var(--fg-faint)'}}>·</span>
            <button onClick={()=>setLang('en')} style={{...headerStyles.langBtn,...(lang==='en'?headerStyles.langOn:{})}}>EN</button>
          </div>
        </nav>
      </div>
    </header>
  );
};

const headerStyles = {
  bar: { position:'sticky', top:0, zIndex:10, background:'color-mix(in srgb, var(--bg) 88%, transparent)', backdropFilter:'blur(12px)', borderBottom:'1px solid var(--border)' },
  inner: { maxWidth:1280, margin:'0 auto', padding:'14px 48px', display:'flex', alignItems:'center', justifyContent:'space-between', gap:32 },
  brand: { display:'flex', alignItems:'center', gap:14, border:'none', background:'transparent', padding:0, textAlign:'left', color:'var(--fg)', cursor:'pointer' },
  mark: { width:40, height:40, objectFit:'cover', borderRadius:'50%' },
  wm: { fontFamily:'var(--font-serif)', fontSize:22, fontWeight:500, letterSpacing:'0.02em', lineHeight:1 },
  wmSub: { fontFamily:'var(--font-sans)', fontSize:10, letterSpacing:'0.12em', textTransform:'uppercase', color:'var(--fg-muted)', marginTop:3 },
  nav: { display:'flex', alignItems:'center', gap:28 },
  link: { fontFamily:'var(--font-sans)', fontSize:13, fontWeight:500, color:'var(--fg-muted)', background:'transparent', border:'none', borderBottom:'1px solid transparent', padding:'6px 0', cursor:'pointer', transition:'color 120ms, border-color 120ms' },
  linkActive: { color:'var(--fg)', borderBottomColor:'var(--fg)' },
  lang: { display:'flex', alignItems:'center', gap:6, marginLeft:12, paddingLeft:18, borderLeft:'1px solid var(--border)' },
  langBtn: { background:'none', border:'none', padding:'2px 4px', fontFamily:'var(--font-sans)', fontSize:11, fontWeight:600, letterSpacing:'0.1em', color:'var(--fg-faint)', cursor:'pointer' },
  langOn: { color:'var(--fg)' },
};
