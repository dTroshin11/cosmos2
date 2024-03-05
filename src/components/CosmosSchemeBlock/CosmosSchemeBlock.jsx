import { useState } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import Styles from "./CosmosSchemeBlock.module.scss";
import Tabs from "./Tabs/Tabs";


const CosmosSchemeBlock = () => {

    const item = [
        {
            text: <div className={Styles.small}>Поставляется только с&nbsp;собственным ноутбуком</div>,
            cosmos: <div className={Styles.small}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5V19" stroke="#00FF75" stroke-linejoin="round" />
                    <path d="M5 12H19" stroke="#00FF75" stroke-linejoin="round" />
                </svg>
                <span>Да</span>
            </div>,
            other: <div className={Styles.small}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path d="M5 12.0709H19" stroke="#818AA7" stroke-linejoin="round" />
                </svg>
                <span>Нет</span>
            </div>
        },
        {
            text: <div className={Styles.small}>Поддержка и&nbsp;обновления</div>,
            cosmos: <div className={Styles.small}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5V19" stroke="#00FF75" stroke-linejoin="round" />
                    <path d="M5 12H19" stroke="#00FF75" stroke-linejoin="round" />
                </svg>
                <span>Полная</span>
            </div>,
            other: <div className={Styles.small}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path d="M5 12.0709H19" stroke="#818AA7" stroke-linejoin="round" />
                </svg>
                <span>С ограничениями</span>
            </div>
        },
        {
            text: <div className={Styles.high}>Стоимость лицензирования&nbsp;&nbsp;&nbsp;</div>,
            cosmos: <div className={Styles.high}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5V19" stroke="#00FF75" stroke-linejoin="round" />
                    <path d="M5 12H19" stroke="#00FF75" stroke-linejoin="round" />
                </svg>
                <span>Входит в&nbsp;стоимость подписки
                    на&nbsp;рабочее устройство</span>
            </div>,
            other: <div className={Styles.high}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path d="M5 12.0709H19" stroke="#818AA7" stroke-linejoin="round" />
                </svg>
                <span>Лицензия</span>
            </div>
        },
        {
            text: <div className={Styles.small}>Ограничения по&nbsp;рынкам присутствия</div>,
            cosmos: <div className={Styles.small}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5V19" stroke="#00FF75" stroke-linejoin="round" />
                    <path d="M5 12H19" stroke="#00FF75" stroke-linejoin="round" />
                </svg>
                <span>Нет</span>
            </div>,
            other: <div className={Styles.small}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path d="M5 12.0709H19" stroke="#818AA7" stroke-linejoin="round" />
                </svg>
                <span>С&nbsp;ограничениями</span>
            </div>
        },
        {
            text: <div className={Styles.small}>Доступность инструментов дистрибуции приложений</div>,
            cosmos: <div className={Styles.small}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5V19" stroke="#00FF75" stroke-linejoin="round" />
                    <path d="M5 12H19" stroke="#00FF75" stroke-linejoin="round" />
                </svg>
                <span>Полная</span>
            </div>,
            other: <div className={Styles.small}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path d="M5 12.0709H19" stroke="#818AA7" stroke-linejoin="round" />
                </svg>
                <span>С&nbsp;ограничениями</span>
            </div>
        },
        {
            text: <div className={Styles.small}>Безопасность</div>,
            cosmos: <div className={Styles.small}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5V19" stroke="#00FF75" stroke-linejoin="round" />
                    <path d="M5 12H19" stroke="#00FF75" stroke-linejoin="round" />
                </svg>
                <span>Высокая</span>
            </div>,
            other: <div className={Styles.small}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path d="M5 12.0709H19" stroke="#818AA7" stroke-linejoin="round" />
                </svg>
                <span>От&nbsp;средней до&nbsp;высокой</span>
            </div>
        },
        {
            text: <div className={Styles.small}>Поддержка стандартных инструментов B2B-инфраструктуры клиентов</div>,
            cosmos: <div className={Styles.small}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5V19" stroke="#00FF75" stroke-linejoin="round" />
                    <path d="M5 12H19" stroke="#00FF75" stroke-linejoin="round" />
                </svg>
                <span>Под&nbsp;запрос клиента</span>
            </div>,
            other: <div className={Styles.small}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path d="M5 12.0709H19" stroke="#818AA7" stroke-linejoin="round" />
                </svg>
                <span>С&nbsp;ограничениями</span>
            </div>
        },
        {
            text: <div className={Styles.high}>Персональный ИИ-помощник&nbsp;&nbsp;&nbsp;</div>,
            cosmos: <div className={Styles.high}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5V19" stroke="#00FF75" stroke-linejoin="round" />
                    <path d="M5 12H19" stroke="#00FF75" stroke-linejoin="round" />
                </svg>
                <span>Есть, локально и&nbsp;облако
                    (данные&nbsp;не&nbsp;используются)</span>
            </div>,
            other: <div className={Styles.high}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path d="M5 12.0709H19" stroke="#818AA7" stroke-linejoin="round" />
                </svg>
                <span>Есть, данные пользователя
                    используются компанией</span>
            </div>
        },
        {
            text: <div className={Styles.small}>Скрытые трекеры и&nbsp;логирование</div>,
            cosmos: <div className={Styles.small}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5V19" stroke="#00FF75" stroke-linejoin="round" />
                    <path d="M5 12H19" stroke="#00FF75" stroke-linejoin="round" />
                </svg>
                <span>Нет</span>
            </div>,
            other: <div className={Styles.small}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path d="M5 12.0709H19" stroke="#818AA7" stroke-linejoin="round" />
                </svg>
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
                                            {obj.other}
                                        </div>
                                        <div className={Styles.divider}></div>
                                    </>
                                })}
                            </div>
                        </>
                        : ''
                }

                {
                    windowWidth <= 1024 && activeTab === 0
                        ?
                        <>
                            <div className={Styles.columnText}>
                                {item.map((obj, index) => {
                                    return <>
                                        <div className={Styles.text} key={index}>
                                            {obj.text}
                                        </div>
                                        <div className={Styles.dividerLeft}></div>
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
                                            {obj.cosmos}
                                        </div>
                                        <div className={Styles.dividerRight}></div>
                                    </>
                                })}
                            </div>
                        </>
                        :
                        ''
                }

                {
                    windowWidth <= 1024 && activeTab === 1
                        ?
                        <>
                            <div className={Styles.columnText}>
                                {item.map((obj, index) => {
                                    return <>
                                        <div className={Styles.text} key={index}>
                                            {obj.text}
                                        </div>
                                        <div className={Styles.dividerLeft}></div>
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
                                            {obj.other}
                                        </div>
                                        <div className={Styles.dividerRight}></div>
                                    </>
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