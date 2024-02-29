import React, { useEffect, useState } from 'react';
import Styles from "./FormBlock.module.scss";
// import Checkbox from "../ui/Checkbox/Checkbox";
import FormPopup from "../ui/FormPopup/FormPopup";
import * as yup from 'yup';
import InputMask from 'react-input-mask';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios, { post } from "axios";
import classNames from "classnames";
import { date } from "yup";
import Checkbox from "../ui/Checkbox/Checkbox";

const FormBlock = ({ formBlockRef }) => {
    const [backend, setBackEnd] = useState([{}])
    // получение гетом списка данных юзера
    useEffect(() => {
        fetch('/api').then(
            response => response.json()
        ).then(
            data => {
                setBackEnd(data)
            }
        )
    }, []);
    function senToBack(data) {
        fetch('/api/form', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => response.json().then(data => {
            console.log("submit!" + " " + data)
        }))
    }


    const [popup, setPopup] = useState(false)
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
        email: yup.string().required('Введите почту').email('Ведите корректную почту'),
        agreement: yup.boolean().oneOf([true], 'обязательное поле'),
    });
    const formSubmit = (data) => {
        const distData = Object.values(data)
        senToBack(distData)
    }

    // const {
    //     register,
    //     handleSubmit,
    //     formState: { errors },
    // } = useForm({
    //     mode: 'onSubmit',
    //     resolver: yupResolver(schemaForm),
    // });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onSubmit',
        resolver: yupResolver(schemaForm),
    });

    return (
        <div className={Styles.FormBlock} ref={formBlockRef}>
            <div className={Styles.img} />
            <div className={Styles.info}>
                <div className={Styles.info__text}>
                    <div className={Styles.text__title}>
                        Актуальный и&nbsp;долговечный
                    </div>
                    <div className={Styles.text__subtitle}>
                        Ноутбук Vega Alpha не&nbsp;надо обновлять каждый год&nbsp;&mdash; устройство поставляется готовым к&nbsp;решению любых рабочих задач, а&nbsp;его мощности хватит
                        с&nbsp;запасом на&nbsp;несколько лет вперёд
                    </div>
                </div>
                {/*<div className={Styles.info__form}>*/}

                <form className={Styles.info__form} onSubmit={handleSubmit(formSubmit)}>
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
                            placeholder={'Номер*'}
                            className={Styles.form__input}
                        />
                        {errors['phone'] && <div className={Styles.errorText}>{errors['phone']?.message}</div>}
                    </div>
                    <div className={classNames(errors['email'] ? Styles.errorsInput : null, Styles.FormContainer)}>
                        <input id={'email'} {...register("email")} type={"text"} placeholder={'Почта*'} className={Styles.form__input} />
                        {errors['email'] && <div className={Styles.errorText}>{errors['email']?.message}</div>}
                    </div>
                    <div className={Styles.form__checkbox}>
                        <div className={Styles.checkbox__checkbox}>
                            <Checkbox id={'agreement'}/>
                        </div>
                        <div className={Styles.checkbox__text}>
                            Выражаю согласие с <a href="#">Политикой обработки персональных данных</a> и <a href="#">Условиями пользования сайтом</a>
                        </div>
                    </div>
                    <button className={Styles.form__button}>
                        Оставить заявку
                    </button>
                </form>
                {/* <form className={Styles.info__form}> */}
                    {/* <div className={Styles.form__title}>Оставьте заявку и убедитесь лично:</div> */}
                    {/*        <div className={ classNames(errors['name'] ? Styles.errorsInput : null,Styles.FormContainer)}>*/}
                    {/*          <input id={'name'} {...register("name")} type={"text"} placeholder={'ФИО*'} className={Styles.form__input}/>*/}
                    {/*          {errors['name'] && <div className={Styles.errorText}>{  errors['name']?.message}</div>}*/}
                    {/*        </div>*/}
                    {/*        /!*<input className={Styles.form__input} id={"name"} placeholder={"ФИО*"} type={"text"} />*!/*/}
                    {/*        <input className={Styles.form__input} placeholder={"Телефон*"} type={"text"} />*/}
                    {/*        <input className={Styles.form__input} placeholder={"Email*"} type={"text"} />*/}
                    {/*        <div className={Styles.form__checkbox}>*/}
                    {/*            <div className={Styles.checkbox__checkbox}>*/}
                    {/*                <Checkbox/>*/}
                    {/*            </div>*/}
                    {/*            <div className={Styles.checkbox__text}>*/}
                    {/*                Выражаю согласие с&nbsp;<a href="#">Политикой обработки персональных данных</a> и&nbsp;<a href="#">Условиями пользования сайтом</a>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <button className={Styles.form__button}>*/}
                    {/*            Оставить заявку*/}
                    {/* </button> */}
                {/* </form> */}
                <div className={Styles.info__mobForm}>
                    <div className={Styles.form__title}>Оставьте заявку и убедитесь лично:</div>
                    <button className={Styles.form__button} onClick={() => { setPopup(true) }}>
                        Оставить заявку
                    </button>
                </div>
                {/*</div>*/}
                <FormPopup active={popup} setActive={setPopup} />
            </div>
        </div>
    );
};

export default FormBlock;