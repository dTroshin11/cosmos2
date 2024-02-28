import { Link } from "react-router-dom";
import SecondaryHeader from "../../components/SecondaryHeader/SecondaryHeader";
import Styles from './Documents.module.scss'

const Documents = () => {

    const links = [
        {
            text: 'Электронное лицензионное соглашение с конечным пользователем',
            href: '#1'
        },
        {
            text: 'Пользовательское соглашение об использовании Cервиса ИИ-Помощник',
            href: '#2'
        }
    ]

    const item = [
        {
            number: <>1.1.</>,
            text: <>Запрещенный Контент – Контент Пользователя и/или Сгенерированный Контент, нарушающий требования законодательства Российской Федерации, права третьих лиц, общепринятые нормы морали и этики, а также Контент Пользователя и/или Сгенерированный Контент,который может повлечь нарушение указанных требований, прав и норм. Правообладательвправе самостоятельно по своему усмотрению определять список Запрещенного Контента.</>
        },
        {
            number: <>1.2.</>,
            text: <>Запрос – размещение(загрузка, демонстрация) Контента Пользователя с использованием Сервиса через его интерфейс;</>
        },
        {
            number: <>1.3.</>,
            text: <>Использование Сервиса – любоедействие и/или взаимодействие Пользователя с Сервисом и/или любым его функционалом, включая, но не ограничиваясь, направление запросов, команд, активация функционала Сервиса, осуществление других действий с Сервисом;</>
        },
        {
            number: <>1.4.</>,
            text: <>Контент Пользователя – любая информация и результаты интеллектуальной деятельности, размещаемые (загружаемые) и демонстрируемые Пользователем путем использования Сервиса;</>
        },
        {
            number: <>1.5.</>,
            text: <>Пользователь – совершеннолетнее, полностью дееспособное физическое лицо, достигшее возраста 18 (восемнадцать) лет, заключившее с Правообладателем настоящее Соглашение и являющееся гражданином Российской Федерации;</>
        },
        {
            number: <>1.6.</>,
            text: <>Сгенерированный Контент –элементы, информация, иные объекты, представленные в текстовом формате, сгенерированные (созданные) Пользователем с помощью Сервиса, являющиеся результатами интеллектуальной деятельности / средствами индивидуализации или не являющиеся таковыми, права (в том числе исключительное право на результаты интеллектуальной деятельности/средства индивидуализации) на которые принадлежат Пользователю;</>
        },
        {
            number: <>1.7.</>,
            text: <>Сервис ИИ-Помощник /Сервис – программа для ЭВМ, функционирующая с применением технологий искусственного интеллекта, исключительные права на которую принадлежат Правообладателю, способная создавать Сгенерированный Контент в текстовом формате в ответ на Запрос Пользователя. Под Сервисом также понимается все его обновления и новые версии, которые Правообладатель может, но не обязан, предоставлять Пользователю.</>
        }
    ]

    return (
        <>
            <SecondaryHeader links={links} />
            <div className={Styles.Documents}>
                <div className={Styles.Menu}>
                    <div className={Styles.Links}>
                        <Link to="/">Вернуться назад</Link>
                        <Link to="#1">Электронное лицензионное соглашение с конечным пользователем</Link>
                        <Link to="#2">Пользовательское соглашение об использовании Cервиса ИИ-Помощник</Link>
                    </div>
                </div>
                <div className={Styles.Content}>
                    <div className={Styles.Title}>
                        Пользовательские <br />
                        соглашения
                    </div>
                    <div className={Styles.SubTitle}>
                        Пользовательское соглашение об использовании сервиса ИИ-Помощник
                    </div>
                    <div className={Styles.Text}>
                        <div>Настоящее соглашение регулирует использование Сервиса ИИ-Помощник
                            Пользователем в операционной системе «Cosm OS» и устанавливает связанные с этим гражданские права и обязанности Пользователя
                            и Правообладателем (далее - «Соглашение»). Настоящее соглашение является неотъемлемой частью Электронного лицензионного соглашения с конечным пользователем на использование операционной системы «Cosm OS».
                        </div>
                        <div>
                            Используя Сервис, Пользователь тем самым принимает и обязуется выполнять все без исключения условия настоящего Соглашения.
                        </div>
                    </div>
                    <div className={Styles.ListTitle}>
                        1. ТЕРМИНЫ И ОПРЕДЕЛЕНИЯ
                    </div>
                    <div className={Styles.ListText}>
                        Для целей Соглашения нижеуказанные термины имеют следующие значения:
                    </div>
                    <div className={Styles.ItemList}>
                        {item.map((obj, index) => {
                            return <div className={Styles.Item} key={index}>
                                <div className={Styles.ItemNumber}>
                                    {obj.number}
                                </div>
                                <div className={Styles.ItemText}>
                                    {obj.text}
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Documents;
