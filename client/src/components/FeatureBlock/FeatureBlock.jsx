import React from 'react';
import Styles from "./FeatureBlock.module.scss";
import FeatureGuard from '../../assets/img/FeatureGuard.svg'
import FeatureCalc from '../../assets/img/FeatureCalc.svg'
import FeatureMove from '../../assets/img/FeatureMove.svg'

const item = [
    {
        title: <div>Контроль расходов</div>,
        text: <div>Низкая стоимость владения и&nbsp;быстрое развёртывание безопасных рабочих&nbsp;мест</div>
    },
    {
        title: <div>Встроенные средства&nbsp;защиты</div>,
        text: <div>
            Экономия на информационной безопасности в компании
        </div>
    },
    {
        title: <div>Удобный переход</div>,
        text: <div>Комфортная миграция и&nbsp;быстрый старт работы с&nbsp;привычными программами</div>
    },
]
const backgroundImage = [FeatureCalc, FeatureGuard, FeatureMove]
const FeatureBlock = () => {
    return (
        <div className={Styles.FeatureBlock}>
            <div className={Styles.title}>Легко встраиваемся <br />
                в&nbsp;инфраструктуру компаний
            </div>
            <div className={Styles.Features}>
                {item.map((el, index) => {
                    return <div className={Styles.Features__item} key={index}>
                        <div className={Styles.icon}
                            style={{
                                backgroundImage: `url(${backgroundImage[index]})`,
                            }}
                        />
                        <div className={Styles.title}>
                            {el.title}
                        </div>
                        <div className={Styles.text}>
                            {el.text}
                        </div>
                    </div>
                })}
            </div>

        </div>
    );
};

export default FeatureBlock;