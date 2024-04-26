import MainPageBackground from "../../components/MainPageBackground/MainPageBackground"
import Timer from "../../components/Timer/Timer"
import styles from "./MainPage.module.css"

const MainPage = () => {
  return (
    <>
      <div className={styles.main}>
        <MainPageBackground />
        <article>
          <img src="./assets/images/logo.png" alt="Logo" />
          <h1>Under Construction</h1>
          <p>We're making lots of improvements and will be back soon</p>
          <Timer date="24.07.2024" />
        </article>
      </div>

      <div className={styles.footer}>
        {/*вынести в компонент*/}
      </div>
    </>
  )
}

export default MainPage

