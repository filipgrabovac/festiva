import React, { useEffect, useState } from "react";
import './CreatePost.css';

const CreatePost = () => {
    const [eventName, setEventName] = useState('my new event');
    const [name, setName] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [eventDate, setEventDate] = useState('00 00 00')
    const [eventDuration, setEventDuration] = useState(0);
    const [groupSize, setGroupSize] = useState('Neodređeno');
    const [eventLocation, setEventLocation] = useState('');
    const [eventImageUrl, setEventImageUrl] = useState('');

    useEffect(()=> {

    }, [])


    return(
        <div>
            <div className="postElements flex flex-column">
                <input type='text' className="w-25" placeholder="naziv događaja"/>
                <input type='text' className="w-25" placeholder="opis"/>
                <input type='text' className="w-25" placeholder="datum"/>
                <div>
                    <p>od</p>
                    <p>do</p>
                </div>
                
                <input type='text' className="w-25" placeholder="broj izvođača"/>
                <input type='text' className="w-25" placeholder="lokacija"/>
            </div>
            
        </div>
    );
}

export default CreatePost;