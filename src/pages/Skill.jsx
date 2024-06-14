/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
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
} from "../components/Components";

const Skill = ({ ...props }) => {
  useEffect(() => {
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
  });

  return (
    <>
      <section
        id={props.id}
      >
        <LgDiv className={"txStagger mt-[10vh]"}>FRONT-END</LgDiv>
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
            <SmDiv className={"txStagger lg:pt-[10vh] pt-[6vh]"}>Express.js</SmDiv>
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
            <SmDiv className={"txStagger lg:pt-[10vh] pt-[6vh]"}>VB</SmDiv>
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
          Apart from my developer skills,
        </SmDiv>
        <SmDiv className={`txOther xl:w-[40vw] md:w-[50vw] w-[80vw]`}>
          I'm also knowledgeable in...
        </SmDiv>
        <SmDiv className={`txOther pt-[2vh] xl:w-[40vw] md:w-[50vw] w-[80vw]`}>
          Installing and configuring
        </SmDiv>
        <SmDiv className={`txOther xl:w-[40vw] md:w-[50vw] w-[80vw]`}>
          computer hardware and software,
        </SmDiv>
        <SmDiv className={`txOther pt-[2vh] xl:w-[40vw] md:w-[50vw] w-[80vw]`}>
          Basic setup of computer networks,
        </SmDiv>
        <SmDiv className={`txOther pt-[2vh] xl:w-[40vw] md:w-[50vw] w-[80vw]`}>
          Basic setup of computer servers,
        </SmDiv>
        <SmDiv className={`txOther pt-[2vh] xl:w-[40vw] md:w-[50vw] w-[80vw]`}>
          Maintining computer systems & networks.
        </SmDiv>
      </section>
    </>
  );
};





export default Skill;
