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
  ScrollToTop
} from "../components/Components";
import Transition from "../components/Transition";

const About = ({ ...props }) => {
  ScrollToTop();
  useEffect(() => {
    sfx.Init(props.fgClr, props.bgClr, props.primaryClr);
    sfx.SetEffect(".chAutoStagger", (elem) => sfx.CharAutoStagger(elem));
    sfx.SetEffect(".chStagger", (elem) => sfx.CharStagger(elem));
    sfx.SetEffect(".woStagger", (elem) => sfx.WordStagger(elem));

    sfx.SetEffect(".spUL", (elem) => sfx.ShapeShow(elem));

    sfx.SetEffect(".spBEDA", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".chBEDA", (elem) => sfx.CharStagger(elem));
    sfx.SetEffect(".icBEDA", (elem) => sfx.ShapeShow(elem));

    sfx.SetEffect(".spRD", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".chRD", (elem) => sfx.CharStagger(elem));
    sfx.SetEffect(".icRD", (elem) => sfx.ShapeShow(elem));

    sfx.SetEffect(".spTESDA", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".chTESDA", (elem) => sfx.CharStagger(elem));

    sfx.SetEffect(".spFEDL", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".chFEDL", (elem) => sfx.CharStagger(elem));
    sfx.SetEffect(".icFEDL", (elem) => sfx.ShapeShow(elem));

    sfx.SetEffect(".spJADS", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".chJADS", (elem) => sfx.CharStagger(elem));
    sfx.SetEffect(".icJADS", (elem) => sfx.ShapeShow(elem));

    sfx.SetEffect(".spRWD", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".chRWD", (elem) => sfx.CharStagger(elem));
    sfx.SetEffect(".icRWD", (elem) => sfx.ShapeShow(elem));

    sfx.SetEffect(".spULD", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".chULD", (elem) => sfx.CharStagger(elem));

    sfx.SetEffect(".spRCPE", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".chRCPE", (elem) => sfx.CharStagger(elem));

    sfx.SetEffect(".spAAD", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".chAAD", (elem) => sfx.CharStagger(elem));
  });

  return (
    <>
      <section>
        <LgDiv className="chAutoStagger pt-[50vh] pb-[20vh]">My Story</LgDiv>
        <LgRhombusImg
          className={"spUL pt-[20vh] flex justify-center items-center"}
          imgSrc={ImagePaths.universityOfLuzon}
        ></LgRhombusImg>

        <div className="xl:w-[50vw] md:w-[60vw] w-[80vw]">
          <SmDiv className={`woStagger pt-[2vh] text-justify`}>
            I'm a graduate from the University of Luzon, Dagupan City with a
            Bachelor's Degree in Information Technology and Latin Honour of Cum
            Laude. Little did I know that playing video games since I was a kid
            will eventually led me into game development that helps me chose
            this course.
          </SmDiv>
          <SmDiv className={`woStagger pt-[2vh] text-justify`}>
            This sparks my passion in developing and designing video games that
            makes me curious of what other things you can create using
            technology. This also creates bonds between me and the people who
            share the same passion, and I hope I can continue creating and
            learning more things with you.
          </SmDiv>
          <SmDiv className={`woStagger pt-[2vh] text-justify`}>
            I don't have any work experience, but I always upskill and
            compensate it with certificates to remain relevant this past months.
          </SmDiv>
        </div>

        {/*Certificates*******************************************************************************/}
        <LgDiv className={"chStagger pt-[20vh]"}>
          MY CERTIFICATES
        </LgDiv>

        <div className="flex lg:flex-row-reverse flex-col lg:justify-center justify-evenly items-center lg:gap-[5vw]">
          <div className="flex flex-col justify-center items-center">
            <SmDiv className={`chBEDA pt-[20vh] opacity-75`}>2024</SmDiv>
            <LgDiv className={"chBEDA lg:pt-[2vh] pt-[1vh]"}>Back End</LgDiv>
            <LgDiv className={"chBEDA"}>Development & APIs</LgDiv>
            <LgDiv className={"chBEDA"}>Developer Certificate</LgDiv>
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
            imgSrc={ImagePaths.hero}
          ></LgRhombusImg>
        </div>

        <div className="flex lg:flex-row flex-col lg:justify-center justify-evenly items-center lg:gap-[5vw]">
          <div className="flex flex-col justify-center items-center">
            <SmDiv className={`chRD pt-[20vh] opacity-75`}>2024</SmDiv>
            <LgDiv className={"chRD lg:pt-[2vh] pt-[1vh]"}>
              Relational Database
            </LgDiv>
            <LgDiv className={"chRD"}>Developer Certificate</LgDiv>
            <IconDiv
              className={`opacity-75`}
              iconSFX={`icBEDA`}
              iconHref={ExternalPaths.freeCodeCamp}
              icon={<FaFreeCodeCamp size="50" />}
              iconName={`freeCodeCamp.org`}
            />
          </div>
          <LgRhombusImg
            className={"spRD lg:pt-[20vh] pt-[2vh]"}
            imgSrc={ImagePaths.hero}
          ></LgRhombusImg>
        </div>

        <div className="flex lg:flex-row-reverse flex-col lg:justify-center justify-evenly items-center lg:gap-[5vw]">
          <div className="flex flex-col justify-center items-center">
            <SmDiv className={`chTESDA pt-[20vh] opacity-75`}>2024</SmDiv>
            <LgDiv className={"chTESDA lg:pt-[2vh] pt-[1vh]"}>
              TESDA Computer
            </LgDiv>
            <LgDiv className={"chTESDA"}>Systems Servicing</LgDiv>
            <LgDiv className={"chTESDA"}>National Certificate II</LgDiv>
            <div className="flex flex-col justify-center items-center opacity-75">
              <SmDiv className={`chTESDA lg:pt-[2vh] pt-[1vh]`}>
                Pangasinan School of
              </SmDiv>
              <SmDiv className={`chTESDA`}>Excellence Incorporated</SmDiv>
              <SmDiv className={`chTESDA lg:pt-[2vh] pt-[1vh]`}>
                Urdaneta City, Pangasinan
              </SmDiv>
            </div>
          </div>
          <LgRhombusImg
            className={"spTESDA lg:pt-[20vh] pt-[2vh]"}
            imgSrc={ImagePaths.hero}
          ></LgRhombusImg>
        </div>

        <div className="flex lg:flex-row flex-col lg:justify-center justify-evenly items-center lg:gap-[5vw]">
          <div className="flex flex-col justify-center items-center">
            <SmDiv className={`chFEDL pt-[20vh] opacity-75`}>2024</SmDiv>
            <LgDiv className={"chFEDL lg:pt-[2vh] pt-[1vh]"}>Front End</LgDiv>
            <LgDiv className={"chFEDL"}>Development Libraries</LgDiv>
            <LgDiv className={"chFEDL"}>Developer Certificate</LgDiv>
            <IconDiv
              className={`opacity-75`}
              iconSFX={`icBEDA`}
              iconHref={ExternalPaths.freeCodeCamp}
              icon={<FaFreeCodeCamp size="50" />}
              iconName={`freeCodeCamp.org`}
            />
          </div>
          <LgRhombusImg
            className={"spFEDL lg:pt-[20vh] pt-[2vh]"}
            imgSrc={ImagePaths.hero}
          ></LgRhombusImg>
        </div>

        <div className="flex lg:flex-row-reverse flex-col lg:justify-center justify-evenly items-center lg:gap-[5vw]">
          <div className="flex flex-col justify-center items-center">
            <SmDiv className={`chJADS pt-[20vh] opacity-75`}>2023</SmDiv>
            <LgDiv className={"chJADS lg:pt-[2vh] pt-[1vh]"}>
              JavaScript Algorithms
            </LgDiv>
            <LgDiv className={"chJADS"}>& Data Structures</LgDiv>
            <LgDiv className={"chJADS"}>Developer Certificate</LgDiv>
            <IconDiv
              className={`opacity-75`}
              iconSFX={`icBEDA`}
              iconHref={ExternalPaths.freeCodeCamp}
              icon={<FaFreeCodeCamp size="50" />}
              iconName={`freeCodeCamp.org`}
            />
          </div>
          <LgRhombusImg
            className={"spJADS lg:pt-[20vh] pt-[2vh]"}
            imgSrc={ImagePaths.hero}
          ></LgRhombusImg>
        </div>

        <div className="flex lg:flex-row flex-col lg:justify-center justify-evenly items-center lg:gap-[5vw]">
          <div className="flex flex-col justify-center items-center">
            <SmDiv className={`chRWD pt-[20vh] opacity-75`}>2023</SmDiv>
            <LgDiv className={"chRWD lg:pt-[2vh] pt-[1vh]"}>
              Responsive Web Design
            </LgDiv>
            <LgDiv className={"chRWD"}>Developer Certificate</LgDiv>
            <IconDiv
              className={`opacity-75`}
              iconSFX={`icBEDA`}
              iconHref={ExternalPaths.freeCodeCamp}
              icon={<FaFreeCodeCamp size="50" />}
              iconName={`freeCodeCamp.org`}
            />
          </div>
          <LgRhombusImg
            className={"spRWD lg:pt-[20vh] pt-[2vh]"}
            imgSrc={ImagePaths.hero}
          ></LgRhombusImg>
        </div>

        <div className="flex lg:flex-row-reverse flex-col lg:justify-center justify-evenly items-center lg:gap-[5vw]">
          <div className="flex flex-col justify-center items-center">
            <SmDiv className={`chULD pt-[20vh] opacity-75`}>2023</SmDiv>
            <LgDiv className={"chULD lg:pt-[2vh] pt-[1vh]"}>
              Bachelor of Science in
            </LgDiv>
            <LgDiv className={"chULD"}>Information Technology</LgDiv>
            <LgDiv className={"chULD"}>Diploma (Cum Laude)</LgDiv>
            <div className="flex flex-col justify-center items-center opacity-75">
              <SmDiv className={`chULD lg:pt-[2vh] pt-[1vh]`}>
                University of Luzon
              </SmDiv>
              <SmDiv className={`chULD lg:pt-[2vh] pt-[1vh]`}>
                Dagupan City, Pangasinan
              </SmDiv>
            </div>
          </div>
          <LgRhombusImg
            className={"spULD lg:pt-[20vh] pt-[2vh]"}
            imgSrc={ImagePaths.hero}
          ></LgRhombusImg>
        </div>

        <div className="flex lg:flex-row flex-col lg:justify-center justify-evenly items-center lg:gap-[5vw]">
          <div className="flex flex-col justify-center items-center">
            <SmDiv className={`chRCPE pt-[20vh] opacity-75`}>2023</SmDiv>
            <LgDiv className={"chRCPE lg:pt-[2vh] pt-[1vh]"}>
              1st Research Colloquium
            </LgDiv>
            <LgDiv className={"chRCPE"}>& Project Exhibits</LgDiv>
            <LgDiv className={"chRCPE"}>Presenter Certificate</LgDiv>
            <div className="flex flex-col justify-center items-center opacity-75">
              <SmDiv className={`chRCPE lg:pt-[2vh] pt-[1vh]`}>
                WCC Aeronautical and
              </SmDiv>
              <SmDiv className={`chRCPE`}>Technological College</SmDiv>
              <SmDiv className={`chRCPE lg:pt-[2vh] pt-[1vh]`}>
                Binalonan City, Pangasinan
              </SmDiv>
            </div>
          </div>
          <LgRhombusImg
            className={"spRCPE lg:pt-[20vh] pt-[2vh]"}
            imgSrc={ImagePaths.hero}
          ></LgRhombusImg>
        </div>

        <div className="flex lg:flex-row-reverse flex-col lg:justify-center justify-evenly items-center lg:gap-[5vw]">
          <div className="flex flex-col justify-center items-center">
            <SmDiv className={`chAAD pt-[20vh] opacity-75`}>2019</SmDiv>
            <LgDiv className={"chAAD lg:pt-[2vh] pt-[1vh]"}>
              Android App Development
            </LgDiv>
            <LgDiv className={"chAAD"}>National Certificate</LgDiv>
            <div className="flex flex-col justify-center items-center opacity-75">
              <SmDiv className={`chAAD lg:pt-[2vh] pt-[1vh]`}>
                University of the Philippines
              </SmDiv>
              <SmDiv className={`chAAD lg:pt-[2vh] pt-[1vh]`}>
                Diliman, Quezon City
              </SmDiv>
            </div>
          </div>
          <LgRhombusImg
            className={"spAAD lg:pt-[20vh] pt-[2vh]"}
            imgSrc={ImagePaths.hero}
          ></LgRhombusImg>
        </div>

        <div className="xl:w-[50vw] md:w-[60vw] w-[80vw]">
          <SmDiv className={`woStagger mt-[10vh] pt-[10vh]`}>
            Apart from my developer skills, I'm also knowledgeable in installing, configuring, and troubleshooting
            computer hardwares and softwares, basic setup of computer networks, basic setup of computer servers, and
            maintiain computer systems & networks.
          </SmDiv>
        </div>
      </section>
    </>
  );
  
};

export default Transition(About);
