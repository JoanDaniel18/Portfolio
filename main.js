const translations = {
  es: {
    meta: {
      title: 'Daniel Rivas | Full Stack Software Developer',
      description:
        'Portafolio profesional de Daniel Rivas, desarrollador full stack e ingeniero en TIC. Aplicaciones web, APIs, datos e IA aplicada.',
      languageLabel: 'Selector de idioma',
    },
    brand: {
      role: 'Full Stack Software Developer',
    },
    nav: {
      services: 'Servicios',
      experience: 'Experiencia',
      projects: 'Proyectos',
      certifications: 'Certificaciones',
      research: 'Investigación',
      contact: 'Contactar',
      menuOpen: 'Abrir menú',
      menuClose: 'Cerrar menú',
    },
    hero: {
      eyebrow: 'Ingeniería de Software • Desarrollo Full Stack • IA aplicada',
      title: 'Desarrollo soluciones de software para desafíos reales.',
      lead:
        'Soy Daniel Rivas, ingeniero en TIC y desarrollador full stack. Diseño y construyo aplicaciones web, APIs y plataformas empresariales con Java, Spring Boot, React, JavaScript, Node.js, PostgreSQL y Python.',
      email: 'Hablemos',
      work: 'Ver trabajo',
      locationLabel: 'Ubicación',
      locationValue: 'Ecuador • Remoto',
      contactLabel: 'Contacto',
      portraitAlt: 'Fotografía profesional de Daniel Rivas',
      portraitTitle: 'Fotografía profesional',
      portraitSmall: 'Disponible a solicitud',
      specialist: 'Especialista en',
      sectors: 'dominios aplicados',
      impact: 'experiencia reciente',
    },
    services: {
      eyebrow: 'Servicios',
      title: 'Soluciones para equipos que necesitan construir, validar y mejorar productos digitales.',
      description:
        'Puedo aportar desde el prototipo hasta la implementación: interfaces web, APIs, bases de datos, experiencias VR y análisis con IA.',
      webTitle: 'Plataformas Web Internas',
      webText:
        'Construyo aplicaciones para operaciones, gestión de personal y flujos administrativos con interfaces claras y datos bien estructurados.',
      apiTitle: 'Realidad Virtual Educativa',
      apiText:
        'Diseño prototipos inmersivos para aprendizaje, entrenamiento y evaluación, con interacción 3D y feedback inmediato.',
      mlTitle: 'APIs, Datos e Integraciones',
      mlText:
        'Organizo datos, conecto servicios y preparo bases sólidas para que los productos sean mantenibles y fáciles de escalar.',
      llmTitle: 'IA e Investigación Aplicada',
      llmText:
        'Trabajo con procesamiento de datos, segmentación, entrenamiento de modelos y visualización de resultados para investigación técnica.',
    },
    experience: {
      eyebrow: 'Experiencia',
      title: 'Experiencia reciente creando software útil en educación, operaciones e investigación.',
      erpRole: 'Desarrollador Full Stack - ERP y Sitio Web',
      erpDate: 'Mayo 2026 - Actualidad',
      erpTitle: 'Mega Mayorista - ERP y Plataforma Web',
      erpStack:
        'Java · Spring Boot · Spring Data JPA · PostgreSQL · React · JavaScript · Tailwind CSS · Docker · Nginx · Git',
      erpPoint1:
        'Diseñé endpoints REST con Spring Boot, Spring Data JPA/Hibernate y Maven, incorporando paginación, filtros y parámetros para las operaciones del ERP.',
      erpPoint2:
        'Implementé actualización de stock casi en tiempo real con fetch, async/await y polling recursivo con setTimeout, sin recargar la página y con caché en localStorage.',
      erpPoint3:
        'Modelé PostgreSQL con múltiples esquemas, JOINs, CTEs, agregaciones, triggers, llaves foráneas y restricciones CHECK para reportería de ventas, rotación y tendencias.',
      erpPoint4:
        'Containericé el entorno con Docker Compose, volúmenes y bind mounts, orquestando PostgreSQL, Spring Boot y Nginx como proxy y servidor de archivos estáticos.',
      erpPoint5:
        'Construí el ERP en React con hooks y el sitio público en JavaScript vanilla, Tailwind CSS, diseño responsive y navegación SPA mediante History API.',
      erpPoint6:
        'Integré autenticación JWT, validación y saneo con expresiones regulares, búsqueda con sinónimos y flujos de facturación electrónica SRI para Ecuador.',
      vrRole: 'Desarrollador de Juego Educativo en Realidad Virtual',
      vrDate: 'Diciembre 2025 - Mayo 2026',
      vrTitle: 'UEMY Urcuquí - KIDOCODE VR',
      vrStack: 'Three.js · WebXR · JavaScript · Firebase · Meta Quest 3S',
      vrPoint1:
        'Diseñé e implementé un prototipo VR educativo para practicar pensamiento computacional mediante retos de lógica, secuenciación y resolución de problemas.',
      vrPoint2:
        'Construí experiencias 3D con Three.js y WebXR, optimizadas para interacción inmersiva en Meta Quest 3S.',
      vrPoint3:
        'Integré Firebase para persistencia, soporte web y flujo de despliegue del prototipo.',
      vrPoint4:
        'Participé en una evaluación exploratoria con estudiantes de UEMY, conectando métricas de experiencia, engagement y competencia digital.',
      hrRole: 'Desarrollador Web - Plataforma de Recursos Humanos',
      hrDate: 'Enero 2025 - Octubre 2025',
      hrTitle: 'Aplicación Web de Recursos Humanos',
      hrStack: 'Vue.js · Node.js · PostgreSQL · PostgREST · REST APIs · Replit',
      hrPoint1:
        'Desarrollé una plataforma web de recursos humanos con frontend en Vue.js y servicios backend en Node.js.',
      hrPoint2:
        'Modelé flujos de gestión de personal, procesos internos y operaciones administrativas.',
      hrPoint3:
        'Integré PostgreSQL y PostgREST para gestión de datos, acceso vía API y consultas operativas.',
      hrPoint4:
        'Aceleré prototipos con Replit y ciclos cortos de validación funcional.',
      hrPoint5:
        'Mejoré estructura de interfaz, usabilidad y lógica backend con refinamiento iterativo.',
      bioRole: 'Investigador en Análisis de Imágenes Biomédicas',
      bioDate: 'Enero 2024 - Diciembre 2024',
      bioTitle: 'Hospital de Ibarra',
      bioStack: 'Python · EfficientNet · Deep Learning · Segmentación de imágenes · Análisis de datos',
      bioPoint1:
        'Contribuí a investigación en análisis de imágenes biomédicas usando Python y herramientas nativas para creación de máscaras.',
      bioPoint2:
        'Apoyé flujos de preprocesamiento, segmentación y organización de datasets para evaluación técnica e investigativa.',
      bioPoint3:
        'Participé en entrenamiento de redes neuronales, incluyendo modelos basados en EfficientNet para clasificación y análisis de imágenes.',
      bioPoint4:
        'Revisé e interpreté resultados visuales, fortaleciendo documentación técnica, análisis de datos e investigación asistida por IA.',
    },
    projects: {
      eyebrow: 'Proyectos',
      title: 'Proyectos que muestran cómo pienso, construyo y valido soluciones.',
      description:
        'Una selección breve de trabajos que combinan producto web, VR, datos e investigación aplicada.',
      kidocodeTitle: 'KIDOCODE VR',
      kidocodeText:
        'Prototipo de realidad virtual para enseñar pensamiento computacional mediante retos 3D, programación visual y feedback inmediato.',
      kidocodeLink: 'Ver investigación y reconocimiento',
      hrTitle: 'Plataforma de Recursos Humanos',
      hrText:
        'Aplicación web para gestión de personal, procesos de RRHH y flujos administrativos, con APIs y datos estructurados.',
      hrLink: 'Ver experiencia relacionada',
      bioTitle: 'Análisis Biomédico con IA',
      bioText:
        'Flujos de preprocesamiento, creación de máscaras y entrenamiento de modelos para análisis de imágenes médicas.',
      bioLink: 'Ver póster científico',
      githubTitle: 'Repositorio y certificaciones',
      githubText:
        'Repositorios, scripts y certificados que respaldan mi trabajo técnico, aprendizaje continuo y documentación profesional.',
      githubLink: 'Explorar GitHub',
    },
    certifications: {
      eyebrow: 'Certificaciones',
      title: 'Formación continua que respalda mi perfil técnico.',
      description:
        'Cursos y reconocimientos en frontend, Python, IA, datos, ciberseguridad e investigación.',
      carouselControls: 'Controles del carrusel de certificaciones',
      carouselPrev: 'Ver certificación anterior',
      carouselNext: 'Ver certificación siguiente',
      view: 'Ver certificado',
      englishProficiencyAlt: 'Certificado de suficiencia en inglés B2 de Yachay Tech',
      englishProficiencyIssuer: 'Yachay Tech Language Center • 2026',
      englishProficiencyTitle: 'English Language Proficiency B2',
      itilAlt: 'Certificado de Introduction to ITIL V4 de Simplilearn SkillUp',
      itilIssuer: 'Simplilearn SkillUp • 2026',
      itilTitle: 'Introduction to ITIL V4',
      microsoftAlt: 'Certificado Microsoft de introducción a inteligencia artificial',
      microsoftIssuer: 'Microsoft • 2025',
      microsoftTitle: 'Introducción a los conceptos de inteligencia artificial',
      scikitAlt: 'Certificado de Supervised Learning with scikit-learn',
      scikitIssuer: 'DataCamp • 2024',
      scikitTitle: 'Supervised Learning with scikit-learn',
      monetizingAlt: 'Certificado de Monetizing Artificial Intelligence',
      monetizingIssuer: 'DataCamp • 2024',
      monetizingTitle: 'Monetizing Artificial Intelligence',
      azureAlt: 'Certificado de Introduction to Azure',
      azureIssuer: 'DataCamp • 2026',
      azureTitle: 'Introduction to Azure',
      angularAlt: 'Certificado del curso de Angular',
      angularIssuer: 'Sololearn • 2025',
      angularTitle: 'Angular',
      codingDataAlt: 'Certificado de Coding for Data',
      codingDataIssuer: 'Sololearn • 2025',
      codingDataTitle: 'Coding for Data',
      csharpAlt: 'Certificado de Introduction to C# de Sololearn',
      csharpIssuer: 'Sololearn • 2025',
      csharpTitle: 'Introduction to C#',
      pythonAlt: 'Certificado de Crash Course on Python',
      pythonIssuer: 'Google / Coursera • 2020',
      pythonTitle: 'Crash Course on Python',
      cssAlt: 'Certificado de CSS',
      cssIssuer: 'Sololearn • 2021',
      cssTitle: 'CSS',
      cyberAlt: 'Certificado de ciberseguridad',
      cyberIssuer: 'Certificación • 2025',
      cyberTitle: 'Ciberseguridad',
      lifeScienceAlt: 'Certificado de participación en Life Science Congress',
      lifeScienceIssuer: 'Yachay Tech • 2025',
      lifeScienceTitle: '3rd Life Science Congress',
      edulyticsAlt: 'Certificado de participación en Hult Prize OnCampus',
      edulyticsIssuer: 'Hult Prize • 2025',
      edulyticsTitle: 'OnCampus Program Competitor',
      pytorchAlt: 'Certificado de Introduction to Deep Learning with PyTorch',
      pytorchIssuer: 'DataCamp • 2026',
      pytorchTitle: 'Introduction to Deep Learning with PyTorch',
      reactAlt: 'Certificado del curso React + Redux',
      reactIssuer: 'Sololearn • 2025',
      reactTitle: 'React + Redux',
      nasaAlt: 'Certificado NASA Space Apps Challenge',
      nasaIssuer: 'NASA Space Apps • 2025',
      nasaTitle: 'Galactic Problem Solver',
      ieeeAlt: 'Certificado de membresía estudiantil IEEE',
      ieeeIssuer: 'IEEE • 2025',
      ieeeTitle: 'Student Member',
      vrAlt: 'Certificado de Introduction to Virtual Reality',
      vrIssuer: 'University of London / Coursera • 2020',
      vrTitle: 'Introduction to Virtual Reality',
      machineLearningAlt: 'Certificado de Introduction to Machine Learning',
      machineLearningIssuer: 'Duke / Coursera • 2020',
      machineLearningTitle: 'Introduction to Machine Learning',
      bigDataAlt: 'Certificado de Introduction to Big Data',
      bigDataIssuer: 'UC San Diego / Coursera • 2020',
      bigDataTitle: 'Introduction to Big Data',
      programmingAlt: 'Certificado de Programming for Everybody',
      programmingIssuer: 'University of Michigan / Coursera • 2020',
      programmingTitle: 'Programming for Everybody',
      responsiveAlt: 'Certificado de Responsive Website Basics',
      responsiveIssuer: 'University of London / Coursera • 2020',
      responsiveTitle: 'Responsive Website Basics',
      excelAlt: 'Certificado de Excel Skills for Business',
      excelIssuer: 'Macquarie / Coursera • 2020',
      excelTitle: 'Excel Skills for Business',
      htmlAlt: 'Certificado de HTML',
      htmlIssuer: 'Sololearn • 2021',
      htmlTitle: 'HTML',
      sqlAlt: 'Certificado de SQL',
      sqlIssuer: 'Sololearn • 2021',
      sqlTitle: 'SQL',
      phpAlt: 'Certificado de PHP',
      phpIssuer: 'Sololearn • 2021',
      phpTitle: 'PHP',
      emailsAlt: 'Certificado de Write Professional Emails in English',
      emailsIssuer: 'Georgia Tech / Coursera • 2020',
      emailsTitle: 'Professional Emails in English',
    },
    research: {
      eyebrow: 'Investigación',
      title: 'Investigación aplicada, prototipos educativos y reconocimientos.',
      description:
        'Una selección de proyectos donde conecto software, IA, educación inmersiva y análisis de datos con impacto real.',
      kidocodePosterAlt: 'Póster del proyecto KIDOCODE VR presentado en CompuFest 2026',
      kidocodePosterTitle: 'KIDOCODE VR: prototipo inmersivo para enseñar pensamiento computacional',
      kidocodePosterText:
        'Póster presentado en CompuFest 2026 sobre un prototipo de realidad virtual con Meta Quest 3S para apoyar actividades de pensamiento computacional en UEMY, con evaluación exploratoria a 93 estudiantes.',
      kidocodePosterMeta: 'CompuFest 2026 • Urcuquí, Ecuador',
      kidocodePosterLink: 'Ver póster completo',
      kidocodeAwardAlt: 'Daniel Rivas con reconocimiento de CompuFest 2026 por el proyecto KIDOCODE VR',
      kidocodeAwardTitle: 'Reconocimiento CompuFest 2026',
      kidocodeAwardText:
        'KIDOCODE VR fue reconocido entre las propuestas destacadas del Top 5, resaltando su enfoque en educación inmersiva, impacto comunitario y tecnología aplicada.',
      kidocodeAwardMeta: 'Yachay Tech • CompuFest 2026',
      carouselControls: 'Controles del carrusel de investigación',
      carouselPrev: 'Ver elemento anterior',
      carouselNext: 'Ver elemento siguiente',
      posterAlt: 'Póster científico presentado en el 5th Life Science Congress 2025',
      posterText:
        'Trabajo enfocado en análisis de imágenes médicas y aprendizaje profundo aplicado a diagnóstico asistido.',
      posterMeta: 'Puerto Ayora, Isla Santa Cruz • Noviembre 2025',
      posterLink: 'Ver póster',
      photoAlt: 'Daniel Rivas junto al póster en Galápagos',
      photoTitle: 'Presentación de póster',
      photoText: 'Registro de la exposición del póster científico durante el congreso en Galápagos.',
      photoMeta: 'Isla Santa Cruz • Noviembre 2025',
    },
    cta: {
      eyebrow: 'Colaboremos',
      title: 'Estoy listo para construir la próxima plataforma clave de tu equipo.',
      description:
        'Si necesitas un ingeniero confiable, con enfoque en resultados y comunicación clara, conversemos.',
      whatsapp: 'Contáctame por WhatsApp',
    },
    footer: {
      role: 'Full Stack Software Developer • ICT Engineering',
      contact: 'Contacto directo',
      online: 'Presencia online',
      availability: 'Disponible para oportunidades remotas',
    },
  },
  en: {
    meta: {
      title: 'Daniel Rivas | Full Stack Software Developer',
      description:
        'Professional portfolio of Daniel Rivas, a full stack software developer and ICT engineer. Web applications, APIs, data, and applied AI.',
      languageLabel: 'Language selector',
    },
    brand: {
      role: 'Full Stack Software Developer',
    },
    nav: {
      services: 'Services',
      experience: 'Experience',
      projects: 'Projects',
      certifications: 'Certifications',
      research: 'Research',
      contact: 'Contact',
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
    },
    hero: {
      eyebrow: 'Software Engineering • Full Stack Development • Applied AI',
      title: 'I build software solutions for real-world challenges.',
      lead:
        'I am Daniel Rivas, an ICT engineer and full stack developer. I design and build web applications, APIs, and business platforms with Java, Spring Boot, React, JavaScript, Node.js, PostgreSQL, and Python.',
      email: 'Let us talk',
      work: 'View work',
      locationLabel: 'Location',
      locationValue: 'Ecuador • Remote',
      contactLabel: 'Contact',
      portraitAlt: 'Professional photo of Daniel Rivas',
      portraitTitle: 'Professional photo',
      portraitSmall: 'Available upon request',
      specialist: 'Specialized in',
      sectors: 'applied domains',
      impact: 'recent experience',
    },
    services: {
      eyebrow: 'Services',
      title: 'Solutions for teams that need to build, validate, and improve digital products.',
      description:
        'I can contribute from prototype to implementation: web interfaces, APIs, databases, VR experiences, and AI-assisted analysis.',
      webTitle: 'Internal Web Platforms',
      webText:
        'I build applications for operations, staff management, and administrative workflows with clear interfaces and well-structured data.',
      apiTitle: 'Educational Virtual Reality',
      apiText:
        'I design immersive prototypes for learning, training, and evaluation, with 3D interaction and immediate feedback.',
      mlTitle: 'APIs, Data, and Integrations',
      mlText:
        'I organize data, connect services, and prepare solid foundations so products are maintainable and easier to scale.',
      llmTitle: 'AI and Applied Research',
      llmText:
        'I work with data processing, segmentation, model training, and result visualization for technical research.',
    },
    experience: {
      eyebrow: 'Experience',
      title: 'Recent experience building useful software for education, operations, and research.',
      erpRole: 'Full Stack Developer - ERP and Website',
      erpDate: 'May 2026 - Present',
      erpTitle: 'Mega Mayorista - ERP and Web Platform',
      erpStack:
        'Java · Spring Boot · Spring Data JPA · PostgreSQL · React · JavaScript · Tailwind CSS · Docker · Nginx · Git',
      erpPoint1:
        'Designed REST endpoints with Spring Boot, Spring Data JPA/Hibernate, and Maven, including pagination, filters, and parameters for ERP operations.',
      erpPoint2:
        'Implemented near-real-time stock updates with fetch, async/await, and recursive polling via setTimeout, without page reloads and with localStorage caching.',
      erpPoint3:
        'Modeled PostgreSQL with multiple schemas, JOINs, CTEs, aggregations, triggers, foreign keys, and CHECK constraints for sales, rotation, and trend reporting.',
      erpPoint4:
        'Containerized the environment with Docker Compose, volumes, and bind mounts, orchestrating PostgreSQL, Spring Boot, and Nginx as a proxy and static-file server.',
      erpPoint5:
        'Built the ERP in React with hooks and the public site in vanilla JavaScript, Tailwind CSS, responsive design, and SPA navigation through the History API.',
      erpPoint6:
        'Integrated JWT authentication, regex-based validation and sanitization, synonym-aware search, and SRI electronic invoicing workflows for Ecuador.',
      vrRole: 'Educational Virtual Reality Game Developer',
      vrDate: 'December 2025 - May 2026',
      vrTitle: 'UEMY Urcuquí - KIDOCODE VR',
      vrStack: 'Three.js · WebXR · JavaScript · Firebase · Meta Quest 3S',
      vrPoint1:
        'Designed and implemented an educational VR prototype for practicing computational thinking through logic, sequencing, and problem-solving challenges.',
      vrPoint2:
        'Built 3D experiences with Three.js and WebXR, optimized for immersive interaction on Meta Quest 3S.',
      vrPoint3:
        'Integrated Firebase for persistence, web support, and the prototype deployment workflow.',
      vrPoint4:
        'Contributed to an exploratory evaluation with UEMY students, connecting user experience, engagement, and digital competence metrics.',
      hrRole: 'Web Developer - Human Resources Platform',
      hrDate: 'January 2025 - October 2025',
      hrTitle: 'Human Resources Web Application',
      hrStack: 'Vue.js · Node.js · PostgreSQL · PostgREST · REST APIs · Replit',
      hrPoint1:
        'Developed a human resources web platform with a Vue.js frontend and Node.js backend services.',
      hrPoint2:
        'Modeled staff management flows, internal processes, and administrative operations.',
      hrPoint3:
        'Integrated PostgreSQL and PostgREST for data management, API access, and operational queries.',
      hrPoint4:
        'Accelerated prototypes with Replit and short functional validation cycles.',
      hrPoint5:
        'Improved interface structure, usability, and backend logic through iterative refinement.',
      bioRole: 'Biomedical Image Analysis Researcher',
      bioDate: 'January 2024 - December 2024',
      bioTitle: 'Hospital de Ibarra',
      bioStack: 'Python · EfficientNet · Deep Learning · Image Segmentation · Data Analysis',
      bioPoint1:
        'Contributed to biomedical image-analysis research using Python and native tools for mask creation.',
      bioPoint2:
        'Supported preprocessing, segmentation, and dataset organization workflows for technical and research evaluation.',
      bioPoint3:
        'Participated in neural-network training, including EfficientNet-based models for image classification and analysis.',
      bioPoint4:
        'Reviewed and interpreted visual results, strengthening technical documentation, data analysis, and AI-assisted research skills.',
    },
    projects: {
      eyebrow: 'Projects',
      title: 'Projects that show how I think, build, and validate solutions.',
      description:
        'A short selection of work combining web product development, VR, data, and applied research.',
      kidocodeTitle: 'KIDOCODE VR',
      kidocodeText:
        'A virtual reality prototype for teaching computational thinking through 3D challenges, visual programming, and immediate feedback.',
      kidocodeLink: 'View research and recognition',
      hrTitle: 'Human Resources Platform',
      hrText:
        'A web application for staff management, HR processes, and administrative workflows, with APIs and structured data.',
      hrLink: 'View related experience',
      bioTitle: 'Biomedical AI Analysis',
      bioText:
        'Preprocessing, mask creation, and model-training workflows for medical image analysis.',
      bioLink: 'View scientific poster',
      githubTitle: 'Repository and Certifications',
      githubText:
        'Repositories, scripts, and certificates that support my technical work, continuous learning, and professional documentation.',
      githubLink: 'Explore GitHub',
    },
    certifications: {
      eyebrow: 'Certifications',
      title: 'Continuous learning that supports my technical profile.',
      description:
        'Courses and recognitions in frontend, Python, AI, data, cybersecurity, and research.',
      carouselControls: 'Certification carousel controls',
      carouselPrev: 'View previous certification',
      carouselNext: 'View next certification',
      view: 'View certificate',
      englishProficiencyAlt: 'Yachay Tech B2 English language proficiency certificate',
      englishProficiencyIssuer: 'Yachay Tech Language Center • 2026',
      englishProficiencyTitle: 'English Language Proficiency B2',
      itilAlt: 'Simplilearn SkillUp Introduction to ITIL V4 certificate',
      itilIssuer: 'Simplilearn SkillUp • 2026',
      itilTitle: 'Introduction to ITIL V4',
      microsoftAlt: 'Microsoft certificate for introduction to artificial intelligence',
      microsoftIssuer: 'Microsoft • 2025',
      microsoftTitle: 'Introduction to Artificial Intelligence Concepts',
      scikitAlt: 'Supervised Learning with scikit-learn certificate',
      scikitIssuer: 'DataCamp • 2024',
      scikitTitle: 'Supervised Learning with scikit-learn',
      monetizingAlt: 'Monetizing Artificial Intelligence certificate',
      monetizingIssuer: 'DataCamp • 2024',
      monetizingTitle: 'Monetizing Artificial Intelligence',
      azureAlt: 'Introduction to Azure certificate',
      azureIssuer: 'DataCamp • 2026',
      azureTitle: 'Introduction to Azure',
      angularAlt: 'Angular course certificate',
      angularIssuer: 'Sololearn • 2025',
      angularTitle: 'Angular',
      codingDataAlt: 'Coding for Data certificate',
      codingDataIssuer: 'Sololearn • 2025',
      codingDataTitle: 'Coding for Data',
      csharpAlt: 'Sololearn Introduction to C# certificate',
      csharpIssuer: 'Sololearn • 2025',
      csharpTitle: 'Introduction to C#',
      pythonAlt: 'Crash Course on Python certificate',
      pythonIssuer: 'Google / Coursera • 2020',
      pythonTitle: 'Crash Course on Python',
      cssAlt: 'CSS certificate',
      cssIssuer: 'Sololearn • 2021',
      cssTitle: 'CSS',
      cyberAlt: 'Cybersecurity certificate',
      cyberIssuer: 'Certification • 2025',
      cyberTitle: 'Cybersecurity',
      lifeScienceAlt: 'Life Science Congress attendance certificate',
      lifeScienceIssuer: 'Yachay Tech • 2025',
      lifeScienceTitle: '3rd Life Science Congress',
      edulyticsAlt: 'Hult Prize OnCampus participation certificate',
      edulyticsIssuer: 'Hult Prize • 2025',
      edulyticsTitle: 'OnCampus Program Competitor',
      pytorchAlt: 'Introduction to Deep Learning with PyTorch certificate',
      pytorchIssuer: 'DataCamp • 2026',
      pytorchTitle: 'Introduction to Deep Learning with PyTorch',
      reactAlt: 'React + Redux course certificate',
      reactIssuer: 'Sololearn • 2025',
      reactTitle: 'React + Redux',
      nasaAlt: 'NASA Space Apps Challenge certificate',
      nasaIssuer: 'NASA Space Apps • 2025',
      nasaTitle: 'Galactic Problem Solver',
      ieeeAlt: 'IEEE student membership certificate',
      ieeeIssuer: 'IEEE • 2025',
      ieeeTitle: 'Student Member',
      vrAlt: 'Introduction to Virtual Reality certificate',
      vrIssuer: 'University of London / Coursera • 2020',
      vrTitle: 'Introduction to Virtual Reality',
      machineLearningAlt: 'Introduction to Machine Learning certificate',
      machineLearningIssuer: 'Duke / Coursera • 2020',
      machineLearningTitle: 'Introduction to Machine Learning',
      bigDataAlt: 'Introduction to Big Data certificate',
      bigDataIssuer: 'UC San Diego / Coursera • 2020',
      bigDataTitle: 'Introduction to Big Data',
      programmingAlt: 'Programming for Everybody certificate',
      programmingIssuer: 'University of Michigan / Coursera • 2020',
      programmingTitle: 'Programming for Everybody',
      responsiveAlt: 'Responsive Website Basics certificate',
      responsiveIssuer: 'University of London / Coursera • 2020',
      responsiveTitle: 'Responsive Website Basics',
      excelAlt: 'Excel Skills for Business certificate',
      excelIssuer: 'Macquarie / Coursera • 2020',
      excelTitle: 'Excel Skills for Business',
      htmlAlt: 'HTML certificate',
      htmlIssuer: 'Sololearn • 2021',
      htmlTitle: 'HTML',
      sqlAlt: 'SQL certificate',
      sqlIssuer: 'Sololearn • 2021',
      sqlTitle: 'SQL',
      phpAlt: 'PHP certificate',
      phpIssuer: 'Sololearn • 2021',
      phpTitle: 'PHP',
      emailsAlt: 'Write Professional Emails in English certificate',
      emailsIssuer: 'Georgia Tech / Coursera • 2020',
      emailsTitle: 'Professional Emails in English',
    },
    research: {
      eyebrow: 'Research',
      title: 'Applied research, educational prototypes, and recognitions.',
      description:
        'A selection of projects where I connect software, AI, immersive education, and data analysis with real-world impact.',
      kidocodePosterAlt: 'KIDOCODE VR project poster presented at CompuFest 2026',
      kidocodePosterTitle: 'KIDOCODE VR: an immersive prototype for teaching computational thinking',
      kidocodePosterText:
        'Poster presented at CompuFest 2026 about a virtual reality prototype built with Meta Quest 3S to support computational-thinking activities at UEMY, with an exploratory evaluation involving 93 students.',
      kidocodePosterMeta: 'CompuFest 2026 • Urcuquí, Ecuador',
      kidocodePosterLink: 'View full poster',
      kidocodeAwardAlt: 'Daniel Rivas with a CompuFest 2026 recognition for the KIDOCODE VR project',
      kidocodeAwardTitle: 'CompuFest 2026 Recognition',
      kidocodeAwardText:
        'KIDOCODE VR was recognized among the Top 5 highlighted proposals, standing out for immersive education, community impact, and applied technology.',
      kidocodeAwardMeta: 'Yachay Tech • CompuFest 2026',
      carouselControls: 'Research carousel controls',
      carouselPrev: 'View previous item',
      carouselNext: 'View next item',
      posterAlt: 'Scientific poster presented at the 5th Life Science Congress 2025',
      posterText:
        'Work focused on medical image analysis and deep learning applied to assisted diagnosis.',
      posterMeta: 'Puerto Ayora, Santa Cruz Island • November 2025',
      posterLink: 'View poster',
      photoAlt: 'Daniel Rivas beside the poster in Galapagos',
      photoTitle: 'Poster presentation',
      photoText: 'Record of the scientific poster presentation during the congress in Galapagos.',
      photoMeta: 'Santa Cruz Island • November 2025',
    },
    cta: {
      eyebrow: 'Let us collaborate',
      title: 'I am ready to build your team’s next key platform.',
      description:
        'If you need a reliable engineer focused on results and clear communication, let us talk.',
      whatsapp: 'Contact me on WhatsApp',
    },
    footer: {
      role: 'Full Stack Software Developer • ICT Engineering',
      contact: 'Direct contact',
      online: 'Online presence',
      availability: 'Available for remote opportunities',
    },
  },
};

