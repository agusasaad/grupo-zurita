'use client'
import styles from './AboutUs.module.css'
import Image from 'next/image'
import image_about from '@/assets/image/about-back.png'
import { useEffect, useRef, useState } from 'react'
import TextCircular from './textCircular/TextCircular'
import { animateAboutUs } from '../Animates/Animates'

const AboutUs = () => {
  const [showMore, setShowMore] = useState(false)
  const containerAboutRef = useRef(null)
  const subtitleRef = useRef(null)
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const buttonRef = useRef(null)
  const imageRef = useRef(null)
  const textCircularRef = useRef(null)

  useEffect(() => {
    animateAboutUs(
      containerAboutRef.current,
      subtitleRef.current,
      titleRef.current,
      descriptionRef.current,
      buttonRef.current,
      imageRef.current,
      textCircularRef.current
    )
  }, [])

  return (
    <div className={styles.container} id='aboutUs' ref={containerAboutRef}>
      <div className={styles.info_text}>
        <span ref={subtitleRef}>SOBRE NOSOTROS</span>
        <h2 ref={titleRef}>Grupo Zurita</h2>
        <p
          className={`${styles.description} ${showMore ? styles.show : ''}`}
          ref={descriptionRef}
        >
          Somos una empresa familiar surgida en el año 1984 en Buenos Aires.
          Desde nuestros inicios, acompañamos el crecimiento exponencial de la
          industria de la construcción brindando productos, servicios y
          asesoramiento personalizado con alto valor agregado para que junto a
          nuestros clientes creemos un lazo de confianza y desarrollo que
          perdure en el tiempo.
          <br />
          <br />
          Creemos firmemente en la estrategia de la diferenciación de servicio
          con valor agregado, por eso día a día, nos enfocamos en encontrar las
          mejores herramientas para satisfacer las necesidades del cliente.
        </p>
        <button
          className={styles.button_show_more}
          onClick={() => setShowMore(!showMore)}
          ref={buttonRef}
        >
          {showMore ? 'Ver menos' : 'Ver más'}
        </button>
      </div>
      <div className={styles.image_container} ref={imageRef}>
        <Image
          className={styles.image}
          src={image_about}
          width={700}
          height={500}
          alt='imagen de Grupo Zurita'
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
        <div className={styles.text_container} ref={textCircularRef}>
          <TextCircular text='GRUPO ZURITA - 34 AÑOS DE EXPERENCIA - ' />
        </div>
      </div>
    </div>
  )
}

export default AboutUs
