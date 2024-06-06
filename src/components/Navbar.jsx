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

import { SectionPaths } from "./Paths";

const Navbar = ({...props}) => {
  return (
    <>
      <nav className="fixed z-10 top-0 left-0 px-4 w-screen h-16 flex justify-center items-center bg-bgClr text-fgClr shadow-lg shadow-primaryClr">
        <NavbarIcon href={`#${SectionPaths.homeSection}`} icon={<FaHome size="25" />} />
        <NavbarIcon href={`#${SectionPaths.aboutSection}`} icon={<FaUserGraduate size="25" />}  />
        <NavbarIcon href={`#${SectionPaths.skillSection}`} icon={<FaCode size="25" />}  />
        <NavbarIcon href={`#${SectionPaths.projectSection}`} icon={<FaBriefcase size="25" />}  />
        <NavbarIcon href={`#${SectionPaths.contactSection}`} icon={<FaEnvelope size="25" />} />
        {document.body.className.match("light-theme") ? (
          <NavbarButton icon={<FaRegMoon size="25" />} onClick={props.onClickClrThemeBtn} />
        ) : (
          <NavbarButton icon={<FaSun size="25" />} onClick={props.onClickClrThemeBtn} />
        )}  
      </nav>
    </>
  );
};

const NavbarIcon = ({...props}) => {
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
