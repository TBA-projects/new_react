import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';

const NameCreator = (props) => {
    const [creatorName, setCreatorName] = useState(null);
    
    useEffect(() => {
        const getCreatorName = axios.get(`https://esi.evetech.net/latest/characters/${props.creatorId}/?datasource=tranquility`);
        const  getName = async () => {
            
            await axios.all([getCreatorName])
                .then(axios.spread((...responses) => {
                    setCreatorName(responses[0].data.name);
                    
            }))
        };
        getName();
    });

    return (
        <>
            {creatorName === null ? <Button size="small" color="primary">Loading ...</Button> : <Button size="small" color="primary">{creatorName}</Button>}
        </>
    );
};

export default NameCreator;