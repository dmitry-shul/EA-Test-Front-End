import React, { useState } from 'react'
import styles from "./Accordion.module.css"
import AccordionItem from '../AccordionItem/AccordionItem'

const Accordion = () => {
  const [activeNow, setActiveNow] = useState(1);
  
  return (
    <div className={styles.accordion} >
      {
        ALL_EVENTS.map(item =>
          <AccordionItem item={item} key={item.id} activeNow={activeNow} setActiveNow={setActiveNow} />
        )
      }
    </div>
  )
}

export default Accordion

const ALL_EVENTS = [
  {id: 1, title: "Hawaiian party", num: "01", date: "13.02.2023", img: "./assets/images/accordion1.png", url: "https://fishka.by/"},
  {id: 2, title: "Мafia party", num: "02", date: "20.04.2023", img: "./assets/images/accordion2.png", url: "https://paramonak.by/"},
  {id: 3, title: "Party", num: "03", date: "02.05.2023", img: "./assets/images/accordion3.png", url: "https://kitchen-event.by/"},
  {id: 4, title: "Party on the beach", num: "04", date: "14.06.2023", img: "./assets/images/accordion4.png", url: "https://goodtime.by/"},
  {id: 5, title: "Home Security", num: "05", date: "17.09.2023", img: "./assets/images/accordion5.png", url: "https://newart.by/uslugi/event/"},
  {id: 6, title: "Network Design & Implementation", num: "06", date: "03.11.2023", img: "./assets/images/accordion6.png", url: "http://showcatalog.by/catalog/events/party/club-party/"},
  {id: 7, title: "System Design & Engineering", num: "07", date: "18.01.2024", img: "./assets/images/accordion7.png", url: "https://enj.by/"},
  {id: 8, title: "Client Care Plans", num: "08", date: "17.03.2024", img: "./assets/images/accordion8.png", url: "https://www.avan.by/"}
]
