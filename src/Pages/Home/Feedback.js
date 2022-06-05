import React from 'react';
import person from '../../images/person.png';
import person2 from '../../images/person2.png';
import person3 from '../../images/person3.png';

const Feedback = () => {
    return (
        <section className='py-12 px-4 sm:px-10 w-full sm:w-11/12 mx-auto'>
            <h2 className='text-2xl font-bold text-accent text-center pb-10'>Clients <span className='text-neutral'>Feedback</span></h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                <div className='p-4 rounded-md border'>
                    <div className='flex items-center'>
                        <div className='pr-4'>
                            <img className='w-[100px]' src={person} alt="person" />
                        </div>
                        <div>
                            <h3 className='font-bold text-accent'>Nash Patrik</h3>
                            <small>CEO, Monpal</small>
                        </div>
                    </div>
                    <p className='py-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente ea repellendus doloremque quo saepe at fugiat deleniti accusamus. Asperiores recusandae cupiditate at, debitis quis ad.</p>
                </div>
                <div className='p-4 rounded-md border'>
                    <div className='flex items-center pr-4'>
                        <div className=' pr-4'>
                            <img className='w-[100px]' src={person2} alt="person" />
                        </div>
                        <div>
                            <h3 className='font-bold text-accent'>Miriam Barron</h3>
                            <small>CEO, Monpal</small>
                        </div>
                    </div>
                    <p className='py-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente ea repellendus doloremque quo saepe at fugiat deleniti accusamus. Asperiores recusandae cupiditate at, debitis quis ad.</p>
                </div>
                <div className='p-4 rounded-md border'>
                    <div className='flex items-center'>
                        <div className=' pr-4'>
                            <img className='w-[100px]' src={person3} alt="person" />
                        </div>
                        <div>
                            <h3 className='font-bold text-accent'>Bria Malone</h3>
                            <small>CEO, Monpal</small>
                        </div>
                    </div>
                    <p className='py-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente ea repellendus doloremque quo saepe at fugiat deleniti accusamus. Asperiores recusandae cupiditate at, debitis quis ad.</p>
                </div>
            </div>
        </section>
    );
};

export default Feedback;