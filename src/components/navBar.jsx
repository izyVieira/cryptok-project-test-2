import { useState } from "react";

let NavBar = () => {
    let [isOpen, setIsOpen] = useState(false);
    let [subPageOpen, setSubPageOpen] = useState({
        onboarding: false,
        signAuth: false
    });

    const toggleSubPage = (page) => {
        setSubPageOpen(prevState => ({
            ...prevState,
            [page]: !prevState[page]
        }));
    };

    return (
        <nav className="bg-gray-800 w-full fixed top-0 " style={{ zIndex: '1000' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <span className="text-white text-lg font-semibold">Cryptok</span>
                    <div className="flex">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        aria-controls="mobile-menu"
                        aria-expanded={isOpen ? "true" : "false"}
                    >
                        {!isOpen ? (
                        <svg
                            className="block h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                        ) : (
                        <svg
                            className="block h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                        )}
                    </button>
                    </div>
                </div>
            </div>
            
            {isOpen && (
            <div className="md:hidden bg-gray-800" id="mobile-menu">
                <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <li className="relative group">
                        <a
                        href="/"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium"
                        >
                        Splah Screen
                        </a>
                    </li>
                    <li className="relative group">
                        <button
                            onClick={() => toggleSubPage('onboarding')}
                            className="text-gray-300 hover:bg-gray-700 hover:text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium"
                            >
                        Onboarding
                        </button>
                        {subPageOpen.onboarding && (
                            <ul className="pl-5">
                                <li>
                                    <a
                                        href="/sis/onboarding"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        Onboarding
                                    </a>
                                </li>                    
                            </ul>
                        )}
                    </li>
                    <li className="relative group">
                        <button
                            onClick={() => toggleSubPage('signAuth')}
                            className="text-gray-300 hover:bg-gray-700 hover:text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium"
                            >
                        Sign & Auth
                        </button>
                        {subPageOpen.signAuth && (
                            <ul className="pl-5">
                                <li>
                                    <a
                                        href="/sis/login"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        Sign In
                                    </a>
                                </li>   

                                <li>
                                    <a
                                        href="/sis/signEmail"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        Sign In - Email
                                    </a>
                                </li>  

                                <li>
                                    <a
                                        href="/sis/createAccount"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium"
                                    >
                                       Create Account
                                    </a>
                                </li> 

                                <li>
                                    <a
                                        href="/sis/enterOtp"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium"
                                    >
                                       Enter OTP
                                    </a>
                                </li>   

                                <li>
                                    <a
                                        href="/sis/password/forgotPassword"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium"
                                    >
                                       Forgot Password 
                                    </a>
                                </li>  

                                <li>
                                    <a
                                        href="/sis/password/createPassword"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium"
                                    >
                                       Create Password 
                                    </a>
                                </li> 

                                <li>
                                    <a
                                        href="/sis/languange"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium"
                                    >
                                       Languange 
                                    </a>
                                </li>     

                            </ul>
                        )}
                    </li>

                    <li className="relative group">
                        <button
                            onClick={() => toggleSubPage('home')}
                            className="text-gray-300 hover:bg-gray-700 hover:text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium"
                            >
                        Home
                        </button>
                        {subPageOpen.home && (
                            <ul className="pl-5">
                                <li>
                                    <a
                                        href="/sis/home/homePage"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        Home
                                    </a>
                                </li>   

                                <li>
                                    <a
                                        href="/sis/portfolio"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        Portfolio Page 1
                                    </a>
                                </li>  

                                <li>
                                    <a
                                        href="/sis/portfolio-page2"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium"
                                    >
                                       Portfolio Page 2
                                    </a>
                                </li> 

                                <li>
                                    <a
                                        href="/sis/marketPage1"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium"
                                    >
                                       Market Page 1
                                    </a>
                                </li>   

                                <li>
                                    <a
                                        href="/sis/marketPage2"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium"
                                    >
                                       Market Page 2
                                    </a>
                                </li>  

                                <li>
                                    <a
                                        href="/sis/tokenDetail"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium"
                                    >
                                       Token Detail
                                    </a>
                                </li> 

                                <li>
                                    <a
                                        href="/sis/tokenDetailPage2"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium"
                                    >
                                       Token Detail Page 2
                                    </a>
                                </li> 

                                <li>
                                    <a
                                        href="/sis/buyToken"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium"
                                    >
                                       Buy Token
                                    </a>
                                </li> 

                                <li>
                                    <a
                                        href="/sis/buyTokenPage2"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium"
                                    >
                                       Buy Token Page 2
                                    </a>
                                </li> 

                                <li>
                                    <a
                                        href="/sis/selectToken"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium"
                                    >
                                       Select Token
                                    </a>
                                </li> 


                            </ul>
                        )}
                    </li>

                    <li className="relative group">
                        <button
                            onClick={() => toggleSubPage('home2')}
                            className="text-gray-300 hover:bg-gray-700 hover:text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium"
                            >
                        Home 2
                        </button>
                        {subPageOpen.home2 && (
                            <ul className="pl-5">
                                <li>
                                    <a
                                        href="/sis/paymentPage1"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium"
                                    >
                                       Payment
                                    </a>
                                </li> 

                                <li>
                                    <a
                                        href="/sis/paymentMethod"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium"
                                    >
                                       Payment Method
                                    </a>
                                </li> 

                                <li>
                                    <a
                                        href="/sis/manegeToken"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium"
                                    >
                                       Manege Token
                                    </a>
                                </li> 

                                <li>
                                    <a
                                        href="/sis/favoritePage1"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium"
                                    >
                                       Favorite Page 1
                                    </a>
                                </li> 

                                <li>
                                    <a
                                        href="/sis/favoritePage2"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium"
                                    >
                                       Favorite Page 2
                                    </a>
                                </li> 

                            </ul>
                        )}
                    </li>

                </ul>
            </div>
            )}
        </nav>
    );
};

export default NavBar;
