import React from "react";
import logo2 from "./pages/img/logo2.png";
import contacts from "./pages/icons/contact-number.svg"

const Footer = () => {
    return (
        <>
            <footer>
                <div className="logo">{/*Логотип сайта*/}
                    <img src={logo2} alt="Логотип сайта" className="logo-img"/>
                </div>
                <div className="menu">{/*панель навигации*/}
                    <ul>
                        <li><a href="#" className="home">Главная</a></li>
                        <li><a href="#">Меню</a></li>
                        <li><a href="#">Доставка</a></li>
                        <li><a href="#">Контакты</a></li>
                        <li><img src={contacts} alt="Контактный номер" className="contact-number"/><a
                            href="#">+996500405988</a>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )
}
export default Footer;