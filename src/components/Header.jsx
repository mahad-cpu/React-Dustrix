import { Link } from 'react-router-dom';
import logo from '../assets/Images/logo.png'
import search from '../assets/Images/search.png'
import grid from '../assets/Images/grid.png'

export default function Header(){
    return(
        <header className="flex flex-col items-center w-full">
            <div className="w-full max-w-7xl">
                <div className="flex flex-row p-5 text-white w-full justify-between ">
                    <div className="flex flex-row gap-5">
                        <div>
                            <a href="#" className="hover:text-yellow-300 transition-all duration-300 ease-in-out"><span className="font-bold ">Working Hours:</span> Mon - Sat 8:00 - 18:00</a>
                        </div>
                        <div>
                            <a href="#" className="font-bold hover:text-yellow-300 transition-all duration-300 ease-in-out">Terms and Conditions</a>
                        </div>
                    </div>
                    <div className="flex flex-row justify-end">
                        <label for="lang">English</label>
                        <select>
                            <option></option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="relative w-full bg-gray-100 text-black flex flex-col items-center">
                <div className="w-full max-w-7xl p-7 pb-12 flex flex-row items-center justify-between">
                    <div>
                        <a hre="#"><img src={logo} className="h-12 w-auto object-contain" alt="logo"/></a>
                    </div>
                    <div className="flex flex-row gap-7 items-center">
                        <div className="flex flex-col">
                            <a href="#"><span className="font-extrabold mx-5 text-lg">(+1) 555 234-8765</span></a>
                            <span className="text-zinc-500">Call Us Now</span>
                        </div>
                        <div className="flex flex-col">
                            <a href="#"><span className="font-extrabold mx-5 text-lg">info@webexample.com</span></a>
                            <span className="text-zinc-500">Mail Us Now</span>
                        </div>
                        <div className="mx-7">
                            <button className="font-bold  px-7 py-4 bg-yellow-300 rounded-xl hover:text-white trnsitiona-all duration-300 ease-in-out">Get A Qoute</button>
                        </div>
                    </div>
                </div>
                <div className="relative hidden lg:block absolute max-w-7xl top-[85%] w-full bg-transparent px-7 text-md">
                    <div className="rounded-xl bg-white overflow-hidden flex flex-row justify-between ">
                        <div className="flex flex-row justify-start w-full">
                            <ul className="flex flex-row  font-bold gap-10 p-5">
                                <li className="group"><Link to="/" className=" transition-all duration-300 ease-in-out hover:text-yellow-300 font-extrabold">Home</Link>
                                    <ul className="absolute top-25 opacity-0 invisible group-hover:visible group-hover:-translate-y-[40%] group-hover:opacity-100 transitiona-all duration-500 ease-in-out left-8 z-50 bg-yellow-300 w-[200px] rounded-b-lg text-start font-bold flex flex-col justify-center py-2 gap-1">
                                        <li className="hover:text-white transition-all duration-300 ease-in-out"><a href="#" className="block px-5 font-extrabold">Home 1</a></li>
                                        <li className="hover:text-white transition-all duration-300 ease-in-out"><a href="#" className="block px-5 font-extrabold">Home 2</a></li>
                                        <li className="hover:text-white transition-all duration-300 ease-in-out"><a href="#" className="block px-5 font-extrabold">Home 3</a></li>
                                    </ul>
                                </li>
                                <li className="transition-all duration-300 ease-in-out hover:text-yellow-300 font-extrabold"><Link to="/About">About</Link></li>
                                <li className="group"><Link to="/" className="transition-all duration-300 ease-in-out hover:text-yellow-300 font-extrabold">Pages</Link>
                                    <ul className="absolute top-25 opacity-0 invisible group-hover:visible group-hover:-translate-y-[40%] group-hover:opacity-100 transitiona-all duration-500 ease-in-out left-45 z-50 bg-yellow-300 w-[200px] rounded-b-lg text-start font-bold flex flex-col justify-center py-2 gap-1">
                                        <li className="hover:text-white transition-all duration-300 ease-in-out w-full"><a href="#" className="block px-5 font-extrabold"><Link to="/Team">Team</Link></a></li>
                                        <li className="hover:text-white transition-all duration-300 ease-in-out"><a href="#" className="block px-5 font-extrabold">Faq</a></li>
                                        <li className="hover:text-white transition-all duration-300 ease-in-out"><a href="#" className="block px-5 font-extrabold">Projects</a></li>
                                    </ul>
                                </li>
                                <li className=" transition-all duration-300 ease-in-out hover:text-yellow-300 font-extrabold"><Link to="/Services">Services</Link></li>
                                <li className=" transition-all duration-300 ease-in-out hover:text-yellow-300 font-extrabold"><Link to="/News">News</Link></li>
                                <li className=" transition-all duration-300 ease-in-out hover:text-yellow-300 font-extrabold"><Link to="/Contact">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="flex flex-row">
                            <div className="flex flex-row py-3 px-5 justify-center items-center bg-yellow-300 transition-all duration-300 ease-in-out hover:bg-black"><a href="#"><img className="w-[32px]" src={search} /></a></div>
                            <div className="flex flex-row py-3 px-5 justify-center items-center bg-yellow-300 transition-all duration-300 ease-in-out hover:bg-black"><a href="#"><img className="w-[32px]" src={grid} /></a></div>
                        </div>
                    </div>  
                </div>
            </div>
        </header>
    )
}