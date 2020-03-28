import React from 'react'
import { Container, Typography } from '@material-ui/core';

// components
import AboutAxios from '../../components/AboutAxios';

const About = (props) => {
    return (
        <>
            <Container maxWidth="xl">
                <AboutAxios />
            </Container>
        </>
    );
};

export default About;