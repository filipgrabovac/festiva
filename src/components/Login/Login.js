import React from "react";
import './Login.css'

const Login = () => {
    return (
        <div className='loginForm br4'>
            <input placeholder="email" type="email" className='bn br4 tc button'/>
            <input placeholder="lozinka" type="password" className='bn br4 tc button'/>
            <button className="grow w-30 mt4 h-50 f3 br4 bn">Prijava</button>
        </div>
    );
}

export default Login;