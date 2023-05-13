import React from "react";
import minus from "./pages/icons/minus.svg"
import plus from "./pages/icons/plus.svg"

const PizzaCards = (props) => {
    return (
        <>
            <div className="pizza-cards">
                <div className="first-pizza-card">
                    <img className="tofu-burger" src={props.img} alt=""/>
                    <div className="pizza-desc">
                        <h4>Мексиканская</h4>
                        <p className="pizza-card-subtext">Булка, котлета,сыр, соленый <br/>огурец, лук, помидор,
                            салат <br/>айсберг,
                            соус чесночный, соус <br/> гриль,
                            кетчуп, майонез</p>
                        <p className="pizza-price">200 сом</p>
                    </div>
                    <div className="pizza-quantity">
                        <img src={minus} alt=""/>
                        <p>1</p>
                        <img src={plus} alt=""/>
                    </div>
                    <button className="pizza-card-btn">В корзину</button>
                </div>
            </div>
        </>

    )
}

export default PizzaCards;