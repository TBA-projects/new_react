import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useLocation } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';

import SideMenu from '../SideMenu';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    list: {
        width: 250,
    },
}));

const TopBar = (props) => {
    const classes = useStyles();
    const [data] = props.routes;
    const [name, setName] = useState(null);
    const [open, setOpen] = useState(false);

    let location = useLocation();

    useEffect(() => {
        const getName = () => {
            return data.map((item, key) => {
                if (item.path === location.pathname) {
                    return setName(item.name);
                } else {
                    return null;
                }
            })
        };
        getName();
    });

    const toggleDrawer = (some) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setOpen(some);
    };

    const sideMenu = (
        <div
          className={classes.list}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
        <SideMenu />
        </div>
      );

    return (
        <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton onClick={toggleDrawer(true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {sideMenu}
            </Drawer>
            <Typography variant="h6" className={classes.title}>
              {name}
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
};

export default TopBar;