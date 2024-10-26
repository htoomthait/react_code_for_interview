import React, { useEffect } from 'react'
import useSetPrivateURI from '../hooks/UseSetPrivateURI';
import useSetActivePage from '../hooks/UseSetActivePage';

const AdminPanelUser : React.FC = () => {
    
  useSetPrivateURI(); 
  useSetActivePage('adminUsers'); 
    
  return (
    <div>AdminPanelUsers page</div>
  )
}

export default AdminPanelUser