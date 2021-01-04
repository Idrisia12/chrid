import React from 'react';
import './Footer.css';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join our exclusive membership to receive the latest news and trends
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Quick Links</h2>
            <Link to='/story'>ABOUT</Link>
            <Link to='/'>SCHOOLS</Link>
            <Link to='/'>DRIVERS</Link>
            <Link to='/'>PARENTS</Link>
            <Link to='/'>CONTACT US</Link>
          </div>

        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Quick Links</h2>
            <Link to='/'>CAREERS</Link>
            <Link to='/'>POLICIES</Link>
            <Link to='/'>TERSMS OF SERVICE </Link>
            <Link to='/'>BLOG</Link>
          </div>

        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div>
              <small className='website-rights'>CHRID © 2020</small>
          </div>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to={
                '//www.Instagram.com'
              }
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link'
              to={
                '//www.youtube.com'
              }
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link>
            <Link
              className='social-icon-link'
              to={
                '//www.twitter.com'
              }
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link
              className='social-icon-link'
              to={
                '//www.LinkedIn.com'
              }
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
