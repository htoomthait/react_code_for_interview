import React from 'react'
import { useNavigate } from 'react-router-dom';

const AdminPanelHome = () => {
    const handleLogout = () => {
        const navigate = useNavigate();
        localStorage.removeItem('acces_token');
        navigate('/login');
    }




  return (
    <div>
        <h2> Home Page</h2>
        <p>Welcome to the home page ! You are logged in.</p>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default AdminPanelHome