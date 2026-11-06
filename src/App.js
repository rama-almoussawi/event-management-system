import Contact from './pages/Contact';
import About from './pages/About';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Login from './pages/Login';
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'; 
function App() {
   return (
      <div className="App">
      <Router>
        <NavBar/> 
        <Routes> 
          <Route path ="/about" excat Component={About}/>
          <Route path ="/contact" excat Component={Contact}/>
           <Route path ="/login" excat Component={Login}/>
        </Routes>
        </Router>     
    </div>
  );
}

export default App;
