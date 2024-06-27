'use client'
import { useState } from 'react';
import NavBar from "@/components/navBar";
import VisualTopo from '@/components/visualTopo';
import Botao from '@/components/botao';

let ChangePassword = () => {

    let [showPassword, setShowPassword] = useState(false);
    let [password, setPassword] = useState('');
    let [passwordValid, setPasswordValid] = useState(false);

    let togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    let handleChangePassword = (e) => {
        let newPassword = e.target.value;
        setPassword(newPassword);

        // Validar a senha
        let hasValidLength = newPassword.length >= 8;
        let hasSpecialCharacter = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(newPassword);
        
        // Definir validade da senha
        setPasswordValid(hasValidLength && hasSpecialCharacter);
    };

    return (
        <>
            <NavBar />
            
            <div className="min-h-screen flex bg-white flex-col w-full "
                style={{
                    paddingBottom: '45px',
                    paddingTop: '80px'
                }}>

                <VisualTopo tipo='1' titulo='Change Password' caminhoVoltar='/sis/profile'/>  

                <div 
                    className="rounded-2 flex-1 flex flex-col justify-center items-center sm:py-8 sm:px-4" 
                    data-bs-spy="scroll" 
                    data-bs-smooth-scroll="true" 
                    tabIndex="0"
                    style={{
                        overflowY: 'auto',
                    }}>

                    <div 
                        className='text-center'
                        style={{
                            width: '327px',
                            heigth: '58px',
                            fontWeight: 500,
                            marginTop: '-50px',
                            marginBottom: '50px'
                        }}>

                        <h5 style={{
                            fontSize: '18px'
                            
                        }}>
                            The new password must be different from the current password
                        </h5>
                    </div>

                    <div className="w-full max-w-xs">

                        <div className="relative">
                            <span className="block text-gray-700 mb-2">Password</span>

                            <div className="relative">
                                <input
                                    placeholder="Enter your password"
                                    className={`block w-full rounded-lg border ${password.length >= 8 ? 'border-green-500' : 'border-gray-300'} p-2.5 mb-2`}
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    value={password}
                                    onChange={handleChangePassword}
                                    style={{ 
                                        maxWidth: "327px", 
                                        height: "52px",
                                        borderRadius: '24px',
                                        backgroundColor: '#F6F8FE'
                                    }}
                                />
                                <button type="button" className="absolute top-1/2 right-2 transform -translate-y-1/2 focus:outline-none" onClick={togglePasswordVisibility}>
                                    {showPassword ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-slash-fill text-gray-500" viewBox="0 0 16 16">
                                        <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z"/>
                                        <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z"/>
                                    </svg>
                                    ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-fill text-gray-500" viewBox="0 0 16 16">
                                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                                        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                                    </svg>
                                    )}
                                </button>
                            </div>

                            <div className="flex items-center mt-1">
                                {password.length >= 8 ? (
                                    <>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M8.33266 12.9882L5.58849 10.2441L4.41016 11.4224L8.33266 15.3449L16.4218 7.25573L15.2435 6.07739L8.33266 12.9882Z" fill="#00C566"/>
                                        </svg>
                                        <span className="text-sm text-green-500 ml-2">Password is valid</span>
                                    </>
                                ) : (
                                    <>
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M14.647 14.6469L10.0001 10.0001L5.35329 14.6469L4.64648 13.9397L9.29329 9.29289L4.64648 4.64608L5.35329 3.93887L10.0001 8.58568L14.647 3.93887L15.3538 4.64608L10.7069 9.29289L15.3538 13.9397L14.647 14.6469Z"
                                                fill="#FF0000"
                                            />
                                        </svg>
                                        <span className="text-sm text-red-500 ml-2">There must be at least 8 characters</span>
                                    </>
                                )}
                            </div>


                            <div className="flex items-center mt-1">
                                {/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password) ? (
                                    <>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M8.33266 12.9882L5.58849 10.2441L4.41016 11.4224L8.33266 15.3449L16.4218 7.25573L15.2435 6.07739L8.33266 12.9882Z" fill="#00C566"/>
                                        </svg>
                                        <span className="text-sm text-green-500 ml-2">Contains special characters</span>
                                    </>
                                ) : (
                                    <>
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M14.647 14.6469L10.0001 10.0001L5.35329 14.6469L4.64648 13.9397L9.29329 9.29289L4.64648 4.64608L5.35329 3.93887L10.0001 8.58568L14.647 3.93887L15.3538 4.64608L10.7069 9.29289L15.3538 13.9397L14.647 14.6469Z"
                                                fill="#FF0000"
                                            />
                                        </svg>
                                        <span className="text-sm text-red-500 ml-2">There must be a unique code like @!#</span>
                                    </>
                                )}
                            </div>

                        
                        </div>

                        <div className="relative">
                            <span className="block text-gray-700 mb-2">Confirm Password</span>
                            <div className="relative">
                                <input
                                    placeholder="Enter your password"
                                    className="block w-full rounded-lg border border-gray-300 p-2.5 mb-4"
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    style={{ 
                                        maxWidth: "327px", 
                                        height: "52px",
                                        borderRadius: '24px',
                                        backgroundColor: '#F6F8FE'
                                    }}
                                />
                                <button type="button" className="absolute top-1/2 right-2 transform -translate-y-1/2 focus:outline-none" onClick={togglePasswordVisibility}>
                                    {showPassword ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                                        <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z"/>
                                        <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z"/>
                                    </svg>
                                    ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                                        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                                    </svg>
                                    )}
                                </button>
                            </div>
                        </div>
        
                    </div> 
                </div>

                <Botao titulo='Submit'/>
            
            </div>
            
        </>
    );
}

export default ChangePassword
