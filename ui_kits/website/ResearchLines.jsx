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
          0%, 18%, 100% { color: inherit; transform: translateX(0); }
          32%, 58% { color: #c61f1f; transform: translateX(-0.5em); }
          74% { color: inherit; transform: translateX(0); }
        }
        @keyframes simaf-word-right {
          0%, 18%, 100% { color: inherit; transform: translateX(0); }
          32%, 58% { color: #c61f1f; transform: translateX(0.5em); }
          74% { color: inherit; transform: translateX(0); }
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
        @keyframes simaf-hpc-chip {
          0%, 100% { opacity: 0.34; transform: scale(0.92); background: rgba(76, 159, 255, 0.18); }
          45% { opacity: 1; transform: scale(1); background: rgba(76, 159, 255, 0.88); }
          70% { opacity: 0.72; transform: scale(0.96); background: rgba(255, 122, 28, 0.72); }
        }
        @keyframes simaf-hpc-stream {
          from { transform: translateX(-110%); }
          to { transform: translateX(230%); }
        }
        @keyframes simaf-hpc-particle {
          0% { transform: translateX(-120%) scaleX(0.7); opacity: 0; }
          15% { opacity: 1; }
          100% { transform: translateX(360%) scaleX(1.15); opacity: 0; }
        }
        @keyframes simaf-hpc-bar {
          0%, 100% { transform: scaleX(0.16); opacity: 0.42; }
          40% { transform: scaleX(0.96); opacity: 1; }
          68% { transform: scaleX(0.58); opacity: 0.85; }
        }
        .simaf-hpc-card {
          background: linear-gradient(135deg, #07111f 0%, #0e1f39 52%, #091427 100%);
          border: 1px solid rgba(97, 149, 226, 0.24);
          border-radius: 22px;
          padding: 22px 24px 20px;
          box-shadow: 0 18px 36px rgba(4, 14, 31, 0.18);
          overflow: hidden;
        }
        .simaf-hpc-title {
          display: block;
          color: #f6f8ff;
          margin-bottom: 16px;
        }
        .simaf-hpc-gpu {
          position: relative;
          width: min(100%, 220px);
          background: linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02));
          border: 1px solid rgba(151, 190, 255, 0.28);
          border-radius: 16px;
          padding: 16px;
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.02);
        }
        .simaf-hpc-gpu::before,
        .simaf-hpc-gpu::after {
          content: "";
          position: absolute;
          top: 16px;
          bottom: 16px;
          width: 8px;
          background:
            repeating-linear-gradient(
              to bottom,
              rgba(97, 149, 226, 0.22) 0 8px,
              transparent 8px 14px
            );
        }
        .simaf-hpc-gpu::before { left: -9px; }
        .simaf-hpc-gpu::after { right: -9px; }
        .simaf-hpc-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 8px;
        }
        .simaf-hpc-cell {
          aspect-ratio: 1 / 1;
          border-radius: 6px;
          border: 1px solid rgba(145, 190, 255, 0.14);
          animation: simaf-hpc-chip 1.8s ease-in-out infinite;
          box-shadow: 0 0 10px rgba(76, 159, 255, 0.14);
        }
        .simaf-hpc-lane {
          position: relative;
          margin-top: 16px;
          height: 12px;
          border-radius: 999px;
          background: rgba(255,255,255,0.06);
          overflow: hidden;
        }
        .simaf-hpc-lane::before {
          content: "";
          position: absolute;
          inset: 2px auto 2px 0;
          width: 34%;
          border-radius: 999px;
          background: linear-gradient(90deg, rgba(76,159,255,0) 0%, rgba(76,159,255,0.9) 45%, rgba(255,122,28,0.95) 100%);
          animation: simaf-hpc-stream 2.6s linear infinite;
        }
        .simaf-hpc-particles {
          position: relative;
          margin-top: 12px;
          height: 10px;
          overflow: hidden;
        }
        .simaf-hpc-particle {
          position: absolute;
          top: 1px;
          width: 26px;
          height: 8px;
          border-radius: 999px;
          background: linear-gradient(90deg, rgba(76,159,255,0) 0%, rgba(76,159,255,0.88) 40%, rgba(255,122,28,0.92) 100%);
          animation: simaf-hpc-particle 2.8s linear infinite;
        }
        .simaf-hpc-bars {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-top: 18px;
        }
        .simaf-hpc-bar-track {
          height: 8px;
          background: rgba(255,255,255,0.08);
          border-radius: 999px;
          overflow: hidden;
        }
        .simaf-hpc-bar-fill {
          height: 100%;
          width: 100%;
          transform-origin: left center;
          border-radius: inherit;
          background: linear-gradient(90deg, #4c9fff 0%, #84b9ff 48%, #ff7a1c 100%);
          animation: simaf-hpc-bar 2.4s ease-in-out infinite;
        }
        .simaf-hpc-card:hover .simaf-hpc-bar-fill,
        .simaf-hpc-card:hover .simaf-hpc-cell {
          animation-duration: 1.2s;
        }
        @media (max-width: 680px) {
          .research-lines-wrap { padding: 48px 22px !important; }
          .research-lines-head { align-items: flex-start; flex-direction: column; gap: 6px; }
          .research-line-row { grid-template-columns: 48px 18px 1fr !important; gap: 14px !important; }
          .research-line-title { font-size: 22px !important; }
          .simaf-hpc-card { padding: 18px 18px 16px; }
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
              {l.n === '03' ? (
                <div className="simaf-hpc-card">
                  <div className="research-line-title simaf-hpc-title" style={rlStyles.title}>{l[lang].t}</div>
                  <div className="simaf-hpc-gpu">
                    <div className="simaf-hpc-grid">
                      {Array.from({ length: 16 }).map((_, i) => (
                        <span
                          key={i}
                          className="simaf-hpc-cell"
                          style={{ animationDelay: `${i * 120}ms` }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="simaf-hpc-lane" />
                  <div className="simaf-hpc-particles">
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        className="simaf-hpc-particle"
                        style={{ animationDelay: `${i * 0.72}s` }}
                      />
                    ))}
                  </div>
                  <div className="simaf-hpc-bars">
                    {[0, 1, 2].map((i) => (
                      <div key={i} className="simaf-hpc-bar-track">
                        <div
                          className="simaf-hpc-bar-fill"
                          style={{ animationDelay: `${i * 220}ms` }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="research-line-title" style={rlStyles.title}>
                  {l.n === '01' && lang === 'es' ? (
                  <span className="simaf-extreme-title">
                    <span>Materiales</span>
                    <span className="simaf-extreme-fragment is-left">bajo</span>
                    <span className="simaf-extreme-fragment is-right">condiciones</span>
                    <span>extremas</span>
                  </span>
                ) : (
                  l[lang].t
                )}
                </div>
              )}
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
