import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from 'flowbite-react'
import { useState } from 'react';
import faq from '../assets/Images/faq.png'
import scale from '../assets/Images/scale.png'

function AccordionItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-white hover:shadow-md rounded-lg transition-all duration-200 overflow-hidden shadow-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex w-full items-center justify-between p-5 text-start font-bold text-zinc-900 transition-colors duration-200 hover:text-yellow-300 ${
          isOpen ? "pb-3" : ""
        }`}
      >
        <span>{title}</span>
        <svg
          className={`h-4 w-4 shrink-0 text-yellow-300 transition-transform duration-200 rotate-270 ${
            isOpen ? "rotate-360" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      <div
        className={`transition-all duration-500 ease-in ${
          isOpen ? "max-h-96 opacity-100 pt-0" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <p className="text-zinc-500 text-sm text-start leading-relaxed p-5">
          {content}
        </p>
      </div>
    </div>
  );
}

export default function Faq(){
    return(
        <section className="w-full py-12 px-3 bg-white flex flex-col items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full max-w-7xl">
                <div className="p-5">
                    <div className="relative text-start">
                        <p className="text-zinc-500">Get Answers</p>
                        <h1 className="text-black font-bold leading-tight">Get every single answers from here.</h1>
                        <img className="w-full" src={faq}/>
                        {/* <img className={`absolute top-1/2 left-1/2 `} src={scale}/> */}
                    </div>
                </div>
                <div className="p-5 flex flex-col gap-7">
                    <AccordionItem title="How Do We Manage Quality Assurance?" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus dolor at libero ultricies ullamcorper vel ut dui. Maecenas sollicitudin risus non faucibus blandit. Nulla facilisi."/>
                    <AccordionItem title="With Diverse Capabilities And Extensive Manufacturing?" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus dolor at libero ultricies ullamcorper vel ut dui. Maecenas sollicitudin risus non faucibus blandit. Nulla facilisi."/>
                    <AccordionItem title="You Can Rely On Amwerk As A Critical Part?" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus dolor at libero ultricies ullamcorper vel ut dui. Maecenas sollicitudin risus non faucibus blandit. Nulla facilisi."/>
                    <AccordionItem title="How Do We Manage Quality Assurance?" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus dolor at libero ultricies ullamcorper vel ut dui. Maecenas sollicitudin risus non faucibus blandit. Nulla facilisi."/>
                    <AccordionItem title="Appropriately Communicate One-To-One Technology?" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus dolor at libero ultricies ullamcorper vel ut dui. Maecenas sollicitudin risus non faucibus blandit. Nulla facilisi."/>
                </div>
            </div>
        </section>
    )
}