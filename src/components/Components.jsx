export const SectionDiv = ({ sfxString1, sfxString2, children }) => {
  return (
    <>
      <div className="absolute z-40 mt-[1vh]">
        <div
          className={`${sfxString1} w-screen h-[50vh] bg-primaryClr flex justify-center items-end`}
        >
          <div className="lg:text-9xl sm:text-8xl text-7xl text-center text-bgClr">
            {children}
          </div>
        </div>
      </div>

      <div className="absolute mt-[50vh]">
        <div className={`${sfxString2} w-screen h-[100vh] bg-primaryClr`}></div>
      </div>
    </>
  );
};

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

export const IconLink = ({ className, href, icon }) => {
  const sfxString = `${className}`.split(" ")[0];
  const classString = `${className}`.replace(sfxString, "");

  return (
    <>
      <div className={classString}>
        <a
          className={`${sfxString} flex justify-center items-center`}
          href={href}
          target="_blank"
          rel="noreferrer"
        >
          {icon}
        </a>
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

export const SmRhombusIcon = ({ className, href, icon }) => {
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
          lg:w-80 lg:h-80 
          sm:w-80 sm:h-80
          w-64 h-64`}
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
