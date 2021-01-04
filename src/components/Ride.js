import React from 'react';
import './Ride.css';
import find from './a.jpg'
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>Why Drive for <strong>Chrid?</strong></h1>

          <div className='pricing__container'>
            <Link className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <img src={find} alt="done" width="135"/>
                </div>
                <h5>Good Pay</h5>
                <p>Get a activation bonus for your first job, pay immediately after service and also earn extra tips from satisfied parents</p>
              </div>
            </Link>

            <Link className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <BsXDiamondFill />
                </div>
                <h5>Flexibility</h5>
                <p>Pick your rides in advance and work when you want. Be in control of your day.</p>
                <p>Choose rides in your area that best fit your own schedule.</p>
              </div>
            </Link>

            <Link className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <GiCrystalize />
                </div>
                <h5>Support</h5>
                <p>Our Team is available to support you on or off the Road.</p>
                <p>We also put aside a huge sum of money as Insurance and benefits</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;
