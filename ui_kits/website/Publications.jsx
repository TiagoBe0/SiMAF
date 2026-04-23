function publicationMiniatureCandidates(title) {
  const slug = value => value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
  const full = slug(title);
  const short = full.split('_').filter(Boolean).slice(0, 3).join('_');
  return [...new Set([short, full].filter(Boolean).map(name => `img/miniatures/${name}.png`))];
}

function PublicationMiniature({ title }) {
  const candidates = publicationMiniatureCandidates(title);
  const [index, setIndex] = React.useState(0);
  const src = candidates[index];
  if (!src) return null;
  const floatDelay = `${(title.length % 7) * -0.45}s`;
  return (
    <div className="publication-miniature" style={{...pubStyles.thumbWrap, animationDelay:floatDelay}}>
      <img
        src={src}
        alt=""
        style={pubStyles.thumb}
        onError={() => setIndex(current => current + 1)}
      />
    </div>
  );
}

window.Publications = function Publications({ lang, limit }) {
  const allPubs = [
  {
    "year": "2026",
    "title": "Cluster impact into high-entropy alloys: Deformation, hardness changes, and subgrain formation",
    "authors": "IA Alhafez, OR Deluigi, N Merkert, HM Urbassek, EM Bringa",
    "venue": "Journal of Materials Research and Technology",
    "volume": "",
    "url": "",
    "investigators": [
      "Eduardo M. Bringa",
      "Orlando Deluigi"
    ]
  },
  {
    "year": "2026",
    "title": "Mechanical properties of nanoporous TiO2: Atomistic simulations and experiments",
    "authors": "JI Ramallo, RI Gonzalez, MC Fuertes, EM Bringa",
    "venue": "Journal of the American Ceramic Society",
    "volume": "109 (1), e70333",
    "url": "",
    "investigators": [
      "Eduardo M. Bringa"
    ]
  },
  {
    "year": "2025",
    "title": "Atomic-scale simulations of solar wind sputtering of airless bodies by solar wind ions",
    "authors": "A Georgiou, BA Clouter-Gergen, K Nordlund, F Djurabekova, EM Bringa",
    "venue": "EPSC-DPS2025",
    "volume": "",
    "url": "",
    "investigators": [
      "Eduardo M. Bringa"
    ]
  },
  {
    "year": "2025",
    "title": "Comparacion mediante experimentos numericos de metales amorfos y cristalinos empleados en geometrias planas con imperfecciones",
    "authors": "CA Careglio, AE Mirasso, M Grioni, EM Bringa",
    "venue": "XLI Congreso Argentino de Mecanica Computacional",
    "volume": "",
    "url": "",
    "investigators": [
      "Eduardo M. Bringa"
    ]
  },
  {
    "year": "2025",
    "title": "Compression of refractory high-entropy alloy nanoparticles: Size and short-range order effects",
    "authors": "FA Cartellone, N Amigo, FR Roco, O Deluigi, FJ Valencia, EM Bringa",
    "venue": "International Journal of Refractory Metals and Hard Materials",
    "volume": "107498",
    "url": "https://doi.org/10.1016/j.ijrmhm.2025.107498",
    "investigators": [
      "Eduardo M. Bringa",
      "Federico A. Cartellone",
      "Orlando Deluigi"
    ]
  },
  {
    "year": "2025",
    "title": "Construction of granular aggregates with different porosity, shape, and size distributions",
    "authors": "EN Millan, MB Planes, EM Bringa, MG Parisi",
    "venue": "Granular Matter",
    "volume": "27 (1), 3",
    "url": "https://www.iar.unlp.edu.ar/biblio/htdocs/artic/contri/1862.pdf",
    "investigators": [
      "Eduardo M. Bringa"
    ]
  },
  {
    "year": "2025",
    "title": "Dust collisions in protoplanetary disks: From monodisperse to bidisperse grain aggregates",
    "authors": "F Parizek, MB Planes, EN Millan, MG Parisi, EM Bringa",
    "venue": "Astronomy & Astrophysics",
    "volume": "703, A180",
    "url": "",
    "investigators": [
      "Eduardo M. Bringa"
    ]
  },
  {
    "year": "2025",
    "title": "Dynamic strength measurement of iron at 450 GPa using direct laser-driven Rayleigh-Taylor instability",
    "authors": "YJ Kim, G Righi, OR Deluigi, CJ Ruestes, MA Meyers, RE Rudd",
    "venue": "DPP 2025",
    "volume": "",
    "url": "",
    "investigators": [
      "Eduardo M. Bringa",
      "Orlando Deluigi"
    ]
  },
  {
    "year": "2025",
    "title": "Dynamic strength of iron under pressure-temperature conditions of Earth's inner core",
    "authors": "YJ Kim, G Righi, O Deluigi, E Bringa, T Lockard, R Rudd, C Ruestes",
    "venue": "",
    "volume": "",
    "url": "",
    "investigators": [
      "Eduardo M. Bringa",
      "Orlando Deluigi"
    ]
  },
  {
    "year": "2025",
    "title": "Mechanical behaviour of hydrogenated nanoporous palladium",
    "authors": "W Schmidt, T Castro, E Bringa, M Ramirez, J Rogan, F Valencia",
    "venue": "Physical Chemistry Chemical Physics",
    "volume": "27 (22), 11830-11841",
    "url": "",
    "investigators": [
      "Eduardo M. Bringa"
    ]
  },
  {
    "year": "2025",
    "title": "Mechanical properties of High Entropy Alloy nanoparticles obtained by nanoindentation: A BCC HfNbZrTaTi and FCC FeNiCrCoCu case",
    "authors": "FR Roco, FJ Valencia, J Rogan, M Ramirez, FA Cartellone, EM Bringa",
    "venue": "Materials Today Communications",
    "volume": "43, 111628",
    "url": "https://doi.org/10.1016/j.mtcomm.2025.111628",
    "investigators": [
      "Eduardo M. Bringa",
      "Federico A. Cartellone"
    ]
  },
  {
    "year": "2025",
    "title": "Nanohorns de carbono de pared simple como contenedores de hidrogeno molecular",
    "authors": "EA Crespo, JM Gonzalez, MA Orozco, EM Bringa",
    "venue": "Tecnologia y Ciencia",
    "volume": "15-25",
    "url": "",
    "investigators": [
      "Eduardo M. Bringa"
    ]
  },
  {
    "year": "2025",
    "title": "Nanoindentation into a dual-phase bicontinuous lamellar high-entropy alloy",
    "authors": "IA Alhafez, OR Deluigi, D Tramontina, F Valencia, N Merkert, D Farkas",
    "venue": "Journal of Materials Research and Technology",
    "volume": "37, 1406-1417",
    "url": "",
    "investigators": [
      "Eduardo M. Bringa",
      "Orlando Deluigi"
    ]
  },
  {
    "year": "2025",
    "title": "Simulation of the mechanical properties of crystalline diamond nanoparticles with an amorphous carbon shell",
    "authors": "G Garcia-Vidable, N Amigo, FE Palay, RI Gonzalez, F Aquistapace",
    "venue": "Diamond and Related Materials",
    "volume": "154, 112188",
    "url": "",
    "investigators": [
      "Eduardo M. Bringa"
    ]
  },
  {
    "year": "2025",
    "title": "Temperature effects on the strength of a nanocrystalline refractory high entropy alloy",
    "authors": "FR Roco, O Deluigi, M Opazo, N Amigo, J Rojas-Nunez, FJ Valencia, DR Tramontina, EM Bringa",
    "venue": "International Journal of Refractory Metals and Hard Materials",
    "volume": "128, 107038",
    "url": "",
    "investigators": [
      "Eduardo M. Bringa",
      "Diego R. Tramontina",
      "Orlando Deluigi"
    ]
  },
  {
    "year": "2024",
    "title": "Atomistic Simulations of the Shock and Spall Behavior of the Refractory High-Entropy Alloy HfNbTaTiZr",
    "authors": "D Thurmer, OR Deluigi, HM Urbassek, EM Bringa, N Merkert",
    "venue": "High Entropy Alloys & Materials",
    "volume": "2 (2), 321-331",
    "url": "https://link.springer.com/article/10.1007/S44210-024-00042-2",
    "investigators": [
      "Eduardo M. Bringa",
      "Orlando Deluigi"
    ]
  },
  {
    "year": "2024",
    "title": "Chemical short-range order increases the phonon heat conductivity in a refractory high-entropy alloy",
    "authors": "G Mora-Barzaga, HM Urbassek, OR Deluigi, PM Pasinetti, EM Bringa",
    "venue": "Scientific Reports",
    "volume": "14 (1), 20628",
    "url": "https://www.nature.com/articles/s41598-024-70500-9.pdf",
    "investigators": [
      "Eduardo M. Bringa",
      "Geraudys Mora-Barzaga",
      "Orlando Deluigi"
    ]
  },
  {
    "year": "2024",
    "title": "Dust-dust collisions in cometary comas: applications to comet 67P/Churyumov-Gerasimenko",
    "authors": "MB Planes, MG Parisi, EN Millan, EM Bringa, M Canada-Assandri",
    "venue": "Monthly Notices of the Royal Astronomical Society",
    "volume": "531 (3), 3168-3186",
    "url": "https://academic.oup.com/mnras/article-pdf/531/3/3168/58166475/stae1078.pdf",
    "investigators": [
      "Eduardo M. Bringa"
    ]
  },
  {
    "year": "2024",
    "title": "How crack twisting in bouligand structures lead to damage delocalization and toughening",
    "authors": "A Garnica, E Aparicio, M Shishehbor, D Kisailus, EM Bringa, PD Zavattieri",
    "venue": "Extreme Mechanics Letters",
    "volume": "71, 102190",
    "url": "https://www.sciencedirect.com/science/article/am/pii/S2352431624000701",
    "investigators": [
      "Eduardo M. Bringa"
    ]
  },
  {
    "year": "2024",
    "title": "Mechanical properties of hcp Fe at high pressures and temperatures from large-scale molecular dynamics simulations",
    "authors": "OR Deluigi, EM Bringa",
    "venue": "Journal of Applied Physics",
    "volume": "136 (19)",
    "url": "https://pubs.aip.org/aip/jap/article/136/19/195901/3320676",
    "investigators": [
      "Eduardo M. Bringa",
      "Orlando Deluigi"
    ]
  },
  {
    "year": "2024",
    "title": "Nanoindentation into a bcc high-entropy HfNbTaTiZr alloy - an atomistic study of the effect of short-range order",
    "authors": "IA Alhafez, OR Deluigi, D Tramontina, N Merkert, HM Urbassek, EM Bringa",
    "venue": "Scientific Reports",
    "volume": "14 (1), 9112",
    "url": "https://www.nature.com/articles/s41598-024-59761-6.pdf",
    "investigators": [
      "Eduardo M. Bringa",
      "Diego R. Tramontina",
      "Orlando Deluigi"
    ]
  },
  {
    "year": "2024",
    "title": "Plasticity in diamond nanoparticles: dislocations and amorphization during loading and dislocation multiplication during unloading",
    "authors": "D Castillo-Castro, RI Gonzalez, N Amigo, G Garcia Vidable, DR Tramontina, FJ Valencia, EM Bringa",
    "venue": "Journal of Materials Science",
    "volume": "59 (12), 4788-4809",
    "url": "https://www.researchgate.net/profile/Daniel-Castillo-Castro/publication/376755445_Plasticity_in_diamond_nanoparticles_dislocations_and_amorphization_during_loading_and_dislocation_multiplication_during_unloading/links/6732bf37f255d57286677f79/Plasticity-in-diamond-nanoparticles-dislocations-and-amorphization-during-loading-and-dislocation-multiplication-during-unloading.pdf",
    "investigators": [
      "Eduardo M. Bringa",
      "Diego R. Tramontina"
    ]
  },
  {
    "year": "2024",
    "title": "Plasticity tuning of thermal conductivity between nanoparticles",
    "authors": "G Mora-Barzaga, EN Miranda, EM Bringa",
    "venue": "Journal of Applied Physics",
    "volume": "136 (17)",
    "url": "https://pubs.aip.org/aip/jap/article/136/17/175103/3318772",
    "investigators": [
      "Eduardo M. Bringa",
      "Geraudys Mora-Barzaga"
    ]
  },
  {
    "year": "2024",
    "title": "Size-dependent Curie temperature of Ni nanoparticles from spin-lattice dynamics simulations",
    "authors": "G Dos Santos, HM Urbassek, EM Bringa",
    "venue": "Scientific Reports",
    "volume": "14 (1), 22012",
    "url": "https://www.nature.com/articles/s41598-024-73129-w.pdf",
    "investigators": [
      "Eduardo M. Bringa",
      "Gonzalo Dos Santos"
    ]
  },
  {
    "year": "2023",
    "title": "A Monte Carlo code for the collisional evolution of porous aggregates (CPA)",
    "authors": "EN Millan, MB Planes, HM Urbassek, EM Bringa",
    "venue": "Astronomy & Astrophysics",
    "volume": "672, A50",
    "url": "https://www.aanda.org/articles/aa/full_html/2023/04/aa43069-22/aa43069-22.html",
    "investigators": [
      "Eduardo M. Bringa"
    ]
  },
  {
    "year": "2023",
    "title": "A spall and diffraction study of nanosecond pressure release across the iron epsilon-alpha phase boundary",
    "authors": "G Righi, R Briggs, OR Deluigi, CV Stan, S Singh, SM Clarke, EM Bringa, RF Smith, RE Rudd, HS Park",
    "venue": "Acta Materialia",
    "volume": "257, 119148",
    "url": "https://www.sciencedirect.com/science/article/am/pii/S1359645423004792",
    "investigators": [
      "Eduardo M. Bringa"
    ]
  },
  {
    "year": "2023",
    "title": "A spall and diffraction study of nanosecond pressure release across the iron ε-α phase boundary",
    "authors": "G Righi, R Briggs, OR Deluigi, CV Stan, S Singh, SM Clarke, EM Bringa, RF Smith, RE Rudd, HS Park",
    "venue": "Acta Materialia",
    "volume": "257, 119148",
    "url": "https://www.sciencedirect.com/science/article/am/pii/S1359645423004792",
    "investigators": [
      "Orlando Deluigi"
    ]
  },
  {
    "year": "2023",
    "title": "Atomistic simulations of ductile failure in a bcc high-entropy alloy",
    "authors": "F Aquistapace, N Vazquez, M Chiarpotti, O Deluigi, CJ Ruestes, EM Bringa",
    "venue": "High Entropy Alloys & Materials",
    "volume": "1 (1), 84-95",
    "url": "https://arxiv.org/pdf/2208.00234",
    "investigators": [
      "Eduardo M. Bringa",
      "Orlando Deluigi"
    ]
  },
  {
    "year": "2023",
    "title": "Do dislocations always decrease thermal conductivity?",
    "authors": "G Mora-Barzaga, EN Miranda, EM Bringa",
    "venue": "International Journal of Thermal Sciences",
    "volume": "193, 108474",
    "url": "",
    "investigators": [
      "Eduardo M. Bringa",
      "Geraudys Mora-Barzaga"
    ]
  },
  {
    "year": "2023",
    "title": "Effects of airless bodies' regolith structures and of the solar wind's properties on the backscattered energetic neutral atoms flux",
    "authors": "S Verkercke, JY Chaufray, F Leblanc, EM Bringa, D Tramontina, L Morrissey, A Woodson",
    "venue": "The Planetary Science Journal",
    "volume": "4 (10), 197",
    "url": "https://iopscience.iop.org/article/10.3847/PSJ/acf6bd/pdf",
    "investigators": [
      "Eduardo M. Bringa",
      "Diego R. Tramontina"
    ]
  },
  {
    "year": "2023",
    "title": "Feasibility analysis towards the simulation of hysteresis with spin-lattice dynamics",
    "authors": "G Dos Santos, F Roma, J Tranchida, S Castedo, LF Cugliandolo, EM Bringa",
    "venue": "Physical Review B",
    "volume": "108 (13), 134417",
    "url": "https://arxiv.org/pdf/2205.10418",
    "investigators": [
      "Eduardo M. Bringa",
      "Gonzalo Dos Santos"
    ]
  },
  {
    "year": "2023",
    "title": "Influence of grain size on mechanical properties of a refractory high entropy alloy under uniaxial tension",
    "authors": "O Deluigi, F Valencia, DR Tramontina, N Amigo, J Rojas-Nunez, EM Bringa",
    "venue": "Crystals",
    "volume": "13 (2), 357",
    "url": "https://www.mdpi.com/2073-4352/13/2/357",
    "investigators": [
      "Eduardo M. Bringa",
      "Diego R. Tramontina",
      "Orlando Deluigi"
    ]
  },
  {
    "year": "2023",
    "title": "Model based on COVID-19 evidence to predict and improve pandemic control",
    "authors": "RI Gonzalez, PS Moya, EM Bringa, G Bacigalupe, M Ramirez-Santana, M Kiwi",
    "venue": "Plos one",
    "volume": "18 (6), e0286747",
    "url": "https://journals.plos.org/plosone/article/file?id=10.1371/journal.pone.0286747&type=printable",
    "investigators": [
      "Eduardo M. Bringa"
    ]
  },
  {
    "year": "2023",
    "title": "Molecular dynamics simulation of surface phenomena due to high electronic excitation ion irradiation in amorphous silica",
    "authors": "A Prada, F Sanchez-Perez, M Bailly-Grandvaux, E Bringa, MJ Caturla, JM Perlado, J Kohanoff",
    "venue": "The European Physical Journal D",
    "volume": "77 (2), 18",
    "url": "https://link.springer.com/article/10.1140/epjd/s10053-022-00568-3",
    "investigators": [
      "Eduardo M. Bringa"
    ]
  },
  {
    "year": "2023",
    "title": "Multisom: Multi-layer self organizing maps for local structure identification in crystalline structures",
    "authors": "F Aquistapace, N Amigo, JF Troncoso, O Deluigi, EM Bringa",
    "venue": "Computational Materials Science",
    "volume": "227, 112263",
    "url": "",
    "investigators": [
      "Eduardo M. Bringa",
      "Orlando Deluigi"
    ]
  },
  {
    "year": "2023",
    "title": "Nanoporous amorphous carbon with exceptional ultra-high strength",
    "authors": "D Castillo-Castro, F Correa, E Aparicio, N Amigo, A Prada, J Figueroa, RI Gonzalez, E Bringa, FJ Valencia",
    "venue": "Nanomaterials",
    "volume": "13 (8), 1429",
    "url": "https://www.mdpi.com/2079-4991/13/8/1429",
    "investigators": [
      "Eduardo M. Bringa"
    ]
  },
  {
    "year": "2023",
    "title": "On the mechanical response in nanoalloys: the case of NiCo",
    "authors": "JA De La Rosa Abad, EM Bringa, SJ Mejia-Rosales, MM Mariscal",
    "venue": "Faraday Discussions",
    "volume": "242, 23-34",
    "url": "https://ri.conicet.gov.ar/bitstream/handle/11336/208839/CONICET_Digital_Nro.619f06f5-b147-4b1f-b892-9932362421b0_E.pdf?sequence=5",
    "investigators": [
      "Eduardo M. Bringa"
    ]
  },
  {
    "year": "2023",
    "title": "On the origins of backscattered solar wind energetic neutral hydrogen from the Moon and Mercury",
    "authors": "F Leblanc, R Deborde, D Tramontina, E Bringa, JY Chaufray, S Aizawa, R Modolo, L Morrissey, A Woodson",
    "venue": "Planetary and Space Science",
    "volume": "229, 105660",
    "url": "https://www.sciencedirect.com/science/article/am/pii/S0032063323000296",
    "investigators": [
      "Eduardo M. Bringa",
      "Diego R. Tramontina"
    ]
  },
  {
    "year": "2023",
    "title": "Orientational phase transition in monolayers of multipolar straight rigid rods: The case of 2-thiophene molecule adsorption on the Au (111) surface",
    "authors": "G Dos Santos, E Cisternas, EE Vogel, AJ Ramirez-Pastor",
    "venue": "Physical Review E",
    "volume": "107 (1), 014133",
    "url": "",
    "investigators": [
      "Gonzalo Dos Santos"
    ]
  },
  {
    "year": "2023",
    "title": "Plastic behavior of a nanoporous high-entropy alloy under compression",
    "authors": "O Deluigi, N Amigo, FJ Valencia, F Aquistapace, DR Tramontina, RI Gonzalez, EM Bringa",
    "venue": "Computational Materials Science",
    "volume": "226, 112241",
    "url": "",
    "investigators": [
      "Eduardo M. Bringa",
      "Diego R. Tramontina",
      "Orlando Deluigi"
    ]
  },
  {
    "year": "2023",
    "title": "Probing radiation resistance in simulated metallic core-shell nanoparticles",
    "authors": "OR Deluigi, R Pinzon, J Rojas-Nunez, FJ Valencia, RC Pasianot, SE Baltazar, RI Gonzalez, EM Bringa",
    "venue": "Computational Materials Science",
    "volume": "227, 112304",
    "url": "https://www.researchgate.net/profile/Diego-Tramontina/publication/372813587_Probing_radiation_resistance_in_simulated_metallic_core-shell_nanoparticles/links/64d129cd40a524707ba4a985/Probing-radiation-resistance-in-simulated-metallic-core-shell-nanoparticles.pdf",
    "investigators": [
      "Eduardo M. Bringa",
      "Diego R. Tramontina",
      "Orlando Deluigi"
    ]
  },
  {
    "year": "2023",
    "title": "Simulated nanoindentation into single-phase fcc Fe x Ni 1-x alloys predicts maximum hardness for equiatomic stoichiometry",
    "authors": "I Alabd Alhafez, OR Deluigi, D Tramontina, CJ Ruestes, EM Bringa, HM Urbassek",
    "venue": "Scientific Reports",
    "volume": "13 (1), 9806",
    "url": "https://www.nature.com/articles/s41598-023-36899-3",
    "investigators": [
      "Eduardo M. Bringa"
    ]
  },
  {
    "year": "2023",
    "title": "Simulated nanoindentation into single-phase fcc FeₓNi₁₋ₓ alloys predicts maximum hardness for equiatomic stoichiometry",
    "authors": "I Alabd Alhafez, OR Deluigi, D Tramontina, CJ Ruestes, EM Bringa, HM Urbassek",
    "venue": "Scientific Reports",
    "volume": "13 (1), 9806",
    "url": "https://www.nature.com/articles/s41598-023-36899-3",
    "investigators": [
      "Diego R. Tramontina",
      "Orlando Deluigi"
    ]
  },
  {
    "year": "2023",
    "title": "Spin-lattice-dynamics analysis of magnetic properties of iron under compression",
    "authors": "G Dos Santos, R Meyer, D Tramontina, EM Bringa, HM Urbassek",
    "venue": "Scientific Reports",
    "volume": "13 (1), 14282",
    "url": "https://www.nature.com/articles/s41598-023-41499-2",
    "investigators": [
      "Eduardo M. Bringa",
      "Diego R. Tramontina",
      "Gonzalo Dos Santos"
    ]
  },
  {
    "year": "2022",
    "title": "Atomistic simulations of tensile deformation of a nanoporous high-entropy alloy",
    "authors": "OR Deluigi, F Valencia, N Amigo, F Aquistapace, RI Gonzalez, EM Bringa",
    "venue": "Journal of Materials Science",
    "volume": "57 (42), 19817-19831",
    "url": "",
    "investigators": [
      "Eduardo M. Bringa",
      "Orlando Deluigi"
    ]
  },
  {
    "year": "2022",
    "title": "Enhancing the thermal conductivity of amorphous carbon with nanowires and nanotubes",
    "authors": "G Mora-Barzaga, FJ Valencia, MI Carrasco, RI Gonzalez, MG Parlanti, EN Miranda, EM Bringa",
    "venue": "Nanomaterials",
    "volume": "12 (16), 2835",
    "url": "https://www.mdpi.com/2079-4991/12/16/2835",
    "investigators": [
      "Eduardo M. Bringa",
      "Geraudys Mora-Barzaga"
    ]
  },
  {
    "year": "2022",
    "title": "Exceptionally high spallation strength for a high-entropy alloy demonstrated by experiments and simulations",
    "authors": "D Thurmer, S Zhao, OR Deluigi, C Stan, IA Alhafez, HM Urbassek, MA Meyers, EM Bringa, N Gunkelmann",
    "venue": "Journal of Alloys and Compounds",
    "volume": "895, 162567",
    "url": "https://www.sciencedirect.com/science/article/am/pii/S0925838821039773",
    "investigators": [
      "Eduardo M. Bringa",
      "Orlando Deluigi"
    ]
  },
  {
    "year": "2022",
    "title": "Influence of vacancies on the temperature-dependent magnetism of bulk Fe: A spin-lattice dynamics approach",
    "authors": "R Meyer, G dos Santos, R Aparicio, EM Bringa, HM Urbassek",
    "venue": "Computational Condensed Matter",
    "volume": "31, e00662",
    "url": "",
    "investigators": [
      "Gonzalo Dos Santos"
    ]
  },
  {
    "year": "2022",
    "title": "Nanoindentation of nanoporous tungsten: A molecular dynamics approach",
    "authors": "FJ Valencia, R Ortega, RI Gonzalez, EM Bringa, M Kiwi, CJ Ruestes",
    "venue": "Computational Materials Science",
    "volume": "209, 111336",
    "url": "https://drive.google.com/file/d/1bIEKZ2g0XbECUiueZqA1AoS7IOFNt7ix/view",
    "investigators": [
      "Eduardo M. Bringa"
    ]
  },
  {
    "year": "2022",
    "title": "Simulations of plasticity in diamond nanoparticles showing ultrahigh strength",
    "authors": "GG Vidable, RI Gonzalez, FJ Valencia, N Amigo, D Tramontina, EM Bringa",
    "venue": "Diamond and Related Materials",
    "volume": "126, 109109",
    "url": "https://www.researchgate.net/profile/Diego-Tramontina/publication/360679149_Simulations_of_plasticity_in_diamond_nanoparticles_showing_ultrahigh_strength/links/628d4c3b345118162aa2fd38/Simulations-of-plasticity-in-diamond-nanoparticles-showing-ultrahigh-strength.pdf",
    "investigators": [
      "Eduardo M. Bringa",
      "Diego R. Tramontina"
    ]
  },
  {
    "year": "2022",
    "title": "Temperature-dependent magnetism in Fe foams via spin-lattice dynamics",
    "authors": "R Meyer, F Valencia, G Dos Santos, R Aparicio, EM Bringa, HM Urbassek",
    "venue": "Computational Materials Science",
    "volume": "211, 111483",
    "url": "https://arxiv.org/pdf/2204.10123",
    "investigators": [
      "Eduardo M. Bringa",
      "Gonzalo Dos Santos"
    ]
  },
  {
    "year": "2021",
    "title": "Simulations of primary damage in a High Entropy Alloy: Probing enhanced radiation resistance",
    "authors": "OR Deluigi, RC Pasianot, FJ Valencia, A Caro, D Farkas, EM Bringa",
    "venue": "Acta Materialia",
    "volume": "213, 116951",
    "url": "",
    "investigators": [
      "Orlando Deluigi"
    ]
  },
  {
    "year": "2021",
    "title": "Spin-lattice dynamics of surface vs core magnetization in Fe nanoparticles",
    "authors": "G Dos Santos, R Meyer, R Aparicio, J Tranchida, EM Bringa, HM Urbassek",
    "venue": "Applied Physics Letters",
    "volume": "119 (1)",
    "url": "https://pubs.aip.org/aip/apl/article/119/1/012404/40259",
    "investigators": [
      "Gonzalo Dos Santos"
    ]
  },
  {
    "year": "2020",
    "title": "Impulsive generation of <100> dislocation loops in BCC iron",
    "authors": "AI Bertoni, OR Deluigi, GJ Dos Santos, MP Díaz, EM Bringa",
    "venue": "Modelling and Simulation in Materials Science and Engineering",
    "volume": "28 (5), 055001",
    "url": "https://ri.conicet.gov.ar/bitstream/handle/11336/142063/CONICET_Digital_Nro.ed9f8cb2-9057-4cc7-a148-2e7b3a9c493e_X.pdf?sequence=7&isAllowed=y",
    "investigators": [
      "Gonzalo Dos Santos",
      "Orlando Deluigi"
    ]
  },
  {
    "year": "2020",
    "title": "Molecular dynamics simulations of thermal conductivity between two nanoparticles in contact",
    "authors": "G Mora-Barzaga, EN Miranda, EM Bringa",
    "venue": "Journal of Applied Physics",
    "volume": "127 (22)",
    "url": "",
    "investigators": [
      "Geraudys Mora-Barzaga"
    ]
  },
  {
    "year": "2020",
    "title": "Self-assembled monolayer formation of pentamers-like molecules onto FCC (111) surfaces: the case of curcuminoids onto Au (111) surface",
    "authors": "E Cisternas, GJ dos Santos, M Flores, EE Vogel, AJ Ramirez-Pastor",
    "venue": "Nano Express",
    "volume": "1 (1), 010025",
    "url": "",
    "investigators": [
      "Gonzalo Dos Santos"
    ]
  },
  {
    "year": "2020",
    "title": "Shock-induced plasticity in nanocrystalline iron: Large-scale molecular dynamics simulations",
    "authors": "HT Luu, RJ Ravelo, M Rudolph, EM Bringa, TC Germann, D Rafaja, N Gunkelmann",
    "venue": "Physical Review B",
    "volume": "102 (2), 020102",
    "url": "https://ri.conicet.gov.ar/bitstream/handle/11336/169389/CONICET_Digital_Nro.23c1841e-6aa3-45f4-bd01-df635eaa6f16_B.pdf?sequence=2",
    "investigators": [
      "Eduardo M. Bringa"
    ]
  },
  {
    "year": "2020",
    "title": "Size-and temperature-dependent magnetization of iron nanoclusters",
    "authors": "G Dos Santos, R Aparicio, D Linares, EN Miranda, J Tranchida, GM Pastor, EM Bringa",
    "venue": "Physical Review B",
    "volume": "102 (18), 184426",
    "url": "https://arxiv.org/pdf/2007.02230",
    "investigators": [
      "Gonzalo Dos Santos"
    ]
  },
  {
    "year": "2019",
    "title": "How Good Is the Debye Model for Nanocrystals?",
    "authors": "E Miranda, G Mora-Barzaga",
    "venue": "Journal of Modern Physics",
    "volume": "10, 601-612",
    "url": "",
    "investigators": [
      "Geraudys Mora-Barzaga"
    ]
  },
  {
    "year": "2019",
    "title": "Nanoindentation into a high-entropy alloy-An atomistic study",
    "authors": "IA Alhafez, CJ Ruestes, EM Bringa, HM Urbassek",
    "venue": "Journal of Alloys and Compounds",
    "volume": "803, 618-624",
    "url": "https://drive.google.com/file/d/1OxUaKpxdDS2bLDDbMkO0QGMJvxnR_hvH/view",
    "investigators": [
      "Eduardo M. Bringa"
    ]
  },
  {
    "year": "2018",
    "title": "Maximum cumulant method for studying condensation-evaporation phase transitions",
    "authors": "GJ dos Santos, DH Linares, AJ Ramirez-Pastor",
    "venue": "Physical Review E",
    "volume": "98 (3), 032134",
    "url": "https://arxiv.org",
    "investigators": [
      "Gonzalo Dos Santos"
    ]
  },
  {
    "year": "2018",
    "title": "Statistical thermodynamics of aligned rigid rods with attractive lateral interactions: Theory and Monte Carlo simulations",
    "authors": "GJ dos Santos, DH Linares, AJ Ramirez-Pastor",
    "venue": "Physica A: Statistical Mechanics and its Applications",
    "volume": "495, 81-93",
    "url": "",
    "investigators": [
      "Gonzalo Dos Santos"
    ]
  },
  {
    "year": "2017",
    "title": "Histogram-based methodology for the determination of the critical point in condensation-evaporation systems",
    "authors": "GJ Dos Santos, DH Linares, AJ Ramirez-Pastor",
    "venue": "Journal of Statistical Mechanics: Theory and Experiment",
    "volume": "2017 (7), 073211",
    "url": "",
    "investigators": [
      "Gonzalo Dos Santos"
    ]
  },
  {
    "year": "2017",
    "title": "Simulation of tantalum nanocrystals under shock-wave loading: Dislocations and twinning",
    "authors": "DR Tramontina, EN Hahn, MA Meyers, EM Bringa",
    "venue": "AIP Conference Proceedings",
    "volume": "1793 (1), 070002",
    "url": "https://pubs.aip.org/aip/acp/article-pdf/doi/10.1063/1.4971590/13733526/070002_1_online.pdf",
    "investigators": [
      "Diego R. Tramontina"
    ]
  },
  {
    "year": "2016",
    "title": "Hydrogen storage in palladium hollow nanoparticles",
    "authors": "FJ Valencia, RI González, D Tramontina, J Rogan, JA Valdivia, M Kiwi, EM Bringa",
    "venue": "The Journal of Physical Chemistry C",
    "volume": "120 (41), 23836-23841",
    "url": "https://ri.conicet.gov.ar/bitstream/handle/11336/59505/CONICET_Digital_Nro.c6c56af9-59a9-4381-8f71-5b84e846ba23_A.pdf?sequence=2",
    "investigators": [
      "Diego R. Tramontina"
    ]
  },
  {
    "year": "2016",
    "title": "Nucleation of plasticity in nanoparticle collisions",
    "authors": "EN Millán, DR Tramontina, HM Urbassek, EM Bringa",
    "venue": "Physical Review E",
    "volume": "93 (6), 063004",
    "url": "https://ri.conicet.gov.ar/bitstream/handle/11336/56501/CONICET_Digital_Nro.113f1286-878d-4b20-9b99-d3bd73ee2c87_B.pdf?sequence=11&isAllowed=y",
    "investigators": [
      "Diego R. Tramontina"
    ]
  },
  {
    "year": "2016",
    "title": "The elastic–plastic transition in nanoparticle collisions",
    "authors": "EN Millán, DR Tramontina, HM Urbassek, EM Bringa",
    "venue": "Physical Chemistry Chemical Physics",
    "volume": "18 (5), 3423-3429",
    "url": "https://pubs.rsc.org/en/content/articlepdf/2015/cp/c5cp05150a",
    "investigators": [
      "Diego R. Tramontina"
    ]
  },
  {
    "year": "2015",
    "title": "Comparative simulation study of the structure of the plastic zone produced by nanoindentation",
    "authors": "Y Gao, CJ Ruestes, DR Tramontina, HM Urbassek",
    "venue": "Journal of the Mechanics and Physics of Solids",
    "volume": "75, 58-75",
    "url": "",
    "investigators": [
      "Diego R. Tramontina"
    ]
  },
  {
    "year": "2015",
    "title": "Confinement effects of ion tracks in ultrathin polymer films",
    "authors": "RM Papaléo, R Thomaz, LI Gutierres, VM De Menezes, D Severin, C Trautmann, D Tramontina, EM Bringa, MG Del Pópolo",
    "venue": "Physical Review Letters",
    "volume": "114 (11), 118302",
    "url": "https://repositorio.pucrs.br/dspace/bitstream/10923/12676/2/Confinement_Effects_of_Ion_Tracks_in_Ultrathin_Polymer_Films.pdf",
    "investigators": [
      "Diego R. Tramontina"
    ]
  },
  {
    "year": "2015",
    "title": "Mechanical properties of irradiated nanowires–a molecular dynamics study",
    "authors": "E Figueroa, D Tramontina, G Gutiérrez, E Bringa",
    "venue": "Journal of Nuclear Materials",
    "volume": "467, 677-682",
    "url": "",
    "investigators": [
      "Diego R. Tramontina"
    ]
  },
  {
    "year": "2015",
    "title": "Morphological changes in polycrystalline Fe after compression and release",
    "authors": "N Gunkelmann, DR Tramontina, EM Bringa, HM Urbassek",
    "venue": "Journal of Applied Physics",
    "volume": "117 (8)",
    "url": "https://ri.conicet.gov.ar/bitstream/handle/11336/40045/CONICET_Digital_Nro.a9a7eebd-eb04-49e0-b03d-f589ce097f18_A.pdf?sequence=2&isAllowed=y",
    "investigators": [
      "Diego R. Tramontina"
    ]
  },
  {
    "year": "2015",
    "title": "Probing the character of ultra-fast dislocations",
    "authors": "CJ Ruestes, EM Bringa, RE Rudd, BA Remington, TP Remington, MA Meyers",
    "venue": "Scientific reports",
    "volume": "5 (1), 16892",
    "url": "https://www.nature.com/articles/srep16892",
    "investigators": [
      "Eduardo M. Bringa"
    ]
  },
  {
    "year": "2014",
    "title": "Molecular dynamics simulations of shock-induced plasticity in tantalum",
    "authors": "EM Bringa, et al.",
    "venue": "High Energy Density Physics",
    "volume": "10, 9-15",
    "url": "https://www.academia.edu/download/44000454/Molecular_dynamics_simulations_of_shock-20160322-29434-j8vh4u.pdf",
    "investigators": [
      "Eduardo M. Bringa"
    ]
  },
  {
    "year": "2014",
    "title": "Plastic deformation in nanoindentation of tantalum: A new mechanism for prismatic loop formation",
    "authors": "TP Remington, CJ Ruestes, EM Bringa, BA Remington, CH Lu, B Kad, MA Meyers",
    "venue": "Acta Materialia",
    "volume": "78, 378-393",
    "url": "https://ri.conicet.gov.ar/bitstream/handle/11336/32239/CONICET_Digital_Nro.9d9f1861-105d-49b2-baea-880e362cb27e_A.pdf?sequence=2&isAllowed=y",
    "investigators": [
      "Eduardo M. Bringa"
    ]
  },
  {
    "year": "2012",
    "title": "Polycrystalline iron under compression: Plasticity and phase transitions",
    "authors": "N Gunkelmann, EM Bringa, K Kang, GJ Ackland, CJ Ruestes, HM Urbassek",
    "venue": "Physical Review B",
    "volume": "86 (14), 144111",
    "url": "https://www.academia.edu/download/48115644/Polycrystalline_iron_under_compression_P20160817-13580-shrmjl.pdf",
    "investigators": [
      "Eduardo M. Bringa"
    ]
  }
];

  const [yearFilter, setYearFilter] = React.useState('');
  const [investigatorFilter, setInvestigatorFilter] = React.useState('');
  const [query, setQuery] = React.useState('');
  const shownBase = limit ? allPubs.slice(0, limit) : allPubs;
  const years = [...new Set(allPubs.map(p => p.year))].sort((a, b) => Number(b) - Number(a));
  const investigators = [...new Set(allPubs.flatMap(p => p.investigators))].sort((a, b) => a.localeCompare(b));
  const filtered = shownBase.filter(p => {
    const matchesYear = !yearFilter || p.year === yearFilter;
    const matchesInvestigator = !investigatorFilter || p.investigators.includes(investigatorFilter);
    const haystack = [p.title, p.authors, p.venue, p.volume, p.year, ...p.investigators].join(' ').toLowerCase();
    return matchesYear && matchesInvestigator && (!query.trim() || haystack.includes(query.trim().toLowerCase()));
  });
  const grouped = {};
  filtered.forEach(p => (grouped[p.year] ||= []).push(p));

  return (
    <section style={pubStyles.wrap}>
      <style>{`
        @keyframes simaf-paper-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .publication-miniature {
          animation: simaf-paper-float 5.8s ease-in-out infinite;
          will-change: transform;
        }
        .publication-miniature:hover {
          animation-play-state: paused;
          transform: translateY(-8px) scale(1.02);
        }
        @media (prefers-reduced-motion: reduce) {
          .publication-miniature {
            animation: none;
          }
        }
      `}</style>
      <div style={pubStyles.head}>
        <span style={{fontWeight:600, color:'var(--fg)'}}>{lang==='es'?'Publicaciones':'Publications'}</span>
        <span>{limit ? (lang==='es'?'Más recientes':'Most recent') : `${filtered.length} / ${allPubs.length} · ${years[years.length-1]}–${years[0]}`}</span>
      </div>
      {!limit && (
        <div style={pubStyles.filters}>
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder={lang==='es'?'Buscar por título, autor, revista o año':'Search by title, author, journal, or year'}
            style={pubStyles.input}
          />
          <select value={yearFilter} onChange={e => setYearFilter(e.target.value)} style={pubStyles.select}>
            <option value="">{lang==='es'?'Todos los años':'All years'}</option>
            {years.map(y => <option key={y} value={y}>{y}</option>)}
          </select>
          <select value={investigatorFilter} onChange={e => setInvestigatorFilter(e.target.value)} style={pubStyles.select}>
            <option value="">{lang==='es'?'Todos los investigadores':'All researchers'}</option>
            {investigators.map(name => <option key={name} value={name}>{name}</option>)}
          </select>
        </div>
      )}
      {filtered.length === 0 && <div style={pubStyles.empty}>{lang==='es'?'No hay publicaciones para esos filtros.':'No publications match those filters.'}</div>}
      {Object.entries(grouped).sort(([a], [b]) => Number(b)-Number(a)).map(([y, items]) => (
        <div key={y} style={pubStyles.yearBlock}>
          <div style={pubStyles.year}>{y}</div>
          <div style={pubStyles.items}>
            {items.map((p,i) => (
              <article key={`${p.year}-${p.title}-${i}`} style={pubStyles.item}>
                <div style={pubStyles.itemBody}>
                  <h3 style={pubStyles.title}>{p.title}</h3>
                  <div style={pubStyles.auth}>{p.authors}</div>
                  <div style={pubStyles.meta}>
                    <span style={pubStyles.venue}>{p.venue || 'Publicación'}</span>
                    {p.volume && <><span style={pubStyles.sep}>·</span><span>{p.volume}</span></>}
                    {p.url && <><span style={pubStyles.sep}>·</span><a href={p.url} target="_blank" rel="noopener" onClick={e=>e.stopPropagation()} style={pubStyles.link}>PDF / DOI ↗</a></>}
                  </div>
                  <div style={pubStyles.tags}>
                    {p.investigators.map(name => <button key={name} type="button" onClick={() => !limit && setInvestigatorFilter(name)} style={pubStyles.tag}>{name}</button>)}
                  </div>
                </div>
                <PublicationMiniature title={p.title} />
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
  head: { borderTop:'3px double var(--rule)', borderBottom:'1px solid var(--rule)', padding:'8px 0', display:'flex', justifyContent:'space-between', gap:24, fontFamily:'var(--font-sans)', fontSize:11, letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--fg-muted)', marginBottom:28 },
  filters: { display:'grid', gridTemplateColumns:'minmax(240px, 1fr) 170px 240px', gap:14, marginBottom:36 },
  input: { width:'100%', border:'1px solid var(--border-strong)', borderRadius:4, background:'color-mix(in srgb, var(--bg) 84%, white)', color:'var(--fg)', fontFamily:'var(--font-sans)', fontSize:14, padding:'12px 14px' },
  select: { width:'100%', border:'1px solid var(--border-strong)', borderRadius:4, background:'color-mix(in srgb, var(--bg) 84%, white)', color:'var(--fg)', fontFamily:'var(--font-sans)', fontSize:14, padding:'12px 14px' },
  yearBlock: { display:'grid', gridTemplateColumns:'16px 1fr', gap:4, padding:'28px 0', borderBottom:'1px solid var(--border)' },
  year: { fontFamily:'var(--font-sans)', fontSize:13, fontWeight:600, letterSpacing:'0.14em', color:'var(--fg-muted)' },
  items: { display:'flex', flexDirection:'column', gap:24 },
  item: { display:'flex', alignItems:'flex-start', gap:18 },
  itemBody: { minWidth:0, flex:1 },
  thumbWrap: { width:226, aspectRatio:'4 / 3', flex:'0 0 226px', border:'1px solid var(--border)', background:'#fff', borderRadius:60, overflow:'hidden' },
  thumb: { width:'100%', height:'100%', display:'block', objectFit:'cover' },
  title: { fontFamily:'var(--font-serif)', fontSize:21, fontWeight:500, lineHeight:1.3, color:'var(--fg)', margin:'0 0 6px', letterSpacing:'-0.005em' },
  auth: { fontFamily:'var(--font-serif)', fontStyle:'italic', fontSize:15, color:'var(--fg-muted)' },
  meta: { marginTop:8, display:'flex', gap:10, alignItems:'center', fontFamily:'var(--font-mono)', fontSize:12, color:'var(--fg-muted)', flexWrap:'wrap' },
  venue: { color:'var(--fg)' },
  sep: { color:'var(--fg-faint)' },
  link: { color:'var(--accent)', textDecoration:'none', fontWeight:600 },
  tags: { marginTop:10, display:'flex', gap:8, flexWrap:'wrap' },
  tag: { border:'1px solid var(--border)', background:'transparent', color:'var(--fg-muted)', borderRadius:4, padding:'4px 8px', fontFamily:'var(--font-sans)', fontSize:11, cursor:'pointer' },
  empty: { padding:'36px 0', fontFamily:'var(--font-serif)', fontStyle:'italic', fontSize:22, color:'var(--fg-muted)' },
};
