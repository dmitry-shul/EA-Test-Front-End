import React from 'react'
import styles from "./Button.module.css"
import ArrowRightSVG from "./../SVG/ArrowRightSVG"

const Button = () => {
  return (
    <div className={styles.button}>
      <a href="https://egorovagency.com/" target="_blank">
        <span>Go to the event</span>
        <ArrowRightSVG />
      </a>
    </div>
  )
}

export default Button
