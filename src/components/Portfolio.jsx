import { useState } from "react"
import { TabItem, Tabs } from "flowbite-react";
import pg_1 from '../assets/Images/pg_1.png'
import pg_2 from '../assets/Images/pg_2.png'
import pg_3 from '../assets/Images/pg_3.png'
import pg_4 from '../assets/Images/pg_4.png'
import pg_5 from '../assets/Images/pg_5.png'
import pg_6 from '../assets/Images/pg_6.png'
import pg_7 from '../assets/Images/pg_7.png'
import pg_8 from '../assets/Images/pg_8.png'
import arrow from '../assets/Images/arrow_b.png'

export default function Portfolio(){

   const tabTheme = {
    base: "flex flex-col gap-6 items-center w-full",
    tablist: {
      base: "flex flex-wrap justify-center gap-3 p-2 w-fit", 
      variant: {
        pills: "flex-wrap space-x-2 text-sm font-medium text-gray-500 dark:text-gray-400"
      },
      tabitem: {
        base: "flex items-center justify-center font-bold py-3 px-7 rounded-full transition-all duration-300 ease-in-out focus:outline-none",
        variant: {
          pills: {
            base: "!rounded-full",
            active: {
              on: "bg-orange-500 text-white hover:bg-orange-500",
              off: "bg-zinc-100 text-black hover:!bg-orange-500 hover:text-white"
            }
          }
        }
      }
    },
    tabpanel: "py-6 w-full"
  };

    return(
        <section className="py-12 w-full flex flex-col bg-white items-center relative overflow-clip">
            <div className="h-[750px] w-[150%] bg-zinc-100 absolute -rotate-13 -bottom-150 -right-30 z-10"></div>
            <div className=" flex flex-col items-center w-full max-w-7xl z-20">
                <div className="relative flex flex-col items-center pb-12 my-12">
                    <h1 className="[-webkit-text-stroke:0.7px_lightgrey] text-transparent text-[160px] font-extrabold">Portfolio</h1>
                    <h2 className="font-bold text-5xl text-blue-950 absolute top-[70%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">Our Case Study</h2>
                    <h3 className="absolute top-3 left-1/2 -translate-x-1/2 text-orange-500">Portfolio</h3>
                </div>
                <Tabs aria-label="Pills" variant="pills" theme={tabTheme}>
                    <TabItem active title="View All">
                       <div className="max-w-7xl flex flex-col items-center">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                                <div className="group">
                                    <div className='w-full h-auto relative overflow-clip aspect-[4/3]'>
                                        <img src={pg_1} className="w-full h-full object-cover"/>
                                        <div className="hidden md:block absolute -bottom-11 -left-15 h-[100px] bg-blue-950 -rotate-15 w-[150%] group-hover:bg-orange-500 transition-all duration-300 ease-in-out z-20"></div>
                                        <a href="#"><div className="absolute -bottom-30 right-5 group-hover:-translate-y-[140px] transition-all duration-500 ease-in-out z-50 p-3 w-fit rounded-full bg-white flex flex-row items-center justify-center">
                                            <img src={arrow} className="scale-70"/>
                                        </div></a>
                                        <div className="hidden md:block absolute h-[30px] w-[150%] bg-orange-500 group-hover:bg-orange-600 -rotate-19 z-10 bottom-11 -left-5 transition-all duration-300 ease-in-out"></div>
                                    </div>
                                    <div className="text-start p-7 py-3 bg-blue-950 group-hover:bg-orange-500 transition-all duration-300 ease-in-out">
                                        <h3 className="text-zinc-400 group-hover:text-white transition-all duration-300 ease-in-out">Rosalina D. | $56,000</h3>
                                        <h2 className="text-white transition-all duration-300 ease-in-out">Rosali Office Design</h2>
                                    </div>
                                </div>
                                <div className="group">
                                    <div className='w-full h-auto relative overflow-clip aspect-[4/3]'>
                                        <img src={pg_2} className="w-full h-full object-cover"/>
                                        <div className="hidden md:block absolute -bottom-11 -left-15 h-[100px] bg-blue-950 -rotate-15 w-[150%] group-hover:bg-orange-500 transition-all duration-300 ease-in-out z-20"></div>
                                        <a href="#"><div className="absolute -bottom-30 right-5 group-hover:-translate-y-[140px] transition-all duration-500 ease-in-out z-50 p-3 w-fit rounded-full bg-white flex flex-row items-center justify-center">
                                            <img src={arrow} className="scale-70"/>
                                        </div></a>
                                        <div className="hidden md:block absolute h-[30px] w-[150%] bg-orange-500 group-hover:bg-orange-600 -rotate-19 z-10 bottom-11 -left-5 transition-all duration-300 ease-in-out"></div>
                                    </div>
                                    <div className="text-start p-7 py-3 bg-blue-950 group-hover:bg-orange-500 transition-all duration-300 ease-in-out">
                                        <h3 className="text-zinc-400 group-hover:text-white transition-all duration-300 ease-in-out">Rosalina D. | $56,000</h3>
                                        <h2 className="text-white transition-all duration-300 ease-in-out">Rosali Office Design</h2>
                                    </div>
                                </div>
                                <div className="group">
                                    <div className='w-full h-auto relative overflow-clip aspect-[4/3]'>
                                        <img src={pg_2} className="w-full h-full object-cover"/>
                                        <div className="hidden md:block absolute -bottom-11 -left-15 h-[100px] bg-blue-950 -rotate-15 w-[150%] group-hover:bg-orange-500 transition-all duration-300 ease-in-out z-20"></div>
                                        <a href="#"><div className="absolute -bottom-30 right-5 group-hover:-translate-y-[140px] transition-all duration-500 ease-in-out z-50 p-3 w-fit rounded-full bg-white flex flex-row items-center justify-center">
                                            <img src={arrow} className="scale-70"/>
                                        </div></a>
                                        <div className="hidden md:block absolute h-[30px] w-[150%] bg-orange-500 group-hover:bg-orange-600 -rotate-19 z-10 bottom-11 -left-5 transition-all duration-300 ease-in-out"></div>
                                    </div>
                                    <div className="text-start p-7 py-3 bg-blue-950 group-hover:bg-orange-500 transition-all duration-300 ease-in-out">
                                        <h3 className="text-zinc-400 group-hover:text-white transition-all duration-300 ease-in-out">Rosalina D. | $56,000</h3>
                                        <h2 className="text-white transition-all duration-300 ease-in-out">Rosali Office Design</h2>
                                    </div>
                                </div>
                                <div className="group">
                                    <div className='w-full h-auto relative overflow-clip aspect-[4/3]'>
                                        <img src={pg_3} className="w-full h-full object-cover"/>
                                        <div className="hidden md:block absolute -bottom-11 -left-15 h-[100px] bg-blue-950 -rotate-15 w-[150%] group-hover:bg-orange-500 transition-all duration-300 ease-in-out z-20"></div>
                                        <a href="#"><div className="absolute -bottom-30 right-5 group-hover:-translate-y-[140px] transition-all duration-500 ease-in-out z-50 p-3 w-fit rounded-full bg-white flex flex-row items-center justify-center">
                                            <img src={arrow} className="scale-70"/>
                                        </div></a>
                                        <div className="hidden md:block absolute h-[30px] w-[150%] bg-orange-500 group-hover:bg-orange-600 -rotate-19 z-10 bottom-11 -left-5 transition-all duration-300 ease-in-out"></div>
                                    </div>
                                    <div className="text-start p-7 py-3 bg-blue-950 group-hover:bg-orange-500 transition-all duration-300 ease-in-out">
                                        <h3 className="text-zinc-400 group-hover:text-white transition-all duration-300 ease-in-out">Rosalina D. | $56,000</h3>
                                        <h2 className="text-white transition-all duration-300 ease-in-out">Rosali Office Design</h2>
                                    </div>
                                </div>
                                <div className="group">
                                    <div className='w-full h-auto relative overflow-clip aspect-[4/3]'>
                                        <img src={pg_4} className="w-full h-full object-cover"/>
                                        <div className="hidden md:block absolute -bottom-11 -left-15 h-[100px] bg-blue-950 -rotate-15 w-[150%] group-hover:bg-orange-500 transition-all duration-300 ease-in-out z-20"></div>
                                        <a href="#"><div className="absolute -bottom-30 right-5 group-hover:-translate-y-[140px] transition-all duration-500 ease-in-out z-50 p-3 w-fit rounded-full bg-white flex flex-row items-center justify-center">
                                            <img src={arrow} className="scale-70"/>
                                        </div></a>
                                        <div className="hidden md:block absolute h-[30px] w-[150%] bg-orange-500 group-hover:bg-orange-600 -rotate-19 z-10 bottom-11 -left-5 transition-all duration-300 ease-in-out"></div>
                                    </div>
                                    <div className="text-start p-7 py-3 bg-blue-950 group-hover:bg-orange-500 transition-all duration-300 ease-in-out">
                                        <h3 className="text-zinc-400 group-hover:text-white transition-all duration-300 ease-in-out">Rosalina D. | $56,000</h3>
                                        <h2 className="text-white transition-all duration-300 ease-in-out">Rosali Office Design</h2>
                                    </div>
                                </div>
                                <div className="group">
                                    <div className='w-full h-auto relative overflow-clip aspect-[4/3]'>
                                        <img src={pg_5} className="w-full h-full object-cover"/>
                                        <div className="hidden md:block absolute -bottom-11 -left-15 h-[100px] bg-blue-950 -rotate-15 w-[150%] group-hover:bg-orange-500 transition-all duration-300 ease-in-out z-20"></div>
                                        <a href="#"><div className="absolute -bottom-30 right-5 group-hover:-translate-y-[140px] transition-all duration-500 ease-in-out z-50 p-3 w-fit rounded-full bg-white flex flex-row items-center justify-center">
                                            <img src={arrow} className="scale-70"/>
                                        </div></a>
                                        <div className="hidden md:block absolute h-[30px] w-[150%] bg-orange-500 group-hover:bg-orange-600 -rotate-19 z-10 bottom-11 -left-5 transition-all duration-300 ease-in-out"></div>
                                    </div>
                                    <div className="text-start p-7 py-3 bg-blue-950 group-hover:bg-orange-500 transition-all duration-300 ease-in-out">
                                        <h3 className="text-zinc-400 group-hover:text-white transition-all duration-300 ease-in-out">Rosalina D. | $56,000</h3>
                                        <h2 className="text-white transition-all duration-300 ease-in-out">Rosali Office Design</h2>
                                    </div>
                                </div>
                                <div className="group">
                                    <div className='w-full h-auto relative overflow-clip aspect-[4/3]'>
                                        <img src={pg_6} className="w-full h-full object-cover"/>
                                        <div className="hidden md:block absolute -bottom-11 -left-15 h-[100px] bg-blue-950 -rotate-15 w-[150%] group-hover:bg-orange-500 transition-all duration-300 ease-in-out z-20"></div>
                                        <a href="#"><div className="absolute -bottom-30 right-5 group-hover:-translate-y-[140px] transition-all duration-500 ease-in-out z-50 p-3 w-fit rounded-full bg-white flex flex-row items-center justify-center">
                                            <img src={arrow} className="scale-70"/>
                                        </div></a>
                                        <div className="hidden md:block absolute h-[30px] w-[150%] bg-orange-500 group-hover:bg-orange-600 -rotate-19 z-10 bottom-11 -left-5 transition-all duration-300 ease-in-out"></div>
                                    </div>
                                    <div className="text-start p-7 py-3 bg-blue-950 group-hover:bg-orange-500 transition-all duration-300 ease-in-out">
                                        <h3 className="text-zinc-400 group-hover:text-white transition-all duration-300 ease-in-out">Rosalina D. | $56,000</h3>
                                        <h2 className="text-white transition-all duration-300 ease-in-out">Rosali Office Design</h2>
                                    </div>
                                </div>
                                <div className="group">
                                    <div className='w-full h-auto relative overflow-clip aspect-[4/3]'>
                                        <img src={pg_6} className="w-full h-full object-cover"/>
                                        <div className="hidden md:block absolute -bottom-11 -left-15 h-[100px] bg-blue-950 -rotate-15 w-[150%] group-hover:bg-orange-500 transition-all duration-300 ease-in-out z-20"></div>
                                        <a href="#"><div className="absolute -bottom-30 right-5 group-hover:-translate-y-[140px] transition-all duration-500 ease-in-out z-50 p-3 w-fit rounded-full bg-white flex flex-row items-center justify-center">
                                            <img src={arrow} className="scale-70"/>
                                        </div></a>
                                        <div className="hidden md:block absolute h-[30px] w-[150%] bg-orange-500 group-hover:bg-orange-600 -rotate-19 z-10 bottom-11 -left-5 transition-all duration-300 ease-in-out"></div>
                                    </div>
                                    <div className="text-start p-7 py-3 bg-blue-950 group-hover:bg-orange-500 transition-all duration-300 ease-in-out">
                                        <h3 className="text-zinc-400 group-hover:text-white transition-all duration-300 ease-in-out">Rosalina D. | $56,000</h3>
                                        <h2 className="text-white transition-all duration-300 ease-in-out">Rosali Office Design</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabItem>
                    <TabItem title="Bedroom Making">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                            <div className="group">
                                <div className='w-full h-auto relative overflow-clip aspect-[4/3]'>
                                    <img src={pg_1} className="w-full h-full object-cover"/>
                                       <div className="hidden md:block absolute -bottom-11 -left-15 h-[100px] bg-blue-950 -rotate-15 w-[150%] group-hover:bg-orange-500 transition-all duration-300 ease-in-out z-20"></div>
                                          <a href="#"><div className="absolute -bottom-30 right-5 group-hover:-translate-y-[140px] transition-all duration-500 ease-in-out z-50 p-3 w-fit rounded-full bg-white flex flex-row items-center justify-center">
                                             <img src={arrow} className="scale-70"/>
                                          </div></a>
                                        <div className="hidden md:block absolute h-[30px] w-[150%] bg-orange-500 group-hover:bg-orange-600 -rotate-19 z-10 bottom-11 -left-5 transition-all duration-300 ease-in-out"></div>
                               </div>
                                <div className="text-start p-7 py-3 bg-blue-950 group-hover:bg-orange-500 transition-all duration-300 ease-in-out">
                                    <h3 className="text-zinc-400 group-hover:text-white transition-all duration-300 ease-in-out">Rosalina D. | $56,000</h3>
                                    <h2 className="text-white transition-all duration-300 ease-in-out">Rosali Office Design</h2>
                               </div>
                            </div>
                            <div className="group">
                                <div className='w-full h-auto relative overflow-clip aspect-[4/3]'>
                                    <img src={pg_2} className="w-full h-full object-cover"/>
                                       <div className="hidden md:block absolute -bottom-11 -left-15 h-[100px] bg-blue-950 -rotate-15 w-[150%] group-hover:bg-orange-500 transition-all duration-300 ease-in-out z-20"></div>
                                          <a href="#"><div className="absolute -bottom-30 right-5 group-hover:-translate-y-[140px] transition-all duration-500 ease-in-out z-50 p-3 w-fit rounded-full bg-white flex flex-row items-center justify-center">
                                             <img src={arrow} className="scale-70"/>
                                          </div></a>
                                        <div className="hidden md:block absolute h-[30px] w-[150%] bg-orange-500 group-hover:bg-orange-600 -rotate-19 z-10 bottom-11 -left-5 transition-all duration-300 ease-in-out"></div>
                               </div>
                                <div className="text-start p-7 py-3 bg-blue-950 group-hover:bg-orange-500 transition-all duration-300 ease-in-out">
                                    <h3 className="text-zinc-400 group-hover:text-white transition-all duration-300 ease-in-out">Rosalina D. | $56,000</h3>
                                    <h2 className="text-white transition-all duration-300 ease-in-out">Rosali Office Design</h2>
                               </div>
                            </div>
                            <div className="group">
                                <div className='w-full h-auto relative overflow-clip aspect-[4/3]'>
                                    <img src={pg_3} className="w-full h-full object-cover"/>
                                       <div className="hidden md:block absolute -bottom-11 -left-15 h-[100px] bg-blue-950 -rotate-15 w-[150%] group-hover:bg-orange-500 transition-all duration-300 ease-in-out z-20"></div>
                                          <a href="#"><div className="absolute -bottom-30 right-5 group-hover:-translate-y-[140px] transition-all duration-500 ease-in-out z-50 p-3 w-fit rounded-full bg-white flex flex-row items-center justify-center">
                                             <img src={arrow} className="scale-70"/>
                                          </div></a>
                                        <div className="hidden md:block absolute h-[30px] w-[150%] bg-orange-500 group-hover:bg-orange-600 -rotate-19 z-10 bottom-11 -left-5 transition-all duration-300 ease-in-out"></div>
                               </div>
                                <div className="text-start p-7 py-3 bg-blue-950 group-hover:bg-orange-500 transition-all duration-300 ease-in-out">
                                    <h3 className="text-zinc-400 group-hover:text-white transition-all duration-300 ease-in-out">Rosalina D. | $56,000</h3>
                                    <h2 className="text-white transition-all duration-300 ease-in-out">Rosali Office Design</h2>
                               </div>
                            </div>
                            <div className="group">
                                <div className='w-full h-auto relative overflow-clip aspect-[4/3]'>
                                    <img src={pg_4} className="w-full h-full object-cover"/>
                                       <div className="hidden md:block absolute -bottom-11 -left-15 h-[100px] bg-blue-950 -rotate-15 w-[150%] group-hover:bg-orange-500 transition-all duration-300 ease-in-out z-20"></div>
                                          <a href="#"><div className="absolute -bottom-30 right-5 group-hover:-translate-y-[140px] transition-all duration-500 ease-in-out z-50 p-3 w-fit rounded-full bg-white flex flex-row items-center justify-center">
                                             <img src={arrow} className="scale-70"/>
                                          </div></a>
                                        <div className="hidden md:block absolute h-[30px] w-[150%] bg-orange-500 group-hover:bg-orange-600 -rotate-19 z-10 bottom-11 -left-5 transition-all duration-300 ease-in-out"></div>
                               </div>
                                <div className="text-start p-7 py-3 bg-blue-950 group-hover:bg-orange-500 transition-all duration-300 ease-in-out">
                                    <h3 className="text-zinc-400 group-hover:text-white transition-all duration-300 ease-in-out">Rosalina D. | $56,000</h3>
                                    <h2 className="text-white transition-all duration-300 ease-in-out">Rosali Office Design</h2>
                               </div>
                            </div>
                        </div>
                    </TabItem>
                    <TabItem title="Floor Making">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                            <div className="group">
                                <div className='w-full h-auto relative overflow-clip aspect-[4/3]'>
                                    <img src={pg_2} className="w-full h-full object-cover"/>
                                       <div className="hidden md:block absolute -bottom-11 -left-15 h-[100px] bg-blue-950 -rotate-15 w-[150%] group-hover:bg-orange-500 transition-all duration-300 ease-in-out z-20"></div>
                                          <a href="#"><div className="absolute -bottom-30 right-5 group-hover:-translate-y-[140px] transition-all duration-500 ease-in-out z-50 p-3 w-fit rounded-full bg-white flex flex-row items-center justify-center">
                                             <img src={arrow} className="scale-70"/>
                                          </div></a>
                                        <div className="hidden md:block absolute h-[30px] w-[150%] bg-orange-500 group-hover:bg-orange-600 -rotate-19 z-10 bottom-11 -left-5 transition-all duration-300 ease-in-out"></div>
                               </div>
                                <div className="text-start p-7 py-3 bg-blue-950 group-hover:bg-orange-500 transition-all duration-300 ease-in-out">
                                    <h3 className="text-zinc-400 group-hover:text-white transition-all duration-300 ease-in-out">Rosalina D. | $56,000</h3>
                                    <h2 className="text-white transition-all duration-300 ease-in-out">Rosali Office Design</h2>
                               </div>
                            </div>
                            <div className="group">
                                <div className='w-full h-auto relative overflow-clip aspect-[4/3]'>
                                    <img src={pg_6} className="w-full h-full object-cover"/>
                                       <div className="hidden md:block absolute -bottom-11 -left-15 h-[100px] bg-blue-950 -rotate-15 w-[150%] group-hover:bg-orange-500 transition-all duration-300 ease-in-out z-20"></div>
                                          <a href="#"><div className="absolute -bottom-30 right-5 group-hover:-translate-y-[140px] transition-all duration-500 ease-in-out z-50 p-3 w-fit rounded-full bg-white flex flex-row items-center justify-center">
                                             <img src={arrow} className="scale-70"/>
                                          </div></a>
                                        <div className="hidden md:block absolute h-[30px] w-[150%] bg-orange-500 group-hover:bg-orange-600 -rotate-19 z-10 bottom-11 -left-5 transition-all duration-300 ease-in-out"></div>
                               </div>
                                <div className="text-start p-7 py-3 bg-blue-950 group-hover:bg-orange-500 transition-all duration-300 ease-in-out">
                                    <h3 className="text-zinc-400 group-hover:text-white transition-all duration-300 ease-in-out">Rosalina D. | $56,000</h3>
                                    <h2 className="text-white transition-all duration-300 ease-in-out">Rosali Office Design</h2>
                               </div>
                            </div>
                        </div>
                    </TabItem>
                    <TabItem title="Office Making">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                            <div className="group">
                                <div className='w-full h-auto relative overflow-clip aspect-[4/3]'>
                                    <img src={pg_3} className="w-full h-full object-cover"/>
                                       <div className="hidden md:block absolute -bottom-11 -left-15 h-[100px] bg-blue-950 -rotate-15 w-[150%] group-hover:bg-orange-500 transition-all duration-300 ease-in-out z-20"></div>
                                          <a href="#"><div className="absolute -bottom-30 right-5 group-hover:-translate-y-[140px] transition-all duration-500 ease-in-out z-50 p-3 w-fit rounded-full bg-white flex flex-row items-center justify-center">
                                             <img src={arrow} className="scale-70"/>
                                          </div></a>
                                        <div className="hidden md:block absolute h-[30px] w-[150%] bg-orange-500 group-hover:bg-orange-600 -rotate-19 z-10 bottom-11 -left-5 transition-all duration-300 ease-in-out"></div>
                               </div>
                                <div className="text-start p-7 py-3 bg-blue-950 group-hover:bg-orange-500 transition-all duration-300 ease-in-out">
                                    <h3 className="text-zinc-400 group-hover:text-white transition-all duration-300 ease-in-out">Rosalina D. | $56,000</h3>
                                    <h2 className="text-white transition-all duration-300 ease-in-out">Rosali Office Design</h2>
                               </div>
                            </div>
                            <div className="group">
                                <div className='w-full h-auto relative overflow-clip aspect-[4/3]'>
                                    <img src={pg_7} className="w-full h-full object-cover"/>
                                       <div className="hidden md:block absolute -bottom-11 -left-15 h-[100px] bg-blue-950 -rotate-15 w-[150%] group-hover:bg-orange-500 transition-all duration-300 ease-in-out z-20"></div>
                                          <a href="#"><div className="absolute -bottom-30 right-5 group-hover:-translate-y-[140px] transition-all duration-500 ease-in-out z-50 p-3 w-fit rounded-full bg-white flex flex-row items-center justify-center">
                                             <img src={arrow} className="scale-70"/>
                                          </div></a>
                                        <div className="hidden md:block absolute h-[30px] w-[150%] bg-orange-500 group-hover:bg-orange-600 -rotate-19 z-10 bottom-11 -left-5 transition-all duration-300 ease-in-out"></div>
                               </div>
                                <div className="text-start p-7 py-3 bg-blue-950 group-hover:bg-orange-500 transition-all duration-300 ease-in-out">
                                    <h3 className="text-zinc-400 group-hover:text-white transition-all duration-300 ease-in-out">Rosalina D. | $56,000</h3>
                                    <h2 className="text-white transition-all duration-300 ease-in-out">Rosali Office Design</h2>
                               </div>
                            </div>
                        </div>
                    </TabItem>
                    <TabItem title="Home Making">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                            <div className="group">
                                <div className='w-full h-auto relative overflow-clip aspect-[4/3]'>
                                    <img src={pg_2} className="w-full h-full object-cover"/>
                                       <div className="hidden md:block absolute -bottom-11 -left-15 h-[100px] bg-blue-950 -rotate-15 w-[150%] group-hover:bg-orange-500 transition-all duration-300 ease-in-out z-20"></div>
                                          <a href="#"><div className="absolute -bottom-30 right-5 group-hover:-translate-y-[140px] transition-all duration-500 ease-in-out z-50 p-3 w-fit rounded-full bg-white flex flex-row items-center justify-center">
                                             <img src={arrow} className="scale-70"/>
                                          </div></a>
                                        <div className="hidden md:block absolute h-[30px] w-[150%] bg-orange-500 group-hover:bg-orange-600 -rotate-19 z-10 bottom-11 -left-5 transition-all duration-300 ease-in-out"></div>
                               </div>
                                <div className="text-start p-7 py-3 bg-blue-950 group-hover:bg-orange-500 transition-all duration-300 ease-in-out">
                                    <h3 className="text-zinc-400 group-hover:text-white transition-all duration-300 ease-in-out">Rosalina D. | $56,000</h3>
                                    <h2 className="text-white transition-all duration-300 ease-in-out">Rosali Office Design</h2>
                               </div>
                            </div>
                            <div className="group">
                                <div className='w-full h-auto relative overflow-clip aspect-[4/3]'>
                                    <img src={pg_6} className="w-full h-full object-cover"/>
                                       <div className="hidden md:block absolute -bottom-11 -left-15 h-[100px] bg-blue-950 -rotate-15 w-[150%] group-hover:bg-orange-500 transition-all duration-300 ease-in-out z-20"></div>
                                          <a href="#"><div className="absolute -bottom-30 right-5 group-hover:-translate-y-[140px] transition-all duration-500 ease-in-out z-50 p-3 w-fit rounded-full bg-white flex flex-row items-center justify-center">
                                             <img src={arrow} className="scale-70"/>
                                          </div></a>
                                        <div className="hidden md:block absolute h-[30px] w-[150%] bg-orange-500 group-hover:bg-orange-600 -rotate-19 z-10 bottom-11 -left-5 transition-all duration-300 ease-in-out"></div>
                               </div>
                                <div className="text-start p-7 py-3 bg-blue-950 group-hover:bg-orange-500 transition-all duration-300 ease-in-out">
                                    <h3 className="text-zinc-400 group-hover:text-white transition-all duration-300 ease-in-out">Rosalina D. | $56,000</h3>
                                    <h2 className="text-white transition-all duration-300 ease-in-out">Rosali Office Design</h2>
                               </div>
                            </div>
                            <div className="group">
                                <div className='w-full h-auto relative overflow-clip aspect-[4/3]'>
                                    <img src={pg_8} className="w-full h-full object-cover"/>
                                       <div className="hidden md:block absolute -bottom-11 -left-15 h-[100px] bg-blue-950 -rotate-15 w-[150%] group-hover:bg-orange-500 transition-all duration-300 ease-in-out z-20"></div>
                                          <a href="#"><div className="absolute -bottom-30 right-5 group-hover:-translate-y-[140px] transition-all duration-500 ease-in-out z-50 p-3 w-fit rounded-full bg-white flex flex-row items-center justify-center">
                                             <img src={arrow} className="scale-70"/>
                                          </div></a>
                                        <div className="hidden md:block absolute h-[30px] w-[150%] bg-orange-500 group-hover:bg-orange-600 -rotate-19 z-10 bottom-11 -left-5 transition-all duration-300 ease-in-out"></div>
                               </div>
                                <div className="text-start p-7 py-3 bg-blue-950 group-hover:bg-orange-500 transition-all duration-300 ease-in-out">
                                    <h3 className="text-zinc-400 group-hover:text-white transition-all duration-300 ease-in-out">Rosalina D. | $56,000</h3>
                                    <h2 className="text-white transition-all duration-300 ease-in-out">Rosali Office Design</h2>
                               </div>
                            </div>
                            <div className="group">
                                <div className='w-full h-auto relative overflow-clip aspect-[4/3]'>
                                    <img src={pg_8} className="w-full h-full object-cover"/>
                                       <div className="hidden md:block absolute -bottom-11 -left-15 h-[100px] bg-blue-950 -rotate-15 w-[150%] group-hover:bg-orange-500 transition-all duration-300 ease-in-out z-20"></div>
                                          <a href="#"><div className="absolute -bottom-30 right-5 group-hover:-translate-y-[140px] transition-all duration-500 ease-in-out z-50 p-3 w-fit rounded-full bg-white flex flex-row items-center justify-center">
                                             <img src={arrow} className="scale-70"/>
                                          </div></a>
                                        <div className="hidden md:block absolute h-[30px] w-[150%] bg-orange-500 group-hover:bg-orange-600 -rotate-19 z-10 bottom-11 -left-5 transition-all duration-300 ease-in-out"></div>
                               </div>
                                <div className="text-start p-7 py-3 bg-blue-950 group-hover:bg-orange-500 transition-all duration-300 ease-in-out">
                                    <h3 className="text-zinc-400 group-hover:text-white transition-all duration-300 ease-in-out">Rosalina D. | $56,000</h3>
                                    <h2 className="text-white transition-all duration-300 ease-in-out">Rosali Office Design</h2>
                               </div>
                            </div>
                        </div>
                    </TabItem>
                </Tabs>
            </div>
        </section>
    )
}