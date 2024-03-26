import React from 'react';
import Styles from './Footer.module.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
      <div className={Styles.Footer}>
        <div className={Styles.title}>
          Документация
        </div>
        <div className={Styles.TopWrapper}>
          <Link to={"/agreements"}
            rel='noopener'
          >
            Пользовательские соглашения
          </Link>

          <Link to={""}
            rel='noopener'
          >
            Инструкции по&nbsp;установке и&nbsp;использованию ПО
          </Link>
        </div>
        <div className={Styles.divider}></div>
        <div className={Styles.BottomWrapper}>
          <div className={Styles.LeftLink}>
            <a
              href={
                'https://moskva.mts.ru/about/investoram-i-akcioneram/korporativnoe-upravlenie/dokumenti-pao-mts/politika-obrabotka-personalnih-dannih-v-pao-mts'
              }
              target={'_blank'}
              rel='noopener'
            >
              Политика обработки персональных данных
            </a>
          </div>
          <div className={Styles.RightLink}>

            <p>
              Продукт разработан командой <a href={'https://futurecrew.ru/'} target={'_blank'} rel='noopener'>FutureCrew</a>
            </p>

            <p>© 2024. Все права защищены</p>
          </div>
        </div>
      </div>
  );
};

export default Footer;



