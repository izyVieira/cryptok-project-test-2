'use client'
import { useState } from 'react';
import NavBar from "@/components/navBar";
import VisualTopo from '@/components/visualTopo';

let Termos = () => {

    let [selectedLanguage, setSelectedLanguage] = useState('');

    let handleLanguageChange = (event) => {
        setSelectedLanguage(event.target.value);
    };

    return (
        <>
            {/* <NavBar /> */}
            
            <div className="min-h-screen flex flex-col visualTablet border-tablet " s
            >
                
                <VisualTopo tipo='1' titulo='Language' caminhoVoltar='/sis/profile'/>  

                <div 
                    className="flex-1 flex flex-col items-center  mt-8 px-4"
                    style={{ maxWidth: '800px', margin: 'auto', }} 
                >
                    <div className="border border-gray-100 rounded-lg p-6 mb-4"
                        style={{width: '327px', height: '217px'}} >

                        <h2 className="text-lg mb-2"
                            style={{
                                fontWeight: 600,
                                fontSize: '12px',
                                color: '#66707A'
                            }}>
                            Suggested Languages
                        </h2>

                        <div className="flex flex-col items-start space-y-4">
                            <div className="flex items-center justify-between w-full">
                                
                                <label htmlFor="englishUK" className="cursor-pointer flex items-center space-x-2 w-full ">
                                    <input
                                        type="radio"
                                        id="englishUK"
                                        name="language"
                                        value="englishUK"
                                        checked={selectedLanguage === 'englishUK'}
                                        onChange={handleLanguageChange}
                                        className="sr-only"
                                    />
                                    <span className="text-black" 
                                        style={{
                                            fontWeight: 600,
                                            fontSize: '16px',
                                            color: 'black'
                                        }}> 
                                        English UK
                                    </span>
                                    {selectedLanguage === 'englishUK' && (
                                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                className="text-white"
                                            >
                                                <path
                                                    d="M5 13l4 4L19 7"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    )}
                                </label>
                            </div>

                            <hr className="w-full border-gray-200" />

                            <div className="flex items-center justify-between w-full">
                                <label htmlFor="engleshi" className="cursor-pointer flex items-center space-x-2 w-full">
                                    <input
                                        type="radio"
                                        id="engleshi"
                                        name="language"
                                        value="engleshi"
                                        checked={selectedLanguage === 'engleshi'}
                                        onChange={handleLanguageChange}
                                        className="sr-only"
                                    />
                                    
                                    <span className="text-black" 
                                        style={{
                                            fontWeight: 600,
                                            fontSize: '16px',
                                            color: 'black'
                                        }}> 
                                        English
                                    </span>

                                    {selectedLanguage === 'engleshi' && (
                                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                className="text-white"
                                            >
                                                <path
                                                    d="M5 13l4 4L19 7"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    )}
                                </label>
                            </div>
                            <hr className="w-full border-gray-200" />

                            <div className="flex items-center justify-between w-full">
                                <label htmlFor="bahasaIndonesia" className="cursor-pointer flex items-center space-x-2 w-full">
                                    <input
                                        type="radio"
                                        id="bahasaIndonesia"
                                        name="language"
                                        value="bahasaIndonesia"
                                        checked={selectedLanguage === 'bahasaIndonesia'}
                                        onChange={handleLanguageChange}
                                        className="sr-only"
                                    />

                                    <span className="text-black" 
                                        style={{
                                            fontWeight: 600,
                                            fontSize: '16px',
                                            color: 'black'
                                        }}> 
                                        Bahasa Indonesia
                                    </span>

                                    {selectedLanguage === 'bahasaIndonesia' && (
                                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                className="text-white"
                                            >
                                                <path
                                                    d="M5 13l4 4L19 7"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    )}
                                </label>
                            </div>
                            <hr className="w-full border-gray-200" />
                        </div>
                    </div>
                    
                    <div className="border border-gray-100 rounded-lg p-6 mb-4"
                        style={{width: '327px', height: '400px'}} >

                        <h2 className="text-lg mb-2"
                            style={{
                                fontWeight: 600,
                                fontSize: '12px',
                                color: '#66707A'
                            }}>
                            Other Languages
                        </h2>

                        <div className="flex flex-col items-start space-y-4">

                            <div className="flex items-center justify-between w-full">
                                <label htmlFor="chineses" className="cursor-pointer flex items-center space-x-2 w-full">
                                    <input
                                        type="radio"
                                        id="chineses"
                                        name="language"
                                        value="chineses"
                                        checked={selectedLanguage === 'chineses'}
                                        onChange={handleLanguageChange}
                                        className="sr-only"
                                    />

                                    <span className="text-black" 
                                        style={{
                                            fontWeight: 600,
                                            fontSize: '16px',
                                            color: 'black'
                                        }}> 
                                        Chineses
                                    </span>

                                    {selectedLanguage === 'chineses' && (
                                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                className="text-white"
                                            >
                                                <path
                                                    d="M5 13l4 4L19 7"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    )}
                                </label>
                            </div>
                            <hr className="w-full border-gray-200" />

                            <div className="flex items-center justify-between w-full">
                                <label htmlFor="Croatian" className="cursor-pointer flex items-center space-x-2 w-full">
                                    <input
                                        type="radio"
                                        id="Croatian"
                                        name="language"
                                        value="Croatian"
                                        checked={selectedLanguage === 'Croatian'}
                                        onChange={handleLanguageChange}
                                        className="sr-only"
                                    />
                                    
                                    <span className="text-black" 
                                        style={{
                                            fontWeight: 600,
                                            fontSize: '16px',
                                            color: 'black'
                                        }}> 
                                        Croatian
                                    </span>

                                    {selectedLanguage === 'Croatian' && (
                                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                className="text-white"
                                            >
                                                <path
                                                    d="M5 13l4 4L19 7"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    )}
                                </label>
                            </div>
                            <hr className="w-full border-gray-200" />

                            <div className="flex items-center justify-between w-full">
                                <label htmlFor="Czech" className="cursor-pointer flex items-center space-x-2 w-full">
                                    <input
                                        type="radio"
                                        id="Czech"
                                        name="language"
                                        value="Czech"
                                        checked={selectedLanguage === 'Czech'}
                                        onChange={handleLanguageChange}
                                        className="sr-only"
                                    />
                                    
                                    <span className="text-black" 
                                        style={{
                                            fontWeight: 600,
                                            fontSize: '16px',
                                            color: 'black'
                                        }}> 
                                        Czech
                                    </span>

                                    {selectedLanguage === 'Czech' && (
                                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                className="text-white"
                                            >
                                                <path
                                                    d="M5 13l4 4L19 7"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    )}
                                </label>
                            </div>

                            <hr className="w-full border-gray-200" />

                            <div className="flex items-center justify-between w-full">
                                <label htmlFor="Danish" className="cursor-pointer flex items-center space-x-2 w-full">
                                    <input
                                        type="radio"
                                        id="Danish"
                                        name="language"
                                        value="Danish"
                                        checked={selectedLanguage === 'Danish'}
                                        onChange={handleLanguageChange}
                                        className="sr-only"
                                    />

                                    <span className="text-black" 
                                        style={{
                                            fontWeight: 600,
                                            fontSize: '16px',
                                            color: 'black'
                                        }}> 
                                        Danish
                                    </span>

                                    {selectedLanguage === 'Danish' && (
                                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                className="text-white"
                                            >
                                                <path
                                                    d="M5 13l4 4L19 7"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    )}
                                </label>
                            </div>

                            <hr className="w-full border-gray-200" />

                            <div className="flex items-center justify-between w-full">
                                <label htmlFor="Filipino" className="cursor-pointer flex items-center space-x-2 w-full">
                                    <input
                                        type="radio"
                                        id="Filipino"
                                        name="language"
                                        value="Filipino"
                                        checked={selectedLanguage === 'Filipino'}
                                        onChange={handleLanguageChange}
                                        className="sr-only"
                                    />

                                    <span className="text-black" 
                                        style={{
                                            fontWeight: 600,
                                            fontSize: '16px',
                                            color: 'black'
                                        }}> 
                                        Filipino
                                    </span>

                                    {selectedLanguage === 'Filipino' && (
                                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                className="text-white"
                                            >
                                                <path
                                                    d="M5 13l4 4L19 7"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    )}
                                </label>
                            </div>

                            <hr className="w-full border-gray-200" />

                            <div className="flex items-center justify-between w-full">
                                <label htmlFor="Finland" className="cursor-pointer flex items-center space-x-2 w-full">
                                    <input
                                        type="radio"
                                        id="Finland"
                                        name="language"
                                        value="Finland"
                                        checked={selectedLanguage === 'Finland'}
                                        onChange={handleLanguageChange}
                                        className="sr-only"
                                    />

                                    <span className="text-black" 
                                        style={{
                                            fontWeight: 600,
                                            fontSize: '16px',
                                            color: 'black'
                                        }}> 
                                        Finland
                                    </span>

                                    {selectedLanguage === 'Finland' && (
                                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                className="text-white"
                                            >
                                                <path
                                                    d="M5 13l4 4L19 7"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    )}
                                </label>
                            </div>

                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
            
        </>
    );
}

export default Termos;
