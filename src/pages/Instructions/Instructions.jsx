import { useEffect } from 'react';
import Footer from '../../components/Footer/Footer'
import SecondaryHeader from '../../components/SecondaryHeader/SecondaryHeader';
import Styles from './Instructions.module.scss'

const Instructions = () => {
    
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    const links = [
        {
            text: 'Главная',
            href: '/'
        },
        {
            text: 'О нас',
            href: '/about'
        },
        {
            text: 'Документы',
            href: '/documents'
        }
    ]

    return (
        <div>
            <SecondaryHeader links={links} />
            <div className={Styles.Instructions}>
                <div className={Styles.Title}>
                    Инструкции по установке и&nbsp;использованию ПО
                </div>
            </div>
            <Footer />
        </div>

    );
};

export default Instructions;
