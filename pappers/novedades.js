// Carrusel "Nuevas publicaciones" (al lado de Líneas de investigación).
// Orden: el primero es el que se muestra primero.
// image: ruta relativa a la raíz del repo, p. ej. 'pappers/novedades/sintering.png'.
//        Si es null o el archivo no existe, se muestra una portada genérica.
// abstract_es / abstract_en: resumen corto (2–3 oraciones). Vacío = no se muestra.
window.NEWS_PAPERS = [
  {
    image: 'pappers/novedades/ultrafast_sintering.png',
    title: 'Ultrafast thermal sintering controls thermal transport in high-entropy alloy nanoparticle junctions',
    authors: 'G Mora-Barzaga, P Inostroza, F Valencia, EM Bringa',
    venue: 'Int. J. Heat Mass Transfer 270',
    year: '2026',
    url: 'https://doi.org/10.1016/j.ijheatmasstransfer.2026.129207',
    abstract_es: 'Mediante dinámica molecular de no equilibrio se estudia el sinterizado térmico ultrarrápido de un dímero de nanopartículas de aleación de alta entropía y su efecto sobre el transporte térmico interfacial. La conductividad efectiva crece de forma aproximadamente lineal con el tamaño de contacto, mientras que la amorfización a alta temperatura la reduce; los resultados concuerdan con la teoría de constricción geométrica.',
    abstract_en: 'Nonequilibrium molecular dynamics is used to study ultrafast thermal sintering of a dimer of high-entropy alloy nanoparticles and its impact on interfacial thermal transport. The effective conductivity grows roughly linearly with contact size, while high-temperature amorphization lowers it; results agree with geometric constriction theory.',
  },
  {
    image: 'pappers/novedades/hybrid_potential.png',
    title: 'Fitting and validation of a hybrid interatomic potential for modeling Fe50−XMn30Co10Cr10BX compositionally complex alloys',
    authors: 'R Vargas-Osorio, …, EM Bringa, …, K Paredes-Gil',
    venue: 'Comput. Mater. Sci. 273',
    year: '2026',
    url: '',
    abstract_es: 'Se ajusta y valida un potencial Lennard-Jones para las interacciones boro–metal, combinado con un potencial 2NN-MEAM para las interacciones entre metales. El modelo híbrido reproduce las energías de falla de apilamiento ab initio y describe la formación de clústeres CrFeB y CoB.',
    abstract_en: 'A Lennard-Jones potential for boron–metal interactions is fitted and validated, combined with a 2NN-MEAM potential for metal–metal interactions. The hybrid model reproduces ab initio stacking fault energies and captures the formation of CrFeB and CoB clusters.',
  },
  {
    image: 'pappers/novedades/iron_inner_core.png',
    title: "Dynamic strength of iron under pressure-temperature conditions of Earth's inner core",
    authors: 'YJ Kim, G Righi, O Deluigi, E Bringa, T Lockard, R Rudd, C Ruestes, …',
    venue: 'Nature Communications 17',
    year: '2026',
    url: 'https://doi.org/10.1038/s41467-026-72210-4',
    abstract_es: 'Experimentos en la National Ignition Facility permiten medir por primera vez, de forma simultánea, la resistencia dinámica del hierro en condiciones de presión y temperatura del núcleo interno terrestre, aportando referencias experimentales para su reología.',
    abstract_en: "Experiments at the National Ignition Facility enable the first simultaneous measurement of iron's dynamic strength at pressure and temperature conditions of Earth's inner core, providing experimental benchmarks for its rheology.",
  },
  {
    image: 'pappers/novedades/lamellar_hea.png',
    title: 'Changes in microstructure and phonon thermal conductivity in a lamellar dual-phase high-entropy alloy under tensile strain',
    authors: 'G Mora-Barzaga, OR Deluigi, HM Urbassek, FJ Valencia, EM Bringa',
    venue: 'J. Mater. Res. Technol. 42',
    year: '2026',
    url: 'https://doi.org/10.1016/j.jmrt.2026.05.370',
    abstract_es: '',
    abstract_en: '',
  },
  {
    image: 'pappers/novedades/domain_wall.png',
    title: 'Atomic-scale control of domain wall motion in pristine and defective Fe nanowires with Spin-Lattice Dynamics',
    authors: 'F Corvacho, G Dos Santos, E Bringa, J Rojas-Nunez, M Castro, S Allende, SE Baltazar',
    venue: 'J. Sci. Adv. Mater. Devices 11',
    year: '2026',
    url: 'https://doi.org/10.1016/j.jsamd.2026.101166',
    abstract_es: 'Con dinámica de espín-red se simula el movimiento de paredes de dominio en nanohilos de hierro. En hilos cristalinos se reproducen las predicciones analíticas de ancho y velocidad de pared; vacancias, dislocaciones y bordes de grano generan un movimiento no monótono, difícil de capturar con enfoques micromagnéticos.',
    abstract_en: 'Spin-lattice dynamics is used to simulate domain wall motion in iron nanowires. Crystalline wires reproduce analytical predictions for wall width and velocity; voids, dislocations and grain boundaries cause non-monotonic motion that is hard to capture with micromagnetic approaches.',
  },
  {
    image: 'pappers/novedades/magnetization_recovery.png',
    title: 'Nearly full magnetization recovery after a strong collision between Fe nanoparticles',
    authors: 'N Plaza-Alcafuz, SE Baltazar, G Dos Santos, SV Nikolov, HM Urbassek, EM Bringa',
    venue: 'Phys. Rev. Materials 10',
    year: '2026',
    url: 'https://doi.org/10.1103/b3q5-2c4k',
    abstract_es: 'Simulaciones de dinámica de espín-red de colisiones entre nanopartículas de hierro a 1–2 km/s muestran que el calentamiento por encima de la temperatura de Curie domina el efecto magnético. Al enfriarse, las partículas recuperan un estado ferromagnético de dominio único, sin memoria de la configuración previa al impacto.',
    abstract_en: 'Spin-lattice dynamics simulations of Fe nanoparticle collisions at 1–2 km/s show that heating above the Curie temperature dominates the magnetic response. On cooling, the particles recover a single-domain ferromagnetic state with no memory of the pre-impact configuration.',
  },
];
