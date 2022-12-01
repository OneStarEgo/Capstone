import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import Dropdown from "../../components/DropdownMenu/Dropdown";


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
      <div className="user-info-form" onSubmit={handleSubmit}>
        <label>
          First Name: {""}
          <input
          type= "text"
          name= "firstName"
          value={formData.firstName}
          />
        </label>
        <label>
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
          type= "number"
          name= "zip_code"
          min="1"
          max="5"
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
    </div>
  );
};




export default SchedulePage;