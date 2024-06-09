/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";

import { ImagePaths } from "../components/Paths";

const Home = ({ ...props }) => {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.refresh();
  useEffect(() => UseEffects());

  return (
    <>
      <section id={props.id} className="h-fit">
        <div className="div1 pt-[40vh] pb-[25vh] text-center text-5xl">
          Hello!
        </div>

        <div className="div2 pt-[20vh] text-center text-5xl">
          I'm Carlos Johncent Ventura,
        </div>

        <LgRhombus parentClass={"pt-[5vh]"} clipPathClass={"clipShow"}>
          <img
            src={ImagePaths.hero}
            alt={ImagePaths.hero}
            className="w-full h-full object-fill"
          />
        </LgRhombus>

        <div className="div3 pt-[10vh] text-center text-5xl">
          Just another fool chasing the dream of
        </div>

        <div className="flex justify-evenly items-center">
          <LgRhombus
            parentClass={"mt-[20vh]"}
            clipPathClass={"clipLeftToRight"}
          >
            <img
              src={ImagePaths.hero}
              alt={ImagePaths.hero}
              className="w-full h-full object-fill"
            />
          </LgRhombus>

          <div className="div4 pt-[20vh] text-center text-5xl">
            Front-End Development
          </div>
        </div>

        <div className="flex justify-evenly items-center">
          <div className="div5 pt-[20vh] text-center text-5xl">
            Back-End Development
          </div>

          <LgRhombus
            parentClass={"mt-[20vh]"}
            clipPathClass={"clipRightToLeft"}
          >
            <img
              src={ImagePaths.hero}
              alt={ImagePaths.hero}
              className="w-full h-full object-fill"
            />
          </LgRhombus>
        </div>

        <div className="flex justify-evenly items-center">
          <LgRhombus
            parentClass={"mt-[20vh]"}
            clipPathClass={"clipLeftToRight2"}
          >
            <img
              src={ImagePaths.hero}
              alt={ImagePaths.hero}
              className="w-full h-full object-fill"
            />
          </LgRhombus>

          <div className="div6 pt-[20vh] text-center text-5xl">
            Game Development
          </div>
        </div>

        <div className="flex justify-evenly items-center">
          <div className="div7 pt-[20vh] text-center text-5xl">
            Graphics Design & Pixel Art
          </div>

          <LgRhombus
            parentClass={"mt-[20vh]"}
            clipPathClass={"clipRightToLeft2"}
          >
            <img
              src={ImagePaths.hero}
              alt={ImagePaths.hero}
              className="w-full h-full object-fill"
            />
          </LgRhombus>
        </div>

        <div className="div8 pt-[30vh] text-center text-5xl">
          And still learning more, but for now...
        </div>

        <div className="mt-[50vh] h-[105vh] flex justify-center items-center">
          <LgRhombus
            parentClass={"absolute top-0 "}
            clipPathClass={"clipShow2"}
          >
            <img
              src={ImagePaths.hero}
              alt={ImagePaths.hero}
              className="w-full h-full object-fill"
            />
          </LgRhombus>

          <div className="div8 absolute top-0 pt-[25vh] text-center text-6xl">
            Welcome to my portfolio
          </div>

          <div className="div8 absolute top-0 pt-[35vh] text-center text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            rerum fuga mollitia laborum placeat sequi.
          </div>

          <div className="absolute top-0 w-[50vw] flex justify-evenly items-center">
            <SmRhombus
              parentClass={"mt-[15vh] pt-[30vh]"}
              clipPathClass={"clipShow3"}
            ></SmRhombus>
            <SmRhombus
              parentClass={"mt-[15vh] pt-[30vh]"}
              clipPathClass={"clipShow3"}
            ></SmRhombus>
            <SmRhombus
              parentClass={"mt-[15vh] pt-[30vh]"}
              clipPathClass={"clipShow3"}
            ></SmRhombus>
            <SmRhombus
              parentClass={"mt-[15vh] pt-[30vh]"}
              clipPathClass={"clipShow3"}
            ></SmRhombus>
          </div>
        </div>
      </section>
    </>
  );
};

const SmRhombus = ({ parentClass, clipPathClass, children }) => {
  return (
    <>
      <div className={`${parentClass} flex justify-center items-center`}>
        <div
          className={`${clipPathClass} clip-path w-36 h-36 bg-primaryClr flex justify-center items-center`}
        >
          {children}
        </div>
      </div>
    </>
  );
};

const LgRhombus = ({ parentClass, clipPathClass, children }) => {
  return (
    <>
      <div className={`${parentClass} flex justify-center items-center`}>
        <div
          className={`${clipPathClass} clip-path w-80 h-80 bg-primaryClr flex justify-center items-center`}
        >
          {children}
        </div>
      </div>
    </>
  );
};

