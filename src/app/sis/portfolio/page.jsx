'use client'
import { useState } from 'react';
import NavBar from "@/components/navBar";
import Image from "next/image";
import Menu from '@/components/menu';
import Lista from '@/components/lista';
import VisualTopo from '@/components/visualTopo';
import Botao from '@/components/botao';

let Portfolio = () => {

    return (
        <>
            <NavBar />
            
            <div className="min-h-screen flex flex-col w-full visualTablet border-tablet">

                <div 
                    className="flex-1 rounded-5 rounded-top-0 flex flex-col justify-center items-center sm:py-8 sm:px-4"
                    style={{
                        backgroundColor: '#171725',
                        color: 'white',
                        minHeight: '360px', 
                    }}>

                     <VisualTopo
                        caminhoVoltar='/sis/home/homePage' 
                        tipo='2' 
                        titulo='Portfolio'
                    />

                    <div 
                        style={{
                            width: '306px',
                            height: '110px',
                            position: 'relative',
                            bottom: '5px',
                        }}>

                        <div 
                            style={{
                                width: '327px',
                                height: '150px',
                                position: 'absolute',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                padding: '20px',
                                color: 'white',
                            }}>

                            <div style={{ position: 'relative', zIndex: '1' }}>

                                <div 
                                    style={{
                                        fontSize: '12px', 
                                        color: '#D1D8DD'
                                    }}>
                                    Portfolio value
                                </div>

                                <div className=''
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
                                        1.74% 
                                    </span>
                                </div>
                                
                            </div>

                        </div>
                        

                    </div>
                    
                    <div className="flex space-x-6">
                        <div className="bg-customBg flex h-16 py-3 px-4 items-center gap-3 rounded-lg text-white w-40 flex-1">
                            <div className="flex items-center justify-center bg-black rounded-full w-10 h-10 p-2.5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10 4.16669V15.8334M10 4.16669L15 9.16669M10 4.16669L5 9.16669" stroke="#33D49D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            </div>
                            <div className="flex flex-col items-start">
                            <div className="text-[12px] font-normal">Gain</div>
                            <div className="text-[14px] font-semibold">$234.11</div>
                            </div>
                        </div>
                        <div className="bg-customBg flex h-16 py-3 px-4 items-center gap-3 rounded-lg text-white w-40 flex-1">
                            <div className="flex items-center justify-center bg-black rounded-full w-10 h-10 p-2.5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10 15.8333L10 4.16665M10 15.8333L5 10.8333M10 15.8333L15 10.8333" stroke="#FF6B6B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            </div>
                            <div className="flex flex-col items-start">
                            <div className="text-[12px] font-normal">Loss</div>
                            <div className="text-[14px] font-semibold">$34.11</div>
                            </div>
                        </div>
                    </div>

                </div>

                <div style={{
                    maxHeight: '450px'
                }}
                    className="flex-1 bg-white flex flex-col justify-center items-center sm:py-8 sm:px-4" 
                    
                >
                    <div className="w-full mt-3 px-4 flex items-center justify-between ">
                        <h5 className="m-0"><strong>Token List</strong></h5>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.33753 11.8135C8.35968 11.8332 8.3806 11.8517 8.40152 11.8739C9.72945 13.235 10.4617 15.038 10.4617 16.9517V21.8549L13.2136 20.3559C13.4302 20.2377 13.5643 20.0064 13.5643 19.7516V16.937C13.5643 15.0306 14.2892 13.2338 15.6048 11.88L21.5578 5.54802C21.943 5.1382 22.1547 4.60038 22.1547 4.03302V2.88108C22.1547 2.31004 21.7042 1.84606 21.1529 1.84606H2.85104C2.29845 1.84606 1.84801 2.31004 1.84801 2.88108V4.03302C1.84801 4.60038 2.05969 5.1382 2.4449 5.54679L8.33753 11.8135ZM10.0273 24C9.77868 24 9.53254 23.9335 9.30855 23.8006C8.87534 23.5422 8.61567 23.0856 8.61567 22.5785V16.9517C8.61567 15.5549 8.09508 14.2393 7.1462 13.2313C7.1179 13.2079 7.08959 13.1821 7.06498 13.155L1.10097 6.81319C0.392087 6.06 0.00195312 5.07174 0.00195312 4.03302V2.88108C0.00195312 1.29224 1.28066 0 2.85104 0H21.1529C22.722 0 24.0007 1.29224 24.0007 2.88108V4.03302C24.0007 5.07051 23.6106 6.05754 22.9042 6.81196L16.9389 13.155C15.9507 14.174 15.4104 15.5143 15.4104 16.937V19.7516C15.4104 20.682 14.907 21.5337 14.0972 21.9767L10.6993 23.8277C10.4876 23.9422 10.2574 24 10.0273 24Z" fill="#111111"/>
                        </svg>
                    </div>

                    <Lista/>
                </div>

                <nav className="text-gray-700 p-4 bg-white shadow-top fixed bottom-0 left-0 w-full">
                    <div className="text-center flex justify-center items-center">
                        <button
                            className="w-full text-white rounded-lg p-2.5 "
                            style={{
                                maxWidth: "327px", 
                                height: "52px",
                                borderRadius: '24px',
                                backgroundColor: '#0354EA',
                                fontSize: '16px',
                                fontWeight: 600
                            }}
                        >
                            Add new Token
                        </button>

                    </div>
                </nav>
            
            </div>
            
        </>
    );
}

export default Portfolio
