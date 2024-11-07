import Arrow from '@/assets/icon/Arrow'
import styles from './AboutUs.module.css'
import Image from 'next/image'
import image_about from '@/assets/image/about-back.png'

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info_text}>
        <span>SOBRE NOSOTROS</span>
        <h2>Grupo Zurita</h2>
        <p>
          Somos una empresa familiar fundada en 1984 en Buenos Aires. Desde
          entonces, hemos acompañado el crecimiento de la industria de la
          construcción, ofreciendo productos, servicios y asesoramiento con alto
          valor agregado. Nos enfocamos en crear lazos de confianza duraderos
          con nuestros clientes, diferenciándonos por un servicio personalizado
          que busca satisfacer sus necesidades de forma única.
        </p>
        <div className={styles.button}>
          <button>
            Ver Más
            <Arrow color='var(--blood-orange)' width='16px' height='16px' />
          </button>
        </div>
      </div>
      <div className={styles.image_container}>
        <Image
          src={image_about}
          width={700}
          height={500}
          alt='imagen de Grupo Zurita'
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      </div>
    </div>
  )
}

export default AboutUs
