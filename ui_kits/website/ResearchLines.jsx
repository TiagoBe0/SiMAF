window.ResearchLines = function ResearchLines({ lang }) {
  const lines = [
    { n:'01', hue:'#f02850', es:{t:'Materiales bajo condiciones extremas', d:'Simulación computacional de materiales sometidos a alta presión, temperatura y deformación mediante dinámica molecular clásica y ab initio.'}, en:{t:'Materials under extreme conditions', d:'Computational simulation of materials under high pressure, temperature, and deformation via classical and ab initio molecular dynamics.'} },
    { n:'02', hue:'#7828c8', es:{t:'Astrofísica computacional', d:'Modelado de procesos astrofísicos: colisiones planetarias, dinámica de granos cósmicos y formación de sistemas planetarios mediante Monte Carlo y N-cuerpos.'}, en:{t:'Computational astrophysics', d:'Modeling of astrophysical processes: planetary collisions, cosmic grain dynamics, and planetary system formation via Monte Carlo and N-body methods.'} },
    { n:'03', hue:'#0050f0', es:{t:'Computación de alto rendimiento', d:'Desarrollo e implementación de algoritmos paralelos optimizados para arquitecturas GPGPU, permitiendo simulaciones de gran escala.'}, en:{t:'High-performance computing', d:'Development and implementation of parallel algorithms optimized for GPGPU architectures, enabling large-scale simulations.'} },
    { n:'04', hue:'#00a050', es:{t:'Nanomateriales y propiedades mecánicas', d:'Caracterización computacional de propiedades mecánicas, térmicas y estructurales de materiales a escala nanométrica.'}, en:{t:'Nanomaterials and mechanical properties', d:'Computational characterization of mechanical, thermal, and structural properties of materials at the nanoscale.'} },
    { n:'05', hue:'#f0a028', es:{t:'Daño por radiación en materiales', d:'Análisis mediante simulaciones atomísticas del daño estructural inducido por radiación en materiales de interés tecnológico y nuclear.'}, en:{t:'Radiation damage in materials', d:'Atomistic simulation analysis of radiation-induced structural damage in materials of technological and nuclear interest.'} },
    { n:'06', hue:'#00a0c8', es:{t:'Materiales porosos y espumas metálicas', d:'Estudio de la relación entre microestructura y propiedades mecánicas en materiales con arquitectura porosa controlada.'}, en:{t:'Porous materials and metallic foams', d:'Study of the relationship between microstructure and mechanical properties in materials with controlled porous architecture.'} },
    { n:'07', hue:'#c84080', es:{t:'Magnetismo', d:'Simulación y análisis de propiedades magnéticas en materiales, incluyendo efectos de estructura, defectos y condiciones externas.'}, en:{t:'Magnetism', d:'Simulation and analysis of magnetic properties in materials, including the effects of structure, defects, and external conditions.'} },
  ];
  return (
    <section className="research-lines-wrap" style={rlStyles.wrap}>
      <style>{`
        @keyframes simaf-word-left {
          0%, 18%, 100% { color: inherit; transform: translateX(0) rotate(0deg) skewX(0deg); }
          32%, 58% { color: #c61f1f; transform: translateX(-0.5em) rotate(-7deg) skewX(-8deg); }
          74% { color: inherit; transform: translateX(0) rotate(0deg) skewX(0deg); }
        }
        @keyframes simaf-word-right {
          0%, 18%, 100% { color: inherit; transform: translateX(0) rotate(0deg) skewX(0deg); }
          32%, 58% { color: #c61f1f; transform: translateX(0.5em) rotate(7deg) skewX(8deg); }
          74% { color: inherit; transform: translateX(0) rotate(0deg) skewX(0deg); }
        }
        .simaf-extreme-title {
          display: inline-flex;
          flex-wrap: wrap;
          align-items: baseline;
          gap: 0.28em;
        }
        .simaf-extreme-fragment {
          display: inline-block;
          transform-origin: center;
          will-change: transform, color;
        }
        .simaf-extreme-fragment.is-left {
          animation: simaf-word-left 6s ease-in-out infinite;
        }
        .simaf-extreme-fragment.is-right {
          animation: simaf-word-right 6s ease-in-out infinite;
        }
        @keyframes simaf-radiation-pulse {
          0%, 18%, 100% {
            color: inherit;
            text-shadow: none;
            filter: saturate(1) brightness(1);
          }
          30% {
            color: #d6ff3f;
            text-shadow:
              0 0 8px rgba(214, 255, 63, 0.5),
              0 0 20px rgba(168, 255, 63, 0.3);
            filter: saturate(1.2) brightness(1.05);
          }
          42% {
            color: #baff1b;
            text-shadow:
              0 0 12px rgba(186, 255, 27, 0.7),
              0 0 28px rgba(121, 255, 48, 0.4);
            filter: saturate(1.35) brightness(1.1);
          }
          56% {
            color: #efff96;
            text-shadow:
              0 0 10px rgba(239, 255, 150, 0.45),
              0 0 18px rgba(186, 255, 27, 0.25);
            filter: saturate(1.08) brightness(1.04);
          }
        }
        @keyframes simaf-radiation-jitter {
          0%, 22%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
          32% { transform: translate3d(-0.04em, 0, 0) rotate(-0.7deg); }
          38% { transform: translate3d(0.05em, -0.01em, 0) rotate(0.9deg); }
          44% { transform: translate3d(-0.03em, 0.01em, 0) rotate(-0.6deg); }
          50% { transform: translate3d(0.04em, 0, 0) rotate(0.5deg); }
          58% { transform: translate3d(0, 0, 0) rotate(0deg); }
        }
        .simaf-radiation-title {
          display: inline-block;
          animation:
            simaf-radiation-pulse 7.5s ease-in-out infinite,
            simaf-radiation-jitter 7.5s ease-in-out infinite;
          transform-origin: center;
          will-change: transform, color, text-shadow, filter;
        }
        @keyframes simaf-magnet-letter {
          0%, 100% {
            opacity: 1;
            color: var(--magnet-color, var(--fg));
            transform: translate3d(0, 0, 0) scale(1);
            filter: blur(0);
          }
          18% {
            opacity: 0;
            color: var(--magnet-color, var(--fg));
            transform: translate3d(var(--magnet-x), 0, -180px) scale(1.9);
            filter: blur(8px);
          }
          58% {
            opacity: 0.72;
            color: var(--magnet-color, var(--fg));
            transform: translate3d(calc(var(--magnet-x) * 0.18), 0, -42px) scale(1.16);
            filter: blur(1.6px);
          }
          78% {
            opacity: 1;
            color: var(--magnet-color, var(--fg));
            transform: translate3d(0, 0, 0) scale(1);
            filter: blur(0);
          }
        }
        .simaf-magnet-title {
          display: inline-flex;
          gap: 0.01em;
          perspective: 900px;
          transform-style: preserve-3d;
        }
        .simaf-magnet-letter {
          display: inline-block;
          animation: simaf-magnet-letter 8.5s cubic-bezier(0.2, 0.7, 0.18, 1) infinite;
          transform-origin: center;
          will-change: transform, opacity, filter;
        }
        @media (max-width: 680px) {
          .research-lines-wrap { padding: 48px 22px !important; }
          .research-lines-head { align-items: flex-start; flex-direction: column; gap: 6px; }
          .research-line-row { grid-template-columns: 48px 18px 1fr !important; gap: 14px !important; }
          .research-line-title { font-size: 22px !important; }
        }
      `}</style>
      <div className="research-lines-head" style={rlStyles.head}>
        <span style={rlStyles.eye}>{lang==='es'?'Líneas de investigación':'Research lines'}</span>
        <span>0{lines.length}</span>
      </div>
      <div style={rlStyles.list}>
        {lines.map(l => (
          <article key={l.n} className="research-line-row" style={rlStyles.row}>
            <span style={rlStyles.num}>{l.n}</span>
            <span style={{...rlStyles.dot, background:l.hue}} />
            <div style={rlStyles.body}>
              <div className="research-line-title" style={rlStyles.title}>
                {l.n === '01' && lang === 'es' ? (
                  <span className="simaf-extreme-title">
                    <span>Materiales</span>
                    <span className="simaf-extreme-fragment is-left">bajo</span>
                    <span className="simaf-extreme-fragment is-right">condiciones</span>
                    <span>extremas</span>
                  </span>
                ) : l.n === '05' && lang === 'es' ? (
                  <span className="simaf-radiation-title">Daño por radiación en materiales</span>
                ) : l.n === '07' && lang === 'es' ? (
                  <span className="simaf-magnet-title" aria-label="Magnetismo">
                    {[
                      ['M', '-5.2em', '0ms', '#d96a1d'],
                      ['a', '-3.9em', '90ms', '#d96a1d'],
                      ['g', '-2.6em', '180ms', '#d96a1d'],
                      ['n', '-1.3em', '270ms', '#d96a1d'],
                      ['e', '1.3em', '360ms', '#d96a1d'],
                      ['t', '2.6em', '450ms', '#1d63d9'],
                      ['i', '3.9em', '540ms', '#1d63d9'],
                      ['s', '5.2em', '630ms', '#1d63d9'],
                      ['m', '6.4em', '720ms', '#1d63d9'],
                      ['o', '7.6em', '810ms', '#1d63d9'],
                    ].map(([char, offset, delay, color], i) => (
                      <span
                        key={`${char}-${i}`}
                        className="simaf-magnet-letter"
                        style={{ '--magnet-x': offset, '--magnet-color': color, animationDelay: delay }}
                      >
                        {char}
                      </span>
                    ))}
                  </span>
                ) : (
                  l[lang].t
                )}
              </div>
              <div style={rlStyles.desc}>{l[lang].d}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
const rlStyles = {
  wrap: { padding:'72px 48px', maxWidth:1280, margin:'0 auto' },
  head: { borderTop:'3px double var(--rule)', borderBottom:'1px solid var(--rule)', padding:'8px 0', display:'flex', justifyContent:'space-between', fontFamily:'var(--font-sans)', fontSize:11, letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--fg-muted)', marginBottom:40 },
  eye: { fontWeight:600, color:'var(--fg)' },
  list: { display:'flex', flexDirection:'column' },
  row: { display:'grid', gridTemplateColumns:'80px 24px 1fr', alignItems:'center', gap:20, padding:'28px 0', borderBottom:'1px solid var(--border)', color:'var(--fg)' },
  num: { fontFamily:'var(--font-mono)', fontSize:13, color:'var(--fg-muted)', letterSpacing:'0.1em' },
  dot: { width:14, height:14, borderRadius:'50%' },
  body: {},
  title: { fontFamily:'var(--font-serif)', fontSize:26, fontWeight:500, lineHeight:1.2, letterSpacing:'-0.01em' },
  desc: { fontFamily:'var(--font-serif)', fontStyle:'italic', fontSize:16, color:'var(--fg-muted)', marginTop:6, maxWidth:'70ch' },
};
