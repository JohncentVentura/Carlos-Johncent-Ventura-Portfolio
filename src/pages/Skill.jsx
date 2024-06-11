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
  return (
    <>
      <section id={props.id} className="h-fit">
        <LgDiv className={"txAbout4 lg:pt-[40vh] pt-[20vh]"}>MY CERTIFICATES</LgDiv>
      </section>
    </>
  );
};

export default Skill;
