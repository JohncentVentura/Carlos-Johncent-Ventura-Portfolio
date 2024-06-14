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
} from "../components/Components";

const Project = ({ ...props }) => {
  useEffect(() => {
    sfx.Init(props.fgClr, props.bgClr, props.primaryClr);
    sfx.SetEffect(".txStagger", (elem) => sfx.TextStagger(elem));
    sfx.SetEffect(".shProject1", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".shProjectSkill1", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".shProject1", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".shProjectSkill1", (elem) => sfx.ShapeShow(elem));
  });

  return (
    <>
      <section
        id={props.id}
      >
        <div className="mt-[10vh] flex xl:flex-row flex-col justify-center items-center gap-[2vw]">
          <LgRhombusImg
            className={`shProject1 lg:pt-[0] pt-[15vh]`}
            href={ExternalPaths.cert1}
            imgSrc={ImagePaths.html}
          ></LgRhombusImg>

          <div className="xl:w-[40vw] w-[80vw]">
            <LgDiv className={`txStagger lg:pt-[0] pt-[2vh]`}>E-COMMERCE</LgDiv>
            <LgDiv className={`txStagger`}>APP</LgDiv>
            <SmDiv className={`txStagger pt-[2vh]`}>
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
          <SkillDiv>
            <SmDiv className={"txStagger pt-[6vh]"}>HTML</SmDiv>
            <SmRhombusImg
              className={"shProjectSkill1 pt-[4vh]"}
              href={ExternalPaths.cert1}
              imgSrc={ImagePaths.html}
            ></SmRhombusImg>
          </SkillDiv>
          <SkillDiv>
            <SmDiv className={"txStagger pt-[6vh]"}>HTML</SmDiv>
            <SmRhombusImg
              className={"shProjectSkill1 pt-[4vh]"}
              href={ExternalPaths.cert1}
              imgSrc={ImagePaths.html}
            ></SmRhombusImg>
          </SkillDiv>
          <SkillDiv>
            <SmDiv className={"txStagger pt-[6vh]"}>HTML</SmDiv>
            <SmRhombusImg
              className={"shProjectSkill1 pt-[4vh]"}
              href={ExternalPaths.cert1}
              imgSrc={ImagePaths.html}
            ></SmRhombusImg>
          </SkillDiv>
        </SkillGrid>

        <div className="xl:mt-[30vh] mt-[20vh] flex xl:flex-row-reverse flex-col justify-center items-center gap-[2vw]">
          <LgRhombusImg
            className={`shProject1 lg:pt-[0] pt-[15vh]`}
            href={ExternalPaths.cert1}
            imgSrc={ImagePaths.pulprpg}
          ></LgRhombusImg>

          <div className="xl:w-[40vw] w-[80vw]">
            <LgDiv className={`txStagger lg:pt-[0] pt-[2vh]`}>PULPRPG</LgDiv>
            <SmDiv className={`txStagger pt-[2vh]`}>
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
          <SkillDiv>
            <SmDiv className={"txStagger pt-[6vh]"}>HTML</SmDiv>
            <SmRhombusImg
              className={"shProjectSkill1 pt-[4vh]"}
              href={ExternalPaths.cert1}
              imgSrc={ImagePaths.html}
            ></SmRhombusImg>
          </SkillDiv>
          <SkillDiv>
            <SmDiv className={"txStagger pt-[6vh]"}>HTML</SmDiv>
            <SmRhombusImg
              className={"shProjectSkill1 pt-[4vh]"}
              href={ExternalPaths.cert1}
              imgSrc={ImagePaths.html}
            ></SmRhombusImg>
          </SkillDiv>
          <SkillDiv>
            <SmDiv className={"txStagger pt-[6vh]"}>HTML</SmDiv>
            <SmRhombusImg
              className={"shProjectSkill1 pt-[4vh]"}
              href={ExternalPaths.cert1}
              imgSrc={ImagePaths.html}
            ></SmRhombusImg>
          </SkillDiv>
        </SkillGrid>
      </section>
    </>
  );
};

export default Project;
