import React from 'react';
import { Per } from '../assets/images';
import './Hero.css';

const Hero = () => {
  return (
    <section className='container grid grid-cols-1 md:grid-cols-2 justify-between items-center h-full mx-auto sm:mt-[180px] mt-[90px]'>
      <div className="floating-image mx-auto"> {/* Add mx-auto class here */}

        <img src={Per} alt="me" />
      </div>

      <div className='flex justify-center md:justify-start md:text-left mt-8 md:mt-0'>
        <div className="text-center md:text-left mx-2">
          <h1 className='font-bold font-montserrat text-5xl '>Hi, I'm <span className='text-blue-500'>Bishal</span></h1>
          <p className='pt-0.5 font-semibold font-palanquin text-orange-500 text-[20px]'>Software Developer, Freelancer, Learner</p>
          <p className='font-semibold font-palanquin text-lg'>I'm passionate about crafting clean code and building innovative software solutions. With a knack for problem-solving, I thrive in dynamic environments where I can constantly learn and grow. Whether it's developing user-friendly applications, optimizing algorithms for efficiency, or collaborating with teams to deliver exceptional results, I'm dedicated to making a positive impact through technology. Let's turn ideas into reality!
          </p>
        </div>

      </div>
    </section>
  );
};

export default Hero;
