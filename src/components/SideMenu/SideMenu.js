import React from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { MoveToInbox, Home } from '@material-ui/icons';
import {Link} from 'react-router-dom';

import routes from '../../routes';

const SideMenu = () => {
    return (
        <>
            <Divider />
            <List>
            {routes.map((item, key) => (
                <ListItem button component={Link} to={item.path} key={key}>
                <ListItemIcon>{item.name === 'Home' ? <Home /> : <MoveToInbox />}</ListItemIcon>
                <ListItemText primary={item.name} />
                </ListItem>
            ))}
            </List>
        </>
    );
};

export default SideMenu;