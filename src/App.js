import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/home/home";
import Services from "./Pages/services/services";
import Appointment from "./Pages/appointment/appointment";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
export default function App() {
  return (
    <div>
      <Router>
          <Navbar expand="md">
              <Navbar.Brand className="mb-0 h1">Nailz By Angeles</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                      <Nav.Link href="/">Home</Nav.Link>
                      <Nav.Link href="/services">Book An Appointment</Nav.Link>
                      <Nav.Link href="/instagram">Portfolio</Nav.Link>
                  </Nav>
              </Navbar.Collapse>
          </Navbar>
        <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path = "/services" element = {<Services />} />
            <Route path = "/appointment" element = {<Appointment />} />
        </Routes>
      </Router>
    </div>
  );
}

