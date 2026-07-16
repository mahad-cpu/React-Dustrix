import message from '../assets/Images/messages.png'
import phone from '../assets/Images/phone.png'
import location from '../assets/Images/location.png'
import arrow from '../assets/Images/arrow.png'

export default function(){
    return(
        <section className="flex flex-col items-center w-full bg-white pt-12">
            <div className="w-full max-w-7xl pt-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 p-7 ">
                    <div className="flex flex-col items-center justify-center group hover:bg-black transition-all duration-500 ease-in-out bg-zinc-100 p-5 py-12 gap-5">
                        <div className="flex flex-row gap-3 group ">
                            <div className="rounded-full p-2 w-fit bg-zinc-300 group-hover:bg-yellow-300 transition-all duration-500 ease-in-out"><img src={message} className="scale-50"/></div>
                            <div>
                                <h2 className="font-bold text-black group-hover:text-white">Email Address</h2>
                                <p className="text-zinc-500">Sent mail asap anytime</p>
                            </div>
                        </div>
                        <div className="flex flex-row w-[80%] justify-between items-center">
                            <div>
                                <p className="text-zinc-500">info@example.com</p>
                                <p className="text-zinc-500">jobs@example.com</p>
                            </div>
                            <div className="rounded-full p-1 w-fit bg-zinc-300 group-hover:bg-zinc-500 transition-all duration-500 ease-in-out"><img src={arrow} className="scale-30 rotate-90"/></div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center group hover:bg-black transition-all duration-500 ease-in-out bg-zinc-100 p-5 py-12 gap-5">
                        <div className="flex flex-row gap-3 group">
                            <div className="rounded-full p-2 w-fit bg-zinc-300 group-hover:bg-yellow-300 transition-all duration-500 ease-in-out"><img src={message} className="scale-50"/></div>
                            <div>
                                <h2 className="font-bold text-black group-hover:text-white">Phone Number</h2>
                                <p className="text-zinc-500">call us asap anytime</p>
                            </div>
                        </div>
                        <div className="flex flex-row w-[80%] justify-between items-center">
                            <div>
                                <p className="text-zinc-500">098-098-098-09</p>
                                <p className="text-zinc-500">+(098)-098-098-09</p>
                            </div>
                            <div className="rounded-full p-1 w-fit bg-zinc-300 group-hover:bg-zinc-500 transition-all duration-500 ease-in-out"><img src={arrow} className="scale-30 rotate-90"/></div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center group hover:bg-black transition-all duration-500 ease-in-out bg-zinc-100 p-5 py-12 gap-5">
                        <div className="flex flex-row gap-3 group">
                            <div className="rounded-full p-2 w-fit bg-zinc-300 group-hover:bg-yellow-300 transition-all duration-500 ease-in-out"><img src={message} className="scale-50"/></div>
                            <div>
                                <h2 className="font-bold text-black group-hover:text-white">Office Address</h2>
                                <p className="text-zinc-500">Sent mail asap anytime</p>
                            </div>
                        </div>
                        <div className="flex flex-row w-[80%] justify-between items-center">
                            <div className="text-start">
                                <p className="text-zinc-500">B2, Miranda City Tower</p>
                                <p className="text-zinc-500">NewYork, US</p>
                            </div>
                            <div className="rounded-full p-1 w-fit bg-zinc-300 group-hover:bg-zinc-500 transition-all duration-500 ease-in-out"><img src={arrow} className="scale-30 rotate-90"/></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}