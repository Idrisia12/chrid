import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne } from './Data';

function Started() {
  return (
    <>
       <HeroSection {...homeObjOne} />
    </>
  );
}

export default Started;
