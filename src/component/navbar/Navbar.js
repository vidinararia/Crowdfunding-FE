import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  let navigate = useNavigate();

  let Links = [
    { name: "All Project", link: "/" },
    { name: "My Project", link: "/my-project" },
    { name: "Histroy", link: "/history" },
  ];

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div className="shadow-sm w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-green-500 py-4 md:px-16 px-8">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-white">
          <Link to={"/"}>Crowdfunding</Link>
        </div>
        <button
          className="text-3xl text-white absolute right-8 top-6 cursor-pointer md:hidden"
          onClick={handleOpen}
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </button>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-green-500 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-8 transition-all duration-500 ease-in ${
            open ? "top-10" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="hidden md:ml-2 text-lg md:my-0 my-7">
              <Link
                to={link.link}
                className="text-white hover:bg-green-600 rounded-md transition-all font-medium py-2 px-3"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <button
            className="hidden bg-transparent hover:bg-white border border-white hover:border-transparent text-white hover:text-black py-2 px-6 rounded-md font-bold md:ml-6 transition-all"
            onClick={handleLogin}
          >
            Login
          </button>
          <button
            className="hidden bg-teal-600 text-white hover:shadow-md py-2 px-6 rounded-md font-bold md:ml-4 ml-4 transition-all"
            onClick={handleRegister}
          >
            Register
          </button>
        </ul>
      </div>
    </div>
  );
}
