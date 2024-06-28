
'use client'
import { useState } from 'react';
import NavBar from "@/components/navBar";
import VisualTopo from '@/components/visualTopo';

let EnterOtp = () => {

    let [resendMessageVisible, setResendMessageVisible] = useState(false);
    let [showModal, setShowModal] = useState(false);

    let handleResendClick = () => {
        setResendMessageVisible(true);
        setTimeout(() => {
            setResendMessageVisible(false);
        }, 3000); 
    };

    let handleContinueClick = () => {
        setShowModal(true);
    };

    let handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <NavBar />
            <div className="min-h-screen pt-16 flex flex-col w-full">
                <VisualTopo caminhoVoltar='/sis/createAccountEmail'/>
                <div className="flex-1 bg-white flex flex-col justify-between items-center py-4 px-4 sm:py-8 sm:px-4">

                    <div className="text-account text-center mt-8">
                        <h5 className="title-account">Enter OTP</h5>
                        <p className="p-account">We have just sent you a 4-digit code via your email <strong>example@gmail.com</strong></p>
                    </div>

                    <div className="code-inputs flex justify-center">
                        <input type="text" maxLength="1" className="code-input" />
                        <input type="text" maxLength="1" className="code-input" />
                        <input type="text" maxLength="1" className="code-input" />
                        <input type="text" maxLength="1" className="code-input" />
                    </div>

                    <button
                        onClick={handleContinueClick}
                        className="w-full bg-blue-500 text-white rounded-lg p-2.5 "
                        style={{
                            maxWidth: "327px", 
                            height: "52px",
                            borderRadius: '24px',
                        }}>
                        Continue
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

            {/* Modal
            <div className={`modal fade ${showModal ? 'show d-block' : ''}`} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>Modal content goes here...</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
}

export default EnterOtp
