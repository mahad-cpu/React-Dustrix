import bgImage from '../assets/Images/bg-1.png'
import P_det from '../components/P_det'

export default function P_Details(){
    return(
        <section classname="w-full bg-white">
            <div className="w-full flex flex-col items-center py-12 bg-center bg-cover bg-no-repeat px-5 text-white" style={{ backgroundImage: `url(${bgImage})` }}>
                <div className="w-full max-w-7xl py-7">
                <p className="leading-loose text-yellow-300 text-start"><a className="text-white leading-loose">Home</a>| Portfolio Details</p>
                <h1 className="text-start text-white font-bold text-7xl">Portfolio Details</h1>
                </div>
            </div>    
            <P_det/>    
        </section>
    )
}