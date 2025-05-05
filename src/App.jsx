import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MainLayout from './components/MainLayout.jsx';
import LandingPage from './components/LandingPage.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Nav from './components/Nav.jsx';
import LoginPage from './components/LoginPage.jsx';
import Home from './components/Home.jsx';
function App() {
  return (
    <Router>
        <Routes>
          <Route path="/gt" element={<LoginPage/>}/>
          <Route path="/" element={<LandingPage/>} />
          <Route element={<MainLayout/>}>
            <Route path="/home" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
