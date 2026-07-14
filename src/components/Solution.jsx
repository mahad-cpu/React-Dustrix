import sl_1 from '../assets/Images/sl_1.png'
import fd from '../assets/Images/fd.png'


export default function Solution(){
    return(
        <div className="grid grid-cols-1 lg:grid-cols-2 p-5">
            <div className="p-5 text-start">
                <h3>Business Analytics</h3>
                <h1 className="font-bold leading-none">Providing solutions of every kind.</h1>
                <div className="border-l-2 border-amber-500 px-5 my-5">
                    <h3>Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.</h3>
                </div>
                <p className="text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><br/><hr/>
                <div className="flex flex-row gap-5 w-fit items-center text-xs">
                    <div className="flex flex-row items-center">
                        <img src={fd} className="rounded-full scale-50"/>
                        <div>
                            <h3 className="text-white font-bold">Miranda H.</h3>
                            <p>Founder</p>
                        </div>
                    </div>
                    <div>
                        <a className="font-bold text-white hover:text-blue-500 transition-all duration-500 ease-in-out">963. 369. 265. 56</a>
                        <h3>Make An Call</h3>
                    </div>
                </div>
            </div>
            <div>
                <img src={sl_1}/>
            </div>
        </div>
    )
}