/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import {
  FaHome,
  FaUserGraduate,
  FaCode,
  FaBriefcase,
  FaEnvelope,
  FaSun,
  FaRegMoon,
} from "react-icons/fa";
//import { ImagePaths } from "./Paths";

const Navbar = ({clrTheme, clrThemeCB}) => {
  return (
    <>
      <nav className="fixed z-10 top-0 left-0 px-4 w-screen h-16 flex justify-center items-center bg-bgClr text-fgClr shadow-lg shadow-primaryClr">
        <NavbarIcon icon={<FaHome size="25" />}  />
        <NavbarIcon icon={<FaUserGraduate size="25" />}  />
        <NavbarIcon icon={<FaCode size="25" />}  />
        <NavbarIcon icon={<FaBriefcase size="25" />}  />
        <NavbarIcon icon={<FaEnvelope size="25" />} />
        {clrTheme === "light-theme" ? (
          <NavbarButton icon={<FaRegMoon size="25" />} onClick={clrThemeCB} />
        ) : (
          <NavbarButton icon={<FaSun size="25" />} onClick={clrThemeCB} />
        )}  
      </nav>
    </>
  );
};

const NavbarIcon = ({ icon, href }) => {
  return (
    <>
      <a
        className="relative flex justify-center items-center w-20 h-full hover:bg-primaryClr"
        href={href}
      >
        {icon}
      </a>
    </>
  );
};

const NavbarButton = ({ icon, onClick }) => {
  return (
    <>
      <button
        className="relative flex justify-center items-center w-20 h-full hover:bg-primaryClr"
        onClick={onClick}
      >
        {icon}
      </button>
    </>
  );
};

export default Navbar;
