import React, { useState } from 'react';
import classNames from 'classnames';

import Styles from './FormPopup.module.scss';
import Checkbox from "../Checkbox/Checkbox";
import closeImg from '../../../assets/img/close.svg'
import InputMask from "react-input-mask";
import axios from "axios";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import SubmitPopup from '../SubmitPopup/SubmitPopup';

const FormPopup = ({ children, active, setActive }) => {

    const instance = axios.create({
        headers: {
            'Access-Control-Allow-Origin': '*',
            "Access-Control-Allow-Headers": "Access-Control-Allow-Headers",
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
        withCredentials: false,
    });
    const cleanPhoneNumber = (value) => {
        const cleanedValue = value.replace(/[\s()-]/g, '');
        return cleanedValue;
    };
    const schemaForm = yup.object().shape({
        name: yup.string().required('Введите ФИО').matches(/^([^0-9]*)$/, 'Имя не должно содержать цифр'),
        phone: yup.string().required('Введите телефон').min(12, 'Введите корректный телефон').transform(cleanPhoneNumber),
        email: yup.string().required('Введите почту').email('Введите корректную почту'),
        // message: yup.string(),
        // agreement: yup.boolean().oneOf([true], 'обязательное поле'),
    });
    const formSubmit = (data) => {
        const distData = Object.values(data)
        console.log(distData);
        const email = distData[0]
        const tel = distData[1]
        const name = distData[2]

        // const newData =  {
        //     "apikey" : "18WH7YhvxJb26UVZSIJhozKpThuhP7k7TnERRxnHCQMecr9bjrbbAi9zRDa3mo5bP1RtWtA"
        //     ,"action" : "member.set"
        //     ,"email": email
        //     ,"addr_type" : "email"
        //     ,"source" : "81.23.182.239"
        //     ,"newbie.confirm": "0"
        //     ,"datakey" : [
        //         [ "base.firstName", "set", name ]
        //     ]
        //     ,"return_fresh_obj" : "0"
        // }
        return instance
            .post('/api/form', {
                email,
                tel,
                name
            })
            .then((response) => {
                console.log(response)
                setIsSubmitMessage(true)
                setIsActiveSubmitPopup(true)
                setActive(false)        
            })
            .catch((error) => {
                console.error('Ошибка при отправке запроса formSubmits:', error);
                setIsSubmitMessage(false)
                setIsActiveSubmitPopup(true)
                throw error;
            });

        // console.log('data',data)
        // console.log('newData',newData)

    }

    const {
        register,
        handleSubmit,
        formState: { errors, isDirty, isValid },
    } = useForm({
        mode: 'onChange',
        resolver: yupResolver(schemaForm),
    });

    //логика модалки появляющейся при отправке
    const [isSubmitMessage, setIsSubmitMessage] = useState(false)
    const [isActiveSubmitPopup, setIsActiveSubmitPopup] = useState(false)

    return (
        <>
            <div className={classNames(Styles.Modal, active === true && Styles.active)} onClick={() => setActive(false)}>
                <div className={Styles.Modal__content} onClick={e => e.stopPropagation()}>
                    <div className={Styles.Modal__form}>
                        <div className={Styles.Modal__title}>
                            Оставить заявку
                            <div className={Styles.Modal__close} onClick={() => { setActive(false) }}>
                                <img src={closeImg} alt={"close"} />
                            </div>
                        </div>
                        {/*<form className={Styles.form}>*/}
                        {/*    <input  className={Styles.form__input} type={"text"} placeholder={"ФИО*"}/>*/}
                        {/*    <input  className={Styles.form__input} type={"text"} placeholder={"Телефон*"}/>*/}
                        {/*    <input  className={Styles.form__input} type={"text"} placeholder={"Email*"}/>*/}
                        {/*    <div className={Styles.form__checkbox}>*/}
                        {/*        <div className={Styles.checkbox__checkbox}>*/}
                        {/*            <Checkbox/>*/}
                        {/*        </div>*/}
                        {/*        <div className={Styles.checkbox__text}>*/}
                        {/*            Выражаю согласие с <a href="#">Политикой обработки персональных данных</a> и <a href="#">Условиями пользования сайтом</a>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    <button className={Styles.form__button}>*/}
                        {/*        Отправить*/}
                        {/*    </button>*/}
                        {/*</form>*/}
                        <form className={Styles.form} onSubmit={handleSubmit(formSubmit)}>
                            <div className={classNames(errors['name'] ? Styles.errorsInput : null, Styles.FormContainer)}>
                                <input id={'name'} {...register("name")} type={"text"} placeholder={'ФИО*'} className={Styles.form__input} />
                                {errors['name'] && <div className={Styles.errorText}>{errors['name']?.message}</div>}
                            </div>
                            <div className={classNames(errors['phone'] ? Styles.errorsInput : null, Styles.FormContainer)}>
                                <InputMask
                                    mask='+7 (999) 999-99-99'
                                    maskChar=' '
                                    id={'phone'}
                                    {...register("phone")}
                                    placeholder={'Телефон*'}
                                    className={Styles.form__input}
                                />
                                {errors['phone'] && <div className={Styles.errorText}>{errors['phone']?.message}</div>}
                            </div>
                            <div className={classNames(errors['email'] ? Styles.errorsInput : null, Styles.FormContainer)}>
                                <input id={'email'} {...register("email")} type={"text"} placeholder={'Email*'} className={Styles.form__input} />
                                {errors['email'] && <div className={Styles.errorText}>{errors['email']?.message}</div>}
                            </div>
                            <div className={Styles.form__checkbox}>
                                <div className={Styles.checkbox__checkbox}>
                                    <Checkbox />
                                </div>
                                <div className={Styles.checkbox__text}>
                                    Выражаю согласие с&nbsp;<a href="#">Политикой обработки персональных данных</a> и&nbsp;<a href="#">Условиями пользования сайтом</a>
                                </div>
                            </div>
                            <button className={Styles.form__button} disabled={!isDirty || !isValid}>
                                Отправить
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <SubmitPopup active={isActiveSubmitPopup} setActive={setIsActiveSubmitPopup} isSubmitMessage={isSubmitMessage}/>
        </>
    );
};

export default FormPopup;