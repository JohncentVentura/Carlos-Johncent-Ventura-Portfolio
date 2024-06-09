/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import {
  FaHome,
  FaUserGraduate,
  FaCode,
  FaBriefcase,
  FaEnvelope,
  FaSun,
  FaMoon,
} from "react-icons/fa";

import { SectionPaths } from "./Paths";

const Navbar = ({...props}) => {
  return (
    <>
      <nav className="fixed z-50 top-0 left-0 w-screen h-16 flex justify-center items-center bg-bgClr text-fgClr ">
        <NavbarLink href={`#${SectionPaths.homeSection}`} icon={<FaHome size="25" />} />
        <NavbarLink href={`#${SectionPaths.aboutSection}`} icon={<FaUserGraduate size="25" />}  />
        <NavbarLink href={`#${SectionPaths.skillSection}`} icon={<FaCode size="25" />}  />
        <NavbarLink href={`#${SectionPaths.projectSection}`} icon={<FaBriefcase size="25" />}  />
        <NavbarLink href={`#${SectionPaths.contactSection}`} icon={<FaEnvelope size="25" />} />
        {(props.clrTheme === "light-theme") ? (
          <NavbarButton icon={<FaMoon size="25" />} onClick={props.clrThemeOnClick} />
        ) : (
          <NavbarButton icon={<FaSun size="25" />} onClick={props.clrThemeOnClick} />
        )}  
      </nav>
    </>
  );
};

const NavbarLink = ({...props}) => {
  return (
    <>
      <a
        className="relative flex justify-center items-center w-20 h-full hover:bg-primaryClr"
        href={props.href}
      >
        {props.icon}
      </a>
    </>
  );
};

const NavbarButton = ({...props}) => {
  return (
    <>
      <button
        className="relative flex justify-center items-center w-20 h-full hover:bg-primaryClr"
        onClick={props.onClick}
      >
        {props.icon}
      </button>
    </>
  );
};

export default Navbar;
