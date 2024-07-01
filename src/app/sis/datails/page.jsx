'use client'

import NavBar from "@/components/navBar";
import Image from "next/image";
import VisualTopo from '@/components/visualTopo';
import Botao from '@/components/botao';

let Datails = () => {

    return (
        <>
            {/* <NavBar /> */}
            
            <div className=" flex flex-col w-full visualTablet border-tablet"
                style={{
                    // paddingTop: '80px',
                }}>

                <VisualTopo 
                    tipo='1' 
                    titulo='Datails'
                    caminhoVoltar='/sis/tokenDetailPage2'
                />

                <div 
                    className="rounded-2 flex-1 flex flex-col justify-center items-center sm:py-8 sm:px-4" 
                    data-bs-spy="scroll" 
                    data-bs-smooth-scroll="true" 
                    tabindex="0"
                    style={{
                        overflowY: 'auto',
                    }}>


                    <div className='bg-white' style={{
                        borderRadius: '20px',
                        width: '327px',
                        height: '178px',
                        padding: '35px 0px',
                        flexShrink: 0,
                        justifyContent: 'space-between',
                        boxShadow: '0px 34px 250px -40px rgba(8, 9, 11, 0.16)'
                    }}>

                        <div className="d-flex justify-content-between w-100 px-4">

                            <div className="d-flex">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path d="M39.3971 24.8381C36.726 35.5525 25.8741 42.0731 15.1584 39.4012C4.44722 36.7301 -2.07335 25.8775 0.598971 15.1639C3.26894 4.44838 14.1209 -2.07268 24.8332 0.598468C35.5481 3.26961 42.0683 14.1234 39.3969 24.8383L39.397 24.8381H39.3971Z" fill="#50AF95"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M22.5309 22.2674V22.2674C22.3894 22.278 21.6588 22.3216 20.0289 22.3216C18.7326 22.3216 17.8122 22.2827 17.4893 22.2674V22.2674C12.4796 22.047 8.74024 21.1749 8.74024 20.1308C8.74024 19.0867 12.4796 18.2158 17.4893 17.9918V21.3988C17.8169 21.4224 18.755 21.4778 20.0513 21.4778C21.6069 21.4778 22.3859 21.413 22.5261 21.4V17.9942C27.5253 18.2169 31.2564 19.089 31.2564 20.1308C31.2564 21.1726 27.5265 22.0446 22.5261 22.2662V22.2662L22.5309 22.2674ZM22.5309 17.6418V14.5931H29.5075V9.94397H10.5127V14.5931H17.4881V17.6406C11.8184 17.9011 7.55469 19.0242 7.55469 20.37C7.55469 21.7158 11.8184 22.8378 17.4881 23.0994V32.869H22.5297V23.0958C28.1864 22.8354 32.4431 21.7135 32.4431 20.3688C32.4431 19.0242 28.1899 17.9023 22.5297 17.6406V17.6406L22.5309 17.6418Z" fill="white"/>
                                </svg>
                
                                <div className='mx-2'>
                                    <h5 style={{fontSize: '16px', fontWeight: 700}}>USD</h5>
                                    <p style={{fontSize: '12px', fontWeight: 400, color: '#9CA4AB'}}>United State</p>
                                </div>
                            </div>
                            
                            <div className='mx-1 flex' style={{width: '100px', alignItems: 'flex-start', gap: '2px', flexDirection: 'column'}}>
                                <div>
                                    <h5 style={{fontSize: '14px', fontWeight: 400}}>You pay</h5>
                                    <p style={{fontSize: '18px', fontWeight: 700}}>200.00</p>
                                </div>
                            </div>

                        </div>

                        <div className="d-flex justify-content-between w-100 px-4 my-4">

                            <div className="d-flex">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path d="M39.4016 24.8381C36.7301 35.5525 25.877 42.0731 15.1601 39.4012C4.44772 36.7301 -2.07358 25.8775 0.599038 15.1639C3.26931 4.44838 14.1225 -2.07268 24.836 0.598468C35.5521 3.26961 42.073 14.1234 39.4013 24.8383L39.4015 24.8381H39.4016Z" fill="#F7931A"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M28.8199 17.1503C29.218 14.4887 27.1915 13.0581 24.4203 12.1036L25.3193 8.49832L23.1244 7.95147L22.2492 11.4619C21.6722 11.318 21.0796 11.1824 20.4907 11.048L21.3721 7.51439L19.1786 6.96753L18.2791 10.5717C17.8016 10.463 17.3326 10.3555 16.8776 10.2423L16.8801 10.231L13.8533 9.47522L13.2694 11.8193C13.2694 11.8193 14.8979 12.1925 14.8635 12.2155C15.7524 12.4373 15.9131 13.0256 15.8864 13.4919L14.8624 17.5992C14.9236 17.6148 15.003 17.6372 15.0906 17.6724L15.0269 17.6566L15.0268 17.6565C14.9726 17.643 14.9164 17.6289 14.8586 17.6151L13.4232 23.3688C13.3146 23.6388 13.0389 24.044 12.4175 23.8902C12.4395 23.922 10.8222 23.4921 10.8222 23.4921L9.73242 26.0043L12.5887 26.7162C12.9015 26.7947 13.2106 26.8752 13.5166 26.955L13.5168 26.955C13.7306 27.0108 13.9428 27.0661 14.1536 27.12L13.2454 30.7667L15.4377 31.3135L16.3372 27.7056C16.9362 27.8681 17.5174 28.0181 18.0864 28.1594L17.19 31.7504L19.385 32.2973L20.2932 28.6574C24.036 29.3657 26.8502 29.0801 28.0348 25.6952C28.9893 22.9699 27.9873 21.3979 26.0182 20.3728C27.4524 20.0421 28.5327 19.0989 28.8207 17.1506L28.82 17.1501L28.8199 17.1503ZM23.8043 24.1816C23.182 26.682 19.2677 25.6483 17.4769 25.1753C17.3158 25.1328 17.1718 25.0947 17.049 25.0643L18.2543 20.233C18.404 20.2704 18.5869 20.3114 18.7941 20.3579C20.6465 20.7736 24.4419 21.6253 23.8044 24.1816H23.8043ZM19.1667 18.1157C20.6598 18.5141 23.917 19.3833 24.4842 17.1107H24.4844C25.0636 14.7865 21.8982 14.0858 20.3523 13.7435C20.1783 13.705 20.0249 13.6711 19.8996 13.6398L18.8069 18.0214C18.91 18.0472 19.0311 18.0795 19.1667 18.1157Z" fill="white"/>
                                </svg>
                
                                <div className='mx-2' style={{gab: '16px'}}>
                                    <h5 style={{fontSize: '16px', fontWeight: 700}}>Roberta</h5>
                                    <p style={{fontSize: '12px', fontWeight: 400, color: '#9CA4AB'}}>0x58278sDh6hg8j38834j4j5j6...</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    
                    <div className='pb-5'
                        style={{
                            width: '375px',
                            padding: '30px',
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            gap: '24px',
                            borderRadius: '20px 20px 0px 0px'
                    }}>

                        <h3 
                            style={{
                                fontSize: '18px',
                                fontWeight: 500,
                                alignSelf: 'stretch'
                            }}>
                            Detail Transfer
                        </h3>

                        <div className='flex mt-4'>

                            <p     
                                style={{
                                    fontSize: '14px',
                                    fontWeight: 500,
                                    alignSelf: 'stretch',
                                    color: '#9CA4AB',
                                    flex: '1 0 0'
                                }}>
                                Price
                            </p>

                            <p     
                                style={{
                                    fontSize: '14px',
                                    fontWeight: 500,
                                    textAlign: 'right',
                                    color: 'black'
                                }}>
                                $2875.45
                            </p>

                        </div>

                        <div className='flex my-4'>

                            <p     
                                style={{
                                    fontSize: '14px',
                                    fontWeight: 500,
                                    alignSelf: 'stretch',
                                    color: '#9CA4AB',
                                    flex: '1 0 0'
                                }}>
                                Transaction Fee
                            </p>

                            <p     
                                style={{
                                    fontSize: '14px',
                                    fontWeight: 500,
                                    textAlign: 'right',
                                    color: 'black'
                                }}>
                                $5.00
                            </p>

                        </div>

                        <div className='flex my-4'>

                            <p     
                                style={{
                                    fontSize: '14px',
                                    fontWeight: 500,
                                    alignSelf: 'stretch',
                                    color: '#9CA4AB',
                                    flex: '1 0 0'
                                }}>
                                Network Fee
                            </p>

                            <p     
                                style={{
                                    fontSize: '14px',
                                    fontWeight: 500,
                                    textAlign: 'right',
                                    color: 'black'
                                }}>
                                $0.04
                            </p>

                        </div>

                        <div className='flex my-4'>

                            <p     
                                style={{
                                    fontSize: '14px',
                                    fontWeight: 500,
                                    alignSelf: 'stretch',
                                    color: '#9CA4AB',
                                    flex: '1 0 0'
                                }}>
                                Status
                            </p>

                            <p     
                                style={{
                                    fontSize: '14px',
                                    fontWeight: 500,
                                    textAlign: 'right',
                                    color: 'black'
                                }}>
                                Pending
                            </p>

                        </div>

                        <div className='flex my-3'>

                            <p     
                                style={{
                                    fontSize: '14px',
                                    fontWeight: 500,
                                    alignSelf: 'stretch',
                                    color: '#9CA4AB',
                                    flex: '1 0 0'
                                }}>
                                TX
                            </p>

                            <a  href='#'  
                                style={{
                                    fontSize: '14px',
                                    fontWeight: 500,
                                    textAlign: 'right',
                                    color: 'blue'
                                }}>
                                0x6f652...
                            </a>

                        </div>

                        
                        <div className='flex '>

                            <p     
                                style={{
                                    fontSize: '14px',
                                    fontWeight: 500,
                                    alignSelf: 'stretch',
                                    color: '#9CA4AB',
                                    flex: '1 0 0'
                                }}>
                                Purchase Total
                            </p>

                            <p     
                                style={{
                                    fontSize: '14px',
                                    fontWeight: 500,
                                    textAlign: 'right',
                                    color: 'black'
                                }}>
                                $205.04
                            </p>

                        </div>

                    </div>
                   
                    
                    <br/><br/>
                </div>
                
                <Botao 
                    titulo='Confirmation'
                    caminho='/sis/buyTokenPage2'
                />

                <div class="overlay borderPhone"></div>
            
            </div>
            
        </>
    );
}

export default Datails
