import React from 'react';
import airbnb from '../../images/airbnb.png';
import google from '../../images/google.png';
import netflix from '../../images/netflix.png';
import slack from '../../images/slack.png';
import uber from '../../images/uber.png';

const Certified = () => {
    return (
        <section className='py-14 w-full sm:w-11/12 px-4 sm:px-10 mx-auto flex items-center justify-center'>
            <img className='mx-2 sm:mx-10 w-[60px] sm:w-[80px]' src={airbnb} alt="certifiedLogo" />
            <img className='mx-2 sm:mx-10 w-[60px] sm:w-[80px]' src={google} alt="certifiedLogo" />
            <img className='mx-2 sm:mx-10 w-[60px] sm:w-[80px]' src={netflix} alt="certifiedLogo" />
            <img className='mx-2 sm:mx-10 w-[60px] sm:w-[80px]' src={slack} alt="certifiedLogo" />
            <img className='mx-2 hidden sm:block sm:mx-10 w-[50px] sm:w-[80px]' src={uber} alt="certifiedLogo" />
        </section>
    );
};

export default Certified;