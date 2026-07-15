import bgImage from '../assets/Images/bg-1.png'
import Amwerk from '../components/Amwerk '
import Approach from '../components/Approach'
import Client from '../components/Clients'
import Roadmap from '../components/Roadmap'
import Skillset from '../components/Skillset'

export default function About(){
    return(
        <div classname="w-full">
            <div className="w-full  py-12 px-5 text-white" style={{ backgroundImage: `url(${bgImage})` }}>
                <p className="leading-loose text-amber-500 text-start"><a className="text-white leading-loose">Home</a>| About Us</p>
                <h1 className="text-start text-white font-bold">About Us</h1>
            </div>
            <Amwerk/>
            <Approach/>
            <Skillset/>
            <Client/>
            <Roadmap/>
        </div>
    )
}