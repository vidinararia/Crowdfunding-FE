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
import DonateProject from "./page/donate-project/DonateProject";
import NotFound from "./page/not-found/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/" element={<AllProject />} /> */}
        <Route path="/donate-project/:id" element={<DonateProject />} />
        <Route path="/detail-project/:funding_id" element={<DetailProject />} />
        <Route path="/" element={<MyProject />} />
        <Route path="/history" element={<History />} />
        <Route path="/create-project" element={<CreateProject />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
