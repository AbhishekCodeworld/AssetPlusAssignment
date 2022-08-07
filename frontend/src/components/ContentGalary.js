import React from 'react';
import { useEffect , useState} from 'react';
import axios from 'axios';
import Post from './post.js';

const ContentGalary = () =>{
    const [posts, setPosts] = useState([])
    useEffect(() =>{
        axios.get("localhost:8000/").then(res => res.json())
        .then(data => {
            const posts = [];
            data.map(post =>
                {
                    const newPost = {
                        title: post.title,
                        description : post.desciption,
                        poster : post.poster
                    }
                    posts.push(newPost);
                } )
            return posts;
        }
        ).then(posts =>setPosts(posts) )
        .catch(err=> console.log(err));
    })

    return(
        <div className='OuterDiv'>
            {posts.map(post =>{
                <Post title={post.title} desciption={post.desciption} poster={post.poster}/>
            })}
        </div>
    );
}

export default ContentGalary;