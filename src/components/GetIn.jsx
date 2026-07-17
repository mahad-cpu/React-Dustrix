export default function GetIn(hd){
    return(
        <section className="w-full flex flex-col items-center bg-white py-12">
            <div className="w-full max-w-7xl">
                <p className="text-zinc-500">Write A Message</p>
                <h1 className="text-black font-bold">{hd.heading}</h1>
                <form className="p-7 grid grid-cols-1 lg:grid-cols-2">
                    <div className="p-5 text-start">
                        <label className="text-black font-semibold" for="Name">Full Name</label>
                        <input id="Name" type="text" placeholder="Enter Name" className="w-full p-3 bg-zinc-100 text-zinc-900 font-semibold"/>
                    </div>
                    <div className="p-5 text-start">
                        <label className="text-black font-semibold" for="Email">Email Address</label>
                        <input id="Email" type="email" placeholder="Enter Email" className="w-full p-3 bg-zinc-100 text-zinc-900 font-semibold"/>
                    </div>
                    <div className="p-5 text-start">
                        <label className="text-black font-semibold" for="number">Phone Number</label>
                        <input id="number" type="number" placeholder="Enter Phone Number" className="w-full p-3 bg-zinc-100 text-zinc-900 font-semibold"/>
                    </div>
                    <div className="p-5 text-start">
                        <label className="text-black font-semibold" for="sub">Subject</label>
                        <input id="sub" type="text" placeholder="Enter Subject" className="w-full p-3 bg-zinc-100 text-zinc-900 font-semibold"/>
                    </div>
                    <div className="p-5 text-start col-span-1 lg:col-span-2">
                        <label className="text-black font-semibold" for="mes">Message</label>
                        <textarea id="mes"  placeholder="Enter Subject" className="w-full p-3 bg-zinc-100 text-zinc-900 font-semibold h-[200px]"/>
                    </div>

                    <div className="col-span-1 lg:col-span-2">
                        <button type="submit" className="font-bold text-white px-12 py-3 m-3 bg-yellow-300 hover:bg-blue-950 transition-all duration-300 ease-in-out rounded-md">Get A Qoute</button>
                    </div>
                </form>
            </div>
        </section>
    )
}