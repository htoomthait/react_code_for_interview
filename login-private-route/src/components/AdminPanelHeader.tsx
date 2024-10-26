import React from 'react';

interface AdminPanelHeaderProps{
    handleLogout : () => void
}

const AdminPanelHeader : React.FC<AdminPanelHeaderProps> = ({handleLogout}) => {
  return (
    <div className='flex flex-col'>
    <h2 className="font-bold text-xl"> Home Page</h2>
    <p>Welcome to the admin panel ! You are logged in.</p>
    <button onClick={handleLogout}
      className="bg-slate-400 px-1 hover:bg-slate-300 w-[100px]"
    >Logout</button>
  </div>
  )
}

export default AdminPanelHeader