const languageButtons = document.querySelectorAll('[data-lang]');
const languageSwitcher = document.querySelector('.language-switcher');
const metaDescription = document.querySelector('meta[name="description"]');
const siteHeader = document.querySelector('.site-header');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav-links a');

const getStoredLanguage = () => {
  const storedLanguage = localStorage.getItem('portfolio-language');
  return translations[storedLanguage] ? storedLanguage : 'es';
};

const translate = (language) => {
  const dictionary = translations[language];

  document.documentElement.lang = language;
  document.title = dictionary.meta.title;
  metaDescription.setAttribute('content', dictionary.meta.description);
  languageSwitcher.setAttribute('aria-label', dictionary.meta.languageLabel);

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = element.dataset.i18n.split('.').reduce((group, key) => group?.[key], dictionary);

    if (value) {
      element.textContent = value;
    }
  });

  document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
    const value = element.dataset.i18nAlt.split('.').reduce((group, key) => group?.[key], dictionary);

    if (value) {
      element.setAttribute('alt', value);
    }
  });

  document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
    const value = element.dataset.i18nAriaLabel
      .split('.')
      .reduce((group, key) => group?.[key], dictionary);

    if (value) {
      element.setAttribute('aria-label', value);
    }
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });

  updateNavigationMenu(navToggle?.getAttribute('aria-expanded') === 'true');

  localStorage.setItem('portfolio-language', language);
};

