import Button from "../../components/Button/Button"
import Footer from "../../components/Footer/Footer"
import MainPageBackground from "../../components/MainPageBackground/MainPageBackground"
import Timer from "../../components/Timer/Timer"
import styles from "./MainPage.module.css"

const MainPage = () => {
  return (
    <>
      <div className={styles.main}>
        <MainPageBackground />
        <article className={styles.article}>
          <a className={styles.logo} href="/">
            <img src="./assets/images/logo.png" alt="Logo" />
          </a>
          <h1>Under Construction</h1>
          <p className={styles.text}>We're making lots of improvements and will be back soon</p>
          <Timer date="24.07.2024" />
          <div className={styles.eventBlock}>
            <p>Check our event page when you wait:</p>
            <Button />
          </div>
        </article>
      </div>

      <Footer />
    </>
  )
}

export default MainPage

