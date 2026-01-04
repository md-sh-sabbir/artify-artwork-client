import React from 'react';
import logo from '../assets/logo.png'
import { FaSquareXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router';
import Container from './Container';

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-base-200 text-base-content py-10 px-16">
            <Container>
                <div className='footer sm:footer-horizontal'>
                    <aside>
                        <img src={logo} alt="" className='w-20' />
                        <p>
                            ARTIFY
                            <br />
                            Providing reliable art since 1992
                        </p>
                    </aside>
                    <nav>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <Link to='/about-us' className="link link-hover">About us</Link>
                        <Link to='/contact' className="link link-hover">Contact</Link>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <Link to='/terms-of-use' className="link link-hover">Terms of use</Link>
                        <Link to='/privacy-policy' className="link link-hover">Privacy policy</Link>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>

                    <div>
                        <h6 className="footer-title">Social</h6>
                        <div className="grid grid-flow-col gap-4">
                            <a>
                                <FaSquareXTwitter size={26} />
                            </a>
                            <a>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="fill-current">
                                    <path
                                        d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                                </svg>
                            </a>
                            <a>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="fill-current">
                                    <path
                                        d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;