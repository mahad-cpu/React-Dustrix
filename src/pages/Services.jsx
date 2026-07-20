import bgImage from '../assets/Images/bg-1.png'
import Portfolio from '../components/Portfolio'
import Process from '../components/Process'
import Service_Types from '../components/Service_Types'

export default function Services(){
    return(
        <section classname="w-full">
            <div className="w-full flex flex-col items-center py-12 px-5 text-white" style={{ backgroundImage: `url(${bgImage})` }}>
                 <div className="w-full max-w-7xl py-7">
                    <p className="leading-loose text-yellow-300 text-start"><a className="text-white leading-loose">Home</a>| Service</p>
                    <h1 className="text-start text-white text-[clamp(1rem,13vw,4rem)] font-bold">What We Do</h1>
                </div>
            </div>
            <Service_Types/>
            <Process/>
            <Portfolio/>
        </section>
    )
}