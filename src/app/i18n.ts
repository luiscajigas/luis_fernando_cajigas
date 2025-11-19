export type Lang = "es" | "en";

type Dict = Record<string, { es: string; en: string }>;

export const dict: Dict = {
  informacion_title: { es: "INFORMACION", en: "INFORMATION" },
  available_true: { es: "Disponible para proyectos", en: "Available for projects" },
  available_false: { es: "No disponible", en: "Not available" },
  achievements: { es: "Logros", en: "Achievements" },
  achievements_stats: { es: "Logros & Estadísticas", en: "Achievements & Stats" },
  achv_experience_years: { es: "4 años de experiencia", en: "4 years of experience" },
  achv_projects_completed: { es: "7 proyectos completados", en: "7 completed projects" },
  achv_self_taught: { es: "100% autodidacta inicialmente", en: "Initially 100% self-taught" },
  tech_stack: { es: "Mi stack tecnológico", en: "My tech stack" },
  tech_tools: { es: "Tecnologías & Herramientas", en: "Technologies & Tools" },
  frontend: { es: "Frontend", en: "Frontend" },
  backend: { es: "Backend", en: "Backend" },
  know_me_better: { es: "Conocerme mejor", en: "Know me better" },
  know_more_about_me: { es: "Un poco más sobre mí", en: "A bit more about me" },
  intro_name: { es: "Hola, soy Luis Fernando Cajigas", en: "Hi, I'm Luis Fernando Cajigas" },
  like_read_games: { es: "Me gusta leer y jugar videojuegos en mis tiempos libres", en: "I enjoy reading and playing video games in my free time" },
  location_current: { es: "Ubicación actual: Pasto - Nariño, Colombia", en: "Current location: Pasto - Nariño, Colombia" },
  fav_food_burger: { es: "Mi comida favorita es la hamburguesa", en: "My favorite food is the burger" },
  fav_sport_volleyball: { es: "Mi deporte favorito es el voleibol", en: "My favorite sport is volleyball" },
  age_20: { es: "Tengo 20 años de edad", en: "I am 20 years old" },
  years_suffix: { es: " años", en: " years" },
  of_experience: { es: "de experiencia", en: "of experience" },
  software_engineering_semester_5: { es: "Ingeniería de Software - 5to Semestre", en: "Software Engineering - 5th Semester" },
  
  informacion_bio_p1: {
    es: "Con pasión por el desarrollo y el diseño, me enfoco en crear experiencias digitales funcionales y atractivas. Inicié de forma autodidacta y hoy continuo formándome académicamente para fortalecer mis habilidades técnicas y creativas.",
    en: "With a passion for development and design, I focus on building functional and engaging digital experiences. I started self-taught and now continue my academic training to strengthen both my technical and creative skills."
  },
  informacion_bio_p2: {
    es: "Actualmente curso el quinto semestre de Ingeniería de Software y me especializo en Desarrollo Web Fullstack, construyendo soluciones escalables y centradas en el usuario con tecnologías como React, Node.js y Django.",
    en: "I am currently in the fifth semester of Software Engineering and specialize in Fullstack Web Development, building scalable, user-centered solutions with technologies such as React, Node.js, and Django."
  },
  services_my: { es: "Mis", en: "My" },
  services_title: { es: "Servicios", en: "Services" },
  guaranteed_quality: { es: "Calidad garantizada", en: "Guaranteed quality" },
  includes: { es: "Lo que incluye", en: "What's included" },
  used_tech: { es: "Tecnologías utilizadas", en: "Technologies used" },
  work_process: { es: "Proceso de trabajo", en: "Work process" },
  step_1: { es: "Análisis de requerimientos y planificación", en: "Requirements analysis and planning" },
  step_2: { es: "Desarrollo iterativo con feedback continuo", en: "Iterative development with continuous feedback" },
  step_3: { es: "Testing y optimización", en: "Testing and optimization" },
  step_4: { es: "Deploy y documentación", en: "Deploy and documentation" },
  step_5: { es: "Soporte post-lanzamiento", en: "Post-launch support" },
  premium_quality: { es: "Calidad premium", en: "Premium quality" },
 
  service_frontend_title: { es: "Desarrollo Frontend", en: "Frontend Development" },
  service_frontend_desc: { es: "Interfaces modernas y responsivas con las últimas tecnologías", en: "Modern, responsive interfaces with the latest technologies" },
  service_frontend_desc_full: { es: "Desarrollo de aplicaciones web frontend utilizando React, Next.js, TypeScript y Tailwind CSS. Enfoque en UX/UI, rendimiento optimizado y diseño responsive que funciona perfectamente en todos los dispositivos.", en: "Frontend web applications using React, Next.js, TypeScript, and Tailwind CSS. Focus on UX/UI, optimized performance, and responsive design that works perfectly across devices." },
  service_frontend_feat_responsive: { es: "Diseño responsive", en: "Responsive design" },
  service_frontend_feat_seo: { es: "Optimización SEO", en: "SEO optimization" },
  service_frontend_feat_animations: { es: "Animaciones fluidas", en: "Smooth animations" },
  service_frontend_feat_performance: { es: "Performance optimizado", en: "Optimized performance" },
  service_frontend_feat_accessibility: { es: "Accesibilidad web", en: "Web accessibility" },
  service_backend_title: { es: "Desarrollo Backend", en: "Backend Development" },
  service_backend_desc: { es: "APIs robustas y bases de datos escalables", en: "Robust APIs and scalable databases" },
  service_backend_desc_full: { es: "Desarrollo de sistemas backend completos con Node.js, Python/Django, bases de datos relacionales y no relacionales. Implementación de APIs REST, autenticación segura y arquitecturas escalables.", en: "Complete backend systems with Node.js, Python/Django, relational and non-relational databases. Implementation of REST APIs, secure authentication, and scalable architectures." },
  service_backend_feat_apis: { es: "APIs REST/GraphQL", en: "REST/GraphQL APIs" },
  service_backend_feat_auth_jwt: { es: "Autenticación JWT", en: "JWT authentication" },
  service_backend_feat_db_optimized: { es: "Base de datos optimizada", en: "Optimized database" },
  service_backend_feat_docs: { es: "Documentación completa", en: "Comprehensive documentation" },
  service_backend_feat_testing: { es: "Testing automatizado", en: "Automated testing" },
  service_uiux_title: { es: "Diseño UI/UX", en: "UI/UX Design" },
  service_uiux_desc: { es: "Experiencias de usuario intuitivas y atractivas", en: "Intuitive and engaging user experiences" },
  service_uiux_desc_full: { es: "Diseño de interfaces centradas en el usuario utilizando principios de UX/UI modernos. Prototipado, testing de usabilidad y sistemas de design consistentes.", en: "User-centered interface design using modern UX/UI principles. Prototyping, usability testing, and consistent design systems." },
  service_uiux_feat_user_research: { es: "Research de usuarios", en: "User research" },
  service_uiux_feat_wireframes: { es: "Wireframes y mockups", en: "Wireframes and mockups" },
  service_uiux_feat_prototyping: { es: "Prototipado interactivo", en: "Interactive prototyping" },
  service_uiux_feat_design_system: { es: "Design system", en: "Design system" },
  service_uiux_feat_usability: { es: "Testing de usabilidad", en: "Usability testing" },
  service_consulting_title: { es: "Consultoría Técnica", en: "Technical Consulting" },
  service_consulting_desc: { es: "Asesoramiento y optimización de proyectos existentes", en: "Advisory and optimization of existing projects" },
  service_consulting_desc_full: { es: "Auditoría de código, optimización de performance, arquitectura de software y consultoría técnica para mejorar proyectos existentes o planificar nuevos desarrollos.", en: "Code audit, performance optimization, software architecture, and technical consulting to improve existing projects or plan new developments." },
  service_consulting_feat_code_audit: { es: "Auditoría de código", en: "Code audit" },
  service_consulting_feat_performance: { es: "Optimización performance", en: "Performance optimization" },
  service_consulting_feat_security_assessment: { es: "Security assessment", en: "Security assessment" },
  service_consulting_feat_architecture: { es: "Arquitectura de software", en: "Software architecture" },
  service_consulting_feat_mentoring: { es: "Mentoring técnico", en: "Technical mentoring" },
  
  inicio_years_exp_label: { es: "Años Exp", en: "Years Exp" },
  inicio_projects_label: { es: "Proyectos", en: "Projects" },
  inicio_location: { es: "Pasto, Nariño - Colombia", en: "Pasto, Nariño - Colombia" },
  inicio_cv_download: { es: "Descargar CV", en: "Download CV" },
  inicio_bio_p1_a: { es: "Soy estudiante de quinto semestre de", en: "I am a fifth-semester student of" },
  inicio_bio_software_engineering: { es: "Ingeniería de Software", en: "Software Engineering" },
  inicio_bio_p1_b: { es: "en la Universidad Cooperativa de Colombia, con formación especializada en", en: "at the Universidad Cooperativa de Colombia, with specialized training in" },
  inicio_bio_frontend_backend: { es: "frontend y backend", en: "frontend and backend" },
  inicio_bio_p2_a: { es: "Nacido en 2005 en Pasto, Nariño, descubrí mi pasión por la programación desde temprana edad.", en: "Born in 2005 in Pasto, Nariño, I discovered my passion for programming at an early age." },
  inicio_bio_p2_b: { es: "A lo largo de mi formación he realizado diversos cursos en", en: "Throughout my training I have completed various courses in" },
  inicio_bio_software_dev: { es: "desarrollo de software", en: "software development" },
  inicio_bio_and: { es: "y", en: "and" },
  inicio_bio_digital_interfaces: { es: "creación de interfaces digitales", en: "designing digital interfaces" },
  inicio_bio_p2_c: { es: ", fortaleciendo mis habilidades técnicas y creativas.", en: ", strengthening my technical and creative skills." },
  inicio_bio_p3_a: { es: "Mi propósito es explorar las infinitas posibilidades que ofrece la programación y el diseño digital, buscando constantemente nuevas formas de expresión a través de la", en: "My purpose is to explore the infinite possibilities offered by programming and digital design, constantly seeking new forms of expression through" },
  inicio_bio_innovation: { es: "innovación", en: "innovation" },
  inicio_bio_comma: { es: ",", en: "," },
  inicio_bio_experimentation: { es: "experimentación", en: "experimentation" },
  inicio_bio_and2: { es: "y el", en: "and" },
  inicio_bio_critical_thinking: { es: "pensamiento crítico", en: "critical thinking" },
  
  proyectos_filters_all_label: { es: "todos", en: "all" },
  proyectos_filters_completed_label: { es: "completado", en: "completed" },
  proyectos_filters_in_progress_label: { es: "en desarrollo", en: "in progress" },
  proyectos_status_completed: { es: "Completado", en: "Completed" },
  proyectos_status_in_progress: { es: "En desarrollo", en: "In progress" },
  proyectos_filter_all: { es: "Todos", en: "All" },
  proyectos_filter_completed: { es: "Completado", en: "Completed" },
  proyectos_filter_in_progress: { es: "En desarrollo", en: "In progress" },
  proyectos_code: { es: "Código", en: "Code" },
  proyectos_website: { es: "Web", en: "Website" },
  proyectos_dev_design_by: { es: "Dev / Diseño:", en: "Dev / Design:" },
 
  sidebar_light_mode: { es: "Modo claro", en: "Light mode" },
  sidebar_dark_mode: { es: "Modo oscuro", en: "Dark mode" },
 
  contacto_h1: { es: "CONTACTO", en: "CONTACT" },
  contacto_banner_title: { es: "CONTACTO", en: "CONTACT" },
  contacto_have_project_question: { es: "¿Tienes un proyecto en mente?", en: "Do you have a project in mind?" },
  contacto_intro_paragraph: {
    es: "Estoy siempre abierto a nuevas oportunidades y colaboraciones. Hablemos sobre cómo podemos hacer realidad tu idea.",
    en: "I’m always open to new opportunities and collaborations. Let’s talk about how we can bring your idea to life."
  },
  contacto_card_email: { es: "Email", en: "Email" },
  contacto_card_location: { es: "Ubicación", en: "Location" },
  contacto_card_response_time: { es: "Horario de respuesta", en: "Response time" },
  contacto_or_send_email: { es: "o envíame un correo directamente a", en: "or send me an email directly at" },
  contacto_placeholder_name: { es: "Tu nombre", en: "Your name" },
  contacto_placeholder_email: { es: "Tu correo", en: "Your email" },
  contacto_placeholder_message: { es: "Tu mensaje", en: "Your message" },
  contacto_sending: { es: "Enviando...", en: "Sending..." },
  contacto_send: { es: "Enviar", en: "Send" },
  contacto_success: { es: "Mensaje enviado con éxito.", en: "Message sent successfully." },
  contacto_error: { es: "Error al enviar el mensaje.", en: "Error sending the message." },
  contacto_review_label: { es: "Reseña", en: "Review" },
  contacto_question_title: { es: "¿Tienes un proyecto en mente?", en: "Do you have a project in mind?" },
  contacto_question_subtitle: { es: "Estoy siempre abierto a nuevas oportunidades y colaboraciones. Hablemos sobre cómo podemos hacer realidad tu idea.", en: "I'm always open to new opportunities and collaborations. Let's talk about how we can bring your idea to life." },
  contacto_info_email_label: { es: "Email", en: "Email" },
  contacto_info_location_label: { es: "Ubicación", en: "Location" },
  contacto_info_response_time_label: { es: "Horario de respuesta", en: "Response time" },
  contacto_info_response_time_value: { es: "24-48 horas", en: "24–48 hours" },
  contacto_cta_start_conversation: { es: "empezar conversacion", en: "start conversation" },
  contacto_cta_or_email: { es: "o envíame un correo directamente a", en: "or email me directly at" },
  contacto_form_title: { es: "Envíame un mensaje", en: "Send me a message" },
  contacto_form_name_placeholder: { es: "Tu nombre", en: "Your name" },
  contacto_form_email_placeholder: { es: "Tu correo", en: "Your email" },
  contacto_form_message_placeholder: { es: "Tu mensaje", en: "Your message" },
  contacto_form_sending: { es: "Enviando...", en: "Sending..." },
  contacto_form_send: { es: "Enviar", en: "Send" },
  contacto_form_success: { es: "Mensaje enviado con éxito.", en: "Message sent successfully." },
  contacto_form_error: { es: "Error al enviar el mensaje.", en: "Error sending the message." },
  contacto_reviews_button: { es: "Reseñas", en: "Reviews" },
  contacto_reviews_title: { es: "Reseñas de Clientes", en: "Client Reviews" },
  contacto_reviews_item_prefix: { es: "Reseña", en: "Review" },

};

