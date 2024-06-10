export const SmRhombusImg = ({className, href, imgSrc }) => {
  const sfxString = `${className}`.split(" ")[0];
  const classString = `${className}`.replace(sfxString, "");

  return (
    <>
      <div className={classString}>
        <a
          className={`${sfxString} rhombus rotate-45 bg-bgClr flex justify-center items-center group 
          md:w-24 md:h-24 w-8 h-8
          hover:bg-primaryClr hover:transition-all hover:duration-[0.4s] hover:ease-in-out`}
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

export const SmRhombusIcon = ({ className, href, icon }) => {
  const sfxString = `${className}`.split(" ")[0];
  const classString = `${className}`.replace(sfxString, "");

  return (
    <>
      <div className={classString}>
        <a
          className={`${sfxString} rhombus rotate-45 bg-bgClr flex justify-center items-center group
          md:w-24 md:h-24 w-8 h-8
          hover:bg-primaryClr hover:transition-all hover:duration-[0.4s] hover:ease-in-out`}
          href={href}
          target="_blank"
          rel="noreferrer"
        >
          <div
            className="-rotate-45 w-[75%] h-[75%] object-fill 
            group-hover:-rotate-[225deg] group-hover:transition-all group-hover:duration-[0.4s] group-hover:ease-in-out"
          >
            {icon}
          </div>
        </a>
      </div>
    </>
  );
};

export const LgRhombus = ({ className, href, imgSrc }) => {
  const sfxString = `${className}`.split(" ")[0];
  const classString = `${className}`.replace(sfxString, "");

  return (
    <>
      <div className={classString}>
        <a
          className={`${sfxString} clip-path-border bg-primaryClr flex justify-center items-center group
        md:w-80 md:h-80 w-24 h-24`}
          href={href}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={imgSrc}
            alt={imgSrc}
            className="clip-path w-full h-full object-fill bg-bgClr
          group-hover:bg-primaryClr group-hover:transition-all group-hover:duration-[0.4s] group-hover:ease-in-out"
          />
        </a>
      </div>
    </>
  );
};

export const PageDivider = ({ children }) => {
  return (
    <>
      <div className="absolute">
        <div className="openPage w-screen h-[50vh] bg-primaryClr flex justify-center items-end">
          <div className="text-9xl text-bgClr">{children}</div>
        </div>
      </div>

      <div className="absolute mt-[50vh]">
        <div className="closePage w-screen h-[50vh] bg-primaryClr"></div>
      </div>
    </>
  );
};

/*
export const SmRhombusImg = ({ className, sfxName, href, imgSrc }) => {
  return (
    <>
      <div className={`${className} `}>
        <a
          className={`${sfxName} rhombus-border bg-primaryClr block md:w-36 md:h-36 w-8 h-8
          group hover:rotate-180 hover:transition-all hover:duration-[0.4s] hover:ease-in-out`}
          href={href}
        >
          <div className="rhombus bg-bgClr p-[25%] group-hover:bg-primaryClr group-hover:-rotate-180">
            <img
              src={imgSrc}
              alt={imgSrc}
              className="w-full h-full object-fill"
            />
          </div>
        </a>
      </div>
    </>
  );
};


export const SmRhombusIcon = ({ className, sfxName, href, icon }) => {
  return (
    <>
      <div className={className}>
        <a
          className={`${sfxName} rhombus-border bg-primaryClr block md:w-36 md:h-36 w-8 h-8`}
          href={href}
        >
          <div className="rhombus bg-bgClr">{icon}</div>
        </a>
      </div>
    </>
  );
};

export const LgRhombus = ({ className, sfxName, href, imgSrc }) => {
  return (
    <>
      <div className={className}>
        <a
          className={`${sfxName} rhombus-border bg-primaryClr block md:w-80 md:h-80 w-24 h-24`}
          href={href}
        >
          <div className="rhombus bg-bgClr">
            <img
              src={imgSrc}
              alt={imgSrc}
              className="w-full h-full object-fill"
            />
          </div>
        </a>
      </div>
    </>
  );
};

*/
