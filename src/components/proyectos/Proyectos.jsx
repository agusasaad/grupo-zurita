'use client'
import Image from 'next/image'
import { dataProyectos } from './dataProyectos'
import styles from './Proyectos.module.css'
import Arrow from '@/assets/icon/Arrow'
import { useRef, useEffect } from 'react'
import ArrowLeftCarrucel from '@/assets/icon/ArrowLeftCarrucel'
import ArrowRigthCarrucel from '@/assets/icon/ArrowRigthCarrucel'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Proyectos = () => {
  const carrucelRef = useRef(null)

  useEffect(() => {
    if (window.innerWidth > 1200) {
      gsap.registerPlugin(ScrollTrigger)
      const cards = document.querySelectorAll(`.${styles.card}`)

      cards.forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'center 125%',
            end: 'left 0%',
            horizontal: true,
            onEnter: () => {
              gsap.fromTo(
                card,
                { opacity: 0, visibility: 'hidden', y: 200 },
                {
                  opacity: 1,
                  visibility: 'visible',
                  y: 0,
                  duration: 0.5,
                  ease: 'power3',
                  delay: 0.5,
                }
              )
            },
          },
        })
      })
    }
  }, [])

  const handleleftClick = () => {
    carrucelRef.current.scrollLeft -= 420
    ScrollTrigger.refresh()
  }

  const handleRightClick = () => {
    carrucelRef.current.scrollLeft += 420
    ScrollTrigger.refresh()
  }

  return (
    <div className={styles.container} id='projects'>
      <div className={styles.info_text}>
        <span>PROYECTOS</span>
        <div className={styles.title_button}>
          <h2>Obras Recientes</h2>
          <button>
            Ver Todos
            <Arrow color='var(--blood-orange)' width='16px' height='16px' />
          </button>
        </div>
      </div>
      <div className={styles.container_carrucel}>
        <div className={styles.carrucel_projects} ref={carrucelRef}>
          {dataProyectos.map((proyecto, index) => (
            <div key={index} className={styles.card}>
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
        <div className={styles.containerButtonLeft}>
          <button onClick={handleleftClick}>
            <ArrowLeftCarrucel />
          </button>
        </div>
        <div className={styles.containerButtonRigth}>
          <button onClick={handleRightClick}>
            <ArrowRigthCarrucel />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Proyectos
