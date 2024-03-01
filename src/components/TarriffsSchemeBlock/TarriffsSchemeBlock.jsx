import React, { useRef, useState } from 'react';
import Styles from "./TarriffsSchemeBlock.module.scss";
import FormPopup from '../ui/FormPopup/FormPopup';
import { useWindowSize } from "../../hooks/useWindowSize";


const TariffsSchemeBlock = ({ formBlockRef }) => {

    const mobilePremiumRef = useRef(null);
    const mobileStandartRef = useRef(null);
    const mobileLightRef = useRef(null);
    const mobileFreeRef = useRef(null);

    const { windowWidth } = useWindowSize();

    const [popup, setPopup] = useState(false)

    const scrollToFormBlock = () => {
        formBlockRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const onClickBlockOpen = (event, ref) => {
        ref.current.classList.add(`${Styles.open}`)
        event.currentTarget.style.display = 'none'
    }

    const items = [
        {
            text: <div className={Styles.small}>Цена</div>,
            free: <div className={Styles.small}>
                <span className={Styles.price}>0 ₽</span>
                {windowWidth > 1024
                    ? <span>в месяц</span>
                    : ''
                }
            </div>,
            light: <div className={Styles.small}>
                <span className={Styles.price}>10 500 ₽*</span>
                {windowWidth > 1024
                    ? <span>в месяц</span>
                    : ''
                }
            </div>,
            standart: <div className={Styles.small}>
                <span className={Styles.price}>21 000 ₽*</span>
                {windowWidth > 1024
                    ? <span>в месяц</span>
                    : ''
                }
            </div>,
            premium: <div className={Styles.small}>
                <span className={Styles.price}>31 500 ₽*</span>
                {windowWidth > 1024
                    ? <span>в месяц</span>
                    : ''
                }
            </div>,
        },
        {
            text: <div className={Styles.small}>Собственная ОС</div>,
            free: <div className={Styles.small}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5V19" stroke="#00FF75" stroke-linejoin="round" />
                    <path d="M5 12H19" stroke="#00FF75" stroke-linejoin="round" />
                </svg>
            </div>,
            light: <div className={Styles.small}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5V19" stroke="#00FF75" stroke-linejoin="round" />
                    <path d="M5 12H19" stroke="#00FF75" stroke-linejoin="round" />
                </svg>
            </div>,
            standart: <div className={Styles.small}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5V19" stroke="#00FF75" stroke-linejoin="round" />
                    <path d="M5 12H19" stroke="#00FF75" stroke-linejoin="round" />
                </svg>
            </div>,
            premium: <div className={Styles.small}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5V19" stroke="#00FF75" stroke-linejoin="round" />
                    <path d="M5 12H19" stroke="#00FF75" stroke-linejoin="round" />
                </svg>
            </div>,
        },
        {
            text: <div className={Styles.small}>Ноутбук Vega</div>,
            free: <div className={Styles.small}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12.0002H19" stroke="#818AA7" stroke-linejoin="round" />
                </svg>
            </div>,
            light: <div className={Styles.small}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5V19" stroke="#00FF75" stroke-linejoin="round" />
                    <path d="M5 12H19" stroke="#00FF75" stroke-linejoin="round" />
                </svg>
            </div>,
            standart: <div className={Styles.small}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5V19" stroke="#00FF75" stroke-linejoin="round" />
                    <path d="M5 12H19" stroke="#00FF75" stroke-linejoin="round" />
                </svg>
            </div>,
            premium: <div className={Styles.small}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5V19" stroke="#00FF75" stroke-linejoin="round" />
                    <path d="M5 12H19" stroke="#00FF75" stroke-linejoin="round" />
                </svg>
            </div>,
        },
        {
            text: <div className={Styles.small}>Secure Key</div>,
            free: <div className={Styles.small}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12.0002H19" stroke="#818AA7" stroke-linejoin="round" />
                </svg>
            </div>,
            light: <div className={Styles.small}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5V19" stroke="#00FF75" stroke-linejoin="round" />
                    <path d="M5 12H19" stroke="#00FF75" stroke-linejoin="round" />
                </svg>
            </div>,
            standart: <div className={Styles.small}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5V19" stroke="#00FF75" stroke-linejoin="round" />
                    <path d="M5 12H19" stroke="#00FF75" stroke-linejoin="round" />
                </svg>
            </div>,
            premium: <div className={Styles.small}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5V19" stroke="#00FF75" stroke-linejoin="round" />
                    <path d="M5 12H19" stroke="#00FF75" stroke-linejoin="round" />
                </svg>
            </div>,
        },
        {
            text: <div className={Styles.small}>Интегрированный VPN</div>,
            free: <div className={Styles.small}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12.0002H19" stroke="#818AA7" stroke-linejoin="round" />
                </svg>
            </div>,
            light: <div className={Styles.small}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5V19" stroke="#00FF75" stroke-linejoin="round" />
                    <path d="M5 12H19" stroke="#00FF75" stroke-linejoin="round" />
                </svg>
            </div>,
            standart: <div className={Styles.small}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5V19" stroke="#00FF75" stroke-linejoin="round" />
                    <path d="M5 12H19" stroke="#00FF75" stroke-linejoin="round" />
                </svg>
            </div>,
            premium: <div className={Styles.small}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5V19" stroke="#00FF75" stroke-linejoin="round" />
                    <path d="M5 12H19" stroke="#00FF75" stroke-linejoin="round" />
                </svg>
            </div>,
        },
        {
            text: <div className={Styles.high}>Облачное хранилище</div>,
            free: <div className={Styles.high}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12.0002H19" stroke="#818AA7" stroke-linejoin="round" />
                </svg>
            </div>,
            light: <div className={Styles.high}>
                <span>Вторая память
                    Шифрование</span>
                <span></span>
            </div>,
            standart: <div className={Styles.high}>
                <span>МТС Cloud, Шардирование, Шифрование</span>
                <span></span>
            </div>,
            premium: <div className={Styles.high}>
                <span>МТС Cloud, Шардирование, Шифрование</span>
                <span></span>
            </div>,
        },
        {
            text: <div className={Styles.small}>Безопасный браузер</div>,
            free: <div className={Styles.small}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12.0002H19" stroke="#818AA7" stroke-linejoin="round" />
                </svg>
            </div>,
            light: <div className={Styles.small}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5V19" stroke="#00FF75" stroke-linejoin="round" />
                    <path d="M5 12H19" stroke="#00FF75" stroke-linejoin="round" />
                </svg>
            </div>,
            standart: <div className={Styles.small}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5V19" stroke="#00FF75" stroke-linejoin="round" />
                    <path d="M5 12H19" stroke="#00FF75" stroke-linejoin="round" />
                </svg>
            </div>,
            premium: <div className={Styles.small}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5V19" stroke="#00FF75" stroke-linejoin="round" />
                    <path d="M5 12H19" stroke="#00FF75" stroke-linejoin="round" />
                </svg>
            </div>,
        },
        {
            text: <div className={Styles.small}>Офисный пакет</div>,
            free: <div className={Styles.small}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12.0002H19" stroke="#818AA7" stroke-linejoin="round" />
                </svg>
            </div>,
            light: <div className={Styles.small}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12.0002H19" stroke="#818AA7" stroke-linejoin="round" />
                </svg>
            </div>,
            standart: <div className={Styles.small}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5V19" stroke="#00FF75" stroke-linejoin="round" />
                    <path d="M5 12H19" stroke="#00FF75" stroke-linejoin="round" />
                </svg>
            </div>,
            premium: <div className={Styles.small}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5V19" stroke="#00FF75" stroke-linejoin="round" />
                    <path d="M5 12H19" stroke="#00FF75" stroke-linejoin="round" />
                </svg>
            </div>,
        },
        {
            text: <div className={Styles.high}>ПО по запросу клиента: CAD/CAM/
                Adobe/Microsoft/Autodesk/Siemens +
                адаптация специализированного ПО*</div>,
            free: <div className={Styles.high}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12.0002H19" stroke="#818AA7" stroke-linejoin="round" />
                </svg>
            </div>,
            light: <div className={Styles.high}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12.0002H19" stroke="#818AA7" stroke-linejoin="round" />
                </svg>
            </div>,
            standart: <div className={Styles.high}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12.0002H19" stroke="#818AA7" stroke-linejoin="round" />
                </svg>
            </div>,
            premium: <div className={Styles.high}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5V19" stroke="#00FF75" stroke-linejoin="round" />
                    <path d="M5 12H19" stroke="#00FF75" stroke-linejoin="round" />
                </svg>
            </div>,
        },
        {
            text: <div className={Styles.small}>Поддержка</div>,
            free: <div className={Styles.small}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12.0002H19" stroke="#818AA7" stroke-linejoin="round" />
                </svg>
            </div>,
            light: <div className={Styles.small}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5V19" stroke="#00FF75" stroke-linejoin="round" />
                    <path d="M5 12H19" stroke="#00FF75" stroke-linejoin="round" />
                </svg>
            </div>,
            standart: <div className={Styles.small}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5V19" stroke="#00FF75" stroke-linejoin="round" />
                    <path d="M5 12H19" stroke="#00FF75" stroke-linejoin="round" />
                </svg>
            </div>,
            premium: <div className={Styles.small}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5V19" stroke="#00FF75" stroke-linejoin="round" />
                    <path d="M5 12H19" stroke="#00FF75" stroke-linejoin="round" />
                </svg>
            </div>,
        },
        {
            text: <div className={Styles.other}>Возможность обновить ноутбук</div>,
            free: <div className={Styles.other}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12.001H19" stroke="#818AA7" stroke-linejoin="round" />
                </svg>
            </div>,
            light: <div className={Styles.other}>
                <span>Один раз в год</span>
                <span></span>
            </div>,
            standart: <div className={Styles.other}>
                <span>Один раз в год</span>
                <span></span>
            </div>,
            premium: <div className={Styles.other}>
                <span>Один раз в год</span>
                <span></span>
            </div>,
        },
        {
            text: <div className={Styles.medium}>Горячая замена ноутбука</div>,
            free: <div className={Styles.medium}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12.001H19" stroke="#818AA7" stroke-linejoin="round" />
                </svg>
            </div>,
            light: <div className={Styles.medium}>
                <span>Один раз в год</span>
                <span>19 999 ₽*</span>
            </div>,
            standart: <div className={Styles.medium}>
                <span>Один раз в год</span>
                <span>9 999 ₽*</span>
            </div>,
            premium: <div className={Styles.medium}>
                <span>Один раз в год</span>
                <span></span>
            </div>,
        },
        {
            text: <div className={Styles.medium}>Возможность выкупа</div>,
            free: <div className={Styles.medium}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12.001H19" stroke="#818AA7" stroke-linejoin="round" />
                </svg>
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

    const buttons = [
        {
            text: <div className={Styles.high}>*Cтоимость указана без НДС</div>,
            buttonGrey: <div className={Styles.buttonHigh}>
                <div className={Styles.info_go}>
                    <div className={Styles.button}  onClick={scrollToFormBlock}>
                        <div className={Styles.buttonText}>Оставить заявку</div>
                    </div>
                </div>
                <div className={Styles.info_goMob}>
                    <div className={Styles.button}  onClick={() => { setPopup(true) }}>
                        <div className={Styles.buttonText}>Оставить заявку</div>
                    </div>
                </div>
            </div>,
            buttonBlue: <div className={Styles.buttonHigh}>
                <div className={Styles.info_go}>
                    <div className={Styles.button + ' ' + Styles.premiumButton}  onClick={scrollToFormBlock}>
                        <div className={Styles.buttonText}>Оставить заявку</div>
                    </div>
                </div>
                <div className={Styles.info_goMob}>
                    <div className={Styles.button + ' ' + Styles.premiumButton}  onClick={() => { setPopup(true) }}>
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

            {windowWidth > 1024
                ? <div className={Styles.content}>
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
                            return <>
                                <div className={Styles.columnMainContent}>
                                    <div className={Styles.text} key={index}>
                                        {obj.text}
                                    </div>
                                    <div className={Styles.free} key={index}>
                                        {obj.free}
                                    </div>
                                    <div className={Styles.light} key={index}>
                                        {obj.light}
                                    </div>
                                    <div className={Styles.standart} key={index}>
                                        {obj.standart}
                                    </div>
                                </div>
                                <div className={Styles.divider}></div>
                            </>
                        })}
                        {buttons.map((obj, index) => {
                            return <div className={Styles.buttons}>
                                <div className={Styles.text} key={index}>
                                    {obj.text}
                                </div>
                                <div className={Styles.free} key={index}>
                                    {obj.buttonGrey}
                                </div>
                                <div className={Styles.light} key={index}>
                                    {obj.buttonGrey}
                                </div>
                                <div className={Styles.standart} key={index}>
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
                            return <>
                                <div className={Styles.premium} key={index}>
                                    {obj.premium}
                                </div>
                                <div className={Styles.divider}></div>
                            </>
                        })}
                        {buttons.map((obj, index) => {
                            return <>
                                <div className={Styles.premium} key={index}>
                                    {obj.buttonBlue}
                                </div>
                            </>
                        })}
                    </div>
                </div>
                : ''}



            {windowWidth <= 1024
                ? <div className={Styles.mobileColumn}>
                    <div className={Styles.mobilePremium} ref={mobilePremiumRef}>
                        <div className={Styles.premiumTitle}>
                            Премиум
                        </div>
                        {items.map((obj, index) => {
                            return <>
                                <div className={Styles.mobileContent}>
                                    <div className={Styles.text} key={index}>
                                        {obj.text}
                                    </div>
                                    <div className={Styles.premium} key={index}>
                                        {obj.premium}
                                    </div>
                                </div>
                                <div className={Styles.divider}></div>
                            </>
                        })}
                        {buttons.map((obj, index) => {
                            return <div key={index}>
                                {obj.buttonBlue}
                            </div>
                        })}
                    </div>
                    <div className={Styles.info_goMob}>
                        <div className={Styles.button + ' ' + Styles.premiumButton} onClick={(event) => onClickBlockOpen(event, mobilePremiumRef)}>
                            <div className={Styles.buttonText}>Подробнее</div>
                        </div>
                    </div>
                    <div className={Styles.mobileStandart} ref={mobileStandartRef}>
                        <div className={Styles.mainTitle}>
                            Стандарт
                        </div>
                        {items.map((obj, index) => {
                            return <>
                                <div className={Styles.mobileContent}>
                                    <div className={Styles.text} key={index}>
                                        {obj.text}
                                    </div>
                                    <div className={Styles.standart} key={index}>
                                        {obj.standart}
                                    </div>
                                </div>
                                <div className={Styles.divider}></div>
                            </>
                        })}
                        {buttons.map((obj, index) => {
                            return <div key={index}>
                                {obj.buttonGrey}
                            </div>
                        })}
                    </div>
                    <div className={Styles.info_goMob}>
                        <div className={Styles.button} onClick={(event) => onClickBlockOpen(event, mobileStandartRef)}>
                            <div className={Styles.buttonText}>Подробнее</div>
                        </div>
                    </div>
                    <div className={Styles.mobileLight} ref={mobileLightRef}>
                        <div className={Styles.mainTitle}>
                            Лайт
                        </div>
                        {items.map((obj, index) => {
                            return <>
                                <div className={Styles.mobileContent}>
                                    <div className={Styles.text} key={index}>
                                        {obj.text}
                                    </div>
                                    <div className={Styles.light} key={index}>
                                        {obj.light}
                                    </div>
                                </div>
                                <div className={Styles.divider}></div>
                            </>
                        })}
                        {buttons.map((obj, index) => {
                            return <div key={index}>
                                {obj.buttonGrey}
                            </div>
                        })}
                    </div>
                    <div className={Styles.info_goMob}>
                        <div className={Styles.button} onClick={(event) => onClickBlockOpen(event, mobileLightRef)}>
                            <div className={Styles.buttonText}>Подробнее</div>
                        </div>
                    </div>
                    <div className={Styles.mobileFree} ref={mobileFreeRef}>
                        <div className={Styles.mainTitle}>
                            Бесплатно
                        </div>
                        {items.map((obj, index) => {
                            return <>
                                <div className={Styles.mobileContent}>
                                    <div className={Styles.text} key={index}>
                                        {obj.text}
                                    </div>
                                    <div className={Styles.free} key={index}>
                                        {obj.free}
                                    </div>
                                </div>
                                <div className={Styles.divider}></div>
                            </>
                        })}
                        {buttons.map((obj, index) => {
                            return <div key={index}>
                                {obj.buttonGrey}
                            </div>
                        })}
                    </div>
                    <div className={Styles.info_goMob}>
                        <div className={Styles.button} onClick={(event) => onClickBlockOpen(event, mobileFreeRef)}>
                            <div className={Styles.buttonText}>Подробнее</div>
                        </div>
                    </div>
                    <div className={Styles.description}>*Cтоимость указана без НДС</div>
                </div>
                : ''
            }
            <FormPopup active={popup} setActive={setPopup} />
        </div>
    );
};

export default TariffsSchemeBlock;