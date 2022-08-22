import { createTheme } from '@mui/material'

export const theme = createTheme({
    palette: {
      primary: {
        main: '#112743',
        light: '#e8f1ff',
      },
      secondary: {
        dark: '#BDFAE6',
        main: '#D9FBF3',
        light: 'rgba(242, 255, 251, 0.98)',
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1080,
        xl: 1920,
      },
    },
  });