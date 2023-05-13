import delivery from "./pages/icons/dellivery.svg"
import products from "./pages/icons/products.svg"
import menu from "./pages/icons/unimenu.svg"
import geo from "./pages/icons/geo.svg"

export const PossibilitiesCard = [
    {
        img:[delivery],
        title:'Мгновенная доставка',
        subtitle:'Доставим заказанную вами\n' +
            ' еду за 30 минут + напиток в подарок'
    },
    {
        img: [products],
        title: "Свежие продукты",
        subtitle: "Вся продукция хранится в хороших условиях тем самым продливая срок хранения",
    },
    {
        img:[menu],
        title: "Уникальное меню",
        subtitle: "Ежедневно мы обновляем наше \n" +
            "меню и том числе коктейльное",
    },
    {
        img: [geo],
        title: "Доставка",
        subtitle: "Мы быстро доставляем вашу еду по указанному адресу"
    }
]