import React, { useState } from 'react';
import axios from 'axios';
import Rate from '../../components/RatingBar/Rating';
import BreedBoxComments from '../../components/BreedBox/BreedBoxComments';



const BreedBoxPage = (props) => {
    const [dogs, setDogs] = useState('');
    const [comments, setComments] = useState('');
    //const [post, setPost] = useState('');
    //const [name, setName] = useState('');
    
    
    const getDogList = async()=>{
        try{
            let response = await axios.get("http://127.0.0.1:8000/api/pet")
            setDogs(response.data.items)
        }catch(error){
            console.log(error.response.data)
        };
    }

    const getComments = async()=>{
        try{
            let response = await axios.post("http://127.0.0.1:8000/api/comments/")
            setComments(response.data.items)
        }catch(error){
            console.log(error.response.data)
        };
    }

    return (
        <div>
            <BreedBoxComments/>
            <Rate />
                <div>
                    <button onClick={()=> {getDogList()}}>Dogs</button>
                    <button onClick={()=> {getComments()}}>User Comments</button>
                    
                </div>
        </div>
    )
}
export default BreedBoxPage;