const getActiveLanguage = () => {
  const activeLanguage = document.documentElement.lang;
  return translations[activeLanguage] ? activeLanguage : 'es';
};

const updateNavigationMenu = (isOpen) => {
  if (!siteHeader || !navToggle) {
    return;
  }

  const dictionary = translations[getActiveLanguage()];
  siteHeader.classList.toggle('is-menu-open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
  navToggle.setAttribute('aria-label', isOpen ? dictionary.nav.menuClose : dictionary.nav.menuOpen);
};

const scrollToSection = (target) => {
  const headerHeight = siteHeader?.getBoundingClientRect().height || 0;
  const targetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight - 18;

  window.scrollTo({
    top: Math.max(targetTop, 0),
    behavior: 'smooth',
  });
};

languageButtons.forEach((button) => {
  button.addEventListener('click', () => translate(button.dataset.lang));
});

navToggle?.addEventListener('click', () => {
  updateNavigationMenu(navToggle.getAttribute('aria-expanded') !== 'true');
});

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href');

    if (!targetId?.startsWith('#')) {
      updateNavigationMenu(false);
      return;
    }

    const target = document.querySelector(targetId);

    if (!target) {
      updateNavigationMenu(false);
      return;
    }

    event.preventDefault();
    updateNavigationMenu(false);

    const delay = window.matchMedia('(max-width: 900px)').matches ? 260 : 0;

    window.setTimeout(() => {
      history.pushState(null, '', targetId);
      scrollToSection(target);
    }, delay);
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    updateNavigationMenu(false);
  }
});

