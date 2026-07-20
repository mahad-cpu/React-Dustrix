import { Link } from 'react-router-dom';
import logo from '../assets/Images/logo.png'
import search from '../assets/Images/search.png'
import grid from '../assets/Images/grid.png'
import hm from '../assets/Images/hm.png'
import cross from '../assets/Images/cross.png'
import {useState} from 'react'
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";

export default function Header(){
    

   const [sidebarState, changeState] = useState(false);
   const [accordState, changeAccState] = useState(true);
   const [accordState2, changeAccState2] = useState(true);

   const toggleButton = () => changeState(!sidebarState);
   const toggleAccord = () => changeAccState(!accordState);
   const toggleAccord2 = () => changeAccState2(!accordState2);
    return(
        <header className="flex flex-col items-center w-full">
            <div className="w-full max-w-7xl">
                <div className="hidden md:block flex flex-row p-5 text-white w-full justify-between ">
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
                <div className="w-full max-w-7xl p-7 lg:pb-12 flex flex-row flex-wrap items-center justify-between">
                    <div className='w-full lg:w-fit items-center flex flex-row justify-between'>
                        <div>
                            <a href="#"><img src={logo} className="h-12 w-auto object-contain" alt="logo"/></a>
                        </div>
                        <div>
                            <button type="button" onClick={toggleButton} className="lg:hidden p-5"><img src={hm}/></button>
                        </div>
                    </div>
                    <div className="hidden md:flex flex-row gap-7 items-center w-full justify-between lg:w-fit">
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
                                        <li className="hover:text-white transition-all duration-300 ease-in-out w-full"><Link className="block px-5 font-extrabold" to="/Team">Team</Link></li>
                                        <li className="hover:text-white transition-all duration-300 ease-in-out"><Link className="block px-5 font-extrabold" to="/faqs">Faqs</Link></li>
                                        <li className="hover:text-white transition-all duration-300 ease-in-out"><Link className="block px-5 font-extrabold" to="/projects">Projects</Link></li>
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
            <div className={`fixed overflow-hidden top-0 right-0 h-full w-[300px] overflow-y-scroll bg-black text-white z-[100] transition-transform duration-300 ease-in-out transform ${sidebarState ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-row jusitfy-start p-5">
                    <button type="button" onClick={toggleButton}><img src={cross} className="scale-50"/></button>
                </div>
                <div className="flex flex-col">
                    <button type="button" className="px-10 py-3 text-start transition-all duration-500 text-lg ease-in-out hover:bg-yellow-300 flex flex-row justify-between" onClick={toggleAccord}>Home</button>
                    <div className={`flex flex-col overflow-hidden transition-all duration-500 ease-in-out transform ${accordState ? `max-h-0 opacity-0` : `max-h-40 opacity-100`}`}>
                        <Link to="/" className="px-12 py-2 text-start transition-all duration-500 ease-in-out hover:bg-yellow-300" onClick={toggleButton}>Home 1</Link>
                        <Link to="/" className="px-12 py-2 text-start transition-all duration-500 ease-in-out hover:bg-yellow-300" onClick={toggleButton}>Home 2</Link>
                        <Link to="/" className="px-12 py-2 text-start transition-all duration-500 ease-in-out hover:bg-yellow-300" onClick={toggleButton}>Home 3</Link>
                    </div>
                    <Link to="/About" className="px-10 py-3 text-start transition-all duration-500 text-lg ease-in-out hover:bg-yellow-300" onClick={toggleButton}>About</Link>
                    <button type="button" className="px-10 py-3 text-start transition-all duration-500 text-lg ease-in-out hover:bg-yellow-300 flex flex-row justify-between" onClick={toggleAccord2}>Pages</button>
                    <div className={`flex flex-col overflow-hidden transition-all duration-500 ease-in-out transform ${accordState2 ? `max-h-0 opacity-0` : `max-h-40 opacity-100`}`}>
                        <Link to="/Team" className="px-12 py-2 text-start transition-all duration-500 ease-in-out hover:bg-yellow-300" onClick={toggleButton}>Team</Link>
                        <Link to="/faqs" className="px-12 py-2 text-start transition-all duration-500 ease-in-out hover:bg-yellow-300" onClick={toggleButton}>Faqs</Link>
                        <Link to="/projects" className="px-12 py-2 text-start transition-all duration-500 ease-in-out hover:bg-yellow-300" onClick={toggleButton}>Projects</Link>
                    </div>
                    <Link to="/Services" className="px-10 py-3 text-start transition-all duration-500 text-lg ease-in-out hover:bg-yellow-300" onClick={toggleButton}>Services</Link>
                    <Link to="/News" className="px-10 py-3 text-start transition-all duration-500 text-lg ease-in-out hover:bg-yellow-300" onClick={toggleButton}>News</Link>
                    <Link to="/Contact" className="px-10 py-3 text-start transition-all duration-500 text-lg ease-in-out hover:bg-yellow-300" onClick={toggleButton}>Contact</Link>
                </div>
                <div className="flex flex-col p-5 text-start">
                    <h2>info@webmail.com</h2>
                    <h2>987-098-098-09</h2>
                </div>
                <div className="mb-12 px-12 w-[90%] bg-yellow-300 hover:bg-black transition-all duration-500 ease-in-out rounded-md justify-self-center py-3 w-fit">
                    <Link to="/Contact" cclassName="block w-[80%] bg-yellow-300 text-white font-bold rounded-md py-3 px-7 hover:bg-black transition-all duration-500 ease-in-out" onClick={toggleButton}>Contact</Link>
                </div>
            </div>
        </header>
    )
}