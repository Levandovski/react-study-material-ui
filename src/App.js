import React from 'react';
import {ThemeProvider, createMuiTheme} from '@material-ui/core';
import Home from './Home';


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
      <Home />
    </ThemeProvider>
   
  );
}

export default App;
