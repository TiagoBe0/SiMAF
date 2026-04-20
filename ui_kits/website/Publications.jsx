window.Publications = function Publications({ lang, limit }) {
  const pubs = [
    { year:'2025', title:'Compression of refractory high-entropy alloy nanoparticles: Size and short-range order effects', authors:'FA Cartellone, N Amigo, FR Roco, O Deluigi, FJ Valencia, EM Bringa', venue:'Int. J. Refract. Met. Hard Mater.', volume:'107498', url:'https://doi.org/10.1016/j.ijrmhm.2025.107498' },
    { year:'2025', title:'Temperature effects on the strength of a nanocrystalline refractory high entropy alloy', authors:'FR Roco, O Deluigi, M Opazo, N Amigo, J Rojas-Nunez, FJ Valencia, DR Tramontina, EM Bringa', venue:'Int. J. Refract. Met. Hard Mater.', volume:'128, 107038', url:'' },
    { year:'2025', title:'Mechanical properties of High Entropy Alloy nanoparticles obtained by nanoindentation: A BCC HfNbZrTaTi and FCC FeNiCrCoCu case', authors:'FR Roco, FJ Valencia, J Rogan, M Ramirez, FA Cartellone, EM Bringa', venue:'Mater. Today Commun.', volume:'43, 111628', url:'' },
    { year:'2025', title:'Construction of granular aggregates with different porosity, shape, and size distributions', authors:'EN Millán, MB Planes, EM Bringa, MG Parisi', venue:'Granular Matter', volume:'27 (1), 3', url:'https://www.iar.unlp.edu.ar/biblio/htdocs/artic/contri/1862.pdf' },
    { year:'2024', title:'Mechanical properties of hcp Fe at high pressures and temperatures from large-scale molecular dynamics simulations', authors:'OR Deluigi, EM Bringa', venue:'J. Appl. Phys.', volume:'136 (19)', url:'https://pubs.aip.org/aip/jap/article/136/19/195901/3320676' },
    { year:'2024', title:'Plasticity tuning of thermal conductivity between nanoparticles', authors:'G Mora-Barzaga, EN Miranda, EM Bringa', venue:'J. Appl. Phys.', volume:'136 (17)', url:'https://pubs.aip.org/aip/jap/article/136/17/175103/3318772' },
    { year:'2024', title:'Size-dependent Curie temperature of Ni nanoparticles from spin-lattice dynamics simulations', authors:'G Dos Santos, HM Urbassek, EM Bringa', venue:'Sci. Rep.', volume:'14 (1), 22012', url:'https://www.nature.com/articles/s41598-024-73129-w.pdf' },
    { year:'2024', title:'Chemical short-range order increases the phonon heat conductivity in a refractory high-entropy alloy', authors:'G Mora-Barzaga, HM Urbassek, OR Deluigi, PM Pasinetti, EM Bringa', venue:'Sci. Rep.', volume:'14 (1), 20628', url:'https://www.nature.com/articles/s41598-024-70500-9.pdf' },
    { year:'2024', title:'Atomistic Simulations of the Shock and Spall Behavior of the Refractory High-Entropy Alloy HfNbTaTiZr', authors:'D Thürmer, OR Deluigi, HM Urbassek, EM Bringa, N Merkert', venue:'High Entropy Alloys Mater.', volume:'2 (2), 321-331', url:'https://link.springer.com/article/10.1007/S44210-024-00042-2' },
    { year:'2024', title:'How crack twisting in bouligand structures lead to damage delocalization and toughening', authors:'A Garnica, E Aparicio, M Shishehbor, D Kisailus, EM Bringa, PD Zavattieri', venue:'Extreme Mech. Lett.', volume:'71, 102190', url:'https://www.sciencedirect.com/science/article/am/pii/S2352431624000701' },
    { year:'2024', title:'Dust–dust collisions in cometary comas: applications to comet 67P/Churyumov–Gerasimenko', authors:'MB Planes, MG Parisi, EN Millán, EM Bringa, M Cañada-Assandri', venue:'Mon. Not. R. Astron. Soc.', volume:'531 (3), 3168-3186', url:'https://academic.oup.com/mnras/article-pdf/531/3/3168/58166475/stae1078.pdf' },
    { year:'2024', title:'Nanoindentation into a bcc high-entropy HfNbTaTiZr alloy — an atomistic study of the effect of short-range order', authors:'IA Alhafez, OR Deluigi, D Tramontina, N Merkert, HM Urbassek, EM Bringa', venue:'Sci. Rep.', volume:'14 (1), 9112', url:'https://www.nature.com/articles/s41598-024-59761-6.pdf' },
    { year:'2024', title:'Plasticity in diamond nanoparticles: dislocations and amorphization during loading and dislocation multiplication during unloading', authors:'D Castillo-Castro, RI González, N Amigo, G García Vidable, DR Tramontina, FJ Valencia, EM Bringa', venue:'J. Mater. Sci.', volume:'59 (12), 4788-4809', url:'' },
  ];
  const shown = limit ? pubs.slice(0, limit) : pubs;
  const grouped = {};
  shown.forEach(p => (grouped[p.year] ||= []).push(p));
  return (
    <section style={pubStyles.wrap}>
      <div style={pubStyles.head}>
        <span style={{fontWeight:600, color:'var(--fg)'}}>{lang==='es'?'Publicaciones':'Publications'}</span>
        <span>{limit?(lang==='es'?'Más recientes':'Most recent'):('100+ · 2012–2025')}</span>
      </div>
      {Object.entries(grouped).map(([y, items]) => (
        <div key={y} style={pubStyles.yearBlock}>
          <div style={pubStyles.year}>{y}</div>
          <div style={pubStyles.items}>
            {items.map((p,i) => (
              <article key={i} style={pubStyles.item}>
                <h3 style={pubStyles.title}>{p.title}</h3>
                <div style={pubStyles.auth}>{p.authors}</div>
                <div style={pubStyles.meta}>
                  <span style={pubStyles.venue}>{p.venue}</span>
                  <span style={pubStyles.sep}>·</span>
                  <span>{p.volume}</span>
                  {p.url && <>
                    <span style={pubStyles.sep}>·</span>
                    <a href={p.url} target="_blank" rel="noopener" onClick={e=>e.stopPropagation()} style={pubStyles.link}>PDF ↗</a>
                  </>}
                </div>
              </article>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};
const pubStyles = {
  wrap: { padding:'72px 48px', maxWidth:1280, margin:'0 auto' },
  head: { borderTop:'3px double var(--rule)', borderBottom:'1px solid var(--rule)', padding:'8px 0', display:'flex', justifyContent:'space-between', fontFamily:'var(--font-sans)', fontSize:11, letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--fg-muted)', marginBottom:40 },
  yearBlock: { display:'grid', gridTemplateColumns:'160px 1fr', gap:40, padding:'28px 0', borderBottom:'1px solid var(--border)' },
  year: { fontFamily:'var(--font-sans)', fontSize:13, fontWeight:600, letterSpacing:'0.14em', color:'var(--fg-muted)' },
  items: { display:'flex', flexDirection:'column', gap:24 },
  item: {},
  title: { fontFamily:'var(--font-serif)', fontSize:21, fontWeight:500, lineHeight:1.3, color:'var(--fg)', margin:'0 0 6px', letterSpacing:'-0.005em' },
  auth: { fontFamily:'var(--font-serif)', fontStyle:'italic', fontSize:15, color:'var(--fg-muted)' },
  meta: { marginTop:8, display:'flex', gap:10, alignItems:'center', fontFamily:'var(--font-mono)', fontSize:12, color:'var(--fg-muted)', flexWrap:'wrap' },
  venue: { color:'var(--fg)' },
  sep: { color:'var(--fg-faint)' },
  link: { color:'var(--accent)', textDecoration:'none', fontWeight:600 },
};
