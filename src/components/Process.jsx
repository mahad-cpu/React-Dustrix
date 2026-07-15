import p_1 from '../assets/Images/p_1.png'
import p_2 from '../assets/Images/p_2.png'
import p_3 from '../assets/Images/p_3.png'

export default function Process(){
    return(
        <section className="w-full flex flex-col items-center py-12 bg-zinc-800">
            <div className="flex flex-row w-full max-w-7xl">
                <div className="p-7">
                    <div className="p-12 relative">
                        <img src={p_1}/>
                        <img src={p_2} className="absolute top-0 left-0"/>
                        <img src={p_3} className="absolute bottom-0 right-0 border-8 border-zinc-800"/>
                    </div>
                </div>
                <div className="p-7 pl-0 flex flex-col items-center">
                    <h1 className="font-extrabold text-8xl">Process</h1>
                    <h3 className="font-bold text-3xl">Our Company Work Process.</h3>
                    <div className="flex flex-row items-center gap-2 w-[80%]">
                        <h1 className="my-2 [-webkit-text-stroke:1px_orange] text-transparent font-bold text-7xl" >01</h1>
                        <div className="text-start">
                            <h3 className="font-bold text-lg">Discussions About Project</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisic ing elit, sed do eiusmod tempor incididunt</p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-2 w-[80%]">
                        <h1 className="my-2 [-webkit-text-stroke:1px_orange] text-transparent font-bold text-7xl" >02</h1>
                        <div className="text-start">
                            <h3 className="font-bold text-lg">Start Work With Team</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisic ing elit, sed do eiusmod tempor incididunt</p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-2 w-[80%]">
                        <h1 className="my-2 [-webkit-text-stroke:1px_orange] text-transparent font-bold text-7xl" >03</h1>
                        <div className="text-start">
                            <h3 className="font-bold text-lg">Handover & Save World</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisic ing elit, sed do eiusmod tempor incididunt</p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-2 w-[80%]">
                        <h1 className="my-2 [-webkit-text-stroke:1px_orange] text-transparent font-bold text-7xl" >04</h1>
                        <div className="text-start">
                            <h3 className="font-bold text-lg">Great Wall Support</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisic ing elit, sed do eiusmod tempor incididunt</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}