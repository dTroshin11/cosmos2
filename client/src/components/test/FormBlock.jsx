import React, {useEffect, useState} from "react";
import { useWindowSize } from '../../hooks/useWindowSize';
import * as yup from 'yup';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';


import Styles from '../../../../../Downloads/FormBlock/FormBlock.module.scss';
import classNames from "classnames";


import axios from "axios";

const BlockContent = ({ formBlockRef }) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://digitalb2b.mts.ru/widget/app.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);
    const { windowWidth } = useWindowSize();
    const [isChecked, setIsChecked] = useState(false);
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

    //  const schemaForm = yup.object().shape({
    //     name: yup
    //         .string()
    //         .required('Введите имя')
    //         .matches(/^([^0-9]*)$/, 'Имя не должно содержать цифр'),
    //      phone: yup.string().min(12, 'Введите корректный телефон').transform(cleanPhoneNumber),
    //     email: yup.string().required('Введите почту').email('Ведите корректную почту'),
    //      message: yup.string(),
    //      agreement: yup.boolean().oneOf([true], 'обязательное поле'),
    // });

    const schemaForm = yup.object().shape({
        name: yup
            .string()
            .required('Введите имя')
            .matches(/^([^0-9]*)$/, 'Имя не должно содержать цифр'),
        phone: yup.string().min(12, 'Введите корректный телефон').transform(cleanPhoneNumber),
        email: yup.string().required('Введите почту').email('Ведите корректную почту'),
        message: yup.string(),
        agreement: yup.boolean().oneOf([true], 'обязательное поле'),
    });


    // const formSubmit = (data) => {
    //     // const newData = JSON.parse(data)
    //     axios.post(data)
    //     console.log(data)
    // }


const test =  {
    "apikey" : "18WH7YhvxJb26UVZSIJhozKpThuhP7k7TnERRxnHCQMecr9bjrbbAi9zRDa3mo5bP1RtWtA"
    ,"action" : "member.set"
    ,"email": "trohin.danil2015@yandex.ru"
    ,"addr_type" : "email"
    ,"source" : "81.23.182.239"
    ,"newbie.confirm": "0"
    ,"datakey" : [
        [ "base.firstName", "set", "dima" ]
    ]
    ,"return_fresh_obj" : "0"
}

    const formSubmit = (data) => {
    const distData =  Object.values(data)
        console.log(distData);
    const email = distData[2]
    const name = distData[4]
        const newData =  {
            "apikey" : "18WH7YhvxJb26UVZSIJhozKpThuhP7k7TnERRxnHCQMecr9bjrbbAi9zRDa3mo5bP1RtWtA"
            ,"action" : "member.set"
            ,"email": email
            ,"addr_type" : "email"
            ,"source" : "81.23.182.239"
            ,"newbie.confirm": "0"
            ,"datakey" : [
                [ "base.firstName", "set", name ]
            ]
            ,"return_fresh_obj" : "0"
        }
        return instance
            .post('https://api.sendsay.ru/general/api/v100/json/x_1702990490671778', {newData} )
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.error('Ошибка при отправке запроса formSubmits:', error);
                throw error;
            });

        // console.log('data',data)
        // console.log('newData',newData)

    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onSubmit',
        resolver: yupResolver(schemaForm),
    });
  return (
      <div className={Styles.Block} >
        <div className={classNames(Styles.Title, Styles.Title_one)}>
          <h2>Обеспечивает безопасность и&nbsp;сохранность данных</h2>
        </div>
        <div className={classNames(Styles.Subtitle, Styles.Subtitle_one)}>

            {windowWidth <= 500 ? <p>Membrana позволяет минизимировать риски утечек коммерческой информации</p> :
                <p>Membrana позволяет минизимировать риски утечек коммерческой информации</p>}
        </div>
        <div className={Styles.HeadBlock} ref={formBlockRef} >
          <div className={classNames(Styles.Title, Styles.Title_two)}>
              {windowWidth <= 500   ?<h2>
                  Позаботьтесь
                  о&nbsp;команде
              </h2> : <h2>
                  Позаботьтесь
                  о&nbsp;команде
              </h2>}
          </div>
          <div className={classNames(Styles.Subtitle, Styles.Subtitle_two)}>
              {windowWidth <= 500
                  ? <p>Заполните форму&nbsp;&mdash; и&nbsp;мы&nbsp;с&nbsp;вами свяжемся. Покажем возможности для компаний и&nbsp;организуем демо Membrana </p>
                  : <p>Заполните форму&nbsp;&mdash; и&nbsp;мы&nbsp;с&nbsp;вами свяжемся. Покажем возможности для компаний и&nbsp;организуем демо Membrana</p>
              }
          </div>
        </div>
          <div className={Styles.FormWrapper} >

              <div
                  id='digital_highway'
                  data-bo-theme={'dark'}
                  data-product='PL0146'
                  data-bo-hide-extra={'comment attachment email'}
                  data-bo-subline={''}
                  data-bo-required-inn={'true'}
                  data-bo-required-name={'true'}
                  data-bo-header={''}
                  data-bo-custom-styles="membrana"
                  data-vitrine='membrana'
                  data-region='77'
              />

          </div>
    </div>
  );
};

export default BlockContent;