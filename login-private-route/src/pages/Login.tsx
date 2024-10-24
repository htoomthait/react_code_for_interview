import React, {useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface LoginProps {
    setIsAuthenticated : (status : boolean) => void;
}


const Login : React.FC<LoginProps> = ({setIsAuthenticated}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    
    const handleSubmit = async (e : any) => {
        e.preventDefault();
        console.log(username, password);

        // Dummy API call for login. Replace with your API endpoint.
        const response = await fetch('https://localhost:8000/api/login', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            const data = await response.json();
            // Assuming the response contains an access_token
            localStorage.setItem('access_token', data.access_token);
            setIsAuthenticated(true);
            navigate('/home');
          } else {
            alert('Login failed, please try again.');
          }
  
      
        
    }

    

    



  return (
    <>
        <div className='flex flex-col items-center  '>
            <h2 className='font-bold text-xl'> System Login</h2>
            <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
                <label htmlFor="txtUsername" >Username</label>
                <input type="text" value={username} name="txtUsername" onChange={(e)=> setUsername(e.target.value)}/>
            </div>
            <div className="flex flex-col mt-1">
                <label htmlFor="txtPasswords">Password</label>
                <input type="password" value={password} name="txtPasswords" onChange={(e)=> setPassword(e.target.value)}/>
            </div>
            <div className="mt-1">
                <button type="submit" 
                
                className='bg-slate-500 px-1 hover:bg-amber-100 '>Login</button>
                <Link to="/" className='text-blue-500 text-sm ml-1'> back to home</Link>
            </div>
            </form>
        </div>
    </>
  )
}

export default Login