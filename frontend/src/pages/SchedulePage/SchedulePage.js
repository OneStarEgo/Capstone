import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import CheckBox from "../../components/CheckBox/CheckBox";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


/*(Dropdown Menu)
<Dropdown isMulti placeHolder="Dog Breed/Breeds..." options={options} setDogBreeds={setDogBreeds} />
*/
const SchedulePage = () => {
  

  const { registerDog } = useContext(AuthContext);
  const defaultValues = {
    breed: "",
    temperament: "",
    name: "",
    age: "",
  };
  const [formData, handleInputChange, handleSubmit] = useCustomForm(
    defaultValues,
    registerDog
  );

  const [choice, choices] = useState("")
  const [preferences, setPreferences] = useState( { "obedience training": false, "performance training": false, "protection training": false} )

  function togglePreference(service) {
    preferences[service] = !preferences[service];

    let newChoices = "";
    for ( var service in preferences ) {

      if (preferences[service] ) {

        newChoices += service + " ";
      }
    }
    choices(newChoices);
  }
  
  const [user, token] = useAuth();
  const[newDog, setNewDog] = useState([]);
  const {id, user_id} = useParams();

  const postNewDog = async () => {
    try {
      let response = await axios.post(`http://127.0.0.1:8000/api/pet/${id}/`, {
        headers: {
          Authorization: " Bearer " + token, 
        },
      });
      setNewDog(response.data.items)
    } catch (error) {
      console.log(error.response.data)
    }
  };

  return (
    <div className="container">
      <h1>Hello {user.username}</h1>
        <form className="form" onSubmit={handleSubmit}>
          <h2>Dog Info</h2>
          <label>
            Owner Name:{user.first_name} 
          </label>
          <label>
            Breed:{" "}
            <input
            type="text"
            name="breed"
            value={formData.breed}
            onChange={handleInputChange}
            />
          </label>
          <label>
            Temperament:{" "}
            <input
              type="text"
              name="temperament"
              value={formData.temperament}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Name:{" "}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Age:{" "}
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
            />
          </label>
        </form>
        <button onClick={() => {postNewDog()}}>Register Dog!</button>
        <h2 className="services-sect">Training/Grooming</h2>
          <CheckBox
          onText="Obedience Training will teach your dog respect. They will learn who is their leader, and what their place is. All dogs should be able to respond to a few basic commands like stay or come. Listening to their owner is not only good for their behavior, but it is also good for their safety."
          offText="Obedience Training will teach your dog respect. They will learn who is their leader, and what their place is. All dogs should be able to respond to a few basic commands like stay or come. Listening to their owner is not only good for their behavior, but it is also good for their safety."
          togglePreference={togglePreference}
          service="obedience training"
          />
          <CheckBox
          onText="Performance Training is all about mastering the obstacle course but it's also a fun way to stimulate and tire out your dog as a hobby."
          offText="Performance Training is all about mastering the obstacle course but it's also a fun way to stimulate and tire out your dog as a hobby."
          togglePreference={togglePreference}
          service="performance training"
          />
          <CheckBox
          onText="Protection Training teaches your dog to be fearless, confident, controlled, and they should be naturally suspicious of strangers for your protection."
          offText="Protection Training teaches your dog to be fearless, confident, controlled, and they should be naturally suspicious of strangers for your protection."
          togglePreference={togglePreference}
          service="protection training"
          />
          <h1> You have chosen {choice} </h1>
    </div>
  );
};



export default SchedulePage;