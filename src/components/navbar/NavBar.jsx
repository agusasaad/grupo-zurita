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

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    if (window.innerWidth > 1200) {
      AnimateNav(navRef.current)
    }
  }, [])
  return (
    <nav className={styles.containerNav}>
      <div
        className={`${styles.nav} ${showMenu ? styles.show : ''}`}
        ref={navRef}
      >
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
        <div className={styles.menu}>
          <ul>
            <li>INICIO</li>
            <li>SERVICIOS</li>
            <li>SOBRE NOSOTROS</li>
            <li>PROYECTOS</li>
            <li>CONTACTANOS</li>
          </ul>
          <div className={styles.button}>
            <div className={styles.info}>
              <span>
                <Phone width='18px' height='18px' color='white' />
              </span>
              <p>+54 11 3930-9554</p>
            </div>
            <div className={styles.info}>
              <span>
                <Email width='18px' height='18px' color='white' />
              </span>
              <p>consultas@grup...</p>
            </div>
            <button className={styles.button_contact}>
              obtener cotización
              <Arrow width='15px' height='15px' />
            </button>
          </div>
        </div>
        <div className={styles.hamburguer}>
          <button onClick={() => setShowMenu(!showMenu)}>
            <Hamburguer color='white' width='32px' height='32px' />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
