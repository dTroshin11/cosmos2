import Styles from './About.module.scss'
import Cpo from '../../assets/img/AboutCpo.png'
import Cto from '../../assets/img/AboutCto.png'
import CpoMobile from '../../assets/img/aboutCpoMobile.png'
import CtoMobile from '../../assets/img/aboutCtoMobile.png'
import { useWindowSize } from '../../hooks/useWindowSize'
import Footer from '../../components/Footer/Footer'
import { useEffect } from 'react'
import Header from '../../components/Header/Header'
import { Link } from 'react-router-dom'

const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    // const links = [
    //     {
    //         text: 'Главная',
    //         href: '/'
    //     },
    //     {
    //         text: 'Документация',
    //         href: '/documents'
    //     }
    // ]

    const { windowWidth } = useWindowSize()

    const items = [
        {
            image: Cpo,
            imageMobile: CpoMobile,
            name: 'Сергей Коренев',
            jobTitle: 'СРО'
        },
        {
            image: Cto,
            imageMobile: CtoMobile,
            name: 'Василий Карташов',
            jobTitle: 'CTO'
        }
    ]

    return (
        <div className={Styles.About}>
            <Header />
            <Link className={Styles.Back} to="/">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path d="M19 13H5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M11 19L5 13" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M11 7L5 13" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                Назад</Link>
            <div className={Styles.HeroBlock}>
                <div className={Styles.HeroContent}>
                    <div className={Styles.Title}>О нас</div>
                    <div className={Styles.Text}>
                        <div className={Styles.Mission}>
                            Наша миссия — создать конкурентную, доступную и&nbsp;безопасную экосистему продуктов для&nbsp;защиты частной жизни пользователей в&nbsp;цифровом пространстве.
                        </div>
                        <div className={Styles.Description}>
                            <div>Мы верим, что она позволит контролировать персональные данные и&nbsp;избегать рисков трекинга, слежки, таргетированной рекламы, персонализированных маркетинговых действий и&nbsp;манипуляций мнением, восприятием и&nbsp;выбором.</div>
                            <div>Наша команда делает всё, чтобы наш клиент мог не&nbsp;беспокоиться о&nbsp;своей безопасности и&nbsp;приватности.</div>
                        </div>
                    </div>

                </div>
            </div>
            <div className={Styles.DirectionBlock}>
                {items.map((obj, index) => {
                    return <div className={Styles.Person} key={index}>
                        <div className={Styles.Image}>
                            <img src={windowWidth <= 768 ? obj.imageMobile : obj.image} alt="" />
                        </div>
                        <div className={Styles.Name}>
                            {obj.name}
                        </div>
                        <div className={Styles.JobTitle}>
                            {obj.jobTitle}
                        </div>
                    </div>
                })}
            </div>
            <Footer />
        </div>
    );
};

export default About;
