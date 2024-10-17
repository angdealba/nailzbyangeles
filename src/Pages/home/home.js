import "./home.css";
import {useNavigate} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Home (){
    const navigate = useNavigate();

    return (
        <>
        <div className="home">
            <img src="/images/home/1.png" alt="" />
            <img src="/images/home/2.png" alt="" />
            <img src="/images/home/3.png" alt="" />
            <img src="/images/home/4.png" alt="" />
        </div>
        <div className="book-appt">
            <button onClick ={() => navigate("/services")} className="btn btn-primary">Book An Appointment Now</button>
        </div>
        </>
    );
};
