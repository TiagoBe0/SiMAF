window.People = function People({ lang, setScreen }) {
  const [showExtra, setShowExtra] = React.useState(false);

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
    { img:'img/avatar2.jpg', name:'Dr. Eduardo Bringa', role:{es:'Director del Laboratorio · Investigador Principal CONICET', en:'Lab Director · Principal Investigator CONICET'}, tag:'PI', hue:'#0050f0', pubs:'publicaciones-ebringa.html', scholar:'https://scholar.google.com/citations?hl=en&user=qDYJB-YAAAAJ' },
    { img:'img/avatar1.jpg', name:'Dr. Gonzalo Dos Santos', role:{es:'Investigador Adjunto CONICET', en:'Associate Researcher CONICET'}, tag:'Inv. Adj.', hue:'#f02850', pubs:'gonzalo_dos_santos_publications.html', scholar:null },
    { img:'img/avatardiegod.jpg', name:'Dr. Ing. Diego R. Tramontina', role:{es:'Investigador Adjunto CONICET', en:'Associate Researcher CONICET'}, tag:'Inv. Adj.', hue:'#7828c8', pubs:'diego_tramontina_publications.html', scholar:null },
    { img:'img/avatar6.jpg', name:'Dr. Geraudys Mora Barzaga', role:{es:'Becario Postdoctoral CONICET', en:'Postdoctoral Fellow CONICET'}, tag:'Postdoc', hue:'#00a050', pubs:'gera_mora_publications.html', scholar:null },
    { img:'img/avatar4.jpg', name:'Dr. Orlando Deluigi', role:{es:'Becario Postdoctoral CONICET', en:'Postdoctoral Fellow CONICET'}, tag:'Postdoc', hue:'#f0a028', pubs:'orlando_deluigi_publications.html', scholar:null },
    { img:'img/avatar9.jpg', name:'Lic. Federico A. Cartellone', role:{es:'Becario Doctoral CONICET', en:'Doctoral Fellow CONICET'}, tag:'Doctoral', hue:'#00a0c8', pubs:'fede_cartellone_publications.html', scholar:null },
    { img:'img/avatar5.jpg', name:'Lic. Santiago Bergamin Saua', role:{es:'Becario Doctoral CONICET', en:'Doctoral Fellow CONICET'}, tag:'Doctoral', hue:'#78c828', pubs:null, scholar:null },
    { img:'img/avatar8.jpg', name:'Lic. Tomás Agustín Escalante', role:{es:'Becario Doctoral CONICET', en:'Doctoral Fellow CONICET'}, tag:'Doctoral', hue:'#f00078', pubs:null, scholar:null },
    { img:'img/avatar3.jpg', name:'Lic. María José Buzzachi', role:{es:'Becaria Doctoral CONICET', en:'Doctoral Fellow CONICET'}, tag:'Doctoral', hue:'#2828f0', pubs:null, scholar:null },
  ];

  const prevMembers = [
    { name:'Dr. Carlos Javier Ruestes', scholar:'https://scholar.google.com/citations?hl=en&user=EKM6s_wAAAAJ' },
    { name:'Dr. Emmanuel Nicolas Millán', scholar:'https://scholar.google.com/citations?hl=en&user=EN96EIEAAAAJ' },
    { name:'Dra. Marian Belen Planes', scholar:'https://scholar.google.com/citations?hl=en&user=PLn6xOYAAAAJ' },
    { name:'Dr. Franco Aquistapace', scholar:'https://scholar.google.com/citations?hl=en&user=lFvk7zYAAAAJ' },
    { name:'Dr. Joaquín Rodriguez Nieva', scholar:null },
    { name:'Dr. Pablo Piaggi', scholar:'https://scholar.google.com/citations?hl=en&user=vaG5YHkAAAAJ' },
    { name:'Dr. Jesus Martinez-Asencio', scholar:null },
    { name:'Dr. Alejandro Prada Valverde', scholar:null },
    { name:'Dr. Enrique Miranda', scholar:'https://scholar.google.com/citations?hl=en&user=a3IcBeEAAAAJ' },
    { name:'Dra. Dalia Bertoldi', scholar:null },
    { name:'Dr. Martin Parlanti', scholar:null },
    { name:'Dr. Joas Grossi', scholar:'https://scholar.google.com/citations?hl=en&user=bciIxu4AAAAJ' },
    { name:'Lic. Gonzalo Garcia Vidable', scholar:null },
    { name:'Lic. Romina Aparicio', scholar:null },
    { name:'Lic. Emiliano Aparicio', scholar:null },
  ];

  const gradThesis = [
    { name:'Micaela Moron', scholar:null },
  ];

  const gradStudents = [
    { name:'Nadhir Naciff', scholar:null },
    { name:'Facundo Gonzalez Cona', scholar:null },
  ];

  const collaborators = [
    {
      country: 'Argentina', flag: '🇦🇷',
      people: [
        { name:'Carlos Catania', scholar:null },
        { name:'Eduardo Crespo', scholar:'https://rtyc.utn.edu.ar/index.php/rtyc/article/view/1780' },
        { name:'Susana Ramos', scholar:'https://scholar.google.com/citations?hl=en&user=OFOP-vIAAAAJ' },
        { name:'Flavia Gomez Albarracin', scholar:'https://scholar.google.com/citations?view_op=search_authors&mauthors=Flavia+Gomez+Albarracin&hl=en&oi=ao' },
        { name:'Diego Rosales', scholar:'https://scholar.google.com/citations?hl=en&user=PQCpApUAAAAJ' },
      ],
    },
    {
      country: 'Chile', flag: '🇨🇱',
      people: [
        { name:'Felipe Valencia', scholar:'https://scholar.google.cl/citations?user=BC1CUIYAAAAJ&hl=en' },
        { name:'Samuel Baltazar', scholar:'https://scholar.google.com/citations?user=K2adjKMAAAAJ&hl=es' },
        { name:'Rafael Gonzalez', scholar:null },
        { name:'Nicolás Amigo', scholar:'https://scholar.google.cl/citations?hl=en&user=LuBmnwYAAAAJ' },
        { name:'Patricio Vargas', scholar:'https://scholar.google.cl/citations?hl=en&user=mYWIQd4AAAAJ' },
      ],
    },
    {
      country: 'Brasil', flag: '🇧🇷',
      people: [
        { name:'Ricardo Papaleo', scholar:'https://scholar.google.cl/citations?hl=en&user=Dj78Is8AAAAJ' },
      ],
    },
    {
      country: 'Panamá', flag: '🇵🇦',
      people: [
        { name:'Reinhardt Pinzon', scholar:'https://scholar.google.cl/citations?hl=en&user=1TICxmUAAAAJ' },
      ],
    },
    {
      country: lang === 'es' ? 'Estados Unidos' : 'United States', flag: '🇺🇸',
      people: [
        { name:'Marc Meyers', scholar:null },
        { name:'Alfredo Caro', scholar:'https://scholar.google.cl/citations?hl=en&user=qDYJB-YAAAAJ' },
        { name:'Diana Farkas', scholar:null },
        { name:'Robert Rudd', scholar:'https://scholar.google.cl/citations?hl=en&user=Qt9wbtoAAAAJ' },
        { name:'Svetoslav Nikolov', scholar:'https://scholar.google.cl/citations?hl=en&user=NPA5odkAAAAJ' },
      ],
    },
    {
      country: lang === 'es' ? 'Alemania' : 'Germany', flag: '🇩🇪',
      people: [
        { name:'Herbert Urbassek', scholar:null },
        { name:'Nina Merkert', scholar:null },
        { name:'Gustavo Pastor', scholar:null },
        { name:'Ina Schubert', scholar:'https://scholar.google.cl/citations?hl=en&user=ZqBt1UEAAAAJ' },
        { name:'María José Caturla', scholar:'https://scholar.google.cl/citations?hl=en&user=v6xdAEoAAAAJ' },
        { name:'Raquel González Arrabal', scholar:'https://scholar.google.cl/citations?hl=en&user=q6i0jMwAAAAJ' },
      ],
    },
    {
      country: lang === 'es' ? 'Francia' : 'France', flag: '🇫🇷',
      people: [
        { name:'Julien Tranchida', scholar:'https://scholar.google.cl/citations?hl=en&user=Vu_dHNgAAAAJ' },
      ],
    },
  ];

  const ScholarLink = ({ url, label }) => url ? (
    <a href={url} target="_blank" rel="noopener noreferrer" style={pplStyles.scholarLink} title="Google Scholar">
      {label || (lang === 'es' ? 'Scholar →' : 'Scholar →')}
    </a>
  ) : null;

  const PersonRow = ({ person }) => (
    <div style={pplStyles.personRow}>
      <span style={pplStyles.personRowName}>{person.name}</span>
      {person.scholar && <ScholarLink url={person.scholar} />}
    </div>
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
        .toggle-btn:hover {
          background: rgba(0,80,240,0.06) !important;
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
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Toggle button ── */}
      <div style={{marginTop:48, textAlign:'center',
        background: showExtra ? 'linear-gradient(180deg,transparent 0%,rgba(255,255,255,0.75) 100%)' : 'none',
        borderRadius: showExtra ? '4px 4px 0 0' : 2,
        padding: showExtra ? '20px 0 0' : 0,
        transition: 'background 300ms ease',
      }}>
        <button
          type="button"
          className="toggle-btn"
          onClick={() => setShowExtra(v => !v)}
          style={{...pplStyles.toggleBtn,
            ...(showExtra ? {
              background:'rgba(255,255,255,0.70)',
              color:'var(--accent)',
              borderColor:'rgba(0,80,240,0.25)',
            } : {}),
          }}
        >
          {showExtra
            ? (lang==='es' ? '▲ Ocultar colaboradores e integrantes previos' : '▲ Hide collaborators & previous members')
            : (lang==='es' ? '▼ Ver colaboradores e integrantes previos' : '▼ Show collaborators & previous members')}
        </button>
      </div>

      {/* ── Extra sections ── */}
      {showExtra && (
        <div className="extra-section" style={pplStyles.extraWrap}>

          {/* Inner content padded inside overlay */}
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
                  {p.scholar && (
                    <a href={p.scholar} target="_blank" rel="noopener noreferrer" className="scholar-link" style={pplStyles.scholarLinkDark}>
                      Scholar →
                    </a>
                  )}
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
                  {p.scholar && (
                    <a href={p.scholar} target="_blank" rel="noopener noreferrer" className="scholar-link" style={pplStyles.scholarLinkDark}>
                      Scholar →
                    </a>
                  )}
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
                  {p.scholar && (
                    <a href={p.scholar} target="_blank" rel="noopener noreferrer" className="scholar-link" style={pplStyles.scholarLinkDark}>
                      Scholar →
                    </a>
                  )}
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
                      {p.scholar && (
                        <a href={p.scholar} target="_blank" rel="noopener noreferrer" className="scholar-link" style={pplStyles.scholarLinkDark}>
                          Scholar →
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          </div>{/* /extraInner */}

        </div>
      )}
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
  /* ── Globe background section (light image) ── */
  extraWrap: {
    marginTop: 0,
    position: 'relative',
    backgroundImage: 'url(img/globe-network.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center top',
    backgroundRepeat: 'no-repeat',
    borderRadius: 4,
    overflow: 'hidden',
  },
  extraInner: {
    position: 'relative',
    zIndex: 1,
    /* soft white fade so text stays readable over the light globe */
    background: 'linear-gradient(180deg, rgba(255,255,255,0.82) 0%, rgba(245,247,252,0.88) 100%)',
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
  collabGrid: { display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:24 },
  collabCountry: { border:'1px solid var(--border)', borderRadius:2, padding:'16px 18px', background:'#fff' },
  collabCountryDark: { border:'1px solid rgba(0,0,0,0.12)', borderRadius:3, padding:'16px 18px', background:'rgba(255,255,255,0.62)', backdropFilter:'blur(6px)', transition:'border-color 180ms ease, box-shadow 180ms ease' },
  countryHeader: { display:'flex', alignItems:'center', gap:8, marginBottom:12, paddingBottom:8, borderBottom:'1px solid var(--rule)' },
  flag: { fontSize:22, lineHeight:1 },
  countryName: { fontFamily:'var(--font-sans)', fontSize:11, fontWeight:700, letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--fg-muted)' },
  countryNameDark: { fontFamily:'var(--font-sans)', fontSize:11, fontWeight:700, letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--fg-muted)' },
};
