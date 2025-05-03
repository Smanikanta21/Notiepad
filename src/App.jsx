import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/login_page.jsx'
import SignIn from './pages/signin_page.jsx'
import Home from './pages/Home.jsx';
import About from './pages/about.jsx';
import Contact from './pages/contact.jsx';
import Nav from './components/Nav.jsx';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/signup" element={<SignIn/>} />
      </Routes>
    </Router>
  );
}

export default App;
