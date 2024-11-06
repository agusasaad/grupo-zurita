import styles from './../../components/servicios/Servicios.module.css'
const ArrowRigth = ({
  width = '24px',
  height = '24px',
  color = 'var(--blood-orange)',
}) => {
  return (
    <svg
      className={styles.arrow}
      stroke='currentColor'
      fill={color}
      strokeWidth={0}
      viewBox='0 0 24 24'
      height={height}
      width={width}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path fill='none' d='M0 0h24v24H0V0z' />
      <path d='M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z' />
    </svg>
  )
}

export default ArrowRigth
