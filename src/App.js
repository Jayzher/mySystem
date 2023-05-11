import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import AppNavBar from './components/AppNavBar';

function App() {
  return (
    <Router>
    <AppNavBar/>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;