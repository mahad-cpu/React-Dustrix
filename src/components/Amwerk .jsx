import ab_1 from '../assets/Images/ab_1.png'
import helmet from '../assets/Images/helmet.png'
import road from '../assets/Images/road.png'

export default function  Amwerk(){
    return(
        <div className="w-full">
            <div className="flex flex-col lg:flex-row gap-3 p-5">
                <div className="pr-12 lg:w-[50%]">
                    <img src={ab_1} className="object-contain"/>
                </div>
                <div className="text-start lg:w-[50%]">
                    <p>Easily import the whole Industry</p>
                    <h1 className="text-5xl font-bold m-0">Amwerk is always interested.</h1>
                    <div className="border-l border-solid border-amber-500 px-2 my-7">
                        <h2>Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.</h2>
                    </div><hr/><br/>
                    <div className="flex flex-row items-center gap-3">
                        <div className="p-5 rounded-full bg-amber-500"><img src={helmet} className="scale-150" /></div>
                        <div>
                            <h2 className="font-bold text-sm">Great Wall Support</h2>
                            <p className="text-xs">Lorem ipsum dolor sit amet, consectetur adipisic ing elit, sed do eiusmod tempor incididunt</p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-3 mt-5">
                        <div className="p-5 rounded-full bg-amber-500"><img src={helmet} className="scale-150" /></div>
                        <div>
                            <h2 className="font-bold text-sm">Creative Ideas</h2>
                            <p className="text-xs">Lorem ipsum dolor sit amet, consectetur adipisic ing elit, sed do eiusmod tempor incididunt</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}