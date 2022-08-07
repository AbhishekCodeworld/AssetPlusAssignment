import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import React from "react";


const AddPost = () =>{
    const [title, setTitle] = useState('');
    const [desciption, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const history = useNavigate();

    const onAdded = async () => {
        axios.post('localhost:8000/addPost', {
            title: title,
            desciption: desciption,
            imageUrl: imageUrl
        }).then(res => history.push('/')).catch(err =>
            console.log(err))
    };



    return (
        <div>
            <form>
                <span>Title</span>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)}></input>
                <span>Description</span>
                <input type='text' value={desciption} onChange={e=> setDescription(e.target.value)}></input>
                <span>Image Url</span>
                <input type="text" value={imageUrl} onChange={e => setImageUrl(e.target.value)}></input>
                <button type="submit" onClick={onAdded}>AddPost</button>
            </form>
        </div>
    );

    };

    export default AddPost;