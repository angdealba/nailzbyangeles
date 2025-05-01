import { useEffect, useState } from "react";
import axios from "axios";
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./services.css";
import {useNavigate} from "react-router-dom";
import React from "react";
import { useDispatch } from 'react-redux';
import { setService } from '../../Features/bookingSlice';

export default function Services() {
    const navigate = useNavigate();
    const [activeKey, setActiveKey] = useState(null);
    const [services, setServices] = useState([]);
    const dispatch = useDispatch();

    function handleSelect(id, service, length, price){
        dispatch(setService({id: id, name: service, length: length, price: price}))
        navigate("/appointment");
    }

    const handleAccordionToggle = (key) => {
        setActiveKey(key === activeKey ? null : key); // Toggle between open/close
    };

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/services");
                setServices(response.data);
            } catch (error) {
                console.error("Error fetching services:", error);
            }
        };

        fetchServices();
    }, []);

    return (
        <div className="container">
            <div className="acc-container">
                <Accordion flush activeKey={activeKey} onSelect={handleAccordionToggle}>
                    {services.map((service, index) => (
                        <Accordion.Item eventKey={String(index)} key={service._id}>
                            <Accordion.Header>
                                <b>{service.service_name}</b>
                                {activeKey === String(index) && (
                                    <>
                                        <div className="description-container">
                                            <div className="description">
                                                {service.description.split("\\n").map((line, idx) => (
                                                    <p key={idx}>{line}</p>
                                                ))}
                                            </div>
                                            <div className="description_img">
                                                {/* <img src={`/images/services/${service.service_name.replaceAll(" ", "_").toLowerCase()}.jpg`} />*/}
                                            </div>
                                        </div>
                                    </>
                                )}
                            </Accordion.Header>

                            <Accordion.Body>
                                {service.hasLengthOptions ? (
                                    service.lengths.map((lengthOption, idx) => (
                                        <div className="service" key={idx}>
                                            {lengthOption.length} Length
                                            <button
                                                className="select"
                                                onClick={() =>
                                                    handleSelect(
                                                        service._id,
                                                        service.service_name,
                                                        lengthOption.length,
                                                        service.basePrice + lengthOption.price
                                                    )
                                                }
                                            >
                                                Select
                                            </button>
                                        </div>
                                    ))
                                ) : (
                                    <div className="service">
                                        {service.service_name}
                                        <button
                                            className="select"
                                            onClick={() =>
                                                handleSelect(service.service_name, null, service.basePrice)
                                            }
                                        >
                                            Select
                                        </button>
                                    </div>
                                )}
                            </Accordion.Body>
                        </Accordion.Item>
                    ))}

                </Accordion>
            </div>
        </div>
    );
}