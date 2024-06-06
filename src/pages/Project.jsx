/* eslint-disable no-unused-vars */
import React from "react";

import { Div } from "../App";

const Project = ({ ...props }) => {
  return (
    <>
      <section id={props.id}>
        <Div>Project</Div>
      </section>
    </>
  );
};

export default Project;
