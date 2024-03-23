import React from 'react';
import Styles from "./SecurityBlock.module.scss";


const item = [
    <div>Обеспечение бесшовного защищённого доступа в&nbsp;систему и&nbsp;сервисы</div>,
    <div>Надёжное хранение приватных данных&nbsp;и&nbsp;самых важных документов</div>,
    <div>Лёгкая миграция рабочего состояния и&nbsp;данных между устройствами</div>,
    <div>Аппаратные функции криптографии</div>
]


const SecurityBlock = () => {
    return (
        <div className={Styles.SecurityBlock}>
            <div className={Styles.image} alt="" />
            <div className={Styles.content}>
                <div className={Styles.title}>
                    Аппаратный ключ 
                    безопасности
                </div>
                <div className={Styles.items__list}>
                {item.map((el, index) => {
                return  <div className={Styles.item} key={index}>
                            <span className={Styles.text}>{el}</span>
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
};

export default SecurityBlock;