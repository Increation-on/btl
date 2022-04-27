import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import NaviBar from "./UI/NaviBar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Users from './Pages/Users';

function App() {
  return (
    <>
      <Router>
        <NaviBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
