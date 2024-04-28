import React, { useState } from 'react'
import styles from "./AccordionItem.module.css"

const AccordionItem = ({item, activeNow, setActiveNow}) => {
  const [active, setActive] = useState(true);

  const activate = () => {
    setActiveNow(item.id)
  }

  return (
    <section className={activeNow == item.id ? styles.accordion__item : [styles.accordion__item, styles.accordion__item_active].join(" ") } /*style={activeNow == item.id ? {} : window.innerWidth > 1550 ? {width: "85px"} : {height: "85px"}}*/>
      <div className={styles.item__header} onClick={activate} 
      style={activeNow !== item.id ? {backgroundImage: `url(${item.img})`} : {}} >
        <div className={styles.item__wrap}>
          <h4>{item.title}</h4>
          <p>{item.num}</p>
        </div>
      </div>

      <div className={styles.item__content} style={{backgroundImage: `url(${item.img})`}}>
        <div className={styles.info}>
          <h5>{item.title}</h5>
          <p>{item.date}</p>
          <div className={styles.info__btn}>
            <a href={item.url} target="_blank">More information</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AccordionItem