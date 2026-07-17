import bgImage from '../assets/Images/bg-1.png'
import NewsBody from '../components/NewsBody'

export default function News(){
    return(
        <section className="w-full flex flex-col items-center">
             <div className="w-full flex flex-col items-center py-12 px-5 text-white bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${bgImage})` }}>
                <div className="w-full max-w-7xl py-7">
                    <p className="leading-loose text-yellow-300 text-start"><a className="text-white leading-loose">Home</a>| News</p>
                    <h1 className="text-start text-white font-bold text-7xl">News Feeds</h1>
                </div>
            </div>
            <NewsBody/>
        </section>
    )
}