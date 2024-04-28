import React from 'react'
import styles from "./Popup.module.css"

export default function Popup({visible, setVisible, submitError, ...props}) {
  const stykeClasses = [styles.modal];

  if(visible) {
    stykeClasses.push(styles.active);
  }

  return (
    <div className={stykeClasses.join(" ")} onClick={() => setVisible(false)}>
      <div className={props.classModal ? props.classModal : styles.popup} onClick={(e) => e.stopPropagation()}>
        <h3>{submitError === "" ? "SUCCESS!" : submitError}</h3>
        <p>{submitError === "" ? "You have successfully subscribed to the email newsletter" : "Try again later"}</p>
        <div className={styles.btn} onClick={() => setVisible(false)}>Close</div>
        <div className={styles.closeCross} onClick={() => setVisible(false)}></div>
      </div>
    </div>
  );
}