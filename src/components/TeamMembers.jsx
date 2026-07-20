import tm_1 from '../assets/Images/tm_1.png'
import tm_2 from '../assets/Images/tm_2.png'
import tm_3 from '../assets/Images/tm_3.png'
import tm_4 from '../assets/Images/tm_4.png'
import tm_5 from '../assets/Images/tm_5.png'
import tm_6 from '../assets/Images/tm_6.png'
import plus from '../assets/Images/plus.png'
import twitter from '../assets/Images/twitter.png'
import you from '../assets/Images/you.png'
import linked from '../assets/Images/linked.png'
import face from '../assets/Images/face.png'

export default function TeamMembers(){
    return(
        <section className="w-full flex flex-col items-center bg-white">
            <div className="w-full max-w-7xl py-12 px-5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <div className="border border-solid overflow-clip h-[500px]">
                        <div className="relative bg-zinc-100 h-full w-full">
                            <div className="h-full w-full">
                                <img src={tm_1} className="w-full object-cover"/>
                            </div>
                            <div className="absolute right-5 top-5 bg-transparent w-[150px] h-[150px]">
                                <div className="relative w-[150px] h-[150px] group">
                                    <div className="absolute top-0 right-0 p-3 z-50 bg-white group-hover:bg-orange-500 transition-all duration-500 ease-in-out">
                                        <img src={plus} className=" w-[24px] h-[24px] z-50"/>
                                    </div>
                                    <div className="absolute top-0 right-0 p-3 bg-white group-hover:-translate-x-30 transition-all duration-300 ease-in-out">
                                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                            <img src={face}/>
                                        </a>
                                    </div>
                                    <div className="absolute top-0 right-0 p-3 bg-white group-hover:-translate-x-15 transition-all duration-500 ease-in-out">
                                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                            <img src={twitter}/>
                                        </a>
                                    </div>
                                    <div className="absolute top-0 right-0 p-3 bg-white group-hover:translate-y-15 transition-all duration-500 ease-in-out">
                                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                            <img src={linked}/>
                                        </a>
                                    </div>
                                    <div className="absolute top-0 right-0 p-3 bg-white group-hover:translate-y-30 transition-all duration-500 ease-in-out">
                                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                                            <img src={you}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute bottom-10 left-10">
                                <p className="py-1 px-5 font-bold w-fit text-start bg-orange-500 text-white">Founder</p>
                                <h2 className="py-3 pl-5 pr-10 font-bold w-fit text-start text-blue-950 bg-white">SALMAN AHMED</h2>
                            </div>
                        </div>
                    </div>
                    <div className="border border-solid overflow-clip h-[500px]">
                        <div className="relative bg-zinc-100 h-full w-full">
                            <div className="h-full w-full">
                                <img src={tm_2} className="w-full object-cover"/>
                            </div>
                            <div className="absolute right-5 top-5 bg-transparent w-[150px] h-[150px]">
                                <div className="relative w-[150px] h-[150px] group">
                                    <div className="absolute top-0 right-0 p-3 z-50 bg-white group-hover:bg-orange-500 transition-all duration-500 ease-in-out">
                                        <img src={plus} className=" w-[24px] h-[24px] z-50"/>
                                    </div>
                                    <div className="absolute top-0 right-0 p-3 bg-white group-hover:-translate-x-30 transition-all duration-300 ease-in-out">
                                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                            <img src={face}/>
                                        </a>
                                    </div>
                                    <div className="absolute top-0 right-0 p-3 bg-white group-hover:-translate-x-15 transition-all duration-500 ease-in-out">
                                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                            <img src={twitter}/>
                                        </a>
                                    </div>
                                    <div className="absolute top-0 right-0 p-3 bg-white group-hover:translate-y-15 transition-all duration-500 ease-in-out">
                                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                            <img src={linked}/>
                                        </a>
                                    </div>
                                    <div className="absolute top-0 right-0 p-3 bg-white group-hover:translate-y-30 transition-all duration-500 ease-in-out">
                                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                                            <img src={you}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute bottom-10 left-10">
                                <p className="py-1 px-5 font-bold w-fit text-start bg-orange-500 text-white">Founder</p>
                                <h2 className="py-3 pl-5 pr-10 font-bold w-fit text-start text-blue-950 bg-white">SALMAN AHMED</h2>
                            </div>
                        </div>
                    </div>
                    <div className="border border-solid overflow-clip h-[500px]">
                        <div className="relative bg-zinc-100 h-full w-full">
                            <div className="h-full w-full">
                                <img src={tm_3} className="w-full object-cover"/>
                            </div>
                            <div className="absolute right-5 top-5 bg-transparent w-[150px] h-[150px]">
                                <div className="relative w-[150px] h-[150px] group">
                                    <div className="absolute top-0 right-0 p-3 z-50 bg-white group-hover:bg-orange-500 transition-all duration-500 ease-in-out">
                                        <img src={plus} className=" w-[24px] h-[24px] z-50"/>
                                    </div>
                                    <div className="absolute top-0 right-0 p-3 bg-white group-hover:-translate-x-30 transition-all duration-300 ease-in-out">
                                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                            <img src={face}/>
                                        </a>
                                    </div>
                                    <div className="absolute top-0 right-0 p-3 bg-white group-hover:-translate-x-15 transition-all duration-500 ease-in-out">
                                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                            <img src={twitter}/>
                                        </a>
                                    </div>
                                    <div className="absolute top-0 right-0 p-3 bg-white group-hover:translate-y-15 transition-all duration-500 ease-in-out">
                                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                            <img src={linked}/>
                                        </a>
                                    </div>
                                    <div className="absolute top-0 right-0 p-3 bg-white group-hover:translate-y-30 transition-all duration-500 ease-in-out">
                                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                                            <img src={you}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute bottom-10 left-10">
                                <p className="py-1 px-5 font-bold w-fit text-start bg-orange-500 text-white">Founder</p>
                                <h2 className="py-3 pl-5 pr-10 font-bold w-fit text-start text-blue-950 bg-white">SALMAN AHMED</h2>
                            </div>
                        </div>
                    </div>
                    <div className="border border-solid overflow-clip h-[500px]">
                        <div className="relative bg-zinc-100 h-full w-full">
                            <div className="h-full w-full">
                                <img src={tm_4} className="w-full object-cover"/>
                            </div>
                            <div className="absolute right-5 top-5 bg-transparent w-[150px] h-[150px]">
                                <div className="relative w-[150px] h-[150px] group">
                                    <div className="absolute top-0 right-0 p-3 z-50 bg-white group-hover:bg-orange-500 transition-all duration-500 ease-in-out">
                                        <img src={plus} className=" w-[24px] h-[24px] z-50"/>
                                    </div>
                                    <div className="absolute top-0 right-0 p-3 bg-white group-hover:-translate-x-30 transition-all duration-300 ease-in-out">
                                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                            <img src={face}/>
                                        </a>
                                    </div>
                                    <div className="absolute top-0 right-0 p-3 bg-white group-hover:-translate-x-15 transition-all duration-500 ease-in-out">
                                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                            <img src={twitter}/>
                                        </a>
                                    </div>
                                    <div className="absolute top-0 right-0 p-3 bg-white group-hover:translate-y-15 transition-all duration-500 ease-in-out">
                                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                            <img src={linked}/>
                                        </a>
                                    </div>
                                    <div className="absolute top-0 right-0 p-3 bg-white group-hover:translate-y-30 transition-all duration-500 ease-in-out">
                                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                                            <img src={you}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute bottom-10 left-10">
                                <p className="py-1 px-5 font-bold w-fit text-start bg-orange-500 text-white">Founder</p>
                                <h2 className="py-3 pl-5 pr-10 font-bold w-fit text-start text-blue-950 bg-white">SALMAN AHMED</h2>
                            </div>
                        </div>
                    </div>
                    <div className="border border-solid overflow-clip h-[500px]">
                        <div className="relative bg-zinc-100 h-full w-full">
                            <div className="h-full w-full">
                                <img src={tm_5} className="w-full object-cover"/>
                            </div>
                            <div className="absolute right-5 top-5 bg-transparent w-[150px] h-[150px]">
                                <div className="relative w-[150px] h-[150px] group">
                                    <div className="absolute top-0 right-0 p-3 z-50 bg-white group-hover:bg-orange-500 transition-all duration-500 ease-in-out">
                                        <img src={plus} className=" w-[24px] h-[24px] z-50"/>
                                    </div>
                                    <div className="absolute top-0 right-0 p-3 bg-white group-hover:-translate-x-30 transition-all duration-300 ease-in-out">
                                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                            <img src={face}/>
                                        </a>
                                    </div>
                                    <div className="absolute top-0 right-0 p-3 bg-white group-hover:-translate-x-15 transition-all duration-500 ease-in-out">
                                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                            <img src={twitter}/>
                                        </a>
                                    </div>
                                    <div className="absolute top-0 right-0 p-3 bg-white group-hover:translate-y-15 transition-all duration-500 ease-in-out">
                                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                            <img src={linked}/>
                                        </a>
                                    </div>
                                    <div className="absolute top-0 right-0 p-3 bg-white group-hover:translate-y-30 transition-all duration-500 ease-in-out">
                                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                                            <img src={you}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute bottom-10 left-10">
                                <p className="py-1 px-5 font-bold w-fit text-start bg-orange-500 text-white">Founder</p>
                                <h2 className="py-3 pl-5 pr-10 font-bold w-fit text-start text-blue-950 bg-white">SALMAN AHMED</h2>
                            </div>
                        </div>
                    </div>
                    <div className="border border-solid overflow-clip h-[500px]">
                        <div className="relative bg-zinc-100 h-full w-full">
                            <div className="h-full w-full">
                                <img src={tm_6} className="w-full object-cover"/>
                            </div>
                            <div className="absolute right-5 top-5 bg-transparent w-[150px] h-[150px]">
                                <div className="relative w-[150px] h-[150px] group">
                                    <div className="absolute top-0 right-0 p-3 z-50 bg-white group-hover:bg-orange-500 transition-all duration-500 ease-in-out">
                                        <img src={plus} className=" w-[24px] h-[24px] z-50"/>
                                    </div>
                                    <div className="absolute top-0 right-0 p-3 bg-white group-hover:-translate-x-30 transition-all duration-300 ease-in-out">
                                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                            <img src={face}/>
                                        </a>
                                    </div>
                                    <div className="absolute top-0 right-0 p-3 bg-white group-hover:-translate-x-15 transition-all duration-500 ease-in-out">
                                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                            <img src={twitter}/>
                                        </a>
                                    </div>
                                    <div className="absolute top-0 right-0 p-3 bg-white group-hover:translate-y-15 transition-all duration-500 ease-in-out">
                                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                            <img src={linked}/>
                                        </a>
                                    </div>
                                    <div className="absolute top-0 right-0 p-3 bg-white group-hover:translate-y-30 transition-all duration-500 ease-in-out">
                                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                                            <img src={you}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute bottom-10 left-10">
                                <p className="py-1 px-5 font-bold w-fit text-start bg-orange-500 text-white">Founder</p>
                                <h2 className="py-3 pl-5 pr-10 font-bold w-fit text-start text-blue-950 bg-white">SALMAN AHMED</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}