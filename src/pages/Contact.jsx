import bgImage from '../assets/Images/bg-1.png'
import ContactDet from '../components/Contact-det'
import GetIn from '../components/GetIn'
import Location from '../components/Location'

export default function Contact(){
    return(
        <div classname="w-full flex flex-col items-center">
            <div className="w-full flex flex-col items-center bg-cover bg-center bg-no-repeat py-12 px-5 text-white" style={{ backgroundImage: `url(${bgImage})` }}>
               <div className="w-full max-w-7xl flex flex-col items-start justify-center mt-12">
                    <p className="leading-loose text-yellow-300 text-start"><a className="text-white leading-loose">Home</a>| Contact</p>
                    <h1 className="text-start text-white text-[clamp(1rem,13vw,4rem)] font-bold mt-0">Contact Us</h1>
               </div>
            </div> 
            <ContactDet/>
            <Location/>
            <GetIn heading="Get In Touch"/>
        </div>
    )
}