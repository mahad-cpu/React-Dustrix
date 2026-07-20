import sk from '../assets/Images/sk.png'
import sk_1 from '../assets/Images/sk_1.png'

export default function Skillset(){
    return(
        <section className="w-full flex flex-col items-center bg-white py-12 px-5">
            <div className="w-full max-w-7xl">
              <div className="relative bg-cover bg-center bg-no-repeat flex flex-row" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${sk})`}}>
                <div className="p-12 hidden lg:block">
                    <img src={sk_1} />
                </div>
                <div className="py-12 text-start pr-12 px-7">
                    <p>Our Skill Set</p>
                    <h1 className="font-bold text-[clamp(2rem,5vw,3rem)] leading-tight">Our Professional and Creative Team</h1>
                    <div className="border-l-2 border-yellow-300 px-5">
                        <h3 className="font-bold text-lg">Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.</h3>
                    </div>
                    <div className="my-3">
                    <div className="mb-1 text-sm font-bold text-white">Construction</div>
                    <div className="w-full bg-zinc-700 rounded-full h-2">
                      <div className="bg-yellow-300 h-2 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                  <div className="my-3">
                    <div className="mb-1 text-sm font-bold text-white">Factoring</div>
                    <div className="w-full bg-zinc-700 rounded-full h-2">
                      <div className="bg-yellow-300 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div className="my-3">
                    <div className="mb-1 text-base font-bold text-white">Industry</div>
                    <div className="w-full bg-zinc-700 rounded-full h-2">
                      <div className="bg-yellow-300 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>
    )
}