export const frases: Record<Lang, string[]> = {
  es: [
    "LA ÚNICA FORMA DE APRENDER UN NUEVO LENJUAGUE ES ESCRÍBIENDO PROGRAMAS EN ÉL",
    "PRIMERO RESUELVE EL PROBLEMA, DESPUES ESCRIBE EL CÓDIGO",
    "SIEMPRE APRENDIENDO Y ADQUIRIENDO NUEVAS HABILIDADES",
  ],
  en: [
    "THE ONLY WAY TO LEARN A NEW LANGUAGE IS TO WRITE PROGRAMS IN IT",
    "FIRST SOLVE THE PROBLEM, THEN WRITE THE CODE",
    "ALWAYS LEARNING AND ACQUIRING NEW SKILLS",
  ],
};

export const t = (key: keyof typeof dict, lang: Lang) => dict[key][lang];

export const frasesInicio: Record<Lang, string[]> = {
  es: [
    "BIENVENIDO A MI PORTAFOLIO",
    "ESPERO TE GUSTE MI TRABAJO",
    "NUNCA PARO DE APRENDER",
  ],
  en: [
    "WELCOME TO MY PORTFOLIO",
    "HOPE YOU LIKE MY WORK",
    "I NEVER STOP LEARNING",
  ],
};

export type Project = {
  titulo: string;
  fecha?: string;
  descripcion?: string;
  imagen?: string;
  github?: string;
  web?: string;
  tecnologias?: string[];
  estadoKey?: "completed" | "in_progress";
};

