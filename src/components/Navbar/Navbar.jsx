import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import Container from '../Container';
import logo from '../../assets/logo.png'
import { AuthContext } from '../../contexts/AuthContext';

const Navbar = () => {

    const { user, signOutUser } = use(AuthContext)

    const defaultLinkClass = 'font-semibold text-base text-[#2F4464] text-[#2F4464] rounded-full'

    const activeLinkClass = 'font-bold text-base text-white bg-blue-400 gradient-underline';

    const links = <>
        <li><NavLink to="/" className={({ isActive }) => `${defaultLinkClass} ${isActive ? activeLinkClass : ''}`}>Home</NavLink></li>
        <li><NavLink to="/all-artworks" className={({ isActive }) => `${defaultLinkClass} ${isActive ? activeLinkClass : ''}`}>Explore Artworks</NavLink></li>
        <li><NavLink to="/add-artwork" className={({ isActive }) => `${defaultLinkClass} ${isActive ? activeLinkClass : ''}`}>Add Artwork</NavLink></li>
        {
            user && ( <>
                <li><NavLink to="/my-gallery" className={({ isActive }) => `${defaultLinkClass} ${isActive ? activeLinkClass : ''}`}>My Gallery</NavLink></li>
                <li><NavLink to="/favorites" className={({ isActive }) => `${defaultLinkClass} ${isActive ? activeLinkClass : ''}`}>Favorites</NavLink></li>
                </>
            )
        }
    </>

    const handleLogOut = () => {
        // console.log("user trying to LogOut");
        signOutUser()
            .then(() => {
                // alert("You Logged Out successfully");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="bg-[#DDC5A9] shadow-sm font-varela relative z-50">
            <Container>
                <div className='navbar'>
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-sm z-[50] mt-2 w-52 p-2 shadow">
                                {links}
                            </ul>
                        </div>
                        <Link to="/" className="font-[Jost] text-2xl lg:text-4xl font-titillium font-bold text-[#2F4464] flex items-center">
                            <img src={logo} className='w-14 md:w-20' alt="GameHub Logo" />
                            <span className='hidden sm:inline-block'>ARTIFY</span>
                        </Link>
                    </div>
                    <div className="navbar-center">
                        <ul className="hidden lg:flex menu menu-horizontal px-1">
                            {links}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div>
                            {
                                user ? (
                                    <div className="login-btn flex gap-3 lg:gap-5 items-center">
                                            <img
                                                className='w-8 h-8 lg:w-10 lg:h-10 rounded-full object-cover ring-2 ring-[#2F4464] ring-offset-2'
                                                src={user.photoURL}
                                                alt="User Profile"
                                            />
                                        <button onClick={handleLogOut} className="btn bg-[#2F4464] text-white px-6 lg:px-10">Log Out</button>
                                    </div>
                                ) : (
                                    <div className='flex justify-center items-center gap-2 lg:gap-3 ml-3'>
                                        <Link to="/login" className='btn bg-[#2F4464] text-white w-20 lg:w-24 h-10'>Login</Link>
                                        <Link to="/register" className='btn bg-[#2F4464] text-white w-20 lg:w-24 h-10'>Register</Link>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Navbar;