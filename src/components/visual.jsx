'use client'

import NavBar from "@/components/navBar";
import Head from "next/head";

let Visual = () => {

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/>
      <div className="min-h-screen pt-16 flex flex-col">
        <div className="flex-1 bg-blue-500 text-white flex flex-col justify-center items-center p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center">
            Hi, Welcome Back! 👋
          </h1>
          <p className="mt-4 text-center">Lorem ipsum dolor sit amet</p>
        </div>
        <div className="flex-1 bg-white flex flex-col justify-center items-center p-8">
          <div className="w-full max-w-xs">
            <span className="block text-gray-700 mb-2">Email</span>
            <input
              type="email"
              className="block w-full rounded-lg border border-gray-300 p-2.5 mb-4"
              style={{ width: "100%", maxWidth: "327px", height: "35px" }}
            />
            <button
              className="w-full bg-blue-500 text-white rounded-lg p-2.5 mb-4"
              style={{ width: "100%", maxWidth: "327px", height: "35px" }}
            >
              Continue with Email
            </button>
            <div className="flex items-center my-4">
              <hr className="flex-1" />
              <span className="mx-2 text-gray-500">or continue with</span>
              <hr className="flex-1" />
            </div>
            <button
              className="w-full flex items-center justify-center border border-black rounded-lg p-2.5 mb-4 bg-white text-black"
              style={{ width: "100%", maxWidth: "327px", height: "35px" }}
            >
              <img
                src="/google-icon.svg"
                alt="Google"
                className="w-5 h-5 mr-2"
              />
              Continue with Google
            </button>
            <button
              className="w-full flex items-center justify-center border border-black rounded-lg p-2.5 mb-4 bg-white text-black"
              style={{ width: "100%", maxWidth: "327px", height: "35px" }}
            >
              <img src="/apple-icon.svg" alt="Apple" className="w-5 h-5 mr-2" />
              Continue with Apple
            </button>
            <p className="text-center text-gray-500 mt-4">
              Don’t have an account? <a href="#" className="text-blue-500">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Visual
