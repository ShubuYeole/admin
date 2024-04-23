"use client";

import { signIn } from 'next-auth/react';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Switcher from "../components/switcher";

export default function Login() {
    const router = useRouter();
    const [userData, setUserData] = useState({
        email: '',
        password: '',
        userId: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Function to validate email format
    const validateEmail = (email) => {
        // Regular expression for email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSignin = async (e) => {
        e.preventDefault();

        // Validate email format
        const isValidEmail = validateEmail(userData.email);
        if (!isValidEmail) {
            // Display error message if email format is invalid
            toast.error('Please enter a valid email address');
            return;
        }

        try {
            // Sign in using next-auth signIn function
            const result = await signIn('credentials', {
                redirect: false,
                email: userData.email,
                password: userData.password
            });

            if (result.error) {
                if (result.error === 'CredentialsSignin') {
                    // Handle invalid credentials error
                    toast.error('Invalid email or password');
                } else {
                    // Handle other sign-in errors
                    console.error('Sign-in error:', result.error);
                    toast.error('Error signing in. Please try again later');
                }
                return;
            }

            // Check if the user is admin
            const isAdmin = result.session?.user?.account_type === 'admin';
            if (!isAdmin) {
                // Display error message if user is not admin
                toast.error('You are not authorized to login. Please contact the administrator.');
                return;
            }

            console.log('Sign-in successful:', result);
            // Redirect the user to the home page
            toast.success('Sign-in successful');
            router.push('/'); // Replace this with your desired redirect URL

        } catch (error) {
            console.error('Error signing in:', error);
            // Handle sign-in error, display error message to the user
            toast.error('Error signing in. Please try again later');
        }
    };

    return (
        <>
            <section className="h-screen flex items-center justify-center relative overflow-hidden bg-no-repeat bg-center bg-cover" style={{backgroundImage:`url('/images/01.jpeg')`}}>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
                <div className="container">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                        <div className="relative overflow-hidden bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md">
                            <div className="p-6">
                                <Link href="">
                                    <Image src='/images/logo.png' width={98} height={28} className="mx-auto block dark:hidden" alt=""/>
                                    <Image src='/images/logo.png' width={98} height={28} className="mx-auto dark:block hidden" alt=""/>
                                </Link>
                                <h5 className="my-6 text-xl font-semibold">Login</h5>
                                <form className="text-start" onSubmit={handleSignin}>
                                    <div className="grid grid-cols-1">
                                        <div className="mb-4">
                                            <label className="font-medium" htmlFor="LoginEmail">Email Address:</label>
                                            <input id="LoginEmail" type="email" className="form-input mt-3" placeholder="name@example.com" name="email" value={userData.email} onChange={handleInputChange} />
                                        </div>

                                        <div className="mb-4">
                                            <label className="font-medium" htmlFor="LoginPassword">Password:</label>
                                            <input id="LoginPassword" type="password" className="form-input mt-3" placeholder="Password:" name="password" value={userData.password} onChange={handleInputChange} />
                                        </div>

                                        <div className="mb-4">
                                            <button type="submit" className="btn bg-green-600 hover:bg-green-700 text-white rounded-md w-full">Login / Sign in</button>
                                        </div>
                                    </div>
                                </form>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
            <Switcher/>
            <ToastContainer />
        </>
    );
}
