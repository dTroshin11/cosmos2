import { Link } from "react-router-dom";
import Styles from './PersonalData.module.scss'
import { useEffect, useRef } from "react";
import Header from "../../../components/Header/Header";

const PersonalData = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    // const [showAnchors, setShowAnchors] = useState(true)

    const licenseRef = useRef(null)
    const termsOfUseRef = useRef(null)

    const scrollToFormBlock = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };


    // const bgBlack = {
    //     background: '#000'
    // }

    // const links = [
    //     {
    //         text: 'Главная',
    //         href: '/'
    //     },
    //     {
    //         text: 'О нас',
    //         href: '/about'
    //     },
    //     {
    //         text: <>Инструкции по&nbsp;установке и&nbsp;использованию ПО</>,
    //         href: '/instructions'
    //     },
    //     {
    //         text: <>Электронное лицензионное соглашение с&nbsp;конечным пользователем</>,
    //         href: licenseRef
    //     },
    //     {
    //         text: <>Пользовательское соглашение об&nbsp;использовании Cервиса ИИ-Помощник</>,
    //         href: termsOfUseRef
    //     },
    // ]

    const items = [
        {
            text: <>Заполняя «Заявку» на интернет-сайте vega-alpha.ru, и нажимая кнопку «Отправить», Пользователь, действуя свободно, своей волей и в своем интересе выражает согласие Публичному акционерному обществу «Мобильние ТелеСистемы» (109147, г. Москва, ул. Марксистская, д. 4) (далее
                по тексту – Оператор) на обработку своих персональных данных, а также подтверждает факт ознакомления с «Политикой «Обработка персональных данных ПАО «МТС» ПТ-010 - <a class={Styles.Link} href="https://moskva.mts.ru/about/investoram-i-akcioneram/korporativnoe-upravlenie/dokumentipao-
            mts/politika-obrabotka-personalnih-dannih-v-pao-mts" target="_blank" rel="noopener noreferrer">https://moskva.mts.ru/about/investoram-i-akcioneram/korporativnoe-upravlenie/dokumentipao-
                    mts/politika-obrabotka-personalnih-dannih-v-pao-mts</a>
            </>
        },
        {
            text: <>Настоящее Согласие дается на обработку персональных данных, которые были введены Пользователем в форму обратной связи («Оставьте заявку»)  на интернет-сайте vega-alpha.ru, а именно: <br />
                - фамилия, имя, отчество (либо любой другой «никнейм», который был введен в поле Заявки «ФИО»); <br />
                - контактная информация (номер телефона,который был введен в поле Заявки «Номер»; адрес электронной почты, который был введен в поле Заявки «Почта»).</>
        },
        {
            text: <>Оператор вправе осуществлять обработку персональных данных в целях рассмотрения «Заявки на тестирование продукта»; информационного взаимодействия Оператора с Пользователем по вопросам, связанным с предоставлением сервиса «Vega Alpha», либо иным вопросам, Пользователя, поступившим посредством формы обратной связи, размещенной на интернет-сайте <a className={Styles.Link} href="http://vega-alpa.ru" target="_blank" rel="noopener noreferrer">vega-alpha.ru</a>.</>
        },
        {
            text: <>Оператор вправе осуществлять обработку персональных данных Пользователя с использованием средств автоматизации и/или без использования таковых средств путем осуществления следующих действий (операций) – сбор, запись, систематизация, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передача (предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных.</>
        },
        {
            text: <>Настоящее согласие действует с даты его предоставления Пользователем и до момента достижения заявленных в настоящем Согласии целей обработки персональных данных, с учетом сроков, предусмотренных действующим законодательством Российской Федерации.</>
        },
        {
            text: <>Пользователь вправе в любое время отозвать настоящее согласие путем направления Оператору соответствующего заявления по адресу - 109147, г. Москва, ул. Марксистская, д. 4.</>
        },
    ]


    return (
        <div>
            <Header />
            <div className={Styles.Documents}>
            <Link className={Styles.MobileBack} to="/agreements">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path d="M19 13H5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M11 19L5 13" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M11 7L5 13" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                Назад</Link>
                <div className={Styles.Menu}>
                    <div className={Styles.Links}>
                        <Link className={Styles.Back} to="/agreements">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                <path d="M19 13H5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M11 19L5 13" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M11 7L5 13" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            Назад</Link>
                        <ul>
                            <li><Link to="/end-user-agreement">Электронное лицензионное соглашение с&nbsp;конечным пользователем</Link></li>
                            <li><Link to="/user-agreement-ai">Пользовательское соглашение об&nbsp;использовании Cервиса ИИ-Помощник</Link></li>
                            <li><Link className={Styles.Active} to="/personal-data-agreement">Согласие на обработку персональных данных</Link></li>
                        </ul>
                    </div>
                </div>
                <div className={Styles.Content}>
                    <div id={"1"} name={"1"} ref={licenseRef} className={Styles.Title}>
                        Согласие на обработку персональных данных
                    </div>
                    <div className={Styles.ItemList}>
                        {items.map((obj, index) => {
                            return <div className={Styles.Item} key={index}>
                                <div className={Styles.ItemText}>
                                    {obj.text}
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
            <div className={Styles.Footer}>
                <div className={Styles.Divider}></div>
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
        </div>    
    );
};

export default PersonalData; 