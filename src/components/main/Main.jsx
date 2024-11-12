import AboutUs from '../aboutUs/AboutUs'
import ContactUs from '../contactUs/ContactUs'
import Header from '../header/Header'
import Proyectos from '../proyectos/Proyectos'
import Servicios from '../servicios/Servicios'
import styles from './Main.module.css'

export const Main = () => {
  return (
    <main className={styles.main}>
      {/* <Header /> */}
      <Servicios />
      <AboutUs />
      <Proyectos />
      <ContactUs />
    </main>
  )
}
