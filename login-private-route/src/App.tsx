import './App.css'
import Login from './pages/Login'
import { BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
    } from 'react-router-dom';
import AdminPanelHome from './pages/AdminPanelHome';
import LandingPage from './pages/LandingPage';
import { useAuth } from './stores/AuthProvider';
import { useEffect, useState } from 'react';


const App = ( ) =>{

 
  
  
  
  

  return (
    <>
    
     
      <div className="main container mx-auto p-4">
          <Router>
            <Routes>
               {/* Public Route for Login */}
               <Route  path="/login" element={<Login  />}/>

               <Route path="/" element={<LandingPage />} />
                

                {/* Protected Route for Home */}
                <Route path="/admin/*" element={<PrivateRoute  component={<AdminPanelHome/>} />} />
                  
                

                {/* Redirect to Login if no match */}
                <Route path="*" element={<Login />}/>
            </Routes>
          </Router>
          
        
      </div>
      
    
      
      
     
      
    </>
  )

  
}

interface PrivateRouteProps {
  component: JSX.Element,  
}


const PrivateRoute : React.FC<PrivateRouteProps>= ({component }) => {

  const { isAuthenticated, currentPrvateURI } = useAuth();

  

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isAuthenticated !== undefined) {
      // Only update loading state once authentication is resolved
      setIsLoading(false);
    }
  }, [isAuthenticated]);

  if (isLoading) {
    // Return a loading spinner or any placeholder until auth status is known
    return <div>Loading...</div>;
  }






  
    
   return isAuthenticated == true ? component : <Navigate to="/login" replace/>

      
    
  
};

export default App
