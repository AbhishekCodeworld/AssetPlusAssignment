import React from "react";
const post = (title,descritpiton,poster) =>{
    return (
        <div className='postDiv'>
                    <h1>{title}</h1>
                    <p>{descritpiton}</p>
                    <img src={poster} alt='Poster'/>
        </div>
    );
}

export default post;