/* eslint-disable no-unused-vars */
import React from 'react'

import { ImagePaths } from '../components/Paths';
import { Div } from "../App";

const Home = ({...props}) => {
  return (
    <>
      <section id={props.id}>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-end">
            <img src={ImagePaths.hero} alt={ImagePaths.hero} id="hero"
                className="relative w-[75%] h-[75%] object-contain"/>
        </div>
      </section>
    </>
  );
};

export default Home;
