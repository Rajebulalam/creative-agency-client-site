import React from 'react';
import web from '../../images/web.png';
import graphic from '../../images/graphic.png';
import develpment from '../../images/develpment.png';

const Service = () => {
    return (
        <section className='pt-4 pb-16 px-4 sm:px-10 w-full sm:w-11/12'>
            <h2 className='text-2xl font-bold text-center text-black py-3 pb-10'>Provide awesome <span className='text-neutral'>services</span></h2>
            <div className='w-full sm:w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <div class="card lg:max-w-lg bg-base-100 hover:shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={web} alt="Shoes" class="rounded-ful w-[74px]" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title pb-4">Web & Mobile design</h2>
                        <p className='pb-6'>We craft stunning and amazing web UI, using a well drafted UX to fit your product.</p>
                    </div>
                </div>
                <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={graphic} alt="Shoes" class="rounded-ful w-[74px]" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title pb-4">Web & Mobile design</h2>
                        <p className='pb-6'>Amazing flyers, social media posts and brand representations that would make your brand stand out.</p>
                    </div>
                </div>
                <div class="card lg:max-w-lg bg-base-100 hover:shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={develpment} alt="Shoes" class="rounded-ful w-[74px]" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title pb-4">.Web & Mobile design</h2>
                        <p className='pb-6'>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;