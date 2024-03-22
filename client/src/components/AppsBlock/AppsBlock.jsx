import React, {useState} from 'react';
import Styles from './AppsBlock.module.scss';
import classNames from "classnames";

import bird from '../../assets/img/apps/apps_bird.svg'
import chrome from '../../assets/img/apps/apps_chrome.svg'
import cloud from '../../assets/img/apps/apps_cloud.svg'
import fox from '../../assets/img/apps/apps_fox.svg'
import obsidian from '../../assets/img/apps/apps_obsidian.svg'
import tg from '../../assets/img/apps/apps_tg.svg'
import vm from '../../assets/img/apps/apps_vm.svg'
import vsCode from '../../assets/img/apps/apps_vsCode.svg'
import mail from '../../assets/img/apps/apps_mail.svg'
import calculate from '../../assets/img/apps/apps_calculate.svg'
import office from '../../assets/img/apps/apps_office.svg'
import note from '../../assets/img/apps/apps_note.svg'
import libre from '../../assets/img/apps/apps_libre.svg'
import krita from '../../assets/img/apps/apps_krita.svg'
import kion from '../../assets/img/apps/apps_kion.svg'
import calendar from '../../assets/img/apps/apps_calendar.svg'
import vpn from '../../assets/img/apps/apps_vpn.svg'


import FormPopup from "../ui/FormPopup/FormPopup";

const topSpin = [bird,chrome,cloud,fox,vsCode,office,note,kion]
const botSpin = [obsidian,tg,vm,vpn,mail,calculate,libre,krita,calendar]


const AppsBlock = ({formBlockRef}) => {
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
        <div className={Styles.Apps}>
            <div className={Styles.Apps__info}>
                <div className={Styles.Apps__texts}>
                    <div className={Styles.texts_title}>
                        Широкий перечень <br/>
                        поддерживаемого&nbsp;ПО*
                    </div>
                    <div className={Styles.texts_subtitle}>
                        Запускайте любые, даже самые ресурсоёмкие Windows-приложения<br/> с&nbsp;минимальным падением производительности
                    </div>
                </div>
                <div className={Styles.Apps__mob}>
                    <div className={Styles.items_wrap}>
                        <div className={classNames(Styles.items, Styles.marquee)}>
                            {topSpin.map((obj, index) => {
                                return    <div key={index} className={Styles.item} style={{backgroundImage: `url(${obj})`}}></div>
                            })}
                        </div>
                        <div aria-hidden="true" className={classNames(Styles.items, Styles.marquee)}>
                            {topSpin.map((obj, index) => {
                                return    <div key={index} className={Styles.item} style={{backgroundImage: `url(${obj})`}}></div>
                            })}
                        </div>
                    </div>
                    <div className={Styles.items_wrap}>
                        <div className={classNames(Styles.items, Styles.marquee, Styles.reverce)}>
                            {botSpin.map((obj, index) => {
                                return    <div key={index} className={Styles.item} style={{backgroundImage: `url(${obj})`}}></div>
                            })}
                        </div>
                        <div aria-hidden="true" className={classNames(Styles.items, Styles.marquee, Styles.reverce)}>
                            {botSpin.map((obj, index) => {
                                return    <div key={index} className={Styles.item} style={{backgroundImage: `url(${obj})`}}></div>
                            })}
                        </div>
                    </div>
                </div>
                <div className={Styles.Apps__GoForm}>
                    <div className={Styles.Apps__desk}>
                        <div className={Styles.Apps__button} onClick={scrollToFormBlock}>
                            Оставить заявку
                        </div>
                    </div>
                    <div className={Styles.Apps__mob}>
                        <div className={Styles.Apps__button} onClick={() => {setPopup(true)}}>
                            Оставить заявку
                        </div>
                    </div>
                    <div className={Styles.Apps__buttonInfo}>
                        *Не&nbsp;предустановлены на&nbsp;ноутбуке Vega Alpha<br/>
                        Установить данные приложения пользователь может самостоятельно
                    </div>
                </div>
                <FormPopup active={popup} setActive={setPopup}/>
            </div>
            <div className={Styles.Apps__img}/>
        </div>
    );
};

export default AppsBlock;