function UseEffects() {
  const GSAPTimelineScrollerPosition = "60%";

  function CreateGsapTimeline({
    trigger,
    start,
    end,
    scrub,
    markers,
    toggleActions,
  }) {
    if (scrub === undefined) scrub = true;
    return gsap.timeline({
      scrollTrigger: {
        trigger: trigger,
        start: start || `top ${GSAPTimelineScrollerPosition}`,
        end: end || `bottom ${GSAPTimelineScrollerPosition}`,
        scrub: scrub,
        markers: markers || false,
        toggleActions: toggleActions || "play play reverse reverse",
      },
    });
  }

  function SetEffect(className, callback) {
    return document.querySelectorAll(className).forEach(callback);
  }

  SetEffect(".div1", (elem) => AutoStaggerText(elem));
  SetEffect(".div2", (elem) => StaggerText(elem));
  SetEffect(".clipShow", (elem) => ShapeShow(elem));
  SetEffect(".div3", (elem) => FadeInText(elem));
  SetEffect(".clipLeftToRight", (elem) => ShapeLeftToRight(elem));
  SetEffect(".div4", (elem) => StaggerTextRightToLeft(elem));
  SetEffect(".div5", (elem) => StaggerTextLeftToRight(elem));
  SetEffect(".clipRightToLeft", (elem) => ShapeRightToLeft(elem));
  SetEffect(".clipLeftToRight2", (elem) => ShapeLeftToRight(elem));
  SetEffect(".div6", (elem) => StaggerTextRightToLeft(elem));
  SetEffect(".div7", (elem) => StaggerTextLeftToRight(elem));
  SetEffect(".clipRightToLeft2", (elem) => ShapeRightToLeft(elem));
  SetEffect(".div8", (elem) => StaggerTextFromY(elem));
  SetEffect(".clipShow2", (elem) => ShapeShow(elem));
  SetEffect(".clipShow3", (elem) => ShapeShowCenter(elem));

  function AutoStaggerText(char) {
    CreateGsapTimeline({ trigger: char, scrub: false, markers: false }).fromTo(
      new SplitType(char, { types: "chars" }).chars,
      {
        opacity: 0,
      },
      {
        duration: 3,
        opacity: 1,
        stagger: 0.3,
      }
    );
  }

  function StaggerText(char) {
    CreateGsapTimeline({ trigger: char, markers: false }).fromTo(
      new SplitType(char, { types: "chars" }).chars,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        stagger: 0.5,
      }
    );
  }

  function ShapeShow(elem) {
    CreateGsapTimeline({ trigger: elem.parentElement, markers: false }).fromTo(
      `.${elem.className.split(" ")[0]}`,
      {
        opacity: 0,
        rotate: 360,
        scale: 0,
      },
      {
        opacity: 1,
        rotate: 0,
        scale: 1,
        zIndex: -0,
      }
    );
  }

  function FadeInText(char) {
    CreateGsapTimeline({ trigger: char, markers: false }).fromTo(
      new SplitType(char, { types: "chars" }).chars,
      {
        opacity: 0,
      },
      {
        opacity: 1,
      }
    );
  }

  function ShapeLeftToRight(elem) {
    CreateGsapTimeline({ trigger: elem.parentElement, markers: false }).fromTo(
      `.${elem.className.split(" ")[0]}`,
      {
        opacity: 0,
        rotate: -360,
        scale: 0,
      },
      {
        opacity: 1,
        rotate: 0,
        scale: 1,
      }
    );
  }

  function StaggerTextRightToLeft(char) {
    CreateGsapTimeline({ trigger: char, markers: false }).fromTo(
      new SplitType(char, { types: "chars" }).chars,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        stagger: 0.5,
      }
    );
  }

  function ShapeRightToLeft(elem) {
    CreateGsapTimeline({ trigger: elem.parentElement, markers: false }).fromTo(
      `.${elem.className.split(" ")[0]}`,
      {
        opacity: 0,
        rotate: 360,
        scale: 0,
      },
      {
        opacity: 1,
        rotate: 0,
        scale: 1,
      }
    );
  }

  function StaggerTextLeftToRight(char) {
    CreateGsapTimeline({ trigger: char, markers: false }).fromTo(
      new SplitType(char, { types: "chars" }).chars,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        stagger: 0.5,
      }
    );
  }

  function StaggerTextFromY(char) {
    CreateGsapTimeline({ trigger: char, markers: false }).fromTo(
      new SplitType(char, { types: "chars" }).chars,
      {
        opacity: 0,
        transformOrigin: "top",
        y: -20,
      },
      {
        opacity: 1,
        stagger: 0.5,
        y: 0,
      }
    );
  }

  function ShapeShowCenter(elem) {
    CreateGsapTimeline({
      trigger: elem.parentElement,
      end: `center ${GSAPTimelineScrollerPosition}`,
      markers: false,
    }).fromTo(
      `.${elem.className.split(" ")[0]}`,
      {
        opacity: 0,
        rotate: 360,
        scale: 0,
      },
      {
        opacity: 1,
        rotate: 0,
        scale: 1,
      }
    );
  }
}

export default Home;
