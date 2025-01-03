import React, {useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import _ from "lodash";
import { useAuth } from '../stores/AuthProvider';

interface LoginProps {
    
}

interface UserLogin{
  username : string;
  password : string;
}

interface LoginFormError{
  username : string;
  password : string;
  serverResponseMsg : string;
}
const formData : UserLogin = { username: '', password: '' };
const errorInit : LoginFormError = { username: '', password: '', serverResponseMsg : '' };



const Login : React.FC<LoginProps> = () => {
    const {login, isAuthenticated, currentPrvateURI} = useAuth();

    const [values, setValues] = useState(formData);
    const [errors , setErrors] = useState(errorInit);
    const [isValidForm, setIsValidForm] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isInitialForm, setIsInitialForm] = useState(true);


    const navigate = useNavigate();

    useEffect(() =>{
      console.log(`it is authenticated. ${isAuthenticated}`)
      console.log(currentPrvateURI);
  
      if(isAuthenticated){
        
        navigate(currentPrvateURI)
      }
      
     },[isAuthenticated, currentPrvateURI]);

    

    const validateForm = () => {
      let validationErrors = errorInit;

      if(values.username == ""){        
        validationErrors.username = "username is missing";
        setIsValidForm(false);
      }else{
        validationErrors.username = "";        
      }

      if(values.password == ""){        
        validationErrors.password = "password is missing!";
        setIsValidForm(false);

      }else{        
        validationErrors.password = "";
      }
      setErrors((prevValues) => ({...prevValues, ...validationErrors}));
      
      let validFormStatus = false;
      for (const [key, value] of Object.entries(validationErrors)) {
        if(value != ""){
          validFormStatus = false;
          break;
        }
        else{
          validFormStatus = true;
        }
      }

      setIsSubmitting(false);
      setIsValidForm(validFormStatus);

      
      return validFormStatus;
      
    }
    const debounceValidateFields = _.debounce(() => { validateForm() }, 500)

    const handleOnChange = (e : any ) => {
      e.preventDefault();
      
      
      setValues((prevValues) => ({ ...prevValues, [e.target.name]: e.target.value }));

      
      if(!isInitialForm){
        debounceValidateFields();  
      }
      
      

    }
    

    
    const handleSubmit = async (e :any) => {
        e.preventDefault();

                
        setIsSubmitting(true);
        setIsInitialForm(false);


        if(validateForm() ){
          

          // Dummy API call for login. Replace with your API endpoint.
          const response = await fetch('http://localhost:8000/api/authenticate', {
              method: 'POST',
              headers: {
              'Content-Type': 'application/json',
              },
              body: JSON.stringify({ ...values }),
          });

     
          setIsSubmitting(false);
      if (response.status == 200) {
          const data = await response.json();
          // Assuming the response contains an access_token
          login(data.access_token);
          
          navigate('/admin');
        } 
        else if(response.status == 422){
          const msgBody = await response.json();
          setIsValidForm(false);

          msgBody.errorMsg.map((errMsg : any) => {
              console.log(errMsg);

              if(errMsg.username){
                  setErrors((prevValues) => ({...prevValues, username : errMsg.username}));
              }

              if(errMsg.password){
                  setErrors((prevValues) => ({...prevValues, password : errMsg.password}));
              }
          })

         
          


        }
        else if(response.status == 403){
          const msgBody = await response.json();
          setIsValidForm(false);
          // console.log(msgBody.message);
          setErrors((prevValues) => ({...prevValues, serverResponseMsg : msgBody.message}));

          alert(msgBody.message);
        }
        else {
          alert('Login failed, please try again.');
        }
        }

        
      
        
    }


    

    



  return (
    <>
        <div className='flex flex-col items-center  '>
            <h2 className='font-bold text-xl'> System Login</h2>
            
            <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
                <label htmlFor="username" >Username</label>
                <input type="text" value={values.username} name="username" onChange={(e) => handleOnChange(e)} onBlur={!isInitialForm ? validateForm : () => {}}/>
                { errors.username && <span className="text-red-700 text-xs">{errors.username}</span> }
            </div>
            <div className="flex flex-col mt-1">
                <label htmlFor="password">Password</label>
                <input type="password" value={values.password} name="password" onChange={(e) => handleOnChange(e)} onBlur={!isInitialForm ? validateForm : () => {}}/>
                { errors.password && <span className="text-red-700 text-xs">{errors.password}</span> }
                
            </div>
            <div className="mt-1">
                { isSubmitting == true ? <span>Loading...</span> : <button type="submit" 
                
                className={`bg-slate-500 px-1 hover:bg-amber-100 `}>Login</button> }
                <Link to="/" className='text-blue-500 text-sm ml-1'> back to home</Link>

                <br/>
                { isValidForm == false && isInitialForm == false ? <span className="text-sm text-red-700">Form is invalid to process. <br/>{errors.serverResponseMsg}</span> : null }
            </div>
            </form>
        </div> 
    </>
  )
}

export default Login