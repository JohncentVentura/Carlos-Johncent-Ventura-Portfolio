/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { FaFreeCodeCamp } from "react-icons/fa";

import { ExternalPaths, ImagePaths } from "../components/Paths";
import sfx from "../components/ScrollEffects";
import {
  SmDiv,
  LgDiv,
  IconLink,
  SmRhombusImg,
  SmRhombusIcon,
  LgRhombusImg,
} from "../components/Components";

const About = ({ ...props }) => {
  useEffect(() => {
    sfx.Init(props.fgClr, props.bgClr, props.primaryClr);
    sfx.SetEffect(".spUL", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".txAbout", (elem) => sfx.TextStaggerOpacity(elem));
    sfx.SetEffect(".txCert", (elem) => sfx.TextStagger(elem));

    sfx.SetEffect(".spBEDA", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".txBEDA", (elem) => sfx.TextStagger(elem));
    sfx.SetEffect(".icBEDA", (elem) => sfx.ShapeShow(elem));

    sfx.SetEffect(".spRD", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".txRD", (elem) => sfx.TextStagger(elem));
    sfx.SetEffect(".icRD", (elem) => sfx.ShapeShow(elem));

    sfx.SetEffect(".spTESDA", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".txTESDA", (elem) => sfx.TextStagger(elem));

    sfx.SetEffect(".spFEDL", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".txFEDL", (elem) => sfx.TextStagger(elem));
    sfx.SetEffect(".icFEDL", (elem) => sfx.ShapeShow(elem));

    sfx.SetEffect(".spJADS", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".txJADS", (elem) => sfx.TextStagger(elem));
    sfx.SetEffect(".icJADS", (elem) => sfx.ShapeShow(elem));

    sfx.SetEffect(".spRWD", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".txRWD", (elem) => sfx.TextStagger(elem));
    sfx.SetEffect(".icRWD", (elem) => sfx.ShapeShow(elem));

    sfx.SetEffect(".spULD", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".txULD", (elem) => sfx.TextStagger(elem));

    sfx.SetEffect(".spRCPE", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".txRCPE", (elem) => sfx.TextStagger(elem));

    sfx.SetEffect(".spAAD", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".txAAD", (elem) => sfx.TextStagger(elem));
  });

  return (
    <>
      <section id={props.id}>
        <LgRhombusImg
          className={"spUL mt-[10vh] flex justify-center items-center"}
          imgSrc={ImagePaths.universityOfLuzon}
        ></LgRhombusImg>


          <SmDiv
            className={`txAbout pt-[2vh] xl:w-[40vw] md:w-[50vw] w-[80vw]`}
          >
            I'm a graduate from the University of Luzon, Dagupan City with a
            Bachelor's Degree in Information Technology and Latin Honour of Cum
            Laude. Little did I know that playing video games since I was a kid
            will eventually led me into game development that helps me chose
            this course.
          </SmDiv>
          <SmDiv
            className={`txAbout pt-[2vh] xl:w-[40vw] md:w-[50vw] w-[80vw]`}
          >
            This sparks my passion in developing and designing video games that
            makes me curious of what other things you can create using
            technology. This also creates bonds between me and the people who
            share the same passion, and I hope I can continue creating and
            learning more things with you.
          </SmDiv>
          <SmDiv
            className={`txAbout pt-[2vh] xl:w-[40vw] md:w-[50vw] w-[80vw]`}
          >
            I don't have any work experience, but I always upskill and compensate it with
            certificates to remain relevant this past months.
          </SmDiv>
          <LgDiv className={"txCert lg:mt-[20vh] pt-[20vh]"}>
            MY CERTIFICATES
          </LgDiv>
        

        {/*Certificates*******************************************************************************/}

        <div className="flex lg:flex-row-reverse flex-col lg:justify-center justify-evenly items-center lg:gap-[5vh]">
          <div className="flex flex-col justify-center items-center">
            <SmDiv className={`txBEDA pt-[15vh] opacity-75`}>2024</SmDiv>
            <LgDiv className={"txBEDA lg:pt-[2vh] pt-[1vh]"}>Back End</LgDiv>
            <LgDiv className={"txBEDA"}>Development & APIs</LgDiv>
            <LgDiv className={"txBEDA"}>Developer Certificate</LgDiv>
            <div className="flex justify-center items-center opacity-75">
              <IconLink
                href={ExternalPaths.freeCodeCamp}
                className="icBEDA lg:pt-[2vh] pt-[1vh] lg:pe-[1vw] pe-[2vw]"
                icon={<FaFreeCodeCamp size="50" />}
              ></IconLink>
              <SmDiv className={`txBEDA lg:pt-[2vh] pt-[1vh]`}>
                freeCodeCamp.org
              </SmDiv>
            </div>
          </div>
          <LgRhombusImg
            className={"spBEDA lg:pt-[15vh] pt-[2vh]"}
            imgSrc={ImagePaths.hero}
          ></LgRhombusImg>
        </div>

        <div className="flex lg:flex-row flex-col lg:justify-center justify-evenly items-center lg:gap-[5vh]">
          <div className="flex flex-col justify-center items-center">
            <SmDiv className={`txRD pt-[15vh] opacity-75`}>2024</SmDiv>
            <LgDiv className={"txRD lg:pt-[2vh] pt-[1vh]"}>Relational Database</LgDiv>
            <LgDiv className={"txRD"}>Developer Certificate</LgDiv>
            <div className="flex justify-center items-center opacity-75">
              <IconLink
                href={ExternalPaths.freeCodeCamp}
                className="icRD lg:pt-[2vh] pt-[1vh] lg:pe-[1vw] pe-[2vw]"
                icon={<FaFreeCodeCamp size="50" />}
              ></IconLink>
              <SmDiv className={`txRD lg:pt-[2vh] pt-[1vh]`}>
                freeCodeCamp.org
              </SmDiv>
            </div>
          </div>
          <LgRhombusImg
            className={"spRD lg:pt-[15vh] pt-[2vh]"}
            imgSrc={ImagePaths.hero}
          ></LgRhombusImg>
        </div>

        <div className="flex lg:flex-row-reverse flex-col lg:justify-center justify-evenly items-center lg:gap-[5vh]">
          <div className="flex flex-col justify-center items-center">
            <SmDiv className={`txTESDA pt-[15vh] opacity-75`}>2024</SmDiv>
            <LgDiv className={"txTESDA lg:pt-[2vh] pt-[1vh]"}>TESDA Computer</LgDiv>
            <LgDiv className={"txTESDA"}>Systems Servicing</LgDiv>
            <LgDiv className={"txTESDA"}>National Certificate II</LgDiv>
            <div className="flex flex-col justify-center items-center opacity-75">
              <SmDiv className={`txTESDA lg:pt-[2vh] pt-[1vh]`}>
                Pangasinan School of
              </SmDiv>
              <SmDiv className={`txTESDA`}>
                Excellence Incorporated
              </SmDiv>
              <SmDiv className={`txTESDA lg:pt-[2vh] pt-[1vh]`}>
                Urdaneta City, Pangasinan
              </SmDiv>
            </div>
          </div>
          <LgRhombusImg
            className={"spTESDA lg:pt-[15vh] pt-[2vh]"}
            imgSrc={ImagePaths.hero}
          ></LgRhombusImg>
        </div>

        <div className="flex lg:flex-row flex-col lg:justify-center justify-evenly items-center lg:gap-[5vh]">
          <div className="flex flex-col justify-center items-center">
            <SmDiv className={`txFEDL pt-[15vh] opacity-75`}>2024</SmDiv>
            <LgDiv className={"txFEDL lg:pt-[2vh] pt-[1vh]"}>Front End</LgDiv>
            <LgDiv className={"txFEDL"}>Development Libraries</LgDiv>
            <LgDiv className={"txFEDL"}>Developer Certificate</LgDiv>
            <div className="flex justify-center items-center opacity-75">
              <IconLink
                href={ExternalPaths.freeCodeCamp}
                className="icFEDL lg:pt-[2vh] pt-[1vh] lg:pe-[1vw] pe-[2vw]"
                icon={<FaFreeCodeCamp size="50" />}
              ></IconLink>
              <SmDiv className={`txFEDL lg:pt-[2vh] pt-[1vh]`}>
                freeCodeCamp.org
              </SmDiv>
            </div>
          </div>
          <LgRhombusImg
            className={"spFEDL lg:pt-[15vh] pt-[2vh]"}
            imgSrc={ImagePaths.hero}
          ></LgRhombusImg>
        </div>

        <div className="flex lg:flex-row-reverse flex-col lg:justify-center justify-evenly items-center lg:gap-[5vh]">
          <div className="flex flex-col justify-center items-center">
            <SmDiv className={`txJADS pt-[15vh] opacity-75`}>2023</SmDiv>
            <LgDiv className={"txJADS lg:pt-[2vh] pt-[1vh]"}>JavaScript Algorithms</LgDiv>
            <LgDiv className={"txJADS"}>& Data Structures</LgDiv>
            <LgDiv className={"txJADS"}>Developer Certificate</LgDiv>
            <div className="flex justify-center items-center opacity-75">
              <IconLink
                href={ExternalPaths.freeCodeCamp}
                className="icJADS lg:pt-[2vh] pt-[1vh] lg:pe-[1vw] pe-[2vw]"
                icon={<FaFreeCodeCamp size="50" />}
              ></IconLink>
              <SmDiv className={`txJADS lg:pt-[2vh] pt-[1vh]`}>
                freeCodeCamp.org
              </SmDiv>
            </div>
          </div>
          <LgRhombusImg
            className={"spJADS lg:pt-[15vh] pt-[2vh]"}
            imgSrc={ImagePaths.hero}
          ></LgRhombusImg>
        </div>

        <div className="flex lg:flex-row flex-col lg:justify-center justify-evenly items-center lg:gap-[5vh]">
          <div className="flex flex-col justify-center items-center">
            <SmDiv className={`txRWD pt-[15vh] opacity-75`}>2023</SmDiv>
            <LgDiv className={"txRWD lg:pt-[2vh] pt-[1vh]"}>Responsive Web Design</LgDiv>
            <LgDiv className={"txRWD"}>Developer Certificate</LgDiv>
            <div className="flex justify-center items-center opacity-75">
              <IconLink
                href={ExternalPaths.freeCodeCamp}
                className="icRWD lg:pt-[2vh] pt-[1vh] lg:pe-[1vw] pe-[2vw]"
                icon={<FaFreeCodeCamp size="50" />}
              ></IconLink>
              <SmDiv className={`txRWD lg:pt-[2vh] pt-[1vh]`}>
                freeCodeCamp.org
              </SmDiv>
            </div>
          </div>
          <LgRhombusImg
            className={"spRWD lg:pt-[15vh] pt-[2vh]"}
            imgSrc={ImagePaths.hero}
          ></LgRhombusImg>
        </div>

        <div className="flex lg:flex-row-reverse flex-col lg:justify-center justify-evenly items-center lg:gap-[5vh]">
          <div className="flex flex-col justify-center items-center">
            <SmDiv className={`txULD pt-[15vh] opacity-75`}>2023</SmDiv>
            <LgDiv className={"txULD lg:pt-[2vh] pt-[1vh]"}>Bachelor of Science in</LgDiv>
            <LgDiv className={"txULD"}>Information Technology</LgDiv>
            <LgDiv className={"txULD"}>Diploma (Cum Laude)</LgDiv>
            <div className="flex flex-col justify-center items-center opacity-75">
              <SmDiv className={`txULD lg:pt-[2vh] pt-[1vh]`}>
                University of Luzon
              </SmDiv>
              <SmDiv className={`txULD lg:pt-[2vh] pt-[1vh]`}>
                Dagupan City, Pangasinan
              </SmDiv>
            </div>
          </div>
          <LgRhombusImg
            className={"spULD lg:pt-[15vh] pt-[2vh]"}
            imgSrc={ImagePaths.hero}
          ></LgRhombusImg>
        </div>

        <div className="flex lg:flex-row flex-col lg:justify-center justify-evenly items-center lg:gap-[5vh]">
          <div className="flex flex-col justify-center items-center">
            <SmDiv className={`txRCPE pt-[15vh] opacity-75`}>2023</SmDiv>
            <LgDiv className={"txRCPE lg:pt-[2vh] pt-[1vh]"}>1st Research Colloquium</LgDiv>
            <LgDiv className={"txRCPE"}>& Project Exhibits</LgDiv>
            <LgDiv className={"txRCPE"}>Presenter Certificate</LgDiv>
            <div className="flex flex-col justify-center items-center opacity-75">
              <SmDiv className={`txRCPE lg:pt-[2vh] pt-[1vh]`}>
                WCC Aeronautical and
              </SmDiv>
              <SmDiv className={`txRCPE`}>
                Technological College
              </SmDiv>
              <SmDiv className={`txRCPE lg:pt-[2vh] pt-[1vh]`}>
                Binalonan City, Pangasinan
              </SmDiv>
            </div>
          </div>
          <LgRhombusImg
            className={"spRCPE lg:pt-[15vh] pt-[2vh]"}
            imgSrc={ImagePaths.hero}
          ></LgRhombusImg>
        </div>

        <div className="flex lg:flex-row-reverse flex-col lg:justify-center justify-evenly items-center lg:gap-[5vh]">
          <div className="flex flex-col justify-center items-center">
            <SmDiv className={`txAAD pt-[15vh] opacity-75`}>2019</SmDiv>
            <LgDiv className={"txAAD lg:pt-[2vh] pt-[1vh]"}>Android App Development</LgDiv>
            <LgDiv className={"txAAD"}>National Certificate</LgDiv>
            <div className="flex flex-col justify-center items-center opacity-75">
              <SmDiv className={`txAAD lg:pt-[2vh] pt-[1vh]`}>
                University of the Philippines
              </SmDiv>
              <SmDiv className={`txAAD lg:pt-[2vh] pt-[1vh]`}>
                Diliman, Quezon City
              </SmDiv>
            </div>
          </div>
          <LgRhombusImg
            className={"spAAD lg:pt-[15vh] pt-[2vh]"}
            imgSrc={ImagePaths.hero}
          ></LgRhombusImg>
        </div>
        
      </section>
    </>
  );
};

export default About;
