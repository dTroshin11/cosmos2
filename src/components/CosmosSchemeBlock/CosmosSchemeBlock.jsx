import { useState } from "react";
import React from 'react';
import { useWindowSize } from "../../hooks/useWindowSize";
import Styles from "./CosmosSchemeBlock.module.scss";
import Tabs from "./Tabs/Tabs";


const CosmosSchemeBlock = () => {

    const item = [
        {
            text: <div className={Styles.high + ' ' + Styles.w425px}>Поставляется на&nbsp;проверенной аппаратной базе, гарантирующей безопасность и&nbsp;производительность</div>,
            cosmos: <div className={Styles.high}>
                <span>Да</span>
            </div>,
            other: <div className={Styles.high}>
                <span>Нет</span>
            </div>
        },
        {
            text: <div className={Styles.small}>Поддержка и&nbsp;обновления</div>,
            cosmos: <div className={Styles.small}>
                <span>Полная</span>
            </div>,
            other: <div className={Styles.small}>
                <span>С ограничениями</span>
            </div>
        },
        {
            text: <div className={Styles.high}>Стоимость лицензирования</div>,
            cosmos: <div className={Styles.high}>
                <span>Входит в&nbsp;стоимость подписки
                    на&nbsp;рабочее устройство</span>
            </div>,
            other: <div className={Styles.high}>
                <span>Лицензия</span>
            </div>
        },
        {
            text: <div className={Styles.small}>Ограничения по&nbsp;рынкам присутствия</div>,
            cosmos: <div className={Styles.small}>
                <span>Нет</span>
            </div>,
            other: <div className={Styles.small}>
                <span>С&nbsp;ограничениями</span>
            </div>
        },
        {
            text: <div className={Styles.small}>Доступность инструментов дистрибуции приложений</div>,
            cosmos: <div className={Styles.small}>
                <span>Полная</span>
            </div>,
            other: <div className={Styles.small}>
                <span>С&nbsp;ограничениями</span>
            </div>
        },
        {
            text: <div className={Styles.small}>Безопасность</div>,
            cosmos: <div className={Styles.small}>
                <span>Высокая</span>
            </div>,
            other: <div className={Styles.small}>
                <span>От&nbsp;средней до&nbsp;высокой</span>
            </div>
        },
        {
            text: <div className={Styles.small}>Поддержка стандартных инструментов B2B-инфраструктуры клиентов</div>,
            cosmos: <div className={Styles.small}>
                <span>Под&nbsp;запрос клиента</span>
            </div>,
            other: <div className={Styles.small}>
                <span>С&nbsp;ограничениями</span>
            </div>
        },
        {
            text: <div className={Styles.high}>Персональный ИИ-помощник</div>,
            cosmos: <div className={Styles.high}>
                <span>Есть, локально и&nbsp;облако
                    (данные не&nbsp;используются)
                </span>
            </div>,
            other: <div className={Styles.high}>
                <span>Есть, данные пользователя
                    используются компанией</span>
            </div>
        },
        {
            text: <div className={Styles.small}>Скрытые трекеры и&nbsp;логирование</div>,
            cosmos: <div className={Styles.small}>
                <span>Нет</span>
            </div>,
            other: <div className={Styles.small}>
                <span>Есть, н/д</span>
            </div>
        },
    ]

    const { windowWidth } = useWindowSize();

    const tabs = ['Cosm OS', 'Другие']

    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className={Styles.CosmosSchemeBlock}>
            <div className={Styles.title}>
                Cosm OS <br />
                и другие системы
            </div>

            {
                windowWidth <= 1024 ? <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} /> : ''
            }

            <div className={Styles.content}>

                {
                    windowWidth > 1024
                        ?
                        <>
                            <div className={Styles.columnText}>
                                {item.map((obj, index) => {
                                    return <React.Fragment key={index}>
                                        <div className={Styles.text}>
                                            {obj.text}
                                        </div>
                                        <div className={Styles.divider} />
                                    </React.Fragment>
                                })}
                            </div>
                            <div className={Styles.columnCosmos}>
                                <div className={Styles.cosmosTitle}>
                                    Cosm OS
                                </div>
                                {item.map((obj, index) => {
                                    return <React.Fragment key={index}>
                                        <div className={Styles.cosmos}>
                                            {obj.cosmos}
                                        </div>
                                        <div className={Styles.divider} />
                                    </React.Fragment>
                                })}
                            </div>

                            <div className={Styles.columnOther}>
                                <div className={Styles.otherTitle}>
                                    Другие
                                </div>
                                {item.map((obj, index) => {
                                    return <React.Fragment key={index}>
                                        <div className={Styles.other}>
                                            {obj.other}
                                        </div>
                                        <div className={Styles.divider} />
                                    </React.Fragment>
                                })}
                            </div>
                        </>
                        : ''
                }

                {
                    windowWidth <= 1024
                        ?
                        <>
                            <div className={Styles.columnText}>
                                {item.map((obj, index) => {
                                    return <React.Fragment key={index}>
                                        <div className={Styles.text}>
                                            {obj.text}
                                        </div>
                                        <div className={Styles.dividerLeft} />
                                    </React.Fragment>
                                })}
                            </div>

                            <div className={Styles.columnCosmos}>
                                <div className={Styles.cosmosTitle}>
                                    Cosm OS
                                </div>
                                {item.map((obj, index) => {
                                    return <React.Fragment key={index}>
                                        <div className={Styles.cosmos}>
                                            {obj.cosmos}
                                        </div>
                                        <div className={Styles.dividerRight} />
                                    </React.Fragment>
                                })}
                            </div>
                            <div className={Styles.columnOther}>
                                <div className={Styles.otherTitle}>
                                    Другие
                                </div>
                                {item.map((obj, index) => {
                                    return <React.Fragment key={index}>
                                        <div className={Styles.other} >
                                            {obj.other}
                                        </div>
                                    </React.Fragment>
                                })}
                            </div>
                        </>
                        :
                        ''
                }

            </div>

        </div >
    );
};

export default CosmosSchemeBlock;