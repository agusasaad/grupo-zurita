'use client'
import Image from 'next/image'
import { dataProyectos } from './dataProyectos'
import styles from './Proyectos.module.css'
import Arrow from '@/assets/icon/Arrow'
import { useRef, useEffect } from 'react'
import ArrowLeftCarrucel from '@/assets/icon/ArrowLeftCarrucel'
import ArrowRigthCarrucel from '@/assets/icon/ArrowRigthCarrucel'
import { animateProyectos } from '../Animates/Animates'
import touch_gif from '@/assets/image/gif.gif'
import Link from 'next/link'

const Proyectos = () => {
  const containerProyectos = useRef(null)
  const subtitleRef = useRef(null)
  const titleRef = useRef(null)
  const buttonRef = useRef(null)
  const carrucelRef = useRef(null)
  const cardsRef = useRef([])
  const buttonLeftRef = useRef(null)
  const buttonRightRef = useRef(null)
  const touchAnimationRef = useRef(null)

  useEffect(() => {
    animateProyectos(
      containerProyectos.current,
      subtitleRef.current,
      titleRef.current,
      buttonRef.current,
      cardsRef.current,
      buttonLeftRef.current,
      buttonRightRef.current,
      touchAnimationRef.current
    )
  }, [])

  const handleleftClick = () => {
    carrucelRef.current.scrollLeft -= 420
  }

  const handleRightClick = () => {
    carrucelRef.current.scrollLeft += 420
  }

  return (
    <div className={styles.container} id='projects' ref={containerProyectos}>
      <div className={styles.info_text}>
        <span ref={subtitleRef}>PROYECTOS</span>
        <div className={styles.title_button}>
          <h2 ref={titleRef}>Obras Recientes</h2>
          <Link href={'/servicios_page/1'}>
            <button ref={buttonRef}>
              Ver Todos
              <Arrow color='var(--blood-orange)' width='16px' height='16px' />
            </button>
          </Link>
        </div>
      </div>
      <div className={styles.container_carrucel}>
        <div className={styles.touchAnimation} ref={touchAnimationRef}>
          <Image src={touch_gif} alt='imagen gif' width={500} height={500} />
        </div>
        <div className={styles.carrucel_projects} ref={carrucelRef}>
          {dataProyectos.map((proyecto, index) => (
            <div
              key={index}
              className={styles.card}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <Image
                src={proyecto.imagen.src}
                width={1000}
                height={1000}
                alt='imagen de Grupo Zurita'
                style={{
                  width: '400px',
                  height: '470px',
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />
              <div className={styles.text}></div>
            </div>
          ))}
        </div>
        <div className={styles.containerButtonLeft} ref={buttonLeftRef}>
          <button onClick={handleleftClick}>
            <ArrowLeftCarrucel />
          </button>
        </div>
        <div className={styles.containerButtonRigth} ref={buttonRightRef}>
          <button onClick={handleRightClick}>
            <ArrowRigthCarrucel />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Proyectos
