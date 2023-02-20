import { useState, useEffect} from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

/*<div className="pet-select-container">
      <label htmlFor="pet-select">Select a pet:</label>
      <select id="pet-select" value={selectedPet ? selectedPet.id : ""} onChange={(event) => {
        const petId = event.target.value;
        const pet = userDogs.find((dog) => dog.id === petId);
        handleSelectPet(pet);
      }}>
        <option value="">Select a pet</option>
        {userDogs.map((dog) => (
          <option key={dog.id} value={dog.id}>{dog.name}</option>
        ))}
      </select>
    </div>*/

const StatusPage = () => {
  const [date, setDate] = useState(new Date());
  const [selectedPet, setSelectedPet] = useState(null);
  const [userDogs, setUserDogs] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  
  const [user,token] = useAuth();

  useEffect(() => {
    const getOwnersDog = async () => {
        try {
          let response = await axios.get(`http://127.0.0.1:8000/api/pet/${user.id}/`, {
            headers: {
              Authorization: "Bearer " + token, 
            },
          });
          if (response.data) {
            setUserDogs(response.data.items)
          } else {
            console.log("response data is undefined");
          }
        } catch (error) {
          console.log(error.response)
        }
      };
      getOwnersDog();
  }, [token, user.id, setUserDogs]);

  const getPetAppointments = async (petId) => {
    try {
      let response = await axios.get(`http://127.0.0.1:8000/api/appointment/${petId}/`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setAppointments(response.data.items)
    } catch (error) {
      console.log(error.response.data)
    }
  };

  const isAppointmentDate = (date) => {
    return appointments.some((appointment) => {
      return appointment.date.toDateString() === date.toDateString();
    });
  };

  const handleSelectPet = (pet) => {
    setSelectedPet(pet);
    getPetAppointments(pet.id);
    setStartDate(pet.startDate);
    setEndDate(pet.endDate)
  };

  const tileContent = ({ date, view }) => {
    if(view === "month" && isAppointmentDate(date)) {
      return <div style={{ backgroundColor: "red", height: "100%"}} />;
    }
    return null;
  };

  const handleClickDay = (date) => {
    const foundAppointment = appointments.find((appointment) => {
      return appointment.date.toDateString() === date.toDateString();
    });

    if (foundAppointment) {

    }
  };

  let completed = 0;
  if(selectedPet) {
    completed = selectedPet.completed;
  }
  
  
  return (
  <div className="statuspage">
    <h1 className="stat-h1">Hello {user.username}</h1>
    <div className="calendar-container">
      {selectedPet && (
        <>
        <ProgressBar completed={completed} startDate={startDate} endDate={endDate} />
        <p>Dog progress: {completed}%</p>
        <p>Enrollment date: {startDate.toDateString()}</p>
        <p>Graduation date: {endDate.toDateString()}</p>
        </>
      )}
      <Calendar
      value={date}
      onChange={setDate}
      tileContent={tileContent}
      onClickDay={handleClickDay}
      />
    </div>
  </div>
  );
};


export default StatusPage;