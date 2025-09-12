import Enver from "./assets/enver.png";
import logo from "./assets/Logo Icon 1.png";
import { NavLink } from "react-router-dom";
import { IoReorderThreeSharp } from "react-icons/io5";
import { useState } from "react";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleViewon = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    <div className="flex items-center justify-between bg-black text-white h-[60px] px-8">
      
      <div className="flex gap-2 items-center">
        <img src={logo} className="h-[20px]" alt="Logo" />
        <img src={Enver} className="h-[20px]" alt="Enver" />
      </div>

      
      <div className="gap-10 text-md hover:cursor-pointer hidden lg:flex">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `hover:scale-105 transition ${
              isActive ? "text-blue-400 font-semibold" : ""
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/services"
          className={({ isActive }) =>
            `hover:scale-105 transition ${
              isActive ? "text-blue-400 font-semibold" : ""
            }`
          }
        >
          Services
        </NavLink>

        <NavLink
          to="/products"
          className={({ isActive }) =>
            `hover:scale-105 transition ${
              isActive ? "text-blue-400 font-semibold" : ""
            }`
          }
        >
          Our Products
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `hover:scale-105 transition ${
              isActive ? "text-blue-400 font-semibold" : ""
            }`
          }
        >
          About Us
        </NavLink>
      </div>

    
      <div className="border border-white h-[30px] w-[90px]  hidden lg:flex items-center justify-center hover:scale-105 transition rounded-md">
        <button>Contact Us</button>
      </div>
      <div className="lg:hidden flex text-4xl" ><button onClick={handleViewon}><IoReorderThreeSharp /></button> </div>
    </div>
    <div>
    </div>
    
      <div
        className={`${isMenuOpen ? "flex flex-col" : "hidden"}
       "flex gap-3 lg:hidden  bg-gray-100 "`}
      >
        <NavLink to='/' onClick={() => setIsMenuOpen(false)}  >Home</NavLink>
        <NavLink to='services'  onClick={() => setIsMenuOpen(false)} >Services</NavLink>
        <NavLink to='our products'  onClick={() => setIsMenuOpen(false)} >Our Products</NavLink>
        <NavLink to='about'  onClick={() => setIsMenuOpen(false)} >About us</NavLink>
        <NavLink to='contact'
        onClick={() => setIsMenuOpen(false)} >Contact</NavLink>
      </div>
  
    </>

  );
};

export default Navbar;
