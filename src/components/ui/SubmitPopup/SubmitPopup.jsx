import React from 'react';
import classNames from 'classnames';
import Styles from './SubmitPopup.module.scss';
const SubmitPopup = ({ children, active, setActive, isSubmitMessage }) => {

    return (
        <div className={classNames(Styles.Modal, active === true && Styles.active)} onClick={() => setActive(false)}>
            <div className={Styles.Modal__content} onClick={e => e.stopPropagation()}>
                <div className={Styles.Modal__form}>
                    <div className={Styles.Modal__title}>
                        {isSubmitMessage ? 'Спасибо, ваша заявка отправлена!' : 'Ошибка при отправке запроса. Попробуйте снова!'}
                    </div>
                    <button className={Styles.form__button} onClick={() => { setActive(false) }}>
                        Понятно
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SubmitPopup;