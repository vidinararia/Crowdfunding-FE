import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AllProject from "./page/all-project/AllProject";
import History from "./page/history/History";
import MyProject from "./page/my-project/MyProject";
import Home from "./page/home/Home";
import Login from "./page/login/Login";
import Register from "./page/register/Register";
import CreateProject from "./page/create-project/CreateProject";
import DetailProject from "./page/detail-project/DetailProject";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<AllProject />} />
        <Route path="/detail-project/:id" element={<DetailProject />} />
        <Route path="/my-project" element={<MyProject />} />
        <Route path="/history" element={<History />} />
        <Route path="/create-project" element={<CreateProject />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
