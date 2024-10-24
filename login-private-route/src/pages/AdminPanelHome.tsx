import React from 'react'
import { useNavigate } from 'react-router-dom';

const AdminPanelHome : React.FC = () => {
  const navigate = useNavigate();
    
  const handleLogout = () => {
        
        localStorage.removeItem('acces_token');
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