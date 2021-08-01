import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  createTheme,
  CssBaseline,
  responsiveFontSizes,
  ThemeProvider,
} from '@material-ui/core';
import { purple } from '@material-ui/core/colors';

const theme = createTheme({
  typography: {
    fontFamily: ['Poppins'].join(','),
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': ['Poppins'],
      },
    },
  },
  palette: {
    type: 'dark',
    primary: {
      // Purple and green play nicely together.
      main: purple[500],
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={responsiveFontSizes(theme)}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
