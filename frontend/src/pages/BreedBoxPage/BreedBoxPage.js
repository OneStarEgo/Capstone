import React, { useState } from 'react';
import axios from 'axios';
import Rate from '../../components/RatingBar/Rating';
import useAuth from '../../hooks/useAuth';

const BreedBoxPage = (props) => {
    const [dogName, setDogName] = useState("");
    const [breed, setBreed] = useState([]);
    const [comment, setComments] = useState("");
    const [user, token] = useAuth();

    const HandleSubmit = async (event) => {
        event.preventDefault()
        let newComment = {
            email : user.email,
            username : user.username,
            dog_name : dogName,
            breed : breed,
            comment : comment,
        };
        try {
            let response = await axios.post(
                "http://127.0.0.1:8000/api/comments/",
                newComment,
                {
                    headers:{
                        Authorization: "Bearer " + token,
                    },
                }
            );
            console.log("Comment posted", response.data.items);
        } catch (error) {
            console.log(error.response.data);
        }
    };

    const HandleChange = (e) => {
        setComments(e.currentTarget.value)
    }

    return (
        <div>
            <br />
            <h1> Breed Box Comments </h1>
            <hr />
            <form style={{display: 'flex'}} onSubmit={HandleSubmit}>
                <label>
                Dog Name:{" "}
                <input
                type="text"
                name="dog_name"
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
                    placeholder="write comment here"
                    value={comment}
                    onChange={HandleChange}
                />
                <br />
                <button style={{width: '20%', height: '52px'}}>Submit</button>
            </form>
            <Rate />
        </div>
    );
}
export default BreedBoxPage;