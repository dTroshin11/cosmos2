import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'


const NotFound = ({formBlockRef}) => {

    return (
        <div>
            <Header formBlockRef={formBlockRef} />
            404
            <Footer />
        </div>

    );
};

export default NotFound;
