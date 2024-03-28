import React, { useState } from 'react';
import Styles from "./TarriffsSchemeBlock.module.scss";
import FormPopup from '../ui/FormPopup/FormPopup';
import { useWindowSize } from "../../hooks/useWindowSize";

const TariffsSchemeBlock = ({ formBlockRef }) => {
    const { windowWidth } = useWindowSize();
    const plus = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 5V19" stroke="#00FF75" strokeLinejoin="round" />
        <path d="M5 12H19" stroke="#00FF75" strokeLinejoin="round" />
    </svg>
    const minus = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M5 12.0002H19" stroke="#818AA7" strokeLinejoin="round" />
    </svg>
    const items = [
        // цена
        {
            text: <div className={Styles.small}>Цена</div>,
            free: <div className={Styles.small}>
                <span className={Styles.price}>
                    {windowWidth > 1024
                        ? <>0 ₽</>
                        : <>0 ₽/мес*</>
                    }
                </span>
                {windowWidth > 1024
                    ? <span>в месяц</span>
                    : ''
                }
            </div>,
            light: <div className={Styles.small}>
                <span className={Styles.price}>
                    {windowWidth > 1024
                        ? <>10 500 ₽</>
                        : <>10 500 ₽/мес*</>
                    }
                </span>
                {windowWidth > 1024
                    ? <span>в месяц</span>
                    : ''
                }
            </div>,
            standart: <div className={Styles.small}>
                <span className={Styles.price}>
                    {windowWidth > 1024
                        ? <>21 000 ₽</>
                        : <>21 000 ₽/мес*</>
                    }
                </span>
                {windowWidth > 1024
                    ? <span>в месяц</span>
                    : ''
                }
            </div>,
            premium: <div className={Styles.small}>
                <span className={Styles.price}>
                    {windowWidth > 1024
                        ? <>31 500 ₽</>
                        : <>31 500 ₽/мес*</>
                    }
                </span>
                {windowWidth > 1024
                    ? <span>в месяц</span>
                    : ''
                }
            </div>,
        },
        // Собственная ОС
        {
            text: <div className={Styles.small}>Собственная ОС</div>,
            free: <div className={Styles.small}>
                {plus}
            </div>,
            light: <div className={Styles.small}>
                {plus}
            </div>,
            standart: <div className={Styles.small}>
                {plus}
            </div>,
            premium: <div className={Styles.small}>
                {plus}
            </div>,
        },
        // Ноутбук Vega Alpha
        {
            text: <div className={Styles.small}>Ноутбук Vega Alpha</div>,
            free: <div className={Styles.small}>
                {minus}
            </div>,
            light: <div className={Styles.small}>
                {plus}
            </div>,
            standart: <div className={Styles.small}>
                {plus}
            </div>,
            premium: <div className={Styles.small}>
                {plus}
            </div>,
        },
        // 2 Secure Key в поставке
        {
            text: <div className={Styles.small}>2 Secure Key в поставке</div>,
            free: <div className={Styles.small}>
                {minus}
            </div>,
            light: <div className={Styles.small}>
                {plus}
            </div>,
            standart: <div className={Styles.small}>
                {plus}
            </div>,
            premium: <div className={Styles.small}>
                {plus}
            </div>,
        },
        // Интегрированный VPN
        {
            text: <div className={Styles.small}>Интегрированный VPN</div>,
            free: <div className={Styles.small}>
                {minus}
            </div>,
            light: <div className={Styles.small}>
                {plus}
            </div>,
            standart: <div className={Styles.small}>
                {plus}
            </div>,
            premium: <div className={Styles.small}>
                {plus}
            </div>,
        },
        // Облачное хранилище
        {
            text: <div className={Styles.high}>Облачное хранилище</div>,
            free: <div className={Styles.high}>
                {minus}
            </div>,
            light: <div className={Styles.high}>
                <span>Вторая память
                    Шифрование</span>
                <span />
            </div>,
            standart: <div className={Styles.high}>
                <span>МТС Cloud, Шардирование, Шифрование</span>
                <span />
            </div>,
            premium: <div className={Styles.high}>
                <span>МТС Cloud, Шардирование, Шифрование</span>
                <span />
            </div>,
        },
        // Безопасный браузер
        {
            text: <div className={Styles.small}>Безопасный браузер</div>,
            free: <div className={Styles.small}>
                {minus}
            </div>,
            light: <div className={Styles.small}>
                {plus}
            </div>,
            standart: <div className={Styles.small}>
                {plus}
            </div>,
            premium: <div className={Styles.small}>
                {plus}
            </div>,
        },
        // Офисный пакет
        {
            text: <div className={Styles.small}>Офисный пакет</div>,
            free: <div className={Styles.small}>
                {minus}
            </div>,
            light: <div className={Styles.small}>
                {minus}
            </div>,
            standart: <div className={Styles.small}>
                {plus}
            </div>,
            premium: <div className={Styles.small}>
                {plus}
            </div>,
        },
        // ПО по запросу клиента: CAD
        {
            text: <div className={Styles.high}>ПО по запросу клиента: CAD<wbr/>/CAM<wbr/>/Adobe<wbr/>/Microsoft<wbr/>/Autodesk<wbr/>/Siemens + адаптация специализированного ПО*</div>,
            free: <div className={Styles.high}>
                {minus}
            </div>,
            light: <div className={Styles.high}>
                {minus}
            </div>,
            standart: <div className={Styles.high}>
                {minus}
            </div>,
            premium: <div className={Styles.high}>
                {plus}
            </div>,
        },
        // Поддержка
        {
            text: <div className={Styles.small}>Поддержка</div>,
            free: <div className={Styles.small}>
                {minus}
            </div>,
            light: <div className={Styles.small}>
                {plus}
            </div>,
            standart: <div className={Styles.small}>
                {plus}
            </div>,
            premium: <div className={Styles.small}>
                {plus}
            </div>,
        },
        // Возможность обновить ноутбук
        {
            text: <div className={Styles.other}>Возможность обновить ноутбук</div>,
            free: <div className={Styles.other}>
                {minus}
            </div>,
            light: <div className={Styles.other}>
                <span>Один раз в&nbsp;год</span>
                <span />
            </div>,
            standart: <div className={Styles.other}>
                <span>Один раз в&nbsp;год</span>
                <span />
            </div>,
            premium: <div className={Styles.other}>
                <span>Один раз в&nbsp;год</span>
                <span />
            </div>,
        },
        // Горячая замена ноутбука
        {
            text: <div className={Styles.medium}>Горячая замена ноутбука</div>,
            free: <div className={Styles.medium}>
                {minus}
            </div>,
            light: <div className={Styles.medium}>
                <span>Один раз в&nbsp;год</span>
                <span>19 999 ₽*</span>
            </div>,
            standart: <div className={Styles.medium}>
                <span>Один раз в&nbsp;год</span>
                <span>9 999 ₽*</span>
            </div>,
            premium: <div className={Styles.medium}>
                <span>Один раз в&nbsp;год</span>
                <span />
            </div>,
        },
        // Возможность выкупа
        {
            text: <div className={Styles.medium}>Возможность выкупа</div>,
            free: <div className={Styles.medium}>
                {minus}
            </div>,
            light: <div className={Styles.medium}>
                <span>Подписка</span>
                <span>1049 ₽/мес*</span>
            </div>,
            standart: <div className={Styles.medium}>
                <span>Подписка</span>
                <span>2099 ₽/мес*</span>
            </div>,
            premium: <div className={Styles.medium}>
                <span>Подписка</span>
                <span>5250 ₽/мес*</span>
            </div>,
        }
    ]
    const itemsMobile = [
        // Цена
        {
            text: <div className={Styles.small}>Цена</div>,
            free: <div className={Styles.small}>
                <span className={Styles.price}>
                    {windowWidth > 1024
                        ? <>0 ₽</>
                        : <>0 ₽/мес*</>
                    }
                </span>
                {windowWidth > 1024
                    ? <span>в месяц</span>
                    : ''
                }
            </div>,
            light: <div className={Styles.small}>
                <span className={Styles.price}>
                    {windowWidth > 1024
                        ? <>10 500 ₽</>
                        : <>10 500 ₽/мес*</>
                    }
                </span>
                {windowWidth > 1024
                    ? <span>в месяц</span>
                    : ''
                }
            </div>,
            standart: <div className={Styles.small}>
                <span className={Styles.price}>
                    {windowWidth > 1024
                        ? <>21 000 ₽</>
                        : <>21 000 ₽/мес*</>
                    }
                </span>
                {windowWidth > 1024
                    ? <span>в месяц</span>
                    : ''
                }
            </div>,
            premium: <div className={Styles.small}>
                <span className={Styles.price}>
                    {windowWidth > 1024
                        ? <>31 500 ₽</>
                        : <>31 500 ₽/мес*</>
                    }
                </span>
                {windowWidth > 1024
                    ? <span>в месяц</span>
                    : ''
                }
            </div>,
        },
        // Ноутбук Vega Alpha
        {
            text: <div className={Styles.small}>Ноутбук Vega Alpha</div>,
            free: <div className={Styles.small}>
                {minus}
            </div>,
            light: <div className={Styles.small}>
                {plus}
            </div>,
            standart: <div className={Styles.small}>
                {plus}
            </div>,
            premium: <div className={Styles.small}>
                {plus}
            </div>,
        },
        // ПО по запросу клиента: CAD
        {
            text: <div className={Styles.small}>ПО по запросу клиента: CAD<wbr/>/CAM<wbr/>/Adobe<wbr/>/Microsoft<wbr/>/Autodesk<wbr/>/Siemens + адаптация специализированного ПО*</div>,
            free: <div className={Styles.small}>
                {minus}
            </div>,
            light: <div className={Styles.small}>
                {minus}
            </div>,
            standart: <div className={Styles.small}>
                {minus}
            </div>,
            premium: <div className={Styles.small}>
                {plus}
            </div>,
        },
        // Интегрированный VPN
        {
            text: <div className={Styles.small}>Интегрированный VPN</div>,
            free: <div className={Styles.small}>
                {minus}
            </div>,
            light: <div className={Styles.small}>
                {plus}
            </div>,
            standart: <div className={Styles.small}>
                {plus}
            </div>,
            premium: <div className={Styles.small}>
                {plus}
            </div>,
        },
        // Облачное хранилище
        {
            text: <div className={Styles.small}>Облачное хранилище</div>,
            free: <div className={Styles.small}>
                {minus}
            </div>,
            light: <div className={Styles.small}>
                Вторая память
                Шифрование
            </div>,
            standart: <div className={Styles.small}>
                МТС Cloud, Шардирование, Шифрование
            </div>,
            premium: <div className={Styles.small}>
                МТС Cloud,
                Шардирование,
                Шифрование
            </div>,
        },
    ]
    const MobileSchema = ({ arr = itemsMobile, id, title }) => {
        return (
            <div  className={Styles.container}>
                <div className={Styles.mainTitle} style={arr === items ? { color: "#0072F8" } : null}>
                    {title}
                </div>
                {arr.map((obj, index) => {
                    return <React.Fragment key={index}>
                        <div className={Styles.mobileContent}>
                            <div className={Styles.text}>
                                {obj.text}
                            </div>
                            <div className={Styles.free}>
                                {obj[id]}
                            </div>
                        </div>
                        <div className={Styles.divider}/>
                    </React.Fragment>
                })}
                {buttons.map((obj, index) => {
                    return <div key={index}>
                        {arr === items ? obj.buttonBlue : obj.buttonGrey}
                    </div>
                })}

            </div>
        );
    };
    const mobileSchemaArr = [
        { title: "Премиум", id: "premium", arr: items },
        { title: "Стандарт", id: "standart" },
        { title: "Лайт", id: "light" },
        { title: "Бесплатно", id: "free" },
    ]

    const [popup, setPopup] = useState(false)

    const scrollToFormBlock = () => {
        formBlockRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const buttons = [
        {
            text: <div className={Styles.high} style={{ fontSize: "14px" }}>*Cтоимость указана без НДС</div>,
            buttonGrey: <div className={Styles.buttonHigh}>
                <div className={Styles.info_go}>
                    <div className={Styles.button} onClick={scrollToFormBlock}>
                        <div className={Styles.buttonText}>Оставить заявку</div>
                    </div>
                </div>
                <div className={Styles.info_goMob}>
                    <div className={Styles.button} onClick={() => { setPopup(true) }}>
                        <div className={Styles.buttonText}>Оставить заявку</div>
                    </div>
                </div>
            </div>,
            buttonBlue: <div className={Styles.buttonHigh}>
                <div className={Styles.info_go}>
                    <div className={Styles.button + ' ' + Styles.premiumButton} onClick={scrollToFormBlock}>
                        <div className={Styles.buttonText}>Оставить заявку</div>
                    </div>
                </div>
                <div className={Styles.info_goMob}>
                    <div className={Styles.button + ' ' + Styles.premiumButton} onClick={() => { setPopup(true) }}>
                        <div className={Styles.buttonText}>Оставить заявку</div>
                    </div>
                </div>
            </div>
        }
    ]

    return (
        <div className={Styles.TariffsSchemeBlock}>
            <div className={Styles.title}>
                Тарифы
            </div>
            {windowWidth > 960 && (
                <div className={Styles.content}>
                    <div className={Styles.columnMain}>
                        <div className={Styles.titles}>
                            <div className={Styles.mainTitle}></div>
                            <div className={Styles.mainTitle}>
                                Бесплатно
                            </div>
                            <div className={Styles.mainTitle}>
                                Лайт
                            </div>
                            <div className={Styles.mainTitle}>
                                Стандарт
                            </div>
                        </div>
                        {items.map((obj, index) => {
                            return <React.Fragment key={index}>
                                <div className={Styles.columnMainContent}>
                                    <div className={Styles.text}>
                                        {obj.text}
                                    </div>
                                    <div className={Styles.free}>
                                        {obj.free}
                                    </div>
                                    <div className={Styles.light}>
                                        {obj.light}
                                    </div>
                                    <div className={Styles.standart}>
                                        {obj.standart}
                                    </div>
                                </div>
                                <div className={Styles.divider}></div>
                            </React.Fragment>
                        })}
                        {buttons.map((obj, index) => {
                            return <div className={Styles.buttons} key={index}>
                                <div className={Styles.text}>
                                    {obj.text}
                                </div>
                                <div className={Styles.free}>
                                    {obj.buttonGrey}
                                </div>
                                <div className={Styles.light}>
                                    {obj.buttonGrey}
                                </div>
                                <div className={Styles.standart}>
                                    {obj.buttonGrey}
                                </div>
                            </div>
                        })}
                    </div>
                    <div className={Styles.columnPremium}>
                        <div className={Styles.premiumTitle}>
                            Премиум
                        </div>
                        {items.map((obj, index) => {
                            return <React.Fragment key={index}>
                                <div className={Styles.premium}>
                                    {obj.premium}
                                </div>
                                <div className={Styles.dividerPremium}></div>
                            </React.Fragment>
                        })}
                        {buttons.map((obj, index) => {
                            return <React.Fragment key={index}>
                                <div className={Styles.premium}>
                                    {obj.buttonBlue}
                                </div>
                            </React.Fragment>
                        })}
                    </div>
                </div>
            )}


            {windowWidth <= 960 && (
                <>
                    {mobileSchemaArr.map((obj, index) => (
                        <MobileSchema title={obj.title} key={index} arr={obj.arr} id={obj.id} />
                    ))}
                    <div className={Styles.description}>*Cтоимость указана без НДС</div>
                </>
            )}

            <FormPopup active={popup} setActive={setPopup} />
        </div>
    );
};

export default TariffsSchemeBlock;