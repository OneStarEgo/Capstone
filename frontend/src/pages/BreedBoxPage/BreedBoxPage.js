import React, { useState, useRef } from 'react';
import axios from 'axios';
import Rate from '../../components/RatingBar/Rating';
import useAuth from '../../hooks/useAuth';

const BreedBoxPage = (props) => {
    const [dogName, setDogName] = useState([]);
    const [breed, setBreed] = useState([]);
    const [comment, setComments] = useState([]);
    const [user, token] = useAuth();


    const postNewComment = async (newComment) => {
        try {
            let response = await axios.post('http://127.0.0.1:8000/api/comments/', newComment, {
                headers: {
                    Authorization: " Bearer " + token,
                },
            });
            setComments(response.data.items)
        } catch (error) {
            console.log(error.response.data)
        }
    };


    const form = useRef();
    
    function handleSubmit(event){
        event.preventDefault()
        let newComment = {
            email : user.email,
            username : user.username,
            dog : dogName,
            breed : breed,
            comment : comment,
        };
        postNewComment(newComment)
        console.log('Comment Posted')
    }

    const handleChange = (e) => {
        setComments(e.currentTarget.value)
    }

    return (
        <div>
            <br />
            <h1> Breed Box Comments </h1>
            <hr />
            <form ref={form}  style={{display: 'flex'}} onSubmit={handleSubmit}>
                <label>
                Dog Name:{" "}
                <input
                type="text"
                name="dogName"
                value={dogName}
                onChange={(event) => setDogName(event.target.value)}
                />
                </label>
                <label>
                Breed:{" "}
                <input
                type="text"
                name="breed"
                value={breed}
                onChange={(event) => setBreed(event.target.value)}
                />
                </label>

                <input type='text'
                    name='comment'
                    style={{width: '100%', borderRadius: '5px'}}
                    defaultValue=''
                    placeholder="write comment here"
                    value={comment}
                    onChange={handleChange}
                />
                <br />
                <button style={{width: '20%', height: '52px'}}>Submit</button>
            </form>
            <Rate />
        </div>
    );
}
export default BreedBoxPage;