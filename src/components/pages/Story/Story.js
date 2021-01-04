import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjThree} from './Data';

function Story() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
    </>
  );
}

export default Story;
