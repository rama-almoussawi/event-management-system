import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Register from "./pages/Register";
import NavBar from './Components/NavBar';
import Login from './pages/Login';
import Events from './pages/Events';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Router>
          <NavBar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/events" element={<Events />} />
          </Routes>

        </Router>
      </div>
    </LanguageProvider>
  );
}

export default App;