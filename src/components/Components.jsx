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
      <div className={`${className} text-center lg:text-5xl text-4xl`}>
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
          w-12 h-12 
          `}
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

export const LgRhombusImg = ({ className, href, imgSrc }) => {
  const sfxString = `${className}`.split(" ")[0];
  const classString = `${className}`.replace(sfxString, "");

  return (
    <>
      <div className={classString}>
        <a
          className={`${sfxString} clip-path-border bg-primaryClr flex justify-center items-center group
          xl:w-96 xl:h-96
          lg:w-80 lg:h-80 
          sm:w-80 sm:h-80
          w-64 h-64
          `}
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

export const SmRhombusIcon = ({ className, href, icon }) => {
  const sfxString = `${className}`.split(" ")[0];
  const classString = `${className}`.replace(sfxString, "");

  return (
    <>
      <div className={classString}>
        <a
          className={`${sfxString} rhombus rotate-45 bg-bgClr flex justify-center items-center group
          lg:w-24 lg:h-24 w-8 h-8
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
