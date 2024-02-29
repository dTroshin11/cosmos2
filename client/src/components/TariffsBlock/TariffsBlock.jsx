import React, { useState } from 'react';
import Styles from "./TariffsBlock.module.scss";
import TariffsCard from "../../assets/img/tariffsCard.svg"
import TariffsCardBlue from "../../assets/img/tariffsCardBlue.svg"
import FormPopup from '../ui/FormPopup/FormPopup';


const item = [
    {
        title: "Бесплатно",
        text: <>Дистрибутив ОС
            для&nbsp;самостоятельной установки на&nbsp;собственное устройство. Ознакомительный вариант без поддержки
            и&nbsp;обновлений</>,
        price: "0 ₽/мес"
    },
    {
        title: "Лайт",
        text: <>Устройство с&nbsp;установленной ОС, поддержкой и&nbsp;обновлениями. Недоступны Windows-приложения и&nbsp;ряд B2B-функций</>,
        price: "10 500 ₽/мес*"
    },
    {
        title: "Стандарт",
        text: <>Устройство с&nbsp;установленной ОС, поддержкой, обновлениями и&nbsp;работой Windows-приложений. Недоступны B2B-функции</>,
        price: "21 000 ₽/мес*"
    },
    {
        title: "Премиум",
        text: <>Всё включено. Устройство с&nbsp;установленной ОС, поддержка и обновления, запуск Windows-приложений, B2B-функции</>,
        price: "31 500 ₽/мес*"
    }
]

const backgroundCard = [
    {
        backgroundImage: `url(${TariffsCard})`
    },
    {
        backgroundImage: `url(${TariffsCard})`
    },
    {
        backgroundImage: `url(${TariffsCard})`
    },
    {
        backgroundImage: `url(${TariffsCardBlue})`
    },
]

const backgroundButton = [
    {
        background: '#0F1424'
    },
    {
        background: '#0F1424'
    },
    {
        background: '#0F1424'
    },
    {
        background: '#0072F8'
    }
]

const TariffsBlock = ({ formBlockRef }) => {

    const [popup, setPopup] = useState(false)

    const scrollToFormBlock = () => {
        formBlockRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className={Styles.TariffsBlock}>
            <div className={Styles.title}>
                Выберите свой тариф по подписке
            </div>
            <div className={Styles.cards__list}>
                {item.map((obj, index) => {
                    return <div className={Styles.card} key={index} style={backgroundCard[index]}>
                        <div>
                            <div className={Styles.cardTitle}>
                                {obj.title}
                            </div>
                            <div className={Styles.text}>
                                {obj.text}
                            </div>
                        </div>
                        <div className={Styles.price}>
                            {obj.price}
                        </div>
                        <div className={Styles.info_go}>
                            <div className={Styles.button} style={backgroundButton[index]} onClick={scrollToFormBlock}>
                                <span className={Styles.buttonText}>Оставить заявку</span>
                            </div>
                        </div>
                        <div className={Styles.info_goMob}>
                            <div className={Styles.button} style={backgroundButton[index]} onClick={() => { setPopup(true) }}>
                                <span className={Styles.buttonText}>Оставить заявку</span>
                            </div>
                        </div>
                    </div>
                })}
            </div>
            <div className={Styles.description}>*Cтоимость указана без НДС</div>
            <FormPopup active={popup} setActive={setPopup} />
        </div>
    );
};

export default TariffsBlock;