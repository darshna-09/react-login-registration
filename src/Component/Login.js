import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import './register.css';
const Login = () => {
    const [input,setInput] = useState({
        email : '',
        password : '',
    });
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        // String convert to obejct using json.parse
        const loggeduser = JSON.parse(localStorage.getItem('user'));
        if(input.email === loggeduser.email && input.password === loggeduser.password){
            localStorage.setItem('loggedin', true);
            navigate('/');
        } 
        else{
            alert('Wrong email or password');
        }
        
    }
  return (
    <>
         <div className="main-w3layouts wrapper">
		    <h1>Login Form</h1>
            <div className="main-agileinfo">
                <div className="agileits-top">
                    <form onSubmit={handleLogin}>
                      
                       <input className="text-white" type="email" value = {input.email}
                            name="email" placeholder="Enter Email" required=""
                            onChange={(e) => 
                                setInput({
                                    ...input,
                                    [e.target.name] : e.target.value,
                                })}
                            /><br/>
                        <input className="text-white" type="password" name="password" placeholder="Enter Password" required="" value = {input.password}
                        onChange={(e) => 
                            setInput({
                                ...input,
                                [e.target.name] : e.target.value,
                            })}/>
                        <input type="submit" value="LOGIN"/>
                    </form>
                    <p>Don't have an Account? <Link to='/register'> Register Now!</Link></p>
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

export default Login
