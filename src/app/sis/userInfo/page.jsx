'use client'
import { useState } from 'react';
import NavBar from "@/components/navBar";
import Image from "next/image";
import Menu from '@/components/menu';
import VisualTopo from '@/components/visualTopo';
import Link from 'next/link';


let UserInfo = () => {


    return (
        <>
            <NavBar />
            
            <div className="min-h-screen bg-white flex flex-col w-full "
                style={{
                    paddingTop: '90px'
                }}>

                <VisualTopo tipo='1' titulo='Setting' caminhoVoltar='/sis/profile'/>
                
                <div 
                    className="rounded-2 flex-1 bg-white flex flex-col justify-center items-center sm:py-8 sm:px-4" 
                    data-bs-spy="scroll" 
                    data-bs-smooth-scroll="true" 
                    tabindex="0"
                    style={{
                        overflowY: 'auto',
                    }}>


                    <div className="justify-content-center w-full flex flex-col items-center">

                        <div className="relative mx-3">
                            <Image
                                src='/images/BG.png'
                                alt="Crypto Wallet"
                                width={327}
                                height={120}
                                className="mx-auto"
                            />
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute top-0 right-0 mt-2 mr-2"
                            >
                                <circle cx="16" cy="16" r="14.5" fill="#0354EA" stroke="#FEFEFE" strokeWidth="3"/>
                                <g clipPath="url(#clip0_65_400)">
                                    <path d="M21.5492 12.5049L19.4942 10.4499C19.226 10.198 18.8746 10.0534 18.5067 10.0437C18.1389 10.0341 17.7803 10.1599 17.4992 10.3974L10.7492 17.1474C10.5068 17.3919 10.3559 17.7123 10.3217 18.0549L9.99925 21.1824C9.98914 21.2922 10.0034 21.403 10.041 21.5067C10.0786 21.6104 10.1386 21.7045 10.2167 21.7824C10.2868 21.8519 10.3699 21.9069 10.4613 21.9442C10.5527 21.9815 10.6505 22.0005 10.7492 21.9999H10.8167L13.9442 21.7149C14.2868 21.6808 14.6073 21.5298 14.8517 21.2874L21.6017 14.5374C21.8637 14.2606 22.0053 13.8913 21.9955 13.5103C21.9856 13.1293 21.8252 12.7678 21.5492 12.5049ZM18.9992 15.0099L16.9892 12.9999L18.4517 11.4999L20.4992 13.5474L18.9992 15.0099Z" fill="#FEFEFE"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_65_400">
                                        <rect width="18" height="18" fill="white" transform="translate(7 7)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>

                        <div className="relative mt-[-20px]">
                            <Image
                                src='/images/profile2.jpeg'
                                alt="Crypto Wallet"
                                width={89}
                                height={89}
                                className="mx-auto rounded-full border-4 border-white"
                            />
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute bottom-0 right-0 transform translate-x-1/2 -translate-y-1/2"
                            >
                                <circle cx="16" cy="16" r="14.5" fill="#0354EA" stroke="#FEFEFE" strokeWidth="3"/>
                                <g clipPath="url(#clip0_65_400)">
                                    <path d="M21.5492 12.5049L19.4942 10.4499C19.226 10.198 18.8746 10.0534 18.5067 10.0437C18.1389 10.0341 17.7803 10.1599 17.4992 10.3974L10.7492 17.1474C10.5068 17.3919 10.3559 17.7123 10.3217 18.0549L9.99925 21.1824C9.98914 21.2922 10.0034 21.403 10.041 21.5067C10.0786 21.6104 10.1386 21.7045 10.2167 21.7824C10.2868 21.8519 10.3699 21.9069 10.4613 21.9442C10.5527 21.9815 10.6505 22.0005 10.7492 21.9999H10.8167L13.9442 21.7149C14.2868 21.6808 14.6073 21.5298 14.8517 21.2874L21.6017 14.5374C21.8637 14.2606 22.0053 13.8913 21.9955 13.5103C21.9856 13.1293 21.8252 12.7678 21.5492 12.5049ZM18.9992 15.0099L16.9892 12.9999L18.4517 11.4999L20.4992 13.5474L18.9992 15.0099Z" fill="#FEFEFE"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_65_400">
                                        <rect width="18" height="18" fill="white" transform="translate(7 7)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>

                    </div>

                
                    <div 
                        style={{
                            width: '375px',
                            height: '950px',
                            padding: '8.5px',
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            gap: '24px',
                        }}>


                        <form 
                            style={{
                                width: '100%', 
                                maxWidth: '375px', 
                                padding: '24px', 
                                borderRadius: '20px 20px 0px 0px', 
                                marginBottom: '24px' 
                            }}>

                            <div className="mb-4">
                                <label htmlFor="firstName" className="block text-left text-gray-700">First Name</label>
                                <input
                                    className="block w-full px-3 py-2 mt-1 text-gray-800 rounded-lg "
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value='Andy'
                                    placeholder="Enter your first name"
                                    style={{
                                        border: '1px solid #0354EA',
                                        borderRadius: '24px',
                                        height: '52px'
                                    }}
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="firstName" className="block text-left text-gray-700">Last Name</label>
                                <input
                                    className="block w-full px-3 py-2 mt-1 text-gray-800 rounded-lg "
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value='Lexsian'
                                    placeholder="Enter your first name"
                                    style={{
                                        border: '1px solid #0354EA',
                                        borderRadius: '24px',
                                        height: '52px'
                                    }}
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="firstName" className="block text-left text-gray-700">E-mail</label>
                                <input
                                    className="block w-full px-3 py-2 mt-1 text-gray-800 rounded-lg "
                                    type="email"
                                    id="firstName"
                                    name="firstName"
                                    value='Andylexian22@gmail.com'
                                    placeholder="Enter your first name"
                                    style={{
                                        border: '1px solid #0354EA',
                                        borderRadius: '24px',
                                        height: '52px'
                                    }}
                                />
                            </div>

                           
                            <div className="mb-4">
                                <label htmlFor="firstName" className="block text-left text-gray-700">Date of Birth</label>
                                <input
                                    className="block w-full px-3 py-2 mt-1 text-gray-800 rounded-lg "
                                    type="date" 
                                    id="dob" 
                                    name="dob"
                                    value='25/58/58'
                                    placeholder="Enter your first name"
                                    style={{
                                        border: '1px solid #0354EA',
                                        borderRadius: '24px',
                                        height: '52px'
                                    }}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-left text-gray-700">Gender</label>

                                <div className="flex items-center">
                                    <label className="inline-flex items-center mr-4" 
                                        style={{
                                            border: '1px solid #0354EA',
                                            width: '156px',
                                            padding: '12px 114px 12px 16px',
                                            borderRadius: '24px',
                                            gap: '16px'
                                        }}>
                                        <input type="radio" name="gender" value="male" className="form-radio text-blue-500 rounded-full focus:outline-none focus:border-blue-600" />
                                        <span className="ml-2">Male</span>
                                    </label>

                                    <label className="inline-flex items-center" 
                                        style={{
                                            border: '1px solid #0354EA',
                                            width: '156px',
                                            padding: '12px 114px 12px 16px',
                                            borderRadius: '24px',
                                            gap: '16px'
                                        }}>
                                        <input type="radio" name="gender" value="female"  className="form-radio text-blue-500 rounded-full focus:outline-none focus:border-blue-600" />
                                        <span className="ml-2">Female</span>
                                    </label>

                                </div>

                            </div>

                            <div className="mb-4">
                                <label htmlFor="location" className="block text-left text-gray-700">Location</label>
                                <textarea 
                                    id="location"
                                    name="location" 
                                    value='the printing and typesetting industry.' 
                                    className="block w-full px-3 py-2 mt-1 text-gray-800"
                                    style={{
                                        border: '1px solid #0354EA',
                                        borderRadius: '24px',
                                        height: '132px'
                                    }}>

                                </textarea>
                            </div>

                            <div className="text-center flex justify-center items-center my-5">
                                <button
                                    className="w-full text-blue-600 rounded-lg p-2.5"
                                    style={{
                                        maxWidth: "327px",
                                        height: "52px",
                                        borderRadius: '24px',
                                        backgroundColor: '#ECF1F6',
                                        border: '1px solid #ECF1F6', 
                                        fontSize: '16px',
                                        fontWeight: 600,
                                        color: '#9CA4AB'
                                    }}
                                >
                                    Save Changes 
                                </button>
                            </div>
                        </form>
                    </div>         

                </div>

                <Menu/>
            
            </div>
            
        </>
    );
}

export default UserInfo
