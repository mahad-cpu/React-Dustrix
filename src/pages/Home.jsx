import bgImage from '../assets/Images/bg-1.png'
import arrow from '../assets/Images/arrow.png'
import Experience from '../components/Experience'
import Services from '../components/Services'
import News from '../components/News'
import NewsLetter from '../components/NewsLetter'
import Solution from '../components/Solution'
import Planning from '../components/Planning'
import Framework from '../components/Framework'

export default function Home() {
  return (
    <section className="w-full flex flex-col items-center">
        <div className="w-full flex flex-col items-center bg-cover bg-center bg-no-repeat py-12 px-5 text-white" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="w-full max-w-7xl my-12">
                <p className="justify-self-start font-bold text-9xl mt-12">Global</p>
                <p className="justify-self-start font-bold text-9xl">Automotive</p>
                <div className="mt-7 mb-12 flex flex-row gap-7">
                    <button onClick="#" className="py-3 px-7 flex flex-row items-center gap-2 bg-amber-500 rounded-lg hover:bg-black">Our Services<img src={arrow} className="h-[16px] rotate-90"/></button>
                    <button onClick="#" className="py-3 px-7 bg-black hover:bg-amber-500 rounded-lg">Learn More</button>
                </div>
            </div>
        </div>
        <div className="w-full flex flex-col items-center">
            <Experience/>
            <Services/>
            <Framework/>
            <Planning/>
            <Solution/>
            <NewsLetter/>
            <News/>
        </div>
    </section>
  )
}