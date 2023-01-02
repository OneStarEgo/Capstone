import React, { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import CheckBox from "../../components/CheckBox/CheckBox";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import emailjs from "@emailjs/browser";



/*(Dropdown Menu)
<Dropdown isMulti placeHolder="Dog Breed/Breeds..." options={options} setDogBreeds={setDogBreeds} />
*/
const SchedulePage = () => {
  

  

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
  const {user_id, setUserId} = useParams();
  const[age, setAge] = useState([]);
  const[breed, setBreed] = useState([]);
  const[name, setName] = useState([]);
  const[temperament, setTemperament] = useState([]);
  const[newDog, setNewDog] = useState([]);

  const postNewDog = async (newPet) => {
    try {
      let response = await axios.post(`http://127.0.0.1:8000/api/pet/`, newPet, {
        headers: {
          Authorization: " Bearer " + token, 
        },
      });
      setNewDog(response.data.items)
    } catch (error) {
      console.log(error.response.data)
    }
  };

  const form = useRef();

  const confirmationEmail = (e) => {
    e.preventDefault();

    emailjs.confirmationForm("contact_service", "contact_form", form.current, "BM8fgM1vbQEdond4E")
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text)
      }) 
      e.target.reset()
  }

  function handleSubmit(event){
    event.preventDefault();
    let newPet = {
      user: user.id,
      breed: breed,
      temperament: temperament,
      name: name,
      age: age
    };
    postNewDog(newPet)
    console.log("Pet Registered!")
  }

  return (
    <div className="container">
      <h1>Hello {user.username}</h1>
        <form ref={form} className="form" onSubmit={handleSubmit}>
          <h2>Dog Info</h2>
          <label>
            Owner Name:{user.first_name} 
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
          <label>
            Temperament:{" "}
            <input
              type="text"
              name="temperament"
              value={temperament}
              onChange={(event) => setTemperament(event.target.value)}
            />
          </label>
          <label>
            Name:{" "}
            <input
              type="text"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <label>
            Age:{" "}
            <input
              type="number"
              name="age"
              value={age}
              onChange={(event) => setAge(event.target.value)}
            />
          </label>
          <button type="submit" >Register Dog!</button>
        </form>

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
          <h2> You have chosen {choice} </h2>
          <br />
          <h2>Grooming Options</h2>
          <CheckBox
          onText="Coat Trimming"
          offText="Coat Trimming"
          togglePreference={togglePreference}
          service="coat trimming"
          />
          <CheckBox
          onText="Coat Styling"
          offText="Coat Styling"
          togglePreference={togglePreference}
          service="coat styling"
          />
          <CheckBox
          onText="Full Service"
          offText="Full Service"
          togglePreference={togglePreference}
          service="full service"
          />
    </div>
  );
};



export default SchedulePage;