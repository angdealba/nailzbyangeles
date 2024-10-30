import "./clientInfo.css";
import {useState} from "react";
import PhoneInput from 'react-phone-number-input';
import "react-phone-number-input/style.css";
import clientService from "../../Features/clientService";
import appointmentService from "../../Features/appointmentService";
import {useNavigate} from "react-router-dom";
import validator from "validator";

export default function ClientInfo(){
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [instagram, setInstagram] = useState('@');
    const [silentAppt, setSilentAppt] = useState(false);
    const dayFormatter = new Intl.DateTimeFormat('en-US', { weekday: 'long' });
    const monthFormatter = new Intl.DateTimeFormat('en-US', { month: 'long' });
    const [error, setError] = useState(false);

    const date = new Date(sessionStorage.getItem("date"));
    const hour = date.getHours() % 12 || 12
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const period = date.getHours() >= 12 ? "PM" : "AM";

    const validateEmail = (e) => {
        const email = e.target.value;
        const emailError = document.getElementById("email_error");
        if (validator.isEmail(email)) {
            setEmail(email);
            setError(false);
            emailError.textContent = "";
        } else {
            emailError.textContent = "Please enter a valid email.";
            setError(true);
        }
    }
    const validatePhone = (phone) => {
        const phoneError = document.getElementById("phone_error");
        if (phone && validator.isMobilePhone(phone)) {
            setPhone(phone);
            setError(false);
            phoneError.textContent = "";
        } else {
            phoneError.textContent = "Please enter a valid phone.";
            setError(true);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(error) return

        const clientData = {
            "first_name": firstName,
            "last_name": lastName,
            "email": email,
            "phone": phone,
            "instagram": instagram
        }
        try {
            const client = await clientService.createClient(clientData);
            console.log(`Client created successfully! ID: ${client._id}`);

            const appointmentData = {
                "client_id": client._id,
                "service_id": client._id, //temporary,
                "date_time": new Date(), //temporary
                "confirmed": false,
                "silent": silentAppt,
                "details": "none"
            }
            try {
                const appointment = await appointmentService.createAppointment(appointmentData);
                console.log(`Appointment created successfully! ID: ${appointment._id}`);
            } catch (error) {
                console.error('Error creating appointment. Please try again.');
            }
        } catch (error) {
            console.error('Error creating client. Please try again.');
        }
        navigate('/confirmation');
    }

    return (
        <>
            <div className="client_info">
                <h5>
                    {sessionStorage.getItem("service")}
                    {sessionStorage.getItem("length") && sessionStorage.getItem("length") !== "null" ?
                        ` (${sessionStorage.getItem("length")}) ` : ""}
                    - ${sessionStorage.getItem("price")}
                </h5>
                <h6>On {dayFormatter.format(date)}, {monthFormatter.format(date)} {date.getDate()} at {hour}:{minutes} {period}</h6>
                <form onSubmit={handleSubmit}>
                    <div><label className="required"> First Name: <input required={true} id="firstName" autoComplete="given-name" onChange={e => setFirstName(e.target.value)}></input></label></div>
                    <div><label className="required"> Last Name: <input required={true} id="lastName" autoComplete="family-name" onChange={e => setLastName(e.target.value)}></input></label></div>
                    <div>
                        <label className="required"> Phone:
                            <PhoneInput required = {true} id="phone" defaultCountry="US" onChange={(phone) => validatePhone(phone)}></PhoneInput>
                        </label>
                        <span className="error" id="phone_error"></span>
                    </div>
                    <div>
                        <label className="required"> Email:
                            <input required = {true} id="email" autoComplete="email" onChange={validateEmail}></input>
                        </label>
                        <span className="error" id="email_error"></span>
                    </div>
                    <div><label> Your Instagram: <input id="instagram" autoComplete="username" value ={instagram} onChange={e => setInstagram(e.target.value)}></input></label></div>
                    <div><label>Would you prefer a silent appointment? <input type="checkbox" id="silentAppt" defaultChecked={false} />Yes</label></div>
                    <button className="submit" >Submit</button>
                </form>
            </div>
        </>
);
};