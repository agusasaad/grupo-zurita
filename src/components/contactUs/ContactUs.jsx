import Arrow from '@/assets/icon/Arrow'
import styles from './ContactUs.module.css'
import Link from 'next/link'
import Whatsapp from '@/assets/icon/Whatsapp'
import Instagram from '@/assets/icon/Instagram'
import Facebook from '@/assets/icon/Facebook'

const ContactUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.form_container}>
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
        <span>contactanos</span>
        <h2>Conectamos contigo para hacer realidad tus proyectos</h2>
        <p>
          Estamos aquí para escuchar tus ideas y ofrecer soluciones a medida que
          se ajusten a tus necesidades. Ya sea que tengas una pregunta o quieras
          iniciar un nuevo proyecto, nuestro equipo está listo para ayudarte a
          dar el siguiente paso. Contáctanos y descubre cómo podemos trabajar
          juntos para hacer realidad tu visión.
        </p>
        <div className={styles.social}>
          <Link href={'/'}>
            <span>
              <Whatsapp />
            </span>
          </Link>
          <Link href={'/'}>
            <span>
              <Instagram />
            </span>
          </Link>
          <Link href={'/'}>
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