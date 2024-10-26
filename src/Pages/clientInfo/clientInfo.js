import "./clientInfo.css";
import {useState} from "react";
import PhoneInput from 'react-phone-number-input';
import "react-phone-number-input/style.css";
import clientService from "../../Features/clientService";
import appointmentService from "../../Features/appointmentService";
import {useNavigate} from "react-router-dom";

export default function ClientInfo(){
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [instagram, setInstagram] = useState('@');
    const [silentAppt, setSilentAppt] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

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
            <div className="container">
                <div className="h5">{sessionStorage.getItem("service")}
                    ({sessionStorage.getItem("length")}) -
                    ${sessionStorage.getItem("price")}</div>
                <div className="h6">On {sessionStorage.getItem("date")}</div>
                <form method="post" onSubmit={handleSubmit}>
                    <div><label> First Name: <input id="firstName" autoComplete="given-name" onChange={e => setFirstName(e.target.value)}></input></label></div>
                    <div><label> Last Name: <input id="lastName" autoComplete="family-name" onChange={e => setLastName(e.target.value)}></input></label></div>
                    <div><label> Phone: <PhoneInput id="phone" defaultCountry="US" onChange={(phone) => setPhone(phone)}></PhoneInput></label></div>
                    <div><label> Email: <input id="email" autoComplete="email" onChange={e => setEmail(e.target.value)}></input></label></div>
                    <div><label> Your Instagram: <input id="instagram" autoComplete="username" value ={instagram} onChange={e => setInstagram(e.target.value)}></input></label></div>
                    <div><label>Would you prefer a silent appointment? <input type="checkbox" id="silentAppt" defaultChecked={false} />Yes</label></div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
);
};