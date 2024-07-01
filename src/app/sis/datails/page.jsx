'use client'
import { useSearchParams } from 'next/navigation';
import NavBar from "@/components/navBar";
import Image from "next/image";
import VisualTopo from '@/components/visualTopo';
import Botao from '@/components/botao';

let Datails = () => {

    let buscarDados = () => {
        let searchParams = useSearchParams();

        return {
            nome: searchParams.get('nome'),
            imgSrc: searchParams.get('imgSrc'),
            codWallet: searchParams.get('codWallet')
        }
    }
    
    return (
        <>
            <NavBar />
            
            <div className="min-h-screen flex flex-col w-full "
                style={{
                    paddingTop: '80px',
                }}>

                <VisualTopo 
                    tipo='1' 
                    titulo='Datails'
                    caminhoVoltar='/sis/selectContact'
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
                                {buscarDados().imgSrc && (
                                    <Image
                                        src={buscarDados().imgSrc}
                                        alt={nome}
                                        width={40}
                                        height={40}
                                    />
                                )}
                
                                <div className='mx-2' style={{gab: '16px'}}>
                                    <h5 style={{fontSize: '16px', fontWeight: 700}}>{buscarDados().nome}</h5>
                                    <p style={{fontSize: '12px', fontWeight: 400, color: '#9CA4AB'}}>{buscarDados().codWallet}</p>
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
                    titulo='Close'
                    caminho='/sis/selectContact'
                />
            
            </div>
            
        </>
    );
}

export default Datails
