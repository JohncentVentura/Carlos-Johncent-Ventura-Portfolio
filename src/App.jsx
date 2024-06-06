import { Children, useState, useEffect } from "react";
import ParticlesComponent from "./components/Particles.jsx";
import Navbar from "./components/Navbar.jsx";

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
    setPrimaryClr(getComputedStyle(document.body).getPropertyValue("--primaryClr"));
  }, [clrTheme]);

  ///* IntersectionObserver
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
  //*/

  return (
    <>
      <Navbar
        theme={clrTheme}
        clrThemeCB={() =>
          clrTheme === "light-theme"
            ? setClrTheme("dark-theme")
            : setClrTheme("light-theme")
        }
      />
      <ParticlesComponent fgClr={primaryClr} bgClr={bgClr} />
      <Section>
        <h1 className="">Hi!</h1>
        <h1 className="">I'm Johncent Ventura</h1>
        <h1 className="">Welcome to my portfolio</h1>
      </Section>

      <Section>
        <h1 className="">About Me</h1>
        <p className="">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
          assumenda labore cupiditate facere eaque aliquam.
        </p>
      </Section>

      <Section>
        <h1 className="">Projects</h1>
        <p className="">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
          assumenda labore cupiditate facere eaque aliquam.
        </p>
      </Section>
    </>
  );
}

const Section = ({ children, ...props }) => {
  return (
    <>
      <section className="hid mt-4" {...props}>
        {children}
      </section>
    </>
  );
};

export default App;