const projectsByLang: Record<Lang, Project[]> = {
  es: [
    {
      titulo: "Practica inicio sesion en tailwind",
      fecha: "Agosto 26",
      descripcion:
        "Proyecto frontend sobre un inicio de sesión realizado con Tailwind CSS y sus propiedades avanzadas, implementado en Next.js con animaciones fluidas y diseño responsive.",
      imagen: "/images/proyecto1.png",
      github: "https://github.com/luiscajigas/trabajos-diseno.git",
      web: "https://trabajos-diseno.vercel.app/",
      tecnologias: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
      estadoKey: "completed",
    },
    {
      titulo: "Star Session modern",
      fecha: "Septiembre 21",
      descripcion:
        "Página de autenticación premium con diseño tipo glassmorphism, animaciones garantizando buena experiencia al usuario. Cuenta con una interfaz moderna con efectos visuales y transiciones fluidas",
      imagen: "/images/proyecto2.png",
      github: "https://github.com/luiscajigas/start-session.git",
      web: "https://inico-sesion.vercel.app/",
      tecnologias: ["Next.js", "TypeScript", "Tailwind CSS", "React 18"],
      estadoKey: "completed",
    },
    {
      titulo: "Practica Pasaporte en tailwind",
      fecha: "Septiembre 3",
      descripcion:
        "Pase de abordar digital interactivo con diseño realista tipo ticket físico. Replica la experiencia visual de un boarding pass de aerolínea con QR code funcional, detalles de vuelo y estética profesional de aviación",
      imagen: "/images/proyecto3.png",
      github: "https://github.com/luiscajigas/pasa.git",
      web: "https://pasa-alpha.vercel.app/",
      tecnologias: ["Next.JS", "Tailwind CSS", "React 18"],
      estadoKey: "completed",
    },
    {
      titulo: "PawTrack: App de Rastreo de Collares",
      fecha: "Mayo 30",
      descripcion:
        "Plataforma interactiva de rastreo de collares para mascotas con mapa en tiempo real, donde puedes marcar zonas seguras, registrar nuevas mascotas, comprar productos y consultar noticias relevantes, como reportes de mascotas perdidas.",
      imagen: "/images/julianpets.png",
      github: "https://github.com/JulianMoreno627/proyecto-mascotas.git",
      web: "https://proyecto-mascotas-six.vercel.app/",
      tecnologias: ["ANGULAR", "SCSS", "TypeScript", "HTML", "JavaScript"],
      estadoKey: "in_progress",
    },
    {
      titulo: "Biblioteca Nesux",
      fecha: "Oct 25 ",
      descripcion:
        "Plataforma digital de gestión bibliotecaria donde puedes registrar y administrar libros físicos o digitales, realizar préstamos y reservas con control de fechas, consultar el estado de cada ejemplar, generar reportes, gestionar autores y categorías, además de recibir notificaciones de vencimientos y acceder a estadísticas como libros más prestados o autores más leídos.",
      imagen: "/images/biblioteca.png",
      github: "https://github.com/Andres766/biblioteca-proyecto.git",
      web: "https://biblioteca-proyecto-ypvs.onrender.com/",
      tecnologias: ["DJANGO", "CSS", "Python", "HTML"],
      estadoKey: "in_progress",
    },

  ],
  en: [
    {
      titulo: "Tailwind Login Practice",
      fecha: "August 26",
      descripcion:
        "Frontend project for a login screen built with Tailwind CSS's advanced utilities, implemented in Next.js with smooth animations and responsive design.",
      imagen: "/images/proyecto1.png",
      github: "https://github.com/luiscajigas/trabajos-diseno.git",
      web: "https://trabajos-diseno.vercel.app/",
      tecnologias: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
      estadoKey: "completed",
    },
    {
      titulo: "Star Session modern",
      fecha: "September 21",
      descripcion:
        "Premium authentication page featuring glassmorphism design, animations for a great user experience, and a modern interface with visual effects and fluid transitions.",
      imagen: "/images/proyecto2.png",
      github: "https://github.com/luiscajigas/start-session.git",
      web: "https://inico-sesion.vercel.app/",
      tecnologias: ["Next.js", "TypeScript", "Tailwind CSS", "React 18"],
      estadoKey: "completed",
    },
    {
      titulo: "Tailwind Passport Practice",
      fecha: "September 3",
      descripcion:
        "Interactive digital boarding pass with realistic ticket-style design. Replicates the visual experience of an airline boarding pass with functional QR code, flight details, and professional aviation aesthetics.",
      imagen: "/images/proyecto3.png",
      github: "https://github.com/luiscajigas/pasa.git",
      web: "https://pasa-alpha.vercel.app/",
      tecnologias: ["Next.JS", "Tailwind CSS", "React 18"],
      estadoKey: "completed",
    },
    {
      titulo: "PawTrack: Collar Tracking App",
      fecha: "May 30",
      descripcion:
        "Interactive pet collar tracking platform with real-time map, where you can mark safe zones, register new pets, purchase products, and check relevant news such as lost pet reports.",
      imagen: "/images/julianpets.png",
      github: "https://github.com/JulianMoreno627/proyecto-mascotas.git",
      web: "https://proyecto-mascotas-six.vercel.app/",
      tecnologias: ["ANGULAR", "SCSS", "TypeScript", "HTML", "JavaScript"],
      estadoKey: "in_progress",
    },
    {
       titulo: "nesux library",
      fecha: "Oct 25",
      descripcion:
        "A digital library management platform where you can register and manage physical or digital books, make loans and reservations with date control, check the status of each copy, generate reports, manage authors and categories, as well as receive notifications of expiration dates and access statistics such as most borrowed books or most read authors.",
      imagen: "/images/biblioteca.png",
      github: "https://github.com/Andres766/biblioteca-proyecto.git",
      web: "https://biblioteca-proyecto-ypvs.onrender.com/",
      tecnologias: ["DJANGO", "CSS", "Python", "HTML"],
      estadoKey: "in_progress",
    },
  ],
};

