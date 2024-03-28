
import Container from './components/ui/Container/Container';
import '@assets/styles/index.scss';
import Styles from '@assets/styles/Home.module.scss';
import { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import About from './pages/About/About';
import Documents from './pages/Documents/Documents';
import Instructions from './pages/Instructions/Instructions';
import TermsOfUse from './pages/Documents/TermsOfUse/TermsOfUse';
import PersonalData from './pages/Documents/PersonalData/PersonalData';
import License from './pages/Documents/License/License';
import NotFound from './pages/NotFound/NotFound';

function App() {
  const formBlockRef = useRef(null);

  return (
    <Router>
      <main className={Styles.Block}>
        <Container>
          <div className={Styles.mainWrapper}>
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="*" element={<Main formBlockRef={formBlockRef} />} />
              <Route path="/agreements" element={<Documents />} />
              <Route path="/end-user-agreement" element={<License />} />
              <Route path="/user-agreement-ai" element={<TermsOfUse />} />
              <Route path="/personal-data-agreement" element={<PersonalData />} />
              <Route path="/instructions" element={<Instructions />} />
              {/*<Route path="*" element={<NotFound />} />*/}
            </Routes>
          </div>
        </Container>
      </main>
    </Router>
  );
}

export default App;
