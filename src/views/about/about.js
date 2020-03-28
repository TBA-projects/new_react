import React from 'react'
import { Container, Typography } from '@material-ui/core';

// components
import AboutAxios from '../../components/AboutAxios';

const About = (props) => {
    return (
        <>
            <Container maxWidth="xl">
                <Typography variant="h1" component="h2">
                    About
                </Typography>
                <AboutAxios />
            </Container>
        </>
    );
};

export default About;