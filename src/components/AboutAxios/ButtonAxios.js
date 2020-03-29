import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
}));

const ButtonAxios = (props) => {
    const classes = useStyles();

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
        <>
            <img src={imagePath} className={classes.large}>
            </img>
        </>

    );
};

export default ButtonAxios;