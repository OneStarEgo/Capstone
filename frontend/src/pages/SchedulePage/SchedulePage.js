import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import Dropdown from "../../components/DropdownMenu/Dropdown";
import ProgressBar from "../../components/ProgressBar/ProgressBar";


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

  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
  }, []);

return (
    <div className="container">
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
        
        <button>Register Dog!</button>
      </form>
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
      <div className="progress-bar">
          <ProgressBar bgcolor={"#00539cff"} completed={completed} />
      </div>
    </div>
  );
};




export default SchedulePage;