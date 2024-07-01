"use client";

import { useState } from 'react';
import NavBar from "@/components/navBar";
import VisualTopo from '@/components/visualTopo';
import Link from 'next/link';


let signEmail = () => {
    let [showPassword, setShowPassword] = useState(false);

    let togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

  return (
    <>
        {/* <NavBar/> */}
        <div className="min-h-screen flex flex-col w-full visualTablet border-tablet">
    
            <VisualTopo 
                tipo='1' 
                titulo='Sign In'
                bg={true}
                caminhoVoltar='/sis/onboarding'
            />

        <div className="flex-1 bg-white flex flex-col justify-center items-center py-4 px-4 sm:py-8 sm:px-4">
            <div className="w-full max-w-xs">
                <span className="block text-gray-700 mb-2">Email</span>
                <input
                    type="email"
                    placeholder="Enter your email address"
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


                <div className="flex items-center mb-4">
                    <input type="checkbox" id="remember" className="rounded-full border-gray-300 focus:ring-blue-500 h-4 w-4 text-blue-500"/>
                    <label htmlFor="remember" className="ml-2 text-gray-700">Remember Me</label>
                                   
                    <Link href={'/sis/password/forgotPassword'}>
                        <span className="ml-12 text-red-500">Forgot Password</span>
                    </Link>
                </div>

                <button
                    className="w-full bg-blue-500 text-white rounded-lg p-2.5 "
                    style={{
                        maxWidth: "327px", 
                        height: "52px",
                        borderRadius: '24px',
                    }}
                >
                    <Link href={'/sis/home/homePage'}>
                        <span>Sign In</span>
                    </Link>
                    
                </button>

                <p className="text-center text-gray-500 mt-2"
                    style={{ 
                        fontSize: '16px',
                        color: '#6C6C6C'
                    }}>
                    Don’t have an account? 
                    <a href="/sis/createAccountEmail" 
                        style={{ 
                            fontSize: '16px',
                            color: '#0354EA',
                            textDecoration: 'none',
                            marginLeft: '5px'
                        }}>
                        Sign Up
                    </a>
                </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default signEmail
