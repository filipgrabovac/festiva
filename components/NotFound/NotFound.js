import React from "react";
import { Link } from "react-router-dom";
import './NotFound.css';

const NotFound = () => {
    return(
        <div>
            This is my custom not found page, return to the <Link to='/'>main page</Link> pls
        </div>
    );
}

export default NotFound;


// use <Link> to return to the main page from 404 page via plain text