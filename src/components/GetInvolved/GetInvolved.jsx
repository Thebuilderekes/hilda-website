import React from 'react';
import 'animate.css';
function GeiInvolved() {
  return (
    <div
      className="item-center flex h-3/4 flex-col bg-gradient-to-r from-red-600 to-red-900 py-16  px-8"
      id="getinvolved"
    >
      <h2 className="animate__animated animate__fadeInUp animate__delay-6s design-text text-bold .ease-out text-center  text-3xl leading-loose text-white duration-1000 md:text-6xl">
        SUPPORT BETTER BILLS. <br /> VOTE FOR A BETTER FUTURE.
      </h2>
      <p className="animate__animated animate__fadeInUp animate__delay-7s mx-auto py-8 text-center text-white md:w-1/2 ">
        Join us in Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Perspiciatis iste at accusantium rerum quae ea, sapiente eum. Eveniet
        molestiae magni error animi architecto sed exercitationem tempora natus
        nisi impedit, expedita repellat est minus quia. Nulla modi neque,
        dolorem pariatur rerum accusantium accusamus voluptates ea quia, minus
        explicabo dolor possimus aliquam.
      </p>

      <a
        className="text-bold mx-auto w-[200px] rounded-lg  bg-white p-2 text-center text-2xl  text-red-700 hover:bg-green-600 hover:text-white"
        href=""
      >
        Get involved
      </a>
    </div>
  );
}

export default GeiInvolved;
