import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import Dropdown from "../../components/DropdownMenu/Dropdown";


const SchedulePage = () => {
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
        <Dropdown isMulti placeHolder="Dog Breed/Breeds..." options={options} />
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
    </div>
  );
};




export default SchedulePage;