'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { reviewData } from "../data/data";

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import Wrapper from "../components/wrapper";

export default function ReviewData(){
    return(
        <Wrapper>
            <div className="container-fluid relative px-3">
                <div className="layout-specing">
                    <div className="md:flex justify-between items-center">
                        <h5 className="text-lg font-semibold">Reviews</h5>

                        <ul className="tracking-[0.5px] inline-block sm:mt-0 mt-3">
                            <li className="inline-block capitalize text-[16px] font-medium duration-500 dark:text-white/70 hover:text-green-600 dark:hover:text-white"><Link href="/">Hously</Link></li>
                            <li className="inline-block text-base text-slate-950 dark:text-white/70 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                            <li className="inline-block capitalize text-[16px] font-medium text-green-600 dark:text-white" aria-current="page">Review</li>
                        </ul>
                    </div>

                    <div className="">
                        <ResponsiveMasonry
                            columnsCountBreakPoints={{350: 1, 750: 2, 900: 3 , 1200:4}}
                        >
                            <Masonry>
                                {reviewData.map((item,index) =>{
                                return(
                                    <div className="picture-item p-3" key={index}>
                                        <div className="bg-white dark:bg-slate-900 rounded-lg shadow dark:shadow-gray-800 p-6">
                                            <div className="flex items-center pb-6 border-b border-gray-100 dark:border-gray-800">
                                                <Image src={item.image} width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>

                                                <div className="ps-4">
                                                    <Link href="" className="text-lg hover:text-green-600 duration-500 ease-in-out">{item.name}</Link>
                                                    <p className="text-slate-400">{item.title}</p>
                                                </div>
                                            </div>

                                            <div className="mt-6">
                                                <p className="text-slate-400">{item.desc}</p>
                                                <ul className="list-none mb-0 text-amber-400 mt-2">
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )
                                })}
                            </Masonry>
                        </ResponsiveMasonry>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}