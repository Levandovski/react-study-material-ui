import React from 'react';
import {ThemeProvider, createMuiTheme} from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom'; 
import  {Router} from './router/Router';
import { Layout } from './components/Layout';

function App() {
  const theme = createMuiTheme({
    palette:{
      primary:{
        main:'#065fd4'
      }
    }
  });
 
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
      {/* <Layout /> */}

    </ThemeProvider>
   
  );
}

export default App;
