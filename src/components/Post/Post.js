import React, { useEffect, useState } from "react";
import './Post.css'

const Post = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [date, setDate] = useState('00 00 00');
    const [location, setLocation] = useState('');
    const [imageURL, setImageURL] = useState();
    useEffect(() => {
        setName('Filip');
        setSurname('Grabovac');
        setLocation('Kutina');
    }, [date])

    useEffect(() => {
        let imageID = Math.floor(Math.random() * 10);
         
        fetch('https://api.slingacademy.com/v1/sample-data/photos/' + imageID)
        .then(res => res.json())
        .then(imageData => {
            setImageURL(imageData.photo.url);
        })
        .catch(err => console.log(err.message));
    }, [date])

    useEffect(()=> {
        const post = document.getElementById('Post');
        post.style.backgroundImage = imageURL;
    }, [imageURL])
    

    return(
        <div id='Post' className="Post dim">
            <img src={imageURL} />

            <div className="InfoBox">
                <div className="mh2">
                    <p>{name}</p>
                    <p>{surname}</p>
                </div>
                <div className="mh2">
                    <p>{date}</p>
                    <p>{location}</p>
                </div>
                
            </div>
        </div>
        
    );
}

export default Post;