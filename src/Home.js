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
import VideoCall from "@material-ui/icons/VideoCall";
import Apps from "@material-ui/icons/Apps";
import MoreVert from "@material-ui/icons/MoreVert";

const useStyles= makeStyles((theme) => ({
    root:{      
        height:'100vh',
    },
    appBar:{
        boxShadow:'none',   
    },
    menuIcon:{
        paddingRight:theme.spacing(5),
        paddingLeft:theme.spacing(6),
    },
    logo:{
        height:'25px',
    },
    icons:{
        paddingRight:theme.spacing(2),
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
        <IconButton  
                className={classes.menuIcon} 
                color="inherit" aria-label="menu">
        <MenuIcon />
        </IconButton>
        <img src="/images/preto.png" alt="logo" className={classes.logo}/>
        <div className={classes.grow} />
        <IconButton 
                className={classes.icons} 
                color="inherit">
        <VideoCall />
        </IconButton>
            <IconButton 
                className={classes.icons} 
                color="inherit">
        <Apps />
        </IconButton>
            <IconButton 
                className={classes.icons} 
                color="inherit">
        <MoreVert />
        </IconButton>
        <Button startIcon={<AccountCircle />} variant="outlined" color="primary">Fazer Login</Button>

        </Toolbar>
        </AppBar>
    </div>;
}

export default Home;