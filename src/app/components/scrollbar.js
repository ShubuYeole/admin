'use client'
import React from "react"

import SimpleBar from "simplebar-react"

export default function ScrollBar(props){
    return(
        <SimpleBar className={props.className}>
            {props.children}
        </SimpleBar>
    )
}