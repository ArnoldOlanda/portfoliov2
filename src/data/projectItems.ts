export const projectItems = [
  {
    id: 1,
    title: 'Movies App',
    img: '/src/assets/peliculas-app.png',
    description:
      'Aplicación web desarrollada con ReactJs y TypeScript que permite explorar y buscar películas con una interfaz moderna e intuitiva. Utilizando Tailwind CSS para un diseño responsivo y elegante, la aplicación se integra con The Movie Database API para obtener información actualizada en tiempo real. Los usuarios pueden navegar por películas populares, mejor valoradas y proximos estrenos, así como ver detalles completos de cada película, incluyendo sinopsis y trailers.',
    tecnologies: [
      { name: 'ReactJs', bgClass: 'bg-blue-500/50' },
      { name: 'Typescript', bgClass: 'bg-blue-600/50' },
      { name: 'Tailwind CSS', bgClass: 'bg-cyan-500/50' },
      { name: 'The Movie Database API', bgClass: 'bg-yellow-500/50' },
    ],
    url: 'https://github.com/ArnoldOlanda/peliculas_app'
  },
  {
    id: 2,
    title: 'Youtube Redesign',
    img: '/src/assets/youtube-redesign.png',
    description:
      'Rediseño completo de la interfaz de YouTube desarrollado con ReactJs y TypeScript, utilizando Styled Components para crear una experiencia visual moderna y personalizable. El proyecto reimagina la navegación con componentes reutilizables y tipado estático, ofreciendo una arquitectura escalable y mantenible. Se enfoca en mejorar la experiencia de usuario con una interfaz más limpia, mejor accesibilidad y animaciones fluidas implementadas con CSS-in-JS.',
    tecnologies: [
      { name: 'ReactJs', bgClass: 'bg-blue-500/50' },
      { name: 'Styled Components', bgClass: 'bg-pink-500/50' },
      { name: 'Typescript', bgClass: 'bg-blue-600/50' },
    ],
    url: 'https://github.com/ArnoldOlanda/youtube-redesign'
  },
  {
    id: 3,
    title: 'Repets Mobile App',
    img: '/src/assets/repets-app.png',
    description:
      'Aplicación móvil fullstack desarrollada con React Native CLI y TypeScript para el frontend, con un backend robusto en Express. Utiliza PostgreSQL para gestionar datos de mascotas y alojamiento de mascotas, Socket.IO para chat en tiempo real entre dueños de mascotas, Cloudinary para almacenamiento y optimización de imágenes, y Firebase para autenticación y notificaciones push. La arquitectura permite gestionar alojamientos, paseos y servicios veterinarios, facilitando la interacción entre usuarios y proveedores de servicios para mascotas.',
    tecnologies: [
      { name: 'React Native CLI', bgClass: 'bg-blue-400/50' },
      { name: 'Express', bgClass: 'bg-gray-700/50' },
      { name: 'PostgreSQL', bgClass: 'bg-blue-700/50' },
      { name: 'Socket.IO', bgClass: 'bg-black/50' },
      { name: 'TypeScript', bgClass: 'bg-blue-600/50' },
      { name: 'Cloudinary', bgClass: 'bg-indigo-600/50' },
      { name: 'Firebase', bgClass: 'bg-orange-500/50' },
    ],
    url: 'https://github.com/ArnoldOlanda/repetsApp'
  },
  {
    id: 4,
    title: 'Todo Mobile App',
    img: '/src/assets/todo-app.png',
    description:
      'Aplicación móvil de gestión de tareas desarrollada con React Native CLI y TypeScript, implementando Redux Toolkit para un manejo eficiente del estado global. El backend en Express se comunica con PostgreSQL para persistencia de datos, permitiendo sincronización entre dispositivos.',
    tecnologies: [
      { name: 'React Native CLI', bgClass: 'bg-blue-400/50' },
      { name: 'Express', bgClass: 'bg-gray-700/50' },
      { name: 'Typescript', bgClass: 'bg-blue-600/50' },
      { name: 'Redux Toolkit', bgClass: 'bg-purple-600/50' },
      { name: 'PostgreSQL', bgClass: 'bg-blue-700/50' },
    ],
    url: 'https://github.com/ArnoldOlanda/todoAppTs-front'
  },
  {
    id: 5,
    title: 'Payments App',
    img: '/src/assets/payments-app.png',
    description:
      'Aplicación móvil de pagos desarrollada con ReactJs, React Native y Expo para un desarrollo ágil multiplataforma, utilizando TypeScript en toda la stack. El backend en NestJS proporciona una arquitectura modular y escalable con inyección de dependencias, conectado a PostgreSQL para transacciones seguras. Zustand gestiona el estado de forma ligera y eficiente. Incluye gestion de creditos, manejo de pagos con fechas de vencimiento y lista de clientes divididos por zonas. La aplicacion cuenta con un panel administrativo web para la gestion de usuarios y reportes financieros.',
    tecnologies: [
      { name: 'React Native', bgClass: 'bg-blue-400/50' },
      { name: 'Reactjs', bgClass: 'bg-blue-500/50' },
      { name: 'Expo', bgClass: 'bg-slate-800/50' },
      { name: 'Nestjs', bgClass: 'bg-red-600/50' },
      { name: 'TypeScript', bgClass: 'bg-blue-600/50' },
      { name: 'Redis', bgClass: 'bg-red-700/50' },
      { name: 'Zustand', bgClass: 'bg-amber-600/50' },
      { name: 'PostgreSQL', bgClass: 'bg-blue-700/50' },
    ],
    url: 'https://github.com/ArnoldOlanda/payments-app-api'
  },
  {
    id: 6,
    title: 'Notes App',
    img: '/src/assets/notes-app-vue-nest.png',
    description:
      'Aplicación de notas desarrollada con Vue.js 3 y Pinia totalmente tipada con TypeScript. El backend en NestJS expone una API GraphQL que permite consultas flexibles y eficientes, reduciendo el over-fetching de datos. La arquitectura permite sincronización en tiempo real, búsqueda avanzada por contenido, etiquetas y categorias. La aplicacion ofrece multiples tipos de inicio de sesión via proveedores tales como Google y Github y autenticación tradicional',
    tecnologies: [
      { name: 'Vuejs', bgClass: 'bg-green-600/50' },
      { name: 'Pinia', bgClass: 'bg-yellow-600/50' },
      { name: 'Nestjs', bgClass: 'bg-red-600/50' },
      { name: 'TypeScript', bgClass: 'bg-blue-600/50' },
      { name: 'GraphQL', bgClass: 'bg-pink-600/50' },
      { name: 'MySQL', bgClass: 'bg-blue-800/50' },
    ],
    url: 'https://github.com/ArnoldOlanda/notes-app-api'
  },
  {
    id: 7,
    title: 'Library System App',
    img: '/src/assets/library-system-app.png',
    description:
      'Sistema de gestión de librerias y utiles de escritorio desarrollado con Reactjs y Shadcn UI. Utiliza Tanstack Query para la gestión eficiente de datos en el frontend. El backend en Nestjs ofrece una arquitectura robusta y escalable, mientras que Zustand maneja el estado global de la aplicación de manera ligera. Redis se emplea para mejorar el rendimiento mediante caching, y PostgreSQL garantiza una gestión segura y eficiente de la base de datos. La aplicación permite gestionar inventarios, ventas, compras, punto de venta y reportes detallados',
    tecnologies: [
      { name: 'Reactjs', bgClass: 'bg-blue-500/50' },
      { name: 'Shadcn UI', bgClass: 'bg-slate-900/50' },
      { name: 'Tanstack Query', bgClass: 'bg-red-500/50' },
      { name: 'Nestjs', bgClass: 'bg-red-600/50' },
      { name: 'Zustand', bgClass: 'bg-amber-600/50' },
      { name: 'Redis', bgClass: 'bg-red-700/50' },
      { name: 'TypeScript', bgClass: 'bg-blue-600/50' },
      { name: 'PostgreSQL', bgClass: 'bg-blue-700/50' },
    ],
    url: 'https://github.com/ArnoldOlanda/library-system-api'
  },
];
