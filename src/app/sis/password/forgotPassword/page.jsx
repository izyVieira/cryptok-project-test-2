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
                <div className="flex-1  flex flex-col justify-center items-center sm:py-8 sm:px-4" style={{marginTop: '-190px'}}>

                    <div className="text-account text-center p-5">
                        <h5 className="title-account "  style={{fontSize: '24px'}}>Forgot Password </h5>
                        <p className="p-account" style={{fontSize: '14px'}}>Recover your account password</p>
                    </div>

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
