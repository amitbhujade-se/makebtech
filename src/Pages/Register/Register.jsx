import React, { useState } from 'react';
import "./Register.css"

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        resume: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., API call)
        console.log('Form submitted:', formData);
    };

    return (
        <>
            {/* Hero Section */}
            <div
                className="bg-cover bg-center py-20 text-white text-center"
                style={{
                    backgroundImage:
                        "url('http://makebtech.com/assets/images/hero_bg_1.jpg')",
                }}
            >
                <div className="container mx-auto px-4">
                    <h2 className="mb-2" style={{fontSize: "3rem"}}>Post Resume</h2>
                    <p className="text-white">
                        <a
                            href="/"
                            className="text-green-600 hover:text-green-500 decoration-none transition duration-300"
                            style={{fontSize: "1rem"}}
                        >
                            Home
                        </a>{" "}
                        <span className="mx-2">{">"}</span> <span>candidates</span>
                    </p>
                </div>
            </div>

            {/* Form Section */}
            <section className="bg-gray-100 py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto bg-white p-8 shadow-md">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                            Register with Us
                        </h2>
                        <form
                            name="frm_pay"
                            id="frm_pay"
                            autoComplete="off"
                            encType="multipart/form-data"
                            className='register-form'
                        >
                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="font-semibold text-md" htmlFor="name">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Enter Full Name"
                                        className="register-input mt-1 w-full border border-gray-300 px-4 py-2"
                                    />
                                </div>
                                <div>
                                    <label className="font-semibold text-md" htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Enter Email"
                                        className="register-input mt-1 w-full border border-gray-300 px-4 py-2"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="font-semibold text-md" htmlFor="contact_no">
                                        Contact No.
                                    </label>
                                    <input
                                        type="text"
                                        id="contact_no"
                                        name="contact_no"
                                        placeholder="Enter Contact No."
                                        className="register-input mt-1 w-full border border-gray-300 px-4 py-2"
                                    />
                                </div>
                                <div>
                                    <label className="font-semibold text-md" htmlFor="message">
                                        Your Functional Area
                                    </label>
                                    <input
                                        type="text"
                                        id="message"
                                        name="message"
                                        placeholder="Enter Your Functional Area"
                                        className="register-input mt-1 w-full border border-gray-300 px-4 py-2"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6 mb-6">
                                <div className="md:col-span-1">
                                    <label className="font-semibold text-md" htmlFor="resume">
                                        Upload Resume
                                    </label>
                                    <input
                                        type="file"
                                        id="resume"
                                        name="resume"
                                        className="register-input mt-1 w-full border border-gray-300 px-4 py-2"
                                    />
                                </div>

                                <div>
                                    <label className="font-semibold text-md" htmlFor="fee_for">
                                        Fees For
                                    </label>
                                    <select
                                        id="fee_for"
                                        name="fee_for"
                                        className="register-input mt-1 w-full border border-gray-300 px-4 py-2"
                                    >
                                        <option value="" disabled selected>
                                            -Select-
                                        </option>
                                        <option value="Training">Training</option>
                                        <option value="Placement">Placement</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="font-semibold text-md" htmlFor="amount">
                                        Amount
                                    </label>
                                    <input
                                        type="text"
                                        id="amount"
                                        name="amount"
                                        placeholder="Enter Amount"
                                        className="register-input mt-1 w-full border border-gray-300 px-4 py-2"
                                    /> 
                                </div>
                            </div>

                            <div className="text-left">
                                <button
                                    type="submit"
                                    className="text-white px-6 py-2 cursor-pointer"
                                    id="btn_pay"
                                    name="btn_pay"
                                    style={{ background:"#213653"}}
                                >
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Register;