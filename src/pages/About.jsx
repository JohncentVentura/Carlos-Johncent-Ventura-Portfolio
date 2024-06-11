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
    sfx.SetEffect(".txAbout1", (elem) => sfx.TextStaggerOpacity(elem));
    sfx.SetEffect(".txAbout2", (elem) => sfx.TextStaggerOpacity(elem));
    sfx.SetEffect(".txAbout3", (elem) => sfx.TextStaggerOpacity(elem));
    sfx.SetEffect(".txAbout4", (elem) => sfx.TextStaggerOpacity(elem));

    sfx.SetEffect(".spBEDA", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".txBEDA1", (elem) => sfx.TextStagger(elem));
    sfx.SetEffect(".txBEDA2", (elem) => sfx.TextStagger(elem));
    sfx.SetEffect(".txBEDA3", (elem) => sfx.TextStagger(elem));
    sfx.SetEffect(".icBEDA", (elem) => sfx.ShapeShow(elem));

    sfx.SetEffect(".spRD", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".txRD1", (elem) => sfx.TextStagger(elem));
    sfx.SetEffect(".txRD2", (elem) => sfx.TextStagger(elem));
    sfx.SetEffect(".txRD3", (elem) => sfx.TextStagger(elem));

    sfx.SetEffect(".spTESDA", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".txTESDA1", (elem) => sfx.TextStagger(elem));
    sfx.SetEffect(".txTESDA2", (elem) => sfx.TextStagger(elem));
    sfx.SetEffect(".txTESDA3", (elem) => sfx.TextStagger(elem));

    sfx.SetEffect(".spFEDL", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".txFEDL1", (elem) => sfx.TextStagger(elem));
    sfx.SetEffect(".txFEDL2", (elem) => sfx.TextStagger(elem));
    sfx.SetEffect(".txFEDL3", (elem) => sfx.TextStagger(elem));

    sfx.SetEffect(".spJADS", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".txJADS1", (elem) => sfx.TextStagger(elem));
    sfx.SetEffect(".txJADS2", (elem) => sfx.TextStagger(elem));
    sfx.SetEffect(".txJADS3", (elem) => sfx.TextStagger(elem));

    sfx.SetEffect(".spRWD", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".txRWD1", (elem) => sfx.TextStagger(elem));
    sfx.SetEffect(".txRWD2", (elem) => sfx.TextStagger(elem));
    sfx.SetEffect(".txRWD3", (elem) => sfx.TextStagger(elem));

    sfx.SetEffect(".spULD", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".txULD1", (elem) => sfx.TextStagger(elem));
    sfx.SetEffect(".txULD2", (elem) => sfx.TextStagger(elem));
    sfx.SetEffect(".txULD3", (elem) => sfx.TextStagger(elem));

    sfx.SetEffect(".spRCPE", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".txRCPE1", (elem) => sfx.TextStagger(elem));
    sfx.SetEffect(".txRCPE2", (elem) => sfx.TextStagger(elem));
    sfx.SetEffect(".txRCPE3", (elem) => sfx.TextStagger(elem));

    sfx.SetEffect(".spAAD", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".txAAD1", (elem) => sfx.TextStagger(elem));
    sfx.SetEffect(".txAAD2", (elem) => sfx.TextStagger(elem));
    sfx.SetEffect(".txAAD3", (elem) => sfx.TextStagger(elem));
  });

  return (
    <>
      <section id={props.id} className="h-fit">
        <LgRhombusImg
          className={"spUL flex justify-center items-center"}
          imgSrc={ImagePaths.universityOfLuzon}
        ></LgRhombusImg>

        <div className="flex flex-col justify-center items-center">
          <SmDiv
            className={`txAbout1 pt-[2.5vh] xl:w-[40vw] md:w-[50vw] w-[80vw]`}
          >
            I'm a graduate from the University of Luzon, Dagupan City with a
            Bachelor's Degree in Information Technology and Latin Honour of Cum
            Laude. Little did I know that playing video games since I was a kid
            will eventually led me into game development that helps me chose
            this course.
          </SmDiv>
          <SmDiv
            className={`txAbout2 pt-[2.5vh] xl:w-[40vw] md:w-[50vw] w-[80vw]`}
          >
            This sparks my passion in developing and designing video games that
            makes me curious of what other things you can create using
            technology. This also creates bonds between me and the people who
            share the same passion, and I hope I can continue creating and
            learning more things with you.
          </SmDiv>
          <SmDiv
            className={`txAbout3 pt-[2.5vh] xl:w-[40vw] md:w-[50vw] w-[80vw]`}
          >
            I don't have any work experience, so I compensate it with
            certificates to be remain relevant this past months.
          </SmDiv>
          <LgDiv className={"txAbout4 lg:pt-[40vh] pt-[20vh]"}>
            MY CERTIFICATES
          </LgDiv>
        </div>

        {/*Certificates*******************************************************************************/}

        <div className="flex lg:flex-row flex-col lg:justify-center justify-evenly items-center lg:gap-[5vh]">
          <LgRhombusImg
            className={"spBEDA pt-[15vh]"}
            imgSrc={ImagePaths.hero}
          ></LgRhombusImg>

          <div className="flex flex-col justify-center items-center">
            <SmDiv className={`txBEDA1 lg:pt-[15vh] pt-[2vh]`}>2024</SmDiv>
            <LgDiv className={"txBEDA2 pt-[2vh]"}>Back End</LgDiv>
            <LgDiv className={"txBEDA2"}>Development & API</LgDiv>
            <LgDiv className={"txBEDA2"}>Developer Certificate</LgDiv>
            <div className="flex justify-center items-center">
              <IconLink
                href={ExternalPaths.freeCodeCamp}
                className="icBEDA pt-[2vh] pe-[2vh]"
                icon={<FaFreeCodeCamp size="50" />}
              ></IconLink>
              <SmDiv className={`txBEDA3 pt-[2vh]`}>freeCodeCamp.org</SmDiv>
            </div>
          </div>
        </div>

        <div className="flex lg:flex-row-reverse flex-col lg:justify-center justify-evenly items-center lg:gap-[5vh]">
          <LgRhombusImg
            className={"spRD pt-[15vh]"}
            imgSrc={ImagePaths.hero}
          ></LgRhombusImg>

          <div className="flex flex-col justify-center items-center">
            <SmDiv className={`txRD1 lg:pt-[15vh] pt-[2vh]`}>2024</SmDiv>
            <LgDiv className={"txRD2 pt-[2vh]"}>Relational Database</LgDiv>
            <LgDiv className={"txRD2"}>Developer Certificate</LgDiv>
            <SmDiv className={`txRD3 pt-[2vh]`}>freeCodeCamp.org</SmDiv>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col lg:justify-center justify-evenly items-center lg:gap-[5vh]">
          <LgRhombusImg
            className={"spTESDA pt-[15vh]"}
            imgSrc={ImagePaths.hero}
          ></LgRhombusImg>

          <div className="flex flex-col justify-center items-center">
            <SmDiv className={`txTESDA1 lg:pt-[15vh] pt-[2vh]`}>2024</SmDiv>
            <LgDiv className={"txTESDA2 pt-[2vh]"}>TESDA Computer</LgDiv>
            <LgDiv className={"txTESDA2"}>Systems Servicing</LgDiv>
            <LgDiv className={"txTESDA2"}>National Certificate II</LgDiv>
            <SmDiv className={`txTESDA3 pt-[2vh]`}>Pangasinan School of</SmDiv>
            <SmDiv className={`txTESDA3`}>Excellence Incorporated</SmDiv>
            <SmDiv className={`txTESDA3 pt-[2vh]`}>
              Urdaneta City, Pangasinan
            </SmDiv>
          </div>
        </div>

        <div className="flex lg:flex-row-reverse flex-col lg:justify-center justify-evenly items-center lg:gap-[5vh]">
          <LgRhombusImg
            className={"spFEDL pt-[15vh]"}
            imgSrc={ImagePaths.hero}
          ></LgRhombusImg>

          <div className="flex flex-col justify-center items-center">
            <SmDiv className={`txFEDL1 lg:pt-[15vh] pt-[2vh]`}>2024</SmDiv>
            <LgDiv className={"txFEDL2 pt-[2vh]"}>Front End</LgDiv>
            <LgDiv className={"txFEDL2"}>Development Libraries</LgDiv>
            <LgDiv className={"txFEDL2"}>Developer Certificate </LgDiv>
            <SmDiv className={`txFEDL3 pt-[2vh]`}>freeCodeCamp.org</SmDiv>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col lg:justify-center justify-evenly items-center lg:gap-[5vh]">
          <LgRhombusImg
            className={"spJADS pt-[15vh]"}
            imgSrc={ImagePaths.hero}
          ></LgRhombusImg>

          <div className="flex flex-col justify-center items-center">
            <SmDiv className={`txJADS1 lg:pt-[15vh] pt-[2vh]`}>2023</SmDiv>
            <LgDiv className={"txJADS2 pt-[2vh]"}>JavaScript Algorithms</LgDiv>
            <LgDiv className={"txJADS2"}>& Data Structures</LgDiv>
            <LgDiv className={"txJADS2"}>Developer Certificate</LgDiv>
            <SmDiv className={`txJADS3 pt-[2vh]`}>freeCodeCamp.org</SmDiv>
          </div>
        </div>

        <div className="flex lg:flex-row-reverse flex-col lg:justify-center justify-evenly items-center lg:gap-[5vh]">
          <LgRhombusImg
            className={"spRWD pt-[15vh]"}
            imgSrc={ImagePaths.hero}
          ></LgRhombusImg>

          <div className="flex flex-col justify-center items-center">
            <SmDiv className={`txRWD1 lg:pt-[15vh] pt-[2vh]`}>2023</SmDiv>
            <LgDiv className={"txRWD2 pt-[2vh]"}>Responsive Web Design</LgDiv>
            <LgDiv className={"txRWD2"}>Developer Certificate</LgDiv>
            <SmDiv className={`txRWD3 pt-[2vh]`}>freeCodeCamp.org</SmDiv>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col lg:justify-center justify-evenly items-center lg:gap-[5vh]">
          <LgRhombusImg
            className={"spULD pt-[15vh]"}
            imgSrc={ImagePaths.hero}
          ></LgRhombusImg>

          <div className="flex flex-col justify-center items-center">
            <SmDiv className={`txULD1 lg:pt-[15vh] pt-[2vh]`}>2023</SmDiv>
            <LgDiv className={"txULD2 pt-[2vh]"}>Bachelor of Science in</LgDiv>
            <LgDiv className={"txULD2"}>Information Technology</LgDiv>
            <LgDiv className={"txULD2"}>Diploma (Cum Laude)</LgDiv>
            <SmDiv className={`txULD3 pt-[2vh]`}>University of Luzon</SmDiv>
            <SmDiv className={`txULD3`}>Dagupan City, Pangasinan</SmDiv>
          </div>
        </div>

        <div className="flex lg:flex-row-reverse flex-col lg:justify-center justify-evenly items-center lg:gap-[5vh]">
          <LgRhombusImg
            className={"spRCPE pt-[15vh]"}
            imgSrc={ImagePaths.hero}
          ></LgRhombusImg>

          <div className="flex flex-col justify-center items-center">
            <SmDiv className={`txRCPE1 lg:pt-[15vh] pt-[2vh]`}>2023</SmDiv>
            <LgDiv className={"txRCPE2 pt-[2vh]"}>
              1st Research Colloquium
            </LgDiv>
            <LgDiv className={"txRCPE2"}>& Project Exhibits</LgDiv>
            <LgDiv className={"txRCPE2"}>Presenter Certificate</LgDiv>
            <SmDiv className={`txRCPE3 pt-[2vh]`}>WCC Aeronautical &</SmDiv>
            <SmDiv className={`txRCPE3`}>Technological College</SmDiv>
            <SmDiv className={`txRCPE3 pt-[2vh]`}>
              Binalonan City, Pangasinan
            </SmDiv>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col lg:justify-center justify-evenly items-center lg:gap-[5vh]">
          <LgRhombusImg
            className={"spAAD pt-[15vh]"}
            imgSrc={ImagePaths.hero}
          ></LgRhombusImg>

          <div className="flex flex-col justify-center items-center">
            <SmDiv className={`txAAD1 lg:pt-[15vh] pt-[2vh]`}>2019</SmDiv>
            <LgDiv className={"txAAD2 pt-[2vh]"}>Android App Development</LgDiv>
            <LgDiv className={"txAAD2"}>National Certificate</LgDiv>
            <SmDiv className={`txAAD3 pt-[2vh]`}>
              University of the Philippines
            </SmDiv>
            <SmDiv className={`txAAD3 pt-[2vh]`}>Diliman, Quezon City</SmDiv>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
