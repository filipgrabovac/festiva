import { useEffect,  useState } from "react";
import './Posts.css';
import Post from "../Post/Post";
import ReactLoading from 'react-loading';

const Posts = () => {
    const [myPosts, setMyPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // currently fetching images from API but in future fetch data from database
        let post, counter = 1, postsPromise = [];

        while (counter < 9) {
            post = fetch('https://api.slingacademy.com/v1/sample-data/photos/' + counter)
                    .then(res => res.json())
                    .then(imageData => {
                        // postavljen je photo.id jer se counter asinkrono svaki put postavi na 9, a key atribut se ne smije duplicirati!
                        return <Post key={imageData.photo.id} postId = {imageData.photo.id} imageURL={imageData.photo.url} />;
                    })
                    .catch(err => 
                        console.log(err.message))
    
            postsPromise[counter-1] = post;
            counter++;
        }

        Promise.all(postsPromise)
            .then(data => setMyPosts(data))
   
        setTimeout(() => {  
            setIsLoading(false); 
        }, 2000);   
       
    }, [])

    return(
        <div>
            {isLoading ? 
                <div>
                    <ReactLoading  type="bars" color="#61AEA7" height={80} width={80} className="loadingData"/>
                </div>
            :
            
                <div className="Posts flex flex-row">
                    {myPosts}
                </div>
            } 
        </div>
          
    );
}

export default Posts;

// creating loader
// when creating a loader we need to specify that the function is async to use await method

