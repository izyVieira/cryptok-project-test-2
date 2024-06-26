import { useRouter } from 'next/navigation';
import { useState } from 'react';

let Menu = (props) => {
    const [active, setActive] = useState(props.tela || '');
    let router = useRouter()

    return (
        <nav className="bg-white text-gray-700 p-4 shadow-top absolute bottom-0 left-0 w-full">
            <div className="text-center flex justify-center items-center">
                {/* home */}
                <div className="text-center mx-4" 
                    onClick={() => {
                        setActive('home')
                        router.push('/sis/home/homePage')
                    }}>
                    {active === 'home' || props.tela === 'home' 
                        ?
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M9.13478 20.7733V17.7156C9.13478 16.9351 9.77217 16.3023 10.5584 16.3023H13.4326C13.8102 16.3023 14.1723 16.4512 14.4393 16.7163C14.7063 16.9813 14.8563 17.3408 14.8563 17.7156V20.7733C14.8539 21.0978 14.9821 21.4099 15.2124 21.6402C15.4427 21.8705 15.7561 22 16.0829 22H18.0438C18.9596 22.0023 19.8388 21.6428 20.4872 21.0008C21.1356 20.3588 21.5 19.487 21.5 18.5778V9.86686C21.5 9.13246 21.1721 8.43584 20.6046 7.96467L13.934 2.67587C12.7737 1.74856 11.1111 1.7785 9.98539 2.74698L3.46701 7.96467C2.87274 8.42195 2.51755 9.12064 2.5 9.86686V18.5689C2.5 20.4639 4.04738 22 5.95617 22H7.87229C8.55123 22 9.103 21.4562 9.10792 20.7822L9.13478 20.7733Z" fill="#0354EA"/>
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='rgba(0, 0, 0, 0.00)'>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.717 15.2913C14.921 15.2913 15.901 16.2643 15.901 17.4603V20.5363C15.901 20.7933 16.107 20.9993 16.371 21.0053H18.277C19.779 21.0053 21 19.7993 21 18.3173V9.59325C20.993 9.08325 20.75 8.60325 20.333 8.28425L13.74 3.02625C12.855 2.32525 11.617 2.32525 10.729 3.02825L4.181 8.28225C3.748 8.61125 3.505 9.09125 3.5 9.61025V18.3173C3.5 19.7993 4.721 21.0053 6.223 21.0053H8.147C8.418 21.0053 8.638 20.7903 8.638 20.5263C8.638 20.4683 8.645 20.4103 8.657 20.3553V17.4603C8.657 16.2713 9.631 15.2993 10.826 15.2913H13.717ZM18.277 22.5053H16.353C15.251 22.4793 14.401 21.6143 14.401 20.5363V17.4603C14.401 17.0913 14.094 16.7913 13.717 16.7913H10.831C10.462 16.7933 10.157 17.0943 10.157 17.4603V20.5263C10.157 20.6013 10.147 20.6733 10.126 20.7413C10.018 21.7313 9.172 22.5053 8.147 22.5053H6.223C3.894 22.5053 2 20.6263 2 18.3173V9.60325C2.01 8.60925 2.468 7.69925 3.259 7.10025L9.794 1.85525C11.233 0.71525 13.238 0.71525 14.674 1.85325L21.256 7.10325C22.029 7.69225 22.487 8.60025 22.5 9.58225V18.3173C22.5 20.6263 20.606 22.5053 18.277 22.5053Z" fill="#BFC6CC"/>
                        </svg>
                    }
                    
                </div>
                {/* market */}
                <div className="text-center mx-4" onClick={() => {
                        setActive('market')
                        router.push('/sis/marketPage1')
                    }}>
                    {active === 'market' || props.tela === 'market' 
                        ?
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M11.9999 2.00012C17.5199 2.00012 21.9999 6.48012 21.9999 12.0001C21.9999 17.5301 17.5199 22.0001 11.9999 22.0001C6.46988 22.0001 1.99988 17.5301 1.99988 12.0001C1.99988 6.48012 6.46988 2.00012 11.9999 2.00012ZM15.8499 8.71012C15.9599 8.36012 15.6399 8.03012 15.2899 8.14012L10.1699 9.74012C9.95988 9.81012 9.78988 9.97012 9.72988 10.1801L8.12988 15.3101C8.01988 15.6501 8.34988 15.9801 8.68988 15.8701L13.7899 14.2701C13.9999 14.2101 14.1699 14.0401 14.2299 13.8301L15.8499 8.71012Z" fill="#0354EA"/>
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3608 2C18.0738 2 22.7218 6.648 22.7218 12.361C22.7218 18.074 18.0738 22.722 12.3608 22.722C6.64776 22.722 1.99976 18.074 1.99976 12.361C1.99976 6.648 6.64776 2 12.3608 2ZM12.3608 3.5C7.47476 3.5 3.49976 7.476 3.49976 12.361C3.49976 17.247 7.47476 21.222 12.3608 21.222C17.2468 21.222 21.2218 17.247 21.2218 12.361C21.2218 7.476 17.2468 3.5 12.3608 3.5ZM16.2324 8.4899C16.4294 8.6879 16.5014 8.9789 16.4174 9.2439L14.8254 14.3329C14.7524 14.5679 14.5674 14.7519 14.3334 14.8249L9.24436 16.4179C9.17036 16.4409 9.09436 16.4519 9.02036 16.4519C8.82436 16.4519 8.63236 16.3749 8.48936 16.2329C8.29236 16.0349 8.22036 15.7439 8.30436 15.4789L9.89736 10.3899C9.97036 10.1539 10.1544 9.9709 10.3884 9.8979L15.4774 8.3049C15.7444 8.2199 16.0344 8.2929 16.2324 8.4899ZM14.5584 10.1639L11.2114 11.2119L10.1644 14.5589L13.5104 13.5109L14.5584 10.1639Z" fill="#BFC6CC"/>
                        </svg>
                    }
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
                    {active === 'favorite' || props.tela === 'favorite' 
                        ?
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M8.27977 2.5007C8.90977 2.51986 9.51977 2.62986 10.1108 2.83086H10.1698C10.2098 2.84986 10.2398 2.87086 10.2598 2.88986C10.4808 2.96086 10.6898 3.04086 10.8898 3.15086L11.2698 3.32086C11.4198 3.40086 11.5998 3.54986 11.6998 3.61086C11.7998 3.66986 11.9098 3.73086 11.9998 3.79986C13.1108 2.95086 14.4598 2.49086 15.8498 2.5007C16.4808 2.5007 17.1108 2.58986 17.7098 2.79086C21.4008 3.99086 22.7308 8.04086 21.6198 11.5809C20.9898 13.3899 19.9598 15.0409 18.6108 16.3899C16.6798 18.2599 14.5608 19.9199 12.2798 21.3499L12.0298 21.5009L11.7698 21.3399C9.48077 19.9199 7.34977 18.2599 5.40077 16.3799C4.06077 15.0309 3.02977 13.3899 2.38977 11.5809C1.25977 8.04086 2.58977 3.99086 6.32077 2.76986C6.61077 2.66986 6.90977 2.59986 7.20977 2.56086H7.32977C7.61077 2.51986 7.88977 2.5007 8.16977 2.5007H8.27977ZM17.1898 5.66086C16.7798 5.51986 16.3298 5.74086 16.1798 6.16086C16.0398 6.58086 16.2598 7.04086 16.6798 7.18986C17.3208 7.42986 17.7498 8.06086 17.7498 8.75986V8.79086C17.7308 9.01986 17.7998 9.24086 17.9398 9.41086C18.0798 9.58086 18.2898 9.67986 18.5098 9.70086C18.9198 9.68986 19.2698 9.36086 19.2998 8.93986V8.82086C19.3298 7.41986 18.4808 6.15086 17.1898 5.66086Z" fill="#0354EA"/>
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2347 4.039C13.8607 3.011 16.0207 2.727 17.8867 3.325C21.9457 4.634 23.2057 9.059 22.0787 12.58C20.3397 18.11 12.9127 22.235 12.5977 22.408C12.4857 22.47 12.3617 22.501 12.2377 22.501C12.1137 22.501 11.9907 22.471 11.8787 22.41C11.5657 22.239 4.19271 18.175 2.39571 12.581L2.39471 12.58C1.26671 9.058 2.52271 4.632 6.57771 3.325C8.48171 2.709 10.5567 2.98 12.2347 4.039ZM7.03771 4.753C3.75671 5.811 2.93271 9.34 3.82371 12.123C5.22571 16.485 10.7647 20.012 12.2367 20.885C13.7137 20.003 19.2927 16.437 20.6497 12.127C21.5407 9.341 20.7137 5.812 17.4277 4.753C15.8357 4.242 13.9787 4.553 12.6967 5.545C12.4287 5.751 12.0567 5.755 11.7867 5.551C10.4287 4.53 8.65471 4.231 7.03771 4.753ZM16.4677 6.7389C17.8307 7.1799 18.7857 8.3869 18.9027 9.8139C18.9357 10.2269 18.6287 10.5889 18.2157 10.6219C18.1947 10.6239 18.1747 10.6249 18.1537 10.6249C17.7667 10.6249 17.4387 10.3279 17.4067 9.9359C17.3407 9.1139 16.7907 8.4199 16.0077 8.1669C15.6127 8.0389 15.3967 7.6159 15.5237 7.2229C15.6527 6.8289 16.0717 6.6149 16.4677 6.7389Z" fill="#BFC6CC"/>
                        </svg>
                    }
                </div>
                {/* profile */}
                <div className="text-center mx-4" 
                    onClick={() => {
                        setActive('profile')
                        router.push('/sis/profile')
                    }}>
                    {active === 'profile' || props.tela === 'profile' 
                        ?
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 15.1739C16.3386 15.1739 20 15.8789 20 18.599C20 21.32 16.3146 22 12 22C7.66237 22 4 21.295 4 18.575C4 15.8539 7.68538 15.1739 12 15.1739ZM12 2C14.9391 2 17.294 4.35402 17.294 7.29105C17.294 10.2281 14.9391 12.5831 12 12.5831C9.0619 12.5831 6.70601 10.2281 6.70601 7.29105C6.70601 4.35402 9.0619 2 12 2Z" fill="#0354EA"/>
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.8399 18.1931C19.8399 21.4891 15.3199 21.8701 11.9209 21.8701L11.6776 21.8699C9.51208 21.8646 3.99988 21.7279 3.99988 18.1731C3.99988 14.9444 8.33823 14.5129 11.7114 14.4966L12.1641 14.4963C14.3295 14.5016 19.8399 14.6383 19.8399 18.1931ZM11.9209 15.9961C7.65988 15.9961 5.49988 16.7281 5.49988 18.1731C5.49988 19.6311 7.65988 20.3701 11.9209 20.3701C16.1809 20.3701 18.3399 19.6381 18.3399 18.1931C18.3399 16.7351 16.1809 15.9961 11.9209 15.9961ZM11.9209 1.99969C14.8489 1.99969 17.2299 4.38169 17.2299 7.30969C17.2299 10.2377 14.8489 12.6187 11.9209 12.6187H11.8889C8.96688 12.6097 6.59988 10.2267 6.60985 7.30669C6.60985 4.3817 8.99188 1.99969 11.9209 1.99969ZM11.9209 3.42769C9.77988 3.42769 8.03786 5.16869 8.03786 7.30969C8.03088 9.4437 9.75988 11.1837 11.8919 11.1917L11.9209 11.9057V11.1917C14.0609 11.1917 15.8019 9.44969 15.8019 7.30969C15.8019 5.16869 14.0609 3.42769 11.9209 3.42769Z" fill="#BFC6CC"/>
                        </svg>
                    }
                </div>
            </div>
        </nav>
    );
}

export default Menu;
