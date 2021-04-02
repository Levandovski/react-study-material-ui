import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import MenuIcon from '@material-ui/icons/Menu';
import {Container} from './Style';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 0,
      backgroundColor: theme.palette.background.paper,    
      left: -500,
      transitionDuration:'1s',    
    },
    root1: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,     
      left: 0,   
      transitionDuration:'0.4s',  
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    
  }));
  
export const Menu = () => {
   
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const [status, setStatus] = useState('style1');

  const mostrarMenu = () => {
      
     if(status==='style1'){
        setStatus('style2');
      }else{
        setStatus('style1');
      }
  }

  return (
    <>
   {status}
    <Container>
      <button onClick={mostrarMenu}>
        clickar
      </button>       
    </Container>
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
      className={status==='style1' ? classes.root : classes.root1}
    >
      <ListItem button>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Sent mail" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItem>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItem>
        </List>
      </Collapse>
    </List>
    </>
    );
}