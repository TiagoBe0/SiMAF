window.Hero = function Hero({ lang }) {
  const copy = {
    es: {
      eye: 'SiMAF · Universidad de Mendoza',
      badge: 'Universidad de Mendoza · Mendoza, Argentina',
      h: 'Simulaciones en Materiales, Astrofísica y Física',
      lead: 'Centro de investigación dedicado al desarrollo y aplicación de métodos computacionales avanzados para el estudio de fenómenos físicos mediante simulaciones de dinámica molecular, cálculos ab initio y algoritmos de alto rendimiento en arquitecturas paralelas.',
      cta1: 'Líneas de investigación',
      cta2: 'Publicaciones →',
    },
    en: {
      eye: 'SiMAF · Universidad de Mendoza',
      badge: 'Universidad de Mendoza · Mendoza, Argentina',
      h: 'Simulations in Materials, Astrophysics & Physics',
      lead: 'Research center dedicated to developing and applying advanced computational methods for the study of physical phenomena through molecular dynamics simulations, ab initio calculations, and high-performance algorithms on parallel architectures.',
      cta1: 'Research lines',
      cta2: 'Publications →',
    },
  }[lang];

  return (
    <section style={heroStyles.wrap}>
      <div style={heroStyles.masthead}>
        <span>{copy.eye}</span><span>{copy.badge}</span>
      </div>
      <div style={heroStyles.intro}>
        <div style={heroStyles.copy}>
          <h1 style={heroStyles.h}>{copy.h}</h1>
          <p style={heroStyles.lead}>{copy.lead}</p>
        </div>
        <img src="../../assets/simaf-atom.svg" style={heroStyles.heroGif} alt="Animación científica de SiMAF" loading="lazy" />
      </div>
      <div style={heroStyles.stats}>
        <div style={heroStyles.stat}><div style={heroStyles.statN}>15+</div><div style={heroStyles.statL}>{lang==='es'?'Años':'Years'}</div></div>
        <div style={heroStyles.stat}><div style={heroStyles.statN}>100+</div><div style={heroStyles.statL}>{lang==='es'?'Publicaciones':'Publications'}</div></div>
        <div style={heroStyles.stat}><div style={heroStyles.statN}>9</div><div style={heroStyles.statL}>{lang==='es'?'Investigadores':'Researchers'}</div></div>
        <div style={heroStyles.stat}><div style={heroStyles.statN}>30+</div><div style={heroStyles.statL}>{lang==='es'?'Colaboraciones int.':'Int. collaborations'}</div></div>
      </div>
      <div style={heroStyles.ctas}>
        <button style={heroStyles.primary}>{copy.cta1}</button>
        <button style={heroStyles.ghost}>{copy.cta2}</button>
      </div>
      <img src="../../img/logo-final.png" style={heroStyles.watermark} alt="" />
    </section>
  );
};

const heroStyles = {
  wrap: { position:'relative', padding:'80px 48px 72px', maxWidth:1280, margin:'0 auto', overflow:'hidden' },
  masthead: { borderTop:'3px double var(--rule)', borderBottom:'1px solid var(--rule)', padding:'8px 0', display:'flex', justifyContent:'space-between', fontFamily:'var(--font-sans)', fontSize:11, letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--fg-muted)' },
  intro: { display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap:40, margin:'40px 0 36px' },
  copy: { flex:'1 1 680px', minWidth:0 },
  h: { fontFamily:'var(--font-serif)', fontSize:'clamp(40px, 5.2vw, 68px)', fontWeight:500, lineHeight:1.08, letterSpacing:'-0.02em', color:'var(--fg)', margin:'0 0 28px', maxWidth:'20ch' },
  lead: { fontFamily:'var(--font-serif)', fontStyle:'italic', fontSize:22, lineHeight:1.55, color:'var(--fg-muted)', maxWidth:'62ch', margin:0 },
  heroGif: { width:'min(27vw, 270px)', minWidth:170, height:'auto', borderRadius:18, border:'1px solid var(--border)', boxShadow:'0 14px 30px rgba(15,53,111,0.18)' },
  stats: { display:'flex', gap:40, marginBottom:36 },
  stat: { },
  statN: { fontFamily:'var(--font-serif)', fontSize:36, fontWeight:500, color:'var(--fg)', lineHeight:1 },
  statL: { fontFamily:'var(--font-sans)', fontSize:11, letterSpacing:'0.12em', textTransform:'uppercase', color:'var(--fg-muted)', marginTop:6 },
  ctas: { display:'flex', gap:16, alignItems:'center' },
  primary: { fontFamily:'var(--font-sans)', fontSize:14, fontWeight:500, padding:'12px 22px', background:'var(--accent)', color:'#fff', border:'1px solid var(--accent)', borderRadius:4, cursor:'pointer' },
  ghost: { fontFamily:'var(--font-sans)', fontSize:14, fontWeight:500, padding:'12px 4px', background:'transparent', color:'var(--fg)', border:'none', borderBottom:'1px solid var(--fg)', borderRadius:0, cursor:'pointer' },
  watermark: { position:'absolute', right:-140, top:-60, width:520, height:520, opacity:0.28, pointerEvents:'none', zIndex:-1, borderRadius:'50%' },
};
