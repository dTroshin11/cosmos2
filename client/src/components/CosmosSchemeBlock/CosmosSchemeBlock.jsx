import { useState } from "react";
import React from 'react';
import { useWindowSize } from "../../hooks/useWindowSize";
import Styles from "./CosmosSchemeBlock.module.scss";


const CosmosSchemeBlock = () => {

    const item = [
        {
            text: <div className={Styles.row1}>Поставляется на&nbsp;проверенной аппаратной базе, гарантирующей безопасность и&nbsp;производительность</div>,
            cosmos: <div className={Styles.row1}>
                <span>Да</span>
            </div>,
            other: <div className={Styles.row1}>
                <span>Нет</span>
            </div>
        },
        {
            text: <div className={Styles.row2}>Поддержка и&nbsp;обновления</div>,
            cosmos: <div className={Styles.row2}>
                <span>Полная</span>
            </div>,
            other: <div className={Styles.row2}>
                <span>С ограничениями</span>
            </div>
        },
        {
            text: <div className={Styles.row3}>Стоимость лицензирования</div>,
            cosmos: <div className={Styles.row3}>
                <span>Входит в&nbsp;стоимость подписки
                    на&nbsp;рабочее место</span>
            </div>,
            other: <div className={Styles.row3}>
                <span>Лицензия</span>
            </div>
        },
        {
            text: <div className={Styles.row4}>Ограничения по&nbsp;рынкам присутствия</div>,
            cosmos: <div className={Styles.row4}>
                <span>Нет</span>
            </div>,
            other: <div className={Styles.row4}>
                <span>С ограничениями</span>
            </div>
        },
        {
            text: <div className={Styles.row5}>Доступность инструментов дистрибуции приложений</div>,
            cosmos: <div className={Styles.row5}>
                <span>Полная</span>
            </div>,
            other: <div className={Styles.row5}>
                <span>С ограничениями</span>
            </div>
        },
        {
            text: <div className={Styles.row6}>Безопасность</div>,
            cosmos: <div className={Styles.row6}>
                <span>Высокая</span>
            </div>,
            other: <div className={Styles.row6}>
                <span>От&nbsp;средней до&nbsp;высокой</span>
            </div>
        },
        {
            text: <div className={Styles.row7}>Поддержка стандартных инструментов B2B-инфраструктуры клиентов</div>,
            cosmos: <div className={Styles.row7}>
                <span>Под&nbsp;запрос клиента</span>
            </div>,
            other: <div className={Styles.row7}>
                <span>С ограничениями</span>
            </div>
        },
        {
            text: <div className={Styles.row8}>Персональный ИИ-помощник</div>,
            cosmos: <div className={Styles.row8}>
                <span>Есть, локально и&nbsp;облако<br />
                    (данные не используются)
                </span>
            </div>,
            other: <div className={Styles.row8}>
                <span>Есть, <br /> данные пользователя
                    используются компанией</span>
            </div>
        },
        {
            text: <div className={Styles.row9}>Скрытые трекеры и&nbsp;логирование</div>,
            cosmos: <div className={Styles.row9}>
                <span>Нет</span>
            </div>,
            other: <div className={Styles.row9}>
                <span>Есть, н/д</span>
            </div>
        },
    ]

    const mobileItem = [
        {
            text: <div>Поставляется на&nbsp;проверенной аппаратной базе, гарантирующей безопасность и&nbsp;производительность</div>,
            cosmos: <div>Да</div>,
            other: <div>Нет</div>
        },
        {
            text: <div>Поддержка и&nbsp;обновления</div>,
            cosmos: <div>Полная</div>,
            other: <div>С ограничениями</div>
        },
        {
            text: <div>Стоимость<br className="tablet-only"/> лицензирования</div>,
            cosmos: <div>Входит в&nbsp;стоимость подписки
                на&nbsp;рабочее место</div>,
            other: <div>Лицензия</div>
        },
        {
            text: <div>Ограничения по&nbsp;рынкам присутствия</div>,
            cosmos: <div>Нет</div>,
            other: <div>С ограничениями</div>
        },
        {
            text: <div>Доступность инструментов<br className="tablet-only"/> дистрибуции приложений</div>,
            cosmos: <div>Полная</div>,
            other: <div>С ограничениями</div>
        },
        {
            text: <div>Безопасность</div>,
            cosmos: <div>Высокая</div>,
            other: <div>От средней до&nbsp;высокой</div>
        },
        {
            text: <div>Поддержка стандартных инструментов B2B-инфраструктуры клиентов</div>,
            cosmos: <div>Под запрос клиента</div>,
            other: <div>С ограничениями</div>
        },
        {
            text: <div>Персональный<br className="tablet-only"/> ИИ-&nbsp;помощник</div>,
            cosmos: <div>Есть, локально и&nbsp;облако<br />
            (данные не используются)</div>,
            other: <div>Есть, данные пользователя
            используются компанией</div>
        },
        {
            text: <div>Скрытые трекеры и&nbsp;логирование</div>,
            cosmos: <div>Нет</div>,
            other: <div>Есть, н/д</div>
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

            <div className={Styles.content}>

                {
                    windowWidth > 768
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
                                        <div className={Styles.dividerFix} />
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
                                        <div className={Styles.dividerFix} />
                                    </React.Fragment>
                                })}
                            </div>
                        </>
                        : ''
                }


                {
                    windowWidth <= 768
                        ?
                        <div className={Styles.Mobile}>
                            <div className={Styles.MobileTitles}>
                                <div className={Styles.MobileTextTitle}></div>
                                <div className={Styles.MobileCosmosTitle}>Cosm OS</div>
                                <div className={Styles.MobileOtherTitle}>Другие</div>
                            </div>
                            {mobileItem.map((obj, index) => {
                                return <React.Fragment key={index}>
                                    <div className={Styles.MobileRow}>
                                        <div className={Styles.FirstTD}>
                                            {obj.text}
                                        </div>
                                        <div className={Styles.SecondTD}>
                                            {obj.cosmos}
                                        </div>
                                        <div className={Styles.ThirdTD}>
                                            {obj.other}
                                        </div>
                                    </div>
                                    <div className={Styles.divider}></div>
                                </React.Fragment>
                            })}
                        </div>
                        :
                        ''
                }
            </div>
        </div >
    );
};

export default CosmosSchemeBlock;