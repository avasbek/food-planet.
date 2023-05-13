import React from "react";
import arrow from "./pages/icons/arrow.svg";

const SecondMenu = () => {
    return (
        <>
            <div className="second-menu">

                <h4 className="news">Меню</h4>

                <div className="menu">
                    <ul>
                        <li className="food-nav">
                            <a>Пицца</a>
                            <a>Бургер</a>
                            <a>Суши</a>
                            <a>Роллы</a>
                            <a>Салаты</a>
                            <a>Десерты</a>
                            <a>Напитки</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="sorting">
                <p>
                    Сортировать по:
                </p>
                <select className="sorting-btn">
                    <option href="#">По умолчанию<img src={arrow} className="arrow"/></option>
                </select>
            </div>


        </>
    )
}

export default SecondMenu;