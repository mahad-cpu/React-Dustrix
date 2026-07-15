import sv1 from '../assets/Images/sv-1.png'
import sv2 from '../assets/Images/sv-2.png'
import sv3 from '../assets/Images/sv-3.png'
import sv4 from '../assets/Images/sv-4.png'
import svb1 from '../assets/Images/svb1.png'
import svb2 from '../assets/Images/svb2.png'
import svb3 from '../assets/Images/svb3.png'
import svb4 from '../assets/Images/svb4.png'

export default function Services(){
    return(
    <div className="w-full flex flex-col items-center bg-zinc-800 p-12">
        <div className="w-full max-w-7xl py-12">
            <div>
                <h1 className="font-extrabold text-9xl mb-0">Services</h1>
                <h2 className="font-bold text-4xl">What we do</h2>
            </div>
            <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-4 gap-5 p-7 px-12">
                <div className={`rounded-md bg-zinc-900 flex flex-row items-center justify-center pt-12 pb-12 gap-5 bg-cover bg-center transition-all duration-300 hover:bg-[url('${svb1}')]`}>
                    <div className="relative flex flex-col items-center gap-5 justify-center">
                        <div className="rounded-full bg-amber-500 w-fit p-7">
                            <img src={sv1}/>
                        </div>
                        <h4 className="font-bold text-2xl text-white">Quick Coordinate<br/>E-business</h4>
                        <a href="#" className="absolute top-55 left-1 w-full py-2 px-5 bg-amber-500 rounded-md">Learn More</a>
                    </div>
                </div>
                <div className=" rounded-md bg-zinc-900 flex flex-row items-center justify-center pt-12 pb-12 gap-5 hover:bg-[url('${svb2}')]`">
                    <div className="relative flex flex-col items-center gap-5 justify-center">
                        <div className="rounded-full bg-amber-500 w-fit p-7">
                            <img src={sv2}/>
                        </div>
                        <h4 className="font-bold text-2xl text-white">Quick Coordinate<br/>E-business</h4>
                        <a href="#" className="absolute top-55 left-1 w-full py-2 px-5 bg-amber-500 rounded-md">Learn More</a>
                    </div>
                </div>
                <div className=" rounded-md bg-zinc-900 flex flex-row items-center justify-center pt-12 pb-12 gap-5 hover:bg-[url('${svb3}')]`">
                    <div className="relative flex flex-col items-center gap-5 justify-center">
                        <div className="rounded-full bg-amber-500 w-fit p-7">
                            <img src={sv3}/>
                        </div>
                        <h4 className="font-bold text-2xl text-white">Quick Coordinate<br/>E-business</h4>
                        <a href="#" className="absolute top-55 left-1 w-full py-2 px-5 bg-amber-500 rounded-md">Learn More</a>
                    </div>
                </div>
                <div className=" rounded-md bg-zinc-900 flex flex-row items-center justify-center pt-12 pb-12 gap-5 hover:bg-[url('${svb4}')]`">
                    <div className="relative flex flex-col items-center gap-5 justify-center">
                        <div className="rounded-full bg-amber-500 w-fit p-7">
                            <img src={sv4}/>
                        </div>
                        <h4 className="font-bold text-2xl text-white">Quick Coordinate<br/>E-business</h4>
                        <a href="#" className="absolute top-55 left-1 w-full py-2 px-5 bg-amber-500 rounded-md">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}