import React, { useState } from 'react';
import { useWindowSize } from '../../hooks/useWindowSize';

import Styles from './FagBlock.module.scss';
import FagItem from './FaqItem/FagItem';
import classNames from 'classnames';

const BlockContent = () => {
  const { windowWidth } = useWindowSize();
  const mobile = windowWidth <= 500;
  const SDFag = [
    {
      title: 'Как подключить Membrana?',
      content: (
        <div>
          <p>Чтобы стать абонентом Membrana, вам нужно:</p>{' '}
          <ol style={{ marginLeft: '-15px' }}>
            <li>Получить приглашение со&nbsp;ссылкой на&nbsp;скачивание и&nbsp;реферальным кодом от&nbsp;действующего абонента Membrana</li>
            <li>Скачать приложение Membrana</li>
            <li>Активировать реферальный код-приглашение</li>
          </ol>
        </div>
      ),
    },
    {
      title: <span>Какой пакет интернета, минут и&nbsp;SMS входит в&nbsp;Membrana</span>,
      content: (
        <div>
          <ol style={{ listStyle: 'disc', margin: '0', padding: '0 0 0 20px' }}>
            <li>Безлимитный интернет</li> <li>Безлимитные звонки на&nbsp;МТС</li>{' '}
            <li>5000 минут на&nbsp;звонки абонентам других операторов</li> <li>1000 SMS</li>
          </ol>
        </div>
      ),
    },
    {
      title: <span>Есть&nbsp;ли раздача интернета?</span>,
      content: <div>Да, в&nbsp;пакет входит 100&nbsp;ГБ в&nbsp;месяц.</div>,
    },
    {
      title: 'Какая зона покрытия?',
      content: <div>Сейчас та&nbsp;же, что и&nbsp;у&nbsp;МТС.</div>,
    },
    {
      title: <span>Какие условия в&nbsp;роуминге?</span>,
      content: (
        <div>
          В&nbsp;приложении Membrana вы&nbsp;сможете узнать цены в&nbsp;конкретной стране и&nbsp;заранее рассчитать свои траты
          в&nbsp;калькуляторе роуминга.
        </div>
      ),
    },
    {
      title: <span>Есть&nbsp;ли eSIM? Как его получить?</span>,
      content: (
        <div>
          <span>В&nbsp;приложении Membrana при заказе вы&nbsp;сможете выбрать вариант eSIM.</span>
          <br /> <span>Как её оформить:</span>
          <br />{' '}
          <ol style={{ marginLeft: '-15px' }}>
            <li>Авторизоваться через Госуслуги</li> <li>Подписать договор электронной подписью в&nbsp;приложении Госключ</li>{' '}
            <li>Получить QR-код на&nbsp;установку eSIM</li>
          </ol>
        </div>
      ),
    },
    {
      title: <span>Как перейти в&nbsp;Membrana со&nbsp;своим номером?</span>,
      content: (
        <div>
          В&nbsp;приложении Membrana при заказе есть отдельная ветка для перехода со&nbsp;своим номером. Для абонентов МТС это будет просто
          смена тарифа, а&nbsp;для абонентов других операторов&nbsp;&mdash; смена оператора с&nbsp;сохранением номера.
        </div>
      ),
    },
    {
      title: <span>На&nbsp;Membrana могут перейти абоненты других операторов?</span>,
      content: <div>Да, конечно.</div>,
    },
    {
      title: <span>Приложение Membrana создано для iOS и&nbsp;Android? Где его скачать?</span>,
      content: <div>Да, для iOS и&nbsp;Android. Приложение будет доступно в&nbsp;Google Play и&nbsp;App Store после запуска.</div>,
    },
    {
      title: <span>Что если мне нужны два номера?</span>,
      content: (
        <div>
          Для заказа второго номера Membrana вы&nbsp;можете воспользоваться одним из&nbsp;5&nbsp;реферальных кодов, выданных вместе
          с&nbsp;вашим первым номером.
        </div>
      ),
    },
    {
      title: 'Как работает маскировка IP?',
      content: (
        <div>
          Вы&nbsp;можете в&nbsp;любой момент изменить IP-адрес без передачи личных данных сторонним сервисам и&nbsp;лишней нагрузки
          на&nbsp;операционную систему смартфона и&nbsp;батарею.
        </div>
      ),
    },
    {
      title: <span>В&nbsp;каких странах находятся сервера для&nbsp; смены&nbsp;IP?</span>,
      content: <div>Три страны на выбор: Польша, Германия, Турция.</div>,
    },
    // {
    //   title: <span>Что такое приоритетное подключение?</span>,
    //   content: (
    //     <div>
    //       При подключении смартфона к&nbsp;базовым станциям&nbsp;&mdash; как в&nbsp;какой-то точке в&nbsp;городе, так
    //       и&nbsp;на&nbsp;транспорте&nbsp;&mdash; всегда действуют настройки приоритизации. У&nbsp;пользователей Membrana в&nbsp;сети самый
    //       высокий приоритет&nbsp;&mdash; это значит, что они подключаются быстрее и скорость в&nbsp;сети у&nbsp;них более чем
    //       в&nbsp;2&nbsp;раза выше. Ресурсы базовой станции распределяются между клиентами в&nbsp;зоне её&nbsp;действия: подключаются все,
    //       просто с&nbsp;разной скоростью.
    //     </div>
    //   ),
    // },
    {
      title: <span>Как работает сервис Голос?</span>,
      content: (
        <div>
          <p>
            Когда вы&nbsp;задали соответствующие настройки или когда просто не&nbsp;берёте трубку, на&nbsp;звонки в&nbsp;Мембране отвечает
            секретарь. Наш секретарь анализирует входящий вызов и&nbsp;принимает решение: отклонить сразу, поговорить самому
            и&nbsp;сохранить разговор или соединить с&nbsp;вами. Его задача&nbsp;&mdash; не&nbsp;только отсеять или принять на&nbsp;себя
            спам, но&nbsp;и&nbsp;передать вам всю существенную информацию. Для этого мы&nbsp;обучаем его на&nbsp;смоделированных
            и&nbsp;реальных диалогах.
          </p>
          <br />
          <strong>Как секретарь анализирует входящий вызов:</strong>
          <ol style={{ listStyle: 'disc', margin: '0', padding: '0 0 0 20px' }}>
            <li>
              Понимает, есть&nbsp;ли звонящий в&nbsp;контактах, а&nbsp;если нет, то&nbsp;самостоятельно анализирует, может&nbsp;ли владелец
              этого номера быть вашим знакомым.
            </li>{' '}
            <li>Проверяет, есть&nbsp;ли номер в&nbsp;базе известных доверенных организаций или в&nbsp;базе спамеров и&nbsp;мошенников.</li>{' '}
            <li>Определяет спамеров и&nbsp;мошенников с&nbsp;помощью искусственного интеллекта.</li>{' '}
            <li>
              Анализирует контекст разговора, чтобы понять цель звонка. Если действительно важно ответить сейчас&nbsp;&mdash; вы&nbsp;видите
              вызов, если нет, то&nbsp;секретарь общается сам и&nbsp;всё записывает.
            </li>
          </ol>
          <br />
          <p>
            Вы&nbsp;увидите уведомление с&nbsp;превью о&nbsp;новом разговоре и&nbsp;сможете прочитать расшифровку в&nbsp;удобное время.
            Диалог похож на&nbsp;обычную переписку в&nbsp;мессенджере.
          </p>
          <br />
          <p>
            Все эти настройки гибкие: если вы&nbsp;захотите, чтобы близкие и&nbsp;коллеги всегда дозванивались до&nbsp;вас
            немедленно&nbsp;&mdash; так и&nbsp;будет.
          </p>
        </div>
      ),
    },
    {
      title: <span>Сколько дополнительных номеров? Как ими пользоваться?</span>,
      content: (
        <div>
          Вы&nbsp;можете по&nbsp;очереди подключить до&nbsp;3&nbsp;дополнительных номеров. Используйте их&nbsp;для регистрации
          на&nbsp;различных интернет-ресурсах и&nbsp;в&nbsp;сервисах, чтобы не&nbsp;сообщать свой основной номер и&nbsp;не&nbsp;попадать под
          рекламный скоринг.
        </div>
      ),
    },
    {
      title: 'Для чего нужны профили?',
      content: (
        <div>
          По&nbsp;умолчанию создаются два профиля: &laquo;Общий&raquo; и&nbsp;&laquo;Не&nbsp;беспокоить&raquo;, но&nbsp;вы&nbsp;можете
          создать любые. Например, &laquo;Дом&raquo;, &laquo;Работа&raquo;, &laquo;Встреча&raquo;, &laquo;Отдых&raquo;. В&nbsp;каждом
          профиле действуют свои настройки для групп контактов: кто может до&nbsp;вас дозвониться и&nbsp;для кого вы&nbsp;в&nbsp;этом режиме
          недоступны.
        </div>
      ),
    },
    {
      title: 'Как управлять группами контактов?',
      content: (
        <div>
          Для управления входящим голосовым трафиком в&nbsp;приложении Membrana реализован механизм профилей. В&nbsp;настройках профиля все
          номера сначала разделены на&nbsp;Неизвестные номера и&nbsp;Номера из&nbsp;списка контактов. Для доступа к списку контактов вам
          необходимо предоставить соответствующее разрешение в&nbsp;приложении. Разрешение можно предоставить еще на&nbsp;этапе регистрации,
          либо выдать позже при создании группы контактов или напрямую в&nbsp;настройках операционной системы смартфона. Вы&nbsp;можете
          создать свои группы контактов (например, &laquo;Семья&raquo;, &laquo;Коллеги&raquo;, &laquo;Друзья&raquo;) и&nbsp;назначать
          им&nbsp;правила:<p> — Напрямую принимать звонки: «На меня».</p> <p>— Отправлять звонки на Секретаря.</p>
          <p>
            &mdash;&nbsp;Сбрасывать: &laquo;Блок&raquo;. Вы&nbsp;можете создать профили с&nbsp;разными правилами для одних
            и&nbsp;тех&nbsp;же групп контактов. Например, настроить профиль &laquo;Дом&raquo; таким образом, чтобы до&nbsp;вас могли
            дозвониться только друзья и&nbsp;родственники, а&nbsp;профиль &laquo;Работа&raquo;&nbsp;&mdash; чтобы дозвониться могли только
            коллеги и&nbsp;партнёры.
          </p>
        </div>
      ),
    },
    {
      title: 'Техподдержка',
      content: (
        <div>
          По всем вопросам:{' '}
          <a style={{ color: 'inherit', textDecoration: 'underline' }} href={'https://futurecrew.ru/'} target={'_blank'} rel='noreferrer'>
            futurecrew@mts.ru
          </a>
        </div>
      ),
    },
  ];

  const [activeItem, setActiveItem] = useState(null);
  const handleItemClick = (index) => {
    if (activeItem === index) {
      setActiveItem(null);
    } else {
      setActiveItem(index);
    }
  };
  return (
    <div className={Styles.Block}>
      <div className={Styles.HeadBlock}>
        <div className={classNames(Styles.Title, Styles.TitleOne)}>
          <h2>Скоро будет ещё больше возможностей</h2>
        </div>
        <div className={Styles.Subtitle}>
          <p>Мы регулярно добавляем новый функционал</p>
        </div>
      </div>
      <div className={Styles.HeadBlock}>
        <div className={classNames(Styles.Title, Styles.TitleTwo)}>
          <h2>Как всё устроено</h2>
        </div>
      </div>
      <div className={Styles.Faq}>
        {SDFag.map((obj, index) => {
          return (
            <FagItem
              isActive={activeItem === index}
              onItemClick={() => handleItemClick(index)}
              title={obj.title}
              content={obj.content}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BlockContent;
