import sv1 from '../assets/Images/sv-1.png'
import sv2 from '../assets/Images/sv-2.png'
import sv3 from '../assets/Images/sv-3.png'
import sv4 from '../assets/Images/sv-4.png'

export default function Services(){
    return(
        <div>
            <h1 className="font-bold text-8xl">Services</h1>
            <h2 className="font-bold text-4xl">What we do</h2>
            <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-4 gap-3 p-7">
                <div className="w-full rounded-md bg-black flex flex-row items-center justify-center pt-12 pb-8 gap-5 hover:bg-white">
                    <div classsName="relative">
                        <div className="relative rounded-full bg-amber-500 w-fit p-3"><img src={sv1}/></div>
                        <h4 className="font-bold text-white">Quick Coordinate<br/>E-business</h4>
                        <a href="#" className="absolute top-0 py-2 px-5 bg-amber-500 rounded-md">Learn More</a>
                    </div>
                    <div classsName="relative">
                        <div className="relative rounded-full bg-amber-500 w-fit p-3"><img src={sv1}/></div>
                        <h4 className="font-bold text-white">Quick Coordinate<br/>E-business</h4>
                        <a href="#" className="absolute top-0 py-2 px-5 bg-amber-500 rounded-md">Learn More</a>
                    </div>
                    <div classsName="relative">
                        <div className="relative rounded-full bg-amber-500 w-fit p-3"><img src={sv1}/></div>
                        <h4 className="font-bold text-white">Quick Coordinate<br/>E-business</h4>
                        <a href="#" className="absolute top-0 py-2 px-5 bg-amber-500 rounded-md">Learn More</a>
                    </div>
                    <div classsName="relative">
                        <div className="relative rounded-full bg-amber-500 w-fit p-3"><img src={sv1}/></div>
                        <h4 className="font-bold text-white">Quick Coordinate<br/>E-business</h4>
                        <a href="#" className="absolute top-0 py-2 px-5 bg-amber-500 rounded-md">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}