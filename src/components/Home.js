// src/components/Home.js

import React from "react";
import {FaLinkedinIn} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaKaggle} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import {FaEnvelope} from 'react-icons/fa';



export default function Home() {
  return (
    <section id="home">
      <div className="container mx-auto flex px-10 py-14   md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-60  md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hello, World!
            <br />you've reached <span className="text-gray-900 bg-green-500  pl-1">Jerin.</span>
          </h1>
          <p className="mb-8 leading-relaxed">
            Currently working as an Associate at <a rel='noopener noreferrer' href='https://www.zs.com/' target='_blank' className='text-green-500 hover:text-green-500 hover:underline'>ZS Associates</a>, I am a Computer Science Graduate 
            who loves tinkering with data and developing apps.
          </p>
          <div className="pl-1 flex justify-center">            
            <a rel="noreferrer noopener" href='mailto:vjerin99@gmail.com' target='_blank' className="icon " ><FaEnvelope size={20}/></a>
            <a rel="noreferrer noopener" href='https://www.linkedin.com/in/vjerin/' target='_blank' className="icon pl-3" ><FaLinkedinIn size={20}/></a>
            <a rel="noreferrer noopener" href='https://github.com/vjerin' target='_blank' className="icon pl-3" ><FaGithub size={20}/></a>
            <a rel="noreferrer noopener" href='https://www.kaggle.com/vjerin99' target='_blank' className="icon pl-3" ><FaKaggle size={20}/></a>
            <a rel="noreferrer noopener" href='https://twitter.com/jerin_phil413' target='_blank' className="icon pl-3" ><FaTwitter size={20}/></a>

            </div> 
        </div>
        <div className="lg:ml-28 lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
          <img
            className="rounded-l-full"
            alt="jerin varghese"
            src="./dp-bw.jpg"
          />
        </div>
      </div>
    </section>

  );
} 