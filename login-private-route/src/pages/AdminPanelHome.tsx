import React, { useEffect } from 'react'
import { useAuth } from '../stores/AuthProvider';
import AdminPanelHeader from '../components/AdminPanelHeader';
import { BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Link
    } from 'react-router-dom';
import AdminPanelUser from './AdminPanelUser';
import AdminPanelHomContent from './AdminPanelHomContent';
import styles from './styles/AdminPanelHome.module.css';


const AdminPanelHome : React.FC = () => {
  const navigate = useNavigate();
  const {logout, activePage } = useAuth();


  
    
  const handleLogout = () => {        
        logout();
        navigate('/login');
        
    }




  return (
    <div className='flex flex-col'>
        
        <AdminPanelHeader handleLogout={handleLogout} />
        <div className={styles.adminNavMenu}>
          <Link to="/admin"  className={`${styles.menuItem} ${ activePage == 'adminHome' ? styles.activeMenuItem : null}`}>Admin Home </Link>
          <Link to="users" className={`${styles.menuItem} ${ activePage == 'adminUsers' ? styles.activeMenuItem : null}`}>Users </Link>
        </div>
        
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