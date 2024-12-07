import "./appointment.css";
import {useState} from "react";
import Calendar from 'react-calendar';
import './customCalendar.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useNavigate} from "react-router-dom";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setAppointment } from '../../Features/bookingSlice';

export default function Appointment(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [date, setDate] = useState(new Date());
    const dayFormatter = new Intl.DateTimeFormat('en-US', { weekday: 'long' });
    const monthFormatter = new Intl.DateTimeFormat('en-US', { month: 'long' });
    const service = useSelector((state) => state.service);

    function handleClickDay(value){
        setDate(value);
    }

    function handleSelect(time){
        const dateWithTime = new Date(date);
        dateWithTime.setHours(time, 0, 0, 0);
        dispatch(setAppointment({date_time: dateWithTime, silent: false}))
        navigate("/clientInfo");
    }

    return (
        <>
            <Row>
                <Col className="calendar">
                    <h5>Select a Date & Time</h5>
                    <h6>{service.name}
                        {service.length != null && ` (${service.length})`}
                         - ${service.price}</h6>
                    <Calendar defaultValue={new Date()} minDate={new Date()} onClickDay={handleClickDay}></Calendar>
                </Col>
                <Col className="availability">
                    <h5>{dayFormatter.format(date)}, {monthFormatter.format(date)} {date.getDate()}</h5>
                    <button className="time" onClick={() => handleSelect("9")}>9:00AM</button>
                    <button className="time" onClick={() => handleSelect("10")}>10:00AM</button>
                    <button className="time" onClick={() => handleSelect("11")}>11:00AM</button>
                </Col>
            </Row>
        </>
    )
};