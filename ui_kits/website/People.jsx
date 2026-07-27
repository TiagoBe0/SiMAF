window.People = function People({ lang, setScreen }) {

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

  const members = [
    { img:'img/avatar2.jpg', name:'Dr. Eduardo Bringa', role:{es:'Director del Laboratorio · Investigador Principal CONICET', en:'Lab Director · Principal Investigator CONICET'}, tag:'PI', hue:'#0050f0', pubs:'publicaciones-ebringa.html', scholar:'https://scholar.google.com/citations?hl=en&user=Wy-8BgYAAAAJ', web:'https://bicyt.conicet.gov.ar/fichas/p/eduardo-marcial-bringa' },
    { img:'img/avatar1.jpg', name:'Dr. Gonzalo Dos Santos', role:{es:'Investigador Adjunto CONICET', en:'Associate Researcher CONICET'}, tag:'Inv. Adj.', hue:'#f02850', pubs:'gonzalo_dos_santos_publications.html', scholar:'https://scholar.google.com/citations?hl=en&user=3D1TbpUAAAAJ', web:'https://bicyt.conicet.gov.ar/fichas/p/gonzalo-joaquin-dos-santos-mendez' },
    { img:'img/avatardiegod.jpg', name:'Dr. Ing. Diego R. Tramontina', role:{es:'Investigador Adjunto CONICET', en:'Associate Researcher CONICET'}, tag:'Inv. Adj.', hue:'#7828c8', pubs:'diego_tramontina_publications.html', scholar:'https://scholar.google.com/citations?hl=en&user=K3WsuskAAAAJ', web:'https://bicyt.conicet.gov.ar/fichas/p/diego-ramiro-tramontina-videla' },
    { img:'img/avatar6.jpg', name:'Dr. Geraudys Mora Barzaga', role:{es:'Becario Postdoctoral CONICET', en:'Postdoctoral Fellow CONICET'}, tag:'Postdoc', hue:'#00a050', pubs:'gera_mora_publications.html', scholar:null, web:'https://www.conicet.gov.ar/new_scp/detalle.php?id=51224&datos_academicos=yes' },
    { img:'img/avatar4.jpg', name:'Dr. Orlando Deluigi', role:{es:'Becario Postdoctoral CONICET', en:'Postdoctoral Fellow CONICET'}, tag:'Postdoc', hue:'#f0a028', pubs:'orlando_deluigi_publications.html', scholar:null, web:'https://bicyt.conicet.gov.ar/fichas/p/orlando-raul-deluigi' },
    { img:'img/avatar9.jpg', name:'Lic. Federico A. Cartellone', role:{es:'Becario Doctoral CONICET', en:'Doctoral Fellow CONICET'}, tag:'Doctoral', hue:'#00a0c8', pubs:'fede_cartellone_publications.html', scholar:null, web:null },
    { img:'img/avatar5.jpg', name:'Lic. Santiago Bergamin Saua', role:{es:'Becario Doctoral CONICET', en:'Doctoral Fellow CONICET'}, tag:'Doctoral', hue:'#78c828', pubs:null, scholar:null, web:null },
    { img:'img/avatar8.jpg', name:'Lic. Tomás Agustín Escalante', role:{es:'Becario Doctoral CONICET', en:'Doctoral Fellow CONICET'}, tag:'Doctoral', hue:'#f00078', pubs:null, scholar:null, web:null },
    { img:'img/avatar3.jpg', name:'Lic. María José Buzzachi', role:{es:'Becaria Doctoral CONICET', en:'Doctoral Fellow CONICET'}, tag:'Doctoral', hue:'#2828f0', pubs:null, scholar:null, web:null },
  ];

  const prevMembers = [
    { name:'Carlos Javier Ruestes', scholar:'https://scholar.google.com/citations?hl=en&user=EKM6s_wAAAAJ', web:'https://bicyt.conicet.gov.ar/fichas/p/carlos-javier-ruestes' },
    { name:'Emmanuel Nicolas Millán', scholar:'https://scholar.google.com/citations?hl=en&user=EN96EIEAAAAJ', web:null },
    { name:'María Belén Planes', scholar:'https://scholar.google.com/citations?hl=en&user=PLn6xOYAAAAJ', web:'https://bicyt.conicet.gov.ar/fichas/p/maria-belen-planes' },
    { name:'Franco Aquistapace', scholar:'https://scholar.google.com/citations?hl=en&user=lFvk7zYAAAAJ', web:null },
    { name:'Joaquín Rodriguez Nieva', scholar:null, web:null },
    { name:'Pablo Piaggi', scholar:'https://scholar.google.com/citations?hl=en&user=vaG5YHkAAAAJ', web:null },
    { name:'Jesus Martinez-Asencio', scholar:null, web:null },
    { name:'Alejandro Prada Valverde', scholar:null, web:null },
    { name:'Enrique N. Miranda', scholar:'https://scholar.google.com/citations?hl=en&user=a3IcBeEAAAAJ', web:null },
    { name:'Dalia Bertoldi', scholar:null, web:null },
    { name:'Martin Parlanti', scholar:null, web:null },
    { name:'Joas Grossi', scholar:'https://scholar.google.com/citations?hl=en&user=bciIxu4AAAAJ', web:null },
    { name:'Gonzalo Garcia Vidable', scholar:null, web:null },
    { name:'Romina Aparicio', scholar:null, web:null },
    { name:'Emiliano Aparicio', scholar:null, web:null },
  ];

  const gradThesis = [
    { name:'Micaela Moron', scholar:null, web:null },
  ];

  const gradStudents = [
    { name:'Nadhir Naciff', scholar:null, web:null },
    { name:'Facundo Gonzalez Cona', scholar:null, web:null },
  ];

  const collaborators = [
    {
      country: 'Argentina', flag: '🇦🇷',
      people: [
        { name:'Carlos Catania', scholar:null, web:'https://bicyt.conicet.gov.ar/fichas/p/carlos-adrian-catania' },
        { name:'Eduardo Crespo', scholar:null, web:'https://rtyc.utn.edu.ar/index.php/rtyc/article/view/1780' },
        { name:'Susana Ramos', scholar:'https://scholar.google.com/citations?hl=en&user=OFOP-vIAAAAJ', web:null },
        { name:'Flavia Gomez Albarracin', scholar:'https://scholar.google.com/citations?hl=en&user=fjzYz3IAAAAJ', web:null },
        { name:'Diego Rosales', scholar:'https://scholar.google.com/citations?hl=en&user=PQCpApUAAAAJ', web:null },
      ],
    },
    {
      country: 'Chile', flag: '🇨🇱',
      people: [
        { name:'Felipe Valencia', scholar:'https://scholar.google.com/citations?hl=en&user=BC1CUIYAAAAJ', web:null },
        { name:'Samuel Baltazar', scholar:'https://scholar.google.com/citations?hl=en&user=K2adjKMAAAAJ', web:'https://fisica.usach.cl/es/academicos/samuel-baltazar-rojas' },
        { name:'Rafael Gonzalez', scholar:'https://scholar.google.com/citations?hl=en&user=0K20J-QAAAAJ', web:null },
        { name:'Nicolás Amigo', scholar:'https://scholar.google.com/citations?hl=en&user=LuBmnwYAAAAJ', web:null },
        { name:'Patricio Vargas', scholar:'https://scholar.google.com/citations?hl=en&user=mYWIQd4AAAAJ', web:null },
      ],
    },
    {
      country: 'Brasil', flag: '🇧🇷',
      people: [
        { name:'Ricardo Papaleo', scholar:'https://scholar.google.com/citations?hl=en&user=Dj78Is8AAAAJ', web:'https://www.pucrs.br/researchers/ricardo-meurer-papaleo/' },
      ],
    },
    {
      country: 'Panamá', flag: '🇵🇦',
      people: [
        { name:'Reinhardt Pinzon', scholar:'https://scholar.google.com/citations?hl=en&user=1TICxmUAAAAJ', web:null },
      ],
    },
    {
      country: lang === 'es' ? 'Estados Unidos' : 'United States', flag: '🇺🇸',
      people: [
        { name:'Marc Meyers', scholar:'https://scholar.google.com/citations?hl=en&user=hIlQFf4AAAAJ', web:'https://jacobsschool.ucsd.edu/people/profile/marc-meyers' },
        { name:'Alfredo Caro', scholar:'https://scholar.google.com/citations?hl=en&user=qDYJB-YAAAAJ', web:null },
        { name:'Diana Farkas', scholar:null, web:'https://mse.vt.edu/faculty-staff/emeritus-faculty/diana-farkas.html' },
        { name:'Robert Rudd', scholar:'https://scholar.google.com/citations?hl=en&user=Qt9wbtoAAAAJ', web:'https://people.llnl.gov/rudd1' },
        { name:'Svetoslav Nikolov', scholar:'https://scholar.google.com/citations?hl=en&user=NPA5odkAAAAJ', web:null },
      ],
    },
    {
      country: lang === 'es' ? 'Alemania' : 'Germany', flag: '🇩🇪',
      people: [
        { name:'Herbert Urbassek', scholar:null, web:null },
        { name:'Nina Merkert', scholar:null, web:null },
        { name:'Gustavo Pastor', scholar:null, web:'https://www.uni-kassel.de/fb10/en/institute/physik/forschungsgruppen/nanopartikel-und-nanostrukturen/prof-dr-g-m-pastor' },
        { name:'Ina Schubert', scholar:'https://scholar.google.com/citations?hl=en&user=ZqBt1UEAAAAJ', web:null },
      ],
    },
    {
      country: lang === 'es' ? 'España' : 'Spain', flag: '🇪🇸',
      people: [
        { name:'María José Caturla', scholar:'https://scholar.google.com/citations?hl=en&user=v6xdAEoAAAAJ', web:null },
        { name:'Raquel González Arrabal', scholar:'https://scholar.google.com/citations?hl=en&user=q6i0jMwAAAAJ', web:null },
      ],
    },
    {
      country: lang === 'es' ? 'Francia' : 'France', flag: '🇫🇷',
      people: [
        { name:'Julien Tranchida', scholar:'https://scholar.google.com/citations?hl=en&user=Vu_dHNgAAAAJ', web:null },
      ],
    },
  ];

  const PersonLinks = ({ p, dark }) => (
    <span style={{display:'flex', gap:8, flexShrink:0}}>
      {p.scholar && (
        <a href={p.scholar} target="_blank" rel="noopener noreferrer" className="scholar-link"
           style={dark ? pplStyles.scholarLinkDark : pplStyles.scholarLink}>
          Scholar →
        </a>
      )}
      {p.web && (
        <a href={p.web} target="_blank" rel="noopener noreferrer" className="web-link"
           style={dark ? pplStyles.webLinkDark : pplStyles.webLink}>
          Web →
        </a>
      )}
    </span>
  );

  return (
    <section style={pplStyles.wrap}>
      <style>{`
        @keyframes simaf-person-card-in {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes simaf-section-in {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .person-card {
          animation: simaf-person-card-in 620ms ease both;
          transition: transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
        }
        .person-card:hover {
          transform: translateY(-6px);
          border-color: var(--person-hue);
          box-shadow: 0 16px 34px rgba(15, 53, 111, 0.14);
        }
        .person-card:hover .person-avatar-img,
        .person-card:hover .person-avatar-fallback {
          transform: scale(1.07);
        }
        .person-card:hover .person-tag {
          color: var(--person-hue);
        }
        .extra-section {
          animation: simaf-section-in 420ms ease both;
        }
        .person-row:hover {
          background: rgba(0,50,120,0.06);
        }
        .scholar-link:hover {
          text-decoration: underline;
          color: #003da0 !important;
        }
        .web-link:hover {
          text-decoration: underline;
          color: #5a007a !important;
        }
        .toggle-btn:hover {
          background: rgba(0,80,240,0.06) !important;
        }
        @keyframes globe-spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to   { transform: translate(-50%, -50%) rotate(360deg); }
        }
        .globe-bg {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 110%;
          opacity: 0.18;
          pointer-events: none;
          animation: globe-spin 60s linear infinite;
        }
        .collab-country-card:hover {
          border-color: rgba(0,60,180,0.35) !important;
          box-shadow: 0 4px 24px rgba(0,40,120,0.10);
        }
        @media (max-width: 980px) {
          .people-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .collab-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 680px) {
          .people-grid { grid-template-columns: 1fr !important; }
          .collab-grid { grid-template-columns: 1fr !important; }
          .people-head { align-items: flex-start; flex-direction: column; gap: 6px; }
        }
      `}</style>

      {/* ── Header ── */}
      <div className="people-head" style={pplStyles.head}>
        <span style={{fontWeight:600, color:'var(--fg)'}}>
          {lang==='es' ? 'Equipo de investigación' : 'Research team'}
        </span>
        <span style={pplStyles.headActions}>
          <span>{members.length} · Universidad de Mendoza</span>
          <button type="button" onClick={() => setScreen && setScreen('network')} style={pplStyles.networkLink}>
            {lang==='es' ? 'Ver red de contactos' : 'View contact network'} →
          </button>
        </span>
      </div>

      {/* ── Main members grid ── */}
      <div className="people-grid" style={pplStyles.grid}>
        {members.map((m, i) => (
          <div key={m.name} className="person-card" style={{...pplStyles.card, '--person-hue':m.hue, animationDelay:`${i * 70}ms`}}>
            <div style={pplStyles.avatarWrap}>
              <img
                src={m.img}
                data-fallbacks={avatarFallbacks(m.img).join('|')}
                alt={m.name}
                className="person-avatar-img"
                style={pplStyles.avatarImg}
                onError={onAvatarError(m.img)}
              />
              <div className="person-avatar-fallback" style={{...pplStyles.avatarFallback, background:`linear-gradient(135deg, #00173c, ${m.hue})`, display:'none'}}>
                {m.name.split(' ').filter((_,i,a) => i===0||i===a.length-1).map(w=>w[0]).join('')}
              </div>
            </div>
            <div>
              <div style={pplStyles.name}>{m.name}</div>
              <div style={pplStyles.role}>{m.role[lang]}</div>
              <div className="person-tag" style={pplStyles.tag}>{m.tag}</div>
              <div style={{display:'flex', gap:10, flexWrap:'wrap', marginTop:6}}>
                {m.pubs && (
                  <a href={m.pubs} style={pplStyles.link}>
                    {lang==='es' ? 'Publicaciones →' : 'Publications →'}
                  </a>
                )}
                {m.scholar && (
                  <a href={m.scholar} target="_blank" rel="noopener noreferrer" style={{...pplStyles.link, color:'#1a6e3c'}}>
                    Scholar →
                  </a>
                )}
                {m.web && (
                  <a href={m.web} target="_blank" rel="noopener noreferrer" style={{...pplStyles.link, color:'#6a0dad'}}>
                    CONICET →
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Extra sections ── */}
      <div className="extra-section" style={pplStyles.extraWrap}>

          {/* Rotating globe image — decorative, behind content */}
          <img src="img/globe-network.jpg" alt="" className="globe-bg" aria-hidden="true" />

          {/* Inner content */}
          <div style={pplStyles.extraInner}>

          {/* Previous members */}
          <div style={pplStyles.sectionBlock}>
            <div style={pplStyles.sectionLabelDark}>
              {lang==='es' ? 'Integrantes previos' : 'Previous members'}
            </div>
            <div style={pplStyles.listGrid}>
              {prevMembers.map(p => (
                <div key={p.name} className="person-row" style={pplStyles.personRowDark}>
                  <span style={pplStyles.personRowNameDark}>{p.name}</span>
                  <PersonLinks p={p} dark />
                </div>
              ))}
            </div>
          </div>

          {/* Thesis students */}
          <div style={pplStyles.sectionBlock}>
            <div style={pplStyles.sectionLabelDark}>
              {lang==='es' ? 'Tesistas de grado' : 'Undergraduate thesis students'}
            </div>
            <div style={pplStyles.listGrid}>
              {gradThesis.map(p => (
                <div key={p.name} className="person-row" style={pplStyles.personRowDark}>
                  <span style={pplStyles.personRowNameDark}>{p.name}</span>
                  <PersonLinks p={p} dark />
                </div>
              ))}
            </div>
          </div>

          {/* Undergraduate students */}
          <div style={pplStyles.sectionBlock}>
            <div style={pplStyles.sectionLabelDark}>
              {lang==='es' ? 'Alumnos de grado' : 'Undergraduate students'}
            </div>
            <div style={pplStyles.listGrid}>
              {gradStudents.map(p => (
                <div key={p.name} className="person-row" style={pplStyles.personRowDark}>
                  <span style={pplStyles.personRowNameDark}>{p.name}</span>
                  <PersonLinks p={p} dark />
                </div>
              ))}
            </div>
          </div>

          {/* Current collaborators by country */}
          <div style={pplStyles.sectionBlock}>
            <div style={pplStyles.sectionLabelDark}>
              {lang==='es' ? 'Colaboradores actuales' : 'Current collaborators'}
            </div>
            <div className="collab-grid" style={pplStyles.collabGrid}>
              {collaborators.map(group => (
                <div key={group.country} className="collab-country-card" style={pplStyles.collabCountryDark}>
                  <div style={pplStyles.countryHeader}>
                    <span style={pplStyles.flag}>{group.flag}</span>
                    <span style={pplStyles.countryNameDark}>{group.country}</span>
                  </div>
                  {group.people.map(p => (
                    <div key={p.name} className="person-row" style={pplStyles.personRowDark}>
                      <span style={pplStyles.personRowNameDark}>{p.name}</span>
                      <PersonLinks p={p} dark />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          </div>{/* /extraInner */}

        </div>
    </section>
  );
};

const pplStyles = {
  wrap: { padding:'72px 48px', maxWidth:1280, margin:'0 auto' },
  head: { borderTop:'3px double var(--rule)', borderBottom:'1px solid var(--rule)', padding:'8px 0', display:'flex', justifyContent:'space-between', fontFamily:'var(--font-sans)', fontSize:11, letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--fg-muted)', marginBottom:40 },
  headActions: { display:'flex', alignItems:'center', gap:18 },
  networkLink: { border:'none', background:'none', padding:0, color:'var(--accent)', cursor:'pointer', fontFamily:'var(--font-sans)', fontSize:11, fontWeight:700, letterSpacing:'0.14em', textTransform:'uppercase' },
  grid: { display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:24 },
  card: { display:'flex', gap:16, alignItems:'flex-start', padding:'20px 18px', border:'1px solid var(--border)', background:'#fff', borderRadius:2 },
  avatarWrap: { width:56, height:56, borderRadius:'50%', overflow:'hidden', flexShrink:0 },
  avatarImg: { width:56, height:56, objectFit:'cover', borderRadius:'50%', display:'block' },
  avatarFallback: { width:56, height:56, borderRadius:'50%', color:'#fbf9f4', alignItems:'center', justifyContent:'center', fontFamily:'var(--font-serif)', fontSize:20 },
  name: { fontFamily:'var(--font-serif)', fontSize:17, fontWeight:500, color:'var(--fg)', lineHeight:1.2 },
  role: { fontFamily:'var(--font-serif)', fontStyle:'italic', fontSize:13, color:'var(--fg-muted)', marginTop:4, lineHeight:1.35 },
  tag: { fontFamily:'var(--font-sans)', fontSize:10, fontWeight:600, letterSpacing:'0.12em', textTransform:'uppercase', color:'var(--fg-muted)', marginTop:8 },
  link: { fontFamily:'var(--font-sans)', fontSize:12, color:'var(--accent)', textDecoration:'none', display:'inline-block' },
  toggleBtn: { fontFamily:'var(--font-sans)', fontSize:12, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', color:'var(--accent)', background:'none', border:'1px solid var(--border)', borderRadius:2, padding:'10px 22px', cursor:'pointer', transition:'background 160ms ease' },
  /* ── Globe background section ── */
  extraWrap: {
    marginTop: 0,
    position: 'relative',
    background: '#fff',
    borderRadius: 4,
    overflow: 'hidden',
  },
  extraInner: {
    position: 'relative',
    zIndex: 1,
    padding: '52px 48px 60px',
  },
  sectionBlock: { marginBottom: 48 },
  sectionLabel: { fontFamily:'var(--font-sans)', fontSize:11, fontWeight:700, letterSpacing:'0.16em', textTransform:'uppercase', color:'var(--fg-muted)', borderBottom:'1px solid var(--rule)', paddingBottom:8, marginBottom:16 },
  sectionLabelDark: { fontFamily:'var(--font-sans)', fontSize:11, fontWeight:700, letterSpacing:'0.16em', textTransform:'uppercase', color:'var(--fg-muted)', borderBottom:'1px solid rgba(0,0,0,0.12)', paddingBottom:8, marginBottom:16 },
  listGrid: { display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(260px, 1fr))', gap:'2px 24px' },
  personRow: { display:'flex', alignItems:'center', justifyContent:'space-between', gap:8, padding:'7px 10px', borderRadius:2, transition:'background 140ms ease' },
  personRowDark: { display:'flex', alignItems:'center', justifyContent:'space-between', gap:8, padding:'7px 10px', borderRadius:2, transition:'background 140ms ease' },
  personRowName: { fontFamily:'var(--font-serif)', fontSize:15, color:'var(--fg)' },
  personRowNameDark: { fontFamily:'var(--font-serif)', fontSize:15, color:'var(--fg)' },
  scholarLink: { fontFamily:'var(--font-sans)', fontSize:11, fontWeight:600, color:'#1a6e3c', textDecoration:'none', letterSpacing:'0.06em', flexShrink:0 },
  scholarLinkDark: { fontFamily:'var(--font-sans)', fontSize:11, fontWeight:600, color:'var(--accent)', textDecoration:'none', letterSpacing:'0.06em', flexShrink:0, transition:'color 140ms ease' },
  webLink: { fontFamily:'var(--font-sans)', fontSize:11, fontWeight:600, color:'#6a0dad', textDecoration:'none', letterSpacing:'0.06em', flexShrink:0 },
  webLinkDark: { fontFamily:'var(--font-sans)', fontSize:11, fontWeight:600, color:'#9b4dca', textDecoration:'none', letterSpacing:'0.06em', flexShrink:0, transition:'color 140ms ease' },
  collabGrid: { display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:24 },
  collabCountry: { border:'1px solid var(--border)', borderRadius:2, padding:'16px 18px', background:'#fff' },
  collabCountryDark: { border:'1px solid rgba(0,0,0,0.12)', borderRadius:3, padding:'16px 18px', background:'rgba(255,255,255,0.62)', backdropFilter:'blur(6px)', transition:'border-color 180ms ease, box-shadow 180ms ease' },
  countryHeader: { display:'flex', alignItems:'center', gap:8, marginBottom:12, paddingBottom:8, borderBottom:'1px solid var(--rule)' },
  flag: { fontSize:22, lineHeight:1 },
  countryName: { fontFamily:'var(--font-sans)', fontSize:11, fontWeight:700, letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--fg-muted)' },
  countryNameDark: { fontFamily:'var(--font-sans)', fontSize:11, fontWeight:700, letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--fg-muted)' },
};
