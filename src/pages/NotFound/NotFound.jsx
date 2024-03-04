import { useEffect } from 'react';
import Footer from '../../components/Footer/Footer'
import SecondaryHeader from '../../components/SecondaryHeader/SecondaryHeader';


const NotFound = () => {

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
                <div style={{padding: '240px 0 24px 0', fontSize: '222px', textAlign: 'center'}}>404</div>
                <div style={{padding: '0 0 240px 0', fontSize: '32px', textAlign: 'center'}}>Такой страницы не существует</div>
            <Footer />
        </div>

    );
};

export default NotFound;
