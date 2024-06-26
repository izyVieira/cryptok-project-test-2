'use client'
import { useState } from 'react';
import NavBar from "@/components/navBar";
import Image from "next/image";
import Menu from '@/components/menu';
import Lista from '@/components/lista';
import { useRouter } from 'next/navigation';

let HomePage = () => {

    let router = useRouter();

    return (
        <>
            {/* <NavBar /> */}
            
            <div className=" flex flex-col w-full visualTablet border-tablet">

                <div 
                    className="flex-1 rounded-5 rounded-top-0 flex flex-col justify-center items-center sm:py-8 sm:px-4"
                    style={{
                        backgroundColor: '#171725',
                        color: 'white',
                        minHeight: '450px', 
                    }}>

                    <div className="d-flex justify-content-between w-100">

                        <div className="d-flex">
                            <div className="mx-3">
                                <Image
                                    src='/images/people.png'
                                    alt="Crypto Wallet"
                                    width={40}
                                    height={40}
                                    className="mx-auto"
                                />
                            </div>
            
                            <div>
                                <h5>Hi, Andy</h5>
                                <p className="text-msg">Good Morning!</p>
                            </div>
                        </div>
                        
                        <a  href='/sis/notifications'
                            className='mx-4'>

                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 17.8476C17.6392 17.8476 20.2481 17.1242 20.5 14.2205C20.5 11.3188 18.6812 11.5054 18.6812 7.94511C18.6812 5.16414 16.0452 2 12 2C7.95477 2 5.31885 5.16414 5.31885 7.94511C5.31885 11.5054 3.5 11.3188 3.5 14.2205C3.75295 17.1352 6.36177 17.8476 12 17.8476Z" stroke="#FEFEFE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M14.3889 20.8572C13.0247 22.3719 10.8967 22.3899 9.51953 20.8572" stroke="#FEFEFE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <circle cx="17" cy="5" r="4" fill="#F41F52"/>
                            </svg>

                        </a>

                    </div>

                    <div className=''
                        style={{
                            width: '306px',
                            height: '178px',
                            borderRadius: '8px',
                            boxShadow: '0px 20px 60px 0px rgba(0, 0, 0, 0.25)',
                            position: 'relative',
                            bottom: '-50px',
                        }}>

                        <div 
                            style={{
                                width: '327px',
                                height: '190px',
                                borderRadius: '8px',
                                backgroundColor: '#24223B',
                                position: 'absolute',
                                bottom: '10px', 
                                left: '50%',
                                transform: 'translateX(-50%)',
                                padding: '20px',
                                color: 'white',
                                fontFamily: 'Arial, sans-serif'
                            }}>

                            <div style={{ position: 'relative', zIndex: '1' }}>

                                <div 
                                    style={{
                                        fontSize: '12px', 
                                        color: '#D1D8DD'
                                    }}>
                                    Total de Vendas
                                </div>

                                <div 
                                    style={{ 
                                        fontSize: '36px', 
                                        fontWeight: 'bold',
                                    }}>
                                    $5,345.29 
                                    <span 
                                        style={{ 
                                            fontSize: '10px', 
                                            color: '#4CAF50' ,
                                            marginLeft: '5px'
                                        }}>
                                        +150%
                                    </span>
                                </div>
                                
                            </div>

                            
                            <div 
                                style={{ 
                                    position: 'absolute', 
                                    top: '10px', 
                                    right: '10px', 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center' 
                                }}>

                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="20" cy="20" r="19.5" stroke="#FEFEFE"/>
                                    <path d="M21.666 17.5H28.3327V22.5H21.666V17.5Z" fill="#FEFEFE"/>
                                    <path d="M26.666 12.5H14.166C12.7877 12.5 11.666 13.6217 11.666 15V25C11.666 26.3783 12.7877 27.5 14.166 27.5H26.666C27.5852 27.5 28.3327 26.7525 28.3327 25.8333V24.1667H21.666C20.7468 24.1667 19.9993 23.4192 19.9993 22.5V17.5C19.9993 16.5808 20.7468 15.8333 21.666 15.8333H28.3327V14.1667C28.3327 13.2475 27.5852 12.5 26.666 12.5Z" fill="#FEFEFE"/>
                                </svg>

                            </div>

                            <svg xmlns="http://www.w3.org/2000/svg" width="327" height="100" viewBox="0 0 327 100" fill="none" style={{ position: 'absolute', bottom: '0', left: '0', zIndex: '0' }}>
                                <path d="M37.8394 84.1808C22.4677 84.1808 18.6217 76.0001 7.92288 73.1332C3.65516 71.9897 0 75.7367 0 80.155V92C0 96.4183 3.58173 100 8 100H319C323.418 100 327 96.4183 327 92V14.3294C327 9.91111 323.084 5.86026 319.308 8.15429C309.037 14.394 316.152 34.4951 297.067 34.4951C274.477 34.4951 272.782 57.2809 256.404 57.2809C240.026 57.2809 241.72 21.2034 223.648 21.2034C205.575 21.2034 213.482 36.394 196.539 36.394C179.596 36.394 183.549 66.4585 169.43 66.4585C155.311 66.4585 158.699 50.0021 136.674 50.0021C114.648 50.0021 125.943 0 101.658 0C77.3731 0 86.9741 50.0021 69.4663 50.0021C51.9585 50.0021 56.4767 84.1808 37.8394 84.1808Z" fill="url(#paint0_linear_31027_4926)" fill-opacity="0.1"/>
                                <defs>
                                    <linearGradient id="paint0_linear_31027_4926" x1="163.5" y1="0" x2="163.5" y2="100" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FF6464"/>
                                        <stop offset="1" stop-color="#FF6464" stop-opacity="0"/>
                                    </linearGradient>
                                </defs>
                            </svg>

                            <Image
                                src='/images/Vector 15.png'
                                alt="Crypto Wallet"
                                width={327}
                                height={327}
                                style={{
                                    marginRight: '-80px',
                                    position: 'absolute',
                                    transform: 'translateX(-6.5%)',
                                }}
                            />

                        </div>

                    </div>

                    <div 
                        className='relative flex justify-center' 
                        style={{ bottom: '-70px' }}>

                        <a href='/sis/transfer' className="text-center">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20" cy="20" r="19.5" stroke="#FEFEFE"/>
                                <path d="M14 12H26V14H14V12ZM19 22V28H21V22H26L20 16L14 22H19Z" fill="#FEFEFE"/>
                            </svg>
                            <p className="button-label mt-2" style={{fontSize: '12px'}}>Finan</p>
                        </a>

                        <a href='/sis/buyTokenPage2' 
                            className="text-center ml-8" 
                            onClick={() => {
                                router.push('/sis/buyTokenPage2')
                            }}>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27.9241 18.383C27.9998 18.2003 28.0196 17.9991 27.981 17.8051C27.9424 17.6111 27.847 17.4329 27.7071 17.293L22.7071 12.293L21.2931 13.707L24.5861 17H12.0001V19H27.0001C27.1979 19.0001 27.3912 18.9415 27.5557 18.8317C27.7202 18.7218 27.8484 18.5657 27.9241 18.383ZM12.0761 21.617C12.0004 21.7998 11.9806 22.0009 12.0192 22.195C12.0579 22.389 12.1532 22.5672 12.2931 22.707L17.2931 27.707L18.7071 26.293L15.4141 23H28.0001V21H13.0001C12.8023 20.9998 12.6089 21.0584 12.4444 21.1682C12.2799 21.2781 12.1517 21.4343 12.0761 21.617Z" fill="#FEFEFE"/>
                                <circle cx="20" cy="20" r="19.5" stroke="#FEFEFE"/>
                            </svg>

                            <p className="button-label mt-2" style={{fontSize: '12px'}}>
                                X
                            </p>
                        </a>

                        <a href='#' className="text-center ml-8">
                            <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.5 26H26.5V28H14.5V26ZM19.5 12V18H14.5L20.5 24L26.5 18H21.5V12H19.5Z" fill="#FEFEFE"/>
                                <circle cx="20.5" cy="20" r="19.5" stroke="#FEFEFE"/>
                            </svg>

                            <p className="button-label mt-2" style={{fontSize: '12px'}}>Store</p>
                        </a>

                        <a  href='/sis/buyToken'
                            className="text-center ml-8" 
                            onClick={() => {
                                router.push('/sis/buyToken')
                            }}>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20" cy="20" r="19.5" stroke="#FEFEFE"/>
                                <path d="M18.5 29C19.3284 29 20 28.3284 20 27.5C20 26.6716 19.3284 26 18.5 26C17.6716 26 17 26.6716 17 27.5C17 28.3284 17.6716 29 18.5 29Z" fill="#FEFEFE"/>
                                <path d="M25.5 29C26.3284 29 27 28.3284 27 27.5C27 26.6716 26.3284 26 25.5 26C24.6716 26 24 26.6716 24 27.5C24 28.3284 24.6716 29 25.5 29Z" fill="#FEFEFE"/>
                                <path d="M22 21.99L26 16.99H23V12.99H21V16.99H18L22 21.99Z" fill="#FEFEFE"/>
                                <path d="M25.31 23H18.67L14.18 12.23C14.0278 11.8651 13.7708 11.5534 13.4415 11.3345C13.1122 11.1156 12.7254 10.9992 12.33 11H10V13H12.33L17.08 24.38C17.155 24.5626 17.2824 24.719 17.4461 24.8293C17.6099 24.9396 17.8026 24.999 18 25H26C26.2014 24.9994 26.398 24.938 26.564 24.8238C26.7299 24.7096 26.8575 24.5479 26.93 24.36L29.76 17H27.62L25.31 23Z" fill="#FEFEFE"/>
                            </svg>

                            <p className="button-label mt-2" style={{fontSize: '12px'}}>Manager</p>
                        </a>

                    </div>

                </div>

                <div className='pt-5'
                    style={{
                        overflowY: 'auto',
                        maxHeight: '550px',
                    }}>

                    <div 
                        className="rounded-2 flex-1 bg-white flex flex-col justify-center items-center sm:py-8 sm:px-4" 
                        data-bs-spy="scroll" 
                        data-bs-smooth-scroll="true" 
                        tabindex="1"
                        style={{
                            // overflowY: 'auto',
                        }}>

                        <div className="w-full px-4 flex items-center justify-between">
                            <h5 className="m-0"><strong>My Portfolio</strong></h5>
                            <a href='/sis/portfolio' className="m-0" style={{
                                color: '#0354EA',
                                textDecoration: 'none'
                            }}>See All</a>
                        </div>

                        <div className='d-flex'>
                            <div className="flex flex-col justify-between p-4 bg-white mb-2 mx-5" 
                                style={{
                                    width: '208px',
                                    height: '168px',
                                    borderRadius: '20px',
                                }}>

                                <div className="flex items-center">
                                    <div className="p-3">
                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="40" height="40" rx="20" fill="#111111"/>
                                            <path d="M19.9496 25.4725L13.1992 21.485L19.9486 31L26.7045 21.485L19.9468 25.4725H19.9496ZM20.0522 9L13.3001 20.2044L20.0513 24.1956L26.8026 20.2081L20.0522 9Z" fill="#FEFEFE"/>
                                        </svg>
                                    </div>

                                    <div className="">
                                        <div className="text-sm" 
                                        style={{
                                            fontWeight: 800,
                                            color: 'black'
                                        }}>ETH
                                        <span  style={{
                                            fontWeight: 400,
                                            color: '#9CA4AB'
                                        }}>/USD</span>
                                    </div>
                                </div>

                                </div>
                                
                                <div className="ml-4 mt-2">
                                    <div className="text-gray-400"style={{
                                            fontWeight: 400,
                                            color: '#9CA4AB',
                                            fontSize: '12px'
                                        }}>Portofolio</div>
                                    <div className="flex items-center justify-between w-full">
                                        <div className="text-2xl font-bold text-gray-800"style={{
                                                fontWeight: 600,
                                                fontSize: '18px'
                                            }}>$19,654</div>
                                        <div className="flex items-center mx-5">
                                            <svg width="46" height="11" viewBox="0 0 46 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.192 10V7.444H14.636V6.544H17.192V4H18.092V6.544H20.636V7.444H18.092V10H17.192ZM23.5093 10V1.9H21.8293V1.06H24.4693V10H23.5093ZM30.2545 10.144C29.5505 10.144 28.9305 9.952 28.3945 9.568C27.8665 9.176 27.4545 8.636 27.1585 7.948C26.8625 7.252 26.7145 6.444 26.7145 5.524C26.7145 4.604 26.8625 3.8 27.1585 3.112C27.4545 2.416 27.8665 1.876 28.3945 1.492C28.9225 1.108 29.5385 0.916 30.2425 0.916C30.9465 0.916 31.5625 1.108 32.0905 1.492C32.6185 1.876 33.0305 2.416 33.3265 3.112C33.6225 3.8 33.7705 4.604 33.7705 5.524C33.7705 6.444 33.6225 7.252 33.3265 7.948C33.0385 8.644 32.6305 9.184 32.1025 9.568C31.5745 9.952 30.9585 10.144 30.2545 10.144ZM30.2545 9.244C30.7665 9.244 31.2145 9.088 31.5985 8.776C31.9825 8.464 32.2825 8.032 32.4985 7.48C32.7145 6.92 32.8225 6.268 32.8225 5.524C32.8225 4.78 32.7145 4.132 32.4985 3.58C32.2825 3.02 31.9825 2.588 31.5985 2.284C31.2145 1.972 30.7625 1.816 30.2425 1.816C29.7305 1.816 29.2825 1.972 28.8985 2.284C28.5145 2.588 28.2145 3.02 27.9985 3.58C27.7825 4.132 27.6745 4.78 27.6745 5.524C27.6745 6.26 27.7825 6.908 27.9985 7.468C28.2145 8.028 28.5145 8.464 28.8985 8.776C29.2905 9.088 29.7425 9.244 30.2545 9.244ZM36.3555 10L43.6755 1.06H44.8395L37.5195 10H36.3555ZM37.6635 5.596C37.2315 5.596 36.8395 5.492 36.4875 5.284C36.1355 5.068 35.8515 4.784 35.6355 4.432C35.4275 4.08 35.3235 3.688 35.3235 3.256C35.3235 2.824 35.4275 2.432 35.6355 2.08C35.8515 1.72 36.1355 1.436 36.4875 1.228C36.8395 1.02 37.2315 0.916 37.6635 0.916C38.0955 0.916 38.4875 1.02 38.8395 1.228C39.1915 1.436 39.4715 1.72 39.6795 2.08C39.8875 2.432 39.9915 2.824 39.9915 3.256C39.9915 3.688 39.8875 4.08 39.6795 4.432C39.4715 4.784 39.1915 5.068 38.8395 5.284C38.4875 5.492 38.0955 5.596 37.6635 5.596ZM37.6635 4.732C37.9435 4.732 38.1875 4.664 38.3955 4.528C38.6115 4.384 38.7795 4.2 38.8995 3.976C39.0275 3.744 39.0915 3.504 39.0915 3.256C39.0915 3 39.0275 2.76 38.8995 2.536C38.7795 2.312 38.6115 2.132 38.3955 1.996C38.1875 1.852 37.9435 1.78 37.6635 1.78C37.3915 1.78 37.1435 1.852 36.9195 1.996C36.7035 2.132 36.5315 2.312 36.4035 2.536C36.2835 2.76 36.2235 3 36.2235 3.256C36.2235 3.504 36.2835 3.744 36.4035 3.976C36.5315 4.2 36.7035 4.384 36.9195 4.528C37.1435 4.664 37.3915 4.732 37.6635 4.732ZM43.4235 10.144C42.9915 10.144 42.5995 10.04 42.2475 9.832C41.8955 9.616 41.6115 9.332 41.3955 8.98C41.1875 8.628 41.0835 8.236 41.0835 7.804C41.0835 7.372 41.1875 6.98 41.3955 6.628C41.6115 6.268 41.8955 5.984 42.2475 5.776C42.5995 5.568 42.9915 5.464 43.4235 5.464C43.8555 5.464 44.2475 5.568 44.5995 5.776C44.9515 5.984 45.2315 6.268 45.4395 6.628C45.6475 6.98 45.7515 7.372 45.7515 7.804C45.7515 8.236 45.6475 8.628 45.4395 8.98C45.2315 9.332 44.9515 9.616 44.5995 9.832C44.2475 10.04 43.8555 10.144 43.4235 10.144ZM43.4235 9.28C43.7035 9.28 43.9475 9.212 44.1555 9.076C44.3715 8.932 44.5395 8.748 44.6595 8.524C44.7875 8.292 44.8515 8.052 44.8515 7.804C44.8515 7.548 44.7875 7.308 44.6595 7.084C44.5395 6.86 44.3715 6.68 44.1555 6.544C43.9475 6.4 43.7035 6.328 43.4235 6.328C43.1515 6.328 42.9035 6.4 42.6795 6.544C42.4635 6.68 42.2915 6.86 42.1635 7.084C42.0435 7.308 41.9835 7.548 41.9835 7.804C41.9835 8.052 42.0435 8.292 42.1635 8.524C42.2915 8.748 42.4635 8.932 42.6795 9.076C42.9035 9.212 43.1515 9.28 43.4235 9.28Z" fill="#00C566"/>
                                                <path d="M3.88749 7.50004H6.11249C7.49582 7.50004 8.05832 6.52087 7.37082 5.32504L7.06249 4.79171C6.98749 4.66254 6.84999 4.58337 6.69999 4.58337H3.29999C3.14999 4.58337 3.01249 4.66254 2.93749 4.79171L2.62916 5.32504C1.94166 6.52087 2.50416 7.50004 3.88749 7.50004Z" fill="#00C566"/>
                                                <path d="M3.66216 4.16661H6.34133C6.50383 4.16661 6.60382 3.99161 6.52049 3.85411L6.25383 3.39578C5.56632 2.19994 4.43299 2.19994 3.74549 3.39578L3.47882 3.85411C3.39966 3.99161 3.49966 4.16661 3.66216 4.16661Z" fill="#00C566"/>
                                            </svg>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col justify-between p-4 bg-white mb-2" 
                                style={{
                                    width: '208px',
                                    height: '168px',
                                    borderRadius: '20px',
                                }}>

                                <div className="flex items-center">
                                    <div className="p-3">
                                        <Image
                                        src='/images/iconBtc.png'
                                        alt="Crypto Wallet"
                                        width={40}
                                        height={40}
                                        className="mx-auto"
                                    />
                                    </div>

                                    
                                    <div className="">
                                        <div className="text-sm" 
                                            style={{
                                                fontWeight: 800,
                                                color: 'black'
                                            }}>BTC
                                            <span  style={{
                                                fontWeight: 400,
                                                color: '#9CA4AB'
                                            }}>/USD</span>
                                    </div>
                                    </div>

                                </div>
                                
                                <div className="ml-4 mt-2">
                                    <div className="text-gray-400" 
                                        style={{
                                            fontWeight: 400,
                                            color: '#9CA4AB',
                                            fontSize: '12px'
                                        }}>
                                        Portofolio
                                    </div>
                                    <div className="flex items-center justify-between w-full">

                                        <span className="text-2xl font-bold text-gray-800 "
                                            style={{
                                                fontWeight: 600,
                                                fontSize: '18px'
                                            }}>
                                            $112,654
                                        </span>

                                        <div className="flex items-center ">
                                            <svg width="46" height="11" viewBox="0 0 46 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.192 10V7.444H14.636V6.544H17.192V4H18.092V6.544H20.636V7.444H18.092V10H17.192ZM23.5093 10V1.9H21.8293V1.06H24.4693V10H23.5093ZM30.2545 10.144C29.5505 10.144 28.9305 9.952 28.3945 9.568C27.8665 9.176 27.4545 8.636 27.1585 7.948C26.8625 7.252 26.7145 6.444 26.7145 5.524C26.7145 4.604 26.8625 3.8 27.1585 3.112C27.4545 2.416 27.8665 1.876 28.3945 1.492C28.9225 1.108 29.5385 0.916 30.2425 0.916C30.9465 0.916 31.5625 1.108 32.0905 1.492C32.6185 1.876 33.0305 2.416 33.3265 3.112C33.6225 3.8 33.7705 4.604 33.7705 5.524C33.7705 6.444 33.6225 7.252 33.3265 7.948C33.0385 8.644 32.6305 9.184 32.1025 9.568C31.5745 9.952 30.9585 10.144 30.2545 10.144ZM30.2545 9.244C30.7665 9.244 31.2145 9.088 31.5985 8.776C31.9825 8.464 32.2825 8.032 32.4985 7.48C32.7145 6.92 32.8225 6.268 32.8225 5.524C32.8225 4.78 32.7145 4.132 32.4985 3.58C32.2825 3.02 31.9825 2.588 31.5985 2.284C31.2145 1.972 30.7625 1.816 30.2425 1.816C29.7305 1.816 29.2825 1.972 28.8985 2.284C28.5145 2.588 28.2145 3.02 27.9985 3.58C27.7825 4.132 27.6745 4.78 27.6745 5.524C27.6745 6.26 27.7825 6.908 27.9985 7.468C28.2145 8.028 28.5145 8.464 28.8985 8.776C29.2905 9.088 29.7425 9.244 30.2545 9.244ZM36.3555 10L43.6755 1.06H44.8395L37.5195 10H36.3555ZM37.6635 5.596C37.2315 5.596 36.8395 5.492 36.4875 5.284C36.1355 5.068 35.8515 4.784 35.6355 4.432C35.4275 4.08 35.3235 3.688 35.3235 3.256C35.3235 2.824 35.4275 2.432 35.6355 2.08C35.8515 1.72 36.1355 1.436 36.4875 1.228C36.8395 1.02 37.2315 0.916 37.6635 0.916C38.0955 0.916 38.4875 1.02 38.8395 1.228C39.1915 1.436 39.4715 1.72 39.6795 2.08C39.8875 2.432 39.9915 2.824 39.9915 3.256C39.9915 3.688 39.8875 4.08 39.6795 4.432C39.4715 4.784 39.1915 5.068 38.8395 5.284C38.4875 5.492 38.0955 5.596 37.6635 5.596ZM37.6635 4.732C37.9435 4.732 38.1875 4.664 38.3955 4.528C38.6115 4.384 38.7795 4.2 38.8995 3.976C39.0275 3.744 39.0915 3.504 39.0915 3.256C39.0915 3 39.0275 2.76 38.8995 2.536C38.7795 2.312 38.6115 2.132 38.3955 1.996C38.1875 1.852 37.9435 1.78 37.6635 1.78C37.3915 1.78 37.1435 1.852 36.9195 1.996C36.7035 2.132 36.5315 2.312 36.4035 2.536C36.2835 2.76 36.2235 3 36.2235 3.256C36.2235 3.504 36.2835 3.744 36.4035 3.976C36.5315 4.2 36.7035 4.384 36.9195 4.528C37.1435 4.664 37.3915 4.732 37.6635 4.732ZM43.4235 10.144C42.9915 10.144 42.5995 10.04 42.2475 9.832C41.8955 9.616 41.6115 9.332 41.3955 8.98C41.1875 8.628 41.0835 8.236 41.0835 7.804C41.0835 7.372 41.1875 6.98 41.3955 6.628C41.6115 6.268 41.8955 5.984 42.2475 5.776C42.5995 5.568 42.9915 5.464 43.4235 5.464C43.8555 5.464 44.2475 5.568 44.5995 5.776C44.9515 5.984 45.2315 6.268 45.4395 6.628C45.6475 6.98 45.7515 7.372 45.7515 7.804C45.7515 8.236 45.6475 8.628 45.4395 8.98C45.2315 9.332 44.9515 9.616 44.5995 9.832C44.2475 10.04 43.8555 10.144 43.4235 10.144ZM43.4235 9.28C43.7035 9.28 43.9475 9.212 44.1555 9.076C44.3715 8.932 44.5395 8.748 44.6595 8.524C44.7875 8.292 44.8515 8.052 44.8515 7.804C44.8515 7.548 44.7875 7.308 44.6595 7.084C44.5395 6.86 44.3715 6.68 44.1555 6.544C43.9475 6.4 43.7035 6.328 43.4235 6.328C43.1515 6.328 42.9035 6.4 42.6795 6.544C42.4635 6.68 42.2915 6.86 42.1635 7.084C42.0435 7.308 41.9835 7.548 41.9835 7.804C41.9835 8.052 42.0435 8.292 42.1635 8.524C42.2915 8.748 42.4635 8.932 42.6795 9.076C42.9035 9.212 43.1515 9.28 43.4235 9.28Z" fill="#00C566"/>
                                                <path d="M3.88749 7.50004H6.11249C7.49582 7.50004 8.05832 6.52087 7.37082 5.32504L7.06249 4.79171C6.98749 4.66254 6.84999 4.58337 6.69999 4.58337H3.29999C3.14999 4.58337 3.01249 4.66254 2.93749 4.79171L2.62916 5.32504C1.94166 6.52087 2.50416 7.50004 3.88749 7.50004Z" fill="#00C566"/>
                                                <path d="M3.66216 4.16661H6.34133C6.50383 4.16661 6.60382 3.99161 6.52049 3.85411L6.25383 3.39578C5.56632 2.19994 4.43299 2.19994 3.74549 3.39578L3.47882 3.85411C3.39966 3.99161 3.49966 4.16661 3.66216 4.16661Z" fill="#00C566"/>
                                            </svg>

                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className='w-full'>

                            <div className="px-5 mt-3 flex items-center justify-between">
                                <h5 className="m-0">Trending</h5>
                            </div>

                            <Lista styleNone/>
                        </div>

                    </div>
                    <Menu tela='home'/>
                </div>
   
            
                <div class="overlay borderPhone"></div>
            </div>
            
        </>
    );
}

export default HomePage
