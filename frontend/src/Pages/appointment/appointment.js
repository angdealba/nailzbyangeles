import "./appointment.css";
import {useState} from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useNavigate} from "react-router-dom";

export default function Appointment(){
    const navigate = useNavigate();
    const [date, setDate] = useState(new Date());
    const dayFormatter = new Intl.DateTimeFormat('en-US', { weekday: 'long' });
    const monthFormatter = new Intl.DateTimeFormat('en-US', { month: 'long' });

    function handleClickDay(value){
        setDate(value);
        sessionStorage.setItem("date", value);

    }

    function handleSelect(time){
        sessionStorage.setItem("time", time);
        navigate("/clientInfo");
    }

    return (
        <>
            <Row>
                <Col>
                    <h6>{sessionStorage.getItem("service")}  ({sessionStorage.getItem("length")}) - ${sessionStorage.getItem("price")}</h6>
                    <Calendar onClickDay={handleClickDay}></Calendar>
                </Col>
                <Col>
                    <h6>{dayFormatter.format(date)}, {monthFormatter.format(date)} {date.getDate()}</h6>
                    <button onClick={() => handleSelect("9")}>9:00AM</button>
                    <button onClick={() => handleSelect("10")}>10:00AM</button>
                    <button onClick={() => handleSelect("11")}>11:00AM</button>
                </Col>
            </Row>
        </>
    )
};