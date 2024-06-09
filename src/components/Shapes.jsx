export const SmRhombus = ({ parentClass, mainClass, children }) => {
  return (
    <>
      <div className={`${parentClass}`}>
        <div
          className={`${mainClass} rhombus md:w-36 md:h-36 w-8 h-8 bg-primaryClr flex justify-center items-center`}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export const LgRhombus = ({ parentClass, mainClass, children }) => {
  return (
    <>
      <div className={`${parentClass}`}>
        <div
          className={`${mainClass} rhombus w-80 h-80 bg-primaryClr flex justify-center items-center`}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export const PageDivider = ({children}) => {
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
