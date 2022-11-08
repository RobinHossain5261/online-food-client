import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Item from '../Iteam/Item';
import Known from '../Known/Known';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Item></Item>
            <Known></Known>
        </div>
    );
};

export default Home;