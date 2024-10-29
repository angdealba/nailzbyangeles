import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./services.css";
import {useNavigate} from "react-router-dom";
import React from "react";
import {useState} from "react";

export default function Services() {
    const navigate = useNavigate();
    const [activeKey, setActiveKey] = useState(null);

    function handleSelect(service, length, price){
        sessionStorage.setItem('service', service);
        sessionStorage.setItem('length', length);
        sessionStorage.setItem('price', price);
        navigate("/appointment");
    }

    const handleAccordionToggle = (key) => {
        setActiveKey(key === activeKey ? null : key); // Toggle between open/close
    };


    return (
        <>

        <div className="container">
            <div className="acc-container">
            <Accordion flush activeKey={activeKey} onSelect={handleAccordionToggle}>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <b>Single Color Set</b>
                        {activeKey === "0" && (
                            <>
                                <div className="description-container">
                                    <div className="description">
                                        <p> This set is perfect for a simple, yet elegant look! <br />
                                        Your choice of color/length/shape.  <br />
                                            Every service includes a dry manicure prep of 15-20 minutes. <br /> </p>
                                        <p> Below are lengths available for this service. Please select your preference accordingly! </p>
                                    </div>
                                    <div className="description_img">
                                        <img src="/images/services/single_color.jpg" />
                                    </div>
                                </div>
                            </>
                        )}
                    </Accordion.Header>
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
                            XL Length
                            <button className="select" onClick={() => handleSelect("Single Color Set", "XL", 65)}>Select</button>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        <b>Inspiration Picture Set</b>
                        {activeKey === "1" && (
                            <>
                                <div className="description-container">
                                    <div className="description">
                                        <p> Book this service if you are looking to recreate a set from a picture or video!<br />
                                            Please keep in mind these are the starting prices, designs/rhinestones are $1-$2 extra per nail.<br />
                                            After booking, please text/DM me a picture of the set to get a finalized prize! <br /> </p>
                                        <p> Below are lengths available for this service. Please select your preference accordingly! </p>
                                    </div>
                                    <div className="description_img">
                                        <img src="/images/services/inspo_pic.jpg" />
                                    </div>
                                </div>
                            </>
                        )}
                    </Accordion.Header>
                    <Accordion.Body>
                        <div className="service">
                            Short Length
                            <button className="select" onClick={() => handleSelect("Inspiration Picture Set", "Short", 40)}>Select</button>
                        </div>
                        <div className="service">
                            Medium Length
                            <button className="select" onClick={() => handleSelect("Inspiration Picture Set", "Medium", 50)}>Select</button>
                        </div>
                        <div className="service">
                            Long Length
                            <button className="select" onClick={() => handleSelect("Inspiration Picture Set", "Long", 60)}>Select</button>
                        </div>
                        <div className="service">
                            XL Length
                            <button className="select" onClick={() => handleSelect("Inspiration Picture Set", "XL", 65)}>Select</button>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        <b>French Tip Set</b>
                        {activeKey === "2" && (
                            <>
                                <div className="description-container">
                                    <div className="description">
                                        <p> This service offers a timeless, elegant look with a full set of french tip nails!<br />
                                            Any extra designs/rhinestones are $1-$2 extra per nail.<br /> </p>
                                        <p> Below are lengths available for this service. Please select your preference accordingly! </p>
                                    </div>
                                    <div className="description_img">
                                        <img src="/images/services/french.jpg" />
                                    </div>
                                </div>
                            </>
                        )}
                    </Accordion.Header>
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
                            XL Length
                            <button className="select" onClick={() => handleSelect("French Tip Set", "XL", 75)}>Select</button>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>
                        <b>Freestyle Set</b>
                        {activeKey === "3" && (
                            <>
                                <div className="description-container">
                                    <div className="description">
                                        <p> This service is ideal for those who want stunning nails without the pressure of choosing a design! <br />
                                            Just let me know the occasion or any specific colors/designs you'd like, and I’ll take care of the rest. <br /> </p>
                                        <p> Below are lengths available for this service. Please select your preference accordingly! </p>
                                    </div>
                                    <div className="description_img">
                                        <img src="/images/services/freestyle.jpg" />
                                    </div>
                                </div>
                            </>
                        )}
                    </Accordion.Header>
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
                            XL Length
                            <button className="select" onClick={() => handleSelect("Freestyle Set", "XL", 75)}>Select</button>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>
                        <b>Fill-In</b>
                        {activeKey === "4" && (
                            <>
                                <div className="description-container">
                                    <div className="description">
                                        <p>
                                            Book this service if you already have an existing set and are looking to change the design! <br />
                                            Fill ins can only be done on MY work and are suggested to be booked after 2-3 weeks. <br />
                                            Please keep in mind this is the starting price for fills. After booking, please DM/text me for a finalized price! <br />
                                        </p>
                                     </div>
                                </div>
                            </>
                        )}
                    </Accordion.Header>
                    <Accordion.Body>
                        <div className="service">
                            Fill-In
                            <button className="select" onClick={() => handleSelect("Fill-In", null, 40)}>Select</button>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>
                        <b>Acrylic Overlay</b>
                        {activeKey === "5" && (
                            <>
                                <div className="description-container">
                                    <div className="description">
                                        <p>
                                            Acrylic applied directly to the natural nail for added strength and durability. <br />
                                            This service is ideal for a polished look without added length! <br />
                                        </p>
                                    </div>
                                    <div className="description_img">
                                        <img src="/images/services/overlay.jpg" />
                                    </div>
                                </div>
                            </>
                        )}
                    </Accordion.Header>
                    <Accordion.Body>
                        <div className="service">
                            Acrylic Overlay
                            <button className="select" onClick={() => handleSelect("Acrylic Overlay", null, 35)}>Select</button>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                    <Accordion.Header>
                        <b>Gel Manicure</b>
                        {activeKey === "6" && (
                            <>
                                <div className="description-container">
                                    <div className="description">
                                        <p>
                                            This service includes dry manicure/prep of 15-20 minutes,
                                            topped of with your choice of gel polish and clear top coat!
                                        </p>
                                    </div>
                                    <div className="description_img">
                                        <img src="/images/services/gel_mani.jpg" />
                                    </div>
                                </div>
                            </>
                        )}
                    </Accordion.Header>
                    <Accordion.Body>
                        <div className="service">
                            Gel Manicure
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