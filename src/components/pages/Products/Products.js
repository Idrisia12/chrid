import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne } from './Data';
import Drivers from '../../Drivers';
import Ride from '../../Ride';

function Products() {
  return (
    <>
      <Drivers />
      <Ride />
      <HeroSection {...homeObjOne} />
    </>
  );
}

export default Products;
