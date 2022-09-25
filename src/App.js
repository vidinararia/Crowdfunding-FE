import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/home/Home";
import Login from "./page/login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
