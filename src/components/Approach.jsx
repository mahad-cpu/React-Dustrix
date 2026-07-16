import ap_1 from '../assets/Images/ap_1.png'
import ap_2 from '../assets/Images/ap_2.png'
import ap_3 from '../assets/Images/ap_3.png'
import arrow from '../assets/Images/arrow.png'
import helmet from '../assets/Images/helmet.png'
import pencil from '../assets/Images/pencil.png'
import divider from '../assets/Images/divider.png'

export default function Approach(){
    return(
        <section className="w-full flex flex-col items-center bg-zinc-100 py-12">
            <div className="w-full max-w-7xl p-12 pt-0">
               <div className="relative my-12">
                    <h1 className="font-extrabold text-[160px] mb-0 text-white">Approach</h1>
                    <h2 className="absolute top-7 left-1/2 -translate-x-1/2 font-bold text-5xl text-black">Our Approach</h2>
                    <h4 className="absolute top-0 left-1/2 -translate-x-1/2 text-black">Capitalize On Hanging</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl pt-12 bg-zinc-2000">
                    <div className="border-8 border-white bg-zinc-100">
                        <div className="relative">
                            <img src={ap_1} className="object-cover"/>
                            <div className="absolute p-2 bg-yellow-300 hover:bg-amber-800 transition-all duration-500 ease-in-out bottom-0 right-0">
                                <img src={divider} />
                            </div>
                        </div>
                        <div className="p-5 text-start bg-zinc-100">
                            <a href="#"><h2 className="text-black font-bold hover:text-yellow-300 transition-all duration-500 ease-in-out">Our Vision</h2></a>
                            <p className="text-sm text-zinc-500">Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod</p>
                            <a href="#" className="flex flex-row items-center"><h3 className="text-black font-bold hover:text-yellow-300 transition-all duration-500 ease-in-out hover:pl-1">Read More</h3><img src={arrow} className="scale-30 rotate-90"/></a>
                        </div>
                    </div>
                    <div className="border-8 border-white bg-zinc-100">
                        <div className="relative">
                            <img src={ap_2} className="object-cover"/>
                            <div className="absolute p-2 bg-yellow-300 hover:bg-amber-800 transition-all duration-500 ease-in-out bottom-0 right-0">
                                <img src={pencil} />
                            </div>
                        </div>
                        <div className="p-5 text-start bg-zinc-100">
                            <a href="#"><h2 className="text-black font-bold hover:text-yellow-300 transition-all duration-500 ease-in-out">Our Vision</h2></a>
                            <p className="text-sm text-zinc-500">Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod</p>
                            <a href="#" className="flex flex-row items-center"><h3 className="text-black font-bold hover:text-yellow-300 transition-all duration-500 ease-in-out hover:pl-1">Read More</h3><img src={arrow} className="scale-30 rotate-90"/></a>
                        </div>
                    </div>
                    <div className="border-8 border-white bg-zinc-100">
                        <div className="relative">
                            <img src={ap_3} className="object-cover"/>
                            <div className="absolute p-2 bg-yellow-300 hover:bg-amber-800 transition-all duration-500 ease-in-out bottom-0 right-0">
                                <img src={helmet} />
                            </div>
                        </div>
                        <div className="p-5 text-start bg-zinc-100">
                            <a href="#"><h2 className="text-black font-bold hover:text-yellow-300 transition-all duration-500 ease-in-out">Our Vision</h2></a>
                            <p className="text-sm text-zinc-500">Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod</p>
                            <a href="#" className="flex flex-row items-center"><h3 className="text-black font-bold hover:text-yellow-300 transition-all duration-500 ease-in-out hover:pl-1">Read More</h3><img src={arrow} className="scale-30 rotate-90"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}