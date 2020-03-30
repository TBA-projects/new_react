import React from 'react';
import { Container } from '@material-ui/core';
// components
import AboutAxios from '../../components/AboutAxios';

const Eveonline = () => {
    return (
        <>
            <Container maxWidth="xl">
                <AboutAxios />
            </Container>
        </>
    );
};

export default Eveonline;