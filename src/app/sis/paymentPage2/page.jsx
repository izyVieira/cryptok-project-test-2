'use client'
import { useState } from 'react';
import NavBar from "@/components/navBar";
import Image from "next/image";
import Menu from '@/components/menu';
import Lista from '@/components/lista';
import VisualTopo from '@/components/visualTopo';
import Botao from '@/components/botao';

let PaymentPage2 = () => {


    return (
        <>
            {/* <NavBar /> */}
            
            <div className="flex flex-col bg-white w-full visualTablet border-tablet"
                style={{
                    // paddingBottom: '45px',
                    // paddingTop: '80px'
                }}>

                <VisualTopo tipo='1' titulo='Payment' caminhoVoltar='/sis/paymentPage1'/>
                <div 
                    className="rounded-2 flex-1 flex flex-col justify-center items-center sm:py-8 sm:px-4" 
                    data-bs-spy="scroll" 
                    data-bs-smooth-scroll="true" 
                    tabIndex="0"
                    style={{
                        overflowY: 'auto',
                    }}>


                    <div 
                        className="flex flex-col justify-center items-center p-2"
                        style={{
                            width: '325px',
                            height: '245px',
                            backgroundColor: '#FEFEFE',
                            borderRadius: '20px'
                        }}>

                        <div 
                            style={{
                                width: '365px',
                                padding: '30px',
                                flexDirection: 'column',
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                                // gap: '24px',
                                borderRadius: '20px 20px 0px 0px'
                            }}>

                            <div className="flex items-center justify-between w-full px-4 py-2 bg-gray-100 rounded-lg ">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
                                        <path d="M39.8254 24.8381C37.154 35.5525 26.3008 42.0731 15.5839 39.4012C4.87155 36.7301 -1.64975 25.8775 1.02287 15.1639C3.69314 4.44838 14.5463 -2.07268 25.2599 0.598468C35.976 3.26961 42.4969 14.1234 39.8251 24.8383L39.8253 24.8381H39.8254Z" fill="#F7931A"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M29.2437 17.1504C29.6418 14.4889 27.6153 13.0582 24.8441 12.1038L25.7431 8.49845L23.5482 7.95159L22.6731 11.462C22.096 11.3181 21.5034 11.1825 20.9145 11.0481L21.796 7.51451L19.6024 6.96765L18.7029 10.5718C18.2254 10.4631 17.7564 10.3557 17.3014 10.2425L17.304 10.2311L14.2771 9.47534L13.6932 11.8194C13.6932 11.8194 15.3217 12.1926 15.2874 12.2156C16.1762 12.4374 16.3369 13.0257 16.3102 13.492L15.2862 17.5993C15.3474 17.6149 15.4268 17.6374 15.5144 17.6726L15.4507 17.6567L15.4506 17.6566C15.3965 17.6431 15.3402 17.629 15.2824 17.6152L13.847 23.3689C13.7384 23.6389 13.4627 24.0441 12.8413 23.8903C12.8633 23.9221 11.246 23.4922 11.246 23.4922L10.1562 26.0044L13.0126 26.7164C13.3254 26.7948 13.6345 26.8754 13.9404 26.9551L13.9406 26.9552C14.1544 27.0109 14.3666 27.0662 14.5775 27.1201L13.6692 30.7668L15.8616 31.3136L16.761 27.7057C17.36 27.8682 17.9412 28.0182 18.5102 28.1596L17.6138 31.7505L19.8088 32.2974L20.717 28.6576C24.4598 29.3658 27.2741 29.0803 28.4586 25.6953C29.4132 22.97 28.4111 21.398 26.4421 20.3729C27.8762 20.0422 28.9565 19.099 29.2445 17.1507L29.2438 17.1502L29.2437 17.1504ZM24.2281 24.1817C23.6058 26.6821 19.6916 25.6484 17.9007 25.1754C17.7396 25.1329 17.5957 25.0949 17.4729 25.0644L18.6782 20.2332C18.8278 20.2705 19.0107 20.3116 19.2179 20.3581C21.0703 20.7737 24.8658 21.6254 24.2282 24.1817H24.2281ZM19.5906 18.1158C21.0836 18.5142 24.3408 19.3834 24.908 17.1109H24.9082C25.4875 14.7866 22.3221 14.0859 20.7761 13.7436C20.6022 13.7051 20.4487 13.6712 20.3235 13.6399L19.2307 18.0216C19.3339 18.0473 19.4549 18.0796 19.5906 18.1158Z" fill="white"/>
                                    </svg>

                                    <div className="ml-2">
                                        <h2 className="text-sm font-medium text-gray-800">BTC</h2>
                                        <span className="text-xs text-gray-600">Bitcoin</span>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-lg font-bold text-gray-900">$88.91</h2>
                                </div>
                            </div>

                            <p className="text-lg font-semibold text-gray-700 mt-3">$1,333.65</p>
                            <hr className="my-2 border-gray-500 border-dashed w-full" />

                            <div className='flex mt-3'>

                                <p     
                                    style={{
                                        fontSize: '14px',
                                        fontWeight: 400,
                                        alignSelf: 'stretch',
                                        color: '#9CA4AB',
                                        flex: '1 0 0'
                                    }}>
                                    Funding Source
                                </p>

                                <p     
                                    style={{
                                        fontSize: '14px',
                                        fontWeight: 700,
                                        textAlign: 'right',
                                        color: '#0354EA'
                                    }}>
                                    Cryptok
                                </p>

                            </div>

                            <div className='flex mt-3'>

                                <p     
                                    style={{
                                        fontSize: '14px',
                                        fontWeight: 400,
                                        alignSelf: 'stretch',
                                        color: '#9CA4AB',
                                        flex: '1 0 0'
                                    }}>
                                    Approx Share Price
                                </p>

                                <p     
                                    style={{
                                        fontSize: '14px',
                                        fontWeight: 700,
                                        textAlign: 'right',
                                        color: 'black'
                                    }}>
                                    $1,333.65
                                </p>

                            </div>

                            <div className='flex mt-3'>

                                <p     
                                    style={{
                                        fontSize: '14px',
                                        fontWeight: 400,
                                        alignSelf: 'stretch',
                                        color: '#9CA4AB',
                                        flex: '1 0 0'
                                    }}>
                                    Approx Shares
                                </p>

                                <p     
                                    style={{
                                        fontSize: '14px',
                                        fontWeight: 700,
                                        textAlign: 'right',
                                        color: 'black'
                                    }}>
                                    $3.00
                                </p>

                            </div>

                            <div className='flex mt-3'>

                                <p     
                                    style={{
                                        fontSize: '14px',
                                        fontWeight: 400,
                                        alignSelf: 'stretch',
                                        color: '#9CA4AB',
                                        flex: '1 0 0'
                                    }}>
                                    Fee
                                </p>

                                <p     
                                    style={{
                                        fontSize: '14px',
                                        fontWeight: 700,
                                        textAlign: 'right',
                                        color: 'black'
                                    }}>
                                    $2.10
                                </p>

                            </div>

                        </div>

                    </div>


                    <div style={{
                        width: '375px',
                        padding: '30px',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        borderRadius: '20px 20px 0px 0px'
                    }}>

                        <h3 
                            style={{
                                fontSize: '18px',
                                fontWeight: 600,
                                alignSelf: 'stretch'
                            }}>
                            Pay with
                        </h3>

                        <div class="flex items-center justify-between p-4 rounded-lg my-2" style={{backgroundColor: '#f3f6fb'}}>
                            <div class="flex items-center">
                                <div class="w-10 h-10 p-2 mr-4 bg-gray-50 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-full h-full text-blue-500">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25v-1.5A2.25 2.25 0 014.5 4.5h15a2.25 2.25 0 012.25 2.25v1.5M2.25 8.25h19.5M2.25 8.25h19.5v9a2.25 2.25 0 01-2.25 2.25h-15A2.25 2.25 0 012.25 17.25v-9z" />
                                    </svg>
                                </div>
                                <a href='/sis/paymentMethodPage1'>
                                    <div class="font-medium text-gray-900">DBS Bank Ltd</div>
                                    <div class="text-sm text-gray-500">**** 7265</div>
                                </a>
                            </div>
                            <button class="p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 text-gray-500">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 9l6 6 6-6" />
                                </svg>
                            </button>
                        </div>

                    </div>

                </div>

                <Botao titulo='Continue' caminho='/sis/paymentMethod'/>
            
            </div>
            
        </>
    );
}

export default PaymentPage2
