import styles from "./Timer.module.css"
import WaveSign from './../WaveSign/WaveSign.jsx'
import { useEffect, useState } from "react";

const signsName = ["Days", "Hours", "Minutes", "Seconds"]
const shortSignsName = ["DD", "HH", "MM", "SS"]

const Timer = ({date}, props) => {
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    let timer = setInterval(() => {
      countCurrentData()
    }, 1000)
    if(currentData == [0, 0, 0, 0]) {
      clearInterval(timer);
    }
  }, []);

  const countCurrentData = () => {
    const [year, month, day] = date.split(".").reverse()
    const targetDate = new Date(year, month.replace(/^0+/, '')-1, day, 0);
    const currentTime = targetDate.getTime()
    const currentDate = Date.now();
    const sec = (currentTime - currentDate) / 1000;
    const min = sec / 60;
    const hour = min / 60;
    let res = [Math.floor(hour / 24), Math.floor(hour % 24), Math.floor(min % 60), Math.floor(sec % 60)]
    res = res.map((item, i) => item<10 && i!==0 ? `0${item}` : item)
    setCurrentData(res) 
  }

  

  return (
    <div {...props} className={styles.timer}>
      {
        currentData.map((date, i) => 
          <div className={styles.signs} key={i}>
            <div className={styles.time}>{date}</div>
            <WaveSign text={window.innerWidth > 1100 ? signsName[i] : shortSignsName[i]} />
          </div>
        )
      }
    </div>
  )
}

export default Timer
