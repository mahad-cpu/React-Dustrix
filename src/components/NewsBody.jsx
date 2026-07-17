import n_1 from '../assets/Images/n_1.png'
import n_2 from '../assets/Images/n_2.png'
import n_3 from '../assets/Images/n_3.png'
import au from '../assets/Images/au.png'
import you from '../assets/Images/you.png'
import twitter from '../assets/Images/twitter.png'
import linked from '../assets/Images/linked.png'
import face from '../assets/Images/face.png'
import search from '../assets/Images/search.png'

export default function NewsBody(){
    return(
        <section className="w-full flex flex-col items-center py-12 px-3 bg-white">
            <div className="w-full max-w-7xl">
                <div className="grid grid-cols-12 md:grid-cols-12 gap-7">
                    <div className="col-span-12 md:col-span-8 flex flex-col items-center gap-7">
                        <div>
                            <img src={n_1} className="w-full"/>
                            <div className="border-2 border-zinc-200 border-t-0 flex flex-col p-12 pb-0">
                                <a href="#" className="block justify-self-start px-7 py-1 bg-orange-500 hover:bg-yellow-300 font-bold text-white transition-all duration-500 ease-in-out self-start">Business</a>
                                <a href="news-detail"><h2 className="text-3xl font-bold my-3 text-black hover:text-yellow-300 transition-all duration-500 ease-in-out text-start">Dharma Home Suites at Novia offers fully plain furnished apartments to fit</h2></a>
                                <div className="flex flex-row gap-3 mb-3">
                                    <h3 className="text-black font-bold">232 Views</h3>
                                    <h3 className="text-black font-bold">35 Comments</h3>
                                    <h3 className="text-black font-bold">24th March 2021</h3>
                                </div>
                                <p className="text-sm text-start text-zinc-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repreh enderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                <div className="flex flex-row justify-between items-center my-3">
                                    <div className="flex flex-row items-center">
                                        <img src={au} className="rounded-full scale-40"/>
                                            <div>
                                                <h3 className="text-black text-lg font-bold">by Hetmayar</h3>
                                            </div>
                                    </div>
                                    <a href="news-detail" className="flex flex-row items-center gap-1 text-lg text-black hover:text-blue-500 transition-all duration-500 ease-in-out font-bold">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src={n_2} className="w-full"/>
                            <div className="border-2 border-zinc-200 border-t-0 flex flex-col p-12 pb-0">
                                <a href="#" className="block justify-self-start px-7 py-1 bg-orange-500 hover:bg-yellow-300 font-bold text-white transition-all duration-500 ease-in-out self-start">Education</a>
                                <a href="news-detail"><h2 className="text-3xl font-bold my-3 text-black hover:text-yellow-300 transition-all duration-500 ease-in-out text-start">Back to the future: Quality education through.</h2></a>
                                <div className="flex flex-row gap-3 mb-3">
                                    <h3 className="text-black font-bold">232 Views</h3>
                                    <h3 className="text-black font-bold">35 Comments</h3>
                                    <h3 className="text-black font-bold">24th March 2021</h3>
                                </div>
                                <p className="text-sm text-start text-zinc-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repreh enderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                <div className="flex flex-row justify-between items-center my-3">
                                    <div className="flex flex-row items-center">
                                        <img src={au} className="rounded-full scale-40"/>
                                            <div>
                                                <h3 className="text-black text-lg font-bold">by Hetmayar</h3>
                                            </div>
                                    </div>
                                    <a href="news-detail" className="flex flex-row items-center gap-1 text-lg text-black hover:text-blue-500 transition-all duration-500 ease-in-out font-bold">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src={n_3} className="w-full"/>
                            <div className="border-2 border-zinc-200 border-t-0 flex flex-col p-12 pb-0">
                                <a href="#" className="block justify-self-start px-7 py-1 bg-orange-500 hover:bg-yellow-300 font-bold text-white transition-all duration-500 ease-in-out self-start">Charity</a>
                                <a href="news-detail"><h2 className="text-3xl font-bold my-3 text-black hover:text-yellow-300 transition-all duration-500 ease-in-out text-start">Take Care Of The Elderly Without Home.</h2></a>
                                <div className="flex flex-row gap-3 mb-3">
                                    <h3 className="text-black font-bold">232 Views</h3>
                                    <h3 className="text-black font-bold">35 Comments</h3>
                                    <h3 className="text-black font-bold">24th March 2021</h3>
                                </div>
                                <p className="text-sm text-start text-zinc-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repreh enderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                <div className="flex flex-row justify-between items-center my-3">
                                    <div className="flex flex-row items-center">
                                        <img src={au} className="rounded-full scale-40"/>
                                            <div>
                                                <h3 className="text-black text-lg font-bold">by Hetmayar</h3>
                                            </div>
                                    </div>
                                    <a href="news-detail" className="flex flex-row items-center gap-1 text-lg text-black hover:text-blue-500 transition-all duration-500 ease-in-out font-bold">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-4">
                        <div className="flex flex-col gap-7">
                            <div className="p-10 border-2 border-solid border-zinc-200">
                                <h2 className="text-start font-bold text-black">About Me</h2>
                                <div className="flex flex-row justify-center overflow-hidden my-5">
                                    <img src={au}/>
                                </div>
                                <div>
                                    <h2 className="text-md text-black">Rosalina D. Willaimson</h2>
                                    <p className="text-zinc-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                    <div className="flex flex-row gap-1 justify-center mt-7">
                                        <a href=""><img src={face}/></a>
                                        <a href=""><img src={twitter}/></a>
                                        <a href=""><img src={linked}/></a>
                                        <a href=""><img src={you}/></a>
                                    </div>
                                </div>
                            </div>
                            <div className="p-10 border-2 border-solid border-zinc-200">
                                <h2 className="text-start font-bold text-black">Search Objects</h2><br/>
                                <form className="flex flex-row items-center">
                                    <input type="text" placeholder='Search your keywords...' className="p-4 bg-zinc-100 text-zinc-800 w-full"/>
                                    <button typr="submit" className="bg-orange-500 p-3 hover:bg-yellow-300 transition-all duration-300 ease-in-out"><img src={search} className="scale-60"/></button>
                                </form>
                            </div>
                            <div className="p-10 border-2 border-solid border-zinc-200">
                                <h2 className="text-start font-bold text-black">Never Miss News</h2><br/>
                                <div className="flex flex-row gap-5 justify-center mt-7">
                                    <a href=""><img src={face} className='p-2 rounded-full bg-zinc-200 hover:bg-orange-500 transition-all duration-300 ease-in-out'/></a>
                                    <a href=""><img src={twitter} className='p-2 rounded-full bg-zinc-200 hover:bg-orange-500 transition-all duration-300 ease-in-out'/></a>
                                    <a href=""><img src={linked} className='p-2 rounded-full bg-zinc-200 hover:bg-orange-500 transition-all duration-300 ease-in-out'/></a>
                                    <a href=""><img src={you} className='p-2 rounded-full bg-zinc-200 hover:bg-orange-500 transition-all duration-300 ease-in-out'/></a>
                                </div>
                            </div>
                            <div className="p-10 border-2 border-solid border-zinc-200">
                                <h2 className="text-start font-bold text-black">Popular Tags</h2><br/>
                                <div className="flex flex-row flex-wrap gap-1 justify-center mt-7">
                                    <h4 className="w-fit px-5 py-1 bg-zinc-100 hover:bg-orange-500 transitin-all duration-300 ease-in-out text-black hover:text-white font-extrabold">Event</h4>
                                    <h4 className="w-fit px-5 py-1 bg-zinc-100 hover:bg-orange-500 transitin-all duration-300 ease-in-out text-black hover:text-white font-extrabold">Help</h4>
                                    <h4 className="w-fit px-5 py-1 bg-zinc-100 hover:bg-orange-500 transitin-all duration-300 ease-in-out text-black hover:text-white font-extrabold">Ux</h4>
                                    <h4 className="w-fit px-5 py-1 bg-zinc-100 hover:bg-orange-500 transitin-all duration-300 ease-in-out text-black hover:text-white font-extrabold">Food</h4>
                                    <h4 className="w-fit px-5 py-1 bg-zinc-100 hover:bg-orange-500 transitin-all duration-300 ease-in-out text-black hover:text-white font-extrabold">Ui</h4>
                                    <h4 className="w-fit px-5 py-1 bg-zinc-100 hover:bg-orange-500 transitin-all duration-300 ease-in-out text-black hover:text-white font-extrabold">Water</h4>
                                    <h4 className="w-fit px-5 py-1 bg-zinc-100 hover:bg-orange-500 transitin-all duration-300 ease-in-out text-black hover:text-white font-extrabold">Charity</h4>
                                    <h4 className="w-fit px-5 py-1 bg-zinc-100 hover:bg-orange-500 transitin-all duration-300 ease-in-out text-black hover:text-white font-extrabold">Donate</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}