'use client'
import { useState } from 'react';
import NavBar from "@/components/navBar";
import VisualTopo from '@/components/visualTopo';

let Termos = () => {
    let [agreeTerms, setAgreeTerms] = useState(false);

    let handleAgreeTerms = () => {
        setAgreeTerms(!agreeTerms);
    };

    return (
        <>
            {/* <NavBar /> */}
            
            <div className="flex flex-col bg-white visualTablet border-tablet">
                
                <VisualTopo tipo='1' titulo='Legal and Policies' caminhoVoltar='/sis/profile'/>  

                <div 
                    className="flex-1 flex flex-col items-center p-5"
                    style={{ maxWidth: '800px', margin: 'auto', }} 
                >
                    <div className="rounded-lg ">
                        <h2 className="text-black text-lg mb-2">Terms</h2>
                        <div className="text-gray-600 text-sm">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ornare quam vel facilisis feugiat amet sagittis arcu, tortor. Sapien, consequat ultrices morbi orci semper sit nulla. Leo auctor ut etiam est, amet aliquet ut vivamus. Odio vulputate est id tincidunt fames.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ornare quam vel facilisis feugiat amet sagittis arcu, tortor. Sapien, consequat ultrices morbi orci semper sit nulla. Leo auctor ut etiam est, amet aliquet ut vivamus. Odio vulputate est id tincidunt fames.
                            </p>
                        </div>
                    </div>
                    
                    <div className="rounded-lg ">
                        <h2 className="text-black text-lg mt-2">Changes to the Service and/or Terms</h2>
                        <div className="text-gray-600 text-sm">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ornare quam vel facilisis feugiat amet sagittis arcu, tortor. Sapien, consequat ultrices morbi orci semper sit nulla. Leo auctor ut etiam est, amet aliquet ut vivamus. Odio vulputate est id tincidunt fames.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ornare quam vel facilisis feugiat amet sagittis arcu, tortor. Sapien, consequat ultrices morbi orci semper sit nulla. Leo auctor ut etiam est, amet aliquet ut vivamus. Odio vulputate est id tincidunt fames.
                            </p>
                        </div>
                    </div>
                    
                    <div className="flex items-center mb-4">
                        <input
                            type="checkbox"
                            id="agreeTerms"
                            className="mr-2"
                            checked={agreeTerms}
                            onChange={handleAgreeTerms}
                        />
                        <label htmlFor="agreeTerms" className="text-gray-600 text-sm">
                            I agree to the terms and policies
                        </label>
                    </div>
                    
                </div>
                <div class="overlay borderPhone"></div>
            </div>
            
        </>
    );
}

export default Termos;
