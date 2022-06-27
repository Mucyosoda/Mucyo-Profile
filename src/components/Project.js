import React from "react"

export default function Project(props) {
    let badgeText;
    if(props.openSpots === 0){
        badgeText = "UNDER-CONSTRUCTION";
    } else if (props.location === "Online"){
        badgeText = "COMPLETED";
    }
    return (

        <div className="w-64 h-auto shadow-2xl relative">
            <div className="card">
                { badgeText && <div className="absolute">{badgeText}</div>}
            </div>
            <img src={`../images/${props.coverImg}`} className=" h-auto w-full object-cover md:h-auto md:w-auto lg:w-auto lg:h-auto" alt="project" />
            <div className="flex">
                <img src={require("../icons/star.png")} className="h-6" alt="project" />
                <span>{props.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}











