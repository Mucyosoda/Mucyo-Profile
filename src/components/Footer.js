import React from "react";
import '../style/footer.css';

export default function Footer(){
    return (
        <div className="bg-neutral-900" id="contact">
            <div className="flex items-center justify-center footer-polygon h-32 bg-white">
                <img src={ require('../icons/linkedin.png') }  alt="github" className="h-8 mr-2 hover:h-10" />
                <img src={ require('../icons/angelist.png') }  alt="github" className="h-8 mr-2 hover:h-10" />
                <img src={ require('../icons/twitter1.png') }  alt="github" className="h-8 mr-2 hover:h-10" />
                <img src={ require('../icons/github.png') }  alt="github" className="h-8 mr-2 hover:h-10" />
            </div>
            <div className="bg-neutral-900 text-white lg:flex ">
                <div className="lg:w-1/2 lg:flex flex-col flex justify-center items-center lg:flex-row">
                    <div className="w-1/3 p-8">
                        <h1 className="mb-4 text-2xl font-bold"> LANGUAGE</h1>
                        <ul>
                            <li className="mb-2">JAVASCRIPT</li>
                            <li className="mb-2">POSTGRES</li>
                            <li className="mb-2">MYSQL</li>
                            <li className="mb-2">RUBY</li>
                            <li className="mb-2">HTML</li>
                            <li className="mb-2">CSS</li>
                        </ul>
                    </div>
                    <div className="p-8 w-1/3">
                    <h1 className="mb-4 text-2xl font-bold">FRAMEWORK</h1>
                    <ul>
                            <li className="mb-2">RUBY ON RAILS</li>
                            <li className="mb-2">BOOTSTRAP</li>
                            <li className="mb-2">TAILWIND</li>
                            <li className="mb-2">REDUX</li>
                            <li className="mb-2">REACT</li>
                            <li className="mb-2">home</li>
                        </ul>
                    </div>
                    <div className="p-8 w-1/3">
                        <h1 className="mb-4 text-2xl font-bold">SKILLS</h1>
                    <ul>
                            <li className="mb-2">GITHUB</li>
                            <li className="mb-2">GITLAB</li>
                            <li className="mb-2">TERMINAL</li>
                            <li className="mb-2">LEARN QUICK</li>
                            <li className="mb-2">COMMINUCATION</li>
                            <li className="mb-2">WORK REMOTELY</li>
                        </ul>
                    </div>
                </div>
                <div className="lg:w-1/2"><h1>FEEDBACK</h1>
                <div className="shadow-lg shadow-orange-500/50 m-8 flex pl-8">
                    <form action="https://formspree.io/f/mzbykjor" method="POST">
                        <h2 className="text-white mb-3">FIRSTNAME : <span>
                            <input
                                className="h-8 rounded-lg pl-4 text-black"
                                type="text"
                                name="first_name"
                                placeholder="First name"
                                maxlength="30"
                                required
                            />
                            </span>
                        </h2>
                        <h2 className="text-white mb-3">LASTNAME : <span>
                            <input
                            className="h-8 rounded-lg pl-4 text-black"
                            type="text"
                            name="last_name"
                            placeholder="last name"
                            maxlength="30"
                            required
                            />
                            </span>
                        </h2>

                        <h2 className="text-white mb-3 flex">EMAIL : <span>
                            <input
                            className="h-8 rounded-lg pl-4 text-black ml-12"
                            type="email"
                            name="_replyto"
                            placeholder="Email" />
                            </span>
                        </h2>
                        <textarea
                            className="rounded-lg pl-4 w-72 text-black mb-8"
                            name="message"
                            maxlength="500"
                            required>
                                Hello Mucyo! Glad to see you
                        </textarea>
                        <br />

                        <button type="submit" className="bg-orange-600 h-16 p-4 mb-4 hover:bg-orange-400">Get in touch</button>
                    </form>
                </div>
            </div>
            </div>

            <div className="text-orange-600 pb-8">
                        <h1 className="mb-4 text-2xl font-bold">CONTACT US</h1>
                            <span className="mb-2 text-white">EMAIL : mucyosofa@gmail.com</span><br />
                            <span className="text-white">Kigali-Rwanda : +250788289571</span>


                    </div>
        </div>
    )
}