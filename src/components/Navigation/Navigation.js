import React from "react";
import './Navigation.css';

const Navigation = ({email, loginState, setRoute, handleLogoutClick}) => {

    const handleNameClick = (event) => {
        document.getElementById('dropDownMenu').classList.toggle('showDDM');
    }
    
    const handleProfileClick = (event) => {
        setRoute('profile');
    }

    
    return ( 
        <nav className='Navigation'>

            <input type="button" className='festivaLogo grow'/>

            <div className="searchbar">
                <input type='button' className='searchButton'/>
                <input tpye='text' placeholder="pretraži" className='search'/>
                
            </div>

            <div className='logRegButton'>

                <button className='questionMark mv3 grow'>?</button>
                { loginState ?
                        <div>
                                <button className='navButton mh3 mv3 grow' onClick={handleNameClick}>{email}</button> 
                                
                                <div id ='dropDownMenu' className="dropDownMenu flex flex-column">
                                    <a className='dim' onClick={handleProfileClick}>Profil</a>
                                    <a className='dim' onClick={(event)=> handleLogoutClick()}>Odjava</a>
                                </div>

                        </div>
                    : 
                        <div className="flex">
                            <button className='navButton mh3 mv3 grow' onClick={(event) => {setRoute('login')}}>Prijava</button>
                            <button className='navButton mv3 mr4 grow' onClick={(event) => {setRoute('register')}}>Registracija</button>
                        </div>
                    }
            </div>
            
        </nav>
    );
}

export default Navigation;