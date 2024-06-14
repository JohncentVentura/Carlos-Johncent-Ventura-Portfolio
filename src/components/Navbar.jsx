
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHouse } from "react-icons/fa6";
import {
  FaUserGraduate,
  FaBriefcase,
  FaEnvelope,
  FaSun,
  FaMoon,
} from "react-icons/fa";

import { PagePaths } from "./Paths";

const Navbar = ({...props}) => {
  return (
    <>
      <nav className="anim-glow-drop fixed z-50 top-0 left-0 w-screen h-16 flex justify-center items-center bg-bgClr">
        <NavLink to={PagePaths.home} icon={<FaHouse size="30"/>} />
        <NavLink to={PagePaths.about} icon={<FaUserGraduate size="30"/>}  />
        <NavLink to={PagePaths.work} icon={<FaBriefcase size="30" />}/>
        <NavLink to={PagePaths.contact} icon={<FaEnvelope size="30" />}/>
        {(props.clrTheme === "light-theme") ? (
          <NavButton onClick={props.clrThemeOnClick} icon={<FaMoon size="30"/>} />
        ) : (
          <NavButton onClick={props.clrThemeOnClick} icon={<FaSun size="30"/>} />
        )}  
      </nav>
    </>
  );
};  

const NavLink = ({...props}) => {
  return (
    <>
      <Link
        className="nav-icon relative flex justify-center items-center w-20 h-full hover:bg-primaryClr"
        to={props.to}
      >
        {props.icon}
      </Link>
    </>
  );
};

const NavButton = ({...props}) => {
  return (
    <>
      <button
        className="nav-icon relative flex justify-center items-center w-20 h-full hover:bg-primaryClr"
        onClick={props.onClick}
      >
        {props.icon}
      </button>
    </>
  );
};

export default Navbar;
