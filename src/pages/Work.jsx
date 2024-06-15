/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
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
  ScrollToTop
} from "../components/Components";
import Transition from "../components/Transition";

const Work = ({ ...props }) => {
  ScrollToTop();
  useEffect(() => {
    sfx.Init(props.fgClr, props.bgClr, props.primaryClr);
    sfx.SetEffect(".chAutoStagger", (elem) => sfx.CharAutoStagger(elem));
    sfx.SetEffect(".chStagger", (elem) => sfx.CharStagger(elem));
    sfx.SetEffect(".woStagger", (elem) => sfx.WordStagger(elem));

    sfx.SetEffect(".shEA1", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".shEA2", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".shEA3", (elem) => sfx.ShapeShow(elem));
  });

  return (
    <>
      <section>
        <LgDiv className="chAutoStagger pt-[50vh] pb-[20vh]">My Projects</LgDiv>

        <div className="flex xl:flex-row flex-col justify-center items-center gap-[2vw]">
          <LgRhombusImg
            className={`shEA1 pt-[20vh]`}
            href={ExternalPaths.cert1}
            imgSrc={ImagePaths.html}
          ></LgRhombusImg>

          <div className="flex flex-col justify-center items-center xl:pt-[20vh] pt-[2vh] xl:w-[40vw] w-[80vw]">
            <LgDiv className={`chStagger pt-[2vh]`}>E-COMMERCE APP</LgDiv>
            <SmDiv className={`woStagger pt-[2vh] text-justify`}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              nesciunt ad ducimus laudantium minima sapiente ex eligendi
              dignissimos, dolorum consequuntur iste dicta provident illum
              cumque sit itaque quae accusamus officiis perferendis ab delectus
              consectetur optio! Reprehenderit laborum distinctio, iste in,
              libero nesciunt vitae provident, id sed dolorum sunt commodi
              voluptatem?
            </SmDiv>
          </div>
        </div>

        <SkillGrid>
          <SkillDiv
            skillName={`HTML`}
            skillSFX={`shEA2`}
            skillHref={ExternalPaths.cert1}
            skillImgSrc={ImagePaths.html}
          />
          <SkillDiv
            skillName={`HTML`}
            skillSFX={`shEA2`}
            skillHref={ExternalPaths.cert1}
            skillImgSrc={ImagePaths.html}
          />
          <SkillDiv
            skillName={`HTML`}
            skillSFX={`shEA2`}
            skillHref={ExternalPaths.cert1}
            skillImgSrc={ImagePaths.html}
          />
        </SkillGrid>

        <SkillGrid>
          <SkillDiv
            skillName={`HTML`}
            skillSFX={`shEA3`}
            skillHref={ExternalPaths.cert1}
            skillImgSrc={ImagePaths.html}
          />
          <SkillDiv
            skillName={`HTML`}
            skillSFX={`shEA3`}
            skillHref={ExternalPaths.cert1}
            skillImgSrc={ImagePaths.html}
          />
          <SkillDiv
            skillName={`HTML`}
            skillSFX={`shEA3`}
            skillHref={ExternalPaths.cert1}
            skillImgSrc={ImagePaths.html}
          />
        </SkillGrid>

      </section>
    </>
  );
};

export default Transition(Work);
