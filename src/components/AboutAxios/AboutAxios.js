import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios';

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
                if (response.data) {
                    setData(response.data);
                }
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
            <div>AboutAxios</div>
            {data.map((item, key) => <Button variant="outlined" color="secondary" key={key}>{item}</Button>)}
        </div>
    );
};

export default AboutAxios;