import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

const Header = () => {

    // Dynamic Navbar
    const menu = <>
        <li className='hover:bg-accent hover:rounded-full hover:font-bold px-2' ><Link className='text-accent text-md uppercase bg-transparent hover:text-white' to='/'>Home</Link></li>
        <li className='hover:bg-accent hover:rounded-full hover:font-bold px-2' ><Link className='text-accent text-md uppercase bg-transparent hover:text-white' to='/'>Our Portfolio</Link></li>
        <li className='hover:bg-accent hover:rounded-full hover:font-bold px-2' ><Link className='text-accent text-md uppercase bg-transparent hover:text-white' to='/'>Our Team</Link></li>
        <li className='hover:bg-accent hover:rounded-full hover:font-bold px-2' ><Link className='text-accent text-md uppercase bg-transparent hover:text-white' to='/'>Contact Us</Link></li>
        <div className='mx-2 mt-3 sm:mt-0'>
            <button className='btn btn-accent px-8 text-white font-bold hover:bg-white hover:text-black' type="submit">Login</button>
        </div>
    </>;

    return (
        <header>
            <div class="navbar bg-transparent w-full px-4 sm:px-10px sm:w-11/12 mx-auto py-4">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 py-4 w-52">
                            {menu}
                        </ul>
                    </div>
                    <Link to='/' class="normal-case text-xl"><img className='w-[150px] h-[47px]' src={logo} alt="logo" /></Link>
                </div>
                <div class="navbar-end hidden w-11/12 lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        {menu}
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;