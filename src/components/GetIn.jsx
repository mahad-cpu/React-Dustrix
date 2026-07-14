export default function GetIn(){
    return(
        <div className="w-full">
            <h1 className="text-white font-bold">Get In Touch</h1>
            <form className="p-7 grid grid-cols-1 lg:grid-cols-2">
                <div className="p-5 text-start">
                    <label for="Name">Full Name</label>
                    <input id="Name" type="text" placeholder="Enter Name" className="w-full p-3 bg-zinc-800"/>
                </div>
                <div className="p-5 text-start">
                    <label for="Email">Email Address</label>
                    <input id="Email" type="email" placeholder="Enter Email" className="w-full p-3 bg-zinc-800"/>
                </div>
                <div className="p-5 text-start">
                    <label for="number">Phone Number</label>
                    <input id="number" type="number" placeholder="Enter Phone Number" className="w-full p-3 bg-zinc-800"/>
                </div>
                <div className="p-5 text-start">
                    <label for="sub">Subject</label>
                    <input id="sub" type="text" placeholder="Enter Subject" className="w-full p-3 bg-zinc-800"/>
                </div>
                <div className="p-5 text-start col-span-1 lg:col-span-2">
                    <label for="mes">Message</label>
                    <textarea id="mes"  placeholder="Enter Subject" className="w-full p-3 bg-zinc-800"/>
                </div>

                <div className="col-span-1 lg:col-span-2">
                    <button type="submit" className="font-bold text-white px-10 py-3 m-3 bg-amber-500 hover:bg-black rounded-md">Get A Qoute</button>
                </div>
            </form>
        </div>
    )
}