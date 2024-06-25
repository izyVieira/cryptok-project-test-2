'use client'
import NavBar from "@/components/navBar";
import VisualTopo from '@/components/visualTopo';

export default function Home() {
    return (
        <>
            <NavBar />
            <div className="min-h-screen flex flex-col items-center justify-center">
                <VisualTopo />
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
                    <div className="text-account text-center mb-4">
                        <h5 className="title-account">Forgot Password</h5>
                        <p className="p-account">Recover your account password</p>
                    </div>

                    <div className="flex flex-col items-center space-y-4">
                        <span className="block text-gray-700 mb-2">Email</span>
                        <input
                            type="email"
                            className="block w-full max-w-xs rounded-lg border border-gray-300 p-2.5 mb-4"
                            style={{ maxWidth: "327px", height: "35px" }}
                        />
                        <button
                            className="w-full max-w-xs bg-blue-500 text-white rounded-lg p-2.5 mb-4"
                            style={{ maxWidth: "327px", height: "35px" }}
                        >
                            Continue with Email
                        </button>
                    </div>
                    
                </div>
            </div>
        </>
    );
}
