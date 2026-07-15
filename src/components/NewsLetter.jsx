import nl_1 from '../assets/Images/nl_1.png'
import nl_2 from '../assets/Images/nl_2.png'
import m from '../assets/Images/messages.png'

export default function NewsLetter() {
  return (
    <div className="w-full flex flex-row h-[632px]">
      <div className="hidden lg:block w-[40%] bg-cover bg-center bg-no-repeat " style={{ backgroundImage: `url(${nl_1})` }}></div>
      <div className="w-full flex flex-row justify-start items-center lg:w-[60%] bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${nl_2})`}}>
        <div className="w-full max-w-3xl ml-[10%]">
            <div className="rounded-[32px] bg-amber-500 p-4 flex flex-row items-center justify-center w-fit m-7 mb-1"><img src={m} /></div>
          <h2 className="font-bold text-4xl">Get Weekly Newsletter</h2>
          <h3 className="text-white">Get your answer directly or get weekly updates.</h3>
          <form className="m-7 mb-12 flex flex-row rounded-lg border-1 border-solid">
              <input type="email" placeholder="Enter Email Address" className="p-5 w-full  " />
              <button type="submit" className="px-5 bg-amber-500 rounded-r-lg text-white"><span>Subscribe Now</span></button>
          </form> 
        </div>
      </div>

    </div>
  )
}