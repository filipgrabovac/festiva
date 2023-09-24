import React from "react";
import './Login.css'

const Login = ({setRoute, setLoginState}) => {
    return (
        <div className='master'>

            <div className='flex flex-wrap ml5'>
                <input type='button' className='button FestivaIcon mh2 grow br4' onClick={(event) => console.log('marmun')}/>
                <input type='button' className='button ArrowIcon mh2 grow br4' onClick={(event)=> setRoute('homepage')}/>
            </div>
            
            <div className='loginForm br4'>
                <input placeholder="email" type="email" className='bn br4 tc loginInput'/>
                <input placeholder="lozinka" type="password" className='bn br4 tc loginInput'/>
                <button className="grow mt1 f3 br4 bn mt4 w-50 h-25 b-l" onClick={(event) => {setRoute('homepage'); setLoginState(true)}}>Prijava</button>
            </div>
        </div>
    );
}

export default Login;