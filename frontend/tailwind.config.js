/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        pariscam: {
          // Bleus doux
          blue:        "#3B82F6", // Bleu principal (clair, moderne)
          blueLight:   "#DBEAFE", // Bleu très clair (fonds)
          blueDark:    "#2563EB", // Bleu hover
          blueNight:   "#1E3A5F", // Bleu nuit doux (Hero, Footer)

          // Verts menthe
          green:       "#34D399", // Vert menthe (accents)
          greenLight:  "#D1FAE5", // Vert très clair (fonds)
          greenDark:   "#10B981", // Vert hover

          // Accents
          yellow:      "#FCD34D", // Jaune doux

          // Neutres
          gray:        "#F8FAFC", // Gris très clair (fonds alternés)
          graySoft:    "#F1F5F9", // Gris doux
          text:        "#0F172A", // Texte principal (bleu nuit très foncé)
          muted:       "#64748B", // Texte secondaire
          border:      "#E2E8F0", // Bordures douces
        },
      },
      fontFamily: {
       sans: ["var(--font-nunito)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 15px rgba(59, 130, 246, 0.06)",
        card: "0 4px 25px rgba(59, 130, 246, 0.08)",
        "card-hover": "0 12px 40px rgba(59, 130, 246, 0.15)",
        glow: "0 0 30px rgba(52, 211, 153, 0.3)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
