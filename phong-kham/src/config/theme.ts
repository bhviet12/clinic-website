// Theme configuration based on design board
export const theme = {
  colors: {
    // Primary colors from design board
    navy: {
      dark: '#1e3a5f',      // Dark navy blue (main color)
      DEFAULT: '#1e3a5f',
    },
    blue: {
      royal: '#2563eb',      // Medium royal blue
      sky: '#60a5fa',        // Light sky blue
      DEFAULT: '#2563eb',
    },
    cream: {
      pale: '#fef3c7',       // Pale yellow/light cream
      light: '#fef9e7',      // Very light beige/off-white
      DEFAULT: '#fef3c7',
    },
    // Additional colors for UI
    white: '#ffffff',
    black: '#000000',
  },
  fonts: {
    serif: ['Playfair Display', 'serif'],
    sans: ['Inter', 'Roboto', 'Open Sans', 'Arial', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
  }
}

// Export color values for Tailwind
export const tailwindColors = {
  'navy-dark': theme.colors.navy.dark,
  'blue-royal': theme.colors.blue.royal,
  'blue-sky': theme.colors.blue.sky,
  'cream-pale': theme.colors.cream.pale,
  'cream-light': theme.colors.cream.light,
}
