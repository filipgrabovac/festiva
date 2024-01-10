import React, {useState, useEffect} from "react";
import './Register.css';
import { NavLink, useNavigate } from "react-router-dom";

const Register = ({setLoginState}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [surname, setSurname] = useState('');
    const [nameInputState, setNameInputState] = useState(false);
    const [userType, setUserType] = useState('poslodavac');
    const [emailPasswordState, setEmailPasswordState] = useState(false);
    const [password, setPassword] = useState('');


    const navigator = useNavigate();

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
            setNameInputState(false);
            setEmailPasswordState(false);
        }
    }

    const handlePasswordInput = (event) => {
        setPassword(event.target.value)
    }

    const handleRegistration = (event) => {
        if (name && email && password) {
            sessionStorage.setItem('user_email', email);
            fetch('http://localhost:3000/register',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                user_name: name,
                user_surname: surname,
                user_email: email,
                user_password: password,
                user_type: userType
            })
            })
            .then(res => res.json())
            .then(res => {
                if (res == "success") {
                    setLoginState(true);
                    navigator('/');
                } else {
                    console.log(res);
                }
            })
            .catch(err => console.log(err));
        }        
    }

    return (
        <div className='master'>

            <div className='returnBar'>
                <NavLink to ='/' type='button' className='button FestivaIcon grow br4' onClick={(event) => console.log('marmun')} />
                <input type='button' className='button ArrowIcon grow br4' onClick={handleArrowClick}/>
            </div>

            {emailPasswordState ?
                ''
             : 
                (nameInputState ?      
                    <div className="flex flex-wrap flex-row">    

                        <div className='squareDown'></div>

                        <form className='Form'>
                            
                            <input placeholder="email" type="email" className='bn br3 tc input' value={email} 
                                onChange={handleEmailInput} required={true}
                            />
                            <input placeholder="lozinka" type="password" className='bn br3 tc input' value={password} 
                                onChange={handlePasswordInput} required={true}
                            />
                       
                            
                            <button className="grow f3 br4 bn w-75 mt4 h-50 b-l buttonRegister" 
                                onClick={handleRegistration}>Registriraj me!</button>
                        </form> 

                        <div className='squareUp'></div>

                </div> :
                    <div className="flex flex-wrap flex-row">

                        <div className='squareDown'></div>
                        
                        <form className='Form FormAnimation'>
                            
                            <input placeholder="ime" type="name" className='bn br3 tc input' value = {name} 
                                onChange={handleNameInput} required={true}
                            />
                            <input placeholder="prezime" type="surname" className='bn br3 tc input' value = {surname} 
                                onChange={handleSurnameInput}
                            />
                            <button className="grow mt1 f3 br4 bn mt4 w-75 h-50 b-l buttonRegister" 
                                onClick={(event)=> {if (name) setNameInputState(true)}}>Dalje</button>
                        </form>

                        <div className='squareUp'></div>

                    </div>
                )
        }
        </div>
    );
}

export default Register;