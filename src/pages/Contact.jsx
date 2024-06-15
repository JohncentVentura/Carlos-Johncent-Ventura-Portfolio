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
  SocialLinks,
  IconDiv,
  ScrollToTop,
} from "../components/Components";
import Transition from "../components/Transition";

const Contact = ({ ...props }) => {
  ScrollToTop();
  useEffect(() => {
    sfx.Init(props.fgClr, props.bgClr, props.primaryClr);
    sfx.SetEffect(".chAutoStagger", (elem) => sfx.CharAutoStagger(elem));
    sfx.SetEffect(".chStagger", (elem) => sfx.CharStagger(elem));
    sfx.SetEffect(".woStagger", (elem) => sfx.WordStagger(elem));
    sfx.SetEffect(".shSocialLink", (elem) => sfx.ShapeShow(elem));

    sfx.SetEffect(".shForm", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".icAddress", (elem) => sfx.ShapeShow(elem));
  });

  return (
    <>
      <section>
        <LgDiv className="chAutoStagger pt-[50vh] pb-[20vh]">
          My Whereabouts
        </LgDiv>

        <LgDiv className={`chStagger pt-[20vh]`}>Now that you know me,</LgDiv>
        <LgDiv className={`chStagger pt-[20vh]`}>or still maybe not?</LgDiv>
        <LgDiv className={`woStagger pt-[20vh] lg:w-[75vw] w-[85vw]`}>
          I'd love to hear your feedbacks, Here's how you can reach me...
        </LgDiv>

        <div className="flex xl:flex-row flex-col justify-center items-center gap-[5vw]">
          <form
            onSubmit={onSubmit}
            className="shForm pt-[10vh] flex flex-col justify-center items-center gap-[3vh]"
          >
            <input
              className="anim-glow-box ps-[0.5vw] xl:w-[30vw] w-[60vw] h-[4vh]"
              name="name"
              type="text"
              placeholder="Your Name"
              required
            />
            <input
              className="anim-glow-box ps-[0.5vw] xl:w-[30vw] w-[60vw] h-[4vh]"
              name="email"
              type="email"
              placeholder="Your Email"
              required
            />
            <textarea
              className="anim-glow-box ps-[0.5vw] xl:w-[30vw] w-[60vw] min-h-[10vh]"
              name="message"
              placeholder="Your Message"
              required
            />
            <button
              className="px-[2vw] lg:py-[2vh] py-[1vh] anim-glow-box xl:text-3xl md:text-2xl text-xl bg-primaryClr text-[#191d2b] hover:text-[#e6e6e6]"
              type="submit"
            >
              Submit
            </button>
          </form>

          <div className="mb-[2vh] flex flex-col justify-center items-start xl:w-[30vw] w-[60vw] gap-[3vh]">
            <IconDiv
              className={``}
              iconSFX={`icAddress`}
              iconHref={ExternalPaths.freeCodeCamp}
              icon={<FaGithub size="50" />}
              iconName={`0956-419-6962`}
            />
            <IconDiv
              className={``}
              iconSFX={`icAddress`}
              iconHref={ExternalPaths.freeCodeCamp}
              icon={<FaGithub size="50" />}
              iconName={`johncent.ventura@gmail.com`}
            />
            <IconDiv
              className={``}
              iconSFX={`icAddress`}
              iconHref={ExternalPaths.freeCodeCamp}
              icon={<FaGithub size="50" />}
              iconName={`Pozorrubio, Pangasinan`}
            />
          </div>
        </div>

        <SocialLinks />
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

export default Transition(Contact);
