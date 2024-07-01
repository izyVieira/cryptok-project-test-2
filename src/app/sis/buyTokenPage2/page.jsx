'use client'
import { useState } from 'react';
import NavBar from "@/components/navBar";
import VisualTopo from '@/components/visualTopo';
import Botao from '@/components/botao';

let BuyTokenPage2 = () => {
    const [selectedOption, setSelectedOption] = useState('buy');
    const [selectedCurrency, setSelectedCurrency] = useState('USDT');
    const [selectedCurrency2, setSelectedCurrency2] = useState('BTC');

    const handleButtonClick = (option) => {
        setSelectedOption(option);
    };

    const handleCurrencyChange = (event) => {
        setSelectedCurrency(event.target.value);
    };

    const handleCurrencyChange2 = (event) => {
        setSelectedCurrency2(event.target.value);
    };

    const currencies = [
        { 
            name: 'USDT', 
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M31.5177 19.8705C29.3808 28.442 20.6992 33.6584 12.1267 31.521C3.55778 29.3841 -1.65868 20.702 0.479177 12.1312C2.61515 3.5587 11.2967 -1.65814 19.8666 0.478775C28.4385 2.61569 33.6546 11.2987 31.5175 19.8706L31.5176 19.8705H31.5177Z" fill="#50AF95"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M18.0239 17.8139V17.8139C17.9108 17.8224 17.3262 17.8573 16.0224 17.8573C14.9853 17.8573 14.249 17.8262 13.9907 17.8139V17.8139C9.98288 17.6376 6.99141 16.94 6.99141 16.1047C6.99141 15.2693 9.98288 14.5726 13.9907 14.3935V17.1191C14.2528 17.138 15.0032 17.1823 16.0403 17.1823C17.2848 17.1823 17.9079 17.1304 18.0201 17.12V14.3954C22.0194 14.5736 25.0043 15.2712 25.0043 16.1047C25.0043 16.9381 22.0204 17.6357 18.0201 17.813V17.813L18.0239 17.8139ZM18.0239 14.1135V11.6745H23.6052V7.9552H8.40936V11.6745H13.9897V14.1125C9.45397 14.3209 6.04297 15.2194 6.04297 16.296C6.04297 17.3727 9.45397 18.2702 13.9897 18.4795V26.2952H18.023V18.4767C22.5483 18.2683 25.9537 17.3708 25.9537 16.2951C25.9537 15.2194 22.5512 14.3218 18.023 14.1125V14.1125L18.0239 14.1135Z" fill="white"/>
                </svg>
            )
        },
        { 
            name: 'BTC', 
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M31.5213 19.8705C29.3841 28.442 20.7016 33.6584 12.1281 31.521C3.55818 29.3841 -1.65886 20.702 0.479231 12.1312C2.61545 3.5587 11.298 -1.65814 19.8688 0.478775C28.4417 2.61569 33.6584 11.2987 31.521 19.8706L31.5212 19.8705H31.5213Z" fill="#F7931A"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M23.0571 13.7203C23.3756 11.591 21.7543 10.4465 19.5374 9.68293L20.2566 6.79867L18.5007 6.36118L17.8006 9.1695C17.3389 9.05438 16.8649 8.94591 16.3937 8.83838L17.0989 6.01152L15.344 5.57404L14.6245 8.45735C14.2425 8.37039 13.8673 8.28444 13.5032 8.19388L13.5053 8.1848L11.0838 7.58019L10.6167 9.45543C10.6167 9.45543 11.9195 9.75402 11.892 9.7724C12.6031 9.94985 12.7317 10.4205 12.7103 10.7935L11.8911 14.0794C11.94 14.0918 12.0035 14.1098 12.0736 14.138L12.0226 14.1252L12.0225 14.1252C11.9792 14.1144 11.9342 14.1031 11.888 14.0921L10.7397 18.6951C10.6528 18.9111 10.4323 19.2352 9.93514 19.1121C9.95274 19.1376 8.6589 18.7937 8.6589 18.7937L7.78711 20.8034L10.0722 21.373C10.3224 21.4358 10.5697 21.5002 10.8145 21.564C10.9855 21.6086 11.1553 21.6529 11.3241 21.696L10.5975 24.6133L12.3514 25.0508L13.0709 22.1645C13.5501 22.2945 14.0151 22.4145 14.4703 22.5276L13.7531 25.4003L15.5092 25.8378L16.2357 22.926C19.2299 23.4926 21.4814 23.2641 22.429 20.5561C23.1926 18.3759 22.391 17.1183 20.8158 16.2983C21.9631 16.0337 22.8273 15.2792 23.0577 13.7205L23.0572 13.7201L23.0571 13.7203ZM19.0444 19.3453C18.5466 21.3456 15.4152 20.5186 13.9825 20.1402C13.8536 20.1062 13.7385 20.0758 13.6402 20.0514L14.6045 16.1864C14.7242 16.2163 14.8705 16.2491 15.0362 16.2863L15.0362 16.2863C16.5182 16.6189 19.5545 17.3002 19.0445 19.3453H19.0444ZM15.3344 14.4925C16.5288 14.8113 19.1346 15.5066 19.5884 13.6886H19.5885C20.0519 11.8292 17.5196 11.2686 16.2828 10.9948C16.1437 10.964 16.0209 10.9369 15.9207 10.9119L15.0465 14.4172C15.129 14.4377 15.2259 14.4636 15.3344 14.4925Z" fill="white"/>
                </svg>
            )
        },
        { 
            name: 'ETH', 
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <circle cx="20" cy="20" r="20" fill="#EDF0F4"/>
                    <path d="M19.9443 8L19.7852 8.54043V24.221L19.9443 24.3797L27.2229 20.0773L19.9443 8Z" fill="#343434"/>
                    <path d="M19.9448 8L12.666 20.0773L19.9448 24.3797V16.7688V8Z" fill="#8C8C8C"/>
                    <path d="M19.9451 25.7578L19.8555 25.8671V31.4528L19.9451 31.7146L27.2282 21.4576L19.9451 25.7578Z" fill="#3C3C3B"/>
                    <path d="M19.9448 31.7146V25.7578L12.666 21.4576L19.9448 31.7146Z" fill="#8C8C8C"/>
                    <path d="M19.9453 24.3797L27.2239 20.0773L19.9453 16.7688V24.3797Z" fill="#141414"/>
                    <path d="M12.666 20.0773L19.9448 24.3797V16.7688L12.666 20.0773Z" fill="#393939"/>
                </svg>
            ) 
        },
        { 
            name: 'LTC', 
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <circle cx="20.1673" cy="19.8333" r="17.8333" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 20C0 8.95431 8.95427 0 19.9999 0H20.1161C25.405 0.0153897 30.4712 2.13118 34.2001 5.88191C37.929 9.63264 40.0153 14.7111 39.9998 20C39.9998 31.0457 31.0456 40 19.9999 40C8.95427 40 0 31.0457 0 20ZM18.2566 27.6997L20.3389 20.6779L23.5834 19.7578L24.2614 17.4334L21.0653 18.4019L24.4551 6.87648V6.69246C24.45 6.54345 24.386 6.40256 24.277 6.30082C24.168 6.19909 24.023 6.14486 23.874 6.15009H19.5641C19.2283 6.13974 18.9287 6.35945 18.8377 6.68278L14.8183 20.339L11.6222 21.3075L10.8958 23.5351L14.0919 22.5666L11.2348 32.3002H28.2807C28.6176 32.3141 28.9192 32.093 29.0071 31.7675L29.9757 28.4261V28.2421C29.9706 28.0931 29.9065 27.9522 29.7975 27.8505C29.6885 27.7487 29.5436 27.6945 29.3945 27.6997H18.2566Z" fill="#345D9D"/>
                </svg>
            )
        },
        { 
            name: 'USBC', 
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M20 40C31.0834 40 40 31.0834 40 20C40 8.9166 31.0834 0 20 0C8.9166 0 0 8.9166 0 20C0 31.0834 8.9166 40 20 40Z" fill="#2775CA"/>
                    <path d="M25.5006 23.1666C25.5006 20.25 23.7506 19.25 20.2506 18.8334C17.7506 18.5 17.2506 17.8334 17.2506 16.6666C17.2506 15.4998 18.084 14.75 19.7506 14.75C21.2506 14.75 22.084 15.25 22.5006 16.5C22.584 16.75 22.834 16.9166 23.084 16.9166H24.4172C24.7506 16.9166 25.0006 16.6666 25.0006 16.3334V16.25C24.6672 14.4166 23.1672 13 21.2506 12.8334V10.8334C21.2506 10.5 21.0006 10.25 20.584 10.1666H19.334C19.0006 10.1666 18.7506 10.4166 18.6672 10.8334V12.75C16.1672 13.0834 14.584 14.75 14.584 16.8334C14.584 19.5834 16.2506 20.6666 19.7506 21.0834C22.084 21.5 22.834 22 22.834 23.3334C22.834 24.6668 21.6672 25.5834 20.084 25.5834C17.9172 25.5834 17.1672 24.6666 16.9172 23.4166C16.834 23.0834 16.584 22.9166 16.334 22.9166H14.9172C14.584 22.9166 14.334 23.1666 14.334 23.5V23.5834C14.6672 25.6666 16.0006 27.1666 18.7506 27.5834V29.5834C18.7506 29.9166 19.0006 30.1666 19.4172 30.25H20.6672C21.0006 30.25 21.2506 30 21.334 29.5834V27.5834C23.834 27.1666 25.5006 25.4166 25.5006 23.1666V23.1666Z" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.33307 15.9166C5.91627 22.3334 9.24967 29.5834 15.7497 31.9166C15.9997 32.0834 16.2497 32.4166 16.2497 32.6666V33.8334C16.2497 34 16.2497 34.0834 16.1663 34.1666C16.0831 34.5 15.7497 34.6666 15.4163 34.5C10.7497 33 7.16627 29.4166 5.66627 24.75C3.16627 16.8334 7.49967 8.41657 15.4163 5.91657C15.4997 5.83337 15.6663 5.83337 15.7497 5.83337C16.0831 5.91657 16.2497 6.16657 16.2497 6.49997V7.66657C16.2497 8.08337 16.0831 8.33337 15.7497 8.49997C12.3331 9.74997 9.58307 12.4166 8.33307 15.9166ZM23.8331 6.24998C23.9163 5.91658 24.2497 5.74998 24.5831 5.91658C29.1663 7.41658 32.8331 11 34.3331 15.75C36.8331 23.6666 32.4997 32.0834 24.5831 34.5834C24.4997 34.6666 24.3331 34.6666 24.2497 34.6666C23.9163 34.5834 23.7497 34.3334 23.7497 34V32.8334C23.7497 32.4166 23.9163 32.1666 24.2497 32C27.6663 30.75 30.4163 28.0834 31.6663 24.5834C34.0831 18.1666 30.7497 10.9166 24.2497 8.58338C23.9997 8.41658 23.7497 8.08338 23.7497 7.74998V6.58338C23.7497 6.41658 23.7497 6.33338 23.8331 6.24998Z" fill="white"/>
                </svg>
            )
        },
    ];

    return (
        <>
            {/* <NavBar /> */}
            
            <div className="min-h-screen flex flex-col w-full visualTablet border-tablet"
                style={{
                    // paddingBottom: '135px',
                    // paddingTop: '80px'
                }}>

                <VisualTopo 
                    caminhoVoltar='/sis/buyToken'
                    tipo='1' 
                    titulo='Buy BTC/USDT'
                />
                <div 
                    className="rounded-2 flex-1 flex flex-col  items-center sm:py-8 sm:px-4" 
                    data-bs-spy="scroll" 
                    data-bs-smooth-scroll="true" 
                    tabindex="0"
                    style={{
                        overflowY: 'auto',
                    }}>

                    <div 
                        style={{
                            borderRadius: '28px',
                            width: '330px',
                            height: '245px',
                            justifyContent: 'center',
                        }}>

                        <div
                            style={{
                                borderRadius: '16px',
                                width: '327px',
                                height: '56px',
                                padding: '8px 4px',
                                flexShrink: 0,
                                justifyContent: 'center',
                                backgroundColor: '#F6F8FE',
                                alignItems: 'center'
                            }}>

                            <div className='d-flex'>
                                <button
                                    style={{
                                        display: 'flex',
                                        height: '40px',
                                        padding: '8px',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        gap: '10px',
                                        flex: '1 0 0',
                                        borderRadius: '12px',
                                        color: selectedOption === 'buy' ? '#0354EA' : '#9CA4AB',
                                        backgroundColor: selectedOption === 'buy' ? '#FEFEFE' : '#F6F8FE',
                                        boxShadow: '0px 0px 1px 0px rgba(113, 128, 150, 0.04), 0px 4px 8px 0px rgba(113, 128, 150, 0.08)'
                                    }}
                                    onClick={() => handleButtonClick('buy')}
                                >
                                    Buy
                                </button>

                                <button
                                    style={{
                                        display: 'flex',
                                        height: '40px',
                                        padding: '8px',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        gap: '10px',
                                        flex: '1 0 0',
                                        borderRadius: '8px',
                                        color: selectedOption === 'sell' ? '#0354EA' : '#9CA4AB',
                                        backgroundColor: selectedOption === 'sell' ? '#FEFEFE' : '#F6F8FE'
                                    }}
                                    onClick={() => handleButtonClick('sell')}
                                >
                                    Sell
                                </button>
                            </div>
                        </div>

                        <div className='bg-white mt-4'
                            style={{
                                borderRadius: '20px',
                                width: '320px',
                                height: '230px',
                                padding: '35px 0px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center', 
                                justifyContent: 'center', 
                                boxShadow: '0px 34px 250px -40px rgba(8, 9, 11, 0.16)'
                            }}>
                                
                            <div className="d-flex justify-content-between px-4 align-items-center" style={{ borderRadius: '16px', width: '300px', height: '64px', border: '1px solid #0354EA', backgroundColor: 'white' }}>
                                <div className="d-flex align-items-center">
                                    
                                    {currencies.find(curr => curr.name === selectedCurrency)?.svg}

                                    <select value={selectedCurrency} onChange={handleCurrencyChange} style={{ marginLeft: '10px', border: 'none', outline: 'none', fontSize: '16px', fontWeight: 700 }}>
                                        {currencies.map((currency, index) => (
                                            <option key={index} value={currency.name}>{currency.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mx-1 flex">
                                    <div>
                                        <h5 style={{ fontSize: '18px', fontWeight: 700, margin: 0 }}>
                                            <span>$</span>
                                            <input type="text" style={{ border: 'none', outline: 'none', fontSize: '18px', fontWeight: 700, marginLeft: '5px', width: '80px' }} />
                                        </h5>
                                    </div>
                                </div>
                            </div>

                            <div className="">
                                <svg width="289" height="70" viewBox="0 0 289 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_d_65_400)">
                                        <rect x="130" y="11" width="32" height="32" rx="16" fill="#0354EA"/>
                                        <rect x="128.5" y="9.5" width="35" height="35" rx="17.5" stroke="#D6DEFF" stroke-width="3"/>
                                        <path d="M140 25L142.667 22.3333M142.667 22.3333L145.333 25M142.667 22.3333V31.6666M152 29L149.333 31.6666M149.333 31.6666L146.667 29M149.333 31.6666V22.3333" stroke="#FEFEFE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </g>
                                    <line x1="174.5" y1="26.5" x2="288.5" y2="26.5" stroke="#E3E7EC" stroke-linecap="round"/>
                                    <line x1="0.5" y1="26.5" x2="114.5" y2="26.5" stroke="#E3E7EC" stroke-linecap="round"/>
                                    <defs>
                                        <filter id="filter0_d_65_400" x="113" y="0" width="70" height="70" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                            <feOffset dx="2" dy="8"/>
                                            <feGaussianBlur stdDeviation="8"/>
                                            <feComposite in2="hardAlpha" operator="out"/>
                                            <feColorMatrix type="matrix" values="0 0 0 0 0.298039 0 0 0 0 0.435294 0 0 0 0 1 0 0 0 0.16 0"/>
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_65_400"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_65_400" result="shape"/>
                                        </filter>
                                    </defs>
                                </svg>

                            </div>

                            <div className="d-flex justify-content-between px-4 align-items-center" style={{ borderRadius: '16px', width: '300px', height: '64px', border: '1px solid #0354EA', backgroundColor: 'white' }}>
                                <div className="d-flex align-items-center">
                                    
                                    {currencies.find(curr => curr.name === selectedCurrency2)?.svg}

                                    <select value={selectedCurrency2} onChange={handleCurrencyChange2} style={{ marginLeft: '10px', border: 'none', outline: 'none', fontSize: '16px', fontWeight: 700 }}>
                                        {currencies.map((currency, index) => (
                                            <option key={index} value={currency.name}>{currency.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mx-1 flex">
                                    <div>
                                        <h5 style={{ fontSize: '18px', fontWeight: 700, margin: 0 }}>
                                            <span>$</span>
                                            <input type="text" style={{ border: 'none', outline: 'none', fontSize: '18px', fontWeight: 700, marginLeft: '5px', width: '80px' }} />
                                        </h5>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div
                            style={{
                                borderRadius: '16px',
                                width: '327px',
                                height: '55px',
                                padding: '8px 4px',
                                flexShrink: 0,
                                justifyContent: 'center',
                                backgroundColor: 'white',
                                alignItems: 'center',
                                marginTop:'20px'
                            }}>

                            <div className="d-flex justify-content-between align-items-center px-4">

                                <div className="d-flex align-items-center">
                                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="40" height="40" rx="8" fill="#F6F8FE"/>
                                        <path d="M21 25.2267H21.8667C22.7333 25.2267 23.4533 24.4534 23.4533 23.52C23.4533 22.36 23.04 22.1334 22.36 21.8934L21.0133 21.4267V25.2267H21Z" fill="#0354EA"/>
                                        <path d="M19.9594 6.53335C12.5994 6.56001 6.63944 12.5467 6.6661 19.9067C6.69277 27.2667 12.6794 33.2267 20.0394 33.2C27.3994 33.1733 33.3594 27.1867 33.3328 19.8267C33.3061 12.4667 27.3194 6.52001 19.9594 6.53335ZM23.0128 20C24.0528 20.36 25.4528 21.1333 25.4528 23.52C25.4528 25.5733 23.8394 27.2267 21.8661 27.2267H20.9994V28C20.9994 28.5467 20.5461 29 19.9994 29C19.4528 29 18.9994 28.5467 18.9994 28V27.2267H18.5194C16.3328 27.2267 14.5594 25.3867 14.5594 23.12C14.5594 22.5733 15.0128 22.12 15.5594 22.12C16.1061 22.12 16.5594 22.5733 16.5594 23.12C16.5594 24.28 17.4394 25.2267 18.5194 25.2267H18.9994V20.72L16.9861 20C15.9461 19.64 14.5461 18.8667 14.5461 16.48C14.5461 14.4267 16.1594 12.7733 18.1328 12.7733H18.9994V12C18.9994 11.4533 19.4528 11 19.9994 11C20.5461 11 20.9994 11.4533 20.9994 12V12.7733H21.4794C23.6661 12.7733 25.4394 14.6133 25.4394 16.88C25.4394 17.4267 24.9861 17.88 24.4394 17.88C23.8928 17.88 23.4394 17.4267 23.4394 16.88C23.4394 15.72 22.5594 14.7733 21.4794 14.7733H20.9994V19.28L23.0128 20Z" fill="#0354EA"/>
                                        <path d="M16.5605 16.4933C16.5605 17.6533 16.9739 17.88 17.6539 18.12L19.0005 18.5866V14.7733H18.1339C17.2672 14.7733 16.5605 15.5466 16.5605 16.4933Z" fill="#0354EA"/>
                                    </svg>



                                    <div className='mx-1 flex'
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'flex-start',
                                            gap: '5px' 
                                        }}>
                                        <div style={{ marginRight: '5px' }}>
                                            <p className=''
                                                style={{
                                                    fontSize: '10px',
                                                    fontWeight: 400,
                                                    margin: 0 
                                                }}>
                                                Exchange fee
                                            </p>
                                            <h5 style={{
                                                fontSize: '18px',
                                                fontWeight: 700,
                                                margin: 0 
                                            }}>
                                                0.08%
                                            </h5>
                                        </div>
                                    </div>

                                </div>

                               <div className='mx-1 flex'
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        gap: '5px' 
                                    }}>
                                    <div style={{ marginRight: '5px' }}>
                                        <p className=''
                                            style={{
                                                fontSize: '10px',
                                                fontWeight: 400,
                                                margin: 0 
                                            }}>
                                            Gas Fee
                                        </p>
                                        <h5 style={{
                                            fontSize: '18px',
                                            fontWeight: 700,
                                            margin: 0 
                                        }}>
                                            <span style={{ color: '#888' }}>$</span> 32
                                        </h5>
                                    </div>
                                </div>

                            </div>
                            
                        </div>

                        <div className='my-2 text-center mb-5' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '288px'}}>
                            <p style={{ fontSize: '12px', color: '#333', margin: 0 }}>
                                Click here for <a href='#' style={{ color: 'blue', textDecoration: 'underline' }}>Terms & Conditions</a>. For this transaction fee will be taken.
                            </p>
                        </div>
           
                    </div>

                </div>

               
                <Botao 
                    titulo='Confirmation'
                    caminho='/sis/paymentPage1'
                />
            
            </div>
            
        </>
    );
}

export default BuyTokenPage2
