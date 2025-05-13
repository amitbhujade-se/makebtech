import React, { useEffect, useState } from "react";

const Popup = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [formData, setFormData] = useState({ name: "", mobile: "" });

    // Show popup after 3 seconds if not closed before
    useEffect(() => {
            const timer = setTimeout(() => {
                setShowPopup(true);
            }, 3000); // Show after 3 seconds

            return () => clearTimeout(timer); // Cleanup on unmount
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Name: ${formData.name}, Mobile: ${formData.mobile}`);
        setFormData({ name: "", mobile: "" });
        setShowPopup(false);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <div>
            {showPopup && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    {/* Background Dim */}
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

                    {/* Popup Box */}
                    <div
                        className="relative z-10 w-[90%] max-w-[600px] h-[50dvh] bg-cover bg-center border border-white/20 rounded-2xl p-6 animate-popup shadow-xl shadow-white/10 flex flex-col justify-center items-center space-y-4"
                        
                    >
                        {/* Overlay blur inside box */}
                        <div className="absolute inset-0 backdrop-blur-xl rounded-2xl bg-black/20"></div>

                        {/* Content */}
                        <div className="relative z-10 w-full text-center">
                            <h2 className="text-white text-xl font-semibold mb-4">Candidate Form</h2>
                            <form onSubmit={handleSubmit} className="w-full flex flex-col space-y-3 px-2">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({ ...formData, name: e.target.value })
                                    }
                                    className="w-full px-4 py-2 bg-transparent border border-white/30 text-white placeholder-white rounded-md focus:outline-none focus:ring-2 focus:ring-white/50"
                                    required
                                />
                                <input
                                    type="tel"
                                    placeholder="Mobile Number"
                                    value={formData.mobile}
                                    onChange={(e) =>
                                        setFormData({ ...formData, mobile: e.target.value })
                                    }
                                    className="w-full px-4 py-2 bg-transparent border border-white/30 text-white placeholder-white rounded-md focus:outline-none focus:ring-2 focus:ring-white/50"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="w-full py-2 bg-white text-black font-semibold rounded-md hover:bg-opacity-80 transition"
                                >
                                    Submit
                                </button>
                                <button
                                    type="button"
                                    onClick={handleClosePopup}
                                    className="text-sm text-white underline hover:text-gray-200 mt-2"
                                >
                                    Close
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Popup;
