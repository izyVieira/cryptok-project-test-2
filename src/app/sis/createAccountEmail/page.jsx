'use client'

import { useState } from 'react';
import NavBar from "@/components/navBar";
import VisualTopo from '@/components/visualTopo';
import Link from 'next/link';

let createAccountEmail = () => {
    let [showPassword, setShowPassword] = useState(false);

    let togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    };

    return (
        <>
            {/* <NavBar/> */}
            <div className="min-h-screen bg-white  flex flex-col w-full visualTablet border-tablet">

            <VisualTopo 
                titulo='Sign Up'
                caminhoVoltar='/sis/onboarding'
            />

            <div className="flex-1 bg-white flex flex-col justify-center items-center py-4 px-4 sm:py-8 sm:px-4">
                <div className="w-full max-w-xs">
                <h2 className="text-center text-lg font-semibold mb-2">Complete your account</h2>
                <p className="text-center text-sm text-gray-500 mb-4">Lorem ipsum dolor sit amet</p>

                <form className="w-full">
                    <span className="block text-gray-700 mb-2">Full Name</span>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        className="block w-full rounded-lg border border-gray-300 p-2.5 mb-4"
                        style={{ 
                            maxWidth: "327px", 
                            height: "52px",
                            borderRadius: '24px',
                            backgroundColor: '#F6F8FE'
                        }}
                    />

                    <span className="block text-gray-700 mb-2">Email</span>
                    <input
                        type="text"
                        placeholder="Enter your email"
                        className="block w-full rounded-lg border border-gray-300 p-2.5 mb-4"
                        style={{ 
                            maxWidth: "327px", 
                            height: "52px",
                            borderRadius: '24px',
                            backgroundColor: '#F6F8FE'
                        }}
                    />

                    <div className="relative">
                        <span className="block text-gray-700 mb-2">Password</span>
                        <div className="relative">
                            <input
                                placeholder="Enter your password"
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                                    <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z"/>
                                    <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z"/>
                                </svg>
                                ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                                </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    <div className="relative">
                        <span className="block text-gray-700 mb-2">Confirm Password</span>
                        <div className="relative">
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                                    <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z"/>
                                    <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z"/>
                                </svg>
                                ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                                </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    <button
                        className="w-full bg-blue-500 text-white rounded-lg p-2.5 "
                        style={{
                            maxWidth: "327px", 
                            height: "52px",
                            borderRadius: '24px',
                        }}
                    >
                        <Link href={'/sis/enterOtp'}>
                            <span>Sign In</span>
                        </Link>
                        
                    </button>
                </form>

                <p className="text-center text-gray-500 mt-2">
                    Already have an account? <a href="/sis/signEmail" className="text-blue-500">Login</a>
                </p>

                </div>
            </div>
            </div>
        </>
    );
}

export default createAccountEmail
