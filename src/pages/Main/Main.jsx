import HeroBlock from '../../components/HeroBlock/HeroBlock';
import AppsBlock from "../../components/AppsBlock/AppsBlock";
import FeatureBlock from "../../components/FeatureBlock/FeatureBlock";
import LaptopBlock from "../../components/LaptopBlock/LaptopBlock";
import ChartBlock from "../../components/ChartBlock/ChartBlock";
import CalculatorBlock from "../../components/СalculatorBlock/CalculatorBlock";
import FormBlock from "../../components/FormBlock/FormBlock";
import CosmosBlock from '../../components/CosmosBlock/CosmosBlock';
import SecurityBlock from '../../components/SecurityBlock/SecurityBlock';
import TariffsBlock from '../../components/TariffsBlock/TariffsBlock';
import CosmosSchemeBlock from '../../components/CosmosSchemeBlock/CosmosSchemeBlock';
import TarriffsSchemeBlock from '../../components/TarriffsSchemeBlock/TarriffsSchemeBlock';


const Main = ({formBlockRef}) => {

    return (
        <>
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
        </>

    );
};

export default Main;
