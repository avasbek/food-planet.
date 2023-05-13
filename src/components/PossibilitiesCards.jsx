import React from "react";

const PossibilitiesCards = ({img, title, subtitle}) => {
    return(
        <section className="why-choose-us">
            <div className="flex">
                <div className="flex-column-center">
                    <img className="img-card" src={img} alt="Доставка"/>
                    <h4>{title}</h4>
                    <p>{subtitle}</p>
                </div>
            </div>
        </section>
    )
}

export default PossibilitiesCards;