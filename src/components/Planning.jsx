import tick from '../assets/Images/tick.png'
import pl_1 from '../assets/Images/pl_1.png'

export default function Planning(){
    return(
        <div className="flex flex-col items-center w-full bg-zinc-100">
            <div className="p-12 w-full max-w-7xl">
                <div className="relative my-12">
                    <h1 className="font-extrabold text-[160px] mb-0 text-white">Planning</h1>
                    <h2 className="absolute top-7 left-1/2 -translate-x-1/2 font-bold text-5xl text-black">Price & PLan</h2>
                    <h4 className="absolute top-0 left-1/2 -translate-x-1/2 text-black">Easy Planning</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 overflow-visible py-12">
                    <div>
                        <div className="bg-center bg-no-repeat h-fit bg-cover bg-white hover:bg-[url(../assets/Images/pl_1.png)] p-12 text-start group">
                            <h3 className="text-yellow-300 font-bold">$<span className="text-8xl">590</span>00</h3><br/>
                            <h2 className="text-black">Basic Plan</h2>
                            <p className="text-zinc-500">Basic Plan</p><br/>
                        <div>
                            <ul className='text-xs text-zinc-500'>
                                <li className="flex flex-row gap-2 items-center my-2">
                                    <img src={tick}/><p>Objectively integrate competencies</p>
                                </li>
                                <li className="flex flex-row gap-2 items-center my-2">
                                    <img src={tick}/><p>Process-centric communities</p>
                                </li>
                                <li className="flex flex-row gap-2 items-center my-2">
                                    <img src={tick}/><p>Emasculate holistic innovation</p>
                                </li>
                                <li className="flex flex-row gap-2 items-center my-2">
                                    <img src={tick}/><p>Incubate intuitive opportunities</p>
                                </li>
                            </ul><br/>
                        </div>
                        <div className="flex flex-col items-center">
                            <a href="#" className="w-fit py-3 px-7 bg-black self-center group-hover:bg-yellow-300 text-white border-1 rounded-md transition-all duration-500 ease-in-out border-solid">Get Your Plan Done</a>
                        </div>
                    </div>
                    </div>

                    <div>
                        <div className="bg-center bg-no-repeat h-fit bg-cover p-12 text-start group " style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${pl_1})`}}>
                            <h3 className="text-yellow-300 font-bold">$<span className="text-8xl">590</span>00</h3><br/>
                            <h2 className="text-white">Basic Plan</h2>
                            <p className="text-zinc-500">Basic Plan</p><br/>
                        <div>
                            <ul className='text-xs'>
                                <li className="flex flex-row gap-2 items-center my-2">
                                    <img src={tick}/><p>Objectively integrate competencies</p>
                                </li>
                                <li className="flex flex-row gap-2 items-center my-2">
                                    <img src={tick}/><p>Process-centric communities</p>
                                </li>
                                <li className="flex flex-row gap-2 items-center my-2">
                                    <img src={tick}/><p>Emasculate holistic innovation</p>
                                </li>
                                <li className="flex flex-row gap-2 items-center my-2">
                                    <img src={tick}/><p>Incubate intuitive opportunities</p>
                                </li>
                                <li className="flex flex-row gap-2 items-center my-2">
                                    <img src={tick}/><p>Incubate intuitive opportunities</p>
                                </li>
                                <li className="flex flex-row gap-2 items-center my-2">
                                    <img src={tick}/><p>24/7 Online Support</p>
                                </li>
                            </ul><br/>
                        </div>
                        <div className="flex flex-col items-center">
                            <a href="#" className="w-fit py-3 px-7 bg-black self-center text-white  rounded-md transition-all duration-500 ease-in-out">Get Your Plan Done</a>
                        </div>
                    </div>
                    </div>

                    <div>
                        <div className="bg-center bg-no-repeat h-fit bg-cover bg-white hover:bg-[url(../assets/Images/pl_1.png)] p-12 text-start group">
                            <h3 className="text-yellow-300 font-bold">$<span className="text-8xl">590</span>00</h3><br/>
                            <h2 className="text-black">Basic Plan</h2>
                            <p className="text-zinc-500">Basic Plan</p><br/>
                        <div>
                            <ul className='text-xs text-zinc-500'>
                                <li className="flex flex-row gap-2 items-center my-2">
                                    <img src={tick}/><p>Objectively integrate competencies</p>
                                </li>
                                <li className="flex flex-row gap-2 items-center my-2">
                                    <img src={tick}/><p>Process-centric communities</p>
                                </li>
                                <li className="flex flex-row gap-2 items-center my-2">
                                    <img src={tick}/><p>Emasculate holistic innovation</p>
                                </li>
                                <li className="flex flex-row gap-2 items-center my-2">
                                    <img src={tick}/><p>Incubate intuitive opportunities</p>
                                </li>
                            </ul><br/>
                        </div>
                        <div className="flex flex-col items-center">
                            <a href="#" className="w-fit py-3 px-7 bg-black self-center group-hover:bg-yellow-300 text-white border-1 rounded-md transition-all duration-500 ease-in-out border-solid">Get Your Plan Done</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}