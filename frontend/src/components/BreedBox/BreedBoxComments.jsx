import React, { useState } from 'react';


const BreedBoxComments = (props) => {
    const [dog, setDogs]=useState('');
    const [comment, setComments]=useState('');
    const [breed, setBreed]=useState('')

    //const

    function handlePost(event){
        event.preventDefault();

        let newPost = {
            dog : dog,
            comment : comment,
            breed : breed,  }
        console.log(newPost);
        props.addNewPostProperty(newPost)
    }
    return (
        <form onSubmit={handlePost}>
            <textarea placeholder='Dog Name Here'></textarea>
            <div className='dname'>
                <input type='submit'value={dog} />
            </div>
            <textarea placeholder='Dog Breed Here'></textarea>
            <div className='dbreed'>
                <input type='submit'value={breed} />
            </div>
            <textarea placeholder='Comment Here'></textarea>
            <div className='dcomment'>
                <input type='submit' value ={comment} />
            </div>
            <div className='btn'>
                <input type='submit'value='comment'></input>
                <button>Cancel</button>
            </div>
        </form>
    );
}

export default BreedBoxComments;