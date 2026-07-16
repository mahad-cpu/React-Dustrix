import sl_1 from '../assets/Images/sl_1.png'
import fd from '../assets/Images/fd.png'


export default function Solution(){
    return(
        <section className="flex flex-col items-center w-full bg-white">
            <div className="w-full max-w-7xl mt-12 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 p-5">
                    <div className="p-5 text-start">
                        <h3 className="text-zinc-500">Business Analytics</h3>
                        <h1 className="font-bold leading-none text-black">Providing solutions of every kind.</h1>
                        <div className="border-l-5 border-yellow-300 px-5 my-5">
                            <h3 className="text-black py-1 w-[70%] font-bold">Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.</h3>
                        </div>
                        <p className="text-xs text-zinc-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><br/><br/>
                        <div className="flex flex-row gap-5 w-[90%] items-center text-xs border-t-1 border-zinc-200">
                            <div className="flex flex-row items-center">
                                <img src={fd} className="rounded-full scale-50"/>
                                <div>
                                    <h3 className="text-black font-bold">Miranda H.</h3>
                                    <p  className="text-zinc-500">Founder</p>
                                </div>
                            </div>
                            <div>
                                <a className="font-bold text-black hover:text-blue-500 transition-all duration-500 ease-in-out">963. 369. 265. 56</a>
                                <h3 className="text-zinc-500">Make An Call</h3>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={sl_1}/>
                    </div>
                </div>
            </div>
        </section>
    )
}