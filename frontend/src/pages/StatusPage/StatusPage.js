import { useState, useEffect} from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import useAuth from "../../hooks/useAuth";
import axios from "axios";


const StatusPage = () => {
    const [date, setDate] = useState(new Date());
    const [completed, setCompleted] = useState(0);

    useEffect(() => {
        setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
    }, []);

    const [user,token] = useAuth();
    const [userDog, setUserDog] = useState([]);

    const getOwnersDog = async () => {
        try {
          let response = await axios.get(`http://127.0.0.1:8000/api/pet/${user.username}/`, {
            headers: {
              Authorization: " Bearer " + token, 
            },
          });
          setUserDog(response.data.items)
        } catch (error) {
          console.log(error.response.data)
        }
      };
    
    
    return (
        <div className="statuspage">
            <div><h1>Hello {user.username}</h1></div>
            <div><h2>{} Progress</h2></div>
            <div className="progress-bar">
                <ProgressBar bgcolor={"#00539cff"} completed={completed} />
            </div>
            <h1 className="header">Dog Calendar</h1>
            <div className="calendar-container">
                <Calendar
                 onChange={setDate}
                 value={date}
                 selectRange={true}
                />
            </div>
            {date.length > 0 ? (
             <p className="text-center">
                <span claasName="bold">Training Start:</span>{" "}
                {date[0].toDateString()}
                &nbsp;|&nbsp;
                <span className="bold">Training End:</span> {date[1].toDateString()}
            </p>
            ) : (
            <p className="text-center">
                <span className="bold">Default selected date:</span>{" "}
                {date.toDateString()}
            </p>
            )}
        </div>
    );
};


export default StatusPage;