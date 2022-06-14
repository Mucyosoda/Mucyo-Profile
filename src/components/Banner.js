import React from "react";
import bannerPic from "../images/bannerpic.jpg";

export default function banner(){
    return(
        <div className="flex flex-row justify-end h-96">
                <div className="flex p-16 gap-2">
                <ul className="flex flex-col justify-center gap-7">
                 <li className="hover:h-6">
                    <a href="https://github.com/Mucyosoda" target="_blank" rel="noopener noreferrer">
                        <img src={ require('../icons/github.png') }  alt="github" className="h-8" />
                    </a>
                </li>
                <li className="hover:h-6">
                    <a href="https://twitter.com/ClaudeMucyo1" target="_blank" rel="noopener noreferrer">
                        <img src={ require('../icons/twitter.png') }  alt="twitter" className="h-8" />
                    </a>
                </li>
                <li className="hover:h-6">
                    <a href="https://www.linkedin.com/in/mucyoclaude/" target="_blank" rel="noopener noreferrer">
                        <img src={ require('../icons/inkedin.png') }  alt="inkedin" className="h-8" />
                     </a>
                </li>
                <li className="hover:h-6">
                    <a href="https://angel.co/mucyo-soda" target="_blank" rel="noopener noreferrer">
                        <img src={ require('../icons/angelist.png') } alt="angelist" className="h-8" />
                    </a>
                 </li>
                </ul>
            </div>

            <div className="pt-14">
                <h1 className="text-6xl">Hey there. <br /> I'm Mucyo Claude</h1>
                <h2 className="text-4xl">I am a Full-stack Software Developer</h2>

                <p className="text-xl">
                    I can help you build a product, feature or website <br />Look
                    through some of my work and experience!<br />
                    if you like what you see and have a project <br />
                    you need coded, don't hestiate to contacta me.
                </p>
            </div>
            <div className="flex">
                <img src={bannerPic} alt="banner-pic" className="h-72 mt-24" />
            </div>
        </div>
    )
}