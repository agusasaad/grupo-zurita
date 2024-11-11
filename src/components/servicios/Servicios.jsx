'use client'
import Arrow from '@/assets/icon/Arrow'
import styles from './Servicios.module.css'
import { servicios } from './serviciosData'
import ArrowRigth from '@/assets/icon/ArrowRigth'
import { useEffect, useRef } from 'react'
import { animateServices } from '../Animates/Animates'
import Link from 'next/link'

const Servicios = () => {
  const containerServices = useRef(null)
  const cardContainerRef = useRef(null)
  const subtitleRef = useRef(null)
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    animateServices(
      containerServices.current,
      cardContainerRef.current,
      subtitleRef.current,
      titleRef.current,
      descriptionRef.current,
      buttonRef.current
    )
  }, [])

  return (
    <div className={styles.container} id='services' ref={containerServices}>
      <div className={styles.card_container} ref={cardContainerRef}>
        {servicios.map((servicio, index) => (
          <div
            key={index}
            className={styles.card}
            style={{ backgroundImage: `url(${servicio.backgroundImg.src})` }}
          >
            <div className={styles.containerInfo}>
              <i className={styles.icon}>{servicio.icon}</i>
              <h3>{servicio.nombre}</h3>
              <p>{servicio.descripcion}</p>
              <div className={styles.button_card}>
                <Link
                  href={`/servicios_page/${index + 1}`}
                  className={styles.link}
                >
                  <ArrowRigth />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.info_text}>
        <span ref={subtitleRef}>NUESTROS SERVICIOS</span>
        <h2 ref={titleRef}>Soluciones para tus espacios</h2>
        <p ref={descriptionRef}>
          Ofrecemos una amplia gama de servicios personalizados en construcción,
          aberturas y más, pensados para satisfacer las necesidades de cada
          proyecto con altos estándares de calidad y atención al detalle.
          Explora nuestras soluciones y descubre cómo podemos ayudarte a
          construir tus ideas.
        </p>
        <div className={styles.button} ref={buttonRef}>
          <button>
            Ver Más
            <Arrow color='var(--blood-orange)' width='16px' height='16px' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Servicios
