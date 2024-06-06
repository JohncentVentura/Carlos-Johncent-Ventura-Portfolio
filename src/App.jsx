/* To push to git repo
npm run build
git add .
git commit
git push --force origin main
*/

/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";

import Navbar from "./components/Navbar.jsx";
import ParticlesComponent from "./components/Particles.jsx";
import { SectionPaths } from "./components/Paths.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Skill from "./pages/Skill.jsx";
import Project from "./pages/Project.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  const [clrTheme, setClrTheme] = useState("");
  const [fgClr, setFgClr] = useState(getComputedStyle(document.body).getPropertyValue("--fgClr"));
  const [bgClr, setBgClr] = useState(getComputedStyle(document.body).getPropertyValue("--bgClr"));
  const [primaryClr, setPrimaryClr] = useState(getComputedStyle(document.body).getPropertyValue("--primaryClr"));

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

  // Scroll Animation Effects
  useEffect(() => {
    //Lenis
    const lenis = new Lenis();
    lenis.on("scroll", (e) => {
      console.log(e);
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    //GSAP, SplitType
    gsap.registerPlugin(ScrollTrigger);
    const splitTypes = document.querySelectorAll(".gsap");
    splitTypes.forEach((char, i) => {
      //Creates individual div elements with a class of "char", as children of each char element
      const text = new SplitType(char, { types: "chars" });

      /* text.chars is where the effects will take place, 2nd argument are the effects
      gsap.from(text.chars, {
        scrollTrigger: {
          trigger: char,
          start: "top 80%",
          end: "top 20%",
          scrub: false, //If true, tied to scroll position not time
          markers: false,
        },
        //Effects
        scaleY: 0, //FX: start from scaleY: value
        y: -20, //FX: start from y: value
        transformOrigin: 'top',
        //opacity: 0, //FX: start from opacity: value
        stagger: 0.1, //FX: The FX will delay base on stagger value
        duration: 1, //FX: If scrub is false, duration of time
      });
      */

      /* gsap.fromTo sample
      gsap.fromTo(
        text.chars,
        {
          color: fgClr, //From color fgClr
          scaleY: 0,
          y: -20,
          transformOrigin: 'top',
        },
        { 
          color: primaryClr, //To color primaryClr
          duration: 0.3,
          stagger: 0.02,
          scrollTrigger: {
            trigger: char,
            start: "top 80%",
            end: "top 20%",
            scrub: false, //If true, tied to scroll position not time
            markers: false,
            toggleActions: 'play play reverse reverse' //'play play reverse reverse' makes scrolling up return back From color fgClr
          },
          scaleY: 1,
          y: 0,
        }
      );
      */
    

    });
  });

  return (
    <>
      <ParticlesComponent fgClr={primaryClr} bgClr={bgClr} />
      <Navbar
        onClickClrThemeBtn={() =>
          clrTheme === "light-theme"
            ? setClrTheme("dark-theme")
            : setClrTheme("light-theme")
        }
      />
      <Home id={SectionPaths.homeSection}/>
      <hr />
      <About id={SectionPaths.aboutSection}/>
      <hr />
      <Skill id={SectionPaths.skillSection}/>
      <hr />
      <Project id={SectionPaths.projectSection}/>
      <hr />
      <Contact id={SectionPaths.contactSection}/>
    </>
  );
}

export const Div = ({className, children, ...props }) => {
  return (
    <>  
      {(className === undefined) ? (
        <div className="gsap" {...props}>
        {children}
      </div>
      ):(
        <div className={`gsap ${className}`} {...props}>
        {children}
      </div>
      )}
      
    </>
  );
}

export default App;



/* IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        //console.log(entry);

        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hid");
    hiddenElements.forEach((el) => observer.observe(el));
  });
*/