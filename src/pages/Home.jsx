/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";

import { ImagePaths } from "../components/Paths";
import { rule } from "postcss";

const Home = ({ ...props }) => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    UseEffects();
  });

  return (
    <>
      <section id={props.id} className="">
        {/*
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-end">
          <img
            src={ImagePaths.hero}
            alt={ImagePaths.hero}
            id="hero"
            className="relative w-[90vw] h-[90vh] object-contain"
          />
        </div>
        */}

        <div className="div1 pt-[40vh] pb-[10vh] text-center text-5xl">
          Hello!
        </div>

        <div className="div2 pt-[30vh] text-center text-5xl">
          I'm Carlos Johncent Ventura
        </div>

        <div className="clip-parent pt-[5vh] text-center text-5xl flex justify-center items-center">
          <div className="clip-path w-64 h-64 bg-primaryClr flex justify-center items-center">
            <img src={ImagePaths.hero2} alt={ImagePaths.hero2} className="w-full h-full object-fill"/>
          </div>
        </div>
      </section>
    </>
  );
};

function UseEffects() {
  document.querySelectorAll(".div1").forEach((char, i) => Div1(char));
  document.querySelectorAll(".div2").forEach((char, i) => Div2(char));
  document
    .querySelectorAll(".clip-parent")
    .forEach((element, i) => ClipParent(element));
}

function Div1(char) {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: char,
        start: "top center",
        end: "bottom center",
        scrub: false,
        //markers: true,
      },
    })
    .fromTo(
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

function Div2(char) {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: char,
        start: "top center",
        end: "bottom center",
        scrub: true,
        markers: true,
      },
    })
    .fromTo(
      new SplitType(char, { types: "chars" }).chars,
      {
        opacity: 0,
      },
      {
        //duration: 1,
        opacity: 1,
        stagger: 0.5,
      }
    );
}

function ClipParent(element) {
  gsap
  .timeline({
    scrollTrigger: {
      trigger: element,
      start: "top center",
      end: "bottom center",
      scrub: true,
      markers: true,
    },
  })
  .fromTo(
    ".clip-path",
    {
      opacity: 0,
      rotate: 360,
      scale: 0,
    },
    {
      //duration: 1,
      opacity: 1,
      rotate: 0,
      scale: 1,
      //stagger: 0.5,
    }
  );

  console.log(`.${element.className.split(' ')[0]}`)
}

export default Home;
