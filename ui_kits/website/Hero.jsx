window.Hero = function Hero({ lang }) {
  const copy = {
    es: {
      eye: 'SiMAF · Universidad de Mendoza',
      badge: 'Universidad de Mendoza · Mendoza, Argentina',
      h: 'Simulaciones en Materiales, Astrofísica y Física',
      lead: 'Centro de investigación dedicado al desarrollo y aplicación de métodos computacionales avanzados para el estudio de fenómenos físicos mediante simulaciones de dinámica molecular, cálculos ab initio y algoritmos de alto rendimiento en arquitecturas paralelas.',
    },
    en: {
      eye: 'SiMAF · Universidad de Mendoza',
      badge: 'Universidad de Mendoza · Mendoza, Argentina',
      h: 'Simulations in Materials, Astrophysics & Physics',
      lead: 'Research center dedicated to developing and applying advanced computational methods for the study of physical phenomena through molecular dynamics simulations, ab initio calculations, and high-performance algorithms on parallel architectures.',
    },
  }[lang];

  return (
    <section className="hero-wrap" style={heroStyles.wrap}>
      <style>{`
        @keyframes simaf-stat-gold {
          0%, 100% { color: var(--fg); transform: translateY(0); text-shadow: none; }
          45% { color: #b88918; transform: translateY(-8px); text-shadow: 0 8px 22px rgba(184, 137, 24, 0.28); }
          70% { color: #f0c828; transform: translateY(3px); text-shadow: 0 6px 18px rgba(240, 200, 40, 0.22); }
        }
        @keyframes simaf-stat-label-gold {
          0%, 100% { color: var(--fg-muted); transform: translateY(0); }
          45% { color: #9a6a00; transform: translateY(-4px); }
          70% { color: #b88918; transform: translateY(2px); }
        }
        @media (max-width: 900px) {
          .hero-intro { flex-direction: column; gap: 28px !important; }
          .hero-media { width: min(62vw, 320px) !important; }
        }
        @media (max-width: 680px) {
          .hero-wrap { padding: 44px 22px 48px !important; }
          .hero-masthead { align-items: flex-start; flex-direction: column; gap: 6px; }
          .hero-lead { font-size: 19px !important; }
          .hero-stats { display: grid !important; grid-template-columns: repeat(3, 1fr); gap: 14px !important; }
          .hero-stat-number { font-size: 28px !important; }
          .hero-stat-label { font-size: 9px !important; }
        }
      `}</style>
      <div className="hero-masthead" style={heroStyles.masthead}>
        <span>{copy.eye}</span><span>{copy.badge}</span>
      </div>
      <div className="hero-intro" style={heroStyles.intro}>
        <div style={heroStyles.copy}>
          <h1 style={heroStyles.h}>{copy.h}</h1>
          <p className="hero-lead" style={heroStyles.lead}>{copy.lead}</p>
        </div>
        <video
          className="hero-media"
          style={heroStyles.heroMedia}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Simulación atomística SiMAF"
        >
          <source src="img/simaf_web.mp4" type="video/mp4" />
          <source src="../../img/simaf_web.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="hero-stats" style={heroStyles.stats}>
        {[
          ['15+', lang==='es'?'Años':'Years'],
          ['100+', lang==='es'?'Publicaciones':'Publications'],
          ['30+', lang==='es'?'Colaboraciones int.':'Int. collaborations'],
        ].map(([n, label], i) => (
          <div key={n} style={{...heroStyles.stat, animationDelay:`${i * 420}ms`}}>
            <div className="hero-stat-number" style={{...heroStyles.statN, animationDelay:`${i * 420}ms`}}>{n}</div>
            <div className="hero-stat-label" style={{...heroStyles.statL, animationDelay:`${i * 420 + 120}ms`}}>{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

const heroStyles = {
  wrap: { position:'relative', padding:'80px 48px 72px', maxWidth:1280, margin:'0 auto' },
  masthead: { borderTop:'3px double var(--rule)', borderBottom:'1px solid var(--rule)', padding:'8px 0', display:'flex', justifyContent:'space-between', fontFamily:'var(--font-sans)', fontSize:11, letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--fg-muted)' },
  intro: { display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap:40, margin:'40px 0 36px' },
  copy: { flex:'1 1 680px', minWidth:0 },
  h: { fontFamily:'var(--font-serif)', fontSize:'clamp(40px, 5.2vw, 68px)', fontWeight:500, lineHeight:1.08, letterSpacing:'-0.02em', color:'var(--fg)', margin:'0 0 28px', maxWidth:'20ch' },
  lead: { fontFamily:'var(--font-serif)', fontStyle:'italic', fontSize:22, lineHeight:1.55, color:'var(--fg-muted)', maxWidth:'62ch', margin:0 },
  heroMedia: { display:'block', width:'min(31vw, 360px)', minWidth:220, aspectRatio:'1 / 1', objectFit:'cover', overflow:'hidden', borderRadius:170, border:'1px solid var(--border)', boxShadow:'0 14px 30px rgba(15,53,111,0.18)' },
  stats: { display:'flex', gap:40, marginBottom:0 },
  stat: { display:'inline-block' },
  statN: { fontFamily:'var(--font-serif)', fontSize:36, fontWeight:500, color:'var(--fg)', lineHeight:1, display:'inline-block', animation:'simaf-stat-gold 4.8s ease-in-out infinite' },
  statL: { fontFamily:'var(--font-sans)', fontSize:11, letterSpacing:'0.12em', textTransform:'uppercase', color:'var(--fg-muted)', marginTop:6, display:'block', animation:'simaf-stat-label-gold 4.8s ease-in-out infinite' },
};
