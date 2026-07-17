import bgImage from '../assets/Images/bg-1.png'
import Portfolio from '../components/Portfolio'
import pg_1 from '../assets/Images/pg_1.png'
import arrow from '../assets/Images/arrow_b.png'

export default function Projects(){
    return(
        <section className="flex flex-col items-center w-full bg-white">
            <div className="w-full flex flex-col items-center py-12 px-5 bg-center bg-no-repeat bg-cover text-white" style={{ backgroundImage: `url(${bgImage})` }}>
                <div className="w-full max-w-7xl py-7">
                    <p className="leading-loose text-yellow-300 text-start"><a className="text-white leading-loose">Home</a>| Projects</p>
                    <h1 className="text-start text-white font-bold text-7xl">Case Study</h1>
                </div>
            </div>
            <Portfolio/>
            <div className="max-w-7xl flex flex-col items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    <div className="group">
                        <div className='w-full h-auto relative overflow-clip'>
                            <img src={pg_1} className="w-full"/>
                            <div className="hidden md:block absolute -bottom-11 -left-15 h-[100px] bg-blue-950 -rotate-15 w-[150%] group-hover:bg-orange-500 transition-all duration-300 ease-in-out z-20"></div>
                            <a href="#"><div className="absolute -bottom-30 right-5 group-hover:-translate-y-[140px] transition-all duration-500 ease-in-out z-50 p-3 w-fit rounded-full bg-white flex flex-row items-center justify-center">
                                <img src={arrow} className="scale-70"/>
                            </div></a>
                            <div className="hidden md:block absolute h-[30px] w-[150%] bg-orange-500 group-hover:bg-orange-600 -rotate-19 z-10 bottom-11 -left-5 transition-all duration-300 ease-in-out"></div>
                        </div>
                        <div className="text-start p-7 py-3 bg-blue-950 group-hover:bg-orange-500 transition-all duration-300 ease-in-out">
                            <h3 className="text-zinc-400 group-hover:text-white transition-all duration-300 ease-in-out">Rosalina D. | $56,000</h3>
                            <h2 className="text-white transition-all duration-300 ease-in-out">Rosali Office Design</h2>
                        </div>
                    </div>
                    <div className="group">
                        <div className='w-full h-auto relative overflow-clip'>
                            <img src={pg_1} className="w-full"/>
                            <div className="hidden md:block absolute -bottom-11 -left-15 h-[100px] bg-blue-950 -rotate-15 w-[150%] group-hover:bg-orange-500 transition-all duration-300 ease-in-out z-20"></div>
                            <a href="#"><div className="absolute -bottom-30 right-5 group-hover:-translate-y-[140px] transition-all duration-500 ease-in-out z-50 p-3 w-fit rounded-full bg-white flex flex-row items-center justify-center">
                                <img src={arrow} className="scale-70"/>
                            </div></a>
                            <div className="hidden md:block absolute h-[30px] w-[150%] bg-orange-500 group-hover:bg-orange-600 -rotate-19 z-10 bottom-11 -left-5 transition-all duration-300 ease-in-out"></div>
                        </div>
                        <div className="text-start p-7 py-3 bg-blue-950 group-hover:bg-orange-500 transition-all duration-300 ease-in-out">
                            <h3 className="text-zinc-400 group-hover:text-white transition-all duration-300 ease-in-out">Rosalina D. | $56,000</h3>
                            <h2 className="text-white transition-all duration-300 ease-in-out">Rosali Office Design</h2>
                        </div>
                    </div>
                    <div className="group">
                        <div className='w-full h-auto relative overflow-clip'>
                            <img src={pg_1} className="w-full"/>
                            <div className="hidden md:block absolute -bottom-11 -left-15 h-[100px] bg-blue-950 -rotate-15 w-[150%] group-hover:bg-orange-500 transition-all duration-300 ease-in-out z-20"></div>
                            <a href="#"><div className="absolute -bottom-30 right-5 group-hover:-translate-y-[140px] transition-all duration-500 ease-in-out z-50 p-3 w-fit rounded-full bg-white flex flex-row items-center justify-center">
                                <img src={arrow} className="scale-70"/>
                            </div></a>
                            <div className="hidden md:block absolute h-[30px] w-[150%] bg-orange-500 group-hover:bg-orange-600 -rotate-19 z-10 bottom-11 -left-5 transition-all duration-300 ease-in-out"></div>
                        </div>
                        <div className="text-start p-7 py-3 bg-blue-950 group-hover:bg-orange-500 transition-all duration-300 ease-in-out">
                            <h3 className="text-zinc-400 group-hover:text-white transition-all duration-300 ease-in-out">Rosalina D. | $56,000</h3>
                            <h2 className="text-white transition-all duration-300 ease-in-out">Rosali Office Design</h2>
                        </div>
                    </div>
                    <div className="group">
                        <div className='w-full h-auto relative overflow-clip'>
                            <img src={pg_1} className="w-full"/>
                            <div className="hidden md:block absolute -bottom-11 -left-15 h-[100px] bg-blue-950 -rotate-15 w-[150%] group-hover:bg-orange-500 transition-all duration-300 ease-in-out z-20"></div>
                            <a href="#"><div className="absolute -bottom-30 right-5 group-hover:-translate-y-[140px] transition-all duration-500 ease-in-out z-50 p-3 w-fit rounded-full bg-white flex flex-row items-center justify-center">
                                <img src={arrow} className="scale-70"/>
                            </div></a>
                            <div className="hidden md:block absolute h-[30px] w-[150%] bg-orange-500 group-hover:bg-orange-600 -rotate-19 z-10 bottom-11 -left-5 transition-all duration-300 ease-in-out"></div>
                        </div>
                        <div className="text-start p-7 py-3 bg-blue-950 group-hover:bg-orange-500 transition-all duration-300 ease-in-out">
                            <h3 className="text-zinc-400 group-hover:text-white transition-all duration-300 ease-in-out">Rosalina D. | $56,000</h3>
                            <h2 className="text-white transition-all duration-300 ease-in-out">Rosali Office Design</h2>
                        </div>
                    </div>
                    <div className="group">
                        <div className='w-full h-auto relative overflow-clip'>
                            <img src={pg_1} className="w-full"/>
                            <div className="hidden md:block absolute -bottom-11 -left-15 h-[100px] bg-blue-950 -rotate-15 w-[150%] group-hover:bg-orange-500 transition-all duration-300 ease-in-out z-20"></div>
                            <a href="#"><div className="absolute -bottom-30 right-5 group-hover:-translate-y-[140px] transition-all duration-500 ease-in-out z-50 p-3 w-fit rounded-full bg-white flex flex-row items-center justify-center">
                                <img src={arrow} className="scale-70"/>
                            </div></a>
                            <div className="hidden md:block absolute h-[30px] w-[150%] bg-orange-500 group-hover:bg-orange-600 -rotate-19 z-10 bottom-11 -left-5 transition-all duration-300 ease-in-out"></div>
                        </div>
                        <div className="text-start p-7 py-3 bg-blue-950 group-hover:bg-orange-500 transition-all duration-300 ease-in-out">
                            <h3 className="text-zinc-400 group-hover:text-white transition-all duration-300 ease-in-out">Rosalina D. | $56,000</h3>
                            <h2 className="text-white transition-all duration-300 ease-in-out">Rosali Office Design</h2>
                        </div>
                    </div>
                    <div className="group">
                        <div className='w-full h-auto relative overflow-clip'>
                            <img src={pg_1} className="w-full"/>
                            <div className="hidden md:block absolute -bottom-11 -left-15 h-[100px] bg-blue-950 -rotate-15 w-[150%] group-hover:bg-orange-500 transition-all duration-300 ease-in-out z-20"></div>
                            <a href="#"><div className="absolute -bottom-30 right-5 group-hover:-translate-y-[140px] transition-all duration-500 ease-in-out z-50 p-3 w-fit rounded-full bg-white flex flex-row items-center justify-center">
                                <img src={arrow} className="scale-70"/>
                            </div></a>
                            <div className="hidden md:block absolute h-[30px] w-[150%] bg-orange-500 group-hover:bg-orange-600 -rotate-19 z-10 bottom-11 -left-5 transition-all duration-300 ease-in-out"></div>
                        </div>
                        <div className="text-start p-7 py-3 bg-blue-950 group-hover:bg-orange-500 transition-all duration-300 ease-in-out">
                            <h3 className="text-zinc-400 group-hover:text-white transition-all duration-300 ease-in-out">Rosalina D. | $56,000</h3>
                            <h2 className="text-white transition-all duration-300 ease-in-out">Rosali Office Design</h2>
                        </div>
                    </div>
                    <div className="group">
                        <div className='w-full h-auto relative overflow-clip'>
                            <img src={pg_1} className="w-full"/>
                            <div className="hidden md:block absolute -bottom-11 -left-15 h-[100px] bg-blue-950 -rotate-15 w-[150%] group-hover:bg-orange-500 transition-all duration-300 ease-in-out z-20"></div>
                            <a href="#"><div className="absolute -bottom-30 right-5 group-hover:-translate-y-[140px] transition-all duration-500 ease-in-out z-50 p-3 w-fit rounded-full bg-white flex flex-row items-center justify-center">
                                <img src={arrow} className="scale-70"/>
                            </div></a>
                            <div className="hidden md:block absolute h-[30px] w-[150%] bg-orange-500 group-hover:bg-orange-600 -rotate-19 z-10 bottom-11 -left-5 transition-all duration-300 ease-in-out"></div>
                        </div>
                        <div className="text-start p-7 py-3 bg-blue-950 group-hover:bg-orange-500 transition-all duration-300 ease-in-out">
                            <h3 className="text-zinc-400 group-hover:text-white transition-all duration-300 ease-in-out">Rosalina D. | $56,000</h3>
                            <h2 className="text-white transition-all duration-300 ease-in-out">Rosali Office Design</h2>
                        </div>
                    </div>
                    <div className="group">
                        <div className='w-full h-auto relative overflow-clip'>
                            <img src={pg_1} className="w-full"/>
                            <div className="hidden md:block absolute -bottom-11 -left-15 h-[100px] bg-blue-950 -rotate-15 w-[150%] group-hover:bg-orange-500 transition-all duration-300 ease-in-out z-20"></div>
                            <a href="#"><div className="absolute -bottom-30 right-5 group-hover:-translate-y-[140px] transition-all duration-500 ease-in-out z-50 p-3 w-fit rounded-full bg-white flex flex-row items-center justify-center">
                                <img src={arrow} className="scale-70"/>
                            </div></a>
                            <div className="hidden md:block absolute h-[30px] w-[150%] bg-orange-500 group-hover:bg-orange-600 -rotate-19 z-10 bottom-11 -left-5 transition-all duration-300 ease-in-out"></div>
                        </div>
                        <div className="text-start p-7 py-3 bg-blue-950 group-hover:bg-orange-500 transition-all duration-300 ease-in-out">
                            <h3 className="text-zinc-400 group-hover:text-white transition-all duration-300 ease-in-out">Rosalina D. | $56,000</h3>
                            <h2 className="text-white transition-all duration-300 ease-in-out">Rosali Office Design</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}