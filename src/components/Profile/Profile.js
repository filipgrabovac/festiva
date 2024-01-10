import React from "react";
import './Profile.css'
import { Outlet, useNavigate } from "react-router-dom";


const Profile = () => {
    const navigator = useNavigate();

    const setProfileBtnColors = (buttonId) => {
        const profileButtons = Array.from(document.getElementById('profileButtons').children);
        profileButtons.splice(3, 1);
        console.log(profileButtons);

        profileButtons.forEach(element => {
            if (element.id == buttonId) {
                element.classList.add('GB');
                element.classList.remove('LGB');
            } else {
                element.classList.remove('GB');
                element.classList.add('LGB');
            }
        });
    }
    

    const handleProfileClick = (event) => {
        navigator('/profile');
        setProfileBtnColors(event.target.id);
    }
    const handlePostsClick = (event) => {
        navigator('/profile/posts');
        setProfileBtnColors(event.target.id);
    }

    const handleLogoutClick = (event) => {
        navigator('/');
        setProfileBtnColors(event.target.id)
    }
    

    return(
        <div>
            <div className='profileNavbar'>
                <button className='festivaProfile grow' onClick={() => navigator('/')}></button>
            </div>
           
           <div id = 'mainDiv' className="flex flex-row">
                <div id ='profileButtons' className="profileButtons flex flex-column shadow-4">
                    <button id = 'details' className="br3 bn GB dim white b shadow-4" onClick={handleProfileClick}>Profil</button>
                    <button id = 'posts' className="br3 bn LGB dim white b shadow-4" onClick={handlePostsClick}>Moji oglasi</button>
                    <button id = 'signout' className="br3 bn LGB dim white b shadow-4" onClick={handleLogoutClick}>Odjava</button>
                    <button id = 'closeaccount' className="br3 bn bg-red dim white b shadow-4">Zatvori račun</button>                            
                </div>
                
                <Outlet />
            </div>

        </div>
    );
}

export default Profile;