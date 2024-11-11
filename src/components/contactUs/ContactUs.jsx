'use client'
import styles from './ContactUs.module.css'
import Link from 'next/link'
import Whatsapp from '@/assets/icon/Whatsapp'
import Instagram from '@/assets/icon/Instagram'
import Facebook from '@/assets/icon/Facebook'
import { useEffect, useRef } from 'react'
import { animateContactUs } from '../Animates/Animates'

const ContactUs = () => {
  const containerContact = useRef(null)
  const formContainerRef = useRef(null)
  const subtitleRef = useRef(null)
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    animateContactUs(
      containerContact.current,
      formContainerRef.current,
      subtitleRef.current,
      titleRef.current,
      descriptionRef.current,
      buttonRef.current
    )
  }, [])

  return (
    <div className={styles.container} id='contactUs' ref={containerContact}>
      <div className={styles.form_container} ref={formContainerRef}>
        <form className={styles.form}>
          <div className={styles.inputs}>
            <input type='text' placeholder='Nombre y Apellido' />
            <input type='text' placeholder='Correo electronico' />
            <input type='text' placeholder='Teléfono' />
            <input type='text' placeholder='Localidad' />
            <select defaultValue=''>
              <option value='' disabled>
                Seleccione un servicio
              </option>
              <option value='Aberturas de PVC'>Aberturas de PVC</option>
              <option value='Vidrios'>Vidrios</option>
              <option value='Cerramientos de Aluminio'>
                Cerramientos de Aluminio
              </option>
              <option value='Complementarios'>Complementarios</option>
            </select>

            <textarea placeholder='Descripción del proyecto'></textarea>
            <button type='submit'>Enviar</button>
          </div>
        </form>
      </div>
      <div className={styles.info_text}>
        <span ref={subtitleRef}>contactanos</span>
        <h2 ref={titleRef}>Hacemos Realidad tus Ideas</h2>
        <p ref={descriptionRef}>
          Estamos aquí para escuchar tus ideas y ofrecer soluciones
          personalizadas. Si tienes una pregunta o deseas iniciar un nuevo
          proyecto, contáctanos. Nuestro equipo está listo para ayudarte a hacer
          realidad tu visión.
        </p>
        <div className={styles.social} ref={buttonRef}>
          <Link href='https://wa.me/+5491139309554' target='_blank'>
            <span>
              <Whatsapp />
            </span>
          </Link>
          <Link
            href='https://www.instagram.com/grupozurita/?hl=es'
            target='_blank'
          >
            <span>
              <Instagram />
            </span>
          </Link>
          <Link
            href='https://www.facebook.com/profile.php?id=100081852496191'
            target='_blank'
          >
            <span>
              <Facebook />
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
