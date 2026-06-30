
const boutiqueConfig = {
  // --- Gestion des fermetures exceptionnelles ---
  estFermeExceptionnellement: false,
  messageFermeture: "Nous sommes actuellement fermés.",

  // --- Horaires d'ouverture (Format 24h: [Ouverture, Fermeture]) ---
  // 0: Dimanche, 1: Lundi, 2: Mardi, 3: Mercredi, 4: Jeudi, 5: Vendredi, 6: Samedi
  horaires: {
    1: ["08:00", "19:00"], // Lundi
    2: ["08:00", "19:00"], // Mardi
    3: ["08:00", "19:00"], // Mittwoch
    4: ["08:00", "19:00"], // Donnerstag
    5: ["08:00", "19:00"], // Freitag
    6: ["08:00", "17:00"], // Samstag
    0: null, // Sonntag (Fermé)
  },
};

// Fonction globale pour rafraîchir l'affichage
function initBoutique() {
  if (typeof updateStatus === "function") {
    updateStatus();
  }
}

// Initialisation
document.addEventListener("DOMContentLoaded", initBoutique);
