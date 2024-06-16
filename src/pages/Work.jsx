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
              Description
            </SmDiv>
          </div>
        </div>
        <SkillGrid>
          <SkillDiv
            skillName={`Github`}
            skillSFX={`shJSC2`}
            skillHref={ExternalPaths.gitJourdansSnackCorner}
            skillIcon={<FaGithub size="50"/>}
          />
          <SkillDiv
            skillName={`React`}
            skillSFX={`shJSC2`}
            skillHref={ExternalPaths.resWebDes}
            skillImgSrc={ImagePaths.react}
          />
          <SkillDiv
            skillName={`Sass`}
            skillSFX={`shJSC2`}
            skillHref={ExternalPaths.resWebDes}
            skillImgSrc={ImagePaths.sass}
          />
        </SkillGrid>
        <SkillGrid>
          <SkillDiv
            skillName={`Bootstrap`}
            skillSFX={`shJSC3`}
            skillHref={ExternalPaths.resWebDes}
            skillImgSrc={ImagePaths.bootstrap}
          />
        </SkillGrid>

        <div className="flex xl:flex-row-reverse flex-col justify-center items-center gap-[2vw]">
          <LgRhombusImg
            className={`shRQM1 pt-[20vh]`}
            href={ExternalPaths.resWebDes}
            imgSrc={ImagePaths.randomQuoteMachine}
          ></LgRhombusImg>

          <div className="flex flex-col justify-center items-center xl:pt-[20vh] xl:w-[40vw] w-[80vw]">
            <LgDiv className={`chStagger`}>Random Quote</LgDiv>
            <LgDiv className={`chStagger`}>Machine</LgDiv>
            <SmDiv className={`woStagger pt-[2vh] text-justify`}>
              Description
            </SmDiv>
          </div>
        </div>
        <SkillGrid>
          <SkillDiv
            skillName={`Github`}
            skillSFX={`shRQM2`}
            skillHref={ExternalPaths.resWebDes}
            skillIcon={<FaGithub size="50"/>}
          />
          <SkillDiv
            skillName={`React`}
            skillSFX={`shRQM2`}
            skillHref={ExternalPaths.resWebDes}
            skillImgSrc={ImagePaths.react}
          />
          <SkillDiv
            skillName={`CSS`}
            skillSFX={`shRQM2`}
            skillHref={ExternalPaths.resWebDes}
            skillImgSrc={ImagePaths.css}
          />
        </SkillGrid>

        <div className="flex xl:flex-row flex-col justify-center items-center gap-[2vw]">
          <LgRhombusImg
            className={`shDrumMach1 pt-[20vh]`}
            href={ExternalPaths.resWebDes}
            imgSrc={ImagePaths.drumMachine}
          ></LgRhombusImg>

          <div className="flex flex-col justify-center items-center xl:pt-[20vh] xl:w-[40vw] w-[80vw]">
            <LgDiv className={`chStagger`}>Drum Machine</LgDiv>
            <SmDiv className={`woStagger pt-[2vh] text-justify`}>
              Description
            </SmDiv>
          </div>
        </div>
        <SkillGrid>
          <SkillDiv
            skillName={`Github`}
            skillSFX={`shDrumMach2`}
            skillHref={ExternalPaths.resWebDes}
            skillIcon={<FaGithub size="50"/>}
          />
          <SkillDiv
            skillName={`React`}
            skillSFX={`shDrumMach2`}
            skillHref={ExternalPaths.resWebDes}
            skillImgSrc={ImagePaths.react}
          />
          <SkillDiv
            skillName={`CSS`}
            skillSFX={`shDrumMach2`}
            skillHref={ExternalPaths.resWebDes}
            skillImgSrc={ImagePaths.css}
          />
        </SkillGrid>

        <div className="flex xl:flex-row flex-col justify-center items-center gap-[2vw]">
          <LgRhombusImg
            className={`shTodoApp1 pt-[20vh]`}
            href={ExternalPaths.resWebDes}
            imgSrc={ImagePaths.todoApp}
          ></LgRhombusImg>

          <div className="flex flex-col justify-center items-center xl:pt-[20vh] xl:w-[40vw] w-[80vw]">
            <LgDiv className={`chStagger`}>Todo App</LgDiv>
            <SmDiv className={`woStagger pt-[2vh] text-justify`}>
              Description
            </SmDiv>
          </div>
        </div>
        <SkillGrid>
          <SkillDiv
            skillName={`Github`}
            skillSFX={`shTodoApp2`}
            skillHref={ExternalPaths.resWebDes}
            skillIcon={<FaGithub size="50"/>}
          />
          <SkillDiv
            skillName={`HTML`}
            skillSFX={`shTodoApp2`}
            skillHref={ExternalPaths.resWebDes}
            skillImgSrc={ImagePaths.html}
          />
          <SkillDiv
            skillName={`CSS`}
            skillSFX={`shTodoApp2`}
            skillHref={ExternalPaths.resWebDes}
            skillImgSrc={ImagePaths.css}
          />
        </SkillGrid>
        <SkillGrid>
          <SkillDiv
            skillName={`JavaScript`}
            skillSFX={`shTodoApp3`}
            skillHref={ExternalPaths.resWebDes}
            skillImgSrc={ImagePaths.javaScript}
          />
        </SkillGrid>

        <div className="flex xl:flex-row-reverse flex-col justify-center items-center gap-[2vw]">
          <LgRhombusImg
            className={`shMusicPlayer1 pt-[20vh]`}
            href={ExternalPaths.resWebDes}
            imgSrc={ImagePaths.musicPlayer}
          ></LgRhombusImg>

          <div className="flex flex-col justify-center items-center xl:pt-[20vh] xl:w-[40vw] w-[80vw]">
            <LgDiv className={`chStagger`}>Music Player</LgDiv>
            <SmDiv className={`woStagger pt-[2vh] text-justify`}>
              Description
            </SmDiv>
          </div>
        </div>
        <SkillGrid>
          <SkillDiv
            skillName={`Github`}
            skillSFX={`shMusicPlayer2`}
            skillHref={ExternalPaths.resWebDes}
            skillIcon={<FaGithub size="50"/>}
          />
          <SkillDiv
            skillName={`HTML`}
            skillSFX={`shMusicPlayer2`}
            skillHref={ExternalPaths.resWebDes}
            skillImgSrc={ImagePaths.html}
          />
          <SkillDiv
            skillName={`CSS`}
            skillSFX={`shMusicPlayer2`}
            skillHref={ExternalPaths.resWebDes}
            skillImgSrc={ImagePaths.css}
          />
        </SkillGrid>
        <SkillGrid>
          <SkillDiv
            skillName={`JavaScript`}
            skillSFX={`shMusicPlayer3`}
            skillHref={ExternalPaths.resWebDes}
            skillImgSrc={ImagePaths.javaScript}
          />
        </SkillGrid>

        <div className="flex xl:flex-row flex-col justify-center items-center gap-[2vw]">
          <LgRhombusImg
            className={`shURLShortener1 pt-[20vh]`}
            href={ExternalPaths.resWebDes}
            imgSrc={ImagePaths.urlShortener}
          ></LgRhombusImg>

          <div className="flex flex-col justify-center items-center xl:pt-[20vh] xl:w-[40vw] w-[80vw]">
            <LgDiv className={`chStagger`}>URL Shortener</LgDiv>
            <LgDiv className={`chStagger`}>Microservice</LgDiv>
            <SmDiv className={`woStagger pt-[2vh] text-justify`}>
              Description
            </SmDiv>
          </div>
        </div>
        <SkillGrid>
          <SkillDiv
            skillName={`Github`}
            skillSFX={`shURLShortener2`}
            skillHref={ExternalPaths.resWebDes}
            skillIcon={<FaGithub size="50"/>}
          />
          <SkillDiv
            skillName={`Express`}
            skillSFX={`shURLShortener2`}
            skillHref={ExternalPaths.resWebDes}
            skillImgSrc={ImagePaths.expressJS}
          />
          <SkillDiv
            skillName={`MongoDB`}
            skillSFX={`shURLShortener2`}
            skillHref={ExternalPaths.resWebDes}
            skillImgSrc={ImagePaths.mongoDB}
          />
        </SkillGrid>

        <div className="flex xl:flex-row flex-col justify-center items-center gap-[2vw]">
          <LgRhombusImg
            className={`shExerTracker1 pt-[20vh]`}
            href={ExternalPaths.resWebDes}
            imgSrc={ImagePaths.exerciseTracker}
          ></LgRhombusImg>

          <div className="flex flex-col justify-center items-center xl:pt-[20vh] xl:w-[40vw] w-[80vw]">
            <LgDiv className={`chStagger`}>Exercise</LgDiv>
            <LgDiv className={`chStagger`}>Tracker</LgDiv>
            <SmDiv className={`woStagger pt-[2vh] text-justify`}>
              Description
            </SmDiv>
          </div>
        </div>
        <SkillGrid>
          <SkillDiv
            skillName={`Github`}
            skillSFX={`shExerTracker2`}
            skillHref={ExternalPaths.resWebDes}
            skillIcon={<FaGithub size="50"/>}
          />
          <SkillDiv
            skillName={`Express`}
            skillSFX={`shExerTracker2`}
            skillHref={ExternalPaths.resWebDes}
            skillImgSrc={ImagePaths.expressJS}
          />
          <SkillDiv
            skillName={`MongoDB`}
            skillSFX={`shExerTracker2`}
            skillHref={ExternalPaths.resWebDes}
            skillImgSrc={ImagePaths.mongoDB}
          />
        </SkillGrid>

        <div className="flex xl:flex-row-reverse flex-col justify-center items-center gap-[2vw]">
          <LgRhombusImg
            className={`shPULPRPG1 pt-[20vh]`}
            href={ExternalPaths.resWebDes}
            imgSrc={ImagePaths.pulpRpg}
          ></LgRhombusImg>

          <div className="flex flex-col justify-center items-center xl:pt-[20vh] xl:w-[40vw] w-[80vw]">
            <LgDiv className={`chStagger`}>PULP RPG</LgDiv>
            <SmDiv className={`woStagger pt-[2vh] text-justify`}>
              Description
            </SmDiv>
          </div>
        </div>
        <SkillGrid>
          <SkillDiv
            skillName={`Github`}
            skillSFX={`shPULPRPG2`}
            skillHref={ExternalPaths.resWebDes}
            skillIcon={<FaGithub size="50"/>}
          />
          <SkillDiv
            skillName={`Unity`}
            skillSFX={`shPULPRPG2`}
            skillHref={ExternalPaths.resWebDes}
            skillImgSrc={ImagePaths.unity}
          />
          <SkillDiv
            skillName={`C#`}
            skillSFX={`shPULPRPG2`}
            skillHref={ExternalPaths.resWebDes}
            skillImgSrc={ImagePaths.cSharp}
          />
        </SkillGrid>
        <SkillGrid>
          <SkillDiv
            skillName={`Inky`}
            skillSFX={`shPULPRPG3`}
            skillHref={ExternalPaths.resWebDes}
            skillImgSrc={ImagePaths.inky}
          />
        </SkillGrid>

        <div className="flex xl:flex-row flex-col justify-center items-center gap-[2vw]">
          <LgRhombusImg
            className={`shPULPRPGDoc1 pt-[20vh]`}
            href={ExternalPaths.resWebDes}
            imgSrc={ImagePaths.pulpRpgDoc}
          ></LgRhombusImg>

          <div className="flex flex-col justify-center items-center xl:pt-[20vh] xl:w-[40vw] w-[80vw]">
            <LgDiv className={`chStagger`}>PULP RPG</LgDiv>
            <LgDiv className={`chStagger`}>Documentation</LgDiv>
            <SmDiv className={`woStagger pt-[2vh] text-justify`}>
              Description
            </SmDiv>
          </div>
        </div>
        <SkillGrid>
          <SkillDiv
            skillName={`Github`}
            skillSFX={`shPULPRPGDoc2`}
            skillHref={ExternalPaths.resWebDes}
            skillIcon={<FaGithub size="50"/>}
          />
          <SkillDiv
            skillName={`HTML`}
            skillSFX={`shPULPRPGDoc2`}
            skillHref={ExternalPaths.resWebDes}
            skillImgSrc={ImagePaths.html}
          />
          <SkillDiv
            skillName={`CSS`}
            skillSFX={`shPULPRPGDoc2`}
            skillHref={ExternalPaths.resWebDes}
            skillImgSrc={ImagePaths.css}
          />
        </SkillGrid>
        <SkillGrid>
          <SkillDiv
            skillName={`JavaScript`}
            skillSFX={`shPULPRPGDoc3`}
            skillHref={ExternalPaths.resWebDes}
            skillImgSrc={ImagePaths.javaScript}
          />
        </SkillGrid>

        <div className="flex xl:flex-row-reverse flex-col justify-center items-center gap-[2vw]">
          <LgRhombusImg
            className={`shGraphics1 pt-[20vh]`}
            href={ExternalPaths.resWebDes}
            imgSrc={ImagePaths.graphicsDesign}
          ></LgRhombusImg>

          <div className="flex flex-col justify-center items-center xl:pt-[20vh] xl:w-[40vw] w-[80vw]">
            <LgDiv className={`chStagger`}>Graphics Design</LgDiv>
            <SmDiv className={`woStagger pt-[2vh] text-justify`}>
              Description
            </SmDiv>
          </div>
        </div>
        <SkillGrid>
          <SkillDiv
            skillName={`Pinterest`}
            skillSFX={`shGraphics2`}
            skillHref={ExternalPaths.resWebDes}
            skillIcon={<FaPinterest size="50"/>}
          />
          <SkillDiv
            skillName={`Photoshop`}
            skillSFX={`shGraphics2`}
            skillHref={ExternalPaths.resWebDes}
            skillImgSrc={ImagePaths.adobePhotoshop}
          />
        </SkillGrid>

        <div className="flex xl:flex-row flex-col justify-center items-center gap-[2vw]">
          <LgRhombusImg
            className={`shPixelArt1 pt-[20vh]`}
            href={ExternalPaths.resWebDes}
            imgSrc={ImagePaths.pixelArt}
          ></LgRhombusImg>

          <div className="flex flex-col justify-center items-center xl:pt-[20vh] xl:w-[40vw] w-[80vw]">
            <LgDiv className={`chStagger`}>Pixel Artworks</LgDiv>
            <SmDiv className={`woStagger pt-[2vh] text-justify`}>
              Description
            </SmDiv>
          </div>
        </div>
        <SkillGrid>
          <SkillDiv
            skillName={`Pinterest`}
            skillSFX={`shPixelArt2`}
            skillHref={ExternalPaths.resWebDes}
            skillIcon={<FaPinterest size="50"/>}
          />
          <SkillDiv
            skillName={`Aseprite`}
            skillSFX={`shPixelArt2`}
            skillHref={ExternalPaths.resWebDes}
            skillImgSrc={ImagePaths.aseprite}
          />
        </SkillGrid>

        <div className="flex xl:flex-row-reverse flex-col justify-center items-center gap-[2vw]">
          <LgRhombusImg
            className={`shVBStud1 pt-[20vh]`}
            href={ExternalPaths.resWebDes}
            imgSrc={``}
          ></LgRhombusImg>

          <div className="flex flex-col justify-center items-center xl:pt-[20vh] xl:w-[40vw] w-[80vw]">
            <LgDiv className={`chStagger`}>Student Registration</LgDiv>
            <LgDiv className={`chStagger`}>System</LgDiv>
            <SmDiv className={`woStagger pt-[2vh] text-justify`}>
              Description
            </SmDiv>
          </div>
        </div>
        <SkillGrid>
          <SkillDiv
            skillName={`Github`}
            skillSFX={`shVBStud2`}
            skillHref={ExternalPaths.resWebDes}
            skillIcon={<FaGithub size="50"/>}
          />
          <SkillDiv
            skillName={`Visual Basic`}
            skillSFX={`shVBStud2`}
            skillHref={ExternalPaths.resWebDes}
            skillImgSrc={ImagePaths.visualBasic}
          />
        </SkillGrid>

        <div className="flex xl:flex-row flex-col justify-center items-center gap-[2vw]">
          <LgRhombusImg
            className={`shMERNCRUDApp1 pt-[20vh]`}
            href={ExternalPaths.resWebDes}
            imgSrc={``}
          ></LgRhombusImg>

          <div className="flex flex-col justify-center items-center xl:pt-[20vh] xl:w-[40vw] w-[80vw]">
            <LgDiv className={`chStagger`}>MERN CRUD APP</LgDiv>
            <LgDiv className={`chStagger`}>(In Development...)</LgDiv>
            <SmDiv className={`woStagger pt-[2vh] text-justify`}>
              Description
            </SmDiv>
          </div>
        </div>
        <SkillGrid>
          <SkillDiv
            skillName={`Github`}
            skillSFX={`shMERNCRUDApp2`}
            skillHref={ExternalPaths.resWebDes}
            skillIcon={<FaGithub size="50"/>}
          />
          <SkillDiv
            skillName={`React`}
            skillSFX={`shMERNCRUDApp2`}
            skillHref={ExternalPaths.resWebDes}
            skillImgSrc={ImagePaths.react}
          />
          <SkillDiv
            skillName={`Tailwind`}
            skillSFX={`shMERNCRUDApp2`}
            skillHref={ExternalPaths.resWebDes}
            skillImgSrc={ImagePaths.tailwindCSS}
          />
        </SkillGrid>
        <SkillGrid>
          <SkillDiv
            skillName={`Express`}
            skillSFX={`shMERNCRUDApp3`}
            skillHref={ExternalPaths.resWebDes}
            skillImgSrc={ImagePaths.expressJS}
          />
          <SkillDiv
            skillName={`MongoDB`}
            skillSFX={`shMERNCRUDApp3`}
            skillHref={ExternalPaths.resWebDes}
            skillImgSrc={ImagePaths.mongoDB}
          />
        </SkillGrid>

      </section>
    </>
  );
};

export default Transition(Work);
