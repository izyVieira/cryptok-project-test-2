'use client'
import { useState } from 'react';
import NavBar from "@/components/navBar";
import VisualTopo from '@/components/visualTopo';
import Botao from '@/components/botao';

const PaymentMethodPage1 = () => {
    const [selectedMethod, setSelectedMethod] = useState('');

    const handleRadioChange = (event) => {
        setSelectedMethod(event.target.value);
    };

    return (
        <>
            <NavBar />
            <div className="min-h-screen flex flex-col bg-white w-full" style={{ paddingBottom: '45px', paddingTop: '80px' }}>
                <VisualTopo tipo='1' titulo='Payment' caminhoVoltar='/sis/paymentPage2'/>
                <div className="rounded-2 flex-1 flex flex-col justify-center items-center sm:py-8 sm:px-4" data-bs-spy="scroll" data-bs-smooth-scroll="true" tabIndex="0" style={{ overflowY: 'auto' }}>
                    <div style={{ width: '375px', padding: '30px', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', borderRadius: '20px 20px 0px 0px' }}>
                        <label className="flex items-center justify-between p-4 rounded-lg cursor-pointer" style={{ backgroundColor: '#f3f6fb' }}>
                            <div className="flex items-center">
                                <div className="w-10 h-10 p-2 mr-4 bg-gray-50 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M3 10H21M7 15H7.01M11 15H13M6 5H18C19.6569 5 21 6.34315 21 8V16C21 17.6569 19.6569 19 18 19H6C4.34315 19 3 17.6569 3 16V8C3 6.34315 4.34315 5 6 5Z" stroke="#111111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <div>
                                    <div className="font-medium text-gray-900">Debit Card</div>
                                    <div className="text-sm text-gray-500" style={{fontSize: '10px', width: '148px'}}>Deposit & Invest right from your debit card</div>
                                </div>
                            </div>
                            <input 
                                type="radio" 
                                name="paymentMethod" 
                                value="debitCard" 
                                checked={selectedMethod === 'debitCard'} 
                                onChange={handleRadioChange} 
                                className="radio-hidden" 
                            />
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${selectedMethod === 'debitCard' ? 'bg-blue-500' : 'bg-gray-200'}`}>
                                {selectedMethod === 'debitCard' && (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white">
                                        <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                )}
                            </div>
                        </label>

                        <label className="flex items-center justify-between p-4 rounded-lg my-2 mt-3 cursor-pointer" style={{ backgroundColor: '#f3f6fb' }}>
                            <div className="flex items-center">
                                <div className="w-10 h-10 p-2 mr-4 bg-gray-50 rounded-full">
                                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M3 21H21M3 10H21M5 6L12 3L19 6M4 10V21M20 10V21M8 14V17M12 14V17M16 14V17" stroke="#0354EA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <div>
                                    <div className="font-medium text-gray-900">Bank Link</div>
                                    <div className="text-sm text-gray-500" style={{fontSize: '10px', width: '148px'}}>Connect your bank account to deposit & withdraw funds</div>
                                </div>
                            </div>
                            <input 
                                type="radio" 
                                name="paymentMethod" 
                                value="bankLink" 
                                checked={selectedMethod === 'bankLink'} 
                                onChange={handleRadioChange} 
                                className="radio-hidden" 
                            />
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${selectedMethod === 'bankLink' ? 'bg-blue-500' : 'bg-gray-200'}`}>
                                {selectedMethod === 'bankLink' && (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white">
                                        <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                )}
                            </div>
                        </label>
                    </div>

                    <div style={{ width: '375px', padding: '30px', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', borderRadius: '20px 20px 0px 0px' }}>
                        <h3 style={{ fontSize: '18px', fontWeight: 600, alignSelf: 'stretch' }}>Another Payment</h3>
                        <label className="flex items-center justify-between p-4 rounded-lg my-2 cursor-pointer" style={{ backgroundColor: '#f3f6fb' }}>
                            <div className="flex items-center">
                                <div className="w-10 h-10 p-2 mr-4 bg-gray-50 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M17.5 7.2C19.2 8.2 20 10 20 12C20 14.5 17.5 16.5 15 16.5H12.4L11.8 20.1C11.7532 20.3293 11.6276 20.5349 11.4449 20.6811C11.2621 20.8272 11.0339 20.9047 10.8 20.9H8.1C8.02501 20.9015 7.95064 20.8861 7.88239 20.855C7.81415 20.8239 7.75378 20.7778 7.70577 20.7202C7.65775 20.6626 7.62331 20.5949 7.605 20.5222C7.58669 20.4494 7.58498 20.3735 7.6 20.3L7.8 18.9M10 13H12.5C15 13 17.5 10.5 17.5 8C17.5 5 15.6 3 12.5 3H7C6.5 3 6 3.5 6 4L4 18C4 18.5 4.5 19 5 19H7.8L9 14C9.1 13.4 9.4 13 10 13Z" stroke="#111111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <div>
                                    <div className="font-medium text-gray-900">PayPal</div>
                                    <div className="text-sm text-gray-500" style={{fontSize: '10px'}}>Connect your PayPal account</div>
                                </div>
                            </div>
                            <input 
                                type="radio" 
                                name="paymentMethod" 
                                value="paypal" 
                                checked={selectedMethod === 'paypal'} 
                                onChange={handleRadioChange} 
                                className="radio-hidden" 
                            />
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${selectedMethod === 'paypal' ? 'bg-blue-500' : 'bg-gray-200'}`}>
                                {selectedMethod === 'paypal' && (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white">
                                        <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                )}
                            </div>
                        </label>

                        <label className="flex items-center justify-between p-4 rounded-lg my-2 mt-3 cursor-pointer" style={{ backgroundColor: '#f3f6fb' }}>
                            <div className="flex items-center">
                                <div className="w-10 h-10 p-2 mr-4 bg-gray-50 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M9 6.99998C6 6.99998 5 9.99998 5 12.5C5 15.5 7 20 9 20C10.088 19.954 10.679 19.5 12 19.5C13.312 19.5 13.5 20 15 20C16.5 20 19 17 19 15C18.972 14.99 16.528 14.597 16.5 12C16.481 9.82998 18.916 9.04598 19 8.99998C17.977 7.50798 16.049 7.03698 15.5 6.99998C14.067 6.88898 12.67 7.99998 12 7.99998C11.32 7.99998 10.1 6.99998 9 6.99998Z" stroke="#111111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12 4C12.5304 4 13.0391 3.78929 13.4142 3.41421C13.7893 3.03914 14 2.53043 14 2C13.4696 2 12.9609 2.21071 12.5858 2.58579C12.2107 2.96086 12 3.46957 12 4Z" stroke="#111111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <div>
                                    <div className="font-medium text-gray-900">Apple Pay</div>
                                    <div className="text-sm text-gray-500" style={{fontSize: '10px'}}>Connect your Apple Pay account</div>
                                </div>
                            </div>
                            <input 
                                type="radio" 
                                name="paymentMethod" 
                                value="applePay" 
                                checked={selectedMethod === 'applePay'} 
                                onChange={handleRadioChange} 
                                className="radio-hidden" 
                            />
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${selectedMethod === 'applePay' ? 'bg-blue-500' : 'bg-gray-200'}`}>
                                {selectedMethod === 'applePay' && (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white">
                                        <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                )}
                            </div>
                        </label>
                    </div>
                </div>
                <Botao titulo='Continue' caminho='/sis/paymentMethod'/>
            </div>

        </>
    );
};

export default PaymentMethodPage1;
