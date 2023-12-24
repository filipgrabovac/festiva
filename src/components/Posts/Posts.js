import React, { useState } from "react";
import './Posts.css'
import { useEffect } from "react";
import Post from "../Post/Post";

const Posts = () => {
    const myPosts = [];
    
    let counter = 0;
    while (counter < 8) {
        myPosts[counter] = (<Post />);
        counter++;
    }

    return(
        <div className="Posts flex flex-row">
            {myPosts}
        </div>
        
    );
}

export default Posts;