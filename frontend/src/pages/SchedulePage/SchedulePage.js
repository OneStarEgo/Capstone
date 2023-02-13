import React, { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import CheckBox from "../../components/CheckBox/CheckBox";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import emailjs from "@emailjs/browser";



/*(Dropdown Menu)
<Dropdown isMulti placeHolder="Dog Breed/Breeds..." options={options} setDogBreeds={setDogBreeds} />
*/
const SchedulePage = () => {

  const [user, token] = useAuth();
  const[age, setAge] = useState([]);
  const[breed, setBreed] = useState([]);
  const[name, setName] = useState([]);
  const[temperament, setTemperament] = useState([]);
  const[newDog, setNewDog] = useState([]);
  const[wants_coat_trimming, setCoatTrimming] = useState(true);
  const[wants_coat_styling, setCoatStyling] = useState(true);
  const[wants_full_service, setFullService] = useState(true);
  const[wants_obedience_training, setObedienceTraining] = useState(true);
  const[wants_performance_training, setPerformanceTraining] = useState(true);
  const[wants_protection_training, setProtectionTraining] = useState(true);

  const postNewDog = async (newPet) => {
    try {
      let response = await axios.post('http://127.0.0.1:8000/api/pet/', newPet, {
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

    emailjs.sendForm("contact_service", "contact_form", form.current, "BM8fgM1vbQEdond4E")
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text)
      }) 
  }

  const handleChange = (choice)=>{
    if(choice==="trimming")
    {
      if(wants_coat_trimming===true){
        console.log(choice,"")
      }
      setCoatTrimming(!wants_coat_trimming)
    }
    if(choice==="styling")
    {
      if(wants_coat_styling===true){
        console.log(choice,"")
      }
      setCoatStyling(!wants_coat_styling)
    }
    if(choice==="full service")
    {
      if(wants_full_service===true){
        console.log(choice,"")
      }
      setFullService(!wants_full_service)
    }
    if(choice==="obedience")
    {
      if(wants_obedience_training===true){
        console.log(choice,"")
      }
      setObedienceTraining(!wants_obedience_training)
    }
    if(choice==="performance")
    {
      if(wants_performance_training===true){
        console.log(choice,"")
      }
      setPerformanceTraining(!wants_performance_training)
    }
    if(choice==="protection")
    {
      if(wants_protection_training===true){
        console.log(choice,"")
      }
      setProtectionTraining(!wants_protection_training)
    }
  }

  function handleSubmit(event){
    event.preventDefault();
    let newPet = {
      user_id: user.id,
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
        </form>
        <button type="submit" onClick={confirmationEmail} >Register Dog!</button>
        
      <h2 className="services-sect">Training/Grooming</h2>
        <input type="checkbox" value={wants_obedience_training} onChange={()=>handleChange("obedience")} /> Obedience Training
        <input type="checkbox" value={wants_performance_training} onChange={()=>handleChange("performance")} /> Performance Training
        <input type="checkbox" value={wants_protection_training} onChange={()=>handleChange("protection")} /> Protection Training
        <input type="checkbox" value={wants_coat_trimming} onChange={()=>handleChange("trimming")} /> Coat Trimming
        <input type="checkbox" value={wants_coat_styling} onChange={()=>handleChange("styling")} /> Coat Styling
        <input type="checkbox" value={wants_full_service} onChange={()=>handleChange("full service")} /> Full Service
    </div>
  );
};



export default SchedulePage;