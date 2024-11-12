'use client'
import { useState, useEffect, useRef } from 'react'
import Arrow from '@/assets/icon/Arrow'
import styles from './Header.module.css'
import image_one from '@/assets/image/image_one.jpg'
import image_two from '@/assets/image/image_two.jpg'
import image_three from '@/assets/image/image_three.jpg'
import Link from 'next/link'
import { animateInicio } from '../Animates/Animates'

const images = [image_three, image_one, image_two]

const Header = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(false)
  const subtitleRef = useRef(null)
  const titleRef = useRef(null)
  const titleMobileRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    animateInicio(
      subtitleRef.current,
      titleRef.current,
      titleMobileRef.current,
      buttonRef.current
    )
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
    <section className={styles.container} id='home'>
      {images.map((image, index) => (
        <div
          key={index}
          className={`${styles.image} ${
            currentImageIndex === index ? styles.visible : ''
          }`}
          style={{ backgroundImage: `url(${image.src})` }}
        />
      ))}
      <div className={styles.overlay}>
        <div className={styles.content}>
          <span ref={subtitleRef}>
            - Confianza en Construcción desde 1984 -
          </span>
          <h1 className={styles.title_desktop} ref={titleRef}>
            Soluciones en Construcción & Aberturas de Calidad
          </h1>
          <h1 className={styles.title_mobile} ref={titleMobileRef}>
            Construcción & Aberturas de Calidad
          </h1>
          <div className={styles.buttons} ref={buttonRef}>
            <Link href={'/#services'} className={styles.button_services}>
              <button>
                Nuestros servicios{' '}
                <Arrow
                  width='14px'
                  height='14px'
                  color='white'
                  strokeWidth='1'
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
