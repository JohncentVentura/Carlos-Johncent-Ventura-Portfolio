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
    sfx.SetEffect(".txWelcome", (elem) => sfx.TextStagger(elem));
    sfx.SetEffect(".spWelcome", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".txWelcomeDesc", (elem) => sfx.TextStagger(elem));
    sfx.SetEffect(".spWelcomeLink", (elem) => sfx.ShapeShow(elem));
  });
  //*/

  return (
    <>
      <section id={props.id} className="mt-[0] pt-[0] h-fit">
        <LgDiv className="txHello pt-[40vh] pb-[35vh]">Hello!</LgDiv>

        <LgDiv className="txImCJV pt-[20vh]">
          I'm Carlos 
        </LgDiv>
        <LgDiv className="txImCJV">
          Johncent Ventura
        </LgDiv>

        <LgRhombusImg
          className={"spImCJV flex justify-center items-center lg:pt-[10vh] pt-[5vh]"}
          href={ExternalPaths.cert1}
          imgSrc={ImagePaths.hero}
        ></LgRhombusImg>

        <LgDiv className={"txJustAnother lg:pt-[10vh] pt-[5vh]"}>
          Just another fool
        </LgDiv>
        <LgDiv className={"txJustAnother"}>
          chasing the dream of
        </LgDiv>

        {/*Skills*******************************************************************************/}

        <div className="flex lg:flex-row flex-col justify-evenly items-center">
          <LgRhombusImg
            className={"spFrontEnd lg:mt-[20vh] mt-[15vh]"}
            imgSrc={ImagePaths.hero}
          ></LgRhombusImg>

          <div className="flex flex-col justify-center items-center">
            <LgDiv className={"txFrontEnd lg:pt-[20vh] pt-[2.5vh]"}>
              Front-End 
            </LgDiv>
            <LgDiv className={"txFrontEnd"}>
              Development
            </LgDiv>

            <div className="flex justify-between items-center xl:w-[30vw] md:w-[40vw] w-[70vw] ">
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
              Back-End 
            </LgDiv>
            <LgDiv className={"txBackEnd"}>
              Development
            </LgDiv>

            <div className="flex justify-between items-center xl:w-[30vw] md:w-[40vw] w-[70vw] ">
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
              Game 
            </LgDiv>
            <LgDiv className={"txGameDev"}>
              Development
            </LgDiv>

            <div className="flex justify-between items-center xl:w-[30vw] md:w-[40vw] w-[70vw] ">
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
              Graphics Design
            </LgDiv>
            <LgDiv className={"txGDandPA"}>
              & Pixel Art
            </LgDiv>

            <div className="flex justify-between items-center xl:w-[30vw] md:w-[40vw] w-[70vw] ">
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

        {/*Skills*******************************************************************************/}

        <LgDiv className="txStillLearning lg:pt-[20vh] pt-[15vh]">
          & still learning more,
        </LgDiv>
        <LgDiv className="txStillLearning ">
          but for now...
        </LgDiv>

        <div className="flex flex-col justify-center items-center">
          <LgDiv className={"txWelcome mt-[30vh]"}>
            WELCOME TO
          </LgDiv>
          <LgDiv className={"txWelcome"}>
            MY PORTFOLIO
          </LgDiv>

            <LgRhombusImg 
            className={"spWelcome pt-[2.5vh]"}
              imgSrc={ImagePaths.hero}
            >

            </LgRhombusImg>

          <SmDiv className={"txWelcomeDesc pt-[2.5vh] xl:w-[40vw] md:w-[50vw] w-[80vw]"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            rerum fuga mollitia laborum placeat sequi.
          </SmDiv>

          <div className="flex justify-between items-center xl:w-[40vw] md:w-[50vw] w-[80vw] ">
            <SmRhombusImg
              className={"spWelcomeLink pt-[5vh]"}
              href={ExternalPaths.cert1}
              imgSrc={ImagePaths.html}
            ></SmRhombusImg>
            <SmRhombusImg
              className={"spWelcomeLink pt-[5vh]"}
              href={ExternalPaths.cert1}
              imgSrc={ImagePaths.html}
            ></SmRhombusImg>
            <SmRhombusImg
              className={"spWelcomeLink pt-[5vh]"}
              href={ExternalPaths.cert1}
              imgSrc={ImagePaths.html}
            ></SmRhombusImg>
            <SmRhombusImg
              className={"spWelcomeLink pt-[5vh]"}
              href={ExternalPaths.cert1}
              imgSrc={ImagePaths.html}
            ></SmRhombusImg>
          </div>

          
        </div>
      </section>
    </>
  );
};

export default Home;
