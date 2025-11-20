// Section IDs
const sections = {
  hero: "hero",
  comoFunciona: "como-funciona",
  galeria: "galeria",
  oferta: "oferta-mini-carro",
  contacto: "contacto",
};

// Before/After Gallery Data
const beforeAfterData = [
  {
    id: 1,
    title: "T3 antigo em Lisboa",
    location: "Lapa, Lisboa",
    beforeImg:
      "https://images.pexels.com/photos/1439965/pexels-photo-1439965.jpeg?auto=compress&cs=tinysrgb&w=1200",
    afterImg:
      "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tag: "Renovação total + home staging",
  },
  {
    id: 2,
    title: "Moradia de família",
    location: "Cascais",
    beforeImg:
      "https://images.pexels.com/photos/259580/pexels-photo-259580.jpeg?auto=compress&cs=tinysrgb&w=1200",
    afterImg:
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tag: "Requalificação para valorização de venda",
  },
  {
    id: 3,
    title: "Apartamento para investimento",
    location: "Porto",
    beforeImg:
      "https://images.pexels.com/photos/462206/pexels-photo-462206.jpeg?auto=compress&cs=tinysrgb&w=1200",
    afterImg:
      "https://images.pexels.com/photos/373548/pexels-photo-373548.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tag: "Reforma rápida para rendimento máximo",
  },
];

// Utility function for smooth scrolling
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
