import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../stores/AuthProvider';

const AdminPanelHome : React.FC = () => {
  const navigate = useNavigate();
  const {isAuthenticated, logout, memorizeCurrentPrivateURI} = useAuth();

  useEffect(()=>{
    if(isAuthenticated){
      memorizeCurrentPrivateURI('/admin');
    }
    
  },[isAuthenticated])

  
    
  const handleLogout = () => {
        
        logout();
        navigate('/login');
        
    }




  return (
    <div>
        <h2 className="font-bold text-xl"> Home Page</h2>
        <p>Welcome to the home page ! You are logged in.</p>
        <button onClick={handleLogout}
          className="bg-slate-400 px-1 hover:bg-slate-300"
        >Logout</button>
    </div>
  )
}

export default AdminPanelHome