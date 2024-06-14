/* 
// To run project
npm run start

// To push to git repo
npm run build
git add .
git commit
git push --force origin main
*/

/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";

import { SectionDiv } from "./components/Components.jsx";
import Navbar from "./components/Navbar.jsx";
import ParticlesComponent from "./components/Particles.jsx";
import { PagePaths } from "./components/Paths.jsx";
import sfx from "./components/ScrollEffects";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Work from "./pages/Work.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  const [clrTheme, setClrTheme] = useState("");
  const [fgClr, setFgClr] = useState(
    getComputedStyle(document.body).getPropertyValue("--fgClr")
  );
  const [bgClr, setBgClr] = useState(
    getComputedStyle(document.body).getPropertyValue("--bgClr")
  );
  const [primaryClr, setPrimaryClr] = useState(
    getComputedStyle(document.body).getPropertyValue("--primaryClr")
  );

  //Color theme
  useEffect(() => {
    if (clrTheme === "light-theme") {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
    } else if (clrTheme === "dark-theme") {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      setClrTheme("light-theme");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setClrTheme("dark-theme");
    }

    setFgClr(getComputedStyle(document.body).getPropertyValue("--fgClr"));
    setBgClr(getComputedStyle(document.body).getPropertyValue("--bgClr"));
    setPrimaryClr(
      getComputedStyle(document.body).getPropertyValue("--primaryClr")
    );
  }, [clrTheme]);

  //Smooth scrolling
  useEffect(() => {
    const lenis = new Lenis();
    //lenis.on("scroll", (e) => console.log(e));
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  //Log breakpoints for testing responsiveness
  useEffect(() => {
    printBreakpoint();
    window.addEventListener("resize", () => printBreakpoint());

    function printBreakpoint() {
      if (window.innerWidth >= 1536) {
        console.log("2xl desktop"); //Desktop
      } else if (window.innerWidth >= 1280) {
        console.log("xl laptop"); //Laptop
      } else if (window.innerWidth >= 1024) {
        console.log("lg h-tablet"); //Horizontal Tablet
      } else if (window.innerWidth >= 768) {
        console.log("md v-tablet"); //Vertical Tablet
      } else if (window.innerWidth >= 640) {
        console.log("sm h-phone"); //Horizontal Phone
      } else {
        console.log("df v-phone"); //Vertical Phone
      }
    }
  });

  return (
    <>
      <BrowserRouter>
        <ParticlesComponent fgClr={primaryClr} bgClr={bgClr} />
        <Navbar
          clrTheme={clrTheme}
          clrThemeOnClick={() =>
            clrTheme === "light-theme"
              ? setClrTheme("dark-theme")
              : setClrTheme("light-theme")
          }
        />
        <Routes>
          <Route
            path={PagePaths.home}
            element={<Home fg={fgClr} bgClr={bgClr} primaryClr={primaryClr} />}
          ></Route>
          <Route
            path={PagePaths.about}
            element={<About fg={fgClr} bgClr={bgClr} primaryClr={primaryClr} />}
          ></Route>
          <Route
            path={PagePaths.work}
            element={<Work fg={fgClr} bgClr={bgClr} primaryClr={primaryClr} />}
          ></Route>
          <Route
            path={PagePaths.contact}
            element={
              <Contact fg={fgClr} bgClr={bgClr} primaryClr={primaryClr} />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
