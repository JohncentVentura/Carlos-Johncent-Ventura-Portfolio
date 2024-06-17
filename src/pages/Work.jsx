/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { FaGithub, FaPinterest } from "react-icons/fa";
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
  IconLink,
  ScrollToTop,
} from "../components/Components";
import Transition from "../components/Transition";

const Work = ({ ...props }) => {
  ScrollToTop();
  useEffect(() => {
    sfx.Init(props.fgClr, props.bgClr, props.primaryClr);
    sfx.SetEffect(".chAutoStagger", (elem) => sfx.CharAutoStagger(elem));
    sfx.SetEffect(".chStagger", (elem) => sfx.CharStagger(elem));
    sfx.SetEffect(".woStagger", (elem) => sfx.WordStagger(elem));

    sfx.SetEffect(".shJSC1", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".shJSC2", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".shJSC3", (elem) => sfx.ShapeShow(elem));

    sfx.SetEffect(".shRQM1", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".shRQM2", (elem) => sfx.ShapeShow(elem));

    sfx.SetEffect(".shDrumMach1", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".shDrumMach2", (elem) => sfx.ShapeShow(elem));

    sfx.SetEffect(".shCalc1", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".shCalc2", (elem) => sfx.ShapeShow(elem));

    sfx.SetEffect(".shTodoApp1", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".shTodoApp2", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".shTodoApp3", (elem) => sfx.ShapeShow(elem));

    sfx.SetEffect(".shMusicPlayer1", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".shMusicPlayer2", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".shMusicPlayer3", (elem) => sfx.ShapeShow(elem));

    sfx.SetEffect(".shURLShortener1", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".shURLShortener2", (elem) => sfx.ShapeShow(elem));

    sfx.SetEffect(".shFileMetaData1", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".shFileMetaData2", (elem) => sfx.ShapeShow(elem));

    sfx.SetEffect(".shExerTracker1", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".shExerTracker2", (elem) => sfx.ShapeShow(elem));

    sfx.SetEffect(".shPULPRPG1", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".shPULPRPG2", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".shPULPRPG3", (elem) => sfx.ShapeShow(elem));

    sfx.SetEffect(".shPULPRPGDoc1", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".shPULPRPGDoc2", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".shPULPRPGDoc3", (elem) => sfx.ShapeShow(elem));

    sfx.SetEffect(".shGraphics1", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".shGraphics2", (elem) => sfx.ShapeShow(elem));

    sfx.SetEffect(".shPixelArt1", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".shPixelArt2", (elem) => sfx.ShapeShow(elem));

    sfx.SetEffect(".shVBStud1", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".shVBStud2", (elem) => sfx.ShapeShow(elem));

    sfx.SetEffect(".shMERNCRUDApp1", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".shMERNCRUDApp2", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".shMERNCRUDApp3", (elem) => sfx.ShapeShow(elem));
  });

  return (
    <>
      <section>
        <LgDiv className="chAutoStagger pt-[50vh] pb-[20vh]">My Projects</LgDiv>

        <div className="flex xl:flex-row flex-col justify-center items-center gap-[2vw]">
          <LgRhombusImg
            className={`shJSC1 pt-[20vh]`}
            href={ExternalPaths.jourdansSnackCorner}
            imgSrc={ImagePaths.jourdansSnackCorner}
          ></LgRhombusImg>

          <div className="flex flex-col justify-center items-center xl:pt-[20vh] xl:w-[40vw] w-[80vw]">
            <LgDiv className={`chStagger`}>Jourdan's Snack</LgDiv>
            <LgDiv className={`chStagger`}>Corner ™</LgDiv>
            <SmDiv className={`woStagger pt-[2vh] text-justify`}>
              A local food business located in my hometown, created the website
              for free as support for local businesses in my area. The store
              sells a variety of goods and have a delivery service since the
              business operates and process their products at the owner's house.
            </SmDiv>
          </div>
        </div>
        <SkillGrid>
          <SkillDiv
            skillName={`Github`}
            skillSFX={`shJSC2`}
            skillHref={ExternalPaths.gitJourdansSnackCorner}
            skillIcon={<FaGithub size="50" />}
          />
          <SkillDiv
            skillName={`React`}
            skillSFX={`shJSC2`}
            skillHref={ExternalPaths.react}
            skillImgSrc={ImagePaths.react}
          />
          <SkillDiv
            skillName={`Sass`}
            skillSFX={`shJSC2`}
            skillHref={ExternalPaths.sass}
            skillImgSrc={ImagePaths.sass}
          />
        </SkillGrid>
        <SkillGrid>
          <SkillDiv
            skillName={`Bootstrap`}
            skillSFX={`shJSC3`}
            skillHref={ExternalPaths.bootstrap}
            skillImgSrc={ImagePaths.bootstrap}
          />
        </SkillGrid>

        <div className="flex xl:flex-row-reverse flex-col justify-center items-center gap-[2vw]">
          <LgRhombusImg
            className={`shRQM1 pt-[20vh]`}
            href={ExternalPaths.randomQuoteMachine}
            imgSrc={ImagePaths.randomQuoteMachine}
          ></LgRhombusImg>

          <div className="flex flex-col justify-center items-center xl:pt-[20vh] xl:w-[40vw] w-[80vw]">
            <LgDiv className={`chStagger`}>Random Quote</LgDiv>
            <LgDiv className={`chStagger`}>Machine</LgDiv>
            <SmDiv className={`woStagger pt-[2vh] text-justify`}>
              An interactive web application that dynamically fetches and
              displays a variety of quotes with each click. Built using React,
              this app retrieve quotes from famous figures, books, or movies.
              Users can enjoy a fresh dose of wisdom, humor, or motivation
              instantly, making it a fun and engaging tool for websites or
              personal use. Customizable and easy to integrate, it enhances user
              experience by delivering random quotes at the click of a button.
            </SmDiv>
          </div>
        </div>
        <SkillGrid>
          <SkillDiv
            skillName={`Github`}
            skillSFX={`shRQM2`}
            skillHref={ExternalPaths.gitRandomQuoteMachine}
            skillIcon={<FaGithub size="50" />}
          />
          <SkillDiv
            skillName={`React`}
            skillSFX={`shRQM2`}
            skillHref={ExternalPaths.react}
            skillImgSrc={ImagePaths.react}
          />
          <SkillDiv
            skillName={`CSS`}
            skillSFX={`shRQM2`}
            skillHref={ExternalPaths.css}
            skillImgSrc={ImagePaths.css}
          />
        </SkillGrid>

        <div className="flex xl:flex-row flex-col justify-center items-center gap-[2vw]">
          <LgRhombusImg
            className={`shDrumMach1 pt-[20vh]`}
            href={ExternalPaths.drumMachine}
            imgSrc={ImagePaths.drumMachine}
          ></LgRhombusImg>

          <div className="flex flex-col justify-center items-center xl:pt-[20vh] xl:w-[40vw] w-[80vw]">
            <LgDiv className={`chStagger`}>Drum Machine</LgDiv>
            <SmDiv className={`woStagger pt-[2vh] text-justify`}>
              The Drum Machine is a digital music instrument simulator that lets
              users create beats and rhythms with ease. Developed using React,
              it features an intuitive interface with clickable pads
              representing different drum sounds like kick, snare, hi-hat, and
              more.
            </SmDiv>
          </div>
        </div>
        <SkillGrid>
          <SkillDiv
            skillName={`Github`}
            skillSFX={`shDrumMach2`}
            skillHref={ExternalPaths.gitDrumMachine}
            skillIcon={<FaGithub size="50" />}
          />
          <SkillDiv
            skillName={`React`}
            skillSFX={`shDrumMach2`}
            skillHref={ExternalPaths.react}
            skillImgSrc={ImagePaths.react}
          />
          <SkillDiv
            skillName={`CSS`}
            skillSFX={`shDrumMach2`}
            skillHref={ExternalPaths.css}
            skillImgSrc={ImagePaths.css}
          />
        </SkillGrid>

        <div className="flex xl:flex-row-reverse flex-col justify-center items-center gap-[2vw]">
          <LgRhombusImg
            className={`shTodoApp1 pt-[20vh]`}
            href={ExternalPaths.todoApp}
            imgSrc={ImagePaths.todoApp}
          ></LgRhombusImg>

          <div className="flex flex-col justify-center items-center xl:pt-[20vh] xl:w-[40vw] w-[80vw]">
            <LgDiv className={`chStagger`}>Todo App</LgDiv>
            <SmDiv className={`woStagger pt-[2vh] text-justify`}>
              A Simple TODO application that uses local storage of the web
              browser. This allows web apps to save data during one session,
              then retrieve it in a later page session.
            </SmDiv>
          </div>
        </div>
        <SkillGrid>
          <SkillDiv
            skillName={`Github`}
            skillSFX={`shTodoApp2`}
            skillHref={ExternalPaths.gitTodoApp}
            skillIcon={<FaGithub size="50" />}
          />
          <SkillDiv
            skillName={`HTML`}
            skillSFX={`shTodoApp2`}
            skillHref={ExternalPaths.html}
            skillImgSrc={ImagePaths.html}
          />
          <SkillDiv
            skillName={`CSS`}
            skillSFX={`shTodoApp2`}
            skillHref={ExternalPaths.css}
            skillImgSrc={ImagePaths.css}
          />
        </SkillGrid>
        <SkillGrid>
          <SkillDiv
            skillName={`JavaScript`}
            skillSFX={`shTodoApp3`}
            skillHref={ExternalPaths.javaScript}
            skillImgSrc={ImagePaths.javaScript}
          />
        </SkillGrid>

        <div className="flex xl:flex-row flex-col justify-center items-center gap-[2vw]">
          <LgRhombusImg
            className={`shMusicPlayer1 pt-[20vh]`}
            href={ExternalPaths.musicPlayer}
            imgSrc={ImagePaths.musicPlayer}
          ></LgRhombusImg>

          <div className="flex flex-col justify-center items-center xl:pt-[20vh] xl:w-[40vw] w-[80vw]">
            <LgDiv className={`chStagger`}>Music Player</LgDiv>
            <SmDiv className={`woStagger pt-[2vh] text-justify`}>
              This project covers fundamental concepts such as handling audio
              playback, managing a playlist, implementing play, pause, next,
              previous, and shuffle functionalities. Also dynamically update
              user interface based on the current song.
            </SmDiv>
          </div>
        </div>
        <SkillGrid>
          <SkillDiv
            skillName={`Github`}
            skillSFX={`shMusicPlayer2`}
            skillHref={ExternalPaths.gitMusicPlayer}
            skillIcon={<FaGithub size="50" />}
          />
          <SkillDiv
            skillName={`HTML`}
            skillSFX={`shMusicPlayer2`}
            skillHref={ExternalPaths.html}
            skillImgSrc={ImagePaths.html}
          />
          <SkillDiv
            skillName={`CSS`}
            skillSFX={`shMusicPlayer2`}
            skillHref={ExternalPaths.css}
            skillImgSrc={ImagePaths.css}
          />
        </SkillGrid>
        <SkillGrid>
          <SkillDiv
            skillName={`JavaScript`}
            skillSFX={`shMusicPlayer3`}
            skillHref={ExternalPaths.javaScript}
            skillImgSrc={ImagePaths.javaScript}
          />
        </SkillGrid>

        <div className="flex xl:flex-row-reverse flex-col justify-center items-center gap-[2vw]">
          <LgRhombusImg
            className={`shURLShortener1 pt-[20vh]`}
            href={ExternalPaths.urlShortener}
            imgSrc={ImagePaths.urlShortener}
          ></LgRhombusImg>

          <div className="flex flex-col justify-center items-center xl:pt-[20vh] xl:w-[40vw] w-[80vw]">
            <LgDiv className={`chStagger`}>URL Shortener</LgDiv>
            <LgDiv className={`chStagger`}>Microservice</LgDiv>
            <SmDiv className={`woStagger pt-[2vh] text-justify`}>
              Built using Express.js, the URL-Shortener Microservice is a
              compact, efficient application that converts long URLs into
              shortened, easy-to-share links. By generating unique, short
              aliases for lengthy URLs, this microservice helps in improving the
              readability and usability of links, especially for social media,
              marketing campaigns, and text messages. It provides a simple API
              endpoint where users can submit long URLs and receive shortened
              versions in response.
            </SmDiv>
          </div>
        </div>
        <SkillGrid>
          <SkillDiv
            skillName={`Github`}
            skillSFX={`shURLShortener2`}
            skillHref={ExternalPaths.gitUrlShortener}
            skillIcon={<FaGithub size="50" />}
          />
          <SkillDiv
            skillName={`Express`}
            skillSFX={`shURLShortener2`}
            skillHref={ExternalPaths.expressJS}
            skillImgSrc={ImagePaths.expressJS}
          />
          <SkillDiv
            skillName={`MongoDB`}
            skillSFX={`shURLShortener2`}
            skillHref={ExternalPaths.mongoDB}
            skillImgSrc={ImagePaths.mongoDB}
          />
        </SkillGrid>

        <div className="flex xl:flex-row flex-col justify-center items-center gap-[2vw]">
          <LgRhombusImg
            className={`shExerTracker1 pt-[20vh]`}
            href={ExternalPaths.exerciseTracker}
            imgSrc={ImagePaths.exerciseTracker}
          ></LgRhombusImg>

          <div className="flex flex-col justify-center items-center xl:pt-[20vh] xl:w-[40vw] w-[80vw]">
            <LgDiv className={`chStagger`}>Exercise</LgDiv>
            <LgDiv className={`chStagger`}>Tracker</LgDiv>
            <SmDiv className={`woStagger pt-[2vh] text-justify`}>
              Built using Express.js, The Exercise Tracker is a versatile
              application designed to help users monitor and manage their
              physical activities. It allows users to log various types of
              exercises, such as running, cycling, swimming, and weightlifting,
              along with relevant details like duration, distance, and calories
              burned.
            </SmDiv>
          </div>
        </div>
        <SkillGrid>
          <SkillDiv
            skillName={`Github`}
            skillSFX={`shExerTracker2`}
            skillHref={ExternalPaths.gitExerciseTracker}
            skillIcon={<FaGithub size="50" />}
          />
          <SkillDiv
            skillName={`Express`}
            skillSFX={`shExerTracker2`}
            skillHref={ExternalPaths.expressJS}
            skillImgSrc={ImagePaths.expressJS}
          />
          <SkillDiv
            skillName={`MongoDB`}
            skillSFX={`shExerTracker2`}
            skillHref={ExternalPaths.mongoDB}
            skillImgSrc={ImagePaths.mongoDB}
          />
        </SkillGrid>

        <div className="flex xl:flex-row-reverse flex-col justify-center items-center gap-[2vw]">
          <LgRhombusImg
            className={`shPULPRPG1 pt-[20vh]`}
            href={ExternalPaths.pulpRpg}
            imgSrc={ImagePaths.pulpRpg}
          ></LgRhombusImg>

          <div className="flex flex-col justify-center items-center xl:pt-[20vh] xl:w-[40vw] w-[80vw]">
            <LgDiv className={`chStagger`}>PULP RPG</LgDiv>
            <SmDiv className={`woStagger pt-[2vh] text-justify`}>
              Project of University of Luzon Pozorrubio Role Playing Game or
              “PULP RPG” is a free and educational game for Windows 10 that is
              exclusive for both campuses. The project takes the design of a
              merged platformer game and a role-playing game incorporated with
              learning materials and referencing real life environments where
              the campus is located.
            </SmDiv>
          </div>
        </div>
        <SkillGrid>
          <SkillDiv
            skillName={`Github`}
            skillSFX={`shPULPRPG2`}
            skillHref={ExternalPaths.gitPulpRpg}
            skillIcon={<FaGithub size="50" />}
          />
          <SkillDiv
            skillName={`Unity`}
            skillSFX={`shPULPRPG2`}
            skillHref={ExternalPaths.unity}
            skillImgSrc={ImagePaths.unity}
          />
          <SkillDiv
            skillName={`C#`}
            skillSFX={`shPULPRPG2`}
            skillHref={ExternalPaths.cSharp}
            skillImgSrc={ImagePaths.cSharp}
          />
        </SkillGrid>
        <SkillGrid>
          <SkillDiv
            skillName={`Ink`}
            skillSFX={`shPULPRPG3`}
            skillHref={ExternalPaths.ink}
            skillImgSrc={ImagePaths.ink}
          />
        </SkillGrid>

        <div className="flex xl:flex-row flex-col justify-center items-center gap-[2vw]">
          <LgRhombusImg
            className={`shPULPRPGDoc1 pt-[20vh]`}
            href={ExternalPaths.pulpRpgDoc}
            imgSrc={ImagePaths.pulpRpgDoc}
          ></LgRhombusImg>

          <div className="flex flex-col justify-center items-center xl:pt-[20vh] xl:w-[40vw] w-[80vw]">
            <LgDiv className={`chStagger`}>PULP RPG</LgDiv>
            <LgDiv className={`chStagger`}>Documentation</LgDiv>
            <SmDiv className={`woStagger pt-[2vh] text-justify`}>
              Project of University of Luzon Pozorrubio Role Playing Game or
              “PULP RPG” is a free and educational game for Windows 10 that is
              exclusive for both campuses that aids the declining enrollment
              number of students at the Pozorrubio Satellite Campus.
            </SmDiv>
          </div>
        </div>
        <SkillGrid>
          <SkillDiv
            skillName={`Github`}
            skillSFX={`shPULPRPGDoc2`}
            skillHref={ExternalPaths.gitPulpRpgDoc}
            skillIcon={<FaGithub size="50" />}
          />
          <SkillDiv
            skillName={`HTML`}
            skillSFX={`shPULPRPGDoc2`}
            skillHref={ExternalPaths.html}
            skillImgSrc={ImagePaths.html}
          />
          <SkillDiv
            skillName={`CSS`}
            skillSFX={`shPULPRPGDoc2`}
            skillHref={ExternalPaths.css}
            skillImgSrc={ImagePaths.css}
          />
        </SkillGrid>
        <SkillGrid>
          <SkillDiv
            skillName={`JavaScript`}
            skillSFX={`shPULPRPGDoc3`}
            skillHref={ExternalPaths.javaScript}
            skillImgSrc={ImagePaths.javaScript}
          />
        </SkillGrid>

        <div className="flex xl:flex-row-reverse flex-col justify-center items-center gap-[2vw]">
          <LgRhombusImg
            className={`shGraphics1 pt-[20vh]`}
            href={ExternalPaths.graphicsDesign}
            imgSrc={ImagePaths.graphicsDesign}
          ></LgRhombusImg>

          <div className="flex flex-col justify-center items-center xl:pt-[20vh] xl:w-[40vw] w-[80vw]">
            <LgDiv className={`chStagger`}>Graphics Design</LgDiv>
            <SmDiv className={`woStagger pt-[2vh] text-justify`}>
              Welcome to my graphic design, where creativity meets
              functionality. Each piece reflects my commitment to visual
              excellence, innovative thinking, and attention to detail. Explore
              my work to see how I transform ideas into compelling visual
              narratives that captivate and engage audiences.
            </SmDiv>
          </div>
        </div>
        <SkillGrid>
          <SkillDiv
            skillName={`Pinterest`}
            skillSFX={`shGraphics2`}
            skillHref={ExternalPaths.graphicsDesign}
            skillIcon={<FaPinterest size="50" />}
          />
          <SkillDiv
            skillName={`Photoshop`}
            skillSFX={`shGraphics2`}
            skillHref={ExternalPaths.adobePhotoshop}
            skillImgSrc={ImagePaths.adobePhotoshop}
          />
        </SkillGrid>

        <div className="flex xl:flex-row flex-col justify-center items-center gap-[2vw]">
          <LgRhombusImg
            className={`shPixelArt1 pt-[20vh]`}
            href={ExternalPaths.pixelArt}
            imgSrc={ImagePaths.pixelArt}
          ></LgRhombusImg>

          <div className="flex flex-col justify-center items-center xl:pt-[20vh] xl:w-[40vw] w-[80vw]">
            <LgDiv className={`chStagger`}>Pixel Artworks</LgDiv>
            <SmDiv className={`woStagger pt-[2vh] text-justify`}>
              Visit my pixel art work where each tiny pixel tells a part of a
              larger story. This gallery features a variety of pixel art
              projects, from intricate character designs to vibrant game
              landscapes. My work combines classic pixel aesthetics with modern
              creativity, resulting in unique and captivating pieces.
            </SmDiv>
          </div>
        </div>
        <SkillGrid>
          <SkillDiv
            skillName={`Pinterest`}
            skillSFX={`shPixelArt2`}
            skillHref={ExternalPaths.pixelArt}
            skillIcon={<FaPinterest size="50" />}
          />
          <SkillDiv
            skillName={`Aseprite`}
            skillSFX={`shPixelArt2`}
            skillHref={ExternalPaths.aseprite}
            skillImgSrc={ImagePaths.aseprite}
          />
        </SkillGrid>

        <div className="flex xl:flex-row-reverse flex-col justify-center items-center gap-[2vw]">
          <LgRhombusImg
            className={`shVBStud1 pt-[20vh]`}
            href={null}
            imgSrc={``}
          ></LgRhombusImg>

          <div className="flex flex-col justify-center items-center xl:pt-[20vh] xl:w-[40vw] w-[80vw]">
            <LgDiv className={`chStagger`}>Student Registration</LgDiv>
            <LgDiv className={`chStagger`}>System</LgDiv>
            <SmDiv className={`woStagger pt-[2vh] text-justify`}>
              (In Development...)
            </SmDiv>
          </div>
        </div>
        <SkillGrid>
          <SkillDiv
            skillName={`Github`}
            skillSFX={`shVBStud2`}
            skillHref={ExternalPaths.gitVbStudentSystem}
            skillIcon={<FaGithub size="50" />}
          />
          <SkillDiv
            skillName={`Visual Basic`}
            skillSFX={`shVBStud2`}
            skillHref={ExternalPaths.visualBasic}
            skillImgSrc={ImagePaths.visualBasic}
          />
        </SkillGrid>

        <div className="flex xl:flex-row flex-col justify-center items-center gap-[2vw]">
          <LgRhombusImg
            className={`shMERNCRUDApp1 pt-[20vh]`}
            href={null}
            imgSrc={``}
          ></LgRhombusImg>

          <div className="flex flex-col justify-center items-center xl:pt-[20vh] xl:w-[40vw] w-[80vw]">
            <LgDiv className={`chStagger`}>MERN CRUD APP</LgDiv>
            <SmDiv className={`woStagger pt-[2vh] text-justify`}>
              (In Development...)
            </SmDiv>
          </div>
        </div>
        <SkillGrid>
          <SkillDiv
            skillName={`Github`}
            skillSFX={`shMERNCRUDApp2`}
            skillHref={ExternalPaths.gitMernCrudApp}
            skillIcon={<FaGithub size="50" />}
          />
          <SkillDiv
            skillName={`React`}
            skillSFX={`shMERNCRUDApp2`}
            skillHref={ExternalPaths.react}
            skillImgSrc={ImagePaths.react}
          />
          <SkillDiv
            skillName={`Tailwind`}
            skillSFX={`shMERNCRUDApp2`}
            skillHref={ExternalPaths.tailwindCSS}
            skillImgSrc={ImagePaths.tailwindCSS}
          />
        </SkillGrid>
        <SkillGrid>
          <SkillDiv
            skillName={`Express`}
            skillSFX={`shMERNCRUDApp3`}
            skillHref={ExternalPaths.expressJS}
            skillImgSrc={ImagePaths.expressJS}
          />
          <SkillDiv
            skillName={`MongoDB`}
            skillSFX={`shMERNCRUDApp3`}
            skillHref={ExternalPaths.mongoDB}
            skillImgSrc={ImagePaths.mongoDB}
          />
        </SkillGrid>
      </section>
    </>
  );
};

export default Transition(Work);
