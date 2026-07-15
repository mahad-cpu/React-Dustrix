import sk from '../assets/Images/sk.png'
import sk_1 from '../assets/Images/sk_1.png'

export default function Skillset(){
    return(
        <section className="w-full">
            <div className="relative bg-cover bg-center bg-no-repeat linear-gradient(to_bottom,rgba(0,0,0,0.7),rgba(0,0,0,0.3)),url(sk)">
                <div>
                    <img src={sk_1} />
                </div>
            </div>
        </section>
    )
}