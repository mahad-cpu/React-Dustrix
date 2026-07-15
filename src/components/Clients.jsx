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
        <div>
            <h1 className="text-8xl font-bold">Clients</h1>
            <h2 className="text-3xl font-bold">Our Sponsors</h2>
            <br/>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 p-5">
                <div className="border-1 border-zinc-800 flex flex-col items-center justify-center px-7 py-10">
                    <img src={cl_1} />
                </div> 
                <div className="border-1 border-zinc-800 flex flex-col items-center justify-center px-7 py-10">
                    <img src={cl_2} />
                </div> 
                <div className="border-1 border-zinc-800 flex flex-col items-center justify-center px-7 py-10">
                    <img src={cl_3} />
                </div> 
                <div className="border-1 border-zinc-800 flex flex-col items-center justify-center px-7 py-10">
                    <img src={cl_4} />
                </div> 
                <div className="border-1 border-zinc-800 flex flex-col items-center justify-center px-7 py-10">
                    <img src={cl_5} />
                </div> 
                <div className="border-1 border-zinc-800 flex flex-col items-center justify-center px-7 py-10">
                    <img src={cl_6} />
                </div> 
                <div className="border-1 border-zinc-800 flex flex-col items-center justify-center px-7 py-10">
                    <img src={cl_7} />
                </div> 
                <div className="border-1 border-zinc-800 flex flex-col items-center justify-center px-7 py-10">
                    <img src={cl_8} />
                </div> 
                <div className="border-1 border-zinc-800 flex flex-col items-center justify-center px-7 py-10">
                    <img src={cl_9} />
                </div> 
                <div className="border-1 border-zinc-800 flex flex-col items-center justify-center px-7 py-10">
                    <img src={cl_10} />
                </div> 
            </div>
        </div>
    )
}