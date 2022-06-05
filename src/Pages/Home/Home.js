import React from 'react';
import Header from '../Shared/Header';
import Banner from './Banner';
import Certified from './Certified';
import Feedback from './Feedback';
import Newsletter from './Newsletter';
import Service from './Service';
import Works from './Works';

const Home = () => {
    return (
        <section>
            <div style={{ clipPath: 'polygon(0 0, 100% 0%, 100% 87%, 0% 100%)' }} className='bg-primary py-2'>
                <Header></Header>
                <Banner></Banner>
            </div>
            <Certified></Certified>
            <Service></Service>
            <Works></Works>
            <Feedback></Feedback>
            <Newsletter></Newsletter>
        </section>
    );
};

export default Home;