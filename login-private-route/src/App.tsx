import { useEffect, useState } from 'react';
import './App.css'
import Login from './pages/Login'
import { BrowserRouter as Router,
  Routes,
  Route,
  Navigate,  } from 'react-router-dom';
import AdminPanelHome from './pages/AdminPanelHome';
import LandingPage from './pages/LandingPage';


const App = ( ) =>{
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if(token){
      setIsAuthenticated(true);
    }
  }, [])
  

  return (
    <>
    
     
      <div className="main container mx-auto p-4">
          <Router>
            <Routes>
               {/* Public Route for Login */}
               <Route  path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />}/>

               <Route path="/" element={<LandingPage />} />
                

                {/* Protected Route for Home */}
                <Route path="/admin/*" element={<PrivateRoute isAuthenticated={isAuthenticated} component={<AdminPanelHome/>} />} />
                  
                

                {/* Redirect to Login if no match */}
                <Route path="*" element={<Login setIsAuthenticated={setIsAuthenticated} />}/>
            </Routes>
          </Router>
          
        
      </div>
      
    
      
      
     
      
    </>
  )

  
}

interface PrivateRouteProps {
  component: JSX.Element,
  isAuthenticated : boolean
}


const PrivateRoute : React.FC<PrivateRouteProps>= ({ isAuthenticated, component }) => {
  
    return isAuthenticated ? component : <Navigate to="/login" />
  

      
    
  
};

export default App
