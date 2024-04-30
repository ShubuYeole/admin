'use client'
import Image from 'next/image';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";


import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

export default function Sidebar(){
    let [ manu, setmanu ] = useState('');
    let [ submanu, setSubManu ] = useState('');
 
    let current = usePathname();

    useEffect(()=>{
        setSubManu(current);
        setmanu(current)
    },[current])
    
    return(
        <nav id="sidebar" className="sidebar-wrapper sidebar-dark">
            <div className="sidebar-content">
                <div className="sidebar-brand">
                    <Link href="/"><Image src='/images/logo.png' width={98} height={24} alt=""/></Link>
                </div>
                <SimpleBar style={{height: "calc(100% - 70px)"}}>
                    <ul className="sidebar-menu border-t border-white/10">
                        <li className={`${manu === "/" || ""? 'active' : ''} ms-0`}>
                            <Link href="/"><i className="mdi mdi-chart-bell-curve-cumulative me-2"></i>Dashboard</Link>
                        </li>

                        <li className={`${manu === "/explore-EVs" ? 'active' : ''} ms-0`}>
                            <Link href="/explore-Evs"><i className="mdi mdi-car-connected me-2"></i>Explore EVs</Link>
                        </li>

                        <li className={`${manu === "/add-EVs" ? 'active' : ''} ms-0`}>
                            <Link href="/add-EVs"><i className="mdi mdi-car-hatchback me-2"></i>Add EV</Link>
                        </li>

                        <li className={`${manu === "/manage-users" ? 'active' : ''} ms-0`}>
                            <Link href="/manage-users"><i className="mdi mdi-car me-2"></i>Manage Users</Link>   
                        </li>

                        {/* <li className={`${manu === "/manage-EVs" ? 'active' : ''} ms-0`}> */}
                            {/* <Link href="/manage-EVs"><i className=" mdi mdi-truck-delivery"></i>Manage EVs</Link>    */}
                        {/* </li> */}

                        <li className={`sidebar-dropdown ms-0 ${["/e-Car", "/e-Bike","/e-Ecycle","/e-Auto","/e-Tractor","/e-Drone", '/Ev-item'].includes(manu) ? 'active' : ''}`}>
                            <Link href="" onClick={()=>{setSubManu(submanu === '/Ev-item' ? '' : '/Ev-item')}}><i className="mdi mdi-account-edit me-2"></i>Manage-Evs</Link>
                            <div className={`sidebar-submenu ${["/e-Car", "/e-Bike","/e-Ecycle","/e-Auto","/e-Tractor","/e-Drone", '/Ev-item'].includes(submanu) ? 'block' : ''}`}>
                                <ul>
                                    <li className={`${manu === "/e-Car" ? 'active' : ''} ms-0`}><Link href="/e-Car">e-Car</Link></li>
                                    <li className={`${manu === "/e-Bike" ? 'active' : ''} ms-0`}><Link href="/e-Bike">e-Bike</Link></li>
                                    <li className={`${manu === "/e-Cycle" ? 'active' : ''} ms-0`}><Link href="/e-Cycle">e-Ecycle</Link></li>
                                    <li className={`${manu === "/e-Auto" ? 'active' : ''} ms-0`}><Link href="/e-Auto">e-Auto</Link></li>
                                    <li className={`${manu === "/e-Tractor" ? 'active' : ''} ms-0`}><Link href="/e-Tractor">e-Tractor</Link></li>
                                    <li className={`${manu === "/e-Drone" ? 'active' : ''} ms-0`}><Link href="/e-Drone">e-Drone</Link></li>
                                </ul>
                            </div>  
                        </li>


                        <li className={`${manu === "/manage-rentals" ? 'active' : ''} ms-0`}>
                            <Link href="/manage-rentals"><i className="mdi mdi-taxi me-2"></i> Manage Rentals</Link>   
                        </li>


                        <li className={`${manu === "/add-property" ? 'active' : ''} ms-0`}>
                            <Link href="/add-property"><i className="mdi mdi-taxi me-2"></i>Manage Services</Link>   
                        </li>


                        <li className={`${manu === "/transactions" ? 'active' : ''} ms-0`}>
                            <Link href="/transactions"><i className="mdi mdi-taxi me-2"></i>Manage Transactions</Link>   
                        </li>

                        {/* <li className={`${manu === "/chat" ? 'active' : ''} ms-0`}>
                            <Link href="/chat"><i className="mdi mdi-chat-outline me-2"></i>Chat</Link>
                        </li> */}
                                                <li className={`${manu === "/profile" ? 'active' : ''} ms-0`}>
                            <Link href="/profile"><i className="mdi mdi-account-edit me-2"></i>Profile</Link>   
                        </li>

                        {/* <li className={`sidebar-dropdown ms-0 ${["/profile", "/profile-setting", '/user-item'].includes(manu) ? 'active' : ''}`}> */}
                            {/* <Link href="#" onClick={()=>{setSubManu(submanu === '/user-item' ? '' : '/user-item')}}><i className="mdi mdi-account-edit me-2"></i>User Profile</Link> */}
                            {/* <div className={`sidebar-submenu ${[ "/profile", '/user-item'].includes(submanu) ? 'block' : ''}`}> */}
                                {/* <ul> */}
                                    {/* <li className={`${manu === "/profile" ? 'active' : ''} ms-0`}><Link href="/profile">Profile</Link></li> */}
                                    {/* <li className={`${manu === "/profile" ? 'active' : ''} ms-0`}><Link href="/profile">Profile</Link></li> */}
                                {/* </ul> */}
                            {/* </div>   */}
                        {/* </li> */}

                        {/* <li className={`sidebar-dropdown ms-0 ${["/blog", "/blog-detail"].includes(manu) ? 'active' : ''}`}>
                            <Link href="#" onClick={() =>{setSubManu(submanu === '/blog-item' ? '' : '/blog-item')}}><i className="mdi mdi-post-outline me-2"></i>Blog</Link>
                            <div className={`sidebar-submenu ${["/blog", "/blog-detail", '/blog-item'].includes(submanu) ? 'block' : '' }`}>
                                <ul>
                                    <li className={`${manu === "/blog" ? 'active' : '' } ms-0`}><Link href="/blog">Blogs</Link></li>
                                    <li className={`${manu === "/blog-detail" ? 'active' : ''} ms-0`}><Link href="/blog-detail">Blog Detail</Link></li>
                                </ul>
                            </div>
                        </li> */}

                        {/* <li className={`sidebar-dropdown ms-0 ${["/starter", "/faqs", "/pricing", "/review","/privacy", "/terms"].includes(manu) ? 'active' : ''}`}>
                            <Link href="#" onClick={() =>setSubManu(submanu === "/page-item" ? "" : "/page-item")}><i className="mdi mdi-file-document-outline me-2"></i>Pages</Link>
                            <div className={`sidebar-submenu ${["/starter", "/faqs", "/pricing", "/review","/privacy", "/terms", "/page-item"].includes(submanu) ? 'block' : ''}`}>
                                <ul>
                                    <li className={`${manu === "/starter" ? 'active' : ''} ms-0`}><Link href="/starter">Starter</Link></li>
                                    <li className={`${manu === "/faqs" ? 'active' : ''} ms-0`}><Link href="/faqs">FAQs</Link></li>
                                    <li className={`${manu === "/pricing" ? 'active' : ''} ms-0`}><Link href="/pricing">Pricing</Link></li>
                                    <li className={`${manu === "/review" ? 'active' : ''} ms-0`}><Link href="/review">Review</Link></li>
                                    <li className={`${manu === "/privacy" ? 'active' : ''} ms-0`}><Link href="/privacy">Privacy Policy</Link></li>
                                    <li className={`${manu === "/terms" ? 'active' : ''} ms-0`}><Link href="/terms">Term & Condition</Link></li>
                                </ul>
                            </div>
                        </li> */}

                        {/* <li className={`sidebar-dropdown ms-0 ${["/login", "/signup", "/signup-success", "/reset-password", "/lock-screen"].includes(manu) ? 'active' : ''}`}>
                            <Link href="#" onClick={()=>{setSubManu(submanu === "/auth-item" ? '' : "/auth-item")}}><i className="mdi mdi-login me-2"></i>Authentication</Link>
                            <div className={`sidebar-submenu ${["/login", "/signup", "/signup-success", "/reset-password", "/lock-screen", "/auth-item"].includes(submanu) ? 'block' : ''}`}>
                                <ul>
                                    <li className={`${manu === "/login" ? 'active' : ''} ms-0`}><Link href="/login">Login</Link></li>
                                    <li className={`${manu === "/signup" ? 'active' : ''} ms-0`}><Link href="/signup">Signup</Link></li>
                                    <li className={`${manu === "/signup-success" ? 'active' : ''} ms-0`}><Link href="/signup-success">Signup Success</Link></li>
                                    <li className={`${manu === "/reset-password" ? 'active' : ''} ms-0`}><Link href="/reset-password">Reset Password</Link></li>
                                    <li className={`${manu === "/lock-screen" ? 'active' : ''} ms-0`}><Link href="/lock-screen">Lockscreen</Link></li>
                                </ul>
                            </div>
                        </li> */}

                        {/* <li className={`sidebar-dropdown ms-0 ${["/comingsoon", "/maintenance", "/error", "/thankyou"].includes(manu) ? 'active' : ''}`}>
                            <Link href="#" onClick={()=>{setSubManu(submanu === "/misce-item" ? '' : '/misce-item')}}><i className="mdi mdi-layers me-2"></i>Miscellaneous</Link>
                            <div className={`sidebar-submenu ${["/comingsoon", "/maintenance", "/error", "/thankyou", '/misce-item'].includes(submanu) ? 'block' : ''}`}>
                                <ul>
                                    <li className={`${manu === "/comingsoon" ? 'active' : ''} ms-0`}><Link href="/comingsoon">Comingsoon</Link></li>
                                    <li className={`${manu === "/maintenance" ? 'active' : ''} ms-0`}><Link href="/maintenance">Maintenance</Link></li>
                                    <li className={`${manu === "/error" ? 'active' : ''} ms-0`}><Link href="/error">Error</Link></li>
                                    <li className={`${manu === "/thankyou" ? 'active' : ''} ms-0`}><Link href="/thankyou">Thank You</Link></li>
                                </ul>
                            </div>
                        </li> */}

                    </ul>
                </SimpleBar>
            </div>
        </nav>
    )
}
