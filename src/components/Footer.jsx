import logo from '../assets/Images/logo.png'
import arrow from '../assets/Images/arrow.png'
import calendar from '../assets/Images/calendar.png'
import nf_1 from '../assets/Images/nf-1.png'
import nf_2 from '../assets/Images/nf-2.png'
import nf_3 from '../assets/Images/nf-3.png'
import letter from '../assets/Images/letter.png'
import location from '../assets/Images/location.png'
import phone from '../assets/Images/phone.png'
import plane from '../assets/Images/plane.png'

export default function Footer(){
    return(
        <footer className="w-full flex flex-col items-center bg-black">
            <div className="w-full max-w-7xl">
                <div className="bg-black w-full p-10 grid grid-cols-2 lg:grid-cols-4 gap-5 text-start">
                    <div>
                        <h6 className="font-bold text-white mb-7">About Us</h6>
                        <p>Use Wix's Advanced Web Page Design Tools to Create Your Professional Site in an Instant! Experience Total Design Freedom and the Ability to Customize Your Site as You Wish! Social media compatible with design.</p>
                        <div className="flex flex-row w-full gap-1 mt-5">
                            <div className="rounded-md bg-zinc-900"></div>
                            <div className="rounded-md bg-zinc-900"></div>
                            <div className="rounded-md bg-zinc-900"></div>
                            <div className="rounded-md bg-zinc-900"></div>
                        </div>
                    </div>
                    <div>
                        <h6 className="font-bold text-white mb-7">News Feeds</h6>
                        <div class="flex flex-col gap-3">
                            <div className="flex flex-row gap-3">
                                <img src={nf_1} className="w-[64px] h-[64px] rounded-md" />
                                <div className="flex flex-col">
                                    <div className="flex flex-row items-center gap-2"><img src={calendar} className="w-[16px] h-[16px] rounded-md"/><span className="text-xs">24th November 2020</span></div>
                                    <span className="font-bold text-xs transition-all duration-300 ease-in-out hover:text-amber-500">The Most Successful Engineering Contractor</span>
                                </div>
                            </div>
                            <div className="flex flex-row gap-3">
                                <img src={nf_2} className="w-[64px] h-[64px] rounded-md" />
                                <div className="flex flex-col">
                                    <div className="flex flex-row items-center gap-2"><img src={calendar} className="w-[16px] h-[16px] rounded-md"/><span className="text-xs">24th November 2020</span></div>
                                    <span className="font-bold text-xs transition-all duration-300 ease-in-out hover:text-amber-500">The Most Successful Engineering Contractor</span>
                                </div>
                            </div>
                            <div className="flex flex-row gap-3">
                                <img src={nf_3} className="w-[64px] h-[64px] rounded-md" />
                                <div className="flex flex-col">
                                    <div className="flex flex-row items-center gap-2"><img src={calendar} className="w-[16px] h-[16px] rounded-md"/><span className="text-xs">24th November 2020</span></div>
                                    <span className="font-bold text-xs transition-all duration-300 ease-in-out hover:text-amber-500">The Most Successful Engineering Contractor</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h6 className="font-bold text-white mb-7">Newsletter</h6>
                        <p>Subscribe our newsletter to get our latest updates & news.</p>
                        <form className="flex flex-row rounded-lg border-2 border-solid border-amber-400 my-7"> 
                            <input type="email" className=" w-full h-[56px] pl-5 text-xs " placeholder="Enter email address"/>
                            <button type="submit" className="p-3 bg-amber-500 rounded-r-md hover:bg-zinc-900 transition-all duration-300 ease-in-out"><img src={plane} /></button>
                        </form>
                    </div>
                    <div>
                        <h6 className="font-bold text-white mb-7">Get In Touch</h6>
                        <div class="flex flex-col gap-3">
                            <div className="flex flex-row gap-3 py-1">
                                <div className="w-[36px] h-[36px] rounded-md bg-amber-500 flex flex-row items-center justify-center p-2 transition-all duration-300 ease-in-out hover:bg-black">
                                    <img src={phone} />
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex flex-row items-center gap-2 text-xs font-bold"><span>Phone Number</span></div>
                                    <span className="font-bold text-sm">908 9098 987 98</span>
                                </div>
                            </div><hr></hr>
                            <div className="flex flex-row gap-3 py-1">
                                <div className="w-[36px] h-[36px] rounded-md bg-amber-500 flex flex-row items-center justify-center p-2 transition-all duration-300 ease-in-out hover:bg-black">
                                    <img src={letter} />
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex flex-row items-center gap-2 text-xs font-bold"><span>Phone Number</span></div>
                                    <span className="font-bold text-sm">908 9098 987 98</span>
                                </div>
                            </div><hr></hr>
                            <div className="flex flex-row gap-3 py-1">
                                <div className="w-[36px] h-[36px] rounded-md bg-amber-500 flex flex-row items-center justify-center p-2 transition-all duration-300 ease-in-out hover:bg-black">
                                    <img src={location} />
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex flex-row items-center gap-2 text-xs font-bold"><span>Phone Number</span></div>
                                    <span className="font-bold text-sm">908 9098 987 98</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-amber-500 flex flex-col items-center">
                <div className="w-full max-w-7xl">
                    <div className="relative w-full flex flex-row items-center px-7 py-5 bg-amber-500 justify-between">
                        <div className="justify-self-start">
                            <h6 className="font-bold">© Copyright By Dustrix - 2021</h6>
                        </div>
                        <div className="absolute bottom-0 -translate-x-1/2  left-1/2 justify-self-center bg-zinc-900 px-10 py-7">
                            <a href="#"><img alt="logo" src={logo}/></a>
                        </div>
                        <div className="justify-self-end">
                            <button className="p-3 rounded-md bg-amber-600 hover:bg-black transition-all duration-300 ease-in-out"><img src={arrow} alt="Top" className="h-[16px]"/></button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}