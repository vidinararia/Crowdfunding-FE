import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/home/Home";
import Login from "./page/login/Login";
import Register from "./page/register/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
