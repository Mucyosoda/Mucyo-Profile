import React from "react";
import bannerPic from "../images/bannerpic.jpg";

export default function banner(){
    const date = new Date();
    const hours = date.getHours()
    let timeOfDay;
    console.log(date);
    if(hours < 12) {
        timeOfDay = "Good morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "Good afternoon"
    } else {
        timeOfDay = "Good evening"
    }
    return(

        <div className="mt-4 lg:w-full overflow-hidden">
            <div className="md:flex">
                <div className="p-2 lg:ml-32 lg:pt-8">
                    <div className="uppercase tracking-wide text-sm text-sky-500 font-semibold text-2xl">Hey there, {timeOfDay}</div>
                        <h1 className="block mt-1 text-lg leading-tight font-medium text-black hover:underline text-4xl">I'm Mucyo Claude</h1>
                        <p className="mt-2 text-slate-500 lg:text-2xl">I am a Full-stack Software Developer <br />
                            I can help you build an application, feature, or website.
                            <br />Look through some of my work experience that I have built-in different technology
                            <br />like, React, Redux, Ruby, Rails, JavaScript, tailwind CSS and Postgres.
                            I'm open to a new opportunity.
                        </p>
                        <div className="mt-4 flex justify-center">
                            <ul className="flex flex-row gap-8">
                                <li>
                                    <a href="https://github.com/Mucyosoda" target="_blank" rel="noopener noreferrer">
                                    <img src={ require('../icons/github.png') }  alt="github" className="h-8 hover:h-12" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/ClaudeMucyo1" target="_blank" rel="noopener noreferrer">
                                        <img src={ require('../icons/twitter.png') }  alt="twitter" className="h-8 hover:h-12" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/mucyoclaude/" target="_blank" rel="noopener noreferrer">
                                        <img src={ require('../icons/linkedin.png') }  alt="inkedin" className="h-8 hover:h-12" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://angel.co/mucyo-soda" target="_blank" rel="noopener noreferrer">
                                        <img src={ require('../icons/angelist1.png') } alt="angelist" className="h-8 hover:h-12" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="md:shrink-0 lg:h-3xl bg-blue">
                    <img className="mb-2 object-cover md:h-full md:w-72 lg:w-96" src={bannerPic} alt="Man looking for a job" />
                </div>
                </div>

            </div>

    )
}

