import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne } from './Data';
import Partner from '../../Partner';
import Drive from '../../Drive';

function Services() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <Partner />
      <Drive />
    </>
  );
}

export default Services;
