window.Network = function Network({ lang }) {
  const people = [
    { id:'eduardo', x:50, y:8, img:'img/avatar2.jpg', name:'Dr. Eduardo Bringa', role:{es:'Director del Laboratorio · Investigador Principal CONICET', en:'Lab Director · Principal Investigator CONICET'}, tag:'PI', hue:'#0050f0', pubs:'publicaciones-ebringa.html' },
    { id:'gonzalo', x:18, y:22, img:'img/avatar1.jpg', name:'Dr. Gonzalo Dos Santos', role:{es:'Investigador Adjunto CONICET', en:'Associate Researcher CONICET'}, tag:'Inv. Adj.', hue:'#f02850', pubs:'gonzalo_dos_santos_publications.html' },
    { id:'diego', x:80, y:22, img:'img/avatardiegod.jpg', name:'Dr. Ing. Diego R. Tramontina', role:{es:'Investigador Adjunto CONICET', en:'Associate Researcher CONICET'}, tag:'Inv. Adj.', hue:'#7828c8', pubs:'diego_tramontina_publications.html' },
    { id:'geraudys', x:8, y:44, img:'img/avatar6.jpg', name:'Dr. Geraudys Mora Barzaga', role:{es:'Becario Postdoctoral CONICET', en:'Postdoctoral Fellow CONICET'}, tag:'Postdoc', hue:'#00a050', pubs:'gera_mora_publications.html' },
    { id:'orlando', x:32, y:44, img:'img/avatar4.jpg', name:'Dr. Orlando Deluigi', role:{es:'Becario Postdoctoral CONICET', en:'Postdoctoral Fellow CONICET'}, tag:'Postdoc', hue:'#f0a028', pubs:'orlando_deluigi_publications.html' },
    { id:'federico', x:68, y:44, img:'img/avatar9.jpg', name:'Lic. Federico A. Cartellone', role:{es:'Becario Doctoral CONICET', en:'Doctoral Fellow CONICET'}, tag:'Doctoral', hue:'#00a0c8', pubs:'fede_cartellone_publications.html' },
    { id:'santiago', x:88, y:44, img:'img/avatar5.jpg', name:'Lic. Santiago Bergamin Saua', role:{es:'Becario Doctoral CONICET', en:'Doctoral Fellow CONICET'}, tag:'Doctoral', hue:'#78c828', pubs:null },
    { id:'tomas', x:38, y:68, img:'img/avatar8.jpg', name:'Lic. Tomás Agustín Escalante', role:{es:'Becario Doctoral CONICET', en:'Doctoral Fellow CONICET'}, tag:'Doctoral', hue:'#f00078', pubs:null },
    { id:'maria', x:62, y:68, img:'img/avatar3.jpg', name:'Lic. María José Buzzachi', role:{es:'Becaria Doctoral CONICET', en:'Doctoral Fellow CONICET'}, tag:'Doctoral', hue:'#2828f0', pubs:null },
    { id:'enrique', x:14, y:82, img:null, name:'Enrique Miranda', role:{es:'Colaborador', en:'Collaborator'}, tag:'Red', hue:'#c84080', pubs:null },
    { id:'fiorella', x:30, y:92, img:null, name:'Fiorella Di Rocco', role:{es:'Colaboradora', en:'Collaborator'}, tag:'Red', hue:'#00a0c8', pubs:null },
    { id:'micaela', x:46, y:86, img:null, name:'Micaela Moron', role:{es:'Colaboradora', en:'Collaborator'}, tag:'Red', hue:'#00a050', pubs:null },
    { id:'carlos', x:62, y:92, img:null, name:'Carlos Ruestes', role:{es:'Colaborador', en:'Collaborator'}, tag:'Red', hue:'#f0a028', pubs:null },
    { id:'emmanuel', x:78, y:86, img:null, name:'Emmanuel Millan', role:{es:'Colaborador', en:'Collaborator'}, tag:'Red', hue:'#7828c8', pubs:null },
    { id:'nadhir', x:90, y:82, img:null, name:'Nadhir Naciff', role:{es:'Colaborador', en:'Collaborator'}, tag:'Red', hue:'#f02850', pubs:null },
  ];
  const byId = Object.fromEntries(people.map(person => [person.id, person]));
  const links = [
    ['eduardo','gonzalo'], ['eduardo','diego'], ['eduardo','orlando'], ['eduardo','federico'], ['eduardo','maria'],
    ['gonzalo','geraudys'], ['gonzalo','orlando'], ['diego','federico'], ['diego','santiago'], ['orlando','tomas'],
    ['federico','maria'], ['tomas','micaela'], ['maria','carlos'], ['geraudys','enrique'], ['orlando','fiorella'],
    ['santiago','emmanuel'], ['santiago','nadhir'], ['enrique','fiorella'], ['fiorella','micaela'], ['micaela','carlos'],
    ['carlos','emmanuel'], ['emmanuel','nadhir'],
  ];
  const avatarFallbacks = img => {
    const file = img.replace('img/', '');
    return [`../../img/${file}`, `/img/${file}`];
  };
  const onAvatarError = img => e => {
    const node = e.currentTarget;
    const pending = node.dataset.fallbacks ? node.dataset.fallbacks.split('|').filter(Boolean) : avatarFallbacks(img);
    const next = pending.shift();
    node.dataset.fallbacks = pending.join('|');
    if (next) {
      node.src = next;
    } else {
      node.style.display = 'none';
      node.nextSibling.style.display = 'flex';
    }
  };
  const initials = name => name.replace(/^(Dr\. Ing\.|Dr\.|Lic\.)\s*/, '').split(' ').filter((_,i,a) => i===0||i===a.length-1).map(word => word[0]).join('');

  return (
    <main data-screen-label="06 Network" style={netStyles.wrap}>
      <style>{`
        .network-card {
          --card-x: 50%;
          --card-y: 50%;
          position: absolute;
          left: var(--card-x);
          top: var(--card-y);
          transform: translate(-50%, -50%);
          transition: transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
        }
        .network-card:hover {
          transform: translate(-50%, calc(-50% - 6px));
          border-color: var(--person-hue);
          box-shadow: 0 16px 34px rgba(15, 53, 111, 0.14);
        }
        .network-card:hover .network-tag {
          color: var(--person-hue);
        }
        @media (max-width: 980px) {
          .network-map { height: auto !important; display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
          .network-lines { display: none; }
          .network-card { position: relative; left: auto; top: auto; transform: none; width: 100% !important; min-height: 132px; }
          .network-card:hover { transform: translateY(-4px); }
        }
        @media (max-width: 680px) {
          .network-map { grid-template-columns: 1fr; }
          .network-head { align-items: flex-start; flex-direction: column; gap: 6px; }
        }
      `}</style>
      <section style={netStyles.hero}>
        <div style={netStyles.eye}>{lang==='es'?'Red de contactos':'Contact network'}</div>
        <h1 style={netStyles.h}>{lang==='es'?'Investigadores y colaboradores conectados por proyectos compartidos.':'Researchers and collaborators connected through shared projects.'}</h1>
      </section>
      <section className="network-head" style={netStyles.head}>
        <span style={{fontWeight:600, color:'var(--fg)'}}>{lang==='es'?'Red SiMAF':'SiMAF network'}</span>
        <span>{people.length} · {lang==='es'?'Investigadores y colaboradores':'Researchers and collaborators'}</span>
      </section>
      <section className="network-map" style={netStyles.map}>
        <svg className="network-lines" viewBox="0 0 100 100" preserveAspectRatio="none" style={netStyles.lines} aria-hidden="true">
          {links.map(([from, to]) => (
            <line key={`${from}-${to}`} x1={byId[from].x} y1={byId[from].y} x2={byId[to].x} y2={byId[to].y} style={netStyles.line} />
          ))}
        </svg>
        {people.map(person => (
          <article key={person.id} className="network-card" style={{...netStyles.card, '--card-x':`${person.x}%`, '--card-y':`${person.y}%`, '--person-hue':person.hue}}>
            <div style={netStyles.avatarWrap}>
              {person.img && (
                <img
                  src={person.img}
                  data-fallbacks={avatarFallbacks(person.img).join('|')}
                  alt={person.name}
                  style={netStyles.avatarImg}
                  onError={onAvatarError(person.img)}
                />
              )}
              <div style={{...netStyles.avatarFallback, background:`linear-gradient(135deg, #00173c, ${person.hue})`, display:person.img ? 'none' : 'flex'}}>
                {initials(person.name)}
              </div>
            </div>
            <div>
              <div style={netStyles.name}>{person.name}</div>
              <div style={netStyles.role}>{person.role[lang]}</div>
              <div className="network-tag" style={netStyles.tag}>{person.tag}</div>
              {person.pubs && (
                <a href={person.pubs} style={netStyles.link}>
                  {lang==='es'?'Publicaciones →':'Publications →'}
                </a>
              )}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

const netStyles = {
  wrap: { padding:'64px 48px 48px', maxWidth:1280, margin:'0 auto' },
  hero: { borderTop:'3px double var(--rule)', paddingTop:28, marginBottom:36 },
  eye: { fontFamily:'var(--font-sans)', fontSize:11, letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--fg-muted)' },
  h: { fontFamily:'var(--font-serif)', fontSize:52, fontWeight:500, lineHeight:1.1, margin:'12px 0 0', maxWidth:'20ch' },
  head: { borderTop:'1px solid var(--rule)', borderBottom:'1px solid var(--rule)', padding:'8px 0', display:'flex', justifyContent:'space-between', fontFamily:'var(--font-sans)', fontSize:11, letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--fg-muted)', marginBottom:26 },
  map: { position:'relative', height:820, margin:'0 auto', overflow:'visible' },
  lines: { position:'absolute', inset:0, width:'100%', height:'100%', pointerEvents:'none' },
  line: { stroke:'color-mix(in srgb, var(--accent) 36%, var(--border))', strokeWidth:0.16, vectorEffect:'non-scaling-stroke' },
  card: { width:218, minHeight:124, display:'flex', gap:14, alignItems:'flex-start', padding:'18px 16px', border:'1px solid var(--border)', background:'color-mix(in srgb, #fff 94%, var(--bg))', borderRadius:2, zIndex:2 },
  avatarWrap: { width:52, height:52, borderRadius:'50%', overflow:'hidden', flexShrink:0 },
  avatarImg: { width:52, height:52, objectFit:'cover', borderRadius:'50%', display:'block' },
  avatarFallback: { width:52, height:52, borderRadius:'50%', color:'#fbf9f4', alignItems:'center', justifyContent:'center', fontFamily:'var(--font-serif)', fontSize:18 },
  name: { fontFamily:'var(--font-serif)', fontSize:16, fontWeight:500, color:'var(--fg)', lineHeight:1.18 },
  role: { fontFamily:'var(--font-serif)', fontStyle:'italic', fontSize:13, color:'var(--fg-muted)', marginTop:4, lineHeight:1.35 },
  tag: { fontFamily:'var(--font-sans)', fontSize:10, fontWeight:600, letterSpacing:'0.12em', textTransform:'uppercase', color:'var(--fg-muted)', marginTop:8 },
  link: { fontFamily:'var(--font-sans)', fontSize:12, color:'var(--accent)', textDecoration:'none', marginTop:6, display:'inline-block' },
};
