'use client'
import React,{useState} from 'react'
import Sidebar from './sidebar'
import TopHeader from './topHeader'
import Footer from './footer'
import Switcher from './switcher'

export default function Wrapper(props){
    let [toggle, setToggle] = useState(false)
    return(
        <div className={`${toggle ? '' : 'toggled' } page-wrapper`}>
            <Sidebar/>
            <main className="page-content bg-gray-50 dark:bg-slate-800">
                <TopHeader toggle={toggle} setToggle={setToggle} />
                   {props.children}
                <Footer/>
                <Switcher/>
            </main>
        </div>
    )
}