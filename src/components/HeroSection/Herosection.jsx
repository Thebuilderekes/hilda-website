import React from 'react';
import 'animate.css';
import '../../index.css';
import heroImage from '../../assets/images/hero-image-small.png';
import LPLogo from '../../assets/images/lp-logo.jpg';

function Herosection() {
  return (
    <div className="h-3/4 md:h-screen ">
      <section className=" z-20 flex h-full flex-col items-center gap-16  bg-gradient-to-r from-green-700 to-transparent px-8 pt-16 md:flex  md:flex-row md:justify-around">
        <div className="hero-text xs:bg-blue-200 flex flex-col items-center md:items-start ">
          {' '}
          {/*----------- Hero-text section----------*/}
          <div className="animate__animated animate__fadeInUp animate__delay-1s flex items-center bg-red-700">
            <img
              src={LPLogo}
              alt="labour party logo"
              width="80px"
              height="90px"
            />
            <h1 className="text-extrabold z-30 text-3xl text-white md:text-6xl   ">
              HILDA DOKUBO
            </h1>
          </div>
          <h2 className="animate__animated animate__fadeInUp animate__delay-2s z-30 py-2 text-center  text-xl  md:text-left md:text-2xl md:text-white">
            Candidate, House of Representatives.
          </h2>
          <h3 className="text-bold animate__animated animate__fadeInUp animate__delay-3s pb-8 text-center text-lg text-red-700  md:text-left md:text-base md:text-white">
            Asalga/Akulga Federal Consistency.
          </h3>
          <a
            className=" animate__animated animate__fadeInUp animate__delay-4s hover:text-red mx-auto bg-red-600 px-4 py-2 text-2xl text-white  hover:bg-red-700   md:mx-0 md:text-left md:text-3xl"
            href=""
          >
            Read Bills
          </a>
        </div>
        {/*----------Hero image-------------*/}
        <div className="hero-image animate__animated animate__fadeIn animate__delay-2s md:animate__delay-1s -z-10">
          {' '}
          <img
            src={heroImage}
            alt="hilda Dokubo wearing a suit and  smiling "
          />
        </div>
      </section>
    </div>
  );
}

export default Herosection;
