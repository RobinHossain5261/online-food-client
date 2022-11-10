import React from 'react';
import useTitle from '../../../hook/useTitle';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Item from '../Iteam/Item';
import Known from '../Known/Known';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <Item></Item>
            <About></About>
            <Known></Known>
        </div>
    );
};

export default Home;