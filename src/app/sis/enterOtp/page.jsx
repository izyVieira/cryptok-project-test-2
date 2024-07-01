
'use client'
import { useState } from 'react';
import NavBar from "@/components/navBar";
import VisualTopo from '@/components/visualTopo';
import Link from 'next/link';

let EnterOtp = () => {

    let [resendMessageVisible, setResendMessageVisible] = useState(false);

    let handleResendClick = () => {
        setResendMessageVisible(true);
        setTimeout(() => {
            setResendMessageVisible(false);
        }, 3000); 
    };


    return (
        <>
            <NavBar />
            <div className="min-h-screen pt-16 flex bg-white flex-col w-full">
                <VisualTopo caminhoVoltar='/sis/createAccountEmail'/>
                <div className="flex-1 bg-white flex flex-col justify-between items-center py-4 px-4 sm:py-8 sm:px-4">

                    <div className="text-account text-center mt-8">
                        <h5 className="" style={{fontSize: '24px', fontWeight: 700}}>Enter OTP</h5>
                        <p className="p-account">We have just sent you a 4-digit code via your email <strong>example@gmail.com</strong></p>
                    </div>

                    <div className="code-inputs flex justify-center">
                        <input type="text" maxLength="1" className="code-input" />
                        <input type="text" maxLength="1" className="code-input" />
                        <input type="text" maxLength="1" className="code-input" />
                        <input type="text" maxLength="1" className="code-input" />
                    </div>

                    <button
                        className="w-full bg-blue-500 text-white rounded-lg p-2.5 "
                        style={{
                            maxWidth: "327px", 
                            height: "52px",
                            borderRadius: '24px',
                        }}>
                        <Link href={'/sis/home/homePage'}>
                            <span>Continue</span>
                        </Link>
                    </button>
            
                    <p className=" text-center">Didn't receive the code? 
                        
                        <span className="text-register text-primary" id="resendLink" onClick={handleResendClick}>Resend Code</span>
                        <br/>
                        {resendMessageVisible && (
                            <span id="resendMessage" className=" text-red-500">
                                Código enviado novamente
                            </span>
                        )}
                       
                    </p>

                     
                </div>
            </div>

        </>
    );
}

export default EnterOtp
