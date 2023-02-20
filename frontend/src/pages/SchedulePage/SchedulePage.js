import React, { useRef, useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



/*(Dropdown Menu)
<Dropdown isMulti placeHolder="Dog Breed/Breeds..." options={options} setDogBreeds={setDogBreeds} />
*/
const SchedulePage = () => {

  const [user, token] = useAuth();
  const [ownerName, setOwnerName] = useState("")
  const [age, setAge] = useState("");
  const [breed, setBreed] = useState("");
  const [name, setName] = useState([]);
  const [temperament, setTemperament] = useState("");
  const [newDog, setNewDog] = useState([]);
  const [wantsCoatTrimming, setCoatTrimming] = useState(false);
  const [wantsCoatStyling, setCoatStyling] = useState(false);
  const [wantsFullService, setFullService] = useState(false);
  const [wantsObedienceTraining, setObedienceTraining] = useState(false);
  const [wantsPerformanceTraining, setPerformanceTraining] = useState(false);
  const [wantsProtectionTraining, setProtectionTraining] = useState(false);
  const [dogRegistered, setDogRegistered] = useState(false);
  
  const form = useRef();

  const handleRegistration = () => {
    let newPet = {
      owner_name: ownerName,
      user_id: user.id,
      breed: breed,
      temperament: temperament,
      name: name,
      age: age,
      wants_coat_trimming: wantsCoatTrimming,
      wants_coat_styling: wantsCoatStyling,
      wants_full_service: wantsFullService,
      wants_obedience_training: wantsObedienceTraining,
      wants_performance_training: wantsPerformanceTraining,
      wants_protection_training: wantsProtectionTraining
    };
    postNewDog(newPet)
      .then(() => {
        toast.success('Dog registered!');
        setDogRegistered(true);
    })
    .catch((error) => {
      toast.error('Error registering dog: ' + error.message);
    });
  };

  const postNewDog = async (newPet) => {
    try {
      let response = await axios.post('http://127.0.0.1:8000/api/pet/', newPet, {
        headers: {
          Authorization: "Bearer " + token, 
        }
      });
      setNewDog(response.data)
    } catch (error) {
      console.log(error.response.data)
    }
  };

  
  const confirmationEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "contact_service",
      "contact_form", 
      form.current, 
      "BM8fgM1vbQEdond4E"
    )
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text)
      });
  }

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    switch (name) {
      case "wants_coat_trimming":
        setCoatTrimming(checked);
        break;
      case "wants_coat_styling":
        setCoatStyling(checked);
        break;
      case "wants_full_service":
        setFullService(checked);
        break;
      case "wants_obedience_training":
        setObedienceTraining(checked);
        break;
      case "wants_performance_training":
        setPerformanceTraining(checked);
        break;
      case "wants_protection_training":
        setProtectionTraining(checked);
        break;
      default:
        break;
    }
  };


  return (
    <div className="container">
      <ToastContainer />
      <h1 className="sched-h1">Hello {user.username}</h1>
        <form ref={form} className="registration-form" onSubmit={handleRegistration}>
          <h2>Dog Info</h2>
          <label>
            Owner Name:{" "}
            <input 
            type="text"
            name="ownerName"
            value={ownerName}
            onChange={(event) => setOwnerName(event.target.value)}
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
              type="text"
              name="age"
              value={age}
              onChange={(event) => setAge(event.target.value)}
            />
          </label>
        <button type="submit" onClick={confirmationEmail} >Register Dog!</button>
        </form>
        
      <h2 className="services-sect">Training/Grooming</h2>
      <label className="checkbox-label">
        <input 
          type="checkbox"
          name="wants_obedience_training"
          checked={wantsObedienceTraining}
          onChange={handleCheckboxChange}
        />
        Obedience Training
      </label>
      <label className="checkbox-label">
        <input
          type="checkbox"
          name="wants_performance_training"
          checked={wantsPerformanceTraining}
          onChange={handleCheckboxChange}
        /> 
        Performance Training
      </label>
      <label className="checkbox-label">
        <input 
        type="checkbox"
        name="wants_protection_training"
        checked={wantsProtectionTraining}
        onChange={handleCheckboxChange}
        />
        Protection Training
      </label>
      <label className="checkbox-label">
        <input
          type="checkbox"
          name="wants_coat_trimming"
          checked={wantsCoatTrimming}
          onChange={handleCheckboxChange}
        />
        Coat Trimming
      </label>
      <label className="checkbox-label">
      <input
          type="checkbox"
          name="wants_coat_styling"
          checked={wantsCoatStyling}
          onChange={handleCheckboxChange}
        />
        Coat Styling
      </label>
      <label className="checkbox-label">
      <input
          type="checkbox"
          name="wants_full_service"
          checked={wantsFullService}
          onChange={handleCheckboxChange}
        />
        Full Service
      </label>
    </div>
  );
};



export default SchedulePage;