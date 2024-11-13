'use client'
import styles from './ContactUs.module.css'
import Link from 'next/link'
import Whatsapp from '@/assets/icon/Whatsapp'
import Instagram from '@/assets/icon/Instagram'
import Facebook from '@/assets/icon/Facebook'
import { useEffect, useRef, useState } from 'react'
import { animateContactUs } from '../Animates/Animates'
import emailjs from 'emailjs-com'

const ContactUs = () => {
  const containerContact = useRef(null)
  const formContainerRef = useRef(null)
  const subtitleRef = useRef(null)
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const buttonRef = useRef(null)
  const [showSpinner, setShowSpinner] = useState(false)

  useEffect(() => {
    emailjs.init('AvKV6TnFtizcS_CD1')

    animateContactUs(
      formContainerRef.current,
      subtitleRef.current,
      titleRef.current,
      descriptionRef.current,
      buttonRef.current
    )
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    setShowSpinner(true)

    // Configurar los ID de tu servicio y template de EmailJS
    const serviceID = 'default_service'
    const templateID = 'template_17ugrij'

    // Enviar formulario usando emailjs
    emailjs.sendForm(serviceID, templateID, e.target).then(
      () => {
        setShowSpinner(false) // Restaurar el valor del botón
        alert('¡Formulario enviado con exito!') // Notificación de éxito
      },
      (err) => {
        setShowSpinner(false) // Restaurar el valor del botón
        alert('Failed to send. Error: ' + JSON.stringify(err)) // Manejo de error
      }
    )

    // Limpiar formulario después de enviarlo
    e.target.reset()
  }

  return (
    <div className={styles.container} id='contactUs' ref={containerContact}>
      <div className={styles.form_container} ref={formContainerRef}>
        <form className={styles.form} onSubmit={handleSubmit} id='form'>
          <div className={styles.inputs}>
            <input
              type='text'
              name='name'
              id='name'
              placeholder='Nombre y Apellido'
              required
            />
            <input
              type='email'
              name='email'
              id='email'
              required
              placeholder='Correo Electronico'
            />
            <input
              type='text'
              name='telefono'
              id='telefono'
              required
              placeholder='Telefono'
            />
            <input
              type='text'
              name='localidad'
              id='localidad'
              required
              placeholder='Localidad'
            />
            <select defaultValue='' name='servicio' id='servicio' required>
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

            <textarea
              name='descripcion'
              id='descripcion'
              placeholder='Descripción del proyecto'
              required
            ></textarea>
            <button type='submit' id='button' value='Send Email'>
              {showSpinner ? <span className={styles.loader}></span> : 'Enviar'}
            </button>
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
