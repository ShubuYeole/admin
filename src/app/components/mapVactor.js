'use client'

import React,{useRef} from "react";

import { VectorMap } from "react-jvectormap";
import '../../../node_modules/jvectormap-next/jquery-jvectormap.css'

export default function MapVactor(){
    let mapRef = useRef(null);
    return(
        <VectorMap
                ref={mapRef}
                map={"world_mill"}
                backgroundColor="white"
                containerStyle={{
                    width: "100%",
                    height: "80%"
                }}
                markerStyle={{
                    initial: {fill: "4f46e5"},
                    selected:{ fill: "#059669" }
                }}
                markersSelectable ={true}
                selectedMarkers=  {[0, 1]}
                selectedMar
                markers={[
                    {latLng: [31.9474,35.2272], name: "Palestine"},
                    {latLng: [61.524,105.3188], name: "Russia"},
                    {latLng: [56.1304,-106.3468], name: "Canada"},
                    {latLng: [71.7069,-42.6043], name: "Greenland"},
                ]}
                
                labels = {{
                    markers: {
                    render: marker => marker.name
                    }
                }}
                regionStyle={{
                    initial: {
                    fill: "#D1D5DB",
                    "fill-opacity": 1,
                    stroke: "#ff0000"
                    },
                    hover: {
                    "fill-opacity": 0.8,
                    fill: "#ffff00",
                    stroke: "#ff0000"
                    },
                    selected: {
                    fill: "#FFFB00"
                    }
                }}
            />
    )
}