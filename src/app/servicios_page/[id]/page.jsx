'use client'
import { useParams } from 'next/navigation'
import styles from './page.module.css'
import { servicios } from '@/components/servicios/serviciosData'
import Image from 'next/image'
import ArrowLeftCarrucel from '@/assets/icon/ArrowLeftCarrucel'
import ArrowRigthCarrucel from '@/assets/icon/ArrowRigthCarrucel'
import { useEffect, useRef } from 'react'
import { animateServiciosPage } from '@/components/Animates/Animates'
import Link from 'next/link'

const Servicios_page = () => {
  const { id } = useParams()
  const numericId = Number(id)
  const totalPages = 4
  const proyecto = servicios.find((proyecto) => proyecto.id === id)

  const containerServicesPage = useRef(null)
  const subtitleRef = useRef(null)
  const titleRef = useRef(null)
  const lineRef = useRef(null)
  const carrucelRef = useRef(null)
  const cardsRef = useRef([])
  const buttonLeftRef = useRef(null)
  const buttonRightRef = useRef(null)

  useEffect(() => {
    animateServiciosPage(
      subtitleRef.current,
      titleRef.current,
      lineRef.current,
      cardsRef.current,
      buttonLeftRef.current,
      buttonRightRef.current
    )
  }, [])

  const handleleftClick = () => {
    carrucelRef.current.scrollLeft -= 420
  }

  const handleRightClick = () => {
    carrucelRef.current.scrollLeft += 420
  }

  // Calcular las páginas anterior y siguiente en forma cíclica
  const prevPage = numericId === 1 ? totalPages : numericId - 1
  const nextPage = numericId === totalPages ? 1 : numericId + 1

  return (
    <div className={styles.container} ref={containerServicesPage}>
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${proyecto?.backgroundImg_page?.src})` }}
      >
        <div className={styles.info}>
          <div className={styles.text}>
            <span ref={subtitleRef}>servicio</span>
            <h2 ref={titleRef}>{proyecto?.nombre}</h2>
            <div className={styles.line} ref={lineRef}></div>
          </div>
          <div className={styles.buttons}>
            <Link href={`/servicios_page/${prevPage}`} className={styles.left}>
              <button>
                <ArrowLeftCarrucel color='white' width='20px' height='20px' />
              </button>
            </Link>
            <Link href={`/servicios_page/${nextPage}`} className={styles.right}>
              <button>
                <ArrowRigthCarrucel color='white' width='20px' height='20px' />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.carrucel}>
        <div className={styles.container_carrucel}>
          <div className={styles.carrucel_projects} ref={carrucelRef}>
            {proyecto?.image_array?.map((proyecto, index) => (
              <div
                key={index}
                className={styles.card}
                ref={(el) => (cardsRef.current[index] = el)}
              >
                <Image
                  src={proyecto?.src}
                  width={500}
                  height={500}
                  alt='imagen de Grupo Zurita'
                  style={{
                    width: '450px',
                    height: '450px',
                    objectFit: 'cover',
                    objectPosition: 'left',
                  }}
                />
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
    </div>
  )
}

export default Servicios_page
