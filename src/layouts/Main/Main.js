//HOC component

import React from 'react';
import AppBar from '../../components/AppBar'
import routes from '../../routes';

const Main = (props) => {

    const tagName = props.component;

    const higherOrderComponent = (WrappedComponent) => {
        return <WrappedComponent {...props}/>;
    }; 
    
    return (
        <>  
            <AppBar routes={[routes]}/>
            <>
                {higherOrderComponent(tagName)}
            </>
        </>
    );
};

export default Main;