'use client'
import { useState } from 'react';
import NavBar from "@/components/navBar";
import Image from "next/image";
import Menu from '@/components/menu';
import Lista from '@/components/lista';
import VisualTopo from '@/components/visualTopo';
import ListaCheck from '@/components/listaCheck';

let ManegeToken = () => {

    return (
        <>
            {/* <NavBar /> */}

            <div className="bg-white flex flex-col w-full visualTablet border-tablet"
                style={{
                    // paddingTop: '90px'
                }}>

                <VisualTopo tipo='1' titulo='Menage Token' caminhoVoltar='/sis/paymentMethod' />

                <div
                    className="rounded-2 flex-1 bg-white flex flex-col justify-center items-center sm:py-8 sm:px-4"
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
                                placeholder="Search..."
                                style={{
                                    width: '327px',
                                    height: '52px',
                                    backgroundColor: '#F6F8FE'
                                }}
                            />
                            <div className="pr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M13.0409 10.281C14.3279 10.281 15.3749 11.3227 15.3749 12.603C15.3749 13.8832 14.3279 14.925 13.0409 14.925C11.7532 14.925 10.7054 13.8832 10.7054 12.603C10.7054 11.3227 11.7532 10.281 13.0409 10.281ZM13.0409 11.406C12.3734 11.406 11.8304 11.943 11.8304 12.603C11.8304 13.2637 12.3734 13.8 13.0409 13.8C13.7077 13.8 14.2499 13.2637 14.2499 12.603C14.2499 11.943 13.7077 11.406 13.0409 11.406ZM7.56023 12.0696C7.87072 12.0696 8.12273 12.3216 8.12273 12.6321C8.12273 12.9426 7.87072 13.1946 7.56023 13.1946H2.83447C2.52397 13.1946 2.27197 12.9426 2.27197 12.6321C2.27197 12.3216 2.52397 12.0696 2.83447 12.0696H7.56023ZM4.58475 3C5.8725 3 6.9195 4.0425 6.9195 5.32275C6.9195 6.603 5.8725 7.644 4.58475 7.644C3.29775 7.644 2.25 6.603 2.25 5.32275C2.25 4.0425 3.29775 3 4.58475 3ZM4.58475 4.125C3.918 4.125 3.375 4.662 3.375 5.32275C3.375 5.98275 3.918 6.519 4.58475 6.519C5.25225 6.519 5.7945 5.98275 5.7945 5.32275C5.7945 4.662 5.25225 4.125 4.58475 4.125ZM14.3933 4.8003C14.7038 4.8003 14.9558 5.0523 14.9558 5.3628C14.9558 5.6733 14.7038 5.9253 14.3933 5.9253H9.66832C9.35782 5.9253 9.10582 5.6733 9.10582 5.3628C9.10582 5.0523 9.35782 4.8003 9.66832 4.8003H14.3933Z" fill="#111111" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <ListaCheck/>


                </div>

                <div class="overlay borderPhone"></div>

            </div>

        </>
    );
}

export default ManegeToken;
