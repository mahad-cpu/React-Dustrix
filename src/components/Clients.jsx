import cl_1 from '../assets/Images/cl_1.png'
import cl_2 from '../assets/Images/cl_2.png'
import cl_3 from '../assets/Images/cl_3.png'
import cl_4 from '../assets/Images/cl_4.png'
import cl_5 from '../assets/Images/cl_5.png'
import cl_6 from '../assets/Images/cl_6.png'
import cl_7 from '../assets/Images/cl_7.png'
import cl_8 from '../assets/Images/cl_8.png'
import cl_9 from '../assets/Images/cl_9.png'
import cl_10 from '../assets/Images/cl_10.png'

export default function Client(){
    return(
        <section className="flex flex-col items-center bg-zinc-100 p-12">
            <div className="py-12">
                <div className="relative">
                    <h1 className="font-extrabold text-[160px] mb-0 text-white">Clients</h1>
                    <h2 className="absolute top-7 left-1/2 -translate-x-1/2 font-bold text-5xl text-black">Our Sponsors</h2>
                    <h4 className="absolute top-0 left-1/2 -translate-x-1/2 text-black">Sponsors</h4>
                </div>
                <br/>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 p-5 mt-12">
                    <div className="border-1 border-zinc-200 flex flex-col items-center justify-center px-7 py-10">
                        <img src={cl_1} />
                    </div> 
                    <div className="border-1 border-zinc-200 flex flex-col items-center justify-center px-7 py-10">
                        <img src={cl_2} />
                    </div> 
                    <div className="border-1 border-zinc-200 flex flex-col items-center justify-center px-7 py-10">
                        <img src={cl_3} />
                    </div> 
                    <div className="border-1 border-zinc-200 flex flex-col items-center justify-center px-7 py-10">
                        <img src={cl_4} />
                    </div> 
                    <div className="border-1 border-zinc-200 flex flex-col items-center justify-center px-7 py-10">
                        <img src={cl_5} />
                    </div> 
                    <div className="border-1 border-zinc-200 flex flex-col items-center justify-center px-7 py-10">
                        <img src={cl_6} />
                    </div> 
                    <div className="border-1 border-zinc-200 flex flex-col items-center justify-center px-7 py-10">
                        <img src={cl_7} />
                    </div> 
                    <div className="border-1 border-zinc-200 flex flex-col items-center justify-center px-7 py-10">
                        <img src={cl_8} />
                    </div> 
                    <div className="border-1 border-zinc-200 flex flex-col items-center justify-center px-7 py-10">
                        <img src={cl_9} />
                    </div> 
                    <div className="border-1 border-zinc-200 flex flex-col items-center justify-center px-7 py-10">
                        <img src={cl_10} />
                    </div> 
                </div>
            </div>
        </section>
    )
}