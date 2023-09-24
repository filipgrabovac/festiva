import React from "react";
import './HomepagePost.css';

const HomepagePost = (event, date, timeFrom, timeUntil, location, numOfPerformers) => {
    return (
        <div className="post">

            <h1>Advent u Zagrebu - Kaptolski mali Božić</h1>

            <div className=''>
                <div className="dateTime flex flex-row">
                    <p>Datum: 25.12.2023</p>
                    <p>Vrijeme: 18:00h - 22:00h</p>
                </div>
                <div className="locPerf flex flex-row">
                    <p>Lokacija: Zagreb</p>
                    <p>Broj izvođača: 2-5</p>
                </div>
            </div>  
        </div>
    );
}

export default HomepagePost;