'use client';
import { createTheme } from '@mui/material/styles';
import { Outfit, Roboto } from 'next/font/google';

// Importar fuentes
const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const outfit = Outfit({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

// 🎯 VARIABLES REUTILIZABLES
const primaryColor = '#2e1065';
const secondaryColor = '#388e3c';
const darkPurple = '#4a148c';
const highlightYellow = '#ffc107';
const placeholderColor = '#616161';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: primaryColor,
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: secondaryColor,
      dark: '#ba000d',
      contrastText: '#000',
    },
  },

  // Opcional: para compatibilidad con css variables (si estás usando experimental features de MUI v5+)
  colorSchemes: { light: true, dark: true },
  cssVariables: {
    colorSchemeSelector: 'class',
  },

  typography: {
    fontFamily: outfit.style.fontFamily,
    h1: {
      [`@media (min-width:300px)`]: {
        fontSize: '2.5rem',
      },
      [`@media (min-width:900px)`]: {
        fontSize: '4.5rem',
      },
      fontWeight: 900, // máximo reconocido por la fuente Outfit
      color: primaryColor,
      textAlign: 'center',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
      color: '#555',
      textAlign: 'center',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 500,
      color: '#555',
      textAlign: 'center',
    },
    h4: {
      fontSize: '2rem',
      fontWeight: 700,
      color: 'black',
      textAlign: 'center',
      '& span': {
        color: highlightYellow,
        fontWeight: 600,
      },
    },
  },

  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          borderColor: 'black',
          '::placeholder': {
            color: placeholderColor,
            fontStyle: 'bold',
            opacity: 1,
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          // este variants dentro de `root` no es soportado así directamente
          // debes usar `theme.components.MuiAlert.variants` si usas variantes
          // lo quitamos o lo corregimos abajo
        },
      },
      variants: [
        {
          props: { severity: 'info' },
          style: {
            backgroundColor: '#60a5fa',
          },
        },
      ],
    },
  },
});

export default theme;