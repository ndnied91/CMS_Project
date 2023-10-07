import React from 'react';

import heroImg from '../assets/hero.svg';

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            voluptate magnam esse earum a cumque, nihil voluptas nobis dolorum
            vitae cum harum, excepturi repudiandae maxime dolor odit nostrum.
            Dolor, sit.
          </p>
        </div>

        <div className="img-container">
          <img src={heroImg} alt="img" className="img" />
        </div>
      </div>
    </div>
  );
};