window.addEventListener('resize', () => {
  if (window.matchMedia('(min-width: 901px)').matches) {
    updateNavigationMenu(false);
  }
});

translate(getStoredLanguage());

document.querySelectorAll('[data-carousel]').forEach((carousel) => {
  const track = carousel.querySelector('[data-carousel-track]') || carousel.querySelector('.research-grid');
  const previousButton = carousel.querySelector('[data-carousel-prev]');
  const nextButton = carousel.querySelector('[data-carousel-next]');

  if (!track || !previousButton || !nextButton) {
    return;
  }

  const getScrollAmount = () => {
    const firstCard = track.querySelector('[data-carousel-card]') || track.firstElementChild;
    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
    return firstCard ? firstCard.getBoundingClientRect().width + gap : track.clientWidth;
  };

  const updateControls = () => {
    const maxScroll = track.scrollWidth - track.clientWidth;
    previousButton.disabled = track.scrollLeft <= 2;
    nextButton.disabled = track.scrollLeft >= maxScroll - 2;
  };

  previousButton.addEventListener('click', () => {
    track.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
  });

  nextButton.addEventListener('click', () => {
    track.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
  });

  track.addEventListener('scroll', updateControls, { passive: true });
  window.addEventListener('resize', updateControls);
  updateControls();
});

const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

reveals.forEach((el) => observer.observe(el));

// Scroll-spy: resalta en el menú la sección visible actualmente
const spyLinks = Array.from(navLinks).filter((link) =>
  link.getAttribute('href')?.startsWith('#')
);

const spyTargets = spyLinks
  .map((link) => {
    const target = document.querySelector(link.getAttribute('href'));
    return target ? { link, target } : null;
  })
  .filter(Boolean);

if (spyTargets.length) {
  const setCurrent = (activeLink) => {
    spyLinks.forEach((link) => {
      link.classList.toggle('is-current', link === activeLink);
    });
  };

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visible) {
        const match = spyTargets.find((item) => item.target === visible.target);
        if (match) {
          setCurrent(match.link);
        }
      }
    },
    { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
  );

  spyTargets.forEach((item) => sectionObserver.observe(item.target));
}
