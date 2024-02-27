import React from 'react';
import Container from '@components/ui/Container/Container';

import Styles from './Footer.module.scss';

const BlockContent = () => {
  return (
    <Container className={Styles.Container}>
      <div className={Styles.Footer}>
        <div className={Styles.title}>
          Документация
        </div>
        <div className={Styles.TopWrapper}>
          <a href={"#"}
            target="_blank"
            rel='noopener'
          >
            Пользовательские соглашения
          </a>

          <a href={"#"}
            target="_blank"
            rel='noopener'
          >
            Инструкции по установке и использованию ПО
          </a>
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
    </Container>

  );
};

export default BlockContent;



