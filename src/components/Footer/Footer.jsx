import React from 'react'
import styles from "./Footer.module.css"
import ArrowRightSVG from "./../SVG/ArrowRightSVG"

const Footer = () => {
  return (
    <div className={styles.footer}>
      <form className={styles.form}>
        <input placeholder='Enter your Email and get notified' className={styles.inputEmail} type="email" />
        <button className={styles.btn}>
          <ArrowRightSVG />
        </button>
      </form>
    </div>
  )
}

export default Footer
