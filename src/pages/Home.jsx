/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { FaReact } from "react-icons/fa";

import { ExternalPaths, ImagePaths } from "../components/Paths";
import sfx from "../components/ScrollEffects";
import { SmRhombusImg, LgRhombus } from "../components/Shapes";

const Home = ({ ...props }) => {
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
    sfx.SetEffect(".spBackEnd2", (elem) => sfx.ShapeShow(elem));

    sfx.SetEffect(".spGameDev", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".txGameDev", (elem) => sfx.TextStagger(elem));
    sfx.SetEffect(".spGameDevSkill", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".spGDandPA", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".txGDandPA", (elem) => sfx.TextStagger(elem));
    sfx.SetEffect(".spGDandPASkill", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".spGDandPA2", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".txStillLearning", (elem) => sfx.TextStagger(elem));

    sfx.SetEffect(".spWelcome", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".txWelcome", (elem) => sfx.TextStagger(elem));
    sfx.SetEffect(".txWelcomeDesc", (elem) => sfx.TextStagger(elem));
    sfx.SetEffect(".spWelcomeLink", (elem) => sfx.ShapeShow(elem));

    sfx.SetEffect(".clipLeftToRight3", (elem) => sfx.ShapeShow(elem));
  });

  return (
    <>
      <section id={props.id} className="mt-[0] pt-[0] h-fit">
        <Div className="txHello pt-[40vh] pb-[25vh]">Hello!</Div>

        <Div className="txImCJV pt-[20vh]">I'm Carlos Johncent Ventura,</Div>

        <LgRhombus
          className={"spImCJV pt-[5vh] flex justify-center items-center"}
          href={ExternalPaths.cert1}
          imgSrc={ImagePaths.hero}
        ></LgRhombus>

        <Div className={"txJustAnother pt-[10vh]"}>
          Just another fool chasing the dream of
        </Div>

        <div className="flex md:flex-row flex-col justify-evenly items-center">
          <LgRhombus
            className={"spFrontEnd mt-[20vh]"}
            imgSrc={ImagePaths.hero}
          ></LgRhombus>

          <div className="flex flex-col justify-evenly items-center">
            <Div className="txFrontEnd md:pt-[20vh] mt-[0]">
              Front-End Development
            </Div>

            <div className="w-full flex md:justify-between justify-evenly items-center">
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

        <div className="flex md:flex-row flex-col justify-evenly items-center">
          <LgRhombus
            className={"spBackEnd md:mt-[0] mt-[20vh] md:hidden block"}
            imgSrc={ImagePaths.hero}
          ></LgRhombus>

          <div className="flex flex-col justify-evenly items-center">
            <Div className="txBackEnd md:pt-[20vh] mt-[0]">
              Back-End Development
            </Div>

            <div className="w-full flex md:justify-between justify-evenly items-center">
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

          <LgRhombus
            className={"spBackEnd2 md:mt-[20vh] mt-[0] md:block hidden"}
            imgSrc={ImagePaths.hero}
          ></LgRhombus>
        </div>

        <div className="flex md:flex-row flex-col justify-evenly items-center">
          <LgRhombus
            className={"spGameDev mt-[20vh]"}
            imgSrc={ImagePaths.hero}
          ></LgRhombus>

          <div className="flex flex-col justify-evenly items-center">
            <Div className="txGameDev md:pt-[20vh] mt-[0]">
              Game Development
            </Div>

            <div className="w-full flex md:justify-between justify-evenly items-center">
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

        <div className="flex md:flex-row flex-col justify-evenly items-center">
          <LgRhombus
            className={"spGDandPA md:mt-[0] mt-[20vh] md:hidden block"}
            imgSrc={ImagePaths.hero}
          ></LgRhombus>

          <div className="flex flex-col justify-evenly items-center">
            <Div className="txGDandPA md:pt-[20vh] mt-[0]">
              Graphics Design & Pixel Art
            </Div>

            <div className="w-full flex md:justify-between justify-evenly items-center">
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

          <LgRhombus
            className={"spGDandPA2 md:mt-[20vh] mt-[0] md:block hidden"}
            imgSrc={ImagePaths.hero}
          ></LgRhombus>
        </div>

        <Div className="txStillLearning pt-[30vh] ">
          And still learning more, but for now...
        </Div>

        <div className="mt-[50vh] h-[60vh] flex justify-center items-center">
          <LgRhombus
            className={"spWelcome absolute top-0"}
            imgSrc={ImagePaths.hero}
          ></LgRhombus>

          <Div className="txWelcome absolute top-0 pt-[25vh]">
            Welcome to my portfolio
          </Div>

          <div className="txWelcomeDesc absolute top-0 pt-[35vh] text-center text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            rerum fuga mollitia laborum placeat sequi.
          </div>

          <div className="absolute top-0 w-[50vw] flex justify-evenly items-center">
            <SmRhombusImg
              className={"spWelcomeLink mt-[15vh] pt-[30vh]"}
              href={ExternalPaths.cert1}
              imgSrc={ImagePaths.html}
            ></SmRhombusImg>
            <SmRhombusImg
              className={"spWelcomeLink mt-[15vh] pt-[30vh]"}
              href={ExternalPaths.cert1}
              imgSrc={ImagePaths.html}
            ></SmRhombusImg>
            <SmRhombusImg
              className={"spWelcomeLink mt-[15vh] pt-[30vh]"}
              href={ExternalPaths.cert1}
              imgSrc={ImagePaths.html}
            ></SmRhombusImg>
            <SmRhombusImg
              className={"spWelcomeLink mt-[15vh] pt-[30vh]"}
              href={ExternalPaths.cert1}
              imgSrc={ImagePaths.html}
            ></SmRhombusImg>
          </div>
        </div>
      </section>
    </>
  );
};

const Div = ({ className, children }) => {
  return (
    <>
      <div className={`${className} text-center text-5xl`}>{children}</div>
    </>
  );
};

export default Home;
