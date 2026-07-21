import bgImage from '../assets/Images/bg-1.png'
import arrow from '../assets/Images/arrow.png'
import Experience from '../components/Experience'
import Services from '../components/Services'
import News from '../components/News'
import NewsLetter from '../components/NewsLetter'
import Solution from '../components/Solution'
import Planning from '../components/Planning'
import Framework from '../components/Framework'
import Faq from '../components/Faq'

export default function Home() {
  return (
    <section className="w-full flex flex-col items-center">
        <div className="w-full flex flex-col items-center bg-cover bg-center bg-no-repeat py-12 px-5 text-white" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="w-full max-w-7xl my-12">
                <p className="text-start font-bold leading-tight text-[clamp(4rem,6vw,8rem)] mt-12">Global Automotive</p>
                <div className="mt-7 mb-12 flex flex-row gap-7">
                    <button onClick="#" className="py-3 px-7 flex flex-row items-center gap-2 bg-yellow-300 rounded-lg hover:bg-black transition-all duration-300 ease-in-out">Our Services<img src={arrow} className="h-[16px] rotate-90"/></button>
                    <button onClick="#" className="py-3 px-7 bg-black hover:bg-yellow-300 rounded-lg transition-all duration-300 ease-in-out">Learn More</button>
                </div>
            </div>
        </div>
        <div className="w-full flex flex-col items-center">
            <Experience/>
            <Services/>
            <Faq/>
            <Framework/>
            <Planning/>
            <Solution/>
            <NewsLetter/>
            <News/>
        </div>
    </section>
  )
}