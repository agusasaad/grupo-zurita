'use client'
import { useParams } from 'next/navigation'
import styles from './page.module.css'
import { servicios } from '@/components/servicios/serviciosData'

const Servicios_page = () => {
  const { id } = useParams()
  const proyecto = servicios.find((proyecto) => proyecto.id === id)
  console.log(proyecto)
  return (
    <div className={styles.container}>
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${proyecto.backgroundImg_page.src})` }}
      >
        <div className={styles.info}>
          <span>servicio</span>
          <h2>{proyecto.nombre}</h2>
          <div className={styles.line}></div>
          {/* <p>{proyecto.descripcion}</p> */}
        </div>
      </div>
      <div className={styles.carrucel}></div>
    </div>
  )
}

export default Servicios_page
