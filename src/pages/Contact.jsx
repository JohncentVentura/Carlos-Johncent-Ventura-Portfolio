/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { KeyPaths, ExternalPaths, ImagePaths } from "../components/Paths";
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
  SocialLinks
} from "../components/Components";

const Contact = ({ ...props }) => {
  useEffect(() => {
    sfx.Init(props.fgClr, props.bgClr, props.primaryClr);
    sfx.SetEffect(".txStagger", (elem) => sfx.CharStagger(elem));
    sfx.SetEffect(".shContact", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".shSocialLink", (elem) => sfx.ShapeShow(elem));
  });

  return (
    <>
      <section id={props.id} className="mb-[50vh]">
        <LgDiv className={`txStagger mt-[10vh]`}>Now that you know me,</LgDiv>
        <LgDiv className={`txStagger`}>or still maybe not?</LgDiv>
        <LgDiv className={`txStagger`}>I'd love to hear your</LgDiv>
        <LgDiv className={`txStagger`}>feedbacks, Here's how</LgDiv>
        <LgDiv className={`txStagger`}>you can reach me...</LgDiv>

        <form
          onSubmit={onSubmit}
          className="mt-[5vh] flex flex-col justify-center items-center gap-[4vh]"
        >
          <input
            className="anim-glow-box ps-[0.5vw] lg:w-[40vw] w-[60vw] h-[5vh]"
            name="name"
            type="text"
            placeholder="Your Name" 
            required
          />
          <input
            className="anim-glow-box ps-[0.5vw] lg:w-[40vw] w-[60vw] h-[5vh]"
            name="email"
            type="email"
            placeholder="Your Email"
            required
          />
          <textarea
            className="anim-glow-box ps-[0.5vw] lg:w-[40vw] w-[60vw] min-h-[15vh]"
            name="message"
            placeholder="Your Message"
            required
          />
          <button
            className="px-[2vw] py-[2vh] anim-glow-box bg-primaryClr text-[#191d2b] hover:text-[#e6e6e6]"
            type="submit"
          >
            Submit
          </button>
        </form>

        <SocialLinks/>
      </section>
    </>
  );
};

const onSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  formData.append("access_key", `${KeyPaths.accessKey}`);

  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  }).then((res) => res.json());

  if (res.success) {
    console.log("Success", res);
  }
};

export default Contact;
