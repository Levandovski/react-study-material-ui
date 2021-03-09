import React from 'react';
import { 
    makeStyles, 
    AppBar, 
    Toolbar, 
    Button,
    IconButton, 
    Typography
 } from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
const useStyles= makeStyles((theme) => ({
    root:{      
        height:'100vh',
    },
    appBar:{
        boxShadow:'none',   
    },
    grow:{
        flexGrow:1,
    }
}));

function Home(){
    
    const classes = useStyles();

    return <div className={classes.root}>
        <AppBar position="fixed" color="inherit" className={classes.appBar}>
        <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        <MenuIcon />
        </IconButton>
        <div className={classes.grow} />
        <Button    startIcon={<AccountCircle />} variant="outlined" color="primary">Fazer Login</Button>
        </Toolbar>
        </AppBar>
    </div>;
}

export default Home;