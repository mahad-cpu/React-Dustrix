import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../assets/Styles/styles.css';
import { Navigation } from 'swiper/modules';
import per from '../assets/Images/person.png'
import fm_1 from '../assets/Images/fm_1.png'

export default function Framework(){
    return(
        <div className="flex flex-col items-center w-full bg-zinc-900">
            <div className="w-full max-w-7xl pt-12">
                <Swiper navigation={true} modules={[Navigation]} className="relative">
                    <SwiperSlide>
                        <div className="w-full py-12 bg-zinc-900">
                            <div className="w-full p-7">
                                <div className="rounded-lg bg-zinc-800 w-full flex flex-col lg:flex-row relative">
                                    <div className="lg:absolute w-full lg:w-[450px] overflow-hidden bottom-15 right-25 rounded-lg ">
                                        <img src={fm_1} classname="object-contain rounded-lg"/>
                                    </div>
                                    <div className="w-full lg:w-[50%] text-start p-12 py-[100px]">
                                        <div className="flex flex-row gap-3 text-xs items-center">
                                            <h4>Industrial</h4>
                                            <div className="flex flex-row gap-2 text-xs items-center">
                                                <img src={per} className="scale-70" />
                                                <p><span className="font-bold text-white">Client:</span>Rosalina D.</p>
                                            </div>
                                        </div>
                                        <h2 className="text-2xl font-bold">Leverage agile motive frameworks</h2>
                                        <p className="text-xs">orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        <br/>
                                        <a href="#" className="py-3 px-7 bg-amber-500 hover:bg-black transition-all duration-500 ease-in-out text-white font-bold rounded-lg">Case Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full py-12 bg-zinc-900">
                            <div className="w-full p-7">
                                <div className="rounded-lg bg-zinc-800 w-full flex flex-col lg:flex-row relative">
                                    <div className="lg:absolute w-full lg:w-[450px] overflow-hidden bottom-15 right-25 rounded-lg ">
                                        <img src={fm_1} classname="object-contain rounded-lg"/>
                                    </div>
                                    <div className="w-full lg:w-[50%] text-start p-12 py-[100px]">
                                        <div className="flex flex-row gap-3 text-xs items-center">
                                            <h4>Industrial</h4>
                                            <div className="flex flex-row gap-2 text-xs items-center">
                                                <img src={per} className="scale-70" />
                                                <p><span className="font-bold text-white">Client:</span>Rosalina D.</p>
                                            </div>
                                        </div>
                                        <h2 className="text-2xl font-bold">Leverage agile motive frameworks</h2>
                                        <p className="text-xs">orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        <br/>
                                        <a href="#" className="py-3 px-7 bg-amber-500 hover:bg-black transition-all duration-500 ease-in-out text-white font-bold rounded-lg">Case Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full py-12 bg-zinc-900">
                            <div className="w-full p-7">
                                <div className="rounded-lg bg-zinc-800 w-full flex flex-col lg:flex-row relative">
                                    <div className="lg:absolute w-full lg:w-[450px] overflow-hidden bottom-15 right-25 rounded-lg ">
                                        <img src={fm_1} classname="object-contain rounded-lg"/>
                                    </div>
                                    <div className="w-full lg:w-[50%] text-start p-12 py-[100px]">
                                        <div className="flex flex-row gap-3 text-xs items-center">
                                            <h4>Industrial</h4>
                                            <div className="flex flex-row gap-2 text-xs items-center">
                                                <img src={per} className="scale-70" />
                                                <p><span className="font-bold text-white">Client:</span>Rosalina D.</p>
                                            </div>
                                        </div>
                                        <h2 className="text-2xl font-bold">Leverage agile motive frameworks</h2>
                                        <p className="text-xs">orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        <br/>
                                        <a href="#" className="py-3 px-7 bg-amber-500 hover:bg-black transition-all duration-500 ease-in-out text-white font-bold rounded-lg">Case Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full py-12 bg-zinc-900">
                            <div className="w-full p-7">
                                <div className="rounded-lg bg-zinc-800 w-full flex flex-col lg:flex-row relative">
                                    <div className="lg:absolute w-full lg:w-[450px] overflow-hidden bottom-15 right-25 rounded-lg ">
                                        <img src={fm_1} classname="object-contain rounded-lg"/>
                                    </div>
                                    <div className="w-full lg:w-[50%] text-start p-12 py-[100px]">
                                        <div className="flex flex-row gap-3 text-xs items-center">
                                            <h4>Industrial</h4>
                                            <div className="flex flex-row gap-2 text-xs items-center">
                                                <img src={per} className="scale-70" />
                                                <p><span className="font-bold text-white">Client:</span>Rosalina D.</p>
                                            </div>
                                        </div>
                                        <h2 className="text-2xl font-bold">Leverage agile motive frameworks</h2>
                                        <p className="text-xs">orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        <br/>
                                        <a href="#" className="py-3 px-7 bg-amber-500 hover:bg-black transition-all duration-500 ease-in-out text-white font-bold rounded-lg">Case Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}