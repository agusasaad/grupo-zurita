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
      <div className={styles.background}>
        <span>servicio</span>
        <h2>{proyecto.nombre}</h2>
        <p>{proyecto.descripcion}</p>
      </div>
      <div className={styles.carrucel}></div>
    </div>
  )
}

export default Servicios_page
