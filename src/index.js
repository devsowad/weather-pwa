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
      main: purple[500],
    },
    secondary: {
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
