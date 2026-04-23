window.Collaborations = function Collaborations({ lang }) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [topic, setTopic] = React.useState('');
  const [message, setMessage] = React.useState('');
  const copy = {
    es: {
      eye: 'Colaboraciones',
      h: 'Proyectos compartidos, simulación y ciencia computacional.',
      lead: 'SiMAF recibe consultas de grupos académicos, instituciones, estudiantes y equipos que necesiten modelado atomístico, dinámica molecular, cálculos ab initio, astrofísica computacional o análisis de materiales.',
      mailLabel: 'Contacto principal',
      direct: 'Escribir directo',
      formTitle: 'Preparar un correo',
      name: 'Nombre',
      email: 'Correo',
      topic: 'Tema',
      message: 'Mensaje',
      send: 'Abrir correo',
      areas: 'Áreas de colaboración',
      contacts: 'Correos de contacto',
      note: 'El botón abre tu cliente de correo con el mensaje listo para revisar y enviar.',
      placeholders: {
        name: 'Nombre y afiliación',
        email: 'tu@email.edu',
        topic: 'Simulación, materiales, astrofísica...',
        message: 'Contanos brevemente la idea, escala del problema, tiempos y datos disponibles.'
      },
      list: [
        'Simulaciones de dinámica molecular y materiales bajo condiciones extremas',
        'High entropy alloys, nanopartículas, nanoindentación y daño',
        'Astrofísica computacional, agregados granulares y procesos colisionales',
        'Tesis, pasantías, proyectos conjuntos y uso de herramientas HPC'
      ],
    },
    en: {
      eye: 'Collaborations',
      h: 'Shared projects, simulation, and computational science.',
      lead: 'SiMAF welcomes inquiries from academic groups, institutions, students, and teams working on atomistic modeling, molecular dynamics, ab initio calculations, computational astrophysics, or materials analysis.',
      mailLabel: 'Main contact',
      direct: 'Write directly',
      formTitle: 'Prepare an email',
      name: 'Name',
      email: 'Email',
      topic: 'Topic',
      message: 'Message',
      send: 'Open email',
      areas: 'Collaboration areas',
      contacts: 'Contact emails',
      note: 'The button opens your email client with a message ready to review and send.',
      placeholders: {
        name: 'Name and affiliation',
        email: 'you@email.edu',
        topic: 'Simulation, materials, astrophysics...',
        message: 'Briefly describe the idea, problem scale, timing, and available data.'
      },
      list: [
        'Molecular dynamics simulations and materials under extreme conditions',
        'High entropy alloys, nanoparticles, nanoindentation, and damage',
        'Computational astrophysics, granular aggregates, and collision processes',
        'Theses, internships, joint projects, and HPC tool usage'
      ],
    },
  }[lang];

  const contacts = ['simaf@uncu.edu.ar', 'ebringa@mendoza-conicet.gob.ar'];
  const subject = topic || (lang === 'es' ? 'Consulta de colaboración SiMAF' : 'SiMAF collaboration inquiry');
  const body = [
    name && `${copy.name}: ${name}`,
    email && `${copy.email}: ${email}`,
    message
  ].filter(Boolean).join('\n\n');
  const mailHref = `mailto:${contacts.join(',')}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <main className="collab-wrap" data-screen-label="05 Collaborations" style={collabStyles.wrap}>
      <style>{`
        @media (max-width: 900px) {
          .collab-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 680px) {
          .collab-wrap { padding: 40px 22px 0 !important; }
          .collab-title { font-size: 40px !important; }
          .collab-lead { font-size: 19px !important; }
        }
      `}</style>
      <section style={collabStyles.head}>
        <div style={collabStyles.eye}>{copy.eye}</div>
        <h1 className="collab-title" style={collabStyles.h}>{copy.h}</h1>
        <p className="collab-lead" style={collabStyles.lead}>{copy.lead}</p>
      </section>
      <section className="collab-grid" style={collabStyles.grid}>
        <div style={collabStyles.panel}>
          <div style={collabStyles.kicker}>{copy.areas}</div>
          <ul style={collabStyles.list}>
            {copy.list.map(item => <li key={item} style={collabStyles.item}>{item}</li>)}
          </ul>
          <div style={collabStyles.kicker}>{copy.contacts}</div>
          <div style={collabStyles.contacts}>
            {contacts.map(mail => (
              <a key={mail} href={`mailto:${mail}`} style={collabStyles.mail}>
                <span style={collabStyles.mailLabel}>{copy.mailLabel}</span>
                <span>{mail}</span>
              </a>
            ))}
          </div>
        </div>
        <form style={collabStyles.form} onSubmit={e => { e.preventDefault(); window.location.href = mailHref; }}>
          <div style={collabStyles.kicker}>{copy.formTitle}</div>
          <label style={collabStyles.label}>
            {copy.name}
            <input value={name} onChange={e => setName(e.target.value)} placeholder={copy.placeholders.name} style={collabStyles.input} />
          </label>
          <label style={collabStyles.label}>
            {copy.email}
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder={copy.placeholders.email} style={collabStyles.input} />
          </label>
          <label style={collabStyles.label}>
            {copy.topic}
            <input value={topic} onChange={e => setTopic(e.target.value)} placeholder={copy.placeholders.topic} style={collabStyles.input} />
          </label>
          <label style={collabStyles.label}>
            {copy.message}
            <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder={copy.placeholders.message} rows="7" style={collabStyles.textarea} />
          </label>
          <button type="submit" style={collabStyles.button}>{copy.send}</button>
          <p style={collabStyles.note}>{copy.note}</p>
        </form>
      </section>
    </main>
  );
};

const collabStyles = {
  wrap: { padding:'64px 48px 0', maxWidth:1280, margin:'0 auto' },
  head: { borderTop:'3px double var(--rule)', paddingTop:28, marginBottom:42 },
  eye: { fontFamily:'var(--font-sans)', fontSize:11, letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--fg-muted)' },
  h: { fontFamily:'var(--font-serif)', fontSize:56, fontWeight:500, lineHeight:1.1, margin:'12px 0 20px', maxWidth:'18ch' },
  lead: { fontFamily:'var(--font-serif)', fontStyle:'italic', fontSize:22, lineHeight:1.55, color:'var(--fg-muted)', margin:0, maxWidth:'64ch' },
  grid: { display:'grid', gridTemplateColumns:'minmax(0, 1fr) minmax(320px, 460px)', gap:40, alignItems:'start' },
  panel: { borderTop:'1px solid var(--rule)', paddingTop:22 },
  form: { display:'grid', gap:16, border:'1px solid var(--border)', background:'#fff', borderRadius:4, padding:24 },
  kicker: { fontFamily:'var(--font-sans)', fontSize:11, fontWeight:700, letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--fg-muted)', marginBottom:14 },
  list: { listStyle:'none', padding:0, margin:'0 0 34px' },
  item: { borderBottom:'1px solid var(--border)', padding:'16px 0', fontFamily:'var(--font-serif)', fontSize:20, lineHeight:1.4, color:'var(--fg)' },
  contacts: { display:'grid', gap:10 },
  mail: { display:'grid', gap:4, border:'1px solid var(--border)', borderRadius:4, padding:'14px 16px', textDecoration:'none', background:'color-mix(in srgb, var(--bg) 84%, white)', color:'var(--fg)' },
  mailLabel: { fontFamily:'var(--font-sans)', fontSize:11, letterSpacing:'0.12em', textTransform:'uppercase', color:'var(--fg-muted)' },
  label: { display:'grid', gap:7, fontFamily:'var(--font-sans)', fontSize:12, fontWeight:700, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--fg-muted)' },
  input: { width:'100%', border:'1px solid var(--border-strong)', borderRadius:4, background:'#fff', color:'var(--fg)', fontFamily:'var(--font-sans)', fontSize:14, padding:'12px 14px', textTransform:'none', letterSpacing:0 },
  textarea: { width:'100%', border:'1px solid var(--border-strong)', borderRadius:4, background:'#fff', color:'var(--fg)', fontFamily:'var(--font-sans)', fontSize:14, padding:'12px 14px', resize:'vertical', textTransform:'none', letterSpacing:0 },
  button: { justifySelf:'start', border:'1px solid var(--accent)', borderRadius:4, background:'var(--accent)', color:'#fff', fontFamily:'var(--font-sans)', fontSize:13, fontWeight:700, padding:'12px 18px', cursor:'pointer' },
  note: { margin:0, color:'var(--fg-muted)', fontFamily:'var(--font-sans)', fontSize:13, lineHeight:1.5 },
};
