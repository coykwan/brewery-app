import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#EDE1D4',
    },
    secondary: {
      main: '#DF8D03',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#F3C144',
      paper: '#EDE1D4'
    }
  },
});

export default theme; 