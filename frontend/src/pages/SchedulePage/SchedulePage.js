import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import Dropdown from "../../components/DropdownMenu/Dropdown";
import CheckBox from "../../components/CheckBox/CheckBox";


const SchedulePage = () => {
  const [dogBreeds, setDogBreeds] = useState([]);
  
  const options = [
    {value: "green", label: "Green"},
    {value: "blue", label: "Blue"},
    {value: "red", label: "Red"},
    {value: "yellow", label: "Yellow"},
    {value: "orange", label: "Orange"},
    {value: "pink", label: "Pink"},
    {value: "purple", label: "Purple"},
    {value: "grey", label: "Grey"},
  ];

  async function dog_list() {
    const response = await axios.get("https://dog.ceo/api/breeds/list/all");
    setDogBreeds(response.data)
  }
  
  useEffect(() => {
    dog_list();
  }, []);

  const { registerDog } = useContext(AuthContext);
  const defaultValues = {
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
  }

return (
    <div className="container">
      <div className="user-info-box" onSubmit={handleSubmit}>
        <label className="f-name">
          First Name: {""}
          <input
          type= "text"
          name= "firstName"
          value={formData.firstName}
          />
        </label>
        <label className="l-name">
          Last Name: {""}
          <input
          type= "text"
          name= "lastName"
          value={formData.lastName}
          />
        </label>
        <label>
          Address: {""}
          <input
          type= "text"
          name= "address"
          value={formData.address}
          />
        </label>
        <label>
          Zip Code: {""}
          <input
          type= "text"
          name= "zip_code"
          value={formData.zip_code}
          />
        </label>
        <label>
          Email Address: {""}
          <input
          type= "text"
          name= "first_name"
          value={formData.first_name}
          />
        </label>
      </div>
      <div className="">
        <Dropdown isMulti placeHolder="Dog Breed/Breeds..." options={options} setDogBreeds={setDogBreeds} />
      </div>
      <form className="form" onSubmit={handleSubmit}>
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
            type="text"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
          />
        </label>
      </form>
      <button>Register Dog!</button>
      <h2 className="services-sect">Training/Grooming</h2>
      <div className="">
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
    </div>
  );
};




export default SchedulePage;