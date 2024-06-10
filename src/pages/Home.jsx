/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { FaReact } from "react-icons/fa";

import { ExternalPaths, ImagePaths } from "../components/Paths";
import sfx from "../components/ScrollEffects";
import {
  SmDiv,
  LgDiv,
  SmRhombusImg,
  MdRhombusImg,
  LgRhombusImg,
} from "../components/Components";

const Home = ({ ...props }) => {
  ///*
  useEffect(() => {
    sfx.Init();
    sfx.SetEffect(".txHello", (elem) => sfx.TextAutoStagger(elem));
    sfx.SetEffect(".txImCJV", (elem) => sfx.TextStagger(elem));
    sfx.SetEffect(".spImCJV", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".txJustAnother", (elem) => sfx.TextStagger(elem));

    sfx.SetEffect(".spFrontEnd", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".txFrontEnd", (elem) => sfx.TextStagger(elem));
    sfx.SetEffect(".spFrontEndSkill", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".spBackEnd", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".txBackEnd", (elem) => sfx.TextStagger(elem));
    sfx.SetEffect(".spBackEndSkill", (elem) => sfx.ShapeShow(elem));

    sfx.SetEffect(".spGameDev", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".txGameDev", (elem) => sfx.TextStagger(elem));
    sfx.SetEffect(".spGameDevSkill", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".spGDandPA", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".txGDandPA", (elem) => sfx.TextStagger(elem));
    sfx.SetEffect(".spGDandPASkill", (elem) => sfx.ShapeShow(elem));

    sfx.SetEffect(".txStillLearning", (elem) => sfx.TextStagger(elem));
    sfx.SetEffect(".spWelcome", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".txWelcome", (elem) => sfx.TextStagger(elem));
    sfx.SetEffect(".txWelcomeDesc", (elem) => sfx.TextStagger(elem));
  });
  //*/

  return (
    <>
      <section id={props.id} className="mt-[0] pt-[0] h-fit">
        <LgDiv className="txHello pt-[40vh] pb-[25vh]">Hello!</LgDiv>

        <LgDiv className="txImCJV pt-[20vh]">
          I'm Carlos Johncent Ventura,
        </LgDiv>

        <LgRhombusImg
          className={"spImCJV pt-[5vh] flex justify-center items-center"}
          href={ExternalPaths.cert1}
          imgSrc={ImagePaths.hero}
        ></LgRhombusImg>

        <LgDiv className={"txJustAnother pt-[10vh]"}>
          Just another fool chasing the dream of
        </LgDiv>

        {/********************************************************************************/}

        <div className="flex lg:flex-row flex-col justify-evenly items-center">
          <LgRhombusImg
            className={"spFrontEnd lg:mt-[20vh] mt-[15vh]"}
            imgSrc={ImagePaths.hero}
          ></LgRhombusImg>

          <div className="flex flex-col justify-center items-center">
            <LgDiv className={"txFrontEnd lg:pt-[20vh] pt-[2.5vh]"}>
              Front-End Development
            </LgDiv>

            <div className="w-full flex justify-between items-center">
              <SmRhombusImg
                className={"spFrontEndSkill pt-[5vh]"}
                href={ExternalPaths.cert1}
                imgSrc={ImagePaths.html}
              ></SmRhombusImg>
              <SmRhombusImg
                className={"spFrontEndSkill pt-[5vh]"}
                href={ExternalPaths.cert1}
                imgSrc={ImagePaths.html}
              ></SmRhombusImg>
              <SmRhombusImg
                className={"spFrontEndSkill pt-[5vh]"}
                href={ExternalPaths.cert1}
                imgSrc={ImagePaths.html}
              ></SmRhombusImg>
            </div>
          </div>
        </div>

        <div className="flex lg:flex-row-reverse flex-col justify-evenly items-center">
          <LgRhombusImg
            className={"spBackEnd lg:mt-[20vh] mt-[15vh]"}
            imgSrc={ImagePaths.hero}
          ></LgRhombusImg>

          <div className="flex flex-col justify-center items-center">
            <LgDiv className={"txBackEnd lg:pt-[20vh] pt-[2.5vh]"}>
              Back-End Development
            </LgDiv>

            <div className="w-full flex justify-between items-center">
              <SmRhombusImg
                className={"spBackEndSkill pt-[5vh]"}
                href={ExternalPaths.cert1}
                imgSrc={ImagePaths.html}
              ></SmRhombusImg>
              <SmRhombusImg
                className={"spBackEndSkill pt-[5vh]"}
                href={ExternalPaths.cert1}
                imgSrc={ImagePaths.html}
              ></SmRhombusImg>
              <SmRhombusImg
                className={"spBackEndSkill pt-[5vh]"}
                href={ExternalPaths.cert1}
                imgSrc={ImagePaths.html}
              ></SmRhombusImg>
            </div>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col justify-evenly items-center">
          <LgRhombusImg
            className={"spGameDev lg:mt-[20vh] mt-[15vh]"}
            imgSrc={ImagePaths.hero}
          ></LgRhombusImg>

          <div className="flex flex-col justify-center items-center">
            <LgDiv className={"txGameDev lg:pt-[20vh] pt-[2.5vh]"}>
              Video Game Development
            </LgDiv>

            <div className="w-full flex justify-between items-center">
              <SmRhombusImg
                className={"spGameDevSkill pt-[5vh]"}
                href={ExternalPaths.cert1}
                imgSrc={ImagePaths.html}
              ></SmRhombusImg>
              <SmRhombusImg
                className={"spGameDevSkill pt-[5vh]"}
                href={ExternalPaths.cert1}
                imgSrc={ImagePaths.html}
              ></SmRhombusImg>
              <SmRhombusImg
                className={"spGameDevSkill pt-[5vh]"}
                href={ExternalPaths.cert1}
                imgSrc={ImagePaths.html}
              ></SmRhombusImg>
            </div>
          </div>
        </div>

        <div className="flex lg:flex-row-reverse flex-col justify-evenly items-center">
          <LgRhombusImg
            className={"spGDandPA lg:mt-[20vh] mt-[15vh]"}
            imgSrc={ImagePaths.hero}
          ></LgRhombusImg>

          <div className="flex flex-col justify-center items-center">
            <LgDiv className={"txGDandPA lg:pt-[20vh] pt-[2.5vh]"}>
              Graphics Design & Pixel Art
            </LgDiv>

            <div className="w-full flex justify-between items-center">
              <SmRhombusImg
                className={"spGDandPASkill pt-[5vh]"}
                href={ExternalPaths.cert1}
                imgSrc={ImagePaths.html}
              ></SmRhombusImg>
              <SmRhombusImg
                className={"spGDandPASkill pt-[5vh]"}
                href={ExternalPaths.cert1}
                imgSrc={ImagePaths.html}
              ></SmRhombusImg>
              <SmRhombusImg
                className={"spGDandPASkill pt-[5vh]"}
                href={ExternalPaths.cert1}
                imgSrc={ImagePaths.html}
              ></SmRhombusImg>
            </div>
          </div>
        </div>

        {/********************************************************************************/}

        <LgDiv className="txStillLearning pt-[30vh] ">
          And still learning more, but for now...
        </LgDiv>

        <div className="flex flex-col justify-center items-center">
          <LgDiv className={"txWelcome mt-[50vh]"}>
            WELCOME TO MY PORTFOLIO
          </LgDiv>

          <div className="w-full flex justify-evenly items-center">
            <SmRhombusImg
              className={"spWelcome pt-[2.5vh]"}
              href={ExternalPaths.cert1}
              imgSrc={ImagePaths.html}
            ></SmRhombusImg>
            <SmRhombusImg
              className={"spWelcome pt-[2.5vh]"}
              href={ExternalPaths.cert1}
              imgSrc={ImagePaths.html}
            ></SmRhombusImg>
            <MdRhombusImg
              className={"spWelcome pt-[2.5vh]"}
              imgSrc={ImagePaths.hero}
            ></MdRhombusImg>
            <SmRhombusImg
              className={"spWelcome pt-[2.5vh]"}
              href={ExternalPaths.cert1}
              imgSrc={ImagePaths.html}
            ></SmRhombusImg>
            <SmRhombusImg
              className={"spWelcome pt-[2.5vh]"}
              href={ExternalPaths.cert1}
              imgSrc={ImagePaths.html}
            ></SmRhombusImg>
          </div>

          <SmDiv className={"txWelcomeDesc pt-[2.5vh] w-[70vw]"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            rerum fuga mollitia laborum placeat sequi.
          </SmDiv>
        </div>
      </section>
    </>
  );
};

export default Home;
