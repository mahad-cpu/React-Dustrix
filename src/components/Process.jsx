import p_1 from '../assets/Images/p_1.png'
import p_2 from '../assets/Images/p_2.png'
import p_3 from '../assets/Images/p_3.png'

export default function Process(){
    return(
        <section className="w-full flex flex-col items-center py-12 bg-zinc-100">
            <div className="flex flex-row w-full max-w-7xl">
                <div className="p-7">
                    <div className="p-12 relative">
                        <img src={p_1}/>
                        <img src={p_2} className="absolute top-0 left-0"/>
                        <img src={p_3} className="absolute bottom-0 right-0 border-8 border-white"/>
                    </div>
                </div>
                <div className="p-7 pl-0 flex flex-col justify-between">
                    <div className="relative">
                        <h1 className="font-bold text-[160px] mb-0 text-white">Process</h1>
                        <h2 className="absolute top-0 left-3 text-start  font-bold text-5xl text-black">Our Company Work Process.</h2>
                        <h4 className="absolute bottom-15 left-3 text-zinc-500">Process</h4>
                    </div>
                    <div className="flex flex-col justify-between gap-7 ">
                        <div className="flex flex-row items-center gap-2 w-[80%]">
                        <h1 className="my-2 [-webkit-text-stroke:1px_orange] text-transparent font-bold text-7xl" >01</h1>
                        <div className="text-start">
                            <h3 className="font-bold text-lg text-black">Discussions About Project</h3>
                            <p className="text-zinc-500">Lorem ipsum dolor sit amet, consectetur adipisic ing elit, sed do eiusmod tempor incididunt</p>
                        </div>
                        </div>
                        <div className="flex flex-row items-center gap-2 w-[80%]">
                            <h1 className="my-2 [-webkit-text-stroke:1px_orange] text-transparent font-bold text-7xl" >02</h1>
                            <div className="text-start">
                                <h3 className="font-bold text-lg text-black">Start Work With Team</h3>
                                <p className="text-zinc-500">Lorem ipsum dolor sit amet, consectetur adipisic ing elit, sed do eiusmod tempor incididunt</p>
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-2 w-[80%]">
                            <h1 className="my-2 [-webkit-text-stroke:1px_orange] text-transparent font-bold text-7xl" >03</h1>
                            <div className="text-start">
                                <h3 className="font-bold text-lg text-black">Handover & Save World</h3>
                                <p className="text-zinc-500">Lorem ipsum dolor sit amet, consectetur adipisic ing elit, sed do eiusmod tempor incididunt</p>
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-2 w-[80%]">
                            <h1 className="my-2 [-webkit-text-stroke:1px_orange] text-transparent font-bold text-7xl" >04</h1>
                            <div className="text-start">
                                <h3 className="font-bold text-lg text-black">Great Wall Support</h3>
                                <p className="text-zinc-500">Lorem ipsum dolor sit amet, consectetur adipisic ing elit, sed do eiusmod tempor incididunt</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}