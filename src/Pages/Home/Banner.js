import React from 'react';
import bannerImage from '../../images/Frame.png';

const Banner = () => {
    return (
        <section className='w-full sm:w-11/12 mx-auto px-4 py-8 sm:px-10'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                <div className='flex items-center py-6'>
                    <div>
                        <h2 className='text-4xl font-bold text-accent py-5'>Let's Grow Your Brand To The Next Level</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iste, quaerat repudiandae labore ducimus commodi modi nobis maxime, dolor minus quisquam at. Architecto quasi consequuntur repudiandae odit numquam! Quaerat, deserunt!</p>
                        <button className='btn btn-accent px-10 py-2 my-6 text-white font-bold hover:bg-white hover:text-black' type="submit">Hire Us</button>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <img className='w-5/6' src={bannerImage} alt="bannerImage" />
                </div>
            </div>
        </section>
    );
};

export default Banner;