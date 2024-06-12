/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { FaReact } from "react-icons/fa";

import { ExternalPaths, ImagePaths } from "../components/Paths";
import sfx from "../components/ScrollEffects";
import {
  SmDiv,
  LgDiv,
  SmRhombusImg,
  SmRhombusIcon,
  LgRhombusImg,
} from "../components/Components";

const Home = ({ ...props }) => {
  ///*
  useEffect(() => {
    sfx.Init(props.fgClr, props.bgClr, props.primaryClr);
    sfx.SetEffect(".txAutoStagger", (elem) => sfx.TextAutoStagger(elem));
    sfx.SetEffect(".txStagger", (elem) => sfx.TextStagger(elem));
    sfx.SetEffect(".shHero", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".shFrontEnd", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".shFrontEndSkill", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".shBackEnd", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".shBackEndSkill", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".shGameDev", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".shGameDevSkill", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".shGDandPA", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".shGDandPASkill", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".shWelcome", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".shWelcomeLink", (elem) => sfx.ShapeShow(elem));
  });
  //*/

  return (
    <>
      <section id={props.id} className="pt-[0] h-fit">
        <LgDiv className="txAutoStagger pt-[40vh] pb-[35vh]">Hello!</LgDiv>

        <LgDiv className="txStagger pt-[20vh]">I'm Carlos</LgDiv>
        <LgDiv className="txStagger">Johncent Ventura</LgDiv>

        <LgRhombusImg
          className={
            "shHero flex justify-center items-center lg:pt-[10vh] pt-[5vh]"
          }
          href={ExternalPaths.cert1}
          imgSrc={ImagePaths.hero}
        ></LgRhombusImg>

        <LgDiv className={"txStagger lg:pt-[10vh] pt-[5vh]"}>
          Just another fool
        </LgDiv>
        <LgDiv className={"txStagger lg:mb-[20vh] mb-[15vh]"}>
          chasing the dream of
        </LgDiv>

        {/*Skills*******************************************************************************/}

        <div className="flex lg:flex-row flex-col lg:justify-center justify-evenly items-center xl:gap-[15vh] lg:gap-[10vh]">
          <LgRhombusImg
            className={"shFrontEnd lg:mt-[20vh] mt-[15vh]"}
            imgSrc={ImagePaths.hero}
          ></LgRhombusImg>

          <div className="flex flex-col justify-center items-center">
            <LgDiv className={"txStagger lg:pt-[20vh] pt-[2vh]"}>
              Front-End
            </LgDiv>
            <LgDiv className={"txStagger"}>Development</LgDiv>

            <div className="flex justify-between items-center xl:w-[30vw] md:w-[40vw] w-[70vw]">
              <SmRhombusImg
                className={"shFrontEndSkill pt-[4vh]"}
                href={ExternalPaths.cert1}
                imgSrc={ImagePaths.html}
              ></SmRhombusImg>
              <SmRhombusImg
                className={"shFrontEndSkill pt-[4vh]"}
                href={ExternalPaths.cert1}
                imgSrc={ImagePaths.html}
              ></SmRhombusImg>
              <SmRhombusImg
                className={"shFrontEndSkill pt-[4vh]"}
                href={ExternalPaths.cert1}
                imgSrc={ImagePaths.html}
              ></SmRhombusImg>
            </div>
          </div>
        </div>

        <div className="flex lg:flex-row-reverse flex-col lg:justify-center justify-evenly items-center xl:gap-[15vh] lg:gap-[10vh]">
          <LgRhombusImg
            className={"shBackEnd lg:mt-[20vh] mt-[15vh]"}
            imgSrc={ImagePaths.hero}
          ></LgRhombusImg>

          <div className="flex flex-col justify-center items-center">
            <LgDiv className={"txStagger lg:pt-[20vh] pt-[2vh]"}>
              Back-End
            </LgDiv>
            <LgDiv className={"txStagger"}>Development</LgDiv>

            <div className="flex justify-between items-center xl:w-[30vw] md:w-[40vw] w-[70vw]">
              <SmRhombusImg
                className={"shBackEndSkill pt-[4vh]"}
                href={ExternalPaths.cert1}
                imgSrc={ImagePaths.html}
              ></SmRhombusImg>
              <SmRhombusImg
                className={"shBackEndSkill pt-[4vh]"}
                href={ExternalPaths.cert1}
                imgSrc={ImagePaths.html}
              ></SmRhombusImg>
              <SmRhombusImg
                className={"shBackEndSkill pt-[4vh]"}
                href={ExternalPaths.cert1}
                imgSrc={ImagePaths.html}
              ></SmRhombusImg>
            </div>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col lg:justify-center justify-evenly items-center xl:gap-[15vh] lg:gap-[10vh]">
          <LgRhombusImg
            className={"shGameDev lg:mt-[20vh] mt-[15vh]"}
            imgSrc={ImagePaths.hero}
          ></LgRhombusImg>

          <div className="flex flex-col justify-center items-center">
            <LgDiv className={"txStagger lg:pt-[20vh] pt-[2vh]"}>Game</LgDiv>
            <LgDiv className={"txStagger"}>Development</LgDiv>

            <div className="flex justify-between items-center xl:w-[30vw] md:w-[40vw] w-[70vw]">
              <SmRhombusImg
                className={"shGameDevSkill pt-[4vh]"}
                href={ExternalPaths.cert1}
                imgSrc={ImagePaths.html}
              ></SmRhombusImg>
              <SmRhombusImg
                className={"shGameDevSkill pt-[4vh]"}
                href={ExternalPaths.cert1}
                imgSrc={ImagePaths.html}
              ></SmRhombusImg>
              <SmRhombusImg
                className={"shGameDevSkill pt-[4vh]"}
                href={ExternalPaths.cert1}
                imgSrc={ImagePaths.html}
              ></SmRhombusImg>
            </div>
          </div>
        </div>

        <div className="flex lg:flex-row-reverse flex-col lg:justify-center justify-evenly items-center xl:gap-[15vh] lg:gap-[10vh]">
          <LgRhombusImg
            className={"shGDandPA lg:mt-[20vh] mt-[15vh]"}
            imgSrc={ImagePaths.hero}
          ></LgRhombusImg>

          <div className="flex flex-col justify-center items-center">
            <LgDiv className={"txStagger lg:pt-[20vh] pt-[2vh]"}>
              Graphics Design
            </LgDiv>
            <LgDiv className={"txStagger"}>& Pixel Art</LgDiv>

            <div className="flex justify-between items-center xl:w-[30vw] md:w-[40vw] w-[70vw]">
              <SmRhombusImg
                className={"shGDandPASkill pt-[4vh]"}
                href={ExternalPaths.cert1}
                imgSrc={ImagePaths.html}
              ></SmRhombusImg>
              <SmRhombusImg
                className={"shGDandPASkill pt-[4vh]"}
                href={ExternalPaths.cert1}
                imgSrc={ImagePaths.html}
              ></SmRhombusImg>
              <SmRhombusImg
                className={"shGDandPASkill pt-[4vh]"}
                href={ExternalPaths.cert1}
                imgSrc={ImagePaths.html}
              ></SmRhombusImg>
            </div>
          </div>
        </div>

        {/*Skills*******************************************************************************/}

        <LgDiv className="txStagger lg:pt-[20vh] pt-[15vh]">
          & still learning more,
        </LgDiv>
        <LgDiv className="txStagger">but for now...</LgDiv>

        <div className="flex flex-col justify-center items-center">
          <LgDiv className={"txStagger mt-[60vh]"}>WELCOME TO</LgDiv>
          <LgDiv className={"txStagger"}>MY PORTFOLIO</LgDiv>

          <LgRhombusImg
            className={"shWelcome pt-[2vh]"}
            imgSrc={ImagePaths.hero}
          ></LgRhombusImg>

          <SmDiv
            className={"txStagger pt-[2vh] xl:w-[40vw] md:w-[50vw] w-[80vw]"}
          >
            I know you still don't know me after that introduction,
          </SmDiv>
          <SmDiv className={"txStagger xl:w-[40vw] md:w-[50vw] w-[80vw]"}>
            so you can download my resume, stalk me on Facebook,
          </SmDiv>
          <SmDiv className={"txStagger xl:w-[40vw] md:w-[50vw] w-[80vw]"}>
            commit with me in Github, and criticize my Pinterest.
          </SmDiv>

          <div className="flex justify-between items-center xl:w-[40vw] md:w-[50vw] w-[80vw]">
            <SmRhombusIcon
              className={"shWelcomeLink pt-[4vh]"}
              href={ExternalPaths.cert1}
              icon={<FaReact size="50" />}
            ></SmRhombusIcon>
            <SmRhombusIcon
              className={"shWelcomeLink pt-[4vh]"}
              href={ExternalPaths.cert1}
              icon={<FaReact size="50" />}
            ></SmRhombusIcon>
            <SmRhombusIcon
              className={"shWelcomeLink pt-[4vh]"}
              href={ExternalPaths.cert1}
              icon={<FaReact size="50" />}
            ></SmRhombusIcon>
            <SmRhombusIcon
              className={"shWelcomeLink pt-[4vh]"}
              href={ExternalPaths.cert1}
              icon={<FaReact size="50" />}
            ></SmRhombusIcon>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
