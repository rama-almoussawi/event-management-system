
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Register from "./pages/Register";
import NavBar from './Components/NavBar';
import Login from './pages/Login';



import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'; 
function App() {
   return (
      <div className="App">
      <Router>
        <NavBar/> 
        <Routes> 
          <Route path ="/" excat Component={Home}/>
          <Route path ="/about" excat Component={About}/>
          <Route path ="/contact" excat Component={Contact}/>
          <Route path ="/register" excat Component={Register}/>
          <Route path ="/login" excat Component={Login}/>
        </Routes>
        </Router>     
    </div>
  );
}

export default App;
