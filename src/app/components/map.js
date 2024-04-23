'use client'
import React from "react";
import dynamic from "next/dynamic";

const MapVactor = dynamic(()=>import('./mapVactor'),{ssr:false})

export default function Map(){

    return(
        <div className="p-6">
            <div id="map" className="w-full h-[236px]">
                <MapVactor/>
            </div>
        </div>
    )
}