import "./clientInfo.css";
import { useLocation } from "react-router-dom";
import {useState} from "react";
import PhoneInput from 'react-phone-number-input';
import "react-phone-number-input/style.css";

export default function ClientInfo(){
    const location = useLocation();
    const { service, length, price } = location.state || {};
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [instagram, setInstagram] = useState('@');
    const [silentAppt, setSilentAppt] = useState(false);

    function handleSubmit(e){
        e.preventDefault();
    }

    return (
        <>
            <div className="container">
                <div className="h5">{service}  ({length}) - ${price}</div>
                <form method="post" onSubmit={handleSubmit}>
                    <div><label> First Name: <input id="firstName" autoComplete="given-name" onChange={e => setFirstName(e.target.value)}></input></label></div>
                    <div><label> Last Name: <input id="lastName" autoComplete="family-name" onChange={e => setLastName(e.target.value)}></input></label></div>
                    <div><label> Phone: <PhoneInput id="phone" auto defaultCountry="US" onChange={(phone) => setPhone(phone)}></PhoneInput></label></div>
                    <div><label> Email: <input id="email" autoComplete="email" onChange={e => setEmail(e.target.value)}></input></label></div>
                    <div><label> Your Instagram: <input id="instagram" autoComplete="username" value ={instagram} onChange={e => setInstagram(e.target.value)}></input></label></div>
                    <div><label>Would you prefer a silent appointment? <input type="checkbox" id="silentAppt" defaultChecked={false} />Yes</label></div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
);
};