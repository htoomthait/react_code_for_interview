import './App.css'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import NavBar from './components/NavBar';
import { useState } from 'react';

function App() {
  const [pageTitle, setPageTitle ] = useState('unkown');
  

  return (
    <div className="App">
      <div className="container mx-auto border-2">
        <h1 className="text-3xl font-bold underline">{pageTitle}</h1>        
        
      
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home setPageTitle={setPageTitle} />} />
          <Route path="/contact" element={<Contact setPageTitle={setPageTitle}/>} />
          <Route path="/profile" element={<Profile setPageTitle={setPageTitle}/>} />
        </Routes>
      </Router>
      </div>
    </div>
  )
}

export default App
