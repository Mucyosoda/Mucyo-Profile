import React from "react";
import "../style/cards.css";
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
            <div className="gap-4 p-4 flex-col flex items-center justify-center lg:flex-row lg:gap-8 lg:pl-16 lg:pr-16 mb-8">
                <div className="banner-cards w-5/6 flex flex-col justify-center items-center shadow-md lg:shadow-xl">
                    <div className="m-4 bg-orange-500 rounded-full w-32 h-32 flex items-center justify-center">
                    <img src={ require('../icons/learning.png') }  alt="github" className="h-12" />

                    </div>
                    <div className="card-text w-full">
                        <h1 className="text-3xl font-bold">LEARNINGS</h1>
                        <p className="p-8">
                        I can help you build an application, feature, or website.
                        Look through
                        </p>
                    </div>
                </div>
                <div className="banner-cards w-5/6 flex flex-col justify-center items-center shadow-md lg:shadow-xl">
                    <div className="m-4 bg-orange-500 rounded-full w-32 h-32 flex items-center justify-center">
                    <img src={ require('../icons/crafting.png') }  alt="github" className="h-12" />

                    </div>
                    <div className="card-text w-full">
                        <h1 className="text-3xl font-bold">CRAFTING</h1>
                        <p className="p-8">
                        I can help you build an application, feature, or website.
                        Look through
                        </p>
                    </div>
                </div>

                <div className="banner-cards w-5/6 flex flex-col justify-center items-center shadow-md lg:shadow-xl">
                    <div className="m-4 bg-orange-500 rounded-full w-32 h-32 flex items-center justify-center">
                    <img src={ require('../icons/quality.png') }  alt="github" className="h-12" />

                    </div>
                    <div className="card-text w-full">
                        <h1 className="text-3xl font-bold">QUALITY</h1>
                        <p className="p-8">
                        I can help you build an application, feature, or website.
                        Look through
                        </p>
                    </div>
                </div>

                <div className="banner-cards w-5/6 flex flex-col justify-center items-center shadow-md lg:shadow-xl">
                    <div className="m-4 bg-orange-500 rounded-full w-32 h-32 flex items-center justify-center">
                    <img src={ require('../icons/improvement.png') }  alt="github" className="h-12" />

                    </div>
                    <div className="card-text w-full">
                        <h1 className="text-3xl font-bold">IMPROVEMENT</h1>
                        <p className="p-8">
                        I can help you build an application, feature, or website.
                        Look through
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-orange-500 m-16 mr-16">
                <div className="wraper-banner flex">
                    <div className="about-us-1 bg-orange-500 ">
                    <h1 className="block mt-12 mb-4 text-lg leading-tight font-medium hover:underline text-3xl font-bold">ABOUT ME</h1>
                    <div className="uppercase tracking-wide text-sm font-semibold">Hey there, {timeOfDay}</div>
                    <h1 className="block text-lg leading-tight text-xl font-bold">My name is Claude Mucyo</h1>
                        <p className="mt-2">I am a Full-stack Software Developer <br />
                            I can help you build an application, feature, or website.
                            <br />Look through some of my work experience that I have built-in different technology
                            <br />like, React, Redux, Ruby, Rails, JavaScript, tailwind CSS and Postgres.
                            I'm open to a new opportunity.
                        </p>
                    </div>

                    <div className="about-us-12 pt-2">
                        <h1>
                         <img className="border-4 border-orange-400 rounded-full object-cover md:h-full md:w-72 lg:w-96 " src={bannerPic} alt="looking for a job" />

                        </h1>
                    </div>


                </div>
            </div>
        </div>

    )
}

