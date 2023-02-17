import React from 'react';
import 'animate.css';
import '../../index.css';
import heroImage from '../../assets/images/hero-image-small.png';
import LPLogo from '../../assets/images/lp-logo.jpg';

function Herosection() {
  return (
    <div className="h-3/4 md:h-screen ">
      <section className=" z-20 px-8 flex flex-col gap-16 items-center  md:flex md:flex-row md:justify-around pt-16 h-full bg-gradient-to-r  from-green-700 to-transparent">
        <div className="hero-text xs:bg-blue-200 flex flex-col items-center ">
          {' '}
          {/*----------- Hero-text section----------*/}
          <div className="animate__animated animate__fadeInUp animate__delay-1s flex items-center bg-red-700 gap-4">
            <img
              src={LPLogo}
              alt="labour party logo"
              width="80px"
              height="90px"
            />
            <h1 className="text-white text-4xl md:text-6xl text-extrabold z-30  ">
              HILDA DOKUBO
            </h1>
          </div>
          <h2 className="md:text-white text-xl md:text-2xl text-center z-30 py-2  animate__animated animate__fadeInUp animate__delay-2s">
            Candidate, House of Representatives.
          </h2>
          <h3 className="md:text-white text-xl text-center md:text-left pb-8  animate__animated animate__fadeInUp animate__delay-3s">
            Asalga/Akulga Federal Consistency.
          </h3>
          <a
            className="animate__animated animate__fadeInUp animate__delay-4s text-white text-2xl md:text-3xl text-center mx-auto  bg-red-600 px-4 py-2 hover:text-red hover:bg-red-700"
            href=""
          >
            Read Policies
          </a>
        </div>
        <div className="hero-image -z-10 animate__animated animate__fadeIn animate__delay-4s md:animate__delay-1s">
          {' '}
          {/*----------Hero image section-------------*/}
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
