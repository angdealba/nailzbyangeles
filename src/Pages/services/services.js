import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./services.css";
import {useNavigate} from "react-router-dom";

export default function Services() {
    const navigate = useNavigate();

    function handleSelect(service, length, price){
        sessionStorage.setItem('service', service);
        sessionStorage.setItem('length', length);
        sessionStorage.setItem('price', price);
        navigate("/appointment");
    }

    return (
        <>

        <div className="container">
            <div className="acc-container">
            <Accordion flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Single Color Set</Accordion.Header>
                    <Accordion.Body>
                        <div className="service">
                            Short Length
                            <button className="select" onClick={() => handleSelect("Single Color Set", "Short", 40)}>Select</button>
                        </div>
                        <div className="service">
                            Medium Length
                            <button className="select" onClick={() => handleSelect("Single Color Set", "Medium", 50)}>Select</button>
                        </div>
                        <div className="service">
                            Long Length
                            <button className="select" onClick={() => handleSelect("Single Color Set", "Long", 60)}>Select</button>
                        </div>
                        <div className="service">
                            XL Long
                            <button className="select" onClick={() => handleSelect("Single Color Set", "XL", 65)}>Select</button>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Inspiration Picture Set</Accordion.Header>
                    <Accordion.Body>
                        <div className="service">
                            <button className="select" onClick={() => handleSelect("Inspiration Picture Set", null, null)}>Select</button>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>French Tip Set</Accordion.Header>
                    <Accordion.Body>
                        <div className="service">
                            Short Length
                            <button className="select" onClick={() => handleSelect("French Tip Set", "Short", 50)}>Select</button>
                        </div>
                        <div className="service">
                            Medium Length
                            <button className="select" onClick={() => handleSelect("French Tip Set", "Medium", 60)}>Select</button>
                        </div>
                        <div className="service">
                            Long Length
                            <button className="select" onClick={() => handleSelect("French Tip Set", "Long", 70)}>Select</button>
                        </div>
                        <div className="service">
                            XL Long
                            <button className="select" onClick={() => handleSelect("French Tip Set", "XL", 75)}>Select</button>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Freestyle Set</Accordion.Header>
                    <Accordion.Body>
                        <div className="service">
                            Short Length
                            <button className="select" onClick={() => handleSelect("Freestyle Set", "Short", 50)}>Select</button>
                        </div>
                        <div className="service">
                            Medium Length
                            <button className="select" onClick={() => handleSelect("Freestyle Set", "Medium", 60)}>Select</button>
                        </div>
                        <div className="service">
                            Long Length
                            <button className="select" onClick={() => handleSelect("Freestyle Set", "Long", 70)}>Select</button>
                        </div>
                        <div className="service">
                            XL Long
                            <button className="select" onClick={() => handleSelect("Freestyle Set", "XL", 75)}>Select</button>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Fill-In</Accordion.Header>
                    <Accordion.Body>
                        <div className="service">
                            <button className="select" onClick={() => handleSelect("Fill-In", null, null)}>Select</button>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>Acrylic Overlay</Accordion.Header>
                    <Accordion.Body>
                        <div className="service">
                            <button className="select" onClick={() => handleSelect("Acrylic Overlay", null, 35)}>Select</button>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                    <Accordion.Header>Gel Manicure</Accordion.Header>
                    <Accordion.Body>
                        <div className="service">
                            <button className="select" onClick={() => handleSelect("Gel Manicure", null, 20)}>Select</button>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
        </div>
        </>
    );
}