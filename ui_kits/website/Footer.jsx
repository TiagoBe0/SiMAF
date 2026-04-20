window.Footer = function Footer({ lang }) {
  return (
    <footer style={ftStyles.wrap}>
      <div style={ftStyles.inner}>
        <div style={ftStyles.brand}>
          <img src="../../assets/logo-final.png" alt="" style={ftStyles.mark} />
          <div>
            <div style={ftStyles.wm}>SiMAF</div>
            <div style={ftStyles.sub}>{lang==='es'?'Laboratorio de Simulaciones en Materiales, Astrofísica y Física · Universidad de Mendoza':'Laboratory of Simulations in Materials, Astrophysics & Physics · Universidad de Mendoza'}</div>
          </div>
        </div>
        <div style={ftStyles.cols}>
          <div>
            <div style={ftStyles.ch}>{lang==='es'?'Contacto':'Contact'}</div>
            <div style={ftStyles.item}>simaf@uncu.edu.ar</div>
            <div style={ftStyles.item}>ebringa@mendoza-conicet.gob.ar</div>
          </div>
          <div>
            <div style={ftStyles.ch}>{lang==='es'?'Dirección':'Address'}</div>
            <div style={ftStyles.item}>Facultad de Ingeniería</div>
            <div style={ftStyles.item}>Universidad de Mendoza, Argentina</div>
          </div>
          <div>
            <div style={ftStyles.ch}>{lang==='es'?'Enlaces':'Links'}</div>
            <div style={ftStyles.item}><a style={ftStyles.link} href="#" onClick={e=>e.preventDefault()}>arXiv</a></div>
            <div style={ftStyles.item}><a style={ftStyles.link} href="#" onClick={e=>e.preventDefault()}>GitHub</a></div>
            <div style={ftStyles.item}><a style={ftStyles.link} href="#" onClick={e=>e.preventDefault()}>ORCID</a></div>
          </div>
        </div>
      </div>
      <div style={ftStyles.rule}>
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
  mark: { width:56, height:56, objectFit:'cover', borderRadius:2 },
  wm: { fontFamily:'var(--font-serif)', fontSize:26, fontWeight:500, color:'#fbf9f4' },
  sub: { fontFamily:'var(--font-serif)', fontStyle:'italic', fontSize:14, color:'#a8b3d1', marginTop:4, maxWidth:'32ch', lineHeight:1.4 },
  cols: { display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:32 },
  ch: { fontFamily:'var(--font-sans)', fontSize:11, fontWeight:600, letterSpacing:'0.14em', textTransform:'uppercase', color:'#a8b3d1', marginBottom:12 },
  item: { fontFamily:'var(--font-sans)', fontSize:13, color:'#e9edf7', marginTop:6 },
  link: { color:'#e9edf7', textDecoration:'none', borderBottom:'1px solid #4d88ff' },
  rule: { maxWidth:1280, margin:'48px auto 0', paddingTop:16, borderTop:'1px solid #0f356f', display:'flex', justifyContent:'space-between', fontFamily:'var(--font-sans)', fontSize:11, letterSpacing:'0.12em', color:'#a8b3d1' },
};
