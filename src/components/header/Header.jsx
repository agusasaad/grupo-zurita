'use client'
import { useState, useEffect } from 'react'
import Arrow from '@/assets/icon/Arrow'
import styles from './Header.module.css'
import image_one from '@/assets/image/image_one.jpg'
import image_two from '@/assets/image/image_two.jpg'
import image_three from '@/assets/image/image_three.jpg'

const images = [image_three, image_one, image_two]

const Header = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(false)

  useEffect(() => {
    // Preload images
    const preloadImages = (imageArray) => {
      return Promise.all(
        imageArray.map((image) => {
          return new Promise((resolve) => {
            const img = new Image()
            img.src = image.src
            img.onload = resolve
          })
        })
      )
    }

    preloadImages(images).then(() => {
      setIsTransitionEnabled(true)
      const intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
      }, 5000)

      return () => clearInterval(intervalId)
    })
  }, [])

  return (
    <header className={styles.container} id='home'>
      {images.map((image, index) => (
        <div
          key={index}
          className={`${styles.image} ${
            currentImageIndex === index ? styles.visible : ''
          }`}
          style={{ backgroundImage: `url(${image.src})` }}
        />
      ))}
      <div className={styles.overlay}>{/* Tu contenido aquí */}</div>
    </header>
  )
}

export default Header

{
  /* <div className={styles.content}>
          <h1>Construcción & Aberturas de Calidad</h1>
          <p>
            Acompañando el crecimiento exponencial de la industria de la
            construcción.
          </p>
          <div className={styles.button_container}>
            <button className={styles.services}>NUESTROS SERVICIOS</button>
            <button className={styles.cotization}>
              obtener cotización
              <Arrow width='15px' height='15px' />
            </button>
          </div>
        </div> */
}
