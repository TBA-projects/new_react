import React from 'react';
import SideMenu from '../../components/SideMenu';
import AppBar from '../../components/AppBar';

import routes from '../../routes.js';

const Main = () => {
    return (
        <>
            <AppBar />
            <SideMenu />
            <hr/>
            <div>Content</div>
        </>
    );
};

export default Main;