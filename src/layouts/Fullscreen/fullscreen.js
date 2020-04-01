import React from 'react';

const Fullscreen = (props) => {
    const tagName = props.component;

    const higherOrderComponent = (WrappedComponent) => {
        return <WrappedComponent {...props}/>;
    }; 

    return (
        <>
            {higherOrderComponent(tagName)}
        </>
    );
};

export default Fullscreen;