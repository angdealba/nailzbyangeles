import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/home/home";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path = "/" element = {<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

