import React from 'react'
import { Link } from 'react-router-dom';
import styles from './styles/LandingPage.module.css';
import logoImg from './../assets/react.svg'



const LandingPage : React.FC = () => {


  return (
    <div className="container">
      <h1 className='font-bold text-2xl'> LandingPage </h1>
      <img src={logoImg} alt="react logo" />
      <div className={styles.mainNavBlock} >
        <Link to="/"  > Home</Link>
        <Link to="/login" > Login</Link>
      </div>

    </div>
  )
}

export default LandingPage