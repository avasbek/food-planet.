import React from "react";
import MainBlock from "./Main-block";
import FirstMenu from "./First-Menu";
import BurgerCards from "./BurgerCards";
import tofu1 from "./pages/img/Tofu-Burge1.png"
import tofu2 from "./pages/img/Tofu-Burger2.png"
import tofu3 from "./pages/img/Tofu-Burger3.png"
import tofu4 from "./pages/img/Tofu-Burger4.png"
import SecondMenu from "./Second-Menu";
import PizzaCards from "./PizzaCards";
import pizza1 from "./pages/img/pizza1.png"
import pizza2 from "./pages/img/pizza2.png"
import pizza3 from "./pages/img/pizza3.png"
import pizza4 from "./pages/img/pizza4.png"
import pizza5 from "./pages/img/pizza5.png"
import pizza6 from "./pages/img/pizza6.png"
import PossibilitiesCards from "./PossibilitiesCards";
import {PossibilitiesCard} from "./PossibilitiesCasrd";
import ReviewsCards from "./ReviewsCards";
import {ReviewsCard} from "./ReviewsCard";

const card = [
    {
        img: [tofu1]
    },
    {
        img: [tofu2]
    },
    {
        img: [tofu3]
    },
    {
        img: [tofu4]
    }
]

const pizzaCard = [
    {
        img: [pizza1]
    },
    {
        img: [pizza2]
    },
    {
        img: [pizza3]
    },
    {
        img: [pizza4]
    },
    {
        img: [pizza2]
    },
    {
        img: [pizza5]
    },
    {
        img: [pizza3]
    },
    {
        img: [pizza6]
    }
]


const   Content = () => {
    return (
        <>
            <MainBlock/>
            <FirstMenu/>
            <div className="flex">
                <BurgerCards
                    img={card[0].img}
                />
                <BurgerCards
                    img={card[1].img}
                />
                <BurgerCards
                    img={card[2].img}
                />
                <BurgerCards
                    img={card[3].img}
                />
            </div>
            <SecondMenu/>
            <div className="pizza-flex">
                <PizzaCards
                    img={pizzaCard[0].img}
                />
                <PizzaCards
                    img={pizzaCard[1].img}
                />
                <PizzaCards
                    img={pizzaCard[2].img}
                />
                <PizzaCards
                    img={pizzaCard[3].img}
                />
            </div>
            <div className="pizza-flex">
                <PizzaCards
                    img={pizzaCard[4].img}
                />
                <PizzaCards
                    img={pizzaCard[5].img}
                />
                <PizzaCards
                    img={pizzaCard[6].img}
                />
                <PizzaCards
                    img={pizzaCard[7].img}
                />
            </div>
            <div className="btn-flex">
                <button className="show-more">Показать еще</button>
            </div>
            <div className="choose-us">
                <p>Почему выбирают нас:</p>
            </div>
            <div className="flex">
            <PossibilitiesCards
                img={PossibilitiesCard[0].img}
                title={PossibilitiesCard[0].title}
                subtitle={PossibilitiesCard[0].subtitle}
            />
            <PossibilitiesCards
                img={PossibilitiesCard[1].img}
                title={PossibilitiesCard[1].title}
                subtitle={PossibilitiesCard[1].subtitle}
            />
            <PossibilitiesCards
                img={PossibilitiesCard[2].img}
                title={PossibilitiesCard[2].title}
                subtitle={PossibilitiesCard[2].subtitle}
            />
            <PossibilitiesCards
                img={PossibilitiesCard[3].img}
                title={PossibilitiesCard[3].title}
                subtitle={PossibilitiesCard[3].subtitle}
            />
            </div>
            <div className="reviews">
                <p>Отзывы</p>
            </div>
            <div className="flex">
            <ReviewsCards
            border={ReviewsCard[0].border}
            img={ReviewsCard[0].img}
            name={ReviewsCard[0].name}
            subtext={ReviewsCard[0].subtext}
            date={ReviewsCard[0].date}
            />
            <ReviewsCards
                border={ReviewsCard[0].border}
                img={ReviewsCard[0].img}
                name={ReviewsCard[0].name}
                subtext={ReviewsCard[1].subtext}
                date={ReviewsCard[0].date}
            />
            <ReviewsCards
                border={ReviewsCard[0].border}
                img={ReviewsCard[0].img}
                name={ReviewsCard[0].name}
                subtext={ReviewsCard[2].subtext}
                date={ReviewsCard[0].date}
            />
            <ReviewsCards
                border={ReviewsCard[0].border}
                img={ReviewsCard[0].img}
                name={ReviewsCard[0].name}
                subtext={ReviewsCard[3].subtext}
                date={ReviewsCard[0].date}
            />
            </div>
        </>
    )
}

export default Content;