import Desktop from "../assets/logo/desktop.png";
import Laptop from "../assets/logo/laptop.png";
import MenuBar from "../assets/MenuBar.png"; // Dosya adı MenuBar.png ise
import Mobile from "../assets/logo/mobile.png";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import {AiOutlineClose} from "react-icons/ai"

export default function Navbar() {
  
const [nav, setNav]=useState(false);

const openNav = () => {
  setNav(!nav);
}
  return (
    <div className="bg-[#234338] h-[74px] sm:h-[77px] md:h-[95px] border-t border-solid border-gray-100 border-opacity-10">
      <div className="max-w-[390px] sm:max-w-[1440px] md:max-w-[1596px] mx-auto flex justify-between items-center h-full">
        <div className="md:p-0 p-2">
          <img className="md:block hidden" src={Desktop} alt="" />
          <img className="sm:block hidden md:hidden" src={Laptop} alt="" />
          <img className="sm:hidden md:hidden" src={Mobile} alt="" />
        </div>

        <div className="p-2">
        <div className="cursor-pointer sm:hidden">
        <img onClick={openNav} src={MenuBar} alt="" />
        </div>
           <ul className="sm:flex hidden items-center gap-[20px] p-2 md:gap-[26px] text-white text-14px  md:text-[18px]">
            <li>
            <NavLink to="/" className={(navData) => (navData.isActive ? "active-style" : 'none')}>Home</NavLink>

            </li>
            <li>
            <NavLink to="/about" className={(navData) => (navData.isActive ? "active-style" : 'none')}>About</NavLink>

            </li>
            <li>
                <NavLink to="/team" className={(navData) => (navData.isActive ? "active-style" : 'none')}>Team</NavLink>
            </li>
            <li>
            <NavLink to="/process" className={(navData) => (navData.isActive ? "active-style" : 'none')}>Process</NavLink>
            </li>
            <li>
            <NavLink to="/pricing" className={(navData) => (navData.isActive ? "active-style" : 'none')}>Pricing</NavLink>
            </li>
            <li>
            <NavLink to="/blogs" className={(navData) => (navData.isActive ? "active-style" : 'none')}>Blog</NavLink>
            </li>
            <li>
            <button  className="w-[101px] md:w-[137px] md:h-[55px] font-semibold h-[45px] md:text-[18px] text-[14px] text-black rounded bg-[#CBEA7B] flex justify-center items-center">
            <Link to={'/contact'}>
            Contact US
            </Link>
            </button>
            </li>
          </ul>
          {nav && (
              <div className="absolute bg-black/50 w-full h-full top-0 left-0"></div>
            )}
          <div className={`sm:hidden fixed bg-white w-[300px] h-full top-0 left-0 z-10 transform transition-transform ease-in-out duration-300 ${nav ? "translate-x-0" : "-translate-x-full"}`}>
          <div className="flex cursor-pointer justify-end p-4">
                <AiOutlineClose  size={20} onClick={openNav} />
              </div> 
          <ul className="flex flex-col  items-center gap-[20px] p-2 md:gap-[26px] text-black mt-24 text-14px  md:text-[18px]">
          <li>
            <NavLink to="/" className={(navData) => (navData.isActive ? "active-style" : 'none')}>Home</NavLink>

            </li>
            <li>
            <NavLink to="/about" className={(navData) => (navData.isActive ? "active-style" : 'none')}>About</NavLink>

            </li>
            <li>
                <NavLink to="/team" className={(navData) => (navData.isActive ? "active-style" : 'none')}>Team</NavLink>
            </li>
            <li>
            <NavLink to="/process" className={(navData) => (navData.isActive ? "active-style" : 'none')}>Process</NavLink>
            </li>
            <li>
            <NavLink to="/pricing" className={(navData) => (navData.isActive ? "active-style" : 'none')}>Pricing</NavLink>
            </li>
            <li>
            <NavLink to="/blogs" className={(navData) => (navData.isActive ? "active-style" : 'none')}>Blog</NavLink>
            </li>
            <li>
            <button  className="w-[101px] md:w-[137px] md:h-[55px] font-semibold h-[45px] md:text-[18px] text-[14px] text-black rounded bg-[#CBEA7B] flex justify-center items-center">
            <Link to={'/contact'}>
            Contact US
            </Link>
            </button>
            </li>
            <button  className="w-[101px] md:w-[137px] md:h-[55px] font-semibold h-[45px] md:text-[18px] text-[14px] text-black rounded bg-[#CBEA7B] flex justify-center items-center">
            <NavLink to={'/contact'}>
            Contact US
            </NavLink>
            </button>
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
