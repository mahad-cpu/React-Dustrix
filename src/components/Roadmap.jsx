import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../assets/Styles/styles.css';
import { Pagination, Navigation } from 'swiper/modules';
import badge from '../assets/Images/badge.png'
import trophy from '../assets/Images/trophy.png'
import tool from '../assets/Images/tool.svg'
import word from '../assets/Images/word.png'
import build from '../assets/Images/build.png'
import dollar from '../assets/Images/dollar.png'

export default function Roadmap(){
    return(
        <section className="w-full bg-zinc-100 p-12 border-t-5 border-zinc-200">
            <div className="relative">
                <h1 className="font-extrabold text-[160px] mb-0 text-white">Roadmap</h1>
                <h2 className="absolute top-7 left-1/2 -translate-x-1/2 font-bold text-5xl text-black">Company Roadmap</h2>
                <h4 className="absolute top-0 left-1/2 -translate-x-1/2 text-black">Goal</h4>
            </div>
            <div className="w-full my-12 pt-12">
                <Swiper 
                    modules={[Pagination, Navigation]} 
                    slidesPerView={5} 
                    spaceBetween={0} 
                    loop={true} 
                    className="mySwiper bg-zinc-100"
                    
                >
                    <SwiperSlide className="bg-zinc-100">
                        <div className="flex flex-col items-center w-fit p-5"> 
                            <h1 className="font-bold text-5xl [-webkit-text-stroke:2px_orange]">2000</h1>
                            <div className="w-fit"><img src={badge} className="scale-150" /></div><br/>
                            <h3 className="text-black font-bold">Starting Our Journey</h3>
                            <p className="text-xs py-5 text-zinc-500">lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col items-center w-fit p-5"> 
                            <h1 className="font-bold text-5xl [-webkit-text-stroke:2px_orange]">2005</h1>
                            <div className="w-fit"><img src={trophy} className="scale-150" /></div><br/>
                            <h3 className="text-black font-bold">Wen Win Best IT Startup Award</h3>
                            <p className="text-xs py-5 text-zinc-500">lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col items-center w-fit p-5"> 
                            <h1 className="font-bold text-5xl [-webkit-text-stroke:2px_orange]">2007</h1>
                            <div className="w-fit"><img src={tool} className="scale-150" /></div><br/>
                            <h3 className="text-black font-bold">Starting Plugin Business Journey</h3>
                            <p className="text-xs py-5 text-zinc-500">lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col items-center w-fit p-5"> 
                            <h1 className="font-bold text-5xl [-webkit-text-stroke:2px_orange]">2008</h1>
                            <div className="w-fit"><img src={word} className="scale-150" /></div><br/>
                            <h3 className="text-black font-bold">Started Wordpress Solution Service</h3>
                            <p className="text-xs py-5 text-zinc-500">lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col items-center w-fit p-5"> 
                            <h1 className="font-bold text-5xl [-webkit-text-stroke:2px_orange]">2010</h1>
                            <div className="w-fit"><img src={trophy} className="scale-150" /></div><br/>
                            <h3 className="text-black font-bold">Best IT Company of 2010</h3>
                            <p className="text-xs py-5 text-zinc-500">lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col items-center w-fit p-5"> 
                            <h1 className="font-bold text-5xl [-webkit-text-stroke:2px_orange]">2015</h1>
                            <div className="w-fit"><img src={build} className="scale-150" /></div><br/>
                            <h3 className="text-black font-bold">Starting Our Construction Journey</h3>
                            <p className="text-xs py-5 text-zinc-500">lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col items-center w-fit p-5"> 
                            <h1 className="font-bold text-5xl [-webkit-text-stroke:2px_orange]">2020</h1>
                            <div className="w-fit"><img src={dollar} className="scale-150" /></div><br/>
                            <h3 className="text-black font-bold">Our Industry Business Started</h3>
                            <p className="text-xs py-5 text-zinc-500">lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
                
            </div>
        </section>
    )
}