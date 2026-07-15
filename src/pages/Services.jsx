import bgImage from '../assets/Images/bg-1.png'
import Portfolio from '../components/Portfolio'
import Process from '../components/Process'
import Service_Types from '../components/Service_Types'

export default function Services(){
    return(
        <section>
            <div className="w-full  py-12 px-5 text-white" style={{ backgroundImage: `url(${bgImage})` }}>
                <p className="leading-loose text-amber-500 text-start"><a className="text-white leading-loose">Home</a>| Service</p>
                <h1 className="text-start text-white font-bold">What We Do</h1>
            </div>
            <Service_Types/>
            <Process/>
            <Portfolio/>
        </section>
    )
}