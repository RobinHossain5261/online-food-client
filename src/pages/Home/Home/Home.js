import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Known from '../Known/Known';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Known></Known>
        </div>
    );
};

export default Home;