import sv1 from '../assets/Images/sv-1.png'
import sv2 from '../assets/Images/sv-2.png'
import sv3 from '../assets/Images/sv-3.png'
import sv4 from '../assets/Images/sv-4.png'

import svb1 from '../assets/Images/svb1.png'
import svb2 from '../assets/Images/svb2.png'
import svb3 from '../assets/Images/svb3.png'
import svb4 from '../assets/Images/svb4.png'

export default function Services() {
  const services = [
    { id: 1, icon: sv1, bg: svb1, title: 'Quick Coordinate\nE-business' },
    { id: 2, icon: sv2, bg: svb2, title: 'Quick Coordinate\nE-business' },
    { id: 3, icon: sv3, bg: svb3, title: 'Quick Coordinate\nE-business' },
    { id: 4, icon: sv4, bg: svb4, title: 'Quick Coordinate\nE-business' },
  ]

  return (
    <div className="w-full flex flex-col items-center bg-zinc-100 p-12">
      <div className="w-full max-w-7xl py-12">
        <div className="relative text-center">
          <h1 className="font-extrabold text-[clamp(4rem,13vw,12rem)] mb-0 text-white select-none">
            Services
          </h1>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <h4 className="text-black uppercase tracking-wider text-sm font-semibold mb-1">
              Our Services
            </h4>
            <h2 className="font-bold text-[clamp(1.7rem,5vw,4rem)] text-black leading-none">
              What we do
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-12 mt-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-md bg-white p-8 flex flex-col items-center text-center transition-all duration-500 bg-cover bg-center overflow-hidden border border-zinc-200 hover:shadow-xl"
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
               style={{backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${service.bg})`}}
              />
              <div className="relative z-10 flex flex-col items-center gap-5 w-full">
                <div className="rounded-full bg-yellow-300 p-6 flex items-center duration-500 justify-center transition-transform group-hover:scale-110 group-hover:bg-white">
                  <img src={service.icon} alt="Service icon" className="w-10 h-10 object-contain" />
                </div>

                <h4 className="font-bold text-2xl text-black whitespace-pre-line leading-snug duration-500 group-hover:text-white">
                  {service.title}
                </h4>

                <a
                  href="#"
                  className="w-full py-2.5 px-5 bg-yellow-300 rounded-md font-medium text-black text-center hover:bg-yellow-400 transition-colors shadow-sm mt-2"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}