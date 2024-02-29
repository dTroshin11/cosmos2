import React, {useState} from 'react';
import Styles from "./LaptopBlock.module.scss";
import FormPopup from "../ui/FormPopup/FormPopup";

const infoLeft = [
    {
        title: "Современный производительный ноутбук",
        subtitle: "CPU последнего поколения"
    },
    {
        title: <div>Аппаратный <br/> контроль</div>,
        subtitle: <div>Над веб-камерой, <br/>
        микрофонами и&nbsp;адаптером <br/>
        беспроводной связи</div>
    },
    {
        title: "Автономный",
        subtitle: <div>
            Ёмкая батарея и&nbsp;быстрая <br/>
            зарядка на&nbsp;140W
        </div>
    },
]
const infoRight = [
    {
        title: "Идеально подходит для профессиональных задач",
        subtitle: "16-дюймовый 4К-дисплей"
    },
    {
        title: <div>Корпус из&nbsp;высококачественного магниевого сплава</div>,
        subtitle: <div>Устойчивый к&nbsp;царапинам <br/>
            и&nbsp;изгибанию</div>
    },
    {
        title: "Высокоскоростная беспроводная связь",
        subtitle: "Wi-Fi 6E, Bluetooth 5.2 и 4G/5G"
    },
]
const infoMob = [
    {
        title: <div>Современный <br/> производительный ноутбук</div>,
        subtitle: <div>CPU последнего <br/> поколения</div>
    },
    {
        title: <div>Аппаратный <br/> контроль</div>,
        subtitle: <div>Над веб-камерой, <br/>
        микрофонами и&nbsp;адаптером <br/>
        беспроводной связи</div>
    },
    {
        title: "Автономный",
        subtitle: <div>Ёмкая батарея и&nbsp;быстрая<br/> зарядка на&nbsp;140W</div>
    },
    {
        title: <div>Идеально подходит<br/> для профессиональных<br/> задач</div>,
        subtitle: <div>16-дюймовый<br/> 4К-дисплей</div>
    },
    {
        title: <div>Корпус из&nbsp;высоко-<br/>качественного магниевого<br/> сплава</div>,
        subtitle: <div>Устойчивый к&nbsp;царапинам<br/> и&nbsp;изгибанию</div>
    },
    {
        title: <div>Высокоскоростная <br/> беспроводная связь</div>,
        subtitle: <div>Wi-Fi 6E, Bluetooth&nbsp;5.2<br/> и&nbsp;4G/5G</div>
    },
]

const LaptopBlock = () => {

    return (
        <div className={Styles.LaptopBlock}>
            <div className={Styles.title}>
                Производительный <br/>
                ноутбук
            </div>
            <div className={Styles.LaptopBlock__info}>
                <div className={Styles.info__left}>
                    {infoLeft.map((obj,index) => {
                        return <div className={Styles.item} key={index}>
                            <div className={Styles.item__title}>
                                {obj.title}
                            </div>
                            <div className={Styles.item__subtitle}>
                                {obj.subtitle}
                            </div>
                        </div>
                    })}
                </div>
                <div className={Styles.info__mob}>
                    {infoMob.map((obj,index) => {
                        return <div className={Styles.item} key={index}>
                            <div className={Styles.item__title}>
                                {obj.title}
                            </div>
                            <div className={Styles.item__subtitle}>
                                {obj.subtitle}
                            </div>
                        </div>
                    })}
                </div>
                <div className={Styles.info__center}>

                </div>
                <div className={Styles.info__right}>
                    {infoRight.map((obj,index) => {
                        return <div className={Styles.item} key={index}>
                            <div className={Styles.item__title}>
                                {obj.title}
                            </div>
                            <div className={Styles.item__subtitle}>
                                {obj.subtitle}
                            </div>
                        </div>
                    })}
                </div>
            </div>

        </div>
    );
};

export default LaptopBlock;