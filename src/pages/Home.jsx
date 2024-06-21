/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { FaNetworkWired, FaServer } from "react-icons/fa";
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
  ScrollToTop,
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
    sfx.SetEffect(".chStaggerFromTop", (elem) => sfx.CharStaggerFromTop(elem));
    sfx.SetEffect(".woStagger", (elem) => sfx.WordStagger(elem));
    sfx.SetEffect(".shIntroHero", (elem) => sfx.ShapeShow(elem));
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
    sfx.SetEffect(".shWelcomeHero", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".shSocialLink", (elem) => sfx.ShapeShow(elem));
  });

  return (
    <>
      <section>
        <LgDiv className="chAutoStagger pt-[50vh] pb-[20vh]">Hello!</LgDiv>

        <LgDiv className="woStagger pt-[20vh]">
          I'm Carlos Johncent Ventura
        </LgDiv>

        <LgRhombusImg
          className={"shIntroHero pt-[2vh]"}
          href={ExternalPaths.cert1}
          imgSrc={ImagePaths.hero}
        ></LgRhombusImg>

        <LgDiv className={"chStagger pt-[2vh]"}>Just somebody</LgDiv>
        <LgDiv className={"chStagger pt-[1vh] mb-[20vh]"}>
          chasing the dream of...
        </LgDiv>

        {/*Skills*******************************************************************************/}

        <LgDiv className={"chStaggerFromTop pt-[20vh]"}>Front-End</LgDiv>
        <LgDiv className={"chStaggerFromTop pt-[1vh]"}>Development</LgDiv>
        <SkillGrid>
          <SkillDiv
            skillName={`HTML`}
            skillSFX={`shFrontEndSkill1`}
            skillHref={ExternalPaths.html}
            skillImgSrc={ImagePaths.html}
          />
          <SkillDiv
            skillName={`CSS`}
            skillSFX={`shFrontEndSkill1`}
            skillHref={ExternalPaths.css}
            skillImgSrc={ImagePaths.css}
          />
          <SkillDiv
            skillName={`JavaScript`}
            skillSFX={`shFrontEndSkill1`}
            skillHref={ExternalPaths.javaScript}
            skillImgSrc={ImagePaths.javaScript}
          />
        </SkillGrid>
        <SkillGrid>
          <SkillDiv
            skillName={`Sass`}
            skillSFX={`shFrontEndSkill2 `}
            skillHref={ExternalPaths.sass}
            skillImgSrc={ImagePaths.sass}
          />
          <SkillDiv
            skillName={`Bootstrap`}
            skillSFX={`shFrontEndSkill2 `}
            skillHref={ExternalPaths.bootstrap}
            skillImgSrc={ImagePaths.bootstrap}
          />
          <SkillDiv
            skillName={`Tailwind`}
            skillSFX={`shFrontEndSkill2 `}
            skillHref={ExternalPaths.tailwindCSS}
            skillImgSrc={ImagePaths.tailwindCSS}
          />
        </SkillGrid>
        <SkillGrid>
          <SkillDiv
            skillName={`React`}
            skillSFX={`shFrontEndSkill3 `}
            skillHref={ExternalPaths.react}
            skillImgSrc={ImagePaths.react}
          />
        </SkillGrid>

        <LgDiv className={"chStaggerFromTop pt-[20vh]"}>Back-End</LgDiv>
        <LgDiv className={"chStaggerFromTop pt-[1vh]"}>Development</LgDiv>
        <SkillGrid>
          <SkillDiv
            skillName={`Node`}
            skillSFX={`shBackEndSkill1`}
            skillHref={ExternalPaths.nodeJS}
            skillImgSrc={ImagePaths.nodeJS}
          />
          <SkillDiv
            skillName={`Express`}
            skillSFX={`shBackEndSkill1`}
            skillHref={ExternalPaths.expressJS}
            skillImgSrc={ImagePaths.expressJS}
          />
          <SkillDiv
            skillName={`MongoDB`}
            skillSFX={`shBackEndSkill1`}
            skillHref={ExternalPaths.mongoDB}
            skillImgSrc={ImagePaths.mongoDB}
          />
        </SkillGrid>

        <LgDiv className={"chStaggerFromTop pt-[20vh]"}>Game</LgDiv>
        <LgDiv className={"chStaggerFromTop pt-[1vh]"}>Development</LgDiv>
        <SkillGrid>
          <SkillDiv
            skillName={`Unity`}
            skillSFX={`shGameDevSkill1`}
            skillHref={ExternalPaths.unity}
            skillImgSrc={ImagePaths.unity}
          />
          <SkillDiv
            skillName={`C#`}
            skillSFX={`shGameDevSkill1`}
            skillHref={ExternalPaths.cSharp}
            skillImgSrc={ImagePaths.cSharp}
          />
          <SkillDiv
            skillName={`Ink`}
            skillSFX={`shGameDevSkill1`}
            skillHref={ExternalPaths.ink}
            skillImgSrc={ImagePaths.ink}
          />
        </SkillGrid>

        <LgDiv className={"chStaggerFromTop pt-[20vh]"}>Graphics Design</LgDiv>
        <LgDiv className={"chStaggerFromTop pt-[1vh]"}>& Pixel Art</LgDiv>
        <SkillGrid>
          <SkillDiv
            skillName={`Photoshop`}
            skillSFX={`shGraphicsSkill1`}
            skillHref={ExternalPaths.adobePhotoshop}
            skillImgSrc={ImagePaths.adobePhotoshop}
          />
          <SkillDiv
            skillName={`Aseprite`}
            skillSFX={`shGraphicsSkill1`}
            skillHref={ExternalPaths.aseprite}
            skillImgSrc={ImagePaths.aseprite}
          />
        </SkillGrid>

        <LgDiv className={"chStaggerFromTop pt-[20vh]"}>Others</LgDiv>
        <SkillGrid>
          <SkillDiv
            skillName={`Git`}
            skillSFX={`shOtherSkill1`}
            skillHref={ExternalPaths.git}
            skillImgSrc={ImagePaths.git}
          />
          <SkillDiv
            skillName={`NPM`}
            skillSFX={`shOtherSkill1`}
            skillHref={ExternalPaths.npm}
            skillImgSrc={ImagePaths.npm}
          />
          <SkillDiv
            skillName={`Java`}
            skillSFX={`shOtherSkill1`}
            skillHref={ExternalPaths.java}
            skillImgSrc={ImagePaths.java}
          />
        </SkillGrid>
        <SkillGrid>
          <SkillDiv
            skillName={`VisualBasic`}
            skillSFX={`shOtherSkill2`}
            skillHref={ExternalPaths.visualBasic}
            skillImgSrc={ImagePaths.visualBasic}
          />
          <SkillDiv
            skillName={`MySQL`}
            skillSFX={`shOtherSkill2`}
            skillHref={ExternalPaths.mySQL}
            skillImgSrc={ImagePaths.mySQL}
          />
          <SkillDiv
            skillName={`Postgres`}
            skillSFX={`shOtherSkill2`}
            skillHref={ExternalPaths.postgreSQL}
            skillImgSrc={ImagePaths.postgreSQL}
          />
        </SkillGrid>
        <SkillGrid>
          <SkillDiv
            skillName={`Hardware`}
            skillSFX={`shOtherSkill3`}
            skillHref={ExternalPaths.hardware}
            skillIcon={<IoHardwareChipSharp size="45" />}
          />
          <SkillDiv
            skillName={`Network`}
            skillSFX={`shOtherSkill3`}
            skillHref={ExternalPaths.network}
            skillIcon={<FaNetworkWired size="45" />}
          />
          <SkillDiv
            skillName={`Server`}
            skillSFX={`shOtherSkill3`}
            skillHref={ExternalPaths.server}
            skillIcon={<FaServer size="45" />}
          />
        </SkillGrid>

        {/*Skills*******************************************************************************/}

        <LgDiv className="chStagger pt-[20vh]">and learning more,</LgDiv>
        <LgDiv className="chStagger pt-[1vh] mb-[60vh]">but for now...</LgDiv>

        <div className="flex lg:flex-row-reverse flex-col justify-center items-center lg:gap-[5vw] gap-[0]">
          <LgRhombusImg
            className={"shWelcomeHero pt-[2vh]"}
            imgSrc={ImagePaths.hero}
          ></LgRhombusImg>

          <div className="flex flex-col justify-center items-center xl:w-[30vw] lg:w-[50vw] w-[70vw]">
            <LgDiv className={"chStaggerFromTop pt-[2vh]"}>
              WELCOME TO MY PORTFOLIO
            </LgDiv>
            <SmDiv className={"woStagger lg:pt-[5vh] pt-[2vh] text-justify "}>
              For more information about me, you can download my curriculum
              vitae, visit me on Facebook, commit with me in Github, and view my Pinterest.
            </SmDiv>
          </div>
        </div>

        <SocialLinks />
      </section>
    </>
  );
};

export default Transition(Home);
