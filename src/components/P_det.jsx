import pd_1 from '../assets/Images/pd_1.png'

export default function P_det(){
    return(
        <section className="flex flex-col items-center w-full py-12 bg-white">
            <div className="flex flex-col items-center max-w-7xl p-3 w-full">
                <div className="w-full">
                  <img src={pd_1} className="w-full" />
                </div>
                <div className='relative w-full'>
                    <div className='absolute bg-blue-950 p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 w-[95%] left-1/2 -translate-x-1/2 -translate-y-1/2 items-center z-30'>
                        <div className="text-start justify-center flex flex-col px-2">
                            <h3 className="text-zinc-500">Clients</h3>
                            <h2 className="text-white font-bold w-fit text-start">Domal D. Williamson</h2>
                        </div>
                        <div className="text-start justify-center flex flex-col px-2">
                            <h3 className="text-zinc-500">Services</h3>
                            <h2 className="text-white font-bold w-fit text-start">Website Design</h2>
                        </div>
                        <div className="text-start justify-center flex flex-col px-2">
                            <h3 className="text-zinc-500">Keyword</h3>
                            <h2 className="text-white font-bold w-fit text-start">Development, UX, UI</h2>
                        </div>
                        <div className="text-start justify-center flex flex-col px-7 rounded-lg bg-yellow-300 text-black font-bold hover:text-white hover:bg-black transition-all duration-500 ease-in-out w-fit lg:justify-self-end">
                            <a href="#" className="px-12 py-5 block">Live Preview</a>
                        </div>
                    </div>
                    <div className="pt-24 mt-8">
                        <p className="text-zinc-500 text-lg leading-relaxed text-start">
                            <span className="float-left mr-4 bg-yellow-50/50 px-5 py-4 rounded-xl text-5xl font-extrabold text-yellow-400 leading-none shadow">L</span>
                            orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepte ursint occaecat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}