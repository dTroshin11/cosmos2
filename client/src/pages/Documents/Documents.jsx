import { Link } from "react-router-dom";
import Styles from './Documents.module.scss'
import { useEffect, useRef } from "react";
import Header from "../../components/Header/Header";

const Documents = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    // const [showAnchors, setShowAnchors] = useState(true)

    const licenseRef = useRef(null)
    const termsOfUseRef = useRef(null)

    const scrollToFormBlock = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };


    return (
        <>
            <div className={Styles.Documents}>
                <Header />
                <Link className={Styles.Back} to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <path d="M19 13H5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M11 19L5 13" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M11 7L5 13" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    Назад</Link>
                <div className={Styles.Title}>Пользовательские <br />
                    соглашения</div>
                <div className={Styles.Links}>
                    <ul>
                        <li><Link to="/end-user-agreement">Электронное лицензионное соглашение с&nbsp;конечным пользователем</Link></li>
                        <li><Link to="/user-agreement-ai">Пользовательское соглашение об&nbsp;использовании Cервиса ИИ-Помощник</Link></li>
                        <li><Link to="/personal-data-agreement">Согласие на обработку персональных данных</Link></li>
                    </ul>
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
        </>
    );
};

export default Documents;
