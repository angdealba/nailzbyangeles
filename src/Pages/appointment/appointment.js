import "./appointment.css";
import {useState} from "react";
import Calendar from 'react-calendar';
import './customCalendar.css';
import { useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useNavigate} from "react-router-dom";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setAppointment } from '../../Features/bookingSlice';
import appointmentService from "../../Features/appointmentService";

export default function Appointment(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [date, setDate] = useState(new Date());
    const [slots, setSlots] = useState([]);
    const dayFormatter = new Intl.DateTimeFormat('en-US', { weekday: 'long' });
    const monthFormatter = new Intl.DateTimeFormat('en-US', { month: 'long' });
    const timeFormatter = new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
    });
    const service = useSelector((state) => state.service);

    useEffect(() => {
        const fetchSlots = async () => {
            const data = await appointmentService.getAvailability(date);
            setSlots(data);
        };

        fetchSlots();
    }, [date]);

    function handleClickDay(value){
        setDate(value);
    }

    function handleSelect(slotId, date){
        console.log("appt selected:", slotId)
        dispatch(setAppointment({gcal_event_id: slotId, date_time: new Date(date), silent: false}))
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
                    {slots.map((slot, index) => (
                        <button key ={index} className="time" onClick={() => handleSelect(slot.id, slot.start)}>
                            {timeFormatter.format(new Date(slot.start))}
                        </button>
                    ))}
                </Col>
            </Row>
        </>
    )
};