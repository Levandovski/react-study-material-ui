import React from 'react';
import {ThemeProvider, createMuiTheme} from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom'; 
import  {Router} from './router/Router';


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
    </ThemeProvider>
   
  );
}

export default App;
