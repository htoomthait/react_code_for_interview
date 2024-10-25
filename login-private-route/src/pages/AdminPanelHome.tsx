import React, { useEffect } from 'react'
import { useAuth } from '../stores/AuthProvider';
import AdminPanelHeader from '../components/AdminPanelHeader';
import { BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
  Link
    } from 'react-router-dom';
import AdminPanelUser from './AdminPanelUser';
import AdminPanelHomContent from './AdminPanelHomContent';


const AdminPanelHome : React.FC = () => {
  const navigate = useNavigate();
  const {isAuthenticated, logout, memorizeCurrentPrivateURI} = useAuth();

/*   useEffect(()=>{
    if(isAuthenticated){
      memorizeCurrentPrivateURI('/admin');
    }
    
  },[isAuthenticated]) */

  
    
  const handleLogout = () => {
        
        logout();
        navigate('/login');
        
    }




  return (
    <div className='flex flex-col'>
        
        <AdminPanelHeader handleLogout={handleLogout} />
        <Link to="/admin" >Admin Home </Link>
        <Link to="users" >Users </Link>
        <div className="mt-2 min-h-[200px] border border-gray-500">
          
           
              <Routes>
                  <Route path="/users" element={<AdminPanelUser />} />
                  
                  <Route path="*" element={<AdminPanelHomContent />} />
                  
              </Routes>
           
        </div>
    </div>
  )
}

export default AdminPanelHome