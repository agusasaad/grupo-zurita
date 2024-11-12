'use client'
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
import { useEffect, useRef } from 'react'
import { animateFooter } from '../Animates/Animates'
import { usePathname } from 'next/navigation'

const Footer = () => {
  const params = usePathname()

  const containerFooter = useRef(null)
  const logoRef = useRef(null)
  const listNavigationRef = useRef(null)
  const listInfoRef = useRef(null)
  const listSocialRef = useRef(null)
  const lineRef = useRef(null)
  const copyrightRef = useRef(null)

  useEffect(() => {
    animateFooter(
      containerFooter.current,
      logoRef.current,
      listInfoRef.current,
      listNavigationRef.current,
      listSocialRef.current,
      lineRef.current,
      copyrightRef.current
    )
  })
  return (
    <footer className={styles.container} ref={containerFooter}>
      <div className={styles.full_content}>
        <div className={styles.content_list}>
          <div className={styles.logo} ref={logoRef}>
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
          <div className={styles.list} ref={listInfoRef}>
            <h5>Información</h5>
            <ul>
              <Link href='https://wa.me/+5491139309554' target='_blank'>
                <li>
                  <Mobile />
                  +54 11 3930-9554
                </li>
              </Link>
              <Link href='mailto:consultas@grupozurita.com.ar' target='_blank'>
                <li>
                  <Email color='#4B555D' />
                  consultas@grupozurita.com.ar
                </li>
              </Link>
              <Link
                href='https://www.google.com/maps/place/Juan+B.+Justo+130,+Isidro+Casanova'
                target='_blank'
              >
                <li>
                  <Location />
                  Juan B. Justo 130 - Isidro Casanova
                </li>
              </Link>
              <li>
                <Clock />
                <p>LUN-VIE: 9:00 AM - 18:00 PM</p>
              </li>
            </ul>
          </div>
          <div className={styles.navigation} ref={listNavigationRef}>
            <h5>Navegación</h5>
            <ul>
              <Link href={params === '/' ? '#home' : '/#home'}>
                <li>Inicio</li>
              </Link>
              <Link href={params === '/' ? '#services' : '/#services'}>
                <li>Servicios</li>
              </Link>
              <Link href={params === '/' ? '#aboutUs' : '/#aboutUs'}>
                <li>Sobre Nosotros</li>
              </Link>
              <Link href={params === '/' ? '#projects' : '/#projects'}>
                <li>Proyectos</li>
              </Link>
              <Link href={params === '/' ? '#contactUs' : '/#contactUs'}>
                <li>Contacto</li>
              </Link>
            </ul>
          </div>
          <div className={styles.social} ref={listSocialRef}>
            <h5>Redes Sociales</h5>
            <div className={styles.social_list}>
              <Link
                href='https://www.facebook.com/profile.php?id=100081852496191'
                target='_blank'
              >
                <span>
                  <Facebook color='white' />
                </span>
              </Link>
              <Link
                href='https://www.instagram.com/grupozurita/?hl=es'
                target='_blank'
              >
                <span>
                  <Instagram color='white' />
                </span>
              </Link>
              <Link href='https://wa.me/+5491139309554' target='_blank'>
                <span>
                  <Whatsapp color='white' />
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.divider} ref={lineRef}></div>
        <div className={styles.copyright} ref={copyrightRef}>
          <p>© 2021, Todos los derechos reservados Grupo Zurita.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
