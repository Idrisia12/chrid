import React from 'react';
import { useForm } from 'react-hook-form';

import './Drive.css';
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
        <h1>Contact Chrid Today!</h1>
        <h2>Does your school or district need transportation? Learn more about how we can help?</h2>
        <h2>Reach out to schedule a personalized demo with our team. We’ll show you how Chrid can make your school transportation better.</h2>
      </section>

      <section className='signup'>

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

          <div className="inputContainer">
            <input
              className= {errors.nname   && "error-input"}
              name="name"
              placeholder="School Name"
              type="name"
              ref={register({ required: true })}
            />
            {errors.name && <img src={ErrorIcon} alt="error icon"/>}
            {errors.name &&  <p className="error-message">Organization Name cannot be empty</p>}
          </div>

            <button className="button"type="submit">SUBMIT </button>
            <p className="term-service">By clicking button you are agreeing to our <a href="/">Terms and Service</a> </p>
          </form>
        </section>
      </section>

    </div>
    </body>
  );
}
