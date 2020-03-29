import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import axios from 'axios';

//components
import ButtonAxios from './ButtonAxios';
import Pagination from './Pagination';

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
    //const [loading, setLoading] = useState(false);
    const [curentPage, setCurentPage] = useState(1);
    const [itemPerPAge] = useState(150);

    useEffect(() => {  
        const getIds = async () => {
            //setLoading(true);
            const res = await axios.get('https://esi.evetech.net/latest/alliances/?datasource=tranquility')
            setData(res.data);
            //setLoading(false);
        };
        getIds();
    }, []);
    
    // get curent Ids

    const indexOfLastId = curentPage * itemPerPAge;
    const indexOfFirstId = indexOfLastId - itemPerPAge;
    const curentIds = data.slice(indexOfFirstId, indexOfLastId);

    // Change page
    const paginate = (pageNumber) => setCurentPage(pageNumber);
    console.log(curentIds);
    //if (loading) {
    //    return (
    //        <div>Loading ...</div>
    //    );
    //};

    return (
        <div className={classes.root}>
            {/*curentIds.map((item, key) => <li key={key} props={item}>{item}</li>)*/}
            {curentIds.map((item, key) => <ButtonAxios key={key} props={item}></ButtonAxios>)}
            <Pagination idPerPage={itemPerPAge} totalIds={data.length} paginate={paginate} />
        </div>
    );

};

export default AboutAxios;