import React from "react";
import pen from "./pages/icons/pen.png"

const ReviewsCards = ({border, img , name,subtext,date}) => {
    return(
        <div className="reviews-cards">
            <div className="bg-reviews-cards">
                <img className="pen" src={border} alt=""/>
                <img className="avatar" src={img} alt=""/>
                <p className="name"> {name} <img src={pen} alt=""/></p>
                <p className="subtext">{subtext}</p>
                <p className="date">{date}</p>
            </div>
        </div>
    )
}

export default ReviewsCards;