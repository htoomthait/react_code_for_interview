import React, { useEffect } from 'react'
import { useAuth } from '../stores/AuthProvider';
import { useLocation } from 'react-router-dom';
import useSetPrivateURI from '../hooks/UseSetPrivateURI';
import useSetActivePage from '../hooks/UseSetActivePage';


const AdminPanelHomContent : React.FC = () => {
  

  useSetPrivateURI();  
  useSetActivePage('adminHome');



  return (
    <div>AdminPanelHomContent</div>
  )
}

export default AdminPanelHomContent