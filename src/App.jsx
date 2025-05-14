import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MainLayout from './components/MainLayout.jsx';
import LandingPage from './components/LandingPage.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import LoginPage from './components/LoginPage.jsx';
import Home from './components/Home.jsx';
import Profile from './components/Profile.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SpeedInsights } from "@vercel/speed-insights/react"
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/gt" element={<LoginPage />} />
          <Route path="/" element={<LandingPage />} />
          <Route element={<MainLayout />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
      <ToastContainer position="top-right" autoClose={2000} />
      <SpeedInsights
        projectId="your-project-id"
        apiKey="your-api-key"
        url="https://example.com"
        options={{
          strategy: "mobile",
          locale: "en-US",
          throttlingMethod: "devtools",
          blockedUrlPatterns: ["*.js"],
        }}
        onSuccess={(data) => {
          console.log("Speed insights data:", data);
        }}
        onError={(error) => {
          console.error("Error fetching speed insights:", error);
      }}/>
    </>
  );
}

export default App;
