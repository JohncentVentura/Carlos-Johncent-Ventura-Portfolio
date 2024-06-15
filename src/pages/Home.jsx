/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import {
  FaNetworkWired,
  FaServer
} from "react-icons/fa";
import { IoHardwareChipSharp } from "react-icons/io5";

import {
  SmDiv,
  LgDiv,
  SkillDiv,
  SkillGrid,
  SmRhombusImg,
  SmRhombusIcon,
  LgRhombusImg,
  IconLink,
  SocialLinks,
  ScrollToTop
} from "../components/Components";
import { ExternalPaths, ImagePaths } from "../components/Paths";
import sfx from "../components/ScrollEffects";
import Transition from "../components/Transition";

const Home = ({ ...props }) => {
  ScrollToTop();
  useEffect(() => {
    sfx.Init(props.fgClr, props.bgClr, props.primaryClr);
    sfx.SetEffect(".chAutoStagger", (elem) => sfx.CharAutoStagger(elem));
    sfx.SetEffect(".chStagger", (elem) => sfx.CharStagger(elem));
    sfx.SetEffect(".woStagger", (elem) => sfx.WordStagger(elem));
    sfx.SetEffect(".shSocialLink", (elem) => sfx.ShapeShow(elem));

    sfx.SetEffect(".shHero", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".shFrontEndSkill1", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".shFrontEndSkill2", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".shFrontEndSkill3", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".shBackEndSkill1", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".shGameDevSkill1", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".shGraphicsSkill1", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".shOtherSkill1", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".shOtherSkill2", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".shOtherSkill3", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".shOtherSkill4", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".shWelcome", (elem) => sfx.ShapeShow(elem));
  });

  return (
    <>
      <section>
        <LgDiv className="chAutoStagger pt-[50vh] pb-[20vh]">Hello!</LgDiv>

        <LgDiv className="woStagger pt-[20vh]">
          I'm Carlos Johncent Ventura
        </LgDiv>

        <LgRhombusImg
          className={"shHero pt-[2vh]"}
          href={ExternalPaths.cert1}
          imgSrc={ImagePaths.hero}
        ></LgRhombusImg>

        <LgDiv className={"chStagger pt-[2vh]"}>Just another fool</LgDiv>
        <LgDiv className={"chStagger pt-[1vh] mb-[20vh]"}>
          chasing the dream of...
        </LgDiv>

        {/*Skills*******************************************************************************/}

        <LgDiv className={"chStagger pt-[20vh]"}>Front-End</LgDiv>
        <LgDiv className={"chStagger pt-[1vh]"}>Development</LgDiv>
        <SkillGrid>
          <SkillDiv
            skillName={`HTML`}
            skillSFX={`shFrontEndSkill1`}
            skillHref={ExternalPaths.cert1}
            skillImgSrc={ImagePaths.html}
          />
          <SkillDiv
            skillName={`CSS`}
            skillSFX={`shFrontEndSkill1`}
            skillHref={ExternalPaths.cert1}
            skillImgSrc={ImagePaths.css}
          />
          <SkillDiv
            skillName={`JavaScript`}
            skillSFX={`shFrontEndSkill1`}
            skillHref={ExternalPaths.cert1}
            skillImgSrc={ImagePaths.javaScript}
          />
        </SkillGrid>
        <SkillGrid>
          <SkillDiv
            skillName={`Sass`}
            skillSFX={`shFrontEndSkill2 `}
            skillHref={ExternalPaths.cert1}
            skillImgSrc={ImagePaths.sass}
          />
          <SkillDiv
            skillName={`Bootstrap`}
            skillSFX={`shFrontEndSkill2 `}
            skillHref={ExternalPaths.cert1}
            skillImgSrc={ImagePaths.bootstrap}
          />
          <SkillDiv
            skillName={`Tailwind`}
            skillSFX={`shFrontEndSkill2 `}
            skillHref={ExternalPaths.cert1}
            skillImgSrc={ImagePaths.tailwindCSS}
          />
        </SkillGrid>
        <SkillGrid>
          <SkillDiv
            skillName={`React`}
            skillSFX={`shFrontEndSkill3 `}
            skillHref={ExternalPaths.cert1}
            skillImgSrc={ImagePaths.react}
          />
        </SkillGrid>

        <LgDiv className={"chStagger pt-[20vh]"}>Back-End</LgDiv>
        <LgDiv className={"chStagger pt-[1vh]"}>Development</LgDiv>
        <SkillGrid>
          <SkillDiv
            skillName={`Node`}
            skillSFX={`shBackEndSkill1`}
            skillHref={ExternalPaths.cert1}
            skillImgSrc={ImagePaths.nodeJS}
          />
          <SkillDiv
            skillName={`Express`}
            skillSFX={`shBackEndSkill1`}
            skillHref={ExternalPaths.cert1}
            skillImgSrc={ImagePaths.expressJS}
          />
          <SkillDiv
            skillName={`MongoDB`}
            skillSFX={`shBackEndSkill1`}
            skillHref={ExternalPaths.cert1}
            skillImgSrc={ImagePaths.mongoDB}
          />
        </SkillGrid>

        <LgDiv className={"chStagger pt-[20vh]"}>Game</LgDiv>
        <LgDiv className={"chStagger pt-[1vh]"}>Development</LgDiv>
        <SkillGrid>
          <SkillDiv
            skillName={`Unity`}
            skillSFX={`shGameDevSkill1`}
            skillHref={ExternalPaths.cert1}
            skillImgSrc={ImagePaths.unity}
          />
          <SkillDiv
            skillName={`C#`}
            skillSFX={`shGameDevSkill1`}
            skillHref={ExternalPaths.cert1}
            skillImgSrc={ImagePaths.cSharp}
          />
          <SkillDiv
            skillName={`Inky`}
            skillSFX={`shGameDevSkill1`}
            skillHref={ExternalPaths.cert1}
            skillImgSrc={ImagePaths.inky}
          />
        </SkillGrid>

        <LgDiv className={"chStagger pt-[20vh]"}>Graphics Design</LgDiv>
        <LgDiv className={"chStagger pt-[1vh]"}>& Pixel Art</LgDiv>
        <SkillGrid>
          <SkillDiv
            skillName={`Photoshop`}
            skillSFX={`shGraphicsSkill1`}
            skillHref={ExternalPaths.cert1}
            skillImgSrc={ImagePaths.adobePhotoshop}
          />
          <SkillDiv
            skillName={`Aseprite`}
            skillSFX={`shGraphicsSkill1`}
            skillHref={ExternalPaths.cert1}
            skillImgSrc={ImagePaths.aseprite}
          />
        </SkillGrid>

        <LgDiv className={"chStagger pt-[20vh]"}>Others</LgDiv>
        <SkillGrid>
          <SkillDiv
            skillName={`Git`}
            skillSFX={`shOtherSkill1`}
            skillHref={ExternalPaths.cert1}
            skillImgSrc={ImagePaths.git}
          />
          <SkillDiv
            skillName={`NPM`}
            skillSFX={`shOtherSkill1`}
            skillHref={ExternalPaths.cert1}
            skillImgSrc={ImagePaths.npm}
          />
          <SkillDiv
            skillName={`Java`}
            skillSFX={`shOtherSkill1`}
            skillHref={ExternalPaths.cert1}
            skillImgSrc={ImagePaths.java}
          />
        </SkillGrid>
        <SkillGrid>
          <SkillDiv
            skillName={`Visual Basic`}
            skillSFX={`shOtherSkill2`}
            skillHref={ExternalPaths.cert1}
            skillImgSrc={ImagePaths.visualBasic}
          />
          <SkillDiv
            skillName={`MySQL`}
            skillSFX={`shOtherSkill2`}
            skillHref={ExternalPaths.cert1}
            skillImgSrc={ImagePaths.mySQL}
          />
          <SkillDiv
            skillName={`Postgres`}
            skillSFX={`shOtherSkill2`}
            skillHref={ExternalPaths.cert1}
            skillImgSrc={ImagePaths.postgreSQL}
          />
        </SkillGrid>
        <SkillGrid>
          <SkillDiv
            skillName={`Hardware`}
            skillSFX={`shOtherSkill3`}
            skillHref={ExternalPaths.cert1}
            skillIcon={<IoHardwareChipSharp size="45"/>}
          />
          <SkillDiv
            skillName={`Network`}
            skillSFX={`shOtherSkill3`}
            skillHref={ExternalPaths.cert1}
            skillIcon={<FaNetworkWired size="45"/>}
          />
          <SkillDiv
            skillName={`Server`}
            skillSFX={`shOtherSkill3`}
            skillHref={ExternalPaths.cert1}
            skillIcon={<FaServer size="45"/>}
          />
        </SkillGrid>

        {/*Skills*******************************************************************************/}

        <LgDiv className="chStagger pt-[20vh]">& still learning more,</LgDiv>
        <LgDiv className="chStagger pt-[1vh] mb-[60vh]">but for now...</LgDiv>

        <div className="flex lg:flex-row-reverse flex-col justify-center items-center lg:gap-[5vw] gap-[0]">
          <LgRhombusImg
            className={"shWelcome pt-[2vh]"}
            imgSrc={ImagePaths.hero}
          ></LgRhombusImg>

          <div className="flex flex-col justify-center items-center xl:w-[30vw] lg:w-[50vw] w-[70vw]">
            <LgDiv className={"woStagger pt-[2vh]"}>
              WELCOME TO MY PORTFOLIO
            </LgDiv>
            <SmDiv className={"woStagger lg:pt-[5vh] pt-[2vh] text-justify "}>
              Still don't know me after that introduction? Then you can download
              my CV, stalk me on Facebook, commit with me in Github, and
              criticize my Pinterest.
            </SmDiv>
          </div>
        </div>

        <SocialLinks/>
      </section>
    </>
  );
};

export default Transition(Home);