export const getProjects = (lang: Lang): (Project & { estadoLabel?: string })[] => {
  const statusCompleted = t("proyectos_status_completed", lang);
  const statusInProgress = t("proyectos_status_in_progress", lang);
  return projectsByLang[lang].map((p) => ({
    ...p,
    estadoLabel:
      p.estadoKey === "completed"
        ? statusCompleted
        : p.estadoKey === "in_progress"
        ? statusInProgress
        : undefined,
  }));
};

export const contactoResenasTextos: Record<Lang, string[]> = {
  es: [
    "Trabajar con Luis es una muy buena experiencia. Su capacidad para convertir ideas complejas en soluciones es impresionante. Altamente recomendado.",
    "He tenido la oportunidad de trabajar con Luis en varios proyectos de desarrollo de software, y puedo afirmar que es un profesional altamente competente y comprometido.",
    "Su trabajo fue una experiencia sumamente positiva para nuestra empresa. Necesitábamos una aplicación personalizada para optimizar la gestión de nuestros proyectos de ingeniería civil, y Luis entendió perfectamente nuestras necesidades desde el primer momento.",
  ],
  en: [
    "Working with Luis is a great experience. His ability to turn complex ideas into solutions is impressive. Highly recommended.",
    "I have had the opportunity to work with Luis on several software development projects, and I can affirm that he is a highly competent and committed professional.",
    "His work was an extremely positive experience for our company. We needed a custom application to optimize the management of our civil engineering projects, and Luis perfectly understood our needs from the very beginning.",
  ],
};