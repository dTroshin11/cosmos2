import React from 'react';
import classNames from 'classnames';
import Styles from './SubmitPopup.module.scss';
import closeImg from "../../../assets/img/close.svg";
import InputMask from "react-input-mask";
import Checkbox from "../Checkbox/Checkbox";
const SubmitPopup = ({ children, active, setActive, isSubmitMessage }) => {

    return (
        <div className={classNames(Styles.Modal, active === true && Styles.active)} onClick={() => setActive(false)}>
            <div className={Styles.Modal__content} onClick={e => e.stopPropagation()}>
                <div className={Styles.Modal__form}>
                    <div className={Styles.Modal__title}>
                        {isSubmitMessage ? 'Спасибо, ваша заявка отправлена!' : <span>Ошибка при отправке запроса.<br/> Попробуйте снова!</span>}
                        <div className={Styles.Modal__close} onClick={() => { setActive(false) }}>
                            <img src={closeImg} alt={"close"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubmitPopup;