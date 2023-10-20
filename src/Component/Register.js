import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import './register.css';
const Register = () => {
    const navigate = useNavigate();
    const [input,setInput] = useState({
        name : '',
        email : '',
        password : '',
    });

    // to store value in localstorage
    const handleSubmit = (e) => {
        e.preventDefault();
        //convert object to string using JSONStringify
        localStorage.setItem('user',JSON.stringify(input));
        navigate('/login');
    }
  return (
    <>
   
        <div className="main-w3layouts wrapper">
		    <h1>SignUp Form</h1>
            <div className="main-agileinfo">
                <div className="agileits-top">
                    <form onSubmit={handleSubmit}>
                       <input className="text-white" 
                            type="text" name="name" value = {input.name}
                            placeholder="Enter Username" required=""
                            onChange={(e) => 
                            setInput({
                                ...input,
                                [e.target.name] : e.target.value}
                            )}/><br/>
                       <input className="text-white" type="email" value = {input.email} 
                            name="email" placeholder="Enter Email" required=""
                            onChange={(e) => 
                                setInput({
                                    ...input,
                                    [e.target.name] : e.target.value}
                                )}/><br/>
                        <input className="text-white" type="password" name="password" placeholder="Enter Password" required="" value = {input.password}
                             onChange={(e) => 
                                setInput({
                                    ...input,
                                    [e.target.name] : e.target.value}
                                )}
                        />
                        <input type="submit" value="SIGNUP"/>
                    </form>
                    <p>Already have an Account? <Link to='/login'> Login Now!</Link></p>
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

export default Register
