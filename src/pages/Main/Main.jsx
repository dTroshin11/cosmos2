import HeroBlock from '../../components/HeroBlock/HeroBlock';
import AppsBlock from "../../components/AppsBlock/AppsBlock";
import FeatureBlock from "../../components/FeatureBlock/FeatureBlock";
import LaptopBlock from "../../components/LaptopBlock/LaptopBlock";
import ChartBlock from "../../components/ChartBlock/ChartBlock";
import CalculatorBlock from "../../components/CalculatorBlock/CalculatorBlock";
import FormBlock from "../../components/FormBlock/FormBlock";
import CosmosBlock from '../../components/CosmosBlock/CosmosBlock';
import SecurityBlock from '../../components/SecurityBlock/SecurityBlock';
import TariffsBlock from '../../components/TariffsBlock/TariffsBlock';
import CosmosSchemeBlock from '../../components/CosmosSchemeBlock/CosmosSchemeBlock';
import TarriffsSchemeBlock from '../../components/TarriffsSchemeBlock/TarriffsSchemeBlock';
import Footer from '../../components/Footer/Footer'
import { useEffect } from 'react';
import Header from '../../components/Header/Header';

const Main = ({ formBlockRef }) => {

    // const [isMainHeader, setIsMainHeader] = useState(true)
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Header formBlockRef={formBlockRef} isMainHeader={true} />
            <HeroBlock formBlockRef={formBlockRef} />
            <AppsBlock formBlockRef={formBlockRef} />
            <CosmosBlock />
            <LaptopBlock />
            <SecurityBlock />
            <FeatureBlock />
            <CosmosSchemeBlock />
            <TariffsBlock formBlockRef={formBlockRef} />
            <ChartBlock formBlockRef={formBlockRef} />
            <CalculatorBlock />
            <TarriffsSchemeBlock formBlockRef={formBlockRef} />
            <FormBlock formBlockRef={formBlockRef} />
            <Footer />
        </>

    );
};

export default Main;
