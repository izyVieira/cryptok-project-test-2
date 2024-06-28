'use client'
import { useState } from 'react';
import NavBar from "@/components/navBar";
import Image from "next/image";
import Menu from '@/components/menu';
import Lista from '@/components/lista';
import VisualTopo from '@/components/visualTopo';
import Botao from '@/components/botao';

let PaymentPage1 = () => {


    return (
        <>
            <NavBar />
            
            <div className="min-h-screen flex flex-col bg-white w-full "
                style={{
                    paddingBottom: '45px',
                    paddingTop: '80px'
                }}>

                <VisualTopo tipo='1' titulo='Payment' caminhoVoltar='/sis/buyTokenPage2'/>
                <div 
                    className="rounded-2 flex-1 flex flex-col justify-center items-center sm:py-8 sm:px-4" 
                    data-bs-spy="scroll" 
                    data-bs-smooth-scroll="true" 
                    tabIndex="0"
                    style={{
                        overflowY: 'auto',
                    }}>


                    <div 
                        className="flex flex-col justify-center items-center"
                        style={{
                            width: '325px',
                            height: '245px',
                            backgroundColor: '#f3f6fb',
                            borderRadius: '20px'
                        }}>

                        <div className="relative flex flex-col justify-center items-center h-full">
                            <svg className="relative mb-2" xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
                                <path d="M70.9229 44.7086C66.1143 63.9945 46.5786 75.7315 27.2882 70.9222C8.0059 66.1142 -3.73245 46.5794 1.07827 27.2951C5.88476 8.00709 25.4205 -3.73082 44.7048 1.07724C63.9938 5.8853 75.7315 25.4221 70.9223 44.7089L70.9227 44.7086H70.9229Z" fill="#F7931A"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M51.875 30.8706C52.5917 26.0798 48.9438 23.5046 43.9557 21.7866L45.5739 15.2971L41.6231 14.3127L40.0478 20.6314C39.0092 20.3724 37.9425 20.1283 36.8824 19.8864L38.4691 13.526L34.5207 12.5416L32.9016 19.0291C32.0421 18.8334 31.1979 18.64 30.3789 18.4363L30.3835 18.4159L24.9352 17.0555L23.8842 21.2748C23.8842 21.2748 26.8154 21.9466 26.7536 21.9879C28.3535 22.3872 28.6428 23.4462 28.5948 24.2855L26.7515 31.6787C26.8617 31.7066 27.0046 31.7471 27.1622 31.8105L27.0473 31.7818C26.9499 31.7574 26.8486 31.7321 26.7446 31.7072L24.161 42.0639C23.9655 42.5499 23.4692 43.2793 22.3506 43.0024C22.3902 43.0597 19.4791 42.2858 19.4791 42.2858L17.5176 46.8078L22.659 48.0893C23.2218 48.2305 23.7781 48.3754 24.3286 48.5189L24.3292 48.5191L24.3297 48.5192C24.7144 48.6195 25.0963 48.719 25.4758 48.8161L23.8409 55.3801L27.7872 56.3644L29.4062 49.8701C30.4843 50.1627 31.5305 50.4326 32.5548 50.6871L30.9412 57.1508L34.8922 58.1351L36.5269 51.5835C43.2639 52.8583 48.3297 52.3443 50.4619 46.2514C52.18 41.3458 50.3764 38.5163 46.832 36.6711C49.4136 36.0759 51.358 34.3781 51.8765 30.8712L51.8752 30.8703L51.875 30.8706ZM42.847 43.5269C41.7268 48.0276 34.6812 46.1669 31.4576 45.3156C31.1676 45.239 30.9085 45.1706 30.6875 45.1157L32.857 36.4196C33.1264 36.4868 33.4556 36.5607 33.8285 36.6443C37.1629 37.3926 43.9947 38.9256 42.8472 43.5269H42.847ZM34.4993 32.6083C37.1869 33.3254 43.0498 34.8899 44.0708 30.7994H44.0712C45.1138 26.6158 39.4161 25.3544 36.6333 24.7384C36.3202 24.6691 36.0441 24.608 35.8185 24.5518L33.8516 32.4387C34.0373 32.485 34.2552 32.5431 34.4993 32.6083Z" fill="white"/>
                            </svg>

                            <div className="text-center">
                                <h2 
                                    style={{
                                        color: 'black',
                                        fontSize: '18px',
                                    }}>
                                    BTC
                                </h2>
                                <span 
                                    style={{
                                        color: '#9CA4AB',
                                        fontSize: '12px'
                                    }}>
                                    Bitcoin
                                </span>
                            </div>

                            <div className="text-center">
                                <h2 className="text-3xl font-bold">$1,333.65</h2>
                            </div>

                            <div className="text-center flex items-start gap-4 w-60">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M10 6.66667V10M10 13.3333H10.0083M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#00C566" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>

                                <span 
                                    style={{
                                        color: '#00C566',
                                        fontSize: '12px'
                                    }}>
                                    Paid doesn't sell personal info, and will only use it with your permission
                                </span>
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

                <Botao titulo='Continue' caminho='/sis/paymentPage2'/>
            
            </div>
            
        </>
    );
}

export default PaymentPage1
