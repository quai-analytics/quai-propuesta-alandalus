/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        quai: {
          // Colores principales de la paleta QuAI
          navy: "#082038",    // Azul marino oscuro
          blue: "#256E3B",    // Azul medio
          teal: "#2563EB",    // Turquesa/acento
          sand: "#DBCDC6",    // Beige/arena
          red: "#e53935"      // Rojo corporativo para títulos
        }
      }
    }
  },
  plugins: []
};


