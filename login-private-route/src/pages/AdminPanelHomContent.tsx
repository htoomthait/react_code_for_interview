import React, { useEffect } from 'react'
import { useAuth } from '../stores/AuthProvider';


const AdminPanelHomContent : React.FC = () => {

    const {isAuthenticated, logout, memorizeCurrentPrivateURI, currentPrvateURI} = useAuth();
    useEffect(()=>{
        if(isAuthenticated){
          memorizeCurrentPrivateURI('/admin');
        }
        
      },[isAuthenticated])
  return (
    <div>AdminPanelHomContent</div>
  )
}

export default AdminPanelHomContent