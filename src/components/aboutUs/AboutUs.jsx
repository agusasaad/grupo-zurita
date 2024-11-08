'use client'
import styles from './AboutUs.module.css'
import Image from 'next/image'
import image_about from '@/assets/image/about-back.png'
import { useState } from 'react'
import TextCircular from './textCircular/TextCircular'

const AboutUs = () => {
  const [showMore, setShowMore] = useState(false)
  return (
    <div className={styles.container} id='aboutUs'>
      <div className={styles.info_text}>
        <span>SOBRE NOSOTROS</span>
        <h2>Grupo Zurita</h2>
        <p className={`${styles.description} ${showMore ? styles.show : ''}`}>
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
        >
          {showMore ? 'Ver menos' : 'Ver más'}
        </button>
      </div>
      <div className={styles.image_container}>
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
        <TextCircular text='GRUPO ZURITA - 34 AÑOS DE EXPERENCIA - ' />
      </div>
    </div>
  )
}

export default AboutUs
