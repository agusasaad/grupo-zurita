import Arrow from '@/assets/icon/Arrow'
import styles from './Servicios.module.css'
import { servicios } from './serviciosData'
import ArrowRigth from '@/assets/icon/ArrowRigth'

const Servicios = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card_container}>
        {servicios.map((servicio, index) => (
          <div
            key={index}
            className={styles.card}
            style={{ backgroundImage: `url(${servicio.backgroundImg.src})` }}
          >
            <div className={styles.containerInfo}>
              <i className={styles.icon}>{servicio.icon}</i>
              <h3>{servicio.nombre}</h3>
              <p>{servicio.descripcion}</p>
              <div className={styles.button_card}>
                <button>
                  <ArrowRigth />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.info_text}>
        <span>NUESTROS SERVICIOS</span>
        <h2>Servicios diseñados para transformar tus espacios</h2>
        <p>
          Ofrecemos una amplia gama de servicios personalizados en construcción,
          aberturas y más, pensados para satisfacer las necesidades de cada
          proyecto con altos estándares de calidad y atención al detalle.
          Explora nuestras soluciones y descubre cómo podemos ayudarte a
          construir tus ideas.
        </p>
        <div className={styles.button}>
          <button>
            Ver Más
            <Arrow color='var(--blood-orange)' width='16px' height='16px' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Servicios
