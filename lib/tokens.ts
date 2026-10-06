export const tokens = {
  colors: {
    bg: "#ffffff",
    ink: "#111111",
    inkMuted: "#555555",
    inkSubtle: "#777777",
    border: "#e5e7eb",
    accent: "#85B7B4",
    accentHover: "#71A6A3",
    accentSoft: "#F2F8F8",
    accentDark: "#4D7876",
  },
  typography: {
    fontFamily: "Inter, sans-serif",
  },
  site: {
    name: "Noelia Villalba",
    title: "Interiorista en Zaragoza",
    phone: "+34 620 89 69 32",
    phoneDisplay: "+34 620 89 69 32",
    email: "info@interioristazaragoza.es",
    address: "Av. del Compromiso de Caspe, 47, Local, 50002 Zaragoza",
    instagram: "https://www.instagram.com/interioristazaragoza/",
    facebook: "https://www.facebook.com/interioristazaragoza/",
    pinterest: "https://www.pinterest.com/villalbadecora/",
  },
  routes: [
    { name: "Inicio", path: "/" },
    { name: "Proyectos", path: "/proyectos" },
    {
      name: "Servicios",
      path: "/servicios",
      subroutes: [
        { name: "Diseño de Interiores", path: "/servicios/diseno-interiores-zaragoza" },
        { name: "Reformas Zaragoza", path: "/servicios/reformas-zaragoza" },
        { name: "Interiorismo comercial", path: "/servicios/interiorismo-comercial-zaragoza" },
      ],
    },
    { name: "Contacto", path: "/contacto" },
  ],
} as const;
