import "./appointment.css";
import { useLocation } from "react-router-dom";

export default function Appointment(){
    const location = useLocation();
    const { service, length, price } = location.state || {};  // Retrieve the passed states

    return (
        <>
            <div className="container">
                <div className="h5">{service}  ({length}) - ${price}</div>
            </div>
        </>
    );
};