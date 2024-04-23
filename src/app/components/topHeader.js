'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import 'simplebar-react/dist/simplebar.min.css';


import { FiMenu } from '../assets/icons/vander';

export default function TopHeader({setToggle, toggle}){
    let [ showCountry, setShowCountry ] = useState(false);
    let [ notifications, setNotifications] = useState(false);
    let [ user, setUser ] = useState(false);

    useEffect(()=>{
        const closeCountryModal = ()=>{
            setShowCountry(false)
        }
        const closeNotificationModal = ()=>{
            setNotifications(false)
        }
        document.addEventListener('mousedown', closeCountryModal);
        document.addEventListener('mousedown', closeNotificationModal);

        return()=>{
            document.removeEventListener('mousedown', closeCountryModal)
            document.removeEventListener('mousedown', closeNotificationModal)
        }
    },[])
    return(
        <div className="top-header">
            <div className="header-bar flex justify-between">
                <div className="flex items-center space-x-1">
                    
                    <Link href="#" className="xl:hidden block me-2">
                        <Image src='/images/logo-icon-32.png' width={32} height={32} className="md:hidden block" alt=""/>
                        <span className="md:block hidden">
                            <Image src='/images/logo-dark.png' width={98} height={28} className="inline-block dark:hidden" alt=""/>
                            <Image src='/images/logo-light.png' width={98} height={28} className="hidden dark:inline-block" alt=""/>
                        </span>
                    </Link>
                    
                    <Link id="close-sidebar" onClick={() =>setToggle(!toggle)} className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-100 dark:border-gray-800 text-slate-900 dark:text-white rounded-md" href="#">
                        <FiMenu className="h-4 w-4"/>
                    </Link>
                    
                    <div className="ps-1.5">
                        <div className="form-icon relative sm:block hidden">
                            <i className="mdi mdi-magnify absolute top-1/2 -translate-y-1/2 mt-[1px] start-3"></i>
                            <input type="text" className="form-input w-56 ps-9 py-2 px-3 h-8 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-md outline-none border border-gray-100 dark:border-gray-800 focus:ring-0 bg-white" name="s" id="searchItem" placeholder="Search..."/>
                        </div>
                    </div>
                    
                </div>

                <ul className="list-none mb-0 space-x-1">
                    <li className="dropdown inline-block relative">
                        <button className="dropdown-toggle items-center" type="button" onClick={() =>setUser(!user)}>
                            <span className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-100 dark:border-gray-800 text-slate-900 dark:text-white rounded-md"><Image src='/images/client/07.jpg' width={30} height={30} className="rounded-md" alt=""/></span>
                        </button>
                        <div className={`${user ? 'show' : 'hidden'} dropdown-menu absolute end-0 m-0 mt-4 z-10 w-44 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-700`}>
                            <ul className="py-2 text-start">
                                <li>
                                    <Link href="/profile" onClick={() => setUser(false)} className="block py-1 px-4 dark:text-white/70 hover:text-green-600 dark:hover:text-white"><i className="mdi mdi-account-outline me-2"></i>Profile</Link>
                                </li>
                                <li>
                                    <Link href="/profile-setting" onClick={() => setUser(false)} className="block py-1 px-4 dark:text-white/70 hover:text-green-600 dark:hover:text-white"><i className="mdi mdi-cog-outline me-2"></i>Settings</Link>
                                </li>
                                <li className="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                                <li>
                                    <Link href="/login" onClick={() => setUser(false)} className="block py-1 px-4 dark:text-white/70 hover:text-green-600 dark:hover:text-white"><i className="mdi mdi-logout me-2"></i>Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    
                </ul>
            </div>
        </div>
    )
}