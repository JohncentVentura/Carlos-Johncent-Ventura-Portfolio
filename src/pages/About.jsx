/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { FaFreeCodeCamp } from "react-icons/fa";

import { ExternalPaths, ImagePaths } from "../components/Paths";
import sfx from "../components/ScrollEffects";
import {
  SmDiv,
  LgDiv,
  SkillDiv,
  SkillGrid,
  SmRhombusImg,
  SmRhombusIcon,
  LgRhombusImg,
  IconDiv,
  ScrollToTop,
} from "../components/Components";
import Transition from "../components/Transition";

const About = ({ ...props }) => {
  ScrollToTop();
  useEffect(() => {
    sfx.Init(props.fgClr, props.bgClr, props.primaryClr);
    sfx.SetEffect(".chAutoStagger", (elem) => sfx.CharAutoStagger(elem));
    sfx.SetEffect(".chStagger", (elem) => sfx.CharStagger(elem));
    sfx.SetEffect(".chStaggerFromTop", (elem) => sfx.CharStaggerFromTop(elem));
    sfx.SetEffect(".woStagger", (elem) => sfx.WordStagger(elem));
    sfx.SetEffect(".woStaggerOpacity", (elem) => sfx.WordStaggerOpacity(elem));
    sfx.SetEffect(".spUL", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".spBEDA", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".icBEDA", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".spRD", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".icRD", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".spTESDA", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".spFEDL", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".icFEDL", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".spJADS", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".icJADS", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".spRWD", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".icRWD", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".spULD", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".spRCPE", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".spAAD", (elem) => sfx.ShapeShow(elem));
  });

  return (
    <>
      <section>
        <LgDiv className="chAutoStagger pt-[50vh] pb-[20vh]">My Story</LgDiv>
        <LgRhombusImg
          className={"spUL pt-[20vh] flex justify-center items-center"}
          href={ExternalPaths.universityOfLuzon}
          imgSrc={ImagePaths.universityOfLuzon}
        ></LgRhombusImg>

        <div className="xl:w-[50vw] md:w-[60vw] w-[80vw]">
          <SmDiv className={`woStaggerOpacity pt-[2vh] text-justify`}>
            I'm a graduate from the University of Luzon, Dagupan City with a
            Bachelor's Degree in Information Technology and Latin Honour of Cum
            Laude. Little did I know that playing video games since I was a kid
            will eventually led me into game development that helps me chose
            this course.
          </SmDiv>
          <SmDiv className={`woStaggerOpacity pt-[2vh] text-justify`}>
            This sparks my passion in developing and designing video games that
            makes me curious of what other things you can create using
            technology. This also creates bonds between me and the people who
            share the same passion, and I hope I can continue creating and
            learning more things with you.
          </SmDiv>
        </div>

        <LgDiv className={"chStagger pt-[20vh]"}>MY EXPERIENCE</LgDiv>
        <SmDiv className={`woStagger pt-[5vh] text-justify xl:w-[50vw] md:w-[60vw] w-[80vw]`}>
          I don't have any work experience, so I always upskill, create projects, and attain
          certificates to be always updated and compensate with my lack of experience.
        </SmDiv>

        {/*Certificates*******************************************************************************/}
        <LgDiv className={"chStagger pt-[20vh]"}>MY CERTIFICATES</LgDiv>

        <div className="flex lg:flex-row-reverse flex-col lg:justify-center justify-evenly items-center lg:gap-[5vw]">
          <div className="flex flex-col justify-center items-center">
            <SmDiv className={`chStaggerFromTop pt-[20vh] opacity-75`}>2024</SmDiv>
            <LgDiv className={"chStagger lg:pt-[2vh] pt-[1vh]"}>Back End</LgDiv>
            <LgDiv className={"chStagger"}>Development & APIs</LgDiv>
            <LgDiv className={"chStagger"}>Developer Certificate</LgDiv>
            <IconDiv
              className={`opacity-75`}
              iconSFX={`icBEDA`}
              iconHref={ExternalPaths.freeCodeCamp}
              icon={<FaFreeCodeCamp size="50" />}
              iconName={`freeCodeCamp.org`}
            />
          </div>
          <LgRhombusImg
            className={"spBEDA lg:pt-[20vh] pt-[2vh]"}
            href={ExternalPaths.backEndDevAPI}
            imgSrc={ImagePaths.backEndDevAPI}
          ></LgRhombusImg>
        </div>

        <div className="flex lg:flex-row flex-col lg:justify-center justify-evenly items-center lg:gap-[5vw]">
          <div className="flex flex-col justify-center items-center">
            <SmDiv className={`chStaggerFromTop pt-[20vh] opacity-75`}>2024</SmDiv>
            <LgDiv className={"chStagger lg:pt-[2vh] pt-[1vh]"}>
              Relational Database
            </LgDiv>
            <LgDiv className={"chStagger"}>Developer Certificate</LgDiv>
            <IconDiv
              className={`opacity-75`}
              iconSFX={`icRD`}
              iconHref={ExternalPaths.freeCodeCamp}
              icon={<FaFreeCodeCamp size="50" />}
              iconName={`freeCodeCamp.org`}
            />
          </div>
          <LgRhombusImg
            className={"spRD lg:pt-[20vh] pt-[2vh]"}
            href={ExternalPaths.relationalDB}
            imgSrc={ImagePaths.relationalDB}
          ></LgRhombusImg>
        </div>

        <div className="flex lg:flex-row-reverse flex-col lg:justify-center justify-evenly items-center lg:gap-[5vw]">
          <div className="flex flex-col justify-center items-center">
            <SmDiv className={`chStaggerFromTop pt-[20vh] opacity-75`}>2024</SmDiv>
            <LgDiv className={"chStagger lg:pt-[2vh] pt-[1vh]"}>
              TESDA Computer
            </LgDiv>
            <LgDiv className={"chStagger"}>Systems Servicing</LgDiv>
            <LgDiv className={"chStagger"}>National Certificate II</LgDiv>
            <div className="flex flex-col justify-center items-center opacity-75">
              <SmDiv className={`chStagger lg:pt-[2vh] pt-[1vh]`}>
                Pangasinan School of
              </SmDiv>
              <SmDiv className={`chStagger`}>Excellence Incorporated</SmDiv>
              <SmDiv className={`chStagger lg:pt-[2vh] pt-[1vh]`}>
                Urdaneta City, Pangasinan
              </SmDiv>
            </div>
          </div>
          <LgRhombusImg
            className={"spTESDA lg:pt-[20vh] pt-[2vh]"}
            href={ExternalPaths.tesdaCSS}
            imgSrc={ImagePaths.tesdaCSS}
          ></LgRhombusImg>
        </div>

        <div className="flex lg:flex-row flex-col lg:justify-center justify-evenly items-center lg:gap-[5vw]">
          <div className="flex flex-col justify-center items-center">
            <SmDiv className={`chStaggerFromTop pt-[20vh] opacity-75`}>2024</SmDiv>
            <LgDiv className={"chStagger lg:pt-[2vh] pt-[1vh]"}>Front End</LgDiv>
            <LgDiv className={"chStagger"}>Development Libraries</LgDiv>
            <LgDiv className={"chStagger"}>Developer Certificate</LgDiv>
            <IconDiv
              className={`opacity-75`}
              iconSFX={`icFEDL`}
              iconHref={ExternalPaths.freeCodeCamp}
              icon={<FaFreeCodeCamp size="50" />}
              iconName={`freeCodeCamp.org`}
            />
          </div>
          <LgRhombusImg
            className={"spFEDL lg:pt-[20vh] pt-[2vh]"}
            href={ExternalPaths.frontEndDevLib}
            imgSrc={ImagePaths.frontEndDevLib}
          ></LgRhombusImg>
        </div>

        <div className="flex lg:flex-row-reverse flex-col lg:justify-center justify-evenly items-center lg:gap-[5vw]">
          <div className="flex flex-col justify-center items-center">
            <SmDiv className={`chStaggerFromTop pt-[20vh] opacity-75`}>2023</SmDiv>
            <LgDiv className={"chStagger lg:pt-[2vh] pt-[1vh]"}>
              JavaScript Algorithms
            </LgDiv>
            <LgDiv className={"chStagger"}>& Data Structures</LgDiv>
            <LgDiv className={"chStagger"}>Developer Certificate</LgDiv>
            <IconDiv
              className={`opacity-75`}
              iconSFX={`icJADS`}
              iconHref={ExternalPaths.freeCodeCamp}
              icon={<FaFreeCodeCamp size="50" />}
              iconName={`freeCodeCamp.org`}
            />
          </div>
          <LgRhombusImg
            className={"spJADS lg:pt-[20vh] pt-[2vh]"}
            href={ExternalPaths.jsAlgoDS}
            imgSrc={ImagePaths.jsAlgoDS}
          ></LgRhombusImg>
        </div>

        <div className="flex lg:flex-row flex-col lg:justify-center justify-evenly items-center lg:gap-[5vw]">
          <div className="flex flex-col justify-center items-center">
            <SmDiv className={`chStaggerFromTop pt-[20vh] opacity-75`}>2023</SmDiv>
            <LgDiv className={"chStagger lg:pt-[2vh] pt-[1vh]"}>
              Responsive Web Design
            </LgDiv>
            <LgDiv className={"chStagger"}>Developer Certificate</LgDiv>
            <IconDiv
              className={`opacity-75`}
              iconSFX={`icRWD`}
              iconHref={ExternalPaths.freeCodeCamp}
              icon={<FaFreeCodeCamp size="50" />}
              iconName={`freeCodeCamp.org`}
            />
          </div>
          <LgRhombusImg
            className={"spRWD lg:pt-[20vh] pt-[2vh]"}
            href={ExternalPaths.resWebDes}
            imgSrc={ImagePaths.resWebDes}
          ></LgRhombusImg>
        </div>

        <div className="flex lg:flex-row-reverse flex-col lg:justify-center justify-evenly items-center lg:gap-[5vw]">
          <div className="flex flex-col justify-center items-center">
            <SmDiv className={`chStaggerFromTop pt-[20vh] opacity-75`}>2023</SmDiv>
            <LgDiv className={"chStagger lg:pt-[2vh] pt-[1vh]"}>
              Bachelor of Science in
            </LgDiv>
            <LgDiv className={"chStagger"}>Information Technology</LgDiv>
            <LgDiv className={"chStagger"}>Diploma (Cum Laude)</LgDiv>
            <div className="flex flex-col justify-center items-center opacity-75">
              <SmDiv className={`chStagger lg:pt-[2vh] pt-[1vh]`}>
                University of Luzon
              </SmDiv>
              <SmDiv className={`chStagger lg:pt-[2vh] pt-[1vh]`}>
                Dagupan City, Pangasinan
              </SmDiv>
            </div>
          </div>
          <LgRhombusImg
            className={"spULD lg:pt-[20vh] pt-[2vh]"}
            href={ExternalPaths.bsitDiploma}
            imgSrc={ImagePaths.bsitDiploma}
          ></LgRhombusImg>
        </div>

        <div className="flex lg:flex-row flex-col lg:justify-center justify-evenly items-center lg:gap-[5vw]">
          <div className="flex flex-col justify-center items-center">
            <SmDiv className={`chStaggerFromTop pt-[20vh] opacity-75`}>2023</SmDiv>
            <LgDiv className={"chStagger lg:pt-[2vh] pt-[1vh]"}>
              1st Research Colloquium
            </LgDiv>
            <LgDiv className={"chStagger"}>& Project Exhibits</LgDiv>
            <LgDiv className={"chStagger"}>Presenter Certificate</LgDiv>
            <div className="flex flex-col justify-center items-center opacity-75">
              <SmDiv className={`chStagger lg:pt-[2vh] pt-[1vh]`}>
                WCC Aeronautical and
              </SmDiv>
              <SmDiv className={`chStagger`}>Technological College</SmDiv>
              <SmDiv className={`chStagger lg:pt-[2vh] pt-[1vh]`}>
                Binalonan City, Pangasinan
              </SmDiv>
            </div>
          </div>
          <LgRhombusImg
            className={"spRCPE lg:pt-[20vh] pt-[2vh]"}
            href={null}
            imgSrc={ImagePaths.firstRCPE}
          ></LgRhombusImg>
        </div>

        <div className="flex lg:flex-row-reverse flex-col lg:justify-center justify-evenly items-center lg:gap-[5vw]">
          <div className="flex flex-col justify-center items-center">
            <SmDiv className={`chStaggerFromTop pt-[20vh] opacity-75`}>2019</SmDiv>
            <LgDiv className={"chStagger lg:pt-[2vh] pt-[1vh]"}>
              Android App Development
            </LgDiv>
            <LgDiv className={"chStagger"}>National Certificate</LgDiv>
            <div className="flex flex-col justify-center items-center opacity-75">
              <SmDiv className={`chStagger lg:pt-[2vh] pt-[1vh]`}>
                University of the Philippines
              </SmDiv>
              <SmDiv className={`chStagger lg:pt-[2vh] pt-[1vh]`}>
                Diliman, Quezon City
              </SmDiv>
            </div>
          </div>
          <LgRhombusImg
            className={"spAAD lg:pt-[20vh] pt-[2vh]"}
            href={null}
            imgSrc={ImagePaths.androidAppDev}
          ></LgRhombusImg>
        </div>
      </section>
    </>
  );
};

export default Transition(About);
