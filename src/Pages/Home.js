import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../Component/register.css'
const Home = () => {
    const navigate = useNavigate();
    const userName = JSON.parse(localStorage.getItem('user'));
    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('loggedin');
        navigate('/login');
    }
  return (
    <>
        <div className="main-w3layouts wrapper">
		    <h1>SignUp Form</h1>
            <div className="main-agileinfo">
                <div className="agileits-top">
                    <h1>Home Page</h1>
                    <p className='welcome'>Welcome - {userName.name}</p>
                    <button className='logout' type="submit" onClick={handleLogout}>LOG OUT</button>
                </div>
            </div>
        
            <ul className="colorlib-bubbles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
	    </div>
    </>
  )
}

export default Home
