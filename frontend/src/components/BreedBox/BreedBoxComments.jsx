import React, { useState } from 'react';


const BreedBoxComments = (props) => {
    const [dogs, setDogs]=useState('');
    const [comments, setComments]=useState('');

    function handlePost(event){
        event.preventDefault();

        let newPost = {
            dog : dogs,
            comment : comments};
        console.log(newPost);
        props.addNewPostProperty(newPost)
    }
    return (
        <form onSubmit={handlePost}>
            <label>Dog</label>
            <input type='name'value={dogs} onChange={(event) => setDogs(event.target.value)} />
            <br></br>
            <label>Comment</label>
            <textarea type='post' value ={comments} onChange={(event) => setComments(event.target.value)} />
            <button type='submit'>Post</button>
        </form>
    );
}

export default BreedBoxComments;