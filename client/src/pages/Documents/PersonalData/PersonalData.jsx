import { Link } from "react-router-dom";
import Styles from './PersonalData.module.scss'
import { useEffect, useRef } from "react";
import Header from "../../../components/Header/Header";
import Back from "../../../components/ui/Back/Back";

const PersonalData = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const licenseRef = useRef(null)
    const termsOfUseRef = useRef(null)

    const scrollToFormBlock = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    const items = [
        {
            text: <>Заполняя &laquo;Заявку&raquo; на&nbsp;интернет-сайте vega-alpha.ru, и&nbsp;нажимая кнопку &laquo;Отправить&raquo;, Пользователь, действуя свободно, своей волей и&nbsp;в&nbsp;своем интересе выражает согласие Публичному акционерному обществу &laquo;Мобильние ТелеСистемы&raquo; (109147, г. Москва, ул. Марксистская, д.&nbsp;4) (далее
                по&nbsp;тексту&nbsp;&mdash; Оператор) на&nbsp;обработку своих персональных данных, а&nbsp;также подтверждает факт ознакомления с&nbsp;&quot;Политикой &laquo;Обработка персональных данных ПАО &laquo;МТС&raquo; ПТ-010&nbsp;&mdash; <a class={Styles.Link} href="https://moskva.mts.ru/about/investoram-i-akcioneram/korporativnoe-upravlenie/dokumentipao-
                            mts/politika-obrabotka-personalnih-dannih-v-pao-mts" target="_blank" rel="noopener noreferrer">https://moskva.mts.ru/about/investoram-i-akcioneram/korporativnoe-upravlenie/dokumentipao-
                    mts/politika-obrabotka-personalnih-dannih-v-pao-mts</a>
            </>
        },
        {
            text: <>Настоящее Согласие дается на&nbsp;обработку персональных данных, которые были введены Пользователем в&nbsp;форму обратной связи (&laquo;Оставьте заявку&raquo;) на&nbsp;интернет-сайте vega-alpha.ru, а&nbsp;именно: <br />
                &mdash;&nbsp;фамилия, имя, отчество (либо любой другой &laquo;никнейм&raquo;, который был введен в&nbsp;поле Заявки &laquo;ФИО&raquo;); <br />
                &mdash;&nbsp;контактная информация (номер телефона,который был введен в&nbsp;поле Заявки &laquo;Номер&raquo;; адрес электронной почты, который был введен в&nbsp;поле Заявки &laquo;Почта&raquo;).</>
        },
        {
            text: <>Оператор вправе осуществлять обработку персональных данных в&nbsp;целях рассмотрения &laquo;Заявки на&nbsp;тестирование продукта&raquo;; информационного взаимодействия Оператора с&nbsp;Пользователем по&nbsp;вопросам, связанным с&nbsp;предоставлением сервиса &laquo;Vega Alpha&raquo;, либо иным вопросам, Пользователя, поступившим посредством формы обратной связи, размещенной на&nbsp;интернет-сайте <a className={Styles.Link} href="http://vega-alpa.ru" target="_blank" rel="noopener noreferrer">vega-alpha.ru</a>.</>
        },
        {
            text: <>Оператор вправе осуществлять обработку персональных данных Пользователя с&nbsp;использованием средств автоматизации и/или без использования таковых средств путем осуществления следующих действий (операций)&nbsp;&mdash; сбор, запись, систематизация, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передача (предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных.</>
        },
        {
            text: <>Настоящее согласие действует с&nbsp;даты его предоставления Пользователем и&nbsp;до&nbsp;момента достижения заявленных в&nbsp;настоящем Согласии целей обработки персональных данных, с&nbsp;учетом сроков, предусмотренных действующим законодательством Российской Федерации.</>
        },
        {
            text: <>Пользователь вправе в&nbsp;любое время отозвать настоящее согласие путем направления Оператору соответствующего заявления по&nbsp;адресу&nbsp;&mdash; 109147, г. Москва, ул. Марксистская, д.&nbsp;4.</>
        },
    ]


    return (
        <div>
            <Header />
            <div className={Styles.Documents}>
                <Back className={Styles.MobileBack} />
                <div className={Styles.Menu}>
                    <div className={Styles.Links}>
                        <Back className={Styles.Back} />
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