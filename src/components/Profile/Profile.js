import React from "react";
import './Profile.css'
import { useNavigate } from "react-router-dom";


const Profile = () => {
    const navigator = useNavigate();

    return(
        <div >
            <div className='profileNavbar'>
                <button className='festivaProfile grow' onClick={()=> navigator('/')}></button>
            </div>
            This is the profile page
        </div>
    );
}

export default Profile;