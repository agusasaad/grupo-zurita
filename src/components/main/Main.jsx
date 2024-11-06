import AboutUs from '../aboutUs/AboutUs'
import Servicios from '../servicios/Servicios'
import styles from './Main.module.css'

export const Main = () => {
  return (
    <div className={styles.main}>
      <Servicios />
      <AboutUs />
    </div>
  )
}
