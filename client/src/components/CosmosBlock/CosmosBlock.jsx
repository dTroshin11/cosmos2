import React from 'react';
import Styles from "./CosmosBlock.module.scss";
import CosmosFeature from '../../assets/img/CosmosFeature.png'


const item = [
    <>Предустановленное программное обеспечение</>,
    <>Продвинутые функции информационной безопасности</>,
    <>Надёжная трёхфакторная аутентификация</>,
    <>Изолированные защищённые профили пользователя для&nbsp;сегментирования личной и&nbsp;рабочей информации</>,
    <>Локальный ИИ на&nbsp;устройстве</>,
    <>Индивидуальный подход к&nbsp;поддержке требуемого программного&nbsp;обеспечения и&nbsp;периферии</>,
    <>Оперативная поддержка пользователей по&nbsp;всей территории РФ</>
]


const CosmosFeatureBlock = () => {
    return (
        <div className={Styles.CosmosBlock}>
            <div className={Styles.title}>
                Собственная защищённая операционная система&nbsp;Cosm OS
            </div>
            <div className={Styles.content}>
                <img className={Styles.image} src={CosmosFeature} alt="" />
                <ul className={Styles.items__list}>
                {item.map((el, index) => {
                return <li key={index} className={Styles.text}><span>{el}</span></li>
                    })}
                </ul>
            </div>
        </div >
    );
};

export default CosmosFeatureBlock;