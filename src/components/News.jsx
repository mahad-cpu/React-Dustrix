import nz_1 from '../assets/Images/nz_1.png'
import nz_2 from '../assets/Images/nz_2.png'
import nz_3 from '../assets/Images/nz_3.png'



export default function News(){
    return(
        <section className="flex flex-col items-center w-full bg-zinc-100">
            <div class="w-full max-w-7xl px-7 mb-12">
                <div className="p-10 pb-12">
                    <div className="relative my-12">
                        <h1 className="font-extrabold text-[160px] mb-0 text-white">News</h1>
                        <h2 className="absolute top-7 left-1/2 -translate-x-1/2 font-bold text-4xl text-black">Blogs Insights</h2>
                        <h4 className="absolute top-0 left-1/2 -translate-x-1/2 text-black">News Feed</h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 pt-12">
                        <div className="rounded-lg overflow-hidden border-1 border-solid border-zinc-200 group">
                            <div className="relative">
                                <img src={nz_1} />
                                <div className="absolute right-7 top-35 px-4 py-1 text-black rounded-lg bg-yellow-300">
                                    <p className="font-extrabold text-black text-3xl">20</p>
                                    <p>JUN</p>
                                </div>
                            </div>
                            <div className="text-start p-5">
                                <h3 className="text-zinc-500">Industrial /<span className="font-bold text-black">Miranda H.</span></h3>
                                <a><h2 className="text-black group-hover:text-yellow-300 transition-all duration ease-in-out">The dramatically visualize on customer directed</h2></a>
                            </div>
                        </div>
                        <div className="rounded-lg overflow-hidden border-1 border-solid border-zinc-200 group">
                            <div className="relative">
                                <img src={nz_2} />
                                <div className="absolute right-7 top-35 px-4 py-1 text-black rounded-lg bg-yellow-300">
                                    <p className="font-extrabold text-black text-3xl">20</p>
                                    <p>JUN</p>
                                </div>
                            </div>
                            <div className="text-start p-5">
                                <h3 className="text-zinc-500">Industrial /<span className="font-bold text-black">Miranda H.</span></h3>
                                <a><h2 className="text-black group-hover:text-yellow-300 transition-all duration ease-in-out">The dramatically visualize on customer directed</h2></a>
                            </div>
                        </div>
                        <div className="rounded-lg overflow-hidden border-1 border-solid border-zinc-200 group">
                            <div className="relative">
                                <img src={nz_3} />
                                <div className="absolute right-7 top-35 px-4 py-1 text-black rounded-lg bg-yellow-300">
                                    <p className="font-extrabold text-black text-3xl">20</p>
                                    <p>JUN</p>
                                </div>
                            </div>
                            <div className="text-start p-5">
                                <h3 className="text-zinc-500">Industrial /<span className="font-bold text-black">Miranda H.</span></h3>
                                <a><h2 className="text-black group-hover:text-yellow-300 transition-all duration ease-in-out">The dramatically visualize on customer directed</h2></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}