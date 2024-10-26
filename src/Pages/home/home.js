import "./home.css";
import {useNavigate} from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Home (){
    const navigate = useNavigate();

    return (
        <>
            <Col>
                <div className="home">
                    <img src="/images/home/1.png" alt="" />
                    <img src="/images/home/2.png" alt="" />
                    <img src="/images/home/3.png" alt="" />
                    <img src="/images/home/4.png" alt="" />
                    <div className="book">
                        <img src ="/images/home/5.png" />
                        <button className="book-btn" onClick ={() => navigate("/services")}>
                            <span>Book Appointment</span>
                        </button>
                    </div>
               </div>

             </Col>
        </>
    );
};
