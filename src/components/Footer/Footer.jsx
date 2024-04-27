import React, { useState, useEffect, useRef } from 'react'
import styles from "./Footer.module.css"
import ArrowRightSVG from "./../SVG/ArrowRightSVG"
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Footer = () => {
  const { register, handleSubmit, formState: {errors, isSubmitSuccessful, isValidating}, formState } = useForm();
  const [email, setEmail] = useState("");
  const emailInput = useRef()

  const onSubmit = async (e) => {
    e.preventDefault();
    /*fetch("https://636de0e191576e19e3326ef1.mockapi.io/all/Projects", {
      method: "POST",
      body: e.target.value
    })
    .then(response => response.json())
    .catch((error) => { console.log(error); });*/
    setEmail(emailInput.current)
    try {
      await axios.post("https://636de0e191576e19e3326ef1.mockapi.io/all/Projects", {
        headers: {"email": email}
      })
      console.log("done", email)
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    //console.log(errors, isSubmitSuccessful, isValidating)
    //console.log(form)
  }, [errors]);

  return (
    <div className={styles.footer}>
      <form className={styles.form} onSubmit={e => handleSubmit(onSubmit(e))}>
        <input 
          ref={emailInput}
          /*value={email}
          onChange={(e) => setEmail(e.target.value)}*/
          style={errors.name ? {background: "black"} : {}}
          placeholder='Enter your Email and get notified' 
          className={styles.inputEmail} 
          type="email" 
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: 'Invalid email address',
            },
          })}
        />
        <button className={styles.btn}>
          <ArrowRightSVG />
        </button>
      </form>
    </div>
  )
}

export default Footer
