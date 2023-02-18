import React from 'react';
import 'animate.css';
function GeiInvolved() {
  return (
    <div
      className="h-3/4 py-16 px-8 bg-gradient-to-r from-red-600 flex flex-col item-center  to-red-900"
      id="getinvolved"
    >
      <h2 className="animate__animated animate__fadeInUp animate__delay-6s gradient-text text-white text-bold text-center  text-3xl md:text-6xl leading-loose .ease-out duration-1000">
        VOTE FOR BETTER BILLS. <br /> VOTE FOR YOUR FUTURE.
      </h2>
      <p className="animate__animated animate__fadeInUp animate__delay-7s text-white text-center md:w-1/2 mx-auto py-8 ">
        Join us in Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Perspiciatis iste at accusantium rerum quae ea, sapiente eum. Eveniet
        molestiae magni error animi architecto sed exercitationem tempora natus
        nisi impedit, expedita repellat est minus quia. Nulla modi neque,
        dolorem pariatur rerum accusantium accusamus voluptates ea quia, minus
        explicabo dolor possimus aliquam.
      </p>

      <a
        className="w-[200px] text-bold text-2xl text-red-700  text-center mx-auto bg-white p-2  rounded-lg hover:text-white hover:bg-green-600"
        href=""
      >
        Get involved
      </a>
    </div>
  );
}

export default GeiInvolved;
