import './index.css';
import 'tw-animate-css';
import { BrowserRouter as Router, Routes, Route, useNavigate, Link } from "react-router-dom";
import Home from "./Pages/home/home";
import Services from "./Pages/services/services";
import ClientInfo from "./Pages/clientInfo/clientInfo";
import Appointment from "./Pages/appointment/appointment";
import Confirmation from "./Pages/confirmation/confirmation";
import Payment from "./Pages/payment/payment";
import Portfolio from "./Pages/portfolio/portfolio"
import PrivacyPolicy from "./Pages/policies/privacy"
import TermsOfService from "./Pages/policies/tos"
import React from 'react';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/appointment" element={<Appointment />} />
                <Route path="/clientInfo" element={<ClientInfo />} />
                <Route path="/confirmation" element={<Confirmation />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/tos" element={<TermsOfService />} />
            </Routes>
        </Router>
    );
}

