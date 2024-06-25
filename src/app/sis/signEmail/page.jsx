"use client";

import { useState } from 'react';
import NavBar from "@/components/navBar";
import VisualTopo from '@/components/visualTopo';
import Link from 'next/link';


let signEmail = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

  return (
    <>
        <NavBar/>
        <div className="min-h-screen pt-16 flex flex-col w-full">
    

        <VisualTopo tipo='1' titulo='Sign In'/>

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
                    Sign In
                </button>
           
                <div className="flex items-center my-4">
                    <hr className="flex-1 border-gray-900" />
                    <span className="mx-2 text-gray-800">or continue with</span>
                    <hr className="flex-1 border-gray-900" />
                </div>

                <button
                    className="w-full flex items-center justify-center border border-black rounded-lg p-2.5 mb-2 bg-white text-black"
                    style={{ 
                        maxWidth: "327px", 
                        height: "52px",
                        borderRadius: '24px', 
                    }}
                >
                           
                    <span className="w-5 h-5 mx-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                            <g clip-path="url(#clip0_29522_1861)">
                                <path d="M24.3068 10.141C24.4135 10.141 24.5 10.2275 24.5 10.3342V12.3623C24.5 13.1214 24.4295 13.8636 24.2942 14.5836C23.2481 20.1762 18.3211 24.4027 12.4154 24.362C5.7887 24.3163 0.485358 18.962 0.50003 12.3353C0.514608 5.7204 5.8817 0.362305 12.5 0.362305C15.7425 0.362305 18.6844 1.64865 20.8444 3.73815C20.9224 3.81357 20.9244 3.93788 20.8477 4.01457L17.9784 6.88384C17.9045 6.95771 17.7852 6.95963 17.7095 6.88759C16.3538 5.59716 14.5196 4.80493 12.5 4.80493C8.32947 4.80493 4.97111 8.13943 4.9428 12.3099C4.91434 16.5076 8.30884 19.9196 12.5 19.9196C15.9005 19.9196 18.7767 17.6732 19.7251 14.5836H12.6932C12.5865 14.5836 12.5 14.4971 12.5 14.3904V10.3341C12.5 10.2274 12.5865 10.1409 12.6932 10.1409H24.3068V10.141Z" fill="#2196F3"/>
                                <path d="M24.3073 10.141H22.8587C22.9653 10.141 23.0518 10.2275 23.0518 10.3342V12.3623C23.0518 13.1214 22.9813 13.8636 22.8461 14.5836C21.8481 19.919 17.3178 24.011 11.7754 24.3406C11.9875 24.3532 12.2009 24.3605 12.4159 24.362C18.3217 24.4027 23.2487 20.1762 24.2948 14.5836C24.43 13.8636 24.5005 13.1214 24.5005 12.3623V10.3341C24.5005 10.2275 24.414 10.141 24.3073 10.141Z" fill="#1E88E5"/>
                                <path d="M5.63663 9.1974L1.99219 6.56415C4.03678 2.86613 7.97672 0.362305 12.501 0.362305C15.7435 0.362305 18.6855 1.64865 20.8454 3.73815C20.9234 3.81357 20.9254 3.93788 20.8487 4.01457L17.9794 6.88384C17.9057 6.95757 17.7863 6.95987 17.7108 6.88796C16.3552 5.5973 14.5208 4.80498 12.501 4.80498C9.45731 4.80498 6.83372 6.60423 5.63663 9.1974Z" fill="#F44336"/>
                                <path d="M4.58398 8.43725L5.63609 9.19742C6.72875 6.83051 9.01006 5.12585 11.7143 4.84624C11.7346 4.84404 11.7542 4.84137 11.7749 4.8394C11.5369 4.81681 11.2957 4.80499 11.0518 4.80499C8.30225 4.80499 5.906 6.25451 4.58398 8.43725Z" fill="#E53935"/>
                                <path d="M19.3956 3.73815C19.4736 3.81357 19.4756 3.93788 19.3989 4.01462L17.07 6.34351C17.2931 6.5132 17.5067 6.6947 17.7093 6.88763C17.785 6.95968 17.9044 6.95776 17.9783 6.88388L20.8475 4.01462C20.9243 3.93788 20.9222 3.81362 20.8442 3.73815C18.6843 1.64865 15.7423 0.362305 12.4998 0.362305C12.2565 0.362305 12.0151 0.370414 11.7754 0.384711C14.7304 0.560727 17.3976 1.8054 19.3956 3.73815Z" fill="#E53935"/>
                                <path d="M21.3017 20.5175C19.1103 22.8822 15.9773 24.3623 12.499 24.3623C7.80089 24.3623 3.73345 21.6625 1.76367 17.7292L5.48438 15.1795C6.60089 17.9576 9.32105 19.9196 12.499 19.9196C14.4933 19.9196 16.3071 19.147 17.6573 17.8847L21.3017 20.5175Z" fill="#4CAF50"/>
                                <path d="M5.48583 15.1796L4.38867 15.9314C5.66297 18.3053 8.16886 19.9197 11.0517 19.9197C11.2955 19.9197 11.5365 19.9077 11.7744 19.8852C8.91272 19.6123 6.51623 17.7436 5.48583 15.1796Z" fill="#43A047"/>
                                <path d="M12.4999 24.3623C15.9782 24.3623 19.1112 22.8822 21.3026 20.5175L20.41 19.8726C18.3524 22.4334 15.2656 24.1322 11.7773 24.3405C12.0164 24.3547 12.2573 24.3623 12.4999 24.3623Z" fill="#43A047"/>
                                <path d="M4.94267 12.3623C4.94267 13.358 5.13533 14.3089 5.48544 15.1795L1.76469 17.7292C0.955391 16.1144 0.5 14.2915 0.5 12.3623C0.5 10.2593 1.04084 8.28277 1.99119 6.56415L5.63562 9.1974C5.19088 10.1598 4.94267 11.2323 4.94267 12.3623Z" fill="#FFC107"/>
                                <path d="M4.38846 15.9314L5.48562 15.1795C5.13551 14.3089 4.94285 13.358 4.94285 12.3623C4.94285 11.2323 5.19105 10.1598 5.6358 9.19737L4.58369 8.43719C3.90049 9.56524 3.50398 10.8889 3.49432 12.3099C3.48541 13.6202 3.81012 14.854 4.38846 15.9314Z" fill="#FFB300"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_29522_1861">
                                <rect width="24" height="24" fill="white" transform="translate(0.5 0.362305)"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </span>
                    Continue with Google
                </button>

                <button
                    className="w-full flex items-center justify-center border border-black rounded-lg p-2.5 mb-4 bg-white text-black"
                    style={{ 
                        maxWidth: "327px", 
                        height: "52px",
                        borderRadius: '24px', 
                    }}
                >
                    <span className="w-5 h-5 mx-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                            <g clip-path="url(#clip0_29522_1877)">
                                <path d="M19.0759 13.453C18.4157 10.1305 21.5693 8.18184 21.5693 8.18184C21.5693 8.18184 20.3406 6.4042 18.2756 5.94688C16.2117 5.48857 15.1787 6.06119 14.1477 6.49067C13.1157 6.92119 12.6008 6.92119 12.6008 6.92119C11.1115 6.92119 10.0228 5.34437 7.18542 6.06224C5.23064 6.55555 3.17282 8.81214 2.80102 11.5054C2.42922 14.1997 3.23155 17.6376 4.77848 20.302C6.32541 22.9685 7.90123 23.9706 9.01969 23.9994C10.1382 24.0272 11.2546 23.1981 12.6008 22.9963C13.9479 22.7964 14.777 23.4845 16.0984 23.8563C17.4146 24.2271 17.876 23.8831 19.392 22.5936C20.9122 21.3041 22.2882 17.6057 22.2882 17.6057C22.2882 17.6057 19.736 16.7776 19.0759 13.453Z" fill="#111111"/>
                                <path d="M16.1533 3.79731C17.6157 2.30705 17.1204 0 17.1204 0C17.1204 0 15.0667 0.360484 13.6907 1.79206C12.3158 3.22469 12.5434 5.48743 12.5434 5.48743C12.5434 5.48743 14.6908 5.28661 16.1533 3.79731Z" fill="#111111"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_29522_1877">
                                <rect width="24" height="24" fill="white" transform="translate(0.5)"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </span>
                    Continue with Apple
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
