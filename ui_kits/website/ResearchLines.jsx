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
        @keyframes simaf-blackhole-title {
          0%, 18%, 100% {
            letter-spacing: -0.01em;
            transform: translate3d(0, 0, 0) scale(1) rotate(0deg);
            color: inherit;
            text-shadow: none;
            filter: blur(0);
          }
          30% {
            letter-spacing: -0.04em;
            transform: translate3d(0, 0, 0) scale(0.98) rotate(-0.6deg);
            color: #44338d;
            text-shadow: 0 0 12px rgba(86, 59, 158, 0.2);
            filter: blur(0.2px);
          }
          42% {
            letter-spacing: -0.08em;
            transform: translate3d(0, 0, 0) scale(0.94) rotate(1deg);
            color: #2b215f;
            text-shadow:
              0 0 14px rgba(67, 38, 122, 0.22),
              0 0 26px rgba(138, 104, 215, 0.18);
            filter: blur(0.35px);
          }
          56% {
            letter-spacing: -0.12em;
            transform: translate3d(0, 0, 0) scale(0.89) rotate(-1.4deg);
            color: #1a1630;
            text-shadow:
              0 0 16px rgba(26, 22, 48, 0.32),
              0 0 30px rgba(120, 78, 200, 0.18);
            filter: blur(0.55px);
          }
          68% {
            letter-spacing: -0.05em;
            transform: translate3d(0, 0, 0) scale(0.96) rotate(0.5deg);
            color: #3d2f76;
            text-shadow: 0 0 10px rgba(86, 59, 158, 0.14);
            filter: blur(0.15px);
          }
        }
        @keyframes simaf-blackhole-core {
          0%, 24%, 100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.4);
            box-shadow: 0 0 0 0 rgba(120, 78, 200, 0);
          }
          40% {
            opacity: 0.45;
            transform: translate(-50%, -50%) scale(0.85);
            box-shadow: 0 0 0 5px rgba(120, 78, 200, 0.08);
          }
          56% {
            opacity: 0.82;
            transform: translate(-50%, -50%) scale(1.08);
            box-shadow:
              0 0 0 8px rgba(120, 78, 200, 0.1),
              0 0 18px rgba(120, 78, 200, 0.2);
          }
          72% {
            opacity: 0.18;
            transform: translate(-50%, -50%) scale(0.62);
            box-shadow: 0 0 0 2px rgba(120, 78, 200, 0.04);
          }
        }
        .simaf-blackhole-title {
          position: relative;
          display: inline-block;
          animation: simaf-blackhole-title 8.5s ease-in-out infinite;
          transform-origin: center;
          will-change: transform, letter-spacing, color, text-shadow, filter;
        }
        .simaf-blackhole-title::after {
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          width: 0.72em;
          height: 0.72em;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(10,10,18,0.96) 0 44%, rgba(72, 44, 140, 0.72) 58%, rgba(152, 112, 232, 0.22) 100%);
          animation: simaf-blackhole-core 8.5s ease-in-out infinite;
          pointer-events: none;
          mix-blend-mode: multiply;
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
        @keyframes simaf-nano-compress {
          0%, 20%, 100% {
            transform: scaleY(1);
            letter-spacing: -0.01em;
          }
          32%, 66% {
            transform: scaleY(0.61);
            letter-spacing: -0.01em;
          }
          80% {
            transform: scaleY(1);
            letter-spacing: -0.01em;
          }
        }
        .simaf-nano-title {
          display: inline-block;
          animation: simaf-nano-compress 7s ease-in-out infinite;
          transform-origin: center bottom;
          will-change: transform, letter-spacing;
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
        @keyframes simaf-compute-thumb {
          0%, 61.5%, 100% {
            opacity: 0;
            transform: translateY(0) scale(0.96);
            box-shadow: 0 10px 18px rgba(10, 26, 60, 0);
          }
          66% {
            opacity: 0.92;
            transform: translateY(0) scale(1);
            box-shadow: 0 10px 18px rgba(10, 26, 60, 0.16);
          }
          80% {
            opacity: 1;
            transform: translateY(-1px) scale(1.02);
            box-shadow: 0 14px 22px rgba(10, 26, 60, 0.2);
          }
          92% {
            opacity: 0.92;
            transform: translateY(0) scale(1);
            box-shadow: 0 10px 18px rgba(10, 26, 60, 0.16);
          }
        }
        @keyframes simaf-compute-drop {
          0%, 63%, 100% {
            opacity: 0;
            transform: translate3d(0, -8px, 0) scale(0.72);
          }
          69% {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
          }
          80% {
            opacity: 1;
            transform: translate3d(1px, 3px, 0) scale(0.96);
          }
          90% {
            opacity: 0.84;
            transform: translate3d(0, 5px, 0) scale(0.9);
          }
        }
        .simaf-compute-title {
          display: inline-flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.55rem;
        }
        .simaf-compute-visual {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 auto;
        }
        .simaf-compute-image {
          width: 73px;
          height: 52px;
          object-fit: cover;
          border-radius: 26px;
          border: 1px solid rgba(18, 44, 90, 0.12);
          animation: simaf-compute-thumb 5.2s ease-in-out infinite;
        }
        .simaf-compute-drop {
          position: absolute;
          right: 7px;
          top: -6px;
          width: 14px;
          height: 19px;
          background: radial-gradient(circle at 35% 28%, rgba(255,255,255,0.95) 0 18%, rgba(144, 212, 255, 0.95) 19% 58%, rgba(57, 154, 235, 0.98) 59% 100%);
          border-radius: 50% 50% 58% 58% / 36% 36% 68% 68%;
          transform: rotate(22deg);
          box-shadow: 0 0 12px rgba(87, 177, 245, 0.28);
          animation: simaf-compute-drop 5.2s ease-in-out infinite;
          pointer-events: none;
        }
        @media (max-width: 680px) {
          .research-lines-wrap { padding: 48px 22px !important; }
          .research-lines-head { align-items: flex-start; flex-direction: column; gap: 6px; }
          .research-line-row { grid-template-columns: 48px 18px 1fr !important; gap: 14px !important; }
          .research-line-title { font-size: 22px !important; }
          .simaf-compute-image { width: 62px; height: 44px; }
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
                ) : l.n === '01' && lang === 'en' ? (
                  <span className="simaf-extreme-title">
                    <span>Materials</span>
                    <span className="simaf-extreme-fragment is-left">under</span>
                    <span className="simaf-extreme-fragment is-right">extreme</span>
                    <span>conditions</span>
                  </span>
                ) : l.n === '02' ? (
                  <span className="simaf-blackhole-title">{l[lang].t}</span>
                ) : l.n === '03' ? (
                  <span className="simaf-compute-title">
                    <span>{l[lang].t}</span>
                    <span className="simaf-compute-visual" aria-hidden="true">
                      <img
                        className="simaf-compute-image"
                        src="img/animacion_computacion.jpeg"
                        alt=""
                      />
                      <span className="simaf-compute-drop" />
                    </span>
                  </span>
                ) : l.n === '04' ? (
                  <span className="simaf-nano-title">{l[lang].t}</span>
                ) : l.n === '06' ? (
                  <span className="simaf-compute-title">
                    <span>{l[lang].t}</span>
                    <span className="simaf-compute-visual" aria-hidden="true">
                      <img
                        className="simaf-compute-image"
                        src="img/materiales_nanoporosos.jpeg"
                        alt=""
                      />
                    </span>
                  </span>
                ) : l.n === '05' && lang === 'es' ? (
                  <span className="simaf-radiation-title">Daño por radiación en materiales</span>
                ) : l.n === '05' && lang === 'en' ? (
                  <span className="simaf-radiation-title">Radiation damage in materials</span>
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
                ) : l.n === '07' && lang === 'en' ? (
                  <span className="simaf-magnet-title" aria-label="Magnetism">
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
