import tick from '../assets/Images/tick.png'
import pl_1 from '../assets/Images/pl_1.png'

export default function Planning(){
    return(
        <div className="flex flex-col items-center w-full bg-zinc-800">
            <div className="p-12 w-full max-w-7xl">
                <h1 className="font-extrabold text-white text-9xl">Planning</h1>
                <h2 className="font-bold text-white text-4xl">Price & Plans</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 overflow-visible">
                    <div>
                        <div className="bg-center bg-no-repeat h-fit bg-cover bg-zinc-700 hover:bg-[url(../assets/Images/pl_1.png)] p-12 text-start group">
                        <h3 className="text-yellow-500 font-bold">$<span className="text-8xl">590</span>00</h3><br/>
                        <h2>Basic Plan</h2>
                        <p>Basic Plan</p><br/>
                        <div>
                            <ul className='text-xs'>
                                <li className="flex flex-row gap-2 group-hover:text-white items-center my-2">
                                    <img src={tick}/><p>Objectively integrate competencies</p>
                                </li>
                                <li className="flex flex-row gap-2 group-hover:text-white items-center my-2">
                                    <img src={tick}/><p>Process-centric communities</p>
                                </li>
                                <li className="flex flex-row gap-2 group-hover:text-white items-center my-2">
                                    <img src={tick}/><p>Emasculate holistic innovation</p>
                                </li>
                                <li className="flex flex-row gap-2 group-hover:text-white items-center my-2">
                                    <img src={tick}/><p>Incubate intuitive opportunities</p>
                                </li>
                            </ul><br/>
                        </div>
                        <div>
                            <a href="#" className="w-full py-3 px-7 bg-black self-center group-hover:bg-amber-500 text-white border-1 rounded-md transition-all duration-500 ease-in-out border-solid">Get Your Plan Done</a>
                        </div>
                    </div>
                    </div>

                    <div>
                        <div className="bg-center bg-no-repeat h-fit bg-cover p-12 text-start group " style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${pl_1})`}}>
                        <h3 className="text-yellow-500 font-bold">$<span className="text-8xl">590</span>00</h3><br/>
                        <h2>Basic Plan</h2>
                        <p>Basic Plan</p><br/>
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
                        <div>
                            <a href="#" className="w-full py-3 px-7 bg-black self-center text-white border-1 rounded-md transition-all duration-500 ease-in-out border-solid">Get Your Plan Done</a>
                        </div>
                    </div>
                    </div>

                    <div>
                        <div className="bg-center bg-no-repeat h-fit bg-cover bg-zinc-700 hover:bg-[url(../assets/Images/pl_1.png)] p-12 text-start group">
                        <h3 className="text-yellow-500 font-bold">$<span className="text-8xl">590</span>00</h3><br/>
                        <h2>Basic Plan</h2>
                        <p>Basic Plan</p><br/>
                        <div>
                            <ul className='text-xs'>
                                <li className="flex flex-row gap-2 group-hover:text-white items-center my-2">
                                    <img src={tick}/><p>Objectively integrate competencies</p>
                                </li>
                                <li className="flex flex-row gap-2 group-hover:text-white items-center my-2">
                                    <img src={tick}/><p>Process-centric communities</p>
                                </li>
                                <li className="flex flex-row gap-2 group-hover:text-white items-center my-2">
                                    <img src={tick}/><p>Emasculate holistic innovation</p>
                                </li>
                                <li className="flex flex-row gap-2 group-hover:text-white items-center my-2">
                                    <img src={tick}/><p>Incubate intuitive opportunities</p>
                                </li>
                            </ul><br/>
                        </div>
                        <div>
                            <a href="#" className="w-full py-3 px-7 bg-black self-center group-hover:bg-amber-500 text-white border-1 rounded-md transition-all duration-500 ease-in-out border-solid">Get Your Plan Done</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}