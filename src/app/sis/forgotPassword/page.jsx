'use client'
import { useState } from 'react';
import NavBar from "@/components/navBar";
import VisualTopo from '@/components/visualTopo';
import Botao from '@/components/botao';

let ChangePassword = () => {


    return (
        <>
            <NavBar />
            
            <div className="min-h-screen flex flex-col bg-white w-full "
                style={{
                    paddingBottom: '45px',
                }}>

                <VisualTopo tipo='1' titulo='Forgot Password'/>  

                <div 
                    className="rounded-2 flex-1 flex flex-col justify-center items-center sm:py-8 sm:px-4" 
                    data-bs-spy="scroll" 
                    data-bs-smooth-scroll="true" 
                    tabIndex="0"
                    style={{
                        overflowY: 'auto',
                        marginTop: '-150px'
                    }}>

                    <div 
                        className='flex items-center bg-gray-100 px-4 py-3 rounded-lg'
                        style={{
                            width: '327px',
                            fontWeight: 500,
                            marginBottom: '50px',
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-600 mr-2">
                            <path d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z" fill="#BDBDBD"/>
                        </svg>
                        <h5 style={{
                            fontSize: '13px',
                            marginLeft: '8px',
                            lineHeight: '13px', 
                            flex: '1', 
                            overflow: 'hidden', 
                            textOverflow: 'ellipsis' 
                        }}>
                            We will send the OTP code to your email for security in forgetting your password
                        </h5>
                    </div>



                    <div className="w-full max-w-xs">

                        <div className="relative">
                            <span className="block text-gray-700 mb-2">E-mail</span>

                            <div className="relative">
                                <input
                                    className={`block w-full rounded-lg border border-gray-300 p-2.5 mb-2`}
                                    type='email'
                                    id="email"
                                    value='Andylexsian22@gmail.com'
                                    style={{ 
                                        maxWidth: "327px", 
                                        height: "52px",
                                        borderRadius: '24px',
                                        backgroundColor: '#F6F8FE'
                                    }}
                                />
                                
                            </div>

                        </div>

                    </div> 

                </div>

                <Botao titulo='Submit'/>
            
            </div>
            
        </>
    );
}

export default ChangePassword
