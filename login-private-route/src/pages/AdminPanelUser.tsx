import React, { useEffect } from 'react'
import { useAuth } from '../stores/AuthProvider';

const AdminPanelUser : React.FC = () => {
    const {isAuthenticated, logout, memorizeCurrentPrivateURI, currentPrvateURI} = useAuth();
    useEffect(()=>{
        if(isAuthenticated){
          memorizeCurrentPrivateURI('/admin/users');
        }
        
      },[isAuthenticated])
      console.log(currentPrvateURI)
      
    
  return (
    <div>AdminPanelUsers page</div>
  )
}

export default AdminPanelUser