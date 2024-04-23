'use client'
import React,{useState} from "react"
import Link from "next/link"
import Image from "next/image"

import Lightbox from 'react-18-image-lightbox';
import '../../../node_modules/react-18-image-lightbox/style.css';

export default function PropertyImage(){
    let images = ['/images/property/single/BMW.jpg', '/images/property/single/honda.jpg', '/images/property/single/moped.jpeg', '/images/property/single/nissan.jpeg', '/images/property/single/olaa.jpeg'];
    let [isOpen, setIsOpen] = useState(false);

    let [photoIndex, setActiveIndex] = useState(0);

    let handleCLick = (index) => {
        setActiveIndex(index)
        setIsOpen(true);
    }
    return(
        <div className="md:flex mt-4">
        <div className="lg:w-1/2 md:w-1/2 p-1">
            <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-700">
                <Image 
                    src='/images/property/single/car 2.jpg' 
                    width={500} // Increase the width here
                    height={400} // Increase the height here
                    sizes="100vw" 
                    style={{width:'100%', height:'auto'}} 
                    alt=""
                />
                <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                    <Link href="#" onClick={() => handleCLick(0)} className="btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full lightbox">
                        <i className="mdi mdi-camera-outline"></i>
                    </Link>
                </div>
            </div>
        </div>
    
    

            <div className="lg:w-1/2 md:w-1/2">
                <div className="flex">
                    <div className="w-1/2 p-1">
                        <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-700">
                            <Image src='/images/property/single/2.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} alt=""/>
                            <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                            <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                                <Link href="#" onClick={() => handleCLick(1)} className="btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full lightbox"><i className="mdi mdi-camera-outline"></i></Link>
                            </div>
                        </div>
                    </div>

                    <div className="w-1/2 p-1">
                        <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-700">
                            <Image src='/images/property/single/3.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} alt=""/>
                            <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                            <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                                <Link href="#" onClick={() => handleCLick(2)} className="btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full lightbox"><i className="mdi mdi-camera-outline"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex">
                    <div className="w-1/2 p-1">
                        <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-700">
                            <Image src='/images/property/single/4.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} alt=""/>
                            <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                            <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                                <Link href="#" onClick={() => handleCLick(3)} className="btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full lightbox"><i className="mdi mdi-camera-outline"></i></Link>
                            </div>
                        </div>
                    </div>

                    <div className="w-1/2 p-1">
                        <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-700">
                            <Image src='/images/property/single/5.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} alt=""/>
                            <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                            <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                                <Link href="#" onClick={() => handleCLick(4)} className="btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full lightbox"><i className="mdi mdi-camera-outline"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() =>setIsOpen(false)}
                    onMovePrevRequest={() =>
                        setActiveIndex((photoIndex + images.length - 1) % images.length,
                        )
                    }
                    onMoveNextRequest={() =>
                        setActiveIndex((photoIndex + 1) % images.length,
                        )
                    }
                />
            )}
        </div>
    )
}
