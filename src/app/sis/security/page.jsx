'use client'
import { useState } from 'react';
import NavBar from "@/components/navBar";
import VisualTopo from '@/components/visualTopo';

let Termos = () => {

    
    let [selectedOption, setSelectedOption] = useState('');

    let handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
    return (
        <>
            {/* <NavBar /> */}
            
            <div className="min-h-screen flex flex-col visualTablet border-tablet">
                
                <VisualTopo tipo='1' titulo='Security' caminhoVoltar='/sis/profile'/>  

                <div 
                    className="flex-1 flex flex-col items-center mt-8 px-4"
                    style={{ maxWidth: '800px', margin: 'auto', paddingTop: '75px'}} 
                >
                    <div className="border border-gray-100 rounded-lg p-6 mb-4"
                        style={{width: '327px', height: '200px'}} >

                        <div className="flex flex-col items-start space-y-4">
                            <div className="flex items-center justify-between w-full">
                                <span className="text-black" 
                                    style={{
                                        fontWeight: 600,
                                        fontSize: '16px',
                                        color: 'black'
                                    }}> 
                                    Face ID
                                </span>
                                <div className="form-check form-switch">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="payment"
                                        name="payment"
                                        checked={selectedOption.payment}
                                        onChange={handleOptionChange}
                                    />
                                </div>
                            </div>
                            <hr className="w-full border-gray-200" />

                            <div className="flex items-center justify-between w-full">
                                <span className="text-black" 
                                    style={{
                                        fontWeight: 600,
                                        fontSize: '16px',
                                        color: 'black'
                                    }}> 
                                   Remember Password
                                </span>
                                <div className="form-check form-switch">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="newRecipe"
                                        name="newRecipe"
                                        checked={selectedOption.newRecipe}
                                        onChange={handleOptionChange}
                                    />
                                </div>
                            </div>
                            <hr className="w-full border-gray-200" />

                            <div className="flex items-center justify-between w-full">
                                <span className="text-black" 
                                    style={{
                                        fontWeight: 600,
                                        fontSize: '16px',
                                        color: 'black'
                                    }}> 
                                    Touch ID
                                </span>
                                <div className="form-check form-switch">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="streaming"
                                        name="streaming"
                                        checked={selectedOption.streaming}
                                        onChange={handleOptionChange}
                                    />
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
                
            </div>
            
        </>
    );
}

export default Termos;
