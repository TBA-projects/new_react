import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CountresIndex = () => {
    const [state, setState] = useState(null);
    
    useEffect(() => {  
        setState('хуяк');
        console.log(document);
        console.log(window);
        window.prompt("ХУЯК??");
        window.toolbar = false;
        window.locationbar = false;
    }, []);

    return (
        <div>{state}</div>
    );
};

export default CountresIndex;