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
    <section style={rlStyles.wrap}>
      <div style={rlStyles.head}>
        <span style={rlStyles.eye}>{lang==='es'?'Líneas de investigación':'Research lines'}</span>
        <span>0{lines.length}</span>
      </div>
      <div style={rlStyles.list}>
        {lines.map(l => (
          <article key={l.n} className="research-line-row" style={rlStyles.row}>
            <span style={rlStyles.num}>{l.n}</span>
            <span style={{...rlStyles.dot, background:l.hue}} />
            <div style={rlStyles.body}>
              <div style={rlStyles.title}>{l[lang].t}</div>
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
