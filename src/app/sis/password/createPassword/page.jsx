'use client'
import { useState } from 'react';
import NavBar from "@/components/navBar";
import VisualTopo from '@/components/visualTopo';

export default function Home() {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <NavBar />
            <div className="min-h-screen pt-16 flex flex-col w-full">
                <VisualTopo />
                <div className="flex-1 bg-white flex flex-col justify-center items-center  sm:py-8 sm:px-4">

                    <div className="text-account text-center">
                        <h5 className="title-account">Create a </h5>
                        <h5 className="title-account">New Password</h5>
                        <p className="p-account">Enter your new password</p>
                    </div>

                   <div className="w-full max-w-xs">

                        <div className="relative">
                            <span className="block text-gray-700 mb-2">New Password</span>
                            <input
                                placeholder="Enter new password"
                                className="block w-full rounded-lg border border-gray-300 p-2.5 mb-4"
                                type={showPassword ? "text" : "password"}
                                id="password"
                                style={{ 
                                    maxWidth: "327px", 
                                    height: "52px",
                                    borderRadius: '24px',
                                    backgroundColor: '#F6F8FE'
                                }}
                            />
                            <button type="button" className="absolute top-1/2 right-2 transform -translate-y-1/2 focus:outline-none" onClick={togglePasswordVisibility}>
                                {showPassword ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                                    <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z"/>
                                    <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z"/>
                                </svg>
                                ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                                </svg>
                                )}
                            </button>
                        </div>

                        <div className="relative">
                            <span className="block text-gray-700 mb-2">Confirm Password</span>
                            <input
                                placeholder="Confirm your password"
                                className="block w-full rounded-lg border border-gray-300 p-2.5 mb-4"
                                type={showPassword ? "text" : "password"}
                                id="password"
                                style={{ 
                                    maxWidth: "327px", 
                                    height: "52px",
                                    borderRadius: '24px',
                                    backgroundColor: '#F6F8FE'
                                }}
                            />
                            <button type="button" className="absolute top-1/2 right-2 transform -translate-y-1/2 focus:outline-none" onClick={togglePasswordVisibility}>
                                {showPassword ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                                    <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z"/>
                                    <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z"/>
                                </svg>
                                ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                                </svg>
                                )}
                            </button>
                        </div>
        
                        <button
                            className="w-full bg-blue-500 text-white rounded-lg p-2.5 "
                            style={{
                                maxWidth: "327px", 
                                height: "52px",
                                borderRadius: '24px',
                            }}>
                            Continue
                        </button>
                    </div> 
                </div>
            </div>
        </>
    );
}