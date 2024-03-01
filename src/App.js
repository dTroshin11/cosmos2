
import Container from './components/ui/Container/Container';
import '@assets/styles/index.scss';
import Styles from '@assets/styles/Home.module.scss';
import { useRef } from 'react';
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
            <Routes>
              <Route path="/" element={<Main formBlockRef={formBlockRef} />} />
              <Route path="/about" element={<About />} />
              <Route path="/documents" element={<Documents />} />
              <Route path="*" element={<NotFound formBlockRef={formBlockRef} />} />
            </Routes>
          </div>
        </Container>
      </main>
    </Router>
  );
}

export default App;
