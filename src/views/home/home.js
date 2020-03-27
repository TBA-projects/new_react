import React from 'react'

const Home = (props) => {
    console.log(props.location.pathname);
    return (
        <h2>Home</h2>
    );
};

export default Home;