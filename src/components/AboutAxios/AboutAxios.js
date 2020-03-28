import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

//components
import ButtonAxios from './ButtonAxios';

const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
}));

const AboutAxios = () => {
    const classes = useStyles();

    const [data, setData] = useState([]);

    useEffect(() => {
        const getIds = () => {
            axios.get('https://esi.evetech.net/latest/alliances/?datasource=tranquility')
            .then((response) => {
                // handle success
                setData(response.data);
            })
            .catch((error) => {
                // handle error
                console.log(error);
            })
        };
        getIds();
    });

    return (
        <div className={classes.root}>
            {data.map((item, key) => <ButtonAxios key={key} props={item}></ButtonAxios>)}
        </div>
    );
};

export default AboutAxios;