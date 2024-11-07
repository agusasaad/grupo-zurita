import AboutUs from '../aboutUs/AboutUs'
import Proyectos from '../proyectos/Proyectos'
import Servicios from '../servicios/Servicios'
import styles from './Main.module.css'

export const Main = () => {
  return (
    <main className={styles.main}>
      <Servicios />
      <AboutUs />
      <Proyectos />
    </main>
  )
}
