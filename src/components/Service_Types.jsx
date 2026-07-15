import ss_1 from '../assets/Images/ss_1.png'
import ss_2 from '../assets/Images/ss_2.png'
import ss_3 from '../assets/Images/ss_3.png'
import ss_4 from '../assets/Images/ss_4.png'
import ss_5 from '../assets/Images/ss_5.png'
import ss_6 from '../assets/Images/ss_6.png'
import divider from '../assets/Images/divider.png'
import building from '../assets/Images/build.png'
import truck from '../assets/Images/truck.png'
import arrow from '../assets/Images/arrow.png'
import helmet from '../assets/Images/helmet.png'

export default function Service_Types(){
    return(
        <section className="flex flex-col items-center w-full py-12 bg-zinc-900">
            <div className="py-12 px-5 w-full max-w-7xl p-12">
                <div className="grid grid-cols-1 md:gird-cols-2 lg:grid-cols-3 gap-3">
                        <div className="border-8 border-zinc-800">
                            <div className="relative">
                                <img src={ss_1} className="object-cover"/>
                                <div className="absolute p-2 bg-amber-500 hover:bg-amber-800 transition-all duration-500 ease-in-out bottom-0 right-0">
                                    <img src={divider} />
                                </div>
                            </div>
                            <div className="p-5 text-start bg-zinc-900">
                                <a href="#"><h2 className="font-bold hover:text-amber-500 transition-all duration-500 ease-in-out">Metal Forming</h2></a>
                                    <p className="text-sm">Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod</p>
                                    <a href="#" className="flex flex-row items-center"><h3 className="font-bold hover:text-amber-500 transition-all duration-500 ease-in-out hover:pl-1">Read More</h3><img src={arrow} className="scale-30 rotate-90"/></a>
                            </div>
                        </div>
                        <div className="border-8 border-zinc-800">
                            <div className="relative">
                                <img src={ss_2} className="object-cover"/>
                                <div className="absolute p-2 bg-amber-500 hover:bg-amber-800 transition-all duration-500 ease-in-out bottom-0 right-0">
                                    <img src={building} />
                                </div>
                            </div>
                            <div className="p-5 text-start bg-zinc-900">
                                <a href="#"><h2 className="font-bold hover:text-amber-500 transition-all duration-500 ease-in-out">Manufacturing</h2></a>
                                    <p className="text-sm">Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod</p>
                                    <a href="#" className="flex flex-row items-center"><h3 className="font-bold hover:text-amber-500 transition-all duration-500 ease-in-out hover:pl-1">Read More</h3><img src={arrow} className="scale-30 rotate-90"/></a>
                            </div>
                        </div>
                        <div className="border-8 border-zinc-800">
                            <div className="relative">
                                <img src={ss_3} className="object-cover"/>
                                <div className="absolute p-2 bg-amber-500 hover:bg-amber-800 transition-all duration-500 ease-in-out bottom-0 right-0">
                                    <img src={truck} />
                                </div>
                            </div>
                            <div className="p-5 text-start bg-zinc-900">
                                <a href="#"><h2 className="font-bold hover:text-amber-500 transition-all duration-500 ease-in-out">Welding & Laser</h2></a>
                                    <p className="text-sm">Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod</p>
                                    <a href="#" className="flex flex-row items-center"><h3 className="font-bold hover:text-amber-500 transition-all duration-500 ease-in-out hover:pl-1">Read More</h3><img src={arrow} className="scale-30 rotate-90"/></a>
                            </div>
                        </div>
                        <div className="border-8 border-zinc-800">
                            <div className="relative">
                                <img src={ss_4} className="object-cover"/>
                                <div className="absolute p-2 bg-amber-500 hover:bg-amber-800 transition-all duration-500 ease-in-out bottom-0 right-0">
                                    <img src={building} />
                                </div>
                            </div>
                            <div className="p-5 text-start bg-zinc-900">
                                <a href="#"><h2 className="font-bold hover:text-amber-500 transition-all duration-500 ease-in-out">Construction Management</h2></a>
                                    <p className="text-sm">Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod</p>
                                    <a href="#" className="flex flex-row items-center"><h3 className="font-bold hover:text-amber-500 transition-all duration-500 ease-in-out hover:pl-1">Read More</h3><img src={arrow} className="scale-30 rotate-90"/></a>
                            </div>
                        </div>
                        <div className="border-8 border-zinc-800">
                            <div className="relative">
                                <img src={ss_5} className="object-cover"/>
                                <div className="absolute p-2 bg-amber-500 hover:bg-amber-800 transition-all duration-500 ease-in-out bottom-0 right-0">
                                    <img src={building} />
                                </div>
                            </div>
                            <div className="p-5 text-start bg-zinc-900">
                                <a href="#"><h2 className="font-bold hover:text-amber-500 transition-all duration-500 ease-in-out">Apartment Design</h2></a>
                                    <p className="text-sm">Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod</p>
                                    <a href="#" className="flex flex-row items-center"><h3 className="font-bold hover:text-amber-500 transition-all duration-500 ease-in-out hover:pl-1">Read More</h3><img src={arrow} className="scale-30 rotate-90"/></a>
                            </div>
                        </div>
                        <div className="border-8 border-zinc-800">
                            <div className="relative">
                                <img src={ss_6} className="object-cover"/>
                                <div className="absolute p-2 bg-amber-500 hover:bg-amber-800 transition-all duration-500 ease-in-out bottom-0 right-0">
                                    <img src={helmet} />
                                </div>
                            </div>
                            <div className="p-5 text-start bg-zinc-900">
                                <a href="#"><h2 className="font-bold hover:text-amber-500 transition-all duration-500 ease-in-out">Architecture & Building</h2></a>
                                    <p className="text-sm">Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod</p>
                                    <a href="#" className="flex flex-row items-center"><h3 className="font-bold hover:text-amber-500 transition-all duration-500 ease-in-out hover:pl-1">Read More</h3><img src={arrow} className="scale-30 rotate-90"/></a>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    )
}