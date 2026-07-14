import nz_1 from '../assets/Images/nz_1.png'
import nz_2 from '../assets/Images/nz_2.png'
import nz_3 from '../assets/Images/nz_3.png'



export default function News(){
    return(
        <div className="p-10">
            <h1 className="font-extrabold text-white text-9xl">News</h1>
            <h2 className="font-bold text-white text-4xl">Blog Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                <div className="rounded-lg overflow-hidden border-1 border-solid group">
                    <div className="relative">
                        <img src={nz_1} />
                        <div className="absolute right-7 top-35 px-4 py-1 text-white rounded-lg bg-amber-500">
                            <p className="font-bold text-white text-3xl">20</p>
                            <p>JUN</p>
                        </div>
                    </div>
                    <div className="text-start p-5">
                        <h3>Industrial /<span className="font-bold text-white">Miranda H.</span></h3>
                        <a><h2 className="group-hover:text-amber-500 transition-all duration ease-in-out">The dramatically visualize on customer directed</h2></a>
                    </div>
                </div>
                <div className="rounded-lg overflow-hidden border-1 border-solid group">
                    <div className="relative">
                        <img src={nz_2} />
                        <div className="absolute right-7 top-35 px-4 py-1 text-white rounded-lg bg-amber-500">
                            <p className="font-bold text-white text-3xl">20</p>
                            <p>JUN</p>
                        </div>
                    </div>
                    <div className="text-start p-5">
                        <h3>Industrial /<span className="font-bold text-white">Miranda H.</span></h3>
                        <a><h2 className="group-hover:text-amber-500 transition-all duration ease-in-out">The dramatically visualize on customer directed</h2></a>
                    </div>
                </div>
                <div className="rounded-lg overflow-hidden border-1 border-solid group">
                    <div className="relative">
                        <img src={nz_3} />
                        <div className="absolute right-7 top-35 px-4 py-1 text-white rounded-lg bg-amber-500">
                            <p className="font-bold text-white text-3xl">20</p>
                            <p>JUN</p>
                        </div>
                    </div>
                    <div className="text-start p-5">
                        <h3>Industrial /<span className="font-bold text-white">Miranda H.</span></h3>
                        <a><h2 className="group-hover:text-amber-500 transition-all duration ease-in-out">The dramatically visualize on customer directed</h2></a>
                    </div>
                </div>
            </div>
        </div>
    )
}