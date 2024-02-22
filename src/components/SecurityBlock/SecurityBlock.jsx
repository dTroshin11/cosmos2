import React from 'react';
import Styles from "./SecurityBlock.module.scss";


const item = [
    <>Обеспечение бесшовного защищённого доступа в&nbsp;систему и&nbsp;сервисы</>,
    <>Надёжное хранение приватных данных и&nbsp;самых важных документов</>,
    <>Лёгкая миграция рабочего состояния и&nbsp;данных между устройствами</>,
    <>Аппаратные функции криптографии</>
]


const SecurityBlock = () => {
    return (
        <div className={Styles.SecurityBlock}>
            <div className={Styles.image} alt="" />
            <div className={Styles.content}>
                <div className={Styles.title}>
                    Аппаратный ключ <br/>
                    безопасности
                </div>
                <ul className={Styles.items__list}>
                {item.map((el, index) => {
                return  <li className={Styles.item} key={index}>
                            <span className={Styles.text}>{el}</span>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    );
};

export default SecurityBlock;