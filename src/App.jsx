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
import Lenis from "lenis";

import { SectionDiv } from "./components/Components.jsx";
import Navbar from "./components/Navbar.jsx";
import ParticlesComponent from "./components/Particles.jsx";
import { ImagePaths, SectionPaths } from "./components/Paths.jsx";
import sfx from "./components/ScrollEffects";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Skill from "./pages/Skill.jsx";
import Project from "./pages/Project.jsx";
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

  //Color Theme
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

  //Smooth Scrolling & Section Transition Effects
  useEffect(() => {
    const lenis = new Lenis();
    //lenis.on("scroll", (e) => console.log(e));
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    sfx.Init();
    sfx.SetEffect(".sectionOpen1", (elem) => sfx.SectionOpen(elem));
    sfx.SetEffect(".sectionClose1", (elem) => sfx.SectionClose(elem));
    sfx.SetEffect(".sectionOpen2", (elem) => sfx.SectionOpen(elem));
    sfx.SetEffect(".sectionClose2", (elem) => sfx.SectionClose(elem));
    sfx.SetEffect(".sectionOpen3", (elem) => sfx.SectionOpen(elem));
    sfx.SetEffect(".sectionClose3", (elem) => sfx.SectionClose(elem));
    sfx.SetEffect(".sectionOpen4", (elem) => sfx.SectionOpen(elem));
    sfx.SetEffect(".sectionClose4", (elem) => sfx.SectionClose(elem));
  });

  //Print Breakpoints
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
      <ParticlesComponent fgClr={primaryClr} bgClr={bgClr} />
      <Navbar
        clrTheme={clrTheme}
        clrThemeOnClick={() =>
          clrTheme === "light-theme"
            ? setClrTheme("dark-theme")
            : setClrTheme("light-theme")
        }
      />
      <Home id={SectionPaths.homeSection} fg={fgClr} bgClr={bgClr} primaryClr={primaryClr} />
      <SectionDiv sfxString1={"sectionOpen1"} sfxString2={"sectionClose1"}>
        ABOUT ME
      </SectionDiv>
      <About id={SectionPaths.aboutSection} fg={fgClr} bgClr={bgClr} primaryClr={primaryClr}/>
      <SectionDiv sfxString1={"sectionOpen2"} sfxString2={"sectionClose2"}>
        MY SKILLS
      </SectionDiv>
      <Skill id={SectionPaths.skillSection} fg={fgClr} bgClr={bgClr} primaryClr={primaryClr}/>
      <SectionDiv sfxString1={"sectionOpen3"} sfxString2={"sectionClose3"}>
        MY PROJECTS
      </SectionDiv>
      <Project id={SectionPaths.projectSection} fg={fgClr} bgClr={bgClr} primaryClr={primaryClr}/>
      <SectionDiv sfxString1={"sectionOpen4"} sfxString2={"sectionClose4"}>
        CONTACT ME
      </SectionDiv>
      <Contact id={SectionPaths.contactSection} fg={fgClr} bgClr={bgClr} primaryClr={primaryClr}/>
    </>
  );
}

export default App;
