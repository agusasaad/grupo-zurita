'use client'
import { useEffect, useRef, useState } from 'react'
import { AnimateNav } from './Animate'
import styles from './NavBar.module.css'
import Hamburguer from '@/assets/icon/Hamburguer'
import Image from 'next/image'
import logo from '@/assets/image/LogoZurita.png'
import Arrow from '@/assets/icon/Arrow'
import Phone from '@/assets/icon/Phone'
import Email from '@/assets/icon/Email'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const navRef = useRef(null)
  const mensaje = encodeURIComponent(
    'Hola, estoy interesado en recibir una cotización para aberturas de PVC y otros servicios relacionados. ¿Podrían enviarme más detalles y precios?'
  )
  const params = usePathname()

  useEffect(() => {
    if (window.innerWidth > 1200) {
      AnimateNav(navRef.current)
    }
  }, [])
  return (
    <header className={styles.containerNav}>
      <nav
        className={`${styles.nav} ${showMenu ? styles.show : ''}`}
        ref={navRef}
      >
        <Link href={'/'} onClick={() => setShowMenu(false)}>
          <div className={styles.logo}>
            <Image
              src={logo}
              alt='Logo'
              width={50}
              height={50}
              style={{ width: '40px', height: 'auto' }}
            />
            <span>
              Grupo<strong>Zurita</strong>
            </span>
          </div>
        </Link>
        <div className={styles.menu}>
          <ul>
            <Link
              className={styles.link}
              href={params === '/' ? '#home' : '/#home'}
              onClick={() => setShowMenu(false)}
            >
              <li>INICIO</li>
            </Link>
            <Link
              className={styles.link}
              href={params === '/' ? '#services' : '/#services'}
              onClick={() => setShowMenu(false)}
            >
              <li>SERVICIOS</li>
            </Link>
            <Link
              className={styles.link}
              href={params === '/' ? '#aboutUs' : '/#aboutUs'}
              onClick={() => setShowMenu(false)}
            >
              <li>SOBRE NOSOTROS</li>
            </Link>
            <Link
              className={styles.link}
              href={params === '/' ? '#projects' : '/#projects'}
              onClick={() => setShowMenu(false)}
            >
              <li>PROYECTOS</li>
            </Link>
            <Link
              className={styles.link}
              href={params === '/' ? '#contactUs' : '/#contactUs'}
              onClick={() => setShowMenu(false)}
            >
              <li>CONTACTANOS</li>
            </Link>
          </ul>
          <div className={styles.button}>
            <Link
              href='https://wa.me/+5491139309554'
              target='_blank'
              onClick={() => setShowMenu(false)}
            >
              <div className={styles.info}>
                <span>
                  <Phone width='18px' height='18px' color='white' />
                </span>
                <p>+54 11 3930-9554</p>
              </div>
            </Link>
            <Link
              href='mailto:consultas@grupozurita.com.ar'
              target='_blank'
              onClick={() => setShowMenu(false)}
            >
              <div className={styles.info}>
                <span>
                  <Email width='18px' height='18px' color='white' />
                </span>
                <p>consultas@grup...</p>
              </div>
            </Link>
            <Link
              href={`https://wa.me/+541139309554?text=${mensaje}`}
              target='_blank'
              className={styles.link_button}
              onClick={() => setShowMenu(false)}
            >
              <button className={styles.button_contact}>
                obtener cotización
                <Arrow width='15px' height='15px' />
              </button>
            </Link>
          </div>
        </div>
        <div className={styles.hamburguer}>
          <button onClick={() => setShowMenu(!showMenu)}>
            <Hamburguer color='white' width='32px' height='32px' />
          </button>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
