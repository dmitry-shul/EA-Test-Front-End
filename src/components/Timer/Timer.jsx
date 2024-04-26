import styles from "./Timer.module.css"
import WaveSign from './../WaveSign/WaveSign.jsx'

const signsName = ["Days", "Hours", "Minutes", "Seconds"]

const Timer = ({date}) => {

  const aaa = () => {
    const targetDate = Date.parse(`${date.split(".").reverse().join(".")} 00:00:00`);
    const dateNow = new Date().getTime()
    console.log(targetDate - dateNow)
    const a = new Date(targetDate - dateNow)
    console.log(a)
  }

  aaa()

  return (
    <div className={styles.timer}>
      {
        signsName.map(sign => 
          <div className={styles.sign} key={sign}>
            <div className={styles.time}>11</div>
            <WaveSign text={sign} />
          </div>
        )
      }
    </div>
  )
}

export default Timer
