import React, { useState, useEffect, useRef } from 'react'
import styles from "./Footer.module.css"
import ArrowRightSVG from "./../SVG/ArrowRightSVG"
import axios from 'axios';

const Footer = ({allEventsRef, setSubmitError, setVisible}) => {
  const [email, setEmail] = useState("");
  const [validation, setValidation] = useState(true);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://636de0e191576e19e3326ef1.mockapi.io/all/Projects", {
        headers: {"email": email}
      })
      setSubmitError("")
      //console.log("done", email)
    } catch (error) {
      setSubmitError(error.message)
      //console.log(error.message)
    }
    setVisible(true)
    setEmail("")
  };

  const emailValidation = () => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9*-]+\.[a-z]{1,8}(.[a-z{2,8}])?/g
    setValidation(false)
    if(regEx.test(email)) {
      setValidation(true)
    }
  }

  const onChange = (e) => {
    setEmail(e.target.value)
    emailValidation()
  }

  return (
    <div className={styles.footer} >
      <form className={styles.form} onSubmit={e => onSubmit(e)} style={validation ? {} : {border: "4px solid red"}}>
        <input 
          value={email}
          onChange={(e) => onChange(e)}
          name='email'
          placeholder='Enter your Email and get notified' 
          className={styles.inputEmail} 
          type="email" 
        />
        <button disabled={validation ? false : true} style={validation ? {} : {background: "grey", cursor: "default"}} type="submit" className={styles.btn}>
          <ArrowRightSVG />
        </button>
      </form>

      <div onClick={() => window.scrollTo(0, allEventsRef.current.scrollHeight)} className={styles.arrowDown}>Other Events &#8595;</div>
    </div>
  )
}

export default Footer
