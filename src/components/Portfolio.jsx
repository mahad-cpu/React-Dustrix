import { useState } from "react"

export default function Portfolio(){

    return(
        <section className="py-12 w-full flex flex-col bg-white items-center relative overflow-clip">
            <div className=" flex flex-col items-center w-full max-w-7xl z-20">
                <div className="relative flex flex-col items-center">
                    <h1 className="[-webkit-text-stroke:0.7px_lightgrey] text-transparent text-[160px] font-extrabold">Portfolio</h1>
                    <h2 className="font-bold text-5xl text-blue-950 absolute top-[70%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">Our Case Study</h2>
                    <h3 className="absolute top-3 left-1/2 -translate-x-1/2 text-orange-500">Portfolio</h3>
                </div>
                <div className="flex flex-row gap-3 p-2 w-fit mt-12">
                    <button onClick={() => tab_f('All')} className="font-bold text-black py-2 px-5 rounded-full bg-zinc-200 hover:bg-orange-500 hover:text-white focus:bg-orange-500 transition-all duration-300 ease-in-out">View All</button>
                    <button onClick={() => tab_f('BedRoom')} className="font-bold text-black py-2 px-5 rounded-full bg-zinc-200 hover:bg-orange-500 hover:text-white focus:bg-orange-500 transition-all duration-300 ease-in-out">Bedroom Making</button>
                    <button onClick={() => tab_f('Floor')} className="font-bold text-black py-2 px-5 rounded-full bg-zinc-200 hover:bg-orange-500 hover:text-white focus:bg-orange-500 transition-all duration-300 ease-in-out">Floor Making</button>
                    <button onClick={() => tab_f('Office')} className="font-bold text-black py-2 px-5 rounded-full bg-zinc-200 hover:bg-orange-500 hover:text-white focus:bg-orange-500 transition-all duration-300 ease-in-out">Office Making</button>
                    <button onClick={() => tab_f('Home')} className="font-bold text-black py-2 px-5 rounded-full bg-zinc-200 hover:bg-orange-500 hover:text-white focus:bg-orange-500 transition-all duration-300 ease-in-out">Home Making</button>
                </div>
            </div>
            <div className="h-[500px] w-[150%] bg-zinc-100 absolute -rotate-10 -bottom-100 z-10"></div>
        </section>
    )
}