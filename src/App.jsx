import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header'
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home'
import Services from './pages/Services';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Services" element={<Services/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App
