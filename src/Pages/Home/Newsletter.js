import React from 'react';
import Footer from '../Shared/Footer';

const Newsletter = () => {
    return (
        <section className='py-12 px-4 sm:px-10 bg-primary'>
            <div className=' w-full sm:w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6'>
                <div>
                    <h2 className='text-3xl font-bold pb-6'>Let us handle your project, professionally.</h2>
                    <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                </div>
                <div>
                    <input type="email" name="email" id="email" placeholder='Your Email Address' className='p-2 w-full bg-white rounded mb-3' />
                    <input type="text" name="name" id="name" placeholder='Your Name/ Company Name' className='p-2 w-full bg-white rounded mb-3' />
                    <textarea className='w-full rounded p-2 mb-3' name="message" id="message" cols="30" rows="10" placeholder='Message'></textarea>
                    <div className='flex items-center justify-center'>
                        <button className='btn bg-accent px-8 text-white font-bold' type="submit">Submit</button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </section>
    );
};

export default Newsletter;