import React from 'react'
import { Container, Typography } from '@material-ui/core';

const Dashboard = (props) => {
    return (
        <>
            <Container maxWidth="xl">
                <Typography variant="h1" component="h2">
                    Dashboard
                </Typography>
            </Container>
        </>
    );
};

export default Dashboard;