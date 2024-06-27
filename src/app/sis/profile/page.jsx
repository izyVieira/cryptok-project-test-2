'use client'
import { useState } from 'react';
import NavBar from "@/components/navBar";
import Image from "next/image";
import Menu from '@/components/menu';
import VisualTopo from '@/components/visualTopo';
import Link from 'next/link';

let FavoritePage1 = () => {

    return (
        <>
            <NavBar />
            
            <div className="min-h-screen flex bg-white flex-col w-full bg-white"
                style={{
                    paddingTop: '90px'
                }}>

                <VisualTopo tipo='1' titulo='Setting' caminhoVoltar='/sis/profile'/>
                
                <div 
                    className="rounded-2 flex-1 bg-white flex flex-col  items-center sm:py-8 sm:px-4" 
                    data-bs-spy="scroll" 
                    data-bs-smooth-scroll="true" 
                    tabindex="0"
                    style={{
                        overflowY: 'auto',
                    }}>


                    <div className="d-flex justify-content-between w-100">

                        <div className="d-flex">
                            <div className="mx-4">
                                <Image
                                    src='/images/profile.png'
                                    alt="Crypto Wallet"
                                    width={56}
                                    height={56}
                                    className="mx-auto"
                                />
                            </div>
            
                            <div>
                                <h5 style={{
                                    fontSize: '18px',
                                    fontWeight: 600,
                                    color: 'black',
                                    marginTop: '10px',
                                    position: 'relative',
                                    marginLeft: '8px'
                                }}>Wade Warren
                                </h5>
                                <h5 style={{
                                    fontSize: '14px',
                                    fontWeight: 600,
                                    color: '#66707A',
                                    position: 'relative',
                                    marginLeft: '8px'
                                }}>@WadeWarren
                                </h5>
                            </div>

                        </div>

                    </div>

                
                    <div 
                        style={{
                            width: '375px',
                            height: '800px',
                            padding: '8.5px',
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            gap: '24px',
                            borderRadius: '20px 20px 0px 0px',
                        }}>

                        <h3 style={{
                            fontSize: '12px',
                            fontWeight: 500,
                            alignSelf: 'stretch'
                        }}>
                            Personal Info
                        </h3>

                        <Link href="/sis/userInfo" 
                            style={{  
                                textDecoration: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                width: '100%',
                                cursor: 'pointer',
                                color: 'inherit'
                            }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                                <svg className='mx-1' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_30020_3037)">
                                        <path d="M12 11C12.7911 11 13.5645 10.7654 14.2223 10.3259C14.8801 9.88635 15.3928 9.26164 15.6955 8.53074C15.9983 7.79983 16.0775 6.99556 15.9231 6.21964C15.7688 5.44372 15.3878 4.73098 14.8284 4.17157C14.269 3.61216 13.5563 3.2312 12.7804 3.07686C12.0044 2.92252 11.2002 3.00173 10.4693 3.30448C9.73836 3.60723 9.11365 4.11992 8.67412 4.77772C8.2346 5.43552 8 6.20888 8 7C8 8.06087 8.42143 9.07828 9.17157 9.82843C9.92172 10.5786 10.9391 11 12 11ZM12 5C12.3956 5 12.7822 5.1173 13.1111 5.33706C13.44 5.55683 13.6964 5.86918 13.8478 6.23463C13.9991 6.60009 14.0387 7.00222 13.9616 7.39018C13.8844 7.77814 13.6939 8.13451 13.4142 8.41422C13.1345 8.69392 12.7781 8.8844 12.3902 8.96157C12.0022 9.03874 11.6001 8.99914 11.2346 8.84776C10.8692 8.69639 10.5568 8.44004 10.3371 8.11114C10.1173 7.78224 10 7.39556 10 7C10 6.46957 10.2107 5.96086 10.5858 5.58579C10.9609 5.21072 11.4696 5 12 5Z" fill="#111111"/>
                                        <path d="M12 13C10.1435 13 8.36301 13.7375 7.05025 15.0503C5.7375 16.363 5 18.1435 5 20C5 20.2652 5.10536 20.5196 5.29289 20.7071C5.48043 20.8946 5.73478 21 6 21C6.26522 21 6.51957 20.8946 6.70711 20.7071C6.89464 20.5196 7 20.2652 7 20C7 18.6739 7.52678 17.4021 8.46447 16.4645C9.40215 15.5268 10.6739 15 12 15C13.3261 15 14.5979 15.5268 15.5355 16.4645C16.4732 17.4021 17 18.6739 17 20C17 20.2652 17.1054 20.5196 17.2929 20.7071C17.4804 20.8946 17.7348 21 18 21C18.2652 21 18.5196 20.8946 18.7071 20.7071C18.8946 20.5196 19 20.2652 19 20C19 18.1435 18.2625 16.363 16.9497 15.0503C15.637 13.7375 13.8565 13 12 13Z" fill="#111111"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_30020_3037">
                                            <rect width="24" height="24" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>

                                <p style={{
                                    fontSize: '14px',
                                    fontWeight: 600,
                                    color: 'black',
                                    marginLeft: '8px'
                                }}>
                                    Profile
                                </p>
                            </div>

                            <p className='mx-3' style={{
                                fontSize: '14px',
                                fontWeight: 700,
                                textAlign: 'right',
                                color: 'black',
                                marginTop: '15px',
                                position: 'relative'
                            }}>
                                {' > '}
                            </p>
                        </Link>

                        <Link href="/sis/paymentMethod" 
                            style={{  
                                textDecoration: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                width: '100%',
                                cursor: 'pointer',
                                color: 'inherit' 
                            }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                                <svg className='mx-1' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.6389 14.3957H17.5906C16.1042 14.3948 14.8993 13.1909 14.8984 11.7045C14.8984 10.218 16.1042 9.01409 17.5906 9.01318H21.6389" stroke="#111111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M18.049 11.6429H17.7373" stroke="#111111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.74766 3H16.3911C19.2892 3 21.6388 5.34951 21.6388 8.24766V15.4247C21.6388 18.3229 19.2892 20.6724 16.3911 20.6724H7.74766C4.84951 20.6724 2.5 18.3229 2.5 15.4247V8.24766C2.5 5.34951 4.84951 3 7.74766 3Z" stroke="#111111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M7.03516 7.5382H12.4341" stroke="#111111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>


                                <p style={{
                                    fontSize: '14px',
                                    fontWeight: 600,
                                    color: 'black',
                                    marginLeft: '8px'
                                }}>
                                    Payment Method
                                </p>
                            </div>

                            <p className='mx-3' style={{
                                fontSize: '14px',
                                fontWeight: 700,
                                textAlign: 'right',
                                color: 'black',
                                marginTop: '15px',
                                position: 'relative'
                            }}>
                                {' > '}
                            </p>
                        </Link>


                        <div className='mt-3'>
                            <h3 style={{
                                fontSize: '12px',
                                fontWeight: 500,
                                alignSelf: 'stretch'
                            }}>
                                Security
                            </h3>

                            <Link href="/sis/changePassword" 
                                style={{  
                                    textDecoration: 'none',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    width: '100%',
                                    cursor: 'pointer',
                                    color: 'inherit'  
                                }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <div className='mx-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3749 2.00201C15.2949 2.00201 17.6729 4.38001 17.6729 7.30301L17.6728 8.87961C19.448 9.49742 20.725 11.1874 20.725 13.1708V17.4598C20.725 19.9648 18.688 22.0018 16.183 22.0018H8.542C6.037 22.0018 4 19.9648 4 17.4598V13.1708C4 11.1878 5.27652 9.49806 7.05121 8.87996L7.0519 7.30301C7.0579 5.86301 7.6149 4.53401 8.6199 3.53801C9.6259 2.54101 10.9539 1.96401 12.3749 2.00201ZM16.183 10.1288H8.542C6.864 10.1288 5.5 11.4928 5.5 13.1708V17.4598C5.5 19.1378 6.864 20.5018 8.542 20.5018H16.183C17.86 20.5018 19.225 19.1378 19.225 17.4598V13.1708C19.225 11.4928 17.86 10.1288 16.183 10.1288ZM12.3623 13.4546C12.7763 13.4546 13.1123 13.7906 13.1123 14.2046V16.4256C13.1123 16.8396 12.7763 17.1756 12.3623 17.1756C11.9483 17.1756 11.6123 16.8396 11.6123 16.4256V14.2046C11.6123 13.7906 11.9483 13.4546 12.3623 13.4546ZM12.3719 3.50201H12.3559C11.3429 3.50201 10.3939 3.89201 9.6769 4.60301C8.9549 5.31701 8.5559 6.27001 8.5519 7.28601L8.551 8.62824H16.172L16.1729 7.30301C16.1729 5.20701 14.4679 3.50201 12.3719 3.50201Z" fill="#111111"/>
                                        </svg>
                                    </div>

                                    <p style={{
                                        fontSize: '14px',
                                        fontWeight: 600,
                                        color: 'black',
                                        marginLeft: '8px'
                                    }}>
                                        Change Password
                                    </p>
                                </div>

                                <p className='mx-3' style={{
                                    fontSize: '14px',
                                    fontWeight: 700,
                                    textAlign: 'right',
                                    color: 'black',
                                    marginTop: '15px',
                                    position: 'relative'
                                }}>
                                    {' > '}
                                </p>
                            </Link>

                            <Link href="/sis/forgotPassword" 
                                style={{  
                                    textDecoration: 'none',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    width: '100%',
                                    cursor: 'pointer',
                                    color: 'inherit' 
                                }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <div className='mx-1'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3747 2.00024C14.6307 2.00024 16.6447 3.43324 17.3837 5.56724C17.5197 5.95824 17.3117 6.38524 16.9197 6.52124C16.5287 6.65824 16.1017 6.44924 15.9657 6.05724C15.4367 4.52824 13.9917 3.50024 12.3717 3.50024H12.3577C10.2657 3.50024 8.5617 5.19424 8.5527 7.28424L8.552 8.62624L16.184 8.62694C18.688 8.62694 20.726 10.6649 20.726 13.1699V17.4579C20.726 19.9629 18.688 22.0009 16.184 22.0009H8.542C6.037 22.0009 4 19.9629 4 17.4579V13.1699C4 11.1866 5.277 9.49593 7.05221 8.87786L7.0527 7.30124C7.0657 4.36324 9.4417 2.00024 12.3547 2.00024H12.3747ZM16.184 10.1269H8.542C6.864 10.1269 5.5 11.4919 5.5 13.1699V17.4579C5.5 19.1359 6.864 20.5009 8.542 20.5009H16.184C17.861 20.5009 19.226 19.1359 19.226 17.4579V13.1699C19.226 11.4919 17.861 10.1269 16.184 10.1269ZM12.3633 13.4527C12.7773 13.4527 13.1133 13.7887 13.1133 14.2027V16.4247C13.1133 16.8387 12.7773 17.1747 12.3633 17.1747C11.9493 17.1747 11.6133 16.8387 11.6133 16.4247V14.2027C11.6133 13.7887 11.9493 13.4527 12.3633 13.4527Z" fill="#111111"/>
                                        </svg>
                                    </div>

                                    <p style={{
                                        fontSize: '14px',
                                        fontWeight: 600,
                                        color: 'black',
                                        marginLeft: '8px'
                                    }}>
                                        Forgot Password
                                    </p>
                                </div>

                                <p className='mx-3' style={{
                                    fontSize: '14px',
                                    fontWeight: 700,
                                    textAlign: 'right',
                                    color: 'black',
                                    marginTop: '15px',
                                    position: 'relative'
                                }}>
                                    {' > '}
                                </p>
                            </Link>

                            <Link href="/sis/security" 
                                style={{  
                                    textDecoration: 'none',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    width: '100%',
                                    cursor: 'pointer',
                                    color: 'inherit'  
                                }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <div className='mx-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4829 2C13.6159 2 19.5609 4.041 20.3479 4.828C21.0039 5.484 20.9939 6.014 20.9479 8.554C20.9299 9.572 20.9049 10.959 20.9049 12.879C20.9049 19.761 13.0349 22.223 12.6999 22.324C12.6289 22.346 12.5559 22.356 12.4829 22.356C12.4099 22.356 12.3369 22.346 12.2659 22.324C11.9309 22.223 4.06089 19.761 4.06089 12.879C4.06089 10.962 4.03589 9.575 4.01789 8.557C4.00968 8.10289 4.00261 7.71298 4.00028 7.37507L4 6.99377C4.00858 5.74113 4.12614 5.32 4.61889 4.828C5.40389 4.041 11.3489 2 12.4829 2ZM12.4829 3.5C11.6349 3.5 6.28489 5.384 5.66789 5.899C5.48589 6.082 5.47889 6.4 5.51789 8.529C5.53589 9.555 5.56089 10.949 5.56089 12.879C5.56089 18.08 11.2829 20.389 12.4819 20.814C13.6799 20.387 19.4049 18.065 19.4049 12.879C19.4049 10.947 19.4299 9.552 19.4489 8.526C19.4869 6.399 19.4799 6.081 19.2869 5.889C18.6819 5.384 13.3309 3.5 12.4829 3.5ZM16.2044 9.3395C16.4974 9.6325 16.4974 10.1075 16.2044 10.4005L12.3064 14.2995C12.1944 14.4123 12.0498 14.4854 11.8945 14.5102L11.7764 14.5195C11.5774 14.5195 11.3864 14.4405 11.2454 14.2995L9.35339 12.4055C9.06139 12.1125 9.06139 11.6365 9.35439 11.3445C9.64639 11.0515 10.1224 11.0515 10.4154 11.3445L11.7764 12.7075L15.1444 9.3395C15.4374 9.0465 15.9114 9.0465 16.2044 9.3395Z" fill="#111111"/>
                                        </svg>
                                    </div>

                                    <p style={{
                                        fontSize: '14px',
                                        fontWeight: 600,
                                        color: 'black',
                                        marginLeft: '8px'
                                    }}>
                                        Security
                                    </p>
                                </div>

                                <p className='mx-3' style={{
                                    fontSize: '14px',
                                    fontWeight: 700,
                                    textAlign: 'right',
                                    color: 'black',
                                    marginTop: '15px',
                                    position: 'relative'
                                }}>
                                    {' > '}
                                </p>
                            </Link>
                            
                        </div>

                        <div className='mt-3'>
                            <h3 style={{
                                fontSize: '12px',
                                fontWeight: 500,
                                alignSelf: 'stretch'
                            }}>
                                General
                            </h3>

                            <Link href="/sis/languange2" 
                                style={{  
                                    textDecoration: 'none',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    width: '100%',
                                    cursor: 'pointer',
                                    color: 'inherit'  
                                }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <div className='mx-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <g clip-path="url(#clip0_30020_2937)">
                                                <path d="M22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2C9.34784 2 6.8043 3.05357 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C6.8043 20.9464 9.34784 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12ZM19.93 11H17C16.8351 8.64814 16.0293 6.38635 14.67 4.46C16.0665 4.95597 17.2977 5.83007 18.2265 6.98484C19.1553 8.13962 19.745 9.52967 19.93 11ZM9.08 13H15C14.7441 15.4706 13.6911 17.7908 12 19.61C10.3101 17.7984 9.28119 15.4693 9.08 13ZM9.08 11C9.31289 8.54183 10.3376 6.22572 12 4.4C13.7047 6.20612 14.7601 8.52804 15 11H9.08ZM9.44 4.43C8.07355 6.36702 7.2548 8.63672 7.07 11H4.07C4.2589 9.5115 4.86261 8.10612 5.81217 6.94437C6.76172 5.78262 8.01886 4.91133 9.44 4.43ZM4.07 13H7.07C7.23469 15.3613 8.04788 17.6313 9.42 19.56C8.00397 19.0763 6.75199 18.2052 5.80627 17.0456C4.86055 15.886 4.25902 14.4844 4.07 13ZM14.62 19.55C15.9884 17.6207 16.8107 15.3577 17 13H19.95C19.7609 14.4802 19.1615 15.8781 18.2196 17.0356C17.2778 18.193 16.0309 19.064 14.62 19.55Z" fill="#111111"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_30020_2937">
                                                <rect width="24" height="24" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>

                                    <p style={{
                                        fontSize: '14px',
                                        fontWeight: 600,
                                        color: 'black',
                                        marginLeft: '8px'
                                    }}>
                                        Language
                                    </p>
                                </div>

                                <p className='mx-3' style={{
                                    fontSize: '14px',
                                    fontWeight: 700,
                                    textAlign: 'right',
                                    color: 'black',
                                    marginTop: '15px',
                                    position: 'relative'
                                }}>
                                    {' > '}
                                </p>
                            </Link>

                            <Link href="#" 
                                style={{  
                                    textDecoration: 'none',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    width: '100%',
                                    cursor: 'pointer',
                                    color: 'inherit' 
                                }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <div className='mx-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                            <g clip-path="url(#clip0_30020_2946)">
                                                <path d="M21 6.88566H16V5.21566C15.9765 4.57547 15.7002 3.97071 15.2316 3.53395C14.7629 3.09718 14.1402 2.86405 13.5 2.88566H10.5C9.85975 2.86405 9.23706 3.09718 8.76843 3.53395C8.2998 3.97071 8.02346 4.57547 8 5.21566V6.88566H3C2.73478 6.88566 2.48043 6.99101 2.29289 7.17855C2.10536 7.36609 2 7.62044 2 7.88566C2 8.15087 2.10536 8.40523 2.29289 8.59276C2.48043 8.7803 2.73478 8.88566 3 8.88566H4V19.8857C4 20.6813 4.31607 21.4444 4.87868 22.007C5.44129 22.5696 6.20435 22.8857 7 22.8857H17C17.7956 22.8857 18.5587 22.5696 19.1213 22.007C19.6839 21.4444 20 20.6813 20 19.8857V8.88566H21C21.2652 8.88566 21.5196 8.7803 21.7071 8.59276C21.8946 8.40523 22 8.15087 22 7.88566C22 7.62044 21.8946 7.36609 21.7071 7.17855C21.5196 6.99101 21.2652 6.88566 21 6.88566ZM10 5.21566C10 5.05566 10.21 4.88566 10.5 4.88566H13.5C13.79 4.88566 14 5.05566 14 5.21566V6.88566H10V5.21566ZM18 19.8857C18 20.1509 17.8946 20.4052 17.7071 20.5928C17.5196 20.7803 17.2652 20.8857 17 20.8857H7C6.73478 20.8857 6.48043 20.7803 6.29289 20.5928C6.10536 20.4052 6 20.1509 6 19.8857V8.88566H18V19.8857Z" fill="#111111"/>
                                                <path d="M9 17.8857C9.26522 17.8857 9.51957 17.7804 9.70711 17.5928C9.89464 17.4053 10 17.151 10 16.8857V12.8857C10 12.6205 9.89464 12.3662 9.70711 12.1786C9.51957 11.9911 9.26522 11.8857 9 11.8857C8.73478 11.8857 8.48043 11.9911 8.29289 12.1786C8.10536 12.3662 8 12.6205 8 12.8857V16.8857C8 17.151 8.10536 17.4053 8.29289 17.5928C8.48043 17.7804 8.73478 17.8857 9 17.8857Z" fill="#111111"/>
                                                <path d="M15 17.8857C15.2652 17.8857 15.5196 17.7804 15.7071 17.5928C15.8946 17.4053 16 17.151 16 16.8857V12.8857C16 12.6205 15.8946 12.3662 15.7071 12.1786C15.5196 11.9911 15.2652 11.8857 15 11.8857C14.7348 11.8857 14.4804 11.9911 14.2929 12.1786C14.1054 12.3662 14 12.6205 14 12.8857V16.8857C14 17.151 14.1054 17.4053 14.2929 17.5928C14.4804 17.7804 14.7348 17.8857 15 17.8857Z" fill="#111111"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_30020_2946">
                                                <rect width="24" height="24" fill="white" transform="translate(0 0.885742)"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>

                                    <p style={{
                                        fontSize: '14px',
                                        fontWeight: 600,
                                        color: 'black',
                                        marginLeft: '8px'
                                    }}>
                                        Clear Cache
                                    </p>
                                </div>

                                <p className='mx-3' style={{
                                    fontSize: '14px',
                                    fontWeight: 700,
                                    textAlign: 'right',
                                    color: 'black',
                                    marginTop: '15px',
                                    position: 'relative'
                                }}>
                                    {' > '}
                                </p>
                            </Link>
        
                        </div>

                        <div className='mt-3'>
                            <h3 style={{
                                fontSize: '12px',
                                fontWeight: 500,
                                alignSelf: 'stretch'
                            }}>
                                General
                            </h3>

                            <Link href="/sis/termos" 
                                style={{  
                                    textDecoration: 'none',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    width: '100%',
                                    cursor: 'pointer',
                                    color: 'inherit'  
                                }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <div className='mx-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <g clip-path="url(#clip0_30020_2989)">
                                                <path d="M12.0001 21.85C11.6506 21.8555 11.3058 21.7693 11.0001 21.6L10.7001 21.43C8.36335 20.108 6.41934 18.1895 5.06655 15.8704C3.71377 13.5514 3.00067 10.9148 3.00008 8.23003V8.09003C2.99691 7.73592 3.08782 7.38731 3.26351 7.07985C3.43921 6.77238 3.69339 6.51708 4.00008 6.34003L11.0001 2.40003C11.3041 2.22449 11.649 2.13208 12.0001 2.13208C12.3512 2.13208 12.696 2.22449 13.0001 2.40003L20.0001 6.34003C20.3068 6.51708 20.561 6.77238 20.7366 7.07985C20.9123 7.38731 21.0033 7.73592 21.0001 8.09003V8.23003C20.9975 10.9168 20.2814 13.5547 18.925 15.8739C17.5686 18.1932 15.6205 20.1106 13.2801 21.43L12.9801 21.6C12.6802 21.7659 12.3428 21.852 12.0001 21.85ZM12.0001 4.15003L5.00008 8.09003V8.23003C5.00176 10.5611 5.62308 12.8499 6.80038 14.8618C7.97769 16.8738 9.66866 18.5366 11.7001 19.68L12.0001 19.85L12.3001 19.68C14.3315 18.5366 16.0225 16.8738 17.1998 14.8618C18.3771 12.8499 18.9984 10.5611 19.0001 8.23003V8.09003L12.0001 4.15003Z" fill="#111111"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_30020_2989">
                                                <rect width="24" height="24" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>

                                    <p style={{
                                        fontSize: '14px',
                                        fontWeight: 600,
                                        color: 'black',
                                        marginLeft: '8px'
                                    }}>
                                        Legal and Policies
                                    </p>
                                </div>

                                <p className='mx-3' style={{
                                    fontSize: '14px',
                                    fontWeight: 700,
                                    textAlign: 'right',
                                    color: 'black',
                                    marginTop: '15px',
                                    position: 'relative'
                                }}>
                                    {' > '}
                                </p>
                            </Link>

                            <Link href="/sis/helpAndSupport" 
                                style={{  
                                    textDecoration: 'none',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    width: '100%',
                                    cursor: 'pointer',
                                    color: 'inherit' 
                                }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <div className='mx-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <g clip-path="url(#clip0_30020_2996)">
                                                <path d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z" fill="#111111"/>
                                                <path d="M12 6.00007C11.0717 6.00007 10.1815 6.36882 9.52513 7.02519C8.86875 7.68157 8.5 8.57181 8.5 9.50007C8.5 9.76528 8.60536 10.0196 8.79289 10.2072C8.98043 10.3947 9.23478 10.5001 9.5 10.5001C9.76522 10.5001 10.0196 10.3947 10.2071 10.2072C10.3946 10.0196 10.5 9.76528 10.5 9.50007C10.5 9.2034 10.588 8.91339 10.7528 8.66671C10.9176 8.42004 11.1519 8.22778 11.426 8.11425C11.7001 8.00072 12.0017 7.97101 12.2926 8.02889C12.5836 8.08677 12.8509 8.22963 13.0607 8.43941C13.2704 8.64919 13.4133 8.91646 13.4712 9.20743C13.5291 9.4984 13.4994 9.8 13.3858 10.0741C13.2723 10.3482 13.08 10.5824 12.8334 10.7473C12.5867 10.9121 12.2967 11.0001 12 11.0001C11.7348 11.0001 11.4804 11.1054 11.2929 11.293C11.1054 11.4805 11 11.7349 11 12.0001V14.0001C11 14.2653 11.1054 14.5196 11.2929 14.7072C11.4804 14.8947 11.7348 15.0001 12 15.0001C12.2652 15.0001 12.5196 14.8947 12.7071 14.7072C12.8946 14.5196 13 14.2653 13 14.0001V12.8401C13.8081 12.6041 14.5037 12.0839 14.9585 11.3755C15.4133 10.6671 15.5967 9.81814 15.4749 8.98513C15.3532 8.15213 14.9344 7.39122 14.2958 6.84266C13.6572 6.29409 12.8418 5.99484 12 6.00007Z" fill="#111111"/>
                                                <path d="M12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18Z" fill="#111111"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_30020_2996">
                                                <rect width="24" height="24" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>

                                    <p style={{
                                        fontSize: '14px',
                                        fontWeight: 600,
                                        color: 'black',
                                        marginLeft: '8px'
                                    }}>
                                        Help & Support
                                    </p>
                                </div>

                                <p className='mx-3' style={{
                                    fontSize: '14px',
                                    fontWeight: 700,
                                    textAlign: 'right',
                                    color: 'black',
                                    marginTop: '15px',
                                    position: 'relative'
                                }}>
                                    {' > '}
                                </p>
                            </Link>
        
                        </div>

                        <div className="text-center flex justify-center items-center my-5">
                            <button
                                className="w-full text-blue-600 rounded-lg p-2.5"
                                 data-bs-toggle="modal" data-bs-target="#exampleModal"
                                style={{
                                    maxWidth: "327px",
                                    height: "52px",
                                    borderRadius: '24px',
                                    backgroundColor: 'transparent',
                                    border: '1px solid #0354EA', 
                                    fontSize: '16px',
                                    fontWeight: 600
                                }}
                            >
                                Log Out
                            </button>
                        </div>
        
                        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <p className="text-lg font-bold mb-4 text-center">Are you sure you want to logout?</p>
                                    <div className="flex justify-center space-x-4">
                                        <button 
                                        data-bs-dismiss="modal"
                                        className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 focus:outline-none">
                                            Cancel
                                        </button>
                                    </div>
                                    <div className="flex justify-center space-x-4">
                                        <button className="bg-white text-red-600 font-bold rounded-lg px-4 py-2 hover:underline"
                                        data-bs-dismiss="modal">                                       
                                            <Link href={'/sis/login'}>
                                                <span>Log out</span>
                                            </Link>
                                        </button>
                                    </div>
                                </div>
                                
                                </div>
                            </div>
                        </div>

                    </div>         

                </div>

                <Menu/>
            
            </div>
            
        </>
    );
}

export default FavoritePage1
