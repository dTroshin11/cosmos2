import React from 'react';
import Styles from "./CosmosSchemeBlock.module.scss";

const item = [
    {
        text: 'Поставляется только с собственным ноутбуком',
        cosmos: 'Да',
        other: 'Нет'
    },
    {
        text: 'Поддержка и обновления',
        cosmos: 'Полная',
        other: 'С ограничениями'
    },
    {
        text: 'Стоимость лицензирования',
        cosmos: 'Входит в стоимость подписки на рабочее устройство',
        other: 'Лицензия'
    },
    {
        text: 'Ограничения по рынкам присутствия',
        cosmos: 'Нет',
        other: 'С ограничениями'
    },
    {
        text: 'Доступность инструментов дистрибуции приложений',
        cosmos: 'Полная',
        other: 'С ограничениями'
    },
    {
        text: 'Безопасность',
        cosmos: 'Высокая',
        other: 'От средней до высокой'
    },
    {
        text: 'Поддержка стандартных инструментов B2B-инфраструктуры клиентов',
        cosmos: 'Под запрос клиента',
        other: 'С ограничениями'
    },
    {
        text: 'Персональный ИИ-помощник',
        cosmos: 'Есть, локально и облако (данные не используются)',
        other: 'Есть, данные пользователя используются компанией'
    },
    {
        text: 'Скрытые трекеры и логирование',
        cosmos: 'Нет',
        other: 'Есть, н/д'
    },
]


const CosmosSchemeBlock = () => {
    return (
        <div className={Styles.CosmosSchemeBlock}>
            <div className={Styles.title}>
                Cosm OS <br />
                и другие системы
            </div>

            
            <div className={Styles.content}>
                <div className={Styles.columnText}>
                    {item.map((obj, index) => {
                        return <>
                            <div className={Styles.text} key={index}>
                                {obj.text}
                            </div>
                            <div className={Styles.divider}></div>
                        </>
                    })}
                </div>
                <div className={Styles.columnCosmos}>
                    <div className={Styles.cosmosTitle}>
                        Cosm OS
                    </div>
                    {item.map((obj, index) => {
                        return <>
                            <div className={Styles.cosmos} key={index}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 5V19" stroke="#00FF75" stroke-linejoin="round" />
                                    <path d="M5 12H19" stroke="#00FF75" stroke-linejoin="round" />
                                </svg>
                                {obj.cosmos}
                            </div>
                            <div className={Styles.divider}></div>
                        </>
                    })}
                </div>
                <div className={Styles.columnOther}>
                    <div className={Styles.otherTitle}>
                        Другие
                    </div>
                    {item.map((obj, index) => {
                        return <>
                            <div className={Styles.other} key={index}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                    <path d="M5 12.0709H19" stroke="#818AA7" stroke-linejoin="round" />
                                </svg>
                                {obj.other}
                            </div>
                            <div className={Styles.divider}></div>
                        </>
                    })}
                </div>
            </div>

        </div>
    );
};

export default CosmosSchemeBlock;