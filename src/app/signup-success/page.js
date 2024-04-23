import React from "react";
import Link from "next/link";

import Switcher from "../components/switcher";
import BackToHome from "../components/backToHome";

export default function SignUpSucess(){
    return(
        <>
        <section className="h-screen flex items-center justify-center relative overflow-hidden bg-no-repeat bg-center bg-cover" style={{backgroundImage:`url('/images/01.jpeg')`}}>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
       
            <div className="container">
                <div className="md:flex justify-center">
                    <div className="lg:w-2/5">
                        <div className="relative overflow-hidden rounded-md bg-white dark:bg-slate-900 shadow dark:shadow-gray-800">
                            <div className="px-6 py-12 bg-green-600 text-center">
                                <i className="mdi mdi-check-circle-outline text-white text-8xl"></i>
                                <h5 className="text-white text-xl tracking-wide uppercase font-semibold mt-2">Success</h5>
                            </div>

                            <div className="px-6 py-12 text-center">
                                <p className="text-black font-semibold text-xl dark:text-white">Congratulations! 🎉</p> 
                                <p className="text-slate-400 mt-4">Your account has been successfully created. <br/> Enjoy your journey. Thank you!</p>
                                
                                <div className="mt-6">
                                    <Link href="/" className="btn bg-green-600 hover:bg-green-700 border-green-600 hover:border-greenbg-green-700 text-white rounded-md">Continue</Link>
                                </div>
                            </div>

                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Switcher/>
        <BackToHome/>
        </>
    )
}