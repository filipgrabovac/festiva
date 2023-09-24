import React from "react";
import './Navigation.css';

const Navigation = ({name, loginState, setRoute}) => {
    return ( 
        <nav className='Navigation'>

            <input type="button" className='festivaLogo grow'/>

            <div className="searchbar">
                <input type='button' className='searchButton'/>
                <input tpye='text' placeholder="pretraži" className='search'/>

            </div>
            { loginState ? 
                <div className='logRegButton'>
                    <button className='questionMark ml5 mv3'>?</button>
                    <button className='navButton mh3 mv3' onClick = {console.log('valjalo bi dodati padajuci izbornik sa profilom i odjavom')}>{name}</button> 
                </div> : 
                <div className='logRegButton'>
                    <button className='questionMark mv3'>?</button>
                    <button className='navButton mh3 mv3' onClick={(event) => {setRoute('login')}}>Prijava</button>
                    <button className='navButton mv3 mr4' onClick={(event) => {setRoute('register')}}>Registracija</button>
                </div>}

            
        </nav>
    );
}

export default Navigation;