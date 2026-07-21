import tick from '../assets/Images/tick.png'
import pl_1 from '../assets/Images/pl_1.png'

export default function Planning(){
    return(
        <div className="flex flex-col items-center w-full bg-zinc-100">
            <div className="p-12 w-full max-w-7xl">
                <div className="relative my-12 text-center">
                    <h1 className="font-extrabold text-[clamp(4rem,13vw,12rem)] mb-0 text-white select-none">Planning</h1>
                    <h2 className="absolute block w-fit top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-[clamp(1rem,5vw,3rem)] text-black whitespace-nowrap">Price & Plan</h2>
                    <h4 className="absolute top-2 left-1/2 -translate-x-1/2 text-zinc-500 font-semibold uppercase tracking-wider text-xs sm:text-sm">Easy Planning</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 overflow-visible py-12">
                    <div>
                        <div className="relative bg-center bg-no-repeat h-full bg-cover bg-white p-8 text-start rounded-lg shadow-md border border-zinc-200 transition-all duration-300 hover:shadow-xl group overflow-hidden">
                            <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url(${pl_1})`}}></div>
                            <div className="relative z-10">
                                <h3 className="text-yellow-300 font-bold text-2xl flex items-baseline">$<span className="text-6xl font-extrabold text-yellow-300 transition-colors duration-300">590</span><span className="text-lg">.00</span></h3>
                                <h2 className="text-black group-hover:text-white font-bold text-xl mt-4 transition-colors duration-300">Basic Plan</h2>
                                <p className="text-zinc-500 group-hover:text-zinc-300 text-sm mb-6 transition-colors duration-300">Essential Features</p>
                                <ul className="text-sm text-zinc-600 group-hover:text-zinc-200 mb-8 space-y-3 transition-colors duration-300">
                                    <li className="flex flex-row gap-3 items-center">
                                        <img src={tick} className="w-4 h-4 shrink-0" alt="" /><p>Objectively integrate competencies</p>
                                    </li>
                                    <li className="flex flex-row gap-3 items-center">
                                        <img src={tick} className="w-4 h-4 shrink-0" alt="" /><p>Process-centric communities</p>
                                    </li>
                                    <li className="flex flex-row gap-3 items-center">
                                        <img src={tick} className="w-4 h-4 shrink-0" alt="" /><p>Emasculate holistic innovation</p>
                                    </li>
                                    <li className="flex flex-row gap-3 items-center">
                                        <img src={tick} className="w-4 h-4 shrink-0" alt="" /><p>Incubate intuitive opportunities</p>
                                    </li>
                                </ul>
                                <div className="flex flex-col items-center">
                                    <a href="#" className="w-full text-center py-3 px-6 bg-black text-white group-hover:bg-yellow-300 group-hover:text-black font-semibold rounded-md transition-all duration-300">Get Your Plan Done</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="relative bg-center bg-no-repeat h-full bg-cover p-8 text-start rounded-lg shadow-md border border-zinc-800 transition-all duration-300 hover:shadow-xl group overflow-hidden" style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url(${pl_1})`}}>
                            <div className="relative z-10">
                                <h3 className="text-yellow-300 font-bold text-2xl flex items-baseline">$<span className="text-6xl font-extrabold text-white">590</span><span className="text-lg">.00</span></h3>
                                <h2 className="text-white font-bold text-xl mt-4">Standard Plan</h2>
                                <p className="text-zinc-400 text-sm mb-6">Most Popular Choice</p>
                                <ul className="text-sm text-zinc-300 mb-8 space-y-3">
                                    <li className="flex flex-row gap-3 items-center">
                                        <img src={tick} className="w-4 h-4 shrink-0" alt="" /><p>Objectively integrate competencies</p>
                                    </li>
                                    <li className="flex flex-row gap-3 items-center">
                                        <img src={tick} className="w-4 h-4 shrink-0" alt="" /><p>Process-centric communities</p>
                                    </li>
                                    <li className="flex flex-row gap-3 items-center">
                                        <img src={tick} className="w-4 h-4 shrink-0" alt="" /><p>Emasculate holistic innovation</p>
                                    </li>
                                    <li className="flex flex-row gap-3 items-center">
                                        <img src={tick} className="w-4 h-4 shrink-0" alt="" /><p>Incubate intuitive opportunities</p>
                                    </li>
                                    <li className="flex flex-row gap-3 items-center">
                                        <img src={tick} className="w-4 h-4 shrink-0" alt="" /><p>Incubate intuitive opportunities</p>
                                    </li>
                                    <li className="flex flex-row gap-3 items-center">
                                        <img src={tick} className="w-4 h-4 shrink-0" alt="" /><p>24/7 Online Support</p>
                                    </li>
                                </ul>
                                <div className="flex flex-col items-center">
                                    <a href="#" className="w-full text-center py-3 px-6 bg-yellow-300 text-black hover:bg-yellow-300 font-semibold rounded-md transition-all duration-300">Get Your Plan Done</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="relative bg-center bg-no-repeat h-full bg-cover bg-white p-8 text-start rounded-lg shadow-md border border-zinc-200 transition-all duration-300 hover:shadow-xl group overflow-hidden">
                            <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url(${pl_1})`}}></div>
                            <div className="relative z-10">
                                <h3 className="text-yellow-300 font-bold text-2xl flex items-baseline">$<span className="text-6xl font-extrabold text-yellow-300 transition-colors duration-300">590</span><span className="text-lg">.00</span></h3>
                                <h2 className="text-black group-hover:text-white font-bold text-xl mt-4 transition-colors duration-300">Premium Plan</h2>
                                <p className="text-zinc-500 group-hover:text-zinc-300 text-sm mb-6 transition-colors duration-300">Full Capabilities</p>
                                <ul className="text-sm text-zinc-600 group-hover:text-zinc-200 mb-8 space-y-3 transition-colors duration-300">
                                    <li className="flex flex-row gap-3 items-center">
                                        <img src={tick} className="w-4 h-4 shrink-0" alt="" /><p>Objectively integrate competencies</p>
                                    </li>
                                    <li className="flex flex-row gap-3 items-center">
                                        <img src={tick} className="w-4 h-4 shrink-0" alt="" /><p>Process-centric communities</p>
                                    </li>
                                    <li className="flex flex-row gap-3 items-center">
                                        <img src={tick} className="w-4 h-4 shrink-0" alt="" /><p>Emasculate holistic innovation</p>
                                    </li>
                                    <li className="flex flex-row gap-3 items-center">
                                        <img src={tick} className="w-4 h-4 shrink-0" alt="" /><p>Incubate intuitive opportunities</p>
                                    </li>
                                </ul>
                                <div className="flex flex-col items-center">
                                    <a href="#" className="w-full text-center py-3 px-6 bg-black text-white group-hover:bg-yellow-300 group-hover:text-black font-semibold rounded-md transition-all duration-300">Get Your Plan Done</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}