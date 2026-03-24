// tailwind.config.js
// Must be loaded AFTER the Tailwind CDN script in index.html

tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: '#f20df2',   // Falcon magenta
        secondary: '#a3e635', // Lime green from logo
        dark: '#1a1a1a',
        accent: '#e11d48',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'custom': '8px',
      }
    }
  }
};
