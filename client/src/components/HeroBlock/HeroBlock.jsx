
import Styles from './HeroBlock.module.scss';
import FormPopup from "../ui/FormPopup/FormPopup";
import React, { useState } from "react";

const feature = [
    {
        title: <div>Собственная операционная&nbsp;система</div>,
        subtitle: <div>С&nbsp;необходимыми программами и&nbsp;поддержкой&nbsp;Windows-приложений</div>,
        subtitleMob: <div>С&nbsp;необходимыми программами <br/>и&nbsp;поддержкой Windows-приложений</div>
    },
    {
        title: <div>Информационная
            безопасность</div>,
        subtitle: <div>Полный контроль над системой и&nbsp;продвинутые&nbsp;функции кибербезопасности</div>
    },
    {
        title: <div>Аппаратный ключ безопасности</div>,
        subtitle: <div>Данные надёжно защищены благодаря контролю над аппаратной базой</div>
    },
    {
        title: <div>Персональный ИИ-помощник</div>,
        subtitle: <div className={Styles.tablet_landscape_text_layouts}>Возьмёт на&nbsp;себя рутинные задачи</div>
    },
    {
        title: <div>Регулярные обновления и&nbsp;оперативная поддержка</div>,
        subtitle: <div>Ваша безопасность всегда в&nbsp;актуальном состоянии</div>
    },
    {
        title: <div className={Styles.title_desk_layout}>Производительный ноутбук</div>,
        subtitle: <div className={Styles.tablet_landscape_text_layouts}>Мощности хватит для&nbsp;любых&nbsp;рабочих&nbsp;задач</div>
    },
]
const HeroBlock = ({ formBlockRef }) => {
    const [popup, setPopup] = useState(false)
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const scrollToFormBlock = () => {
        formBlockRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    //

    return (
        <div className={Styles.Block}>
            <div className={Styles.Wrapper}>
                <div className={Styles.Hero}>
                    <div className={Styles.HeroInfo}>
                        <div className={Styles.HeroInfo__title}>
                            Премиальное защищённое <br /> рабочее место
                        </div>
                        <div className={Styles.HeroInfo__subtitle}>
                            Собственная операционная система и&nbsp;производительный ноутбук <br />Новый уровень безопасности и&nbsp;приватности
                        </div>
                        <div className={Styles.HeroInfo__button} onClick={scrollToFormBlock} >
                            Оставить заявку
                        </div>
                        <div className={Styles.HeroInfo__buttonMob} onClick={() => { setPopup(true) }} >
                            Оставить заявку
                        </div>
                        <FormPopup active={popup} setActive={setPopup} />
                    </div>
                    <div className={Styles.HeroFeature}>
                        <div className={Styles.HeroFeature__image} />
                        <div className={Styles.HeroFeature__features}>
                            {feature.map((el, idx) => {
                                return <div className={Styles.features__item} key={idx} >
                                    <div className={Styles.item__title}>{el.title}</div>
                                    <div className={Styles.item__subtitle}>{el.subtitle}</div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroBlock;
