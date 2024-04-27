import React from 'react'
import styles from "./Popup.module.css"

export default function Popup({visible, setVisible, ...props}) {
  const stykeClasses = [styles.modal];

  if(visible) {
    stykeClasses.push(styles.active);
  }

  return (
    <div className={stykeClasses.join(" ")} onClick={() => setVisible(false)}>
      <div className={props.classModal ? props.classModal : styles.popup} onClick={(e) => e.stopPropagation()}>
        <h3>SUCCESS!</h3>
        <p>You have successfully subscribed to the email newsletter</p>
        <div className={styles.btn} onClick={() => setVisible(false)}>Close</div>
        <div className={styles.closeCross} onClick={() => setVisible(false)}></div>
      </div>
    </div>
  );
}