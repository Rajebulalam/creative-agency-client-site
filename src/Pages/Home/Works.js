import React from 'react';
import work from '../../images/work.png';
import work2 from '../../images/works2.png';
import work3 from '../../images/works3.png';

const Works = () => {
    return (
        <section className='py-12 px-4 sm:px-10 bg-accent'>
            <h2 className='text-2xl font-bold text-center text-white py-4'>Here are some of <span className='text-neutral'>our works</span></h2>
            <div className='w-full sm:w-11/12 mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 py-6'>
                <div>
                    <img src={work} alt="workImage" />
                </div>
                <div>
                    <img className='rounded-md' src={work2} alt="workImage" />
                </div>
                <div>
                    <img className='w-full h-[267px] rounded-md' src={work3} alt="workImage" />
                </div>
            </div>
        </section>
    );
};

export default Works;