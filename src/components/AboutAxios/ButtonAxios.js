import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

//components

import NameCreator from './NameCreator';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 280,
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    media: {           // this is the`className` passed to `CardMedia` later
        height: 100,     // as an example I am modifying width and height
        width: '33%',
        marginLeft: '33%'
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
    const [aliName, setAliName] =useState(null);
    const [infoAli, setInfoAli] = useState(null);
    const [creatorId, setCreatorId] = useState(null);

    useEffect(() => {
        const getImages = axios.get(`https://esi.evetech.net/latest/alliances/${props.props}/icons/?datasource=tranquility`);
        const getAlliInfo = axios.get(`https://esi.evetech.net/latest/alliances/${props.props}/?datasource=tranquility`);

        const getInfo = async () => {
            await axios.all([getImages, getAlliInfo])
                .then(axios.spread((...responses) => {
                    setImagePath(responses[0].data.px128x128);
                    setAliName(responses[1].data.name);
                    setInfoAli(responses[1].data);
                    setCreatorId(responses[1].data.creator_id);
              }))
        };
        getInfo();
        //const getImagePath = () => {
        //    axios.get(`https://esi.evetech.net/latest/alliances/${props.props}/icons/?datasource=tranquility`)
        //   .then((response) => {
        //        // handle success
        //        setImagePath(response.data.px64x64);
        //    })
        //    .catch((error) => {
        //        // handle error
        //        console.log(error);
        //    })
        //};
        //getImagePath();
    });



    return (
        <>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia className={classes.media}
                    component="img"
                    alt="Contemplative Reptile"
                    height="160"
                    image={imagePath}
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h4">
                        {aliName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {JSON.stringify(infoAli)}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Creator:
                    </Button>
                    {creatorId === null ? <Button size="small" color="primary">Lading ...</Button> : <NameCreator creatorId={creatorId} />}
                </CardActions>
            </Card>
        
        </>

    );
};

export default ButtonAxios;