import bgImage from '../assets/Images/bg-1.png'
import Amwerk from '../components/Amwerk '
import Approach from '../components/Approach'
import Client from '../components/Clients'
import Roadmap from '../components/Roadmap'
import Skillset from '../components/Skillset'

export default function About(){
    return(
        <section classname="w-full">
            <div className="w-full flex flex-col items-center py-12 px-5 text-white" style={{ backgroundImage: `url(${bgImage})` }}>
                <div className="w-full max-w-7xl py-7">
                    <p className="leading-loose text-yellow-300 text-start"><a className="text-white leading-loose">Home</a>| About Us</p>
                    <h1 className="text-start text-white font-bold text-7xl">About Us</h1>
                </div>
            </div>
            <Amwerk/>
            <Approach/>
            <Skillset/>
            <Client/>
            <Roadmap/>
        </section>
    )
}