import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Rate from '../../components/RatingBar/Rating';
import useAuth from '../../hooks/useAuth';
import { Rating } from '../../components/RatingBar/RatingStyles';

const BreedBoxPage = (props) => {
    const [dogName, setDogName] = useState("");
    const [breed, setBreed] = useState([]);
    const [comment, setComments] = useState("");
    const [rating, setRating] = useState(0);
    const [ratingValue, setRatingValue] = useState(0);
    const [commentsList, setCommentsList] = useState([]);
    const [user, token] = useAuth();

    const HandleSubmit = async (e) => {
        e.preventDefault()
        let newComment = {
            email : user.email,
            username : user.username,
            dog_name : dogName,
            breed : breed,
            comment : comment,
            rating: ratingValue,
        };
        try {
            let response = await axios.post("http://127.0.0.1:8000/api/comments/", newComment,
            {
                headers:{
                    Authorization: "Bearer " + token,
                },
            }
            );
            setCommentsList([newComment]);
            console.log("Comment posted");
        } catch (error) {
            console.log(error);
        }
    };

    const HandleChange = (e) => {
        setComments(e.currentTarget.value)
    }

    const handleRatingChange = (value) => {
        setRating(value);
        setRatingValue((value - 1) / 4);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await axios.get("http://127.0.0.1:8000/api/comments/", 
                    {
                        headers:{
                            Authorization: "Bearer " + token,
                        },
                    }
                );
                setCommentsList(response.data.items);
            } catch (error) {
                console.log(error.response.data);
            }
        };

        fetchData();
    }, [])

    return (
        <div className='comment-sect'>
            <br />
            <h1 className='breedbox-h1'> Breed Box Comments </h1>
            <hr />
            <form className='comment-form' style={{display: 'flex'}} onSubmit={HandleSubmit}>
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
                Comment
                <input type='text'
                    name='comment'
                    style={{width: '100%', borderRadius: '5px'}}
                    placeholder="write comment here"
                    value={comment}
                    onChange={HandleChange}
                />
                <Rate value={rating} onRatingChange={handleRatingChange}/>
                <br />
                <button style={{width: '20%', height: '52px'}}>Submit</button>
            </form>
                {commentsList && commentsList.map((comment, index) => (
                    <div key={index}>
                        <p>{comment.email}</p>
                        <p>{comment.username}</p>
                        <p>{comment.dog_name}</p>
                        <p>{comment.breed}</p>
                        <p>{comment.comment}</p>
                        <Rate value={comment.rating} />
                </div>
            ))}
        </div>
    );
};
export default BreedBoxPage;