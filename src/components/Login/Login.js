import React, { useState } from "react";
import './Login.css'
import { NavLink, useNavigate } from "react-router-dom";

const Login = ({setLoginState}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const badLoginElement = document.createElement("h3");
    badLoginElement.textContent = "Molimo unesite ispravne podatke";
    badLoginElement.classList.add("badLoginElement")

    const navigate = useNavigate();

    const handleLogin = (event) => {
        sessionStorage.setItem('user_email', email);
        fetch('http://localhost:3000/login', {
          method: 'PUT',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            user_email: email,
            user_password: password
          })
        })
        .then(res => res.json())
        .then(res => {
            if (res !='user not found') {
                setLoginState(true);
                navigate('/');
            } else {
                event.target.parentElement.parentElement.append(badLoginElement);
            }
        })
        .catch(err => console.log('there is an error'));
    }

    return (
        <div className='master'>

            <div className='flex flex-wrap returnBarLogin'>
                <NavLink to='/' type='button' className='button ArrowIcon mh2 grow br4'/>
            </div>
            
            <div className='loginForm'>
                <input placeholder="email" type="email" className='bn br3 loginInput' onChange={(event) => setEmail(event.target.value)}/>
                <input placeholder="lozinka" type="password" className='bn br3 loginInput' onChange={(event) => setPassword(event.target.value)}/>
                <button className="grow mt1 f3 br4 bn mt4 w-75 h-50 b-l bg-white tc loginButton" onClick={handleLogin}>Prijava</button>
            </div>
        </div>
    );
}

export default Login;