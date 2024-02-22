import HeroBlock from './components/HeroBlock/HeroBlock';
import Container from './components/ui/Container/Container';
import Footer from './components/Footer/Footer';
import '@assets/styles/index.scss';
import Styles from '@assets/styles/Home.module.scss';
import { useRef } from 'react';
import AppsBlock from "./components/AppsBlock/AppsBlock";
import FeatureBlock from "./components/FeatureBlock/FeatureBlock";
import LaptopBlock from "./components/LaptopBlock/LaptopBlock";
import ChartBlock from "./components/ChartBlock/ChartBlock";
import CalculatorBlock from "./components/СalculatorBlock/CalculatorBlock";
import FormBlock from "./components/FormBlock/FormBlock";
import CosmosBlock from './components/CosmosBlock/CosmosBlock';
import SecurityBlock from './components/SecurityBlock/SecurityBlock';
import TariffsBlock from './components/TariffsBlock/TariffsBlock';
import CosmosSchemeBlock from './components/CosmosSchemeBlock/CosmosSchemeBlock';
import TarriffsSchemeBlock from './components/TarriffsSchemeBlock/TarriffsSchemeBlock';

function App() {
  const formBlockRef = useRef(null);

  return (
    <main className={Styles.Block}>
      <Container>
        <div  className={Styles.mainWrapper}>
            <HeroBlock formBlockRef={formBlockRef}/>
            <AppsBlock formBlockRef={formBlockRef}/>
            <CosmosBlock/>
            <LaptopBlock/>
            <SecurityBlock/>
            <FeatureBlock/>
            <CosmosSchemeBlock/>
            <TariffsBlock formBlockRef={formBlockRef}/>
            <ChartBlock formBlockRef={formBlockRef}/>
            <CalculatorBlock/>
            <TarriffsSchemeBlock/>
            <FormBlock formBlockRef={formBlockRef}/>
        </div>
      </Container>
      <Footer />
    </main>
  );
}

export default App;
