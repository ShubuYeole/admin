import Image from "next/image";
import Link from "next/link";

import Wrapper from "../components/wrapper";
import { MdDirectionsCar,MdSettingsInputComponent,MdTune} from '../assets/icons/vander'

import { propertiesData } from "../data/data";

export default function ExploreProperty(){
    return(
        <Wrapper>
            <div className="container-fluid relative px-3">
            <div className="layout-specing">
                <div className="md:flex justify-between items-center">
                    <h5 className="text-lg font-semibold">Explore EV</h5>

                    <ul className="tracking-[0.5px] inline-block sm:mt-0 mt-3">
                        <li className="inline-block capitalize text-[16px] font-medium duration-500 dark:text-white/70 hover:text-green-600 dark:hover:text-white"><Link href="/">Manage EV</Link></li>
                        <li className="inline-block text-base text-slate-950 dark:text-white/70 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                        <li className="inline-block capitalize text-[16px] font-medium text-green-600 dark:text-white" aria-current="page">EV</li>
                    </ul>
                </div>

                <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-6">
                    {propertiesData.map((item,index) =>{
                        return(
                            <div className="group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500" key={index}>
                                <div className="relative">
                                    <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:'400px', height:'200px'}} alt=""/>

                                    <div className="absolute top-4 end-4">
                                        <Link href="#" className="btn btn-icon bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-full text-slate-100 dark:text-slate-700 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600"><i className="mdi mdi-heart text-[20px]"></i></Link>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="pb-6">
                                        <Link href={`/property-detail/${item.id}`} className="text-lg hover:text-green-600 font-medium ease-in-out duration-500">{item.name}</Link>
                                    </div>
                                          <ul className="py-6 border-slate-100 dark:border-gray-800 flex items-center list-none">
                                        <li className="flex items-center me-3">
                                            <MdDirectionsCar className="text-green-600  text-2xl"/>

                                            <span>{item.Model}</span>
                                        </li>

                                        <li className="flex items-center me-4">
                                        <MdSettingsInputComponent className="text-green-600"/>
                                            <span>{item.Type}</span>
                                        </li>

                                        <li className="flex items-center">
                                        <MdTune className="text-green-600"/>
                                           <span>{item.Range}</span>
                                        </li>
                                    </ul>

                                    <ul className="pt-6 flex justify-between items-center list-none">
                                        <li>
                                            <span className="text-slate-400">Price</span>
                                            <p className="text-lg font-medium">{item.value}</p>
                                        </li>

                                        
                                    </ul>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 mt-6">
                    <div className="md:col-span-12 text-center">
                        <nav>
                            <ul className="inline-flex items-center -space-x-px">
                                <li>
                                    <Link href="#" className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 bg-white dark:bg-slate-900 hover:text-white shadow-sm dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600">
                                        <i className="mdi mdi-chevron-left text-[20px]"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600">1</Link>
                                </li>
                                <li>
                                    <Link href="#" className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600">2</Link>
                                </li>
                                <li>
                                    <Link href="#" aria-current="page" className="z-10 w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-white bg-green-600 shadow-sm dark:shadow-gray-700">3</Link>
                                </li>
                                <li>
                                    <Link href="#" className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600">4</Link>
                                </li>
                                <li>
                                    <Link href="#" className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 bg-white dark:bg-slate-900 hover:text-white shadow-sm dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600">
                                        <i className="mdi mdi-chevron-right text-[20px]"></i>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        </Wrapper>
    )
}