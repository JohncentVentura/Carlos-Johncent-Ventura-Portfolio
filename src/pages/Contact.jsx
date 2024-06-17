/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { MdPhoneIphone } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoSchoolSharp } from "react-icons/io5";
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
    sfx.SetEffect(".chStaggerFromTop", (elem) => sfx.CharStaggerFromTop(elem));
    sfx.SetEffect(".woStagger", (elem) => sfx.WordStagger(elem));
    sfx.SetEffect(".shSocialLink", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".shBtn", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".icPhone", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".icEmail", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".icAddress", (elem) => sfx.ShapeShow(elem));
    sfx.SetEffect(".icAlmaMater", (elem) => sfx.ShapeShow(elem));
  });

  return (
    <>
      <section>
        <LgDiv className="chAutoStagger pt-[50vh] pb-[20vh]">
          My Whereabouts
        </LgDiv>

        <LgDiv className={`chStagger pt-[20vh]`}>Now that you know me,</LgDiv>
        <LgDiv className={`chStagger pt-[2vh] opacity-40`}>or still maybe not?</LgDiv>
        <LgDiv className={`woStagger pt-[50vh] lg:w-[75vw] w-[85vw]`}>
          I'd love to hear your feedbacks, Here's how you can reach me...
        </LgDiv>

        <div className="flex xl:flex-row flex-col justify-center items-center gap-[5vw]">
          <form
            onSubmit={onSubmit}
            className="shForm xl:pt-[10vh] pt-[5vh] flex flex-col justify-center items-center gap-[4vh]"
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
              className="shBtn px-[2vw] lg:py-[1.5vh] py-[1vh] anim-glow-box xl:text-2xl md:text-xl text-lg bg-primaryClr text-[#191d2b] hover:text-[#e6e6e6]"
              type="submit"
            >
              Submit
            </button>
          </form> 

          <div className="xl:pt-[10vh] pt-[0] flex flex-col justify-center items-start xl:w-[30vw] w-[60vw] gap-[3vh]">
            <IconDiv
              className={``}
              iconSFX={`icPhone`}
              iconHref={ExternalPaths.phone}
              icon={<MdPhoneIphone size="45"/>}
              iconName={`0956-419-6962`}
            />
            <IconDiv
              className={``}
              iconSFX={`icEmail`}
              iconHref={ExternalPaths.email}
              icon={<MdAlternateEmail size="45"/>}
              iconName={`johncent.ventura@gmail.com`}
            />
            <IconDiv
              className={``}
              iconSFX={`icAddress`}
              iconHref={ExternalPaths.address}
              icon={<FaLocationDot size="45"/>}
              iconName={`Pozorrubio, Pangasinan`}
            />
            <IconDiv
              className={``}
              iconSFX={`icAlmaMater`}
              iconHref={ExternalPaths.universityOfLuzon}
              icon={<IoSchoolSharp size="45"/>}
              iconName={`University of Luzon`}
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
  const submitBtn = document.querySelector(".shBtn");
  submitBtn.disabled = true;
  submitBtn.textContent = `Sending...`

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
    const form = document.querySelector(".shForm");
    await form.reset();
    submitBtn.disabled = false;
    submitBtn.textContent = `Submit`;
    console.log("Success", res);
    return true;
  }
  else{
    const form = document.querySelector(".shForm");
    await form.reset();
    submitBtn.disabled = false;
    submitBtn.textContent = `Submit`;
    console.log("Failed", res);
  }
};

export default Transition(Contact);
