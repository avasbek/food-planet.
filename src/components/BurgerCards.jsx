import React from "react";
import minus from "./pages/icons/minus.svg"
import plus from "./pages/icons/plus.svg"

const BurgerCards = (props) => {
    return (
        <div className="burger-cards">
            <div className="first-burger-card">
                <img className="tofu-burger" src={props.img} alt=""/>
                <div className="desc">
                    <h4>Чизбургер</h4>
                    <p className="burger-card-subtext">Булка, котлета,сыр, соленый <br/> огурец, лук, помидор,салат <br/>
                        айсберг,соус чесночный, соус <br/>гриль,кетчуп, майонез</p>
                    <p className="price">200 сом</p>
                </div>
                <div className="quantity">
                    <img src={minus} alt=""/>
                    <p>1</p>
                    <img src={plus} alt=""/>
                </div>
                <button className="burger-card-btn">В корзину</button>
            </div>
        </div>
    )
}

export default BurgerCards;