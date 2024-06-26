'use client'
import { useState } from 'react';
import NavBar from "@/components/navBar";
import VisualTopo from '@/components/visualTopo';

export default function Home() {

    let [isModalOpen, setIsModalOpen] = useState(false);
    let [selectedLanguage, setSelectedLanguage] = useState('');

    let openModal = () => {
        setIsModalOpen(true);
    };

    let closeModal = () => {
        setIsModalOpen(false);
    };

    let handleSelect = (event) => {
        setSelectedLanguage(event.target.value);
        closeModal();
    };

    let getLabelByValue = (value) => {
        let language = languages.find(lang => lang.value === value);
        return language ? language.label : 'Select';
    };

    let languages = [
        { value: 'en-uk', label: 'English (UK)' },
        { value: 'en', label: 'English' },
        { value: 'id', label: 'Bahasa Indonesia' },
        { value: 'zh', label: 'Chinese' },
        { value: 'hr', label: 'Croatian' },
        { value: 'cs', label: 'Czech' },
        { value: 'da', label: 'Danish' },
        { value: 'fil', label: 'Filipino' },
        { value: 'fi', label: 'Finland' }
    ];

    return (
        <>
            {/* <NavBar /> */}

            <div className="bg-white flex flex-col w-full visualTablet border-tablet">
                <div className="flex-1 relative flex flex-col items-center" style={{ marginTop: '150px' }}>
                    <div className="text-center">
                        <h5 className="font-bold" style={{ fontSize: '24px', fontWeight: 700 }}>
                            Select your Language
                        </h5>
                        <p className="text-gray-700 my-3" style={{ fontSize: '14px', width: '307px', margin: '0 auto' }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </div>

                    <div className='w-full flex flex-col items-center my-5'>
                        <label className="block text-gray-700 mb-2" style={{ marginRight: '220px' }}>
                            Language
                        </label>
                        <input
                            type="text"
                            placeholder="Select"
                            value={selectedLanguage ? getLabelByValue(selectedLanguage) : "Select"}
                            onClick={openModal}
                            readOnly
                            className="block w-full max-w-xs rounded-lg border border-gray-300 p-2.5 mb-4"
                            style={{
                                height: "52px",
                                borderRadius: '24px',
                                backgroundColor: '#F6F8FE'
                            }}
                        />
                        {isModalOpen && (
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                                style={{
                                    zIndex: 1050
                                }}>
                                <div className="bg-white w-full h-full p-4 overflow-y-auto relative">

                                    <button
                                        onClick={closeModal}
                                        className="absolute top-4 left-4 p-2"
                                        aria-label="Close"
                                    >
                                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle opacity="0.08" cx="24" cy="24" r="24" fill="#111111"/>
                                            <g clip-path="url(#clip0_65_400)">
                                            <path d="M25.4099 23.9999L29.7099 19.7099C29.8982 19.5216 30.004 19.2662 30.004 18.9999C30.004 18.7336 29.8982 18.4782 29.7099 18.2899C29.5216 18.1016 29.2662 17.9958 28.9999 17.9958C28.7336 17.9958 28.4782 18.1016 28.2899 18.2899L23.9999 22.5899L19.7099 18.2899C19.5216 18.1016 19.2662 17.9958 18.9999 17.9958C18.7336 17.9958 18.4782 18.1016 18.2899 18.2899C18.1016 18.4782 17.9958 18.7336 17.9958 18.9999C17.9958 19.2662 18.1016 19.5216 18.2899 19.7099L22.5899 23.9999L18.2899 28.2899C18.1962 28.3829 18.1218 28.4935 18.071 28.6154C18.0203 28.7372 17.9941 28.8679 17.9941 28.9999C17.9941 29.132 18.0203 29.2627 18.071 29.3845C18.1218 29.5064 18.1962 29.617 18.2899 29.7099C18.3829 29.8037 18.4935 29.8781 18.6154 29.9288C18.7372 29.9796 18.8679 30.0057 18.9999 30.0057C19.132 30.0057 19.2627 29.9796 19.3845 29.9288C19.5064 29.8781 19.617 29.8037 19.7099 29.7099L23.9999 25.4099L28.2899 29.7099C28.3829 29.8037 28.4935 29.8781 28.6154 29.9288C28.7372 29.9796 28.8679 30.0057 28.9999 30.0057C29.132 30.0057 29.2627 29.9796 29.3845 29.9288C29.5064 29.8781 29.617 29.8037 29.7099 29.7099C29.8037 29.617 29.8781 29.5064 29.9288 29.3845C29.9796 29.2627 30.0057 29.132 30.0057 28.9999C30.0057 28.8679 29.9796 28.7372 29.9288 28.6154C29.8781 28.4935 29.8037 28.3829 29.7099 28.2899L25.4099 23.9999Z" fill="#111111"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_65_400">
                                            <rect width="24" height="24" fill="white" transform="translate(12 12)"/>
                                            </clipPath>
                                            </defs>
                                        </svg>

                                    </button>

                                    <h2 
                                        className="text-lg mb-4 text-center my-2" 
                                        style={{ fontSize: '18px', fontWeight: 700 }}>
                                            Select a Language
                                    </h2>

                                    <div className="flex flex-col items-center my-5">
                                        {languages.map((language) => (
                                            <label 
                                                key={language.value} 
                                                className="w-full max-w-md flex items-center p-2 mb-2 rounded-full border border-gray-300 "
                                                style={{
                                                    backgroundColor: '#f8f8ff',
                                                    fontSize: '16px',
                                                    fontWeight: 600
                                                }}>
                                                <input
                                                    type="radio"
                                                    name="language"
                                                    value={language.value}
                                                    checked={selectedLanguage === language.value}
                                                    onChange={handleSelect}
                                                    className="mr-2"
                                                    
                                                />
                                                {language.label}
                                            </label>
                                        ))}
                                    </div>
                                    
                                </div>
                                
                            </div>
                        )}
                    </div>
                </div>

                <nav className="text-gray-700 p-4 shadow-top absolute bottom-0 left-0 w-full">
                    <div className="text-center flex justify-center items-center">
                        <button style={{
                            width: '325px',
                            height: '55px',
                            borderRadius: '24px',
                            backgroundColor: '#0354EA',
                            color: 'white'
                        }}>
                            Continue
                        </button>
                    </div>
                </nav>
                <div class="overlay borderPhone"></div>
            </div>
        </>
    );
}
