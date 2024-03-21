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
                    на&nbsp;рабочее устройство</span>
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
                <span>С&nbsp;ограничениями</span>
            </div>
        },
        {
            text: <div className={Styles.row5}>Доступность инструментов дистрибуции приложений</div>,
            cosmos: <div className={Styles.row5}>
                <span>Полная</span>
            </div>,
            other: <div className={Styles.row5}>
                <span>С&nbsp;ограничениями</span>
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
                <span>С&nbsp;ограничениями</span>
            </div>
        },
        {
            text: <div className={Styles.row8}>Персональный ИИ-помощник</div>,
            cosmos: <div className={Styles.row8}>
                <span>Есть, локально и&nbsp;облако
                    (данные не используются)
                </span>
            </div>,
            other: <div className={Styles.row8}>
                <span>Есть, данные пользователя
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
                    windowWidth <= 768
                        ?
                        // <>
                        //     <div className={Styles.columnText}>
                        //         {item.map((obj, index) => {
                        //             return <React.Fragment key={index}>
                        //                 <div className={Styles.text}>
                        //                     {obj.text}
                        //                 </div>
                        //                 <div className={Styles.dividerLeft} />
                        //             </React.Fragment>
                        //         })}
                        //     </div>

                        //     <div className={Styles.columnCosmos}>
                        //         <div className={Styles.cosmosTitle}>
                        //             Cosm OS
                        //         </div>
                        //         {item.map((obj, index) => {
                        //             return <React.Fragment key={index}>
                        //                 <div className={Styles.cosmos}>
                        //                     {obj.cosmos}
                        //                 </div>
                        //                 <div className={Styles.dividerRight} />
                        //             </React.Fragment>
                        //         })}
                        //     </div>
                        //     <div className={Styles.columnOther}>
                        //         <div className={Styles.otherTitle}>
                        //             Другие
                        //         </div>
                        //         {item.map((obj, index) => {
                        //             return <React.Fragment key={index}>
                        //                 <div className={Styles.other} >
                        //                     {obj.other}
                        //                 </div>
                        //                 <div style={{ height: '1px' }} />
                        //             </React.Fragment>
                        //         })}
                        //     </div>
                        // </>
                        <div className={Styles.Mobile}>
                            {item.map((obj, index) => {
                                return <div className={Styles.MobileRow}>
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