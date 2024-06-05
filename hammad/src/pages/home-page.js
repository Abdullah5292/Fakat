/* eslint-disable jsx-a11y/img-redundant-alt */
import logo from '../Side-logo.png';
import name from '../Fakat Locker name.png'
import Bg from '../Fakat bg.png'
import { Link } from 'react-router-dom';
import React from 'react';

export const HomePage = () => {

  return (



    <div class=" relative h-screen w-screen " >
      <img src={Bg} alt="Background" className="absolute inset-0 object-cover w-full h-full opacity-100" />
      <img className="absolute top-0 left-0 w-1/6 h-auto" src={logo} alt="Description of the image" />
      <img className="absolute top-0 right-0 w-1/6 h-auto transform scale-x-[-1]" src={logo} alt="Description of the image" />
      <img className="absolute bottom-0 left-0 w-1/6 h-auto transform scale-y-[-1]" src={logo} alt="Description of the image" />
      <img className="absolute bottom-0 right-0 w-1/6 h-auto transform scale-y-[-1] transform scale-x-[-1]" src={logo} alt="Description of the image" />
      {/* <div>
        <Lottie animationData={fakatsymbol} />
      </div> */}
      <div class="absolute w-full flex justify-center bottom-0 mb-4">
      </div>
      <div class="absolute w-full flex justify-center bottom-0 mb-4">
        <img class="w-1/6 h-auto" src={name} alt="Description of the image" />
      </div>

      <div class=" relative h-screen flex justify-center items-center">

        <div class="flex flex-col items-center">

          <Link to={'../login'}>
            <button class="bg-fakatred hover:bg-fakatred text-fakatcolor font-bold py-3 w-64 px-20 rounded-full mb-12">
              Login
            </button>
          </Link>
          <Link to={'../signup'}>
            <button class="bg-fakatcolor hover:bg-eee2df text-fakatred font-bold py-3  w-64 px-20 rounded-full mb-12">
              Signup
            </button>
          </Link>
        </div>
      </div>
    </div>

  );

}

