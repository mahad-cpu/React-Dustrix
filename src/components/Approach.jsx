import ap_1 from '../assets/Images/ap_1.png'
import ap_2 from '../assets/Images/ap_2.png'
import ap_3 from '../assets/Images/ap_3.png'
import arrow from '../assets/Images/arrow.png'
import helmet from '../assets/Images/helmet.png'
import pencil from '../assets/Images/pencil.png'
import divider from '../assets/Images/divider.png'

export default function Approach(){
    return(
        <div>
            <h1 className="text-8xl font-bold">Approach</h1>
            <h2 className="text-3xl font-bold">Capitalise On Hanging</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="border-8 border-zinc-800">
                    <div className="relative">
                        <img src={ap_1} className="object-cover"/>
                        <div className="absolute p-2 bg-amber-500 hover:bg-amber-800 transition-all duration-500 ease-in-out bottom-0 right-0">
                            <img src={divider} />
                        </div>
                    </div>
                    <div className="p-5 text-start bg-zinc-900">
                        <a href="#"><h2 className="font-bold hover:text-amber-500 transition-all duration-500 ease-in-out">Our Vision</h2></a>
                        <p className="text-sm">Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod</p>
                        <a href="#" className="flex flex-row items-center"><h3 className="font-bold hover:text-amber-500 transition-all duration-500 ease-in-out hover:pl-1">Read More</h3><img src={arrow} className="scale-30 rotate-90"/></a>
                    </div>
                </div>
                <div className="border-8 border-zinc-800">
                    <div className="relative">
                        <img src={ap_2} className="object-cover"/>
                        <div className="absolute p-2 bg-amber-500 hover:bg-amber-800 transition-all duration-500 ease-in-out bottom-0 right-0">
                            <img src={pencil} />
                        </div>
                    </div>
                    <div className="p-5 text-start bg-zinc-900">
                        <a href="#"><h2 className="font-bold hover:text-amber-500 transition-all duration-500 ease-in-out">Our Vision</h2></a>
                        <p className="text-sm">Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod</p>
                        <a href="#" className="flex flex-row items-center"><h3 className="font-bold hover:text-amber-500 transition-all duration-500 ease-in-out hover:pl-1">Read More</h3><img src={arrow} className="scale-30 rotate-90"/></a>
                    </div>
                </div>
                <div className="border-8 border-zinc-800">
                    <div className="relative">
                        <img src={ap_3} className="object-cover"/>
                        <div className="absolute p-2 bg-amber-500 hover:bg-amber-800 transition-all duration-500 ease-in-out bottom-0 right-0">
                            <img src={helmet} />
                        </div>
                    </div>
                    <div className="p-5 text-start bg-zinc-900">
                        <a href="#"><h2 className="font-bold hover:text-amber-500 transition-all duration-500 ease-in-out">Our Vision</h2></a>
                        <p className="text-sm">Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod</p>
                        <a href="#" className="flex flex-row items-center"><h3 className="font-bold hover:text-amber-500 transition-all duration-500 ease-in-out hover:pl-1">Read More</h3><img src={arrow} className="scale-30 rotate-90"/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}