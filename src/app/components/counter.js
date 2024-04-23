'use client'
import React from "react"
import CountUp from 'react-countup';

export default function Counter({start, end}){
    return(
        <CountUp start={start} end={end}/>
    )
}
