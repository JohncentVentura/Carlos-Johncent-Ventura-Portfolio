import {
  FaFileDownload,
  FaFacebook,
  FaGithub,
  FaPinterest,
} from "react-icons/fa";
import { ExternalPaths } from "../components/Paths";

export const SmDiv = ({ className, children }) => {
  return (
    <>
      <div className={`${className} text-center lg:text-3xl text-xl`}>
        {children}
      </div>
    </>
  );
};

export const LgDiv = ({ className, children }) => {
  return (
    <>
      <div
        className={`${className} text-center lg:text-5xl sm:text-4xl text-3xl`}
      >
        {children}
      </div>
    </>
  );
};

export const SmRhombusImg = ({ className, href, imgSrc }) => {
  const sfxString = `${className}`.split(" ")[0];
  const classString = `${className}`.replace(sfxString, "");

  return (
    <>
      <div className={classString}>
        <a
          className={`${sfxString} rhombus rotate-45 bg-bgClr flex justify-center items-center group 
          hover:bg-primaryClr hover:transition-all hover:duration-[0.4s] hover:ease-in-out
          xl:w-24 xl:h-24 
          lg:w-20 lg:h-20
          sm:w-16 sm:h-16
          w-12 h-12`}
          href={href}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={imgSrc}
            alt={imgSrc}
            className="-rotate-45 w-[75%] h-[75%] object-fill 
            group-hover:-rotate-[225deg] group-hover:transition-all group-hover:duration-[0.4s] group-hover:ease-in-out"
          />
        </a>
      </div>
    </>
  );
};

export const SmRhombusIcon = ({ className, href, download, icon }) => {
  const sfxString = `${className}`.split(" ")[0];
  const classString = `${className}`.replace(sfxString, "");

  return (
    <>
      <div className={classString}>
        <a
          className={`${sfxString} rhombus rotate-45 bg-bgClr flex justify-center items-center group 
          hover:bg-primaryClr hover:transition-all hover:duration-[0.4s] hover:ease-in-out
          xl:w-24 xl:h-24 
          lg:w-20 lg:h-20
          sm:w-16 sm:h-16
          w-12 h-12`}
          href={href || null}
          target="_blank"
          rel="noreferrer"
          download={download}
        >
          <div
            className="-rotate-45 w-[75%] h-[75%] object-fill flex justify-center items-center group-hover:text-bgClr
            group-hover:-rotate-[225deg] group-hover:transition-all group-hover:duration-[0.4s] group-hover:ease-in-out"
          >
            {icon}
          </div>
        </a>
      </div>
    </>
  );
};

export const LgRhombusImg = ({ className, href, imgSrc }) => {
  const sfxString = `${className}`.split(" ")[0];
  const classString = `${className}`.replace(sfxString, "");

  return (
    <>
      <div className={classString}>
        <a
          className={`${sfxString} clip-path-border bg-primaryClr flex justify-center items-center group
          xl:w-96 xl:h-96
          lg:w-72 lg:h-72 
          sm:w-64 sm:h-64
          w-56 h-56`}
          href={href}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={imgSrc}
            alt={imgSrc}
            className="clip-path w-full h-full object-fill bg-bgClr group-hover:bg-primaryClr"
          />
        </a>
      </div>
    </>
  );
};

export const SkillDiv = ({ className, skillName, skillSFX ,skillHref, skillImgSrc }) => {
  return (
    <>
      <div
        className="flex flex-col justify-center items-center"
      >
        <SmDiv className={"chStagger pt-[6vh]"}>{skillName}</SmDiv>
        <SmRhombusImg
          className={`${skillSFX} pt-[3vh]`}
          href={skillHref}
          imgSrc={skillImgSrc}
        ></SmRhombusImg>
      </div>
    </>
  );
};

export const SkillGrid = ({ className, children }) => {
  return (
    <>
      <div
        className={`${
          className || ""
        } grid grid-cols-3 grid-rows-1 xl:w-[50vw] md:w-[65vw] w-[85vw]`}
      >
        {children}
      </div>
    </>
  );
};

export const IconLink = ({ className, href, icon }) => {
  const sfxString = `${className}`.split(" ")[0];
  const classString = `${className}`.replace(sfxString, "");

  return (
    <>
      <div className={classString}>
        <a
          className={`${sfxString} flex justify-center items-center`}
          href={href || null}
          target="_blank"
          rel="noreferrer"
        >
          {icon}
        </a>
      </div>
    </>
  );
};

export const SocialLinks = ({ className }) => {
  return (
    <>
      <div className={`${className} flex justify-between items-center xl:w-[50vw] md:w-[60vw] w-[80vw]`}>
          <SmRhombusIcon
            className={"shSocialLink lg:pt-[10vh] pt-[5vh]"}
            href={ExternalPaths.cert1}
            icon={<FaFileDownload size="35" />}
          ></SmRhombusIcon>
          <SmRhombusIcon
            className={"shSocialLink lg:pt-[10vh] pt-[5vh]"}
            href={ExternalPaths.cert1}
            icon={<FaFacebook size="40" />}
          ></SmRhombusIcon>
          <SmRhombusIcon
            className={"shSocialLink lg:pt-[10vh] pt-[5vh]"}
            href={ExternalPaths.cert1}
            icon={<FaGithub size="40" />}
          ></SmRhombusIcon>
          <SmRhombusIcon
            className={"shSocialLink lg:pt-[10vh] pt-[5vh]"}
            href={ExternalPaths.cert1}
            icon={<FaPinterest size="40" />}
          ></SmRhombusIcon>
        </div>
    </>
  );
};