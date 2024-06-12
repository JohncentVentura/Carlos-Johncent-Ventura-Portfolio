/* eslint-disable no-unused-vars */
import React from "react";
import { ExternalPaths, ImagePaths } from "../components/Paths";
import sfx from "../components/ScrollEffects";
import {
  SmDiv,
  LgDiv,
  SmRhombusImg,
  SmRhombusIcon,
  LgRhombusImg,
} from "../components/Components";

const Skill = ({ ...props }) => {
  sfx.Init(props.fgClr, props.bgClr, props.primaryClr);
  sfx.SetEffect(".txStagger", (elem) => sfx.TextStagger(elem));
  sfx.SetEffect(".shFrontEndSkill1", (elem) => sfx.ShapeShow(elem));
  sfx.SetEffect(".shFrontEndSkill2", (elem) => sfx.ShapeShow(elem));
  sfx.SetEffect(".shFrontEndSkill3", (elem) => sfx.ShapeShow(elem));
  sfx.SetEffect(".shBackEndSkill1", (elem) => sfx.ShapeShow(elem));
  sfx.SetEffect(".shGameDevSkill1", (elem) => sfx.ShapeShow(elem));
  sfx.SetEffect(".shGDandPASkill1", (elem) => sfx.ShapeShow(elem));
  sfx.SetEffect(".shOtherSkill1", (elem) => sfx.ShapeShow(elem));
  sfx.SetEffect(".shOtherSkill2", (elem) => sfx.ShapeShow(elem));
  sfx.SetEffect(".shOtherSkill3", (elem) => sfx.ShapeShow(elem));
  sfx.SetEffect(".txOther", (elem) => sfx.TextStagger(elem));

  return (
    <>
      <section
        id={props.id}
        className="w-screen h-fit flex flex-col justify-center items-center"
      >
        <LgDiv className={"txStagger"}>FRONT-END</LgDiv>
        <LgDiv className={"txStagger"}>DEVELOPMENT</LgDiv>
        <SkillGrid>
          <SkillDiv>
            <SmDiv className={"txStagger lg:pt-[10vh] pt-[6vh]"}>HTML</SmDiv>
            <SmRhombusImg
              className={"shFrontEndSkill1 pt-[4vh]"}
              href={ExternalPaths.cert1}
              imgSrc={ImagePaths.html}
            ></SmRhombusImg>
          </SkillDiv>
          <SkillDiv>
            <SmDiv className={"txStagger lg:pt-[10vh] pt-[6vh]"}>CSS</SmDiv>
            <SmRhombusImg
              className={"shFrontEndSkill1 pt-[4vh]"}
              href={ExternalPaths.cert1}
              imgSrc={ImagePaths.html}
            ></SmRhombusImg>
          </SkillDiv>
          <SkillDiv>
            <SmDiv className={"txStagger lg:pt-[10vh] pt-[6vh]"}>
              JavaScript
            </SmDiv>
            <SmRhombusImg
              className={"shFrontEndSkill1 pt-[4vh]"}
              href={ExternalPaths.cert1}
              imgSrc={ImagePaths.html}
            ></SmRhombusImg>
          </SkillDiv>
        </SkillGrid>
        <SkillGrid>
          <SkillDiv>
            <SmDiv className={"txStagger lg:pt-[10vh] pt-[6vh]"}>Sass</SmDiv>
            <SmRhombusImg
              className={"shFrontEndSkill2 pt-[4vh]"}
              href={ExternalPaths.cert1}
              imgSrc={ImagePaths.html}
            ></SmRhombusImg>
          </SkillDiv>
          <SkillDiv>
            <SmDiv className={"txStagger lg:pt-[10vh] pt-[6vh]"}>
              Bootstrap
            </SmDiv>
            <SmRhombusImg
              className={"shFrontEndSkill2 pt-[4vh]"}
              href={ExternalPaths.cert1}
              imgSrc={ImagePaths.html}
            ></SmRhombusImg>
          </SkillDiv>
          <SkillDiv>
            <SmDiv className={"txStagger lg:pt-[10vh] pt-[6vh]"}>
              Tailwind
            </SmDiv>
            <SmRhombusImg
              className={"shFrontEndSkill2 pt-[4vh]"}
              href={ExternalPaths.cert1}
              imgSrc={ImagePaths.html}
            ></SmRhombusImg>
          </SkillDiv>
        </SkillGrid>
        <SkillGrid>
          <SkillDiv>
            <SmDiv className={"txStagger lg:pt-[10vh] pt-[6vh]"}>React</SmDiv>
            <SmRhombusImg
              className={"shFrontEndSkill3 pt-[4vh]"}
              href={ExternalPaths.cert1}
              imgSrc={ImagePaths.html}
            ></SmRhombusImg>
          </SkillDiv>
        </SkillGrid>

        <LgDiv className={"txStagger mt-[10vh] pt-[10vh]"}>BACK-END</LgDiv>
        <LgDiv className={"txStagger"}>DEVELOPMENT</LgDiv>
        <SkillGrid>
          <SkillDiv>
            <SmDiv className={"txStagger lg:pt-[10vh] pt-[6vh]"}>Node.js</SmDiv>
            <SmRhombusImg
              className={"shBackEndSkill1 pt-[4vh]"}
              href={ExternalPaths.cert1}
              imgSrc={ImagePaths.html}
            ></SmRhombusImg>
          </SkillDiv>
          <SkillDiv>
            <SmDiv className={"txStagger lg:pt-[10vh] pt-[6vh]"}>Express</SmDiv>
            <SmRhombusImg
              className={"shBackEndSkill1 pt-[4vh]"}
              href={ExternalPaths.cert1}
              imgSrc={ImagePaths.html}
            ></SmRhombusImg>
          </SkillDiv>
          <SkillDiv>
            <SmDiv className={"txStagger lg:pt-[10vh] pt-[6vh]"}>MongoDB</SmDiv>
            <SmRhombusImg
              className={"shBackEndSkill1 pt-[4vh]"}
              href={ExternalPaths.cert1}
              imgSrc={ImagePaths.html}
            ></SmRhombusImg>
          </SkillDiv>
        </SkillGrid>

        <LgDiv className={"txStagger mt-[10vh] pt-[10vh]"}>GAME</LgDiv>
        <LgDiv className={"txStagger"}>DEVELOPMENT</LgDiv>
        <SkillGrid>
          <SkillDiv>
            <SmDiv className={"txStagger lg:pt-[10vh] pt-[6vh]"}>Unity</SmDiv>
            <SmRhombusImg
              className={"shGameDevSkill1 pt-[4vh]"}
              href={ExternalPaths.cert1}
              imgSrc={ImagePaths.html}
            ></SmRhombusImg>
          </SkillDiv>
          <SkillDiv>
            <SmDiv className={"txStagger lg:pt-[10vh] pt-[6vh]"}>C#</SmDiv>
            <SmRhombusImg
              className={"shGameDevSkill1 pt-[4vh]"}
              href={ExternalPaths.cert1}
              imgSrc={ImagePaths.html}
            ></SmRhombusImg>
          </SkillDiv>
          <SkillDiv>
            <SmDiv className={"txStagger lg:pt-[10vh] pt-[6vh]"}>Inky</SmDiv>
            <SmRhombusImg
              className={"shGameDevSkill1 pt-[4vh]"}
              href={ExternalPaths.cert1}
              imgSrc={ImagePaths.html}
            ></SmRhombusImg>
          </SkillDiv>
        </SkillGrid>

        <LgDiv className={"txStagger mt-[10vh] pt-[10vh]"}>
          GRAPHICS DESIGN
        </LgDiv>
        <LgDiv className={"txStagger"}>& PIXEL ART</LgDiv>
        <SkillGrid>
          <SkillDiv>
            <SmDiv className={"txStagger lg:pt-[10vh] pt-[6vh]"}>
              Photoshop
            </SmDiv>
            <SmRhombusImg
              className={"shGDandPASkill1 pt-[4vh]"}
              href={ExternalPaths.cert1}
              imgSrc={ImagePaths.html}
            ></SmRhombusImg>
          </SkillDiv>
          <SkillDiv>
            <SmDiv className={"txStagger lg:pt-[10vh] pt-[6vh]"}>
              Aseprite
            </SmDiv>
            <SmRhombusImg
              className={"shGDandPASkill1 pt-[4vh]"}
              href={ExternalPaths.cert1}
              imgSrc={ImagePaths.html}
            ></SmRhombusImg>
          </SkillDiv>
          <SkillDiv>
            <SmDiv className={"txStagger lg:pt-[10vh] pt-[6vh]"}>
              Powerdirector
            </SmDiv>
            <SmRhombusImg
              className={"shGDandPASkill1 pt-[4vh]"}
              href={ExternalPaths.cert1}
              imgSrc={ImagePaths.html}
            ></SmRhombusImg>
          </SkillDiv>
        </SkillGrid>

        <LgDiv className={"txStagger mt-[10vh] pt-[10vh]"}>OTHERS</LgDiv>
        <SkillGrid>
          <SkillDiv>
            <SmDiv className={"txStagger lg:pt-[10vh] pt-[6vh]"}>Git</SmDiv>
            <SmRhombusImg
              className={"shOtherSkill1 pt-[4vh]"}
              href={ExternalPaths.cert1}
              imgSrc={ImagePaths.html}
            ></SmRhombusImg>
          </SkillDiv>
          <SkillDiv>
            <SmDiv className={"txStagger lg:pt-[10vh] pt-[6vh]"}>NPM</SmDiv>
            <SmRhombusImg
              className={"shOtherSkill1 pt-[4vh]"}
              href={ExternalPaths.cert1}
              imgSrc={ImagePaths.html}
            ></SmRhombusImg>
          </SkillDiv>
          <SkillDiv>
            <SmDiv className={"txStagger lg:pt-[10vh] pt-[6vh]"}>Java</SmDiv>
            <SmRhombusImg
              className={"shOtherSkill1 pt-[4vh]"}
              href={ExternalPaths.cert1}
              imgSrc={ImagePaths.html}
            ></SmRhombusImg>
          </SkillDiv>
        </SkillGrid>
        <SkillGrid>
          <SkillDiv>
            <SmDiv className={"txStagger lg:pt-[10vh] pt-[6vh]"}>
              VB
            </SmDiv>
            <SmRhombusImg
              className={"shOtherSkill2 pt-[4vh]"}
              href={ExternalPaths.cert1}
              imgSrc={ImagePaths.html}
            ></SmRhombusImg>
          </SkillDiv>
          <SkillDiv>
            <SmDiv className={"txStagger lg:pt-[10vh] pt-[6vh]"}>MySQL</SmDiv>
            <SmRhombusImg
              className={"shOtherSkill2 pt-[4vh]"}
              href={ExternalPaths.cert1}
              imgSrc={ImagePaths.html}
            ></SmRhombusImg>
          </SkillDiv>
          <SkillDiv>
            <SmDiv className={"txStagger lg:pt-[10vh] pt-[6vh]"}>
              Postgres
            </SmDiv>
            <SmRhombusImg
              className={"shOtherSkill2 pt-[4vh]"}
              href={ExternalPaths.cert1}
              imgSrc={ImagePaths.html}
            ></SmRhombusImg>
          </SkillDiv>
        </SkillGrid>

        <SmDiv
          className={`txOther mt-[10vh] pt-[10vh] xl:w-[40vw] md:w-[50vw] w-[80vw]`}
        >
          Apart from my developer skills, I'm also knowledgeable in installing and configuring computer
          hardware and software, basic setup of computer networks, basic setup of computer servers,
          and maintining computer systems and networks.
        </SmDiv>
      </section>
    </>
  );
};

const SkillGrid = ({ className, children }) => {
  return (
    <>
      <div
        className={`${
          className || ""
        } grid grid-cols-3 grid-rows-1 xl:w-[50vw] md:w-[60vw] w-[80vw]`}
      >
        {children}
      </div>
    </>
  );
};

const SkillDiv = ({ className, children }) => {
  return (
    <>
      <div
        className={`${
          className || ""
        } flex flex-col justify-center items-center`}
      >
        {children}
      </div>
    </>
  );
};

export default Skill;
