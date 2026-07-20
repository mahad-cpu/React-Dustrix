import bgImage from '../assets/Images/bg-1.png'
import Framework from '../components/Framework'
import Skillset from '../components/Skillset'
import TeamMembers from '../components/TeamMembers'

export default function Team(){
    return(
        <section className="w-full flex flex-col items-center">
            <div className="w-full flex flex-col items-center bg-cover bg-center bg-no-repeat py-12 px-5 text-white" style={{ backgroundImage: `url(${bgImage})` }}>
                <div className="w-full max-w-7xl flex flex-col items-start justify-center mt-12">
                    <p className="leading-loose text-yellow-300 text-start"><a className="text-white leading-loose">Home</a>| Team</p>
                    <h1 className="text-start text-white text-[clamp(0.7rem,13vw,4rem)] font-bold mt-0 leading-tight">Our Expert Team</h1>
                </div>
            </div> 
            <TeamMembers/>
            <Skillset/>
            <Framework/>
        </section>
    )
}