import { useRouter } from 'next/navigation';
import { useState } from 'react';

let Menu = () => {
    const [active, setActive] = useState('home');
    let router = useRouter()

    return (
        <nav className="bg-white text-gray-700 p-4 shadow-top fixed bottom-0 left-0 w-full">
            <div className="text-center flex justify-center items-center">
                {/* home */}
                <div className="text-center mx-4" 
                    onClick={() => {
                        setActive('home')
                        router.push('/sis/home/homePage')
                    }}
                    >
                    <svg className="icon-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={active === 'home' ? "#0354EA" : "#BFC6CC"}>
                        <path d="M9.13478 20.7733V17.7156C9.13478 16.9351 9.77217 16.3023 10.5584 16.3023H13.4326C13.8102 16.3023 14.1723 16.4512 14.4393 16.7163C14.7063 16.9813 14.8563 17.3408 14.8563 17.7156V20.7733C14.8539 21.0978 14.9821 21.4099 15.2124 21.6402C15.4427 21.8705 15.7561 22 16.0829 22H18.0438C18.9596 22.0023 19.8388 21.6428 20.4872 21.0008C21.1356 20.3588 21.5 19.487 21.5 18.5778V9.86686C21.5 9.13246 21.1721 8.43584 20.6046 7.96467L13.934 2.67587C12.7737 1.74856 11.1111 1.7785 9.98539 2.74698L3.46701 7.96467C2.87274 8.42195 2.51755 9.12064 2.5 9.86686V18.5689C2.5 20.4639 4.04738 22 5.95617 22H7.87229C8.55123 22 9.103 21.4562 9.10792 20.7822L9.13478 20.7733Z"/>
                    </svg>
                </div>
                {/* market */}
                <div className="text-center mx-4" onClick={() => {
                        setActive('market')
                        router.push('/sis/marketPage1')
                    }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={active === 'market' ? "#0354EA" : "#BFC6CC"}>
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.361 2C18.074 2 22.722 6.648 22.722 12.361C22.722 18.074 18.074 22.722 12.361 22.722C6.648 22.722 2 18.074 2 12.361C2 6.648 6.648 2 12.361 2ZM12.361 3.5C7.475 3.5 3.5 7.476 3.5 12.361C3.5 17.247 7.475 21.222 12.361 21.222C17.247 21.222 21.222 17.247 21.222 12.361C21.222 7.476 17.247 3.5 12.361 3.5ZM16.2326 8.4899C16.4296 8.6879 16.5016 8.9789 16.4176 9.2439L14.8256 14.3329C14.7526 14.5679 14.5676 14.7519 14.3336 14.8249L9.2446 16.4179C9.1706 16.4409 9.0946 16.4519 9.0206 16.4519C8.8246 16.4519 8.6326 16.3749 8.4896 16.2329C8.2926 16.0349 8.2206 15.7439 8.3046 15.4789L9.8976 10.3899C9.9706 10.1539 10.1546 9.9709 10.3886 9.8979L15.4776 8.3049C15.7446 8.2199 16.0346 8.2929 16.2326 8.4899ZM14.5586 10.1639L11.2116 11.2119L10.1646 14.5589L13.5106 13.5109L14.5586 10.1639Z"/>
                    </svg>
                </div>
                {/* qrcode */}
                <div className="text-center mx-4">
                    <div className={`flex justify-center items-center rounded-full w-12 h-12 ${active === 'qrcode' ? 'bg-blue-500' : 'bg-blue-500'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="26" viewBox="0 0 24 20" fill="#FEFEFE">
                            <path d="M18.125 1.25H22.5V5.625" stroke="#FEFEFE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M5.875 18.75H1.5V14.375" stroke="#FEFEFE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M22.5 14.375V18.75H18.125" stroke="#FEFEFE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M1.5 5.625V1.25H5.875" stroke="#FEFEFE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M6.75 5.625V14.375" stroke="#FEFEFE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M17.25 5.625V14.375" stroke="#FEFEFE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M13.75 5.625V14.375" stroke="#FEFEFE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M10.25 5.625V14.375" stroke="#FEFEFE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
                {/* favorite */}
                <div className="text-center mx-4" 
                    onClick={() => {
                        setActive('favorite')
                        router.push('/sis/favoritePage1')
                    }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={active === 'favorite' ? "#0354EA" : "#BFC6CC"}>
                        <path fillRule="evenodd" clipRule="evenodd" d="M19.84 18.1932C19.84 21.4892 15.32 21.8702 11.921 21.8702L11.6778 21.8699C9.5122 21.8647 4 21.728 4 18.1732C4 14.9444 8.33835 14.5129 11.7115 14.4967L12.1642 14.4964C14.3296 14.5016 19.84 14.6383 19.84 18.1932ZM11.921 15.9962C7.66 15.9962 5.5 16.7282 5.5 18.1732C5.5 19.6312 7.66 20.3702 11.921 20.3702C16.181 20.3702 18.34 19.6382 18.34 18.1932C18.34 16.7352 16.181 15.9962 11.921 15.9962ZM12.1642 13.0036L12.1394 13.0036C10.3842 12.9967 8.5 11.1192 8.5 8.25C8.5 5.37665 10.3797 3.5 12.75 3.5C15.1203 3.5 17 5.37665 17 8.25C17 11.1192 15.1158 12.9967 13.3606 13.0036L13.1642 13.0045L12.1642 13.0036ZM12.75 4.83333C11.3047 4.83333 9.75 6.08989 9.75 8.25C9.75 10.4101 11.3047 11.6667 12.75 11.6667C14.1953 11.6667 15.75 10.4101 15.75 8.25C15.75 6.08989 14.1953 4.83333 12.75 4.83333Z"/>
                    </svg>
                </div>
                {/* profile */}
                <div className="text-center mx-4" 
                    onClick={() => {
                        setActive('profile')
                        router.push('/sis/profile')
                    }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={active === 'profile' ? "#0354EA" : "#BFC6CC"}>
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C7.859 2 4.5 5.359 4.5 9.5C4.5 11.9212 5.56871 14.1086 7.29541 15.5363C4.1658 17.033 2 20.2838 2 24H3.5C3.5 20.4081 6.48698 17.5 10.0771 17.5H13.9229C17.513 17.5 20.5 20.4081 20.5 24H22C22 20.2838 19.8342 17.033 16.7046 15.5363C18.4313 14.1086 19.5 11.9212 19.5 9.5C19.5 5.359 16.141 2 12 2ZM12 3.5C15.59 3.5 18.5 6.41 18.5 10C18.5 13.59 15.59 16.5 12 16.5C8.41 16.5 5.5 13.59 5.5 10C5.5 6.41 8.41 3.5 12 3.5Z"/>
                    </svg>
                </div>
            </div>
        </nav>
    );
}

export default Menu;
