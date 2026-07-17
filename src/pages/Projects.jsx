import bgImage from '../assets/Images/bg-1.png'
import Portfolio from '../components/Portfolio'

export default function Projects(){
    return(
        <section className="flex flex-col items-center w-full bg-white">
            <div className="w-full flex flex-col items-center py-12 px-5 bg-center bg-no-repeat bg-cover text-white" style={{ backgroundImage: `url(${bgImage})` }}>
                <div className="w-full max-w-7xl py-7">
                    <p className="leading-loose text-yellow-300 text-start"><a className="text-white leading-loose">Home</a>| Projects</p>
                    <h1 className="text-start text-white font-bold text-7xl">Case Study</h1>
                </div>
            </div>
            <Portfolio/>
        </section>
    )
}