'use client'
import { useState } from 'react';
import NavBar from "@/components/navBar";
import Image from "next/image";
import Menu from '@/components/menu';
import Lista from '@/components/lista';
import VisualTopo from '@/components/visualTopo';
import Contatos from '@/components/contact';

let Transfer = () => {

    return (
        <>
            <NavBar />

            <div className="min-h-screen bg-white flex flex-col w-full"
                style={{
                    paddingTop: '90px'
                }}>

                <VisualTopo tipo='1' titulo='Select Contact' caminhoVoltar='/sis/buyTokenPage2'/>

                <div
                    className="rounded-2 flex-1 bg-white flex flex-col  items-center sm:py-8 sm:px-4"
                    data-bs-spy="scroll"
                    data-bs-smooth-scroll="true"
                    tabIndex="0"
                    style={{
                        overflowY: 'auto',
                    }}>


                    <div className="relative ">
                        <div className="flex items-center rounded-full"
                            style={{
                                width: '327px',
                                height: '52px',
                                backgroundColor: '#F6F8FE'
                            }}>

                            <div className="pl-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.80425 1.5C12.8317 1.5 16.1078 4.776 16.1078 8.8035C16.1078 10.7037 15.3785 12.4367 14.1852 13.7374L16.5333 16.0805C16.7531 16.3003 16.7538 16.6558 16.534 16.8755C16.4246 16.9865 16.2798 17.0413 16.1358 17.0413C15.9925 17.0413 15.8485 16.9865 15.7383 16.877L13.3619 14.5073C12.1118 15.5084 10.5268 16.1077 8.80425 16.1077C4.77675 16.1077 1.5 12.831 1.5 8.8035C1.5 4.776 4.77675 1.5 8.80425 1.5ZM8.80425 2.625C5.397 2.625 2.625 5.39625 2.625 8.8035C2.625 12.2108 5.397 14.9827 8.80425 14.9827C12.2108 14.9827 14.9828 12.2108 14.9828 8.8035C14.9828 5.39625 12.2108 2.625 8.80425 2.625Z" fill="#9CA4AB" />
                                </svg>
                            </div>

                            <input
                                type="text"
                                className="py-2 pr-8 pl-4 w-full rounded-full outline-none placeholder-gray-400"
                                placeholder="Transfer to wallet"
                                style={{
                                    width: '327px',
                                    height: '52px',
                                    backgroundColor: '#F6F8FE'
                                }}
                            />

                            <div className="pr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#b3b3b3" className="bi bi-wallet2 " viewBox="0 0 16 16">
                                    <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z"/>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 bg-white relative  sm:py-8 sm:px-4">
                        <div className="w-full mt-3 px-4 flex  ">
                            <h5 className="m-0"><strong>Last Contact</strong></h5>
                        </div>

                        <Contatos/>
                    </div>

                </div>

            </div>

        </>
    );
}

export default Transfer;
