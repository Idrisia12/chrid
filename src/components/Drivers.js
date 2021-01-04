import React from 'react';
import { useForm } from 'react-hook-form';

import './Drivers.css';
import ErrorIcon from './icon.svg'

export default function Signup() {
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = data => {
    alert(JSON.stringify(data));
  };

  return (
    <body className="body">
    <div className='signup-container'>
      <section className='apresentation'>
        <h1>Make Money while helping Parents and Schools</h1>
        <h2>We're in the business of helping families, so we need drivers who want to go the extra mile to keep kids safe and happy, and keep their parents informed.</h2>
      </section>

      <section className='signup'>
      <div className='announcement'>
          <p>Interested in working with us?</p>
        </div>

        <section className='form'>
          <form onSubmit={handleSubmit(onSubmit)}>
          <div className="inputContainer">
            <input
            capture
              className= {errors.firstName  && "error-input"}
              name="firstName"
              placeholder="First Name"
              ref={register({ required: true })}
            />
            {errors.firstName && <img src={ErrorIcon} alt="error icon"/>}
            {errors.firstName && <p className="error-message">First name cannot be empty</p>}
          </div>

          <div className="inputContainer">
            <input
              className= {errors.lastName  && "error-input"}
              name="lastName"
              placeholder="Last Name"
              ref={register({ required: true })}
            />
            {errors.lastName && <img src={ErrorIcon} alt="error icon"/>}
            {errors.lastName && <p className="error-message">Last name cannot be empty</p>}
          </div>

          <div className="inputContainer">
            <input
              className= {errors.email  && "error-input"}
              name="email"
              placeholder="Email Address"
              type="email"
              ref={register({ required: true })}
            />
            {errors.email && <img src={ErrorIcon} alt="error icon"/>}
            {errors.email && <p className="error-message">Looks like this is not an email</p>}
          </div>

          <div className="inputContainer">
            <input
              className= {errors.number  && "error-input"}
              name="number"
              placeholder="Phone Number"
              type="number"
              ref={register({ required: true })}
            />
            {errors.number && <img src={ErrorIcon} alt="error icon"/>}
            {errors.number &&  <p className="error-message">Phone number cannot be empty</p>}
          </div>

            <button className="button"type="submit">APPLY ONLINE</button>
            <p className="term-service">By clicking button you are agreeing to our <a href="/">Terms and Service</a> </p>
          </form>
        </section>
      </section>

    </div>
    </body>
  );
}
