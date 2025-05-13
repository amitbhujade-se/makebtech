import React from 'react';

const Footer = () => {
    return (
        <footer className=" w-full bottom-0 bg-black text-white py-8 mt-auto" >
            <div className="container mx-auto px-4">
                {/* Main Footer Content */}
                <div className="flex flex-wrap justify-center">
                    {/* Sitemap Section */}
                    <div className="w-11/12 md:w-2/12 mb-6">
                        <h5 className="text-lg font-medium mb-4 text-green-500">Sitemap</h5>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="/" className="hover:text-green-500">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/profile" className="hover:text-green-500">
                                    Corporate Profile
                                </a>
                            </li>
                            <li>
                                <a href="our-team" className="hover:text-green-500">
                                    Our Team
                                </a>
                            </li>
                            <li>
                                <a href="/vision&mission" className="hover:text-green-500">
                                    Vision & Mission
                                </a>
                            </li>
                            <li>
                                <a href="/register" className="hover:text-green-500">
                                    Post Resume
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="hover:text-green-500">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="/privacy" className="hover:text-green-500">
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Services Section */}
                    <div className="w-11/12 md:w-3/12 mb-6">
                        <h5 className="text-lg font-medium mb-4 text-green-500">Services</h5>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="/training&development" className="hover:text-green-500">
                                    Training & Development
                                </a>
                            </li>
                            <li>
                                <a href="/corporate-training" className="hover:text-green-500">
                                    Corporate Training
                                </a>
                            </li>
                            <li>
                                <a href="/walk-in" className="hover:text-green-500">
                                    Walking Interviews
                                </a>
                            </li>
                            <li>
                                <a href="/recruitment-process" className="hover:text-green-500">
                                    Recruitment Process
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Head Office Section */}
                    <div className="w-11/12 md:w-3/12 mb-6">
                        <h5 className="text-lg font-medium mb-4 text-green-500">
                            <i className="fas fa-map-marker-alt mr-2"></i>
                        </h5>
                        <p className="leading-tight text-sm mb-4">
                            <span className="text-white">Makeb Technologies</span><br />
                            <br />
                            <span className="text-white">Head Office</span><br />
                            <span className="text-white">Maharashtra - Pune</span><br />
                            Off. No.519, 5th floor, Aurora Tower,<br />
                            MG Road, Camp - 411001.
                        </p>
                        {/* Social Media Icons */}
                        <div className="flex space-x-4 mb-4">
                            <a href="#" className="text-white hover:text-green-500">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="text-white hover:text-green-500">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-white hover:text-green-500">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="#" className="text-white hover:text-green-500">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="#" className="text-white hover:text-green-500">
                                <i className="fab fa-google-plus"></i>
                            </a>
                        </div>
                        {/* Contact Info */}
                        <div className="space-y-2 text-sm">
                            <div className="text-green-500">
                                <i className="fas fa-tty mr-2"></i>
                                <a href="tel:020-40078926" className="hover:text-white">020-40078926</a>
                            </div>
                            <div className="text-green-500">
                                <i className="fab fa-whatsapp mr-2"></i>
                                <a href="tel:9987121730" className="hover:text-white">9987121730</a>
                            </div>
                            <div className="text-green-500">
                                <i className="fas fa-envelope mr-2"></i>
                                <a href="mailto:hr@makebtech.com" className="hover:text-white">hr@makebtech.com</a>
                            </div>
                        </div>
                    </div>

                    {/* Sub Branch Section */}
                    <div className="w-11/12 md:w-3/12 mb-6">
                        <h5 className="text-lg font-medium mb-4 text-green-500">
                            <i className="fas fa-map-marker-alt mr-2"></i>
                        </h5>
                        <p className="leading-tight text-sm">
                            <span className="text-white">Makeb Technologies</span><br />
                            <br />
                            <span className="text-white">Sub Branch</span><br />
                            <span className="text-white">Madhya Pradesh - Indore</span><br />
                            Office No 203, 2nd Floor / Plot No 57,<br />
                            Sch.no. 53 Near Medanta Hospital - 452010.
                        </p>
                    </div>

                    {/* Copyright Section */}
                    <div className="w-full mt-8 pt-4 border-t border-gray-600 text-center text-sm">
                        <p>
                            Copyright © 2021 All Rights Reserved | Designed and Developed by{' '}
                            <a href="https://www.xentricx.com/" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-white">
                                Xentricx Technologies Pvt. Ltd.
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;