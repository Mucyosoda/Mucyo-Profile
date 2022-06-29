import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import data from '../data';
import "../style/slide-card.css"

export default function SlideCard(){
    return(
        <div className="pl-8 pr-8" id="banner">
            <h1 className="text-4xl p-8 flex justify-start pl-12 items-center justify-center font-bold">LATEST BLOG</h1>
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={1}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {data.map(user => (
                <SwiperSlide>
                    <div className="myslide">
                        <div className="slide-container swiper">
                            <div className="slide-content">
                                <div className="card-wrapper swiper-wrapper">
                                    <div className="card swiper-slide">
                                        <div className="image-content">
                                            <span className="overlay bg-orange-600 flex-col">
                                                </span>
                                            <div className="card-image">
                                                <img className="card-img" src={`../images/${user.coverImg}`}  alt="project" />
                                            </div>
                                        </div>
                                        <div className="flex flex-start ml-4">
                                        <img src={require("../icons/star.png")} className="h-6" alt="project" />
                                            <h6>Rating:</h6>
                                            {user.stats.rating}
                                        </div>
                                        <div className="card-content">
                                            <h2 className="name">{user.title}</h2>
                                            <p className="description">
                                                {user.description}
                                            </p>
                                            <a href={user.web} rel="noreferrer" target="_target" className="bg-orange-600 h-12 flex items-center justify-center p-4 rounded-lg text-white font-bold hover:bg-orange-400">View more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         </div>
                    </div>
                </SwiperSlide>
            ))}
            ...
        </Swiper>

    </div>
  );
}
