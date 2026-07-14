import bgImage from '../assets/Images/bg-1.png'
import ContactDet from '../components/Contact-det'
import GetIn from '../components/GetIn'

export default function Contact(){
    return(
        <div classname="w-full">
            <div className="w-full bg-cover bg-center bg-no-repeat py-12 px-5 text-white" style={{ backgroundImage: `url(${bgImage})` }}>
                <p className="leading-loose text-amber-500 text-start"><a className="text-white leading-loose">Home</a>| Contact</p>
                <h1 className="text-start text-white font-bold">Contact Us</h1>
            </div> 
            <ContactDet/>
            <GetIn/>
        </div>
    )
}