import React from "react";
import recent from "../images/Img.png"

export default function Recent(){
    return (
        <main classNameName=" border border-t-sky-500 mb-12 bg-sky-100">
            <div className="main_title">
                <h1 className="text-4xl p-8 flex justify-start pl-12 items-center justify-center font-bold">RECENT WORK</h1>
            </div>

            <div className="rounded-xl shadow-md overflow-hidden">
                <div className="md:flex">
                    <div className="md:shrink-0 lg:w-1/2 pl-12">
                        <img className="pr-8 h-80 w-full object-cover md:h-full md:w-72 lg:w-full" src={recent} alt="Man looking at item at a store" />
                    </div>

    <div className="p-8 lg:w-1/2">
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
      <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
      <p className="mt-2 text-slate-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
      <p>
            A daily selection of privately personalized reads; no accounts or
            sign-ups required. has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a standard dummy text.
          </p>
          <ul className="flex flex-row gap-8 justify-center p-8">
            <li className="bg-orange-400 h-12 w-16 pt-2  text-xl rounded-lg"><a href="#"></a>css</li>
            <li className="bg-orange-400 h-12 w-16 pt-2  text-xl rounded-lg"><a href="#"></a>html</li>
            <li className="bg-orange-400 h-12 w-28 pt-2  text-xl rounded-lg"><a href="#"></a>bootstrap</li>
            <li className="bg-orange-400 h-12 w-16 pt-2  text-xl rounded-lg"><a href="#"></a>Ruby</li>
          </ul>
          <a href="https://github.com/Mucyosoda" target="_blank" rel="noreferrer" className="bg-sky-500 text-white border-4 border-sky-500 p-4 text-xl rounded-lg hover:text-sky-500 hover:bg-white">See Project</a>
    </div>
  </div>
</div>
        </main>
    )
}