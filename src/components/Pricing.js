import React from 'react';
import './Pricing.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa';
import { FaCogs } from 'react-icons/fa';
import { BsBellFill } from 'react-icons/bs';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>How Chrid Works</h1>
          <div className='pricing__container'>
            <Link className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <FaBook />
                </div>
                <h3>STEP 1</h3>
                <h5>Book a Ride</h5>
                <ul className='pricing__container-features'>
                  <li>Simply download the Chrid App to get started. Easily set up one-time and repeating rides for students in the Chrid Platform — rides are guaranteed.</li>
                </ul>
              </div>
            </Link>

            <Link className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <FaCogs />
                </div>
                <h3>STEP 2</h3>
                <h5>Connect With Drivers</h5>
                <ul className='pricing__container-features'>
                  <li>The Chrid Platform connects you with a network of Background-checked and fingerprinted Drivers who are trained to transport kids.</li>
                </ul>
              </div>
            </Link>

            <Link className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <FaMapMarkerAlt />
                </div>
                <h3>STEP 3</h3>
                <h5>Follow the Ride</h5>
                <ul className='pricing__container-features'>
                  <li>Get alerts for each stage of the ride and view the ride as it's happening. Real-time updates and tracking of driver location. Talk to driver or sitter directly.</li>
                </ul>
              </div>
            </Link>

            <Link className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <BsBellFill />
                </div>
                <h3>STEP 4</h3>
                <h5>Push Notifications</h5>
                <ul className='pricing__container-features'>
                  <li>Parents receive a push notification and text to their phone when the driver has arrived at pick up and safely reached your child’s destination.</li>
                </ul>
              </div>
            </Link>

          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;
