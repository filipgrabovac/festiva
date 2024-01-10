import React, { useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom';
import './Post.css'

const Post = ({postId, imageURL}) => {
    const [eventName, setEventName] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [date, setDate] = useState('00 00 00');
    const [location, setLocation] = useState('');
    const PostDiv = document.getElementById(postId);
    const navigator = useNavigate();

    useEffect(() => {
        setName('Dario');
        setSurname('Grabovac');
        setLocation('Kutina');
        setEventName('Dogadaj u garesnici stagod');
    }, [date])

    const onPostClick = (event) => {
        PostDiv.classList.toggle('zoomIn');
        PostDiv.classList.toggle('dim');
        document.getElementById(imageURL).classList.toggle('barClass');

        setTimeout(() => {
            navigator(`/${eventName}`);
        }, 2000)
    }
    return(
        <div id = {postId} className="Post dim" onClick={onPostClick}>
            <div className='imgURL' style={{backgroundImage : `url(${imageURL})`}}>
                    <p>{eventName}</p>
            </div>

            <p className="mv0" style ={{height: "5px"}} id= {imageURL}></p>

            <div className="InfoBox">
                <div className="mh2">
                    <p>{name}</p>
                    <p>{location}</p>
                </div>
                <div className="mh2">
                    <p>{surname}</p>
                    <p>{date}</p>
                </div>
                
            </div>
        </div>
        
    );
}

export default Post;