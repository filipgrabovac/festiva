import React, { useState } from "react";
import './Navigation.css';
import { NavLink, useNavigate } from "react-router-dom";

const Navigation = ({loginState, setLoginState}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [searchText, setSearchText] = useState('');
    const navigator = useNavigate();

    // showing drop down menu 
    const handleNameClick = (event) => {
        document.getElementById('dropDownMenu').classList.toggle('showDDM');
    }

    const handleLogoutClick = (event) => {
        fetch('http://localhost:3000/logout', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            user_email: email,
          })
        })
        .then(res => res.json())
        .then(res => {
            if (res === 'success') {
                // sessionStorage.setItem('loginState', false);
                // sessionStorage.setItem('user_email', '');
                setLoginState(false);

            }
        })
      }

    const handleCreatePost = (event) => {
        navigator('/createPost')
    }

    const handleInput = (event) => {
        setSearchText(event.target.value);
        if (event.target.value) {
            document.getElementById("searchBox").classList.remove('dn');
        } else 
            document.getElementById("searchBox").classList.add('dn');
    }

    
    return ( 
        <nav className='Navigation'>
            <div className="mh5">
                <div className="searchbar">
                    <input type='button' className='searchButton'/>
                    <input tpye='text' placeholder="pretraži" className='search' onChange={handleInput}/>
                </div>

                <div id ='searchBox' className="searchBox dn">
                    {searchText}
                </div>

            </div>
            <NavLink to='/' className='festivaLogo grow'></NavLink>

            <div className='logRegButton'>

                <NavLink to='/about' className='questionMark mv3 grow'>?</NavLink>
                {loginState ?
                        <div>
                                <button className='navButton ml3 mv3 grow' onClick={handleNameClick}>{sessionStorage.getItem('user_email')}</button> 

                                <button className='navButton createPost ml3 grow tc' onClick={handleCreatePost}>Kreiraj oglas!</button>
                                
                                <div id ='dropDownMenu' className="dropDownMenu flex flex-column shadow-3">
                                    <NavLink to='/profile' className='no-underline dim'>Profil</NavLink>
                                    <a className='dim' onClick={handleLogoutClick}>Odjava</a>
                                </div>
                                

                        </div>
                    : 
                        <div className="flex">
                            <NavLink to='/login' className='navButton mh3 mv3 grow tc pa2' >Prijava</NavLink>
                            <NavLink to='/register' className='navButton mv3 mr4 grow tc pa2'>Registracija</NavLink>
                        </div>
                    }
            </div>
            
        </nav>
    );
}

export default Navigation;