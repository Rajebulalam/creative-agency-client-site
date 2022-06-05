import React from 'react';
import Header from '../Shared/Header';
import Banner from './Banner';

const Home = () => {
    return (
        <section>
            <div style={{ clipPath: 'polygon(0 0, 100% 0%, 100% 87%, 0% 100%)' }} className='bg-primary py-2'>
                <Header></Header>
                <Banner></Banner>
            </div>
        </section>
    );
};

export default Home;