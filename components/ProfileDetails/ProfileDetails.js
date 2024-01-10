import React from "react";
import './ProfileDetails.css';
const ProfileDetails = () => {
    return(
        <div className="details shadow-5">
            <h2 className="shadow-5">Pojedinosti o profilu</h2>

             <div className="mt3 flex flex-row flex-wrap">
                <div className="ml3 dim">
                    <h3>ime</h3>
                    <p>Filip</p>       
                </div>
                
                <div className="ml3 dim">
                    <h3>prezime</h3>
                    <p>Grabovac</p>
                </div>

                <div className="ml3 dim">
                    <h3>email</h3>
                    <p>Ovo je email</p>
                </div>
                
            </div>
            
            <div className="mv5 flex flex-row mh3">
                <p className="dim">potencijalni gumb za promjenu lozinke</p>
                <p className="dim">na displayu koliki je all time broj objava ( bilo bi fora to nekak fensi uredit)</p>
             </div>
        </div>
    );
}

export default ProfileDetails;