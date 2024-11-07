import Image from 'next/image'
import styles from './Footer.module.css'
import logo from '@/assets/image/LogoZurita.png'
import Link from 'next/link'
import Email from '@/assets/icon/Email'
import Facebook from '@/assets/icon/Facebook'
import Instagram from '@/assets/icon/Instagram'
import Whatsapp from '@/assets/icon/Whatsapp'
import Mobile from '@/assets/icon/Mobile'
import Location from '@/assets/icon/Location'
import Clock from '@/assets/icon/Clock'

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.full_content}>
        <div className={styles.content_list}>
          <div className={styles.logo}>
            <Image
              src={logo}
              alt='Logo'
              width={40}
              height={50}
              style={{ width: '40px', height: 'auto' }}
            />
            <span>
              Grupo<strong>Zurita.</strong>
            </span>
          </div>
          <div className={styles.list}>
            <h5>Información</h5>
            <ul>
              <Link href='/'>
                <li>
                  <Mobile />
                  +54 11 3930-9554
                </li>
              </Link>
              <Link href='/'>
                <li>
                  <Email color='#4B555D' />
                  consultas@grupozurita.com.ar
                </li>
              </Link>
              <Link href='/'>
                <li>
                  <Location />
                  Juan B. Justo 130 - Isidro Casanova
                </li>
              </Link>
              <Link href='/'>
                <li>
                  <Clock />
                  <p>LUN-VIE: 9:00 AM - 18:00 PM</p>
                </li>
              </Link>
            </ul>
          </div>
          <div className={styles.navigation}>
            <h5>Navegación</h5>
            <ul>
              <Link href='/'>
                <li>Inicio</li>
              </Link>
              <Link href='/'>
                <li>Servicios</li>
              </Link>
              <Link href='/'>
                <li>Sobre Nosotros</li>
              </Link>
              <Link href='/'>
                <li>Proyectos</li>
              </Link>
              <Link href='/'>
                <li>Contacto</li>
              </Link>
            </ul>
          </div>
          <div className={styles.social}>
            <h5>Redes Sociales</h5>
            <div className={styles.social_list}>
              <span>
                <Facebook color='white' />
              </span>
              <span>
                <Instagram color='white' />
              </span>
              <span>
                <Whatsapp color='white' />
              </span>
            </div>
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.copyright}>
          <p>© 2021, Todos los derechos reservados Grupo Zurita.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
