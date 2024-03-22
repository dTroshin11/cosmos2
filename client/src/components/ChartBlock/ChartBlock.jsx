import React, {useState} from 'react';
import Styles from "./ChartBlock.module.scss";
import FormPopup from "../ui/FormPopup/FormPopup";

const ChartBlock = ({formBlockRef}) => {
    const [popup ,setPopup] = useState(false)
    // const scrollToTop = () => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: 'smooth',
    //     });
    // };

    const scrollToFormBlock = () => {
        formBlockRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <div className={Styles.ChartBlock}>
            <div className={Styles.chart__info}>
                <div className={Styles.texts}>
                    <div className={Styles.info_title}>
                        Атак больше,<br/>
                        защита дороже
                    </div>
                    <div className={Styles.info_subtitle}>
                        На&nbsp;ИБ&nbsp;компании теперь тратят больше
                    </div>
                    <div className={Styles.info_text}>
                        Количество кибератак ежегодно растёт&nbsp;&mdash; в&nbsp;2022 оно выросло на&nbsp;20%, таргетированные атаки коснулись&nbsp;35% компаний. К&nbsp;2025 году они затронут уже каждую вторую компанию*
                    </div>
                </div>
                <div className={Styles.info_go}>
                    <div className={Styles.info_button} onClick={scrollToFormBlock}>Оставить заявку</div>
                    <div className={Styles.info_buttonText}>*на&nbsp;основе данных из&nbsp;открытых источников</div>
                </div>
            </div>
            <div className={Styles.Chart__img}></div>
            <div className={Styles.info_goMob}>
                <div className={Styles.info_button} onClick={() => {setPopup(true)}}>Оставить заявку</div>
                <div className={Styles.info_buttonText}>*на&nbsp;основе данных из&nbsp;открытых источников</div>
            </div>
            <FormPopup active={popup} setActive={setPopup}/>
        </div>
    );
};

export default ChartBlock;