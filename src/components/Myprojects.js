import React from "react";
import Project from "./Project";
import data from "../data";

const projects = data.map(item => {
    return (
        <Project
                img={item.coverImg}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                location={item.location}
                title={item.title}
                price={item.price}
            />
    )
})

export default projects;