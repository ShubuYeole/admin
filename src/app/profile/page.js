import Link from "next/link";

import UplodProfileImg from "../components/uplodProfileImg";
import Wrapper from "../components/wrapper";

import { FiKey, FiMail, FiUser } from '../assets/icons/vander';

export default function ProfileSetting(){
    return(
        <Wrapper>
            <div className="container-fluid relative px-6 mt-8">
                {/* <div className="layout-specing">
                    <div className="grid grid-cols-1">
                        <div className="profile-banner relative text-transparent rounded-md shadow dark:shadow-gray-700 overflow-hidden">
                            <input id="pro-banner" name="profile-banner" type="file" className="hidden"/>
                            <div className="relative shrink-0">
                                <Image src='/image/property/bmw.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="h-80 w-full object-cover" id="profile-banner" alt=""/>
                                <div className="absolute inset-0 bg-black/70"></div>
                                <label className="absolute inset-0 cursor-pointer" htmlFor="pro-banner"></label>
                            </div>
                        </div>
                    </div> */}

                    <div className="grid md:grid-cols-12 grid-cols-1 gap-6 mt-20 py-8">
                        <div className="xl:col-span-3 lg:col-span-4 md:col-span-4">
                            <div className="p-6 relative rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900">
                                <UplodProfileImg/>
                            </div>
                        </div>

                        <div className="xl:col-span-9 lg:col-span-8 md:col-span-8">
                            <div className="grid grid-cols-1 gap-6">
                                <div className="p-6 relative rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900">
                                    <h5 className="text-lg font-semibold mb-4">Personal Detail :</h5>
                                    <form>
                                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                                            <div>
                                                <label className="form-label font-medium "> Name : <span className="text-red-600">*</span></label>
                                                <div className="form-icon relative mt-2 mb-2 ">
                                                    <FiUser className="w-4 h-4 absolute top-3 start-4 mb-4"/>
                                                    <input type="text" className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-green-600 dark:border-gray-800 dark:focus:border-green-600 focus:ring-0" placeholder="First Name:" id="firstname" name="name" required=""/>
                                                </div>
                                            
                                           
                                            <div>
                                                <label className="form-label font-medium mt-8">Your Email : <span className="text-red-600">*</span></label>
                                                <div className="form-icon relative mt-2">
                                                    <FiMail className="w-4 h-4 absolute top-3 start-4"/>
                                                    <input type="email" className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-green-600 dark:border-gray-800 dark:focus:border-green-600 focus:ring-0" placeholder="Email" name="email" required=""/>
                                                </div>
                                            </div>
                                            </div>
                                            
                                        </div>

                                        

                                        <input type="submit" id="submit" name="send" className="btn bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white rounded-md mt-5" value="Save Changes"/>
                                    </form>
                                </div>

                                <div className="p-6 relative rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900">
                                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                                        
        

                                        </div> 
                                        
                                        <div> 
                                            <h5 className="text-lg font-semibold mb-4">Change password :</h5>
                                            <form>
                                                <div className="grid grid-cols-1 gap-5">
                                                    <div>
                                                        <label className="form-label font-medium">Old password :</label>
                                                        <div className="form-icon relative mt-2">
                                                            <FiKey className="w-4 h-4 absolute top-3 start-4"/>
                                                            <input type="password" className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-green-600 dark:border-gray-800 dark:focus:border-green-600 focus:ring-0" placeholder="Old password" required=""/>
                                                        </div>
                                                    </div>
            
                                                    <div>
                                                        <label className="form-label font-medium">New password :</label>
                                                        <div className="form-icon relative mt-2">
                                                            <FiKey className="w-4 h-4 absolute top-3 start-4"/>
                                                            <input type="password" className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-green-600 dark:border-gray-800 dark:focus:border-green-600 focus:ring-0" placeholder="New password" required=""/>
                                                        </div>
                                                    </div>
            
                                                    <div>
                                                        <label className="form-label font-medium">Re-type New password :</label>
                                                        <div className="form-icon relative mt-2">
                                                            <FiKey className="w-4 h-4 absolute top-3 start-4"/>
                                                            <input type="password" className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-green-600 dark:border-gray-800 dark:focus:border-green-600 focus:ring-0" placeholder="Re-type New password" required=""/>
                                                        </div>
                                                    </div>
                                                </div>
            
                                                <button className="btn bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white rounded-md mt-5">Save password</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 relative rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900">
                                    <h5 className="text-lg font-semibold mb-4 text-red-600">Delete Account :</h5>

                                    <p className="text-slate-400 mb-4">Do you want to delete the account? Please press below &quot;Delete&quot; button</p>

                                    <Link href="" className="btn bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700 text-white rounded-md">Delete</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                
            
        </Wrapper>
    )
}