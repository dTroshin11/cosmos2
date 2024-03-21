import React, { useEffect, useRef, useState } from 'react';
import Styles from "./FormBlock.module.scss";
import FormPopup from "../ui/FormPopup/FormPopup";
import * as yup from 'yup';
import InputMask from 'react-input-mask';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios, { post } from "axios";
import classNames from "classnames";

import CheckBox from '../ui/Checkbox/Checkbox';
import SubmitPopup from '../ui/SubmitPopup/SubmitPopup';
import { Link } from 'react-router-dom';


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
    const userDataTwo = { name: "danil", phone: "89967405143", email: "test@mail.ru" }
    //  отправка данных юзера постом
    function senToBack() {
        fetch('/api/form', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userDataTwo)
        }).then(response => response.json().then(data => {
            console.log("submit!" + " " + data)
        }))
    }
    // эмуляция вызова, пока закоментил для теста
    // senToBack()
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
        phone: yup.string().required('Введите телефон').min(12, 'В номере телефона должно быть не менее 11-ти цифр').transform(cleanPhoneNumber),
        email: yup.string().required('Введите почту').email('Введите корректную почту'),
        // message: yup.string(),
        // agreement: yup.boolean().oneOf([true], 'обязательное поле'),
    });
    const formSubmit = (data) => {
        const distData = Object.values(data)
        console.log(distData);
        const email = distData[0]
        const phone = distData[1]
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
                phone,
                name
            })
            .then((response) => {
                console.log(response)
                setValue('phone', '')
                reset()
                setIsSubmitMessage(true)
                setIsActiveSubmitPopup(true)
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
        reset,
        setValue,
    } = useForm({
        mode: 'onChange',
        resolver: yupResolver(schemaForm),
    });

    //логика модалки появляющейся при отправке
    const [isSubmitMessage, setIsSubmitMessage] = useState(false)
    const [isActiveSubmitPopup, setIsActiveSubmitPopup] = useState(false)

    return (
        <div className={Styles.FormBlock} ref={formBlockRef}>
            <div className={Styles.img} />
            <div className={Styles.info}>
                <div className={Styles.info__text}>
                    <div className={Styles.text__title}>
                        Актуальный и&nbsp;надёжный
                    </div>
                    <div className={Styles.text__subtitle}>
                        Ноутбук Vega Alpha не&nbsp;надо обновлять каждый год&nbsp;&mdash; устройство поставляется готовым к&nbsp;решению любых рабочих задач, а&nbsp;его мощности хватит
                        с&nbsp;запасом на&nbsp;несколько лет вперёд
                    </div>
                </div>
                <div className={Styles.info__form}>
                    <div className={Styles.form__title}>Оставьте заявку и убедитесь лично:</div>
                    <form className={Styles.info__form} onSubmit={handleSubmit(formSubmit)}>
                        <div className={Styles.FormContainer}>
                            <input id={'name'} {...register("name")} type={"text"} placeholder={'ФИО*'} className={classNames(errors['name'] ? Styles.errorsInput : null, Styles.form__input)} />
                        </div>
                        {errors['name'] && <div className={Styles.errorText}>{errors['name']?.message}</div>}
                        <div className={Styles.FormContainer}>
                            <InputMask
                                mask='+7 (999) 999-99-99'
                                maskChar=' '
                                id={'phone'}
                                {...register("phone")}
                                placeholder={'Телефон*'}
                                className={classNames(errors['phone'] ? Styles.errorsInput : null, Styles.form__input)}
                            />
                        </div>
                        {errors['phone'] && <div className={Styles.errorText}>{errors['phone']?.message}</div>}
                        <div className={Styles.FormContainer}>
                            <input id={'email'} {...register("email")} type={"text"} placeholder={'Email*'} className={classNames(errors['email'] ? Styles.errorsInput : null, Styles.form__input)} />
                        </div>
                        {errors['email'] && <div className={Styles.errorText}>{errors['email']?.message}</div>}
                        <div className={Styles.form__checkbox}>
                            <div className={Styles.checkbox__checkbox}>
                                <CheckBox />
                            </div>
                            <div className={Styles.checkbox__text}>
                                Выражаю согласие с&nbsp;<Link to={'agreements'}>Политикой обработки персональных данных</Link> и&nbsp;<Link to={'/personal-data-agreement'}>Условиями пользования сайтом</Link>
                            </div>
                        </div>
                        <button disabled={!isDirty || !isValid} className={Styles.form__button}>
                            Отправить
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
                </div>
                <div className={Styles.info__mobForm}>
                    <div className={Styles.form__title}>Оставьте заявку и убедитесь лично:</div>
                    <button className={Styles.form__button} onClick={() => { setPopup(true) }}>
                        Оставить заявку
                    </button>
                </div>
                <FormPopup active={popup} setActive={setPopup} />
                <SubmitPopup active={isActiveSubmitPopup} setActive={setIsActiveSubmitPopup} isSubmitMessage={isSubmitMessage} />
            </div>
        </div>
    );
};

export default FormBlock;