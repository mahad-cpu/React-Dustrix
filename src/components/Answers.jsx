import { useState } from "react";

function AccordionItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-white shadow-sm hover:shadow-md rounded-lg transition-all duration-200 overflow-hidden">
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

export default function Answers() {
  return (
    <section className="w-full flex flex-col items-center bg-white py-12">
      <div className="w-full max-w-7xl px-5 my-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4 items-start">
          
          <div className="flex flex-col gap-4">
            <AccordionItem
              title="Can I Use This Product Before Purchase?"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus dolor at libero ultricies ullamcorper vel ut dui. Maecenas sollicitudin risus non faucibus blandit. Nulla facilisi."
            />
            <AccordionItem
              title="What Is Your Marketing Campaign Execution Process?"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus dolor at libero ultricies ullamcorper vel ut dui. Maecenas sollicitudin risus non faucibus blandit. Nulla facilisi."
            />
            <AccordionItem
              title="What Kind Of Reports Will I Receive?"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus dolor at libero ultricies ullamcorper vel ut dui. Maecenas sollicitudin risus non faucibus blandit. Nulla facilisi."
            />
          </div>

          <div className="flex flex-col gap-4">
            <AccordionItem
              title="What Does Your New Client Onboarding Process Consist?"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus dolor at libero ultricies ullamcorper vel ut dui. Maecenas sollicitudin risus non faucibus blandit. Nulla facilisi."
            />
            <AccordionItem
              title="What Kind Of Reports Will I Receive? (Duplicate)"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus dolor at libero ultricies ullamcorper vel ut dui. Maecenas sollicitudin risus non faucibus blandit. Nulla facilisi."
            />
            <AccordionItem
              title="How To Buy Construction Products?"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus dolor at libero ultricies ullamcorper vel ut dui. Maecenas sollicitudin risus non faucibus blandit. Nulla facilisi."
            />
          </div>

        </div>
      </div>
    </section>
  );
}