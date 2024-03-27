import { useEffect } from 'react';
import Footer from '../../components/Footer/Footer'
import Styles from './Instructions.module.scss'
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';

const Instructions = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const items = [
        {
            text: 'Инструкция такая-то',
            href: '/',
            size: '650 КБ'
        },
        {
            text: 'Инструкция такая-то',
            href: '/',
            size: '650 КБ'
        },
        {
            text: 'Инструкция такая-то',
            href: '/',
            size: '650 КБ'
        },
        {
            text: 'Инструкция такая-то',
            href: '/',
            size: '650 КБ'
        },
        {
            text: 'Инструкция такая-то',
            href: '/',
            size: '650 КБ'
        },
        {
            text: 'Инструкция такая-то',
            href: '/',
            size: '650 КБ'
        },
        {
            text: 'Инструкция такая-то',
            href: '/',
            size: '650 КБ'
        },
                {
            text: 'Инструкция такая-то',
            href: '/',
            size: '650 КБ'
        },
    ]

    const pdfIcon = <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
        <g clip-path="url(#clip0_3668_5196)">
            <path d="M21 4.5V10.5C21 10.8978 21.158 11.2794 21.4393 11.5607C21.7206 11.842 22.1022 12 22.5 12H28.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M7.5 18V7.5C7.5 6.70435 7.81607 5.94129 8.37868 5.37868C8.94129 4.81607 9.70435 4.5 10.5 4.5H21L28.5 12V18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M7.5 27H9.75C10.3467 27 10.919 26.7629 11.341 26.341C11.7629 25.919 12 25.3467 12 24.75C12 24.1533 11.7629 23.581 11.341 23.159C10.919 22.7371 10.3467 22.5 9.75 22.5H7.5V31.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M25.5 27H28.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M30 22.5H25.5V31.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M16.5 22.5V31.5H18C18.7956 31.5 19.5587 31.1839 20.1213 30.6213C20.6839 30.0587 21 29.2956 21 28.5V25.5C21 24.7044 20.6839 23.9413 20.1213 23.3787C19.5587 22.8161 18.7956 22.5 18 22.5H16.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_3668_5196">
                <rect width="36" height="36" fill="white" />
            </clipPath>
        </defs>
    </svg>

    const uploadIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <g clip-path="url(#clip0_3668_5207)">
            <path d="M2.66699 11.3335V12.6668C2.66699 13.0205 2.80747 13.3596 3.05752 13.6096C3.30756 13.8597 3.6467 14.0002 4.00033 14.0002H12.0003C12.3539 14.0002 12.6931 13.8597 12.9431 13.6096C13.1932 13.3596 13.3337 13.0205 13.3337 12.6668V11.3335" stroke="#818AA7" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M4.66699 7.3335L8.00033 10.6668L11.3337 7.3335" stroke="#818AA7" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M8 2.66675V10.6667" stroke="#818AA7" stroke-linecap="round" stroke-linejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_3668_5207">
                <rect width="16" height="16" fill="white" />
            </clipPath>
        </defs>
    </svg>

    return (
        <div>
            <Header />
            <div className={Styles.Instructions}>
                <Link className={Styles.MobileBack} to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <path d="M19 13H5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M11 19L5 13" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M11 7L5 13" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    Назад</Link>
                <div className={Styles.Title}>
                    Инструкции по&nbsp;установке и&nbsp;использованию ПО
                </div>
                <div className={Styles.Items}>
                    {items.map((item, index) => {
                        return <a href={item.href} className={Styles.Item}>
                            <div className={Styles.ItemLeft}>
                                <div className={Styles.PdfIcon}>
                                    {pdfIcon}
                                </div>
                                <div className={Styles.ItemLink}>
                                    {item.text}
                                </div>
                            </div>
                            <div className={Styles.ItemRight}>
                                <div className={Styles.ItemSize}>
                                    {item.size}
                                </div>
                                <div className={Styles.UploadItem}>
                                    {uploadIcon}
                                </div>
                            </div>
                        </a>
                    })}
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

export default Instructions;
