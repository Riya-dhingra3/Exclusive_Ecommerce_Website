import React from 'react';
import { Link } from 'react-router-dom';
import QrCode from '../assets/QrCode.png';
import GooglePlay from '../assets/GooglePlay.jpg';
import AppStore from '../assets/AppStore.jpg';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white pt-16 pb-4 mt-[4%] bottom-0 max-h-screen">
            <div className="container lg:max-w-[85%] mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
                {/* Exclusive Section */}
                <div className="space-y-5">
                    <h2 className="text-[24px] leading-[24px] font-semibold">Exclusive</h2>
                    <div className="space-y-4">
                        <h4 className="text-lg leading-5 font-medium">Subscribe</h4>
                        <p className="text-sm leading-5 font-light"> Get 10% off your first order</p>
                        <div className="flex border border-white w-[100%]">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-transparent rounded-l px-4 py-2 w-full"
                            />
                            <button className="rounded-r pr-2 ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-4 h-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Support Section */}
                <div className="space-y-4">
                    <h2 className="text-[22px] leading-[24px] font-semibold">Support</h2>
                    <div className="space-y-4">
                        <div>
                            <p className='text-[15px] leading-[24px] font-light'>111 Bijoy sarani, Dhaka,</p>
                            <p className='text-[15px] leading-[24px] font-light'>DH 1515, Bangladesh.</p>
                        </div>

                        <p className='text-[15px] leading-[24px] font-light'>exclusive@gmail.com</p>
                        <p className='text-[15px] leading-[24px] font-light'>+88015-88888-9999</p>

                    </div>
                </div>

                {/* Account Section */}
                <div className="space-y-4">
                    <h2 className="text-[22px] leading-[24px] font-semibold">Account</h2>
                    <ul className="space-y-2">
                        <li><Link to="/account">My Account</Link></li>
                        <li><Link to="/login">Login / Register</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                        <li><Link to="/wishlist">Wishlist</Link></li>
                        <li><Link to="/shop">Shop</Link></li>
                    </ul>
                </div>

                {/* Quick Link Section */}
                <div className="space-y-4">
                    <h2 className="text-[22px] leading-[24px] font-semibold">Quick Link</h2>
                    <ul className="space-y-2">
                        <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                        <li><Link to="/terms">Terms Of Use</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                {/* Download App Section */}
                <div className="space-y-4">
                    <h2 className="text-[22px] leading-[24px] font-semibold">Download App</h2>
                    <p className="text-gray-400">Save $3 with App New User Only</p>
                    <div className="flex space-x-4">
                        <div className="w-24 h-24">
                            {/* QR Code placeholder */}
                            <div className="bg-white">
                                <img src={QrCode} alt="QR Code" className="w-full" />
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div className="space-y-2">
                                <img src={GooglePlay} alt="Google Play" className="h-10 w-full object-contain" />
                            </div>
                            <div className="space-y-2">
                                <img src={AppStore} alt="App Store" className="h-10 w-full object-contain" />
                            </div>
                        </div>
                    </div>
                    <div className="flex space-x-10 mt-4">
                        {/* Facebook */}
                        <a href="#" className="hover:text-gray-400">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
                            </svg>
                        </a>
                        {/* Twitter */}
                        <a href="#" className="hover:text-gray-400">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>
                        {/* Instagram */}
                        <a href="#" className="hover:text-gray-400">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                            </svg>
                        </a>
                        {/* LinkedIn */}
                        <a href="#" className="hover:text-gray-400">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-4 pt-4">
                <p className="text-center text-gray-700">© Copyright Rimel 2022. All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer; 