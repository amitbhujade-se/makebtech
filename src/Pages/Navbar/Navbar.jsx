import React, { useState } from 'react';
import "./Navbar.css";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    const navItems = [
        { label: "HOME", href: "/" },
        {
            label: "ABOUT",
            children: [
                { label: "Corporate Profile", href: "/profile" },
                { label: "Our Team", href: "/our-team" },
                { label: "Vision & Mission", href: "/vision&mission" },
            ],
        },
        {
            label: "SERVICES",
            children: [
                { label: "Training & Development", href: "/training&development" },
                { label: "Corporate Training", href: "/corporate-training" },
                { label: "Walking Interviews", href: "/walk-in" },
                { label: "Recruitment Process", href: "recruitment-process" },
            ],
        },
        {
            label: "CANDIDATES",
            children: [
                { label: "Post Resume", href: "/register" },
            ],
        },
        { label: "CONTACT", href: "/contact" },
    ];

    return (
        <div className="site-navbar-wrap bg-white shadow-md">
            {/* Top Bar */}
            <div className="site-navbar-top flex justify-center">
                <div className="container py-2">
                    <div className="flex flex-wrap items-center">
                        <div className="w-full md:w-1/2 lg:w-2/12">
                            <a href="/" className="flex items-center">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOkT67YwNWuHwmjivoErPJBI7vVXmIi0p7cRq-haRNL_a2OPKXZEtG2-_omfBdtvheOw&usqp=CAU"
                                    alt="Logo"
                                    className="h-12"
                                />
                            </a>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-10/12 hidden md:flex justify-end">
                            <ul className="flex flex-wrap space-x-4 text-md">
                                <li className="flex items-center space-x-2">
                                    <i className="fas fa-tty text-black"></i>
                                    <a href="tel:020-40078926" className="text-gray-800 hover:text-green-500">020-40078926</a>
                                    <i className="fab fa-whatsapp text-black mx-2"></i>
                                    <a href="tel:9987121730" className="text-gray-800 hover:text-green-500">9987121730</a>
                                </li>
                                <li>
                                    <a href="mailto:info@makebtech.com" className="flex items-center space-x-2">
                                        <i className="fas fa-envelope text-gray-800"></i>
                                        <span className="text-gray-800 hover:text-green-500">info@makebtech.com</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:hr@makebtech.com" className="flex items-center space-x-2">
                                        <i className="fas fa-envelope text-gray-800"></i>
                                        <span className="text-gray-800 hover:text-green-500">hr@makebtech.com</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <div className="site-navbar shadow-lg flex justify-center" style={{ background: "#213653" }}>
                <div className="container">
                    <div className="flex flex-wrap items-center justify-between">
                        <div className="w-fit lg:w-8/12">
                            <nav className="site-navigation">
                                {/* Menu Icon for Mobile */}
                                <div className="lg:hidden py-3">
                                    <a href="#" className="site-menu-toggle text-white" onClick={toggleMobileMenu}>
                                        <i className="fas fa-bars text-2xl"></i>
                                    </a>
                                </div>
                                {/* Desktop Menu */}
                                <ul className="site-menu hidden lg:flex lg:items-center space-x-8">
                                    {navItems.map((item, index) => (
                                        <li key={index} className="relative group">
                                            {item.children ? (
                                                <>
                                                    <a
                                                        href="#"
                                                        className="text-white hover:text-green-500 flex items-center font-medium p-2"
                                                    >
                                                        {item.label} <i className="fas fa-chevron-down ml-1 text-md"></i>
                                                    </a>
                                                    {/* Dropdown with animation */}
                                                    <ul
                                                        className="dropdown absolute left-0 top-full bg-white shadow-lg w-48 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-in-out origin-top p-1"
                                                    >
                                                        {item.children.map((child, childIndex) => (
                                                            <li key={childIndex}>
                                                                <a
                                                                    href={child.href}
                                                                    className="block px-4 py-2 text-gray-800 hover:bg-[#213653] hover:text-white font-medium text-md"
                                                                >
                                                                    {child.label}
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </>
                                            ) : (
                                                <a
                                                    href={item.href}
                                                    className="text-white hover:text-green-500 font-medium text-md"
                                                >
                                                    {item.label}
                                                </a>
                                            )}
                                        </li>

                                    ))}
                                </ul>
                            </nav>
                        </div>
                        <div className="w-fit lg:w-4/12 flex justify-end">
                            <a
                                href="/register"
                                className="register-btn text-white px-6 py-2 rounded-none hover:bg-green-600 font-medium text-sm"
                            >
                                Register
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Sidebar Menu */}
            <div className={`mobile - sidebar fixed top-0 right-0 h-full bg-white z-50 transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 lg:hidden w-64`}>
                <div className="mobile-sidebar-header p-4 flex justify-end border-b">
                    <span className="fas fa-times text-2xl text-black cursor-pointer" onClick={toggleMobileMenu}></span>
                </div>
                <div className="mobile-sidebar-body p-4">
                    <ul className="space-y-4">
                        {navItems.map((item, index) => (
                            <li key={index} className="relative">
                                {item.children ? (
                                    <>
                                        <a
                                            href="#"
                                            className="text-gray-800 hover:text-green-500 flex items-center font-medium text-md"
                                            onClick={() => toggleDropdown(index)}
                                        >
                                            {item.label} <i className="fas fa-chevron-down ml-2"></i>
                                        </a>
                                        <ul className={`dropdown mt-2 space-y-2 ${openDropdown === index ? 'block' : 'hidden'} `}>
                                            {item.children.map((child, childIndex) => (
                                                <li key={childIndex}>
                                                    <a
                                                        href={child.href}
                                                        className="text-gray-600 hover:bg-blue-900 hover:text-white block px-4 py-2 font-medium text-md"
                                                    >
                                                        {child.label}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                ) : (
                                    <a href={item.href} className="text-gray-800 hover:text-green-500 font-medium text-md">
                                        {item.label}
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Overlay for Mobile Menu */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 z-40 lg:hidden overlay"
                    style={{
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                    }}
                    onClick={toggleMobileMenu}
                ></div>
            )}
        </div>
    );
};

export default Navbar;