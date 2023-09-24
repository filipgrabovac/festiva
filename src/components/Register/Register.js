import React, {useState, useEffect} from "react";
import './Register.css';

const Register = ({setRoute, name, setName, email, setEmail, setLoginState}) => {
    const [surname, setSurname] = useState('');
    const [nameInputState, setNameInputState] = useState(false);
    const [emailPasswordState, setEmailPasswordState] = useState(false);
    const [password, setPassword] = useState('');

    const handleNameInput = (event) => {
        setName(event.target.value)
    }

    const handleSurnameInput = (event) => {
        setSurname(event.target.value)
    }

    const handleEmailInput = (event) => {
        setEmail(event.target.value)
    }

    const handleArrowClick = (event) => {
        if (nameInputState) {
            setNameInputState(false);
        setPassword('');
        } else {
            setRoute('homepage');
            setNameInputState(false);
            setEmailPasswordState(false);
        }
     
    }

    const handlePasswordInput = (event) => {
        setPassword(event.target.value)
    }
    const handleRegistration = () => {
            setTimeout(()=>{
                setRoute('homepage');
                setNameInputState(false);
                setEmailPasswordState(false);
                setLoginState(true);
            }, 200)
            
    }

    return (
        <div className='master'>

            <div className='returnBar'>
                <input type='button' className='button FestivaIcon mh2 grow br4' onClick={(event) => console.log('marmun')}/>
                <input type='button' className='button ArrowIcon mh2 grow br4' onClick={handleArrowClick}/>
            </div>

            {emailPasswordState ?
                ''
             : 
                (nameInputState ?      
                    <div className="flex flex-wrap flex-row">    

                        <div className='squareDown'></div>

                        <div className='Form'>
                            <input placeholder="email" type="email" className='bn br4 tc input' value={email} onChange={handleEmailInput} required={true}/>
                            <input placeholder="lozinka" type="password" className='bn br4 tc input' value={password} onChange={handlePasswordInput} required={true}/>
                            <button className="grow mt1 f3 br4 bn mt4 w-75 h-50 b-l" onClick={(event)=> {if (email && password) {handleRegistration();} }}>Prijava</button>
                        </div> 

                        <div className='squareUp'></div>

                </div> :
                    <div className="flex flex-wrap flex-row">

                        <div className='squareDown'></div>
                        
                        <div className='Form FormAnimation'>
                            <input placeholder="ime" type="name" className='bn br4 tc input' value = {name} onChange={handleNameInput} required={true}/>
                            <input placeholder="prezime" type="surname" className='bn br4 tc input' value = {surname} onChange={handleSurnameInput}/>
                            <button className="grow mt1 f3 br4 bn mt4 w-75 h-50 b-l" onClick={(event)=> {if (name) setNameInputState(true)}}>Dalje</button>
                        </div>

                        <div className='squareUp'></div>

                    </div>
                )
        }
        </div>
    );
}

export default Register;