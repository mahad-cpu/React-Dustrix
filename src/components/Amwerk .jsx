import ab_1 from '../assets/Images/ab_1.png'
import helmet from '../assets/Images/helmet.png'
import road from '../assets/Images/road.png'

export default function  Amwerk(){
    return(
        <section className="w-full flex flex-col items-center bg-white py-12">
            <div className="w-full max-w-7xl py-12 bg-white">
                <div className="flex flex-col lg:flex-row gap-3 p-5">
                    <div className="pr-12 lg:w-[50%]">
                        <img src={ab_1} className="object-contain"/>
                    </div>
                    <div className="text-start lg:w-[50%] flex flex-col justify-between py-8">
                        <p className="text-zinc-500">Easily import the whole Industry</p>
                        <h1 className="text-[clamp(1rem,8vw,2rem)] m-0 text-black">Amwerk is always interested.</h1>
                        <div className="border-l border-solid border-yellow-300 px-3 py-1 my-7">
                            <h2 className="text-black">Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.</h2>
                        </div><hr/><br/>
                        <div className="flex flex-row items-center gap-3">
                            <div className="p-7 rounded-full bg-yellow-300"><img src={helmet} className="scale-170" /></div>
                            <div>
                                <h2 className="font-bold text-md text-black ">Great Wall Support</h2>
                                <p className="text-xs text-zinc-500 w-[80%]">Lorem ipsum dolor sit amet, consectetur adipisic ing elit, sed do eiusmod tempor incididunt</p>
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-3 mt-5">
                            <div className="p-7 rounded-full bg-yellow-300"><img src={helmet} className="scale-150" /></div>
                            <div>
                                <h2 className="font-bold text-md text-black">Creative Ideas</h2>
                                <p className="text-xs text-zinc-500 w-[80%]">Lorem ipsum dolor sit amet, consectetur adipisic ing elit, sed do eiusmod tempor incididunt</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}