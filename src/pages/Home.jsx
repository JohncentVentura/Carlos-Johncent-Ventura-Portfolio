/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import {
  FaFileDownload,
  FaFacebook,
  FaGithub,
  FaPinterest,
} from "react-icons/fa";

import {
  SmDiv,
  LgDiv,
  SkillDiv,
  SkillGrid,
  SmRhombusImg,
  SmRhombusIcon,
  LgRhombusImg,
  IconLink,
  SocialLinks
} from "../components/Components";
import { ExternalPaths, ImagePaths } from "../components/Paths";
import sfx from "../components/ScrollEffects";

const Home = ({ ...props }) => {
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
    sfx.SetEffect(".shGDandPASkill1", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".shOtherSkill1", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".shOtherSkill2", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".shOtherSkill3", (elem) => sfx.ShapeShow(elem));
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
            skillName={`HTML`}
            skillSFX={`shFrontEndSkill1`}
            skillHref={ExternalPaths.cert1}
            skillImgSrc={ImagePaths.html}
          />
          <SkillDiv
            skillName={`HTML`}
            skillSFX={`shFrontEndSkill1`}
            skillHref={ExternalPaths.cert1}
            skillImgSrc={ImagePaths.html}
          />
        </SkillGrid>
        <SkillGrid>
          <SkillDiv
            skillName={`HTML`}
            skillSFX={`shFrontEndSkill2 `}
            skillHref={ExternalPaths.cert1}
            skillImgSrc={ImagePaths.html}
          />
          <SkillDiv
            skillName={`HTML`}
            skillSFX={`shFrontEndSkill2 `}
            skillHref={ExternalPaths.cert1}
            skillImgSrc={ImagePaths.html}
          />
          <SkillDiv
            skillName={`HTML`}
            skillSFX={`shFrontEndSkill2 `}
            skillHref={ExternalPaths.cert1}
            skillImgSrc={ImagePaths.html}
          />
        </SkillGrid>

        <LgDiv className={"chStagger pt-[20vh]"}>Back-End</LgDiv>
        <LgDiv className={"chStagger pt-[1vh]"}>Development</LgDiv>

        <LgDiv className={"chStagger pt-[20vh]"}>Game</LgDiv>
        <LgDiv className={"chStagger pt-[1vh]"}>Development</LgDiv>

        <LgDiv className={"chStagger pt-[20vh]"}>Graphics Design</LgDiv>
        <LgDiv className={"chStagger pt-[1vh]"}>& Pixel Art</LgDiv>

        <LgDiv className={"chStagger pt-[20vh]"}>Others</LgDiv>

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

export default Home;
