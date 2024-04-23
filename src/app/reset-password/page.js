import React from "react";
import Link from "next/link";
import Image from "next/image";

import Switcher from "../components/switcher";
import BackToHome from "../components/backToHome";

export default function ResetPassword(){
    return(
        <>
        <section className="h-screen flex items-center justify-center relative overflow-hidden bg-no-repeat bg-left-bottom bg-cover" style={{backgroundImage:`url('/images/01.jpeg')`}}>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
            <div className="container">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                    <div className="relative overflow-hidden bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md">
                        <div className="p-6">
                            <Link href="">
                                <Image src='/images/logo.png' width={98} height={28} className="mx-auto block dark:hidden" alt=""/>
                                <Image src='/images/logo.png' width={98} height={28} className="mx-auto dark:block hidden" alt=""/>
                            </Link>
                            <h5 className="my-6 text-xl font-semibold">Reset Your Password</h5>
                            <div className="grid grid-cols-1">
                                <p className="text-slate-400 mb-6">Please enter your email address. You will receive a link to create a new password via email.</p>
                                <form className="text-start">
                                    <div className="grid grid-cols-1">
                                        <div className="mb-4">
                                            <label className="font-medium" htmlFor="LoginEmail">Email Address:</label>
                                            <input id="LoginEmail" type="email" className="form-input mt-3" placeholder="name@example.com"/>
                                        </div>
    
                                        <div className="mb-4">
                                            <Link href="" className="btn bg-green-600 hover:bg-green-700 text-white rounded-md w-full">Send</Link>
                                        </div>
    
                                        <div className="text-center">
                                            <span className="text-slate-400 me-2">Remember your password ? </span><Link href="/login" className="text-black dark:text-white font-medium">Sign in</Link>
                                        </div>
                                    </div>
                                </form>
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