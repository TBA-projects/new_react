import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ButtonAxios = (props) => {
    
    const [imagePath, setImagePath] = useState(null);

    useEffect(() => {
        const getImagePath = () => {
            axios.get(`https://esi.evetech.net/latest/alliances/${props.props}/icons/?datasource=tranquility`)
            .then((response) => {
                // handle success
                setImagePath(response.data.px64x64);
            })
            .catch((error) => {
                // handle error
                console.log(error);
            })
        };
        getImagePath();
    });

    return (
        <img src={imagePath}></img>
    );
};

export default ButtonAxios;