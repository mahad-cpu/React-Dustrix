import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header'
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home'
import Services from './pages/Services';
import Team from './pages/Team';
import News from './pages/News';
import Faq from './pages/Faq';
import Projects from './pages/Projects';
import Project_Detail from './pages/Project_Detail';

function App() {
  return (
    <Router>
      <Header/>
      {/* <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Services" element={<Services/>} />
        <Route path="/Team" element={<Team/>}/>
        <Route path="/News" element={<News/>}/>
        <Route path="/faqs" element={<Faq/>}/>
        <Route path="/projects" element={<Projects/>}/>
      </Routes> */}
      <Project_Detail/>
      <Footer/>
    </Router>
  );
}

export default App
