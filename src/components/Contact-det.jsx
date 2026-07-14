import message from '../assets/Images/messages.png'
import phone from '../assets/Images/phone.png'
import location from '../assets/Images/location.png'
import arrow from '../assets/Images/arrow.png'

export default function(){
    return(
        <div className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 p-7">
                <div className="flex flex-col items-center justify-center group bg-zinc-900 p-5 gap-5">
                    <div className="flex flex-row gap-3">
                        <div className="rounded-full p-2 w-fit bg-zinc-800 group-hover:bg-amber-500"><img src={message} className="scale-50"/></div>
                        <div>
                            <h2 className="font-bold">Email Address</h2>
                            <p>Sent mail asap anytime</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-7 items-center">
                        <div>
                            <p>info@example.com</p>
                            <p>jobs@example.com</p>
                        </div>
                        <div className="rounded-full p-1 w-fit bg-zinc-800"><img src={arrow} className="scale-30 rotate-90"/></div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center group bg-zinc-900 p-5 gap-5">
                    <div className="flex flex-row gap-3">
                        <div className="rounded-full p-2 w-fit bg-zinc-800 group-hover:bg-amber-500"><img src={message} className="scale-50"/></div>
                        <div>
                            <h2 className="font-bold">Phone Number</h2>
                            <p>call us asap anytime</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-7 items-center">
                        <div>
                            <p>098-098-098-09</p>
                            <p>+(098)-098-098-09</p>
                        </div>
                        <div className="rounded-full p-1 w-fit bg-zinc-800"><img src={arrow} className="scale-30 rotate-90"/></div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center group bg-zinc-900 p-5 gap-5">
                    <div className="flex flex-row gap-3">
                        <div className="rounded-full p-2 w-fit bg-zinc-800 group-hover:bg-amber-500"><img src={message} className="scale-50"/></div>
                        <div>
                            <h2 className="font-bold">Office Address</h2>
                            <p>Sent mail asap anytime</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-7 items-center">
                        <div className="text-start">
                            <p>B2, Miranda City Tower</p>
                            <p>NewYork, US</p>
                        </div>
                        <div className="rounded-full p-1 w-fit bg-zinc-800"><img src={arrow} className="scale-30 rotate-90"/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}