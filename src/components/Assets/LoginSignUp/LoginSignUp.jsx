import './LoginSignup.css';
import  '../images/email icon.jpg';
import  '../images/password icon.png';
import '../images/user icon.png'
import '../images/password icon 2.webp'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser ,faEnvelope,faLock } from '@fortawesome/free-solid-svg-icons'
const LoginSignUp= () => {
    const [action ,setAction]=useState("Login")
  return (
    <div className='container'>
    <div className='header'>
    <div className='text'> {action} </div>
    <div className='underline'></div>
    </div>
    <div className='inputs'>
    {action==="Login"? <div></div>:<div className='input'>
    <FontAwesomeIcon icon={faUser} className='light'/>
    <input type='text' placeholder='User name '>
    </input>
    </div>}
    
    <div className='input'>
    <FontAwesomeIcon icon={faEnvelope} className='light'/>
    <input type='email' placeholder='Email'>
    </input>
    </div>
    <div className='input'>
    <FontAwesomeIcon icon={faLock} className='light'/> 
    <input type='password' placeholder='Password'>
    </input>
    </div>
    </div>
    {action==="Sign Up"? <div></div>:<div className='Forget-password'> lost Password ? <span>click here</span></div>}
    
    <div className='submit-container'>
    <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
    <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>login </div>
    </div>
    </div>
  );
}

export default LoginSignUp;
