import exp from '../assets/Images/experience.png'
import arrow from '../assets/Images/arrow.png'

export default function Experience(){
    return(
        <div className="flex flex-col items-center w-full bg-white py-12">
            <div className="w-full max-w-7xl flex flex-col lg:flex-row w-full p-12 gap-5 text-white">
                <div className="lg:w-[50%]">
                    <img src={exp} />
                    <h3 className="text-black text-lg">Years Of Experience With <span className="font-bold">Creative Team</span></h3>
                </div>
                <div className="text-start lg:w-[50%] leading-none">
                    <h4 className="text-zinc-500 text-sm">Easily import the whole Industry</h4>
                    <h1 className="font-bold text-black">Amwerk is always interested.</h1>
                    <div className="px-5 py-2 my-5 border-l-5 border-yellow-300 w-[70%]">
                        <h3 className="text-black">Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.</h3>
                    </div>
                    <p className="text-zinc-500 w-[70%]">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                    <button onClick="#" className="py-5 px-7 mt-7 flex flex-row items-center gap-2 bg-yellow-300 rounded-lg hover:bg-black  transition-all duration-300 ease-in-out">Our Services<img src={arrow} className="h-[16px] rotate-90"/></button>
                </div>
            </div>
        </div>
    )
}