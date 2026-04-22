window.People = function People({ lang }) {
  const members = [
    { img:'img/avatar2.jpg', name:'Dr. Eduardo Bringa', role:{es:'Director del Laboratorio · Investigador Principal CONICET', en:'Lab Director · Principal Investigator CONICET'}, tag:'PI', hue:'#0050f0', pubs:'publicaciones-ebringa.html' },
    { img:'img/avatar1.jpg', name:'Dr. Gonzalo Dos Santos', role:{es:'Investigador Adjunto CONICET', en:'Associate Researcher CONICET'}, tag:'Inv. Adj.', hue:'#f02850', pubs:'gonzalo_dos_santos_publications.html' },
    { img:'img/avatar7jpg', name:'Dr. Ing. Diego R. Tramontina', role:{es:'Investigador Adjunto CONICET', en:'Associate Researcher CONICET'}, tag:'Inv. Adj.', hue:'#7828c8', pubs:'diego_tramontina_publications.html' },
    { img:'img/avatar6.jpg', name:'Dr. Geraudys Mora Barzaga', role:{es:'Becario Postdoctoral CONICET', en:'Postdoctoral Fellow CONICET'}, tag:'Postdoc', hue:'#00a050', pubs:'gera_mora_publications.html' },
    { img:'img/avatar4.jpg', name:'Dr. Orlando Deluigi', role:{es:'Becario Postdoctoral CONICET', en:'Postdoctoral Fellow CONICET'}, tag:'Postdoc', hue:'#f0a028', pubs:'orlando_deluigi_publications.html' },
    { img:'img/avatar1.jpg', name:'Lic. Federico A. Cartellone', role:{es:'Becario Doctoral CONICET', en:'Doctoral Fellow CONICET'}, tag:'Doctoral', hue:'#00a0c8', pubs:'fede_cartellone_publications.html' },
    { img:'img/avatar5.jpg', name:'Lic. Santiago Bergamin Saua', role:{es:'Becario Doctoral CONICET', en:'Doctoral Fellow CONICET'}, tag:'Doctoral', hue:'#78c828', pubs:null },
    { img:'img/avatar7jpg', name:'Tomás Agustín Escalante', role:{es:'Becario Postdoctoral CONICET', en:'Postdoctoral Fellow CONICET'}, tag:'Postdoc', hue:'#f00078', pubs:null },
    { img:'img/avatar3.jpg', name:'María José Buzzachi', role:{es:'Becaria Postdoctoral CONICET', en:'Postdoctoral Fellow CONICET'}, tag:'Postdoc', hue:'#2828f0', pubs:null },
  ];
  return (
    <section style={pplStyles.wrap}>
      <div style={pplStyles.head}>
        <span style={{fontWeight:600, color:'var(--fg)'}}>{lang==='es'?'Equipo de investigación':'Research team'}</span>
        <span>{members.length} · {lang==='es'?'Universidad de Mendoza':'Universidad de Mendoza'}</span>
      </div>
      <div style={pplStyles.grid}>
        {members.map(m => (
          <div key={m.name} style={pplStyles.card}>
            <div style={pplStyles.avatarWrap}>
              <img src={'../../'+m.img} alt={m.name} style={pplStyles.avatarImg}
                onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }}
              />
              <div style={{...pplStyles.avatarFallback, background:`linear-gradient(135deg, #00173c, ${m.hue})`, display:'none'}}>
                {m.name.split(' ').filter((_,i,a) => i===0||i===a.length-1).map(w=>w[0]).join('')}
              </div>
            </div>
            <div>
              <div style={pplStyles.name}>{m.name}</div>
              <div style={pplStyles.role}>{m.role[lang]}</div>
              <div style={pplStyles.tag}>{m.tag}</div>
              {m.pubs && (
                <a href={m.pubs} style={pplStyles.link}>
                  {lang==='es'?'Publicaciones →':'Publications →'}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
const pplStyles = {
  wrap: { padding:'72px 48px', maxWidth:1280, margin:'0 auto' },
  head: { borderTop:'3px double var(--rule)', borderBottom:'1px solid var(--rule)', padding:'8px 0', display:'flex', justifyContent:'space-between', fontFamily:'var(--font-sans)', fontSize:11, letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--fg-muted)', marginBottom:40 },
  grid: { display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:24 },
  card: { display:'flex', gap:16, alignItems:'flex-start', padding:'20px 18px', border:'1px solid var(--border)', background:'#fff', borderRadius:2 },
  avatarWrap: { width:56, height:56, borderRadius:'50%', overflow:'hidden', flexShrink:0 },
  avatarImg: { width:56, height:56, objectFit:'cover', borderRadius:'50%', display:'block' },
  avatarFallback: { width:56, height:56, borderRadius:'50%', color:'#fbf9f4', alignItems:'center', justifyContent:'center', fontFamily:'var(--font-serif)', fontSize:20 },
  name: { fontFamily:'var(--font-serif)', fontSize:17, fontWeight:500, color:'var(--fg)', lineHeight:1.2 },
  role: { fontFamily:'var(--font-serif)', fontStyle:'italic', fontSize:13, color:'var(--fg-muted)', marginTop:4, lineHeight:1.35 },
  tag: { fontFamily:'var(--font-sans)', fontSize:10, fontWeight:600, letterSpacing:'0.12em', textTransform:'uppercase', color:'var(--fg-muted)', marginTop:8 },
  link: { fontFamily:'var(--font-sans)', fontSize:12, color:'var(--accent)', textDecoration:'none', marginTop:6, display:'inline-block' },
};
