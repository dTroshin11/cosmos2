
import Container from './components/ui/Container/Container';
import Footer from './components/Footer/Footer';
import '@assets/styles/index.scss';
import Styles from '@assets/styles/Home.module.scss';
import { useRef } from 'react';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import Main from './pages/Main/Main';
import NotFound from './pages/NotFound/NotFound';
import About from './pages/About/About';
import Documents from './pages/Documents/Documents';

function App() {
  const formBlockRef = useRef(null);

  return (
    <Router>
      <main className={Styles.Block}>
        <Container>
          <div className={Styles.mainWrapper}>
            <Header formBlockRef={formBlockRef} />
            <Routes>
              <Route path="/" element={<Main formBlockRef={formBlockRef} />} />
              <Route path="/documents" element={<Documents />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound/>} />
            </Routes>
            <Footer />
          </div>
        </Container>
      </main>
    </Router>
  );
}

export default App;
