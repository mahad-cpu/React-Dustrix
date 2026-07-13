import logo from '../assets/Images/logo.png'
import search from '../assets/Images/search.png'
import grid from '../assets/Images/grid.png'

export default function Header(){
    return(
        <header className="flex flex-col items-center w-full">
            <div className="flex flex-row p-5 text-white w-full justify-between bg-black">
                <div className="flex flex-row gap-5">
                    <div>
                        <a href="#"><span className="font-bold">Working Hours:</span> Mon - Sat 8:00 - 18:00</a>
                    </div>
                    <div>
                        <a href="#" className="font-bold">Terms and Conditions</a>
                    </div>
                </div>
                <div className="flex flex-row justify-end">
                    <label for="lang">English</label>
                    <select>
                        <option></option>
                    </select>
                </div>
            </div>

            <div className="bg-zinc-900 w-full p-7 flex flex-row items-center justify-between">
                <div>
                    <a hre="#"><img src={logo} className="h-12 w-auto object-contain" alt="logo"/></a>
                </div>
                <div className="flex flex-row gap-7 items-center">
                    <div className="flex flex-col">
                        <a href="#"><span className="font-bold text-white">(+1) 555 234-8765</span></a>
                        <span>Call Us Now</span>
                    </div>
                    <div className="flex flex-col">
                        <a href="#"><span className="font-bold text-white">info@webexample.com</span></a>
                        <span>Mail Us Now</span>
                    </div>
                    <div className="mx-7">
                        <button onClick="" className="font-bold text-white px-5 py-4 bg-amber-500 rounded-xl">Get A Qoute</button>
                    </div>
                </div>
            </div>

            <div className="w-full bg-transparent px-7">
                <div className="rounded-xl overflow-hidden flex flex-row justify-between bg-zinc-900">
                    <div className="flex flex-row justify-start w-full">
                        <ul className="flex flex-row text-white font-bold gap-10 p-5">
                            <li className=" hover:text-amber-500">Home</li>
                            <li className=" hover:text-amber-500">About</li>
                            <li className=" hover:text-amber-500">Pages</li>
                            <li className=" hover:text-amber-500">Services</li>
                            <li className=" hover:text-amber-500">News</li>
                            <li className=" hover:text-amber-500">Contact</li>
                        </ul>
                    </div>
                    <div className="flex flex-row">
                        <div className="flex flex-row py-3 px-5 justify-center items-center bg-amber-500 hover:bg-black"><a href="#"><img className="w-[32px]" src={search} /></a></div>
                        <div className="flex flex-row py-3 px-5 justify-center items-center bg-amber-500 hover:bg-black"><a href="#"><img className="w-[32px]" src={grid} /></a></div>
                    </div>
                </div>  
            </div>
        </header>
    )
}