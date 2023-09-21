import React from "react";
import './Navigation.css'
const Navigation = ({name, setRoute}) => {
    return( 
        <nav className='Navigation'>
            {name ? 
                <div>
                    <button className='questionMark'>?</button>
                    <button className='profile' onClick = {(event)=> {setRoute('profile')}}>{name}</button> 
                </div> : 
                <div>
                    <button className=''>{}</button>
                    <button className=''>{}</button>
                </div>}

            
        </nav>
    );
}

export default Navigation;