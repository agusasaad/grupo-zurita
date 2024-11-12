import styles from './../../app/servicios_page/[id]/page.module.css'
const ArrowRigthCarrucel = ({
  width = '24px',
  height = '24px',
  color = 'white',
}) => {
  return (
    <svg
      className={styles.svg}
      stroke='currentColor'
      fill={color}
      strokeWidth={0}
      viewBox='0 0 1024 1024'
      height={height}
      width={width}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M271.653 1023.192c-8.685 0-17.573-3.432-24.238-10.097-13.33-13.33-13.33-35.144 0-48.474L703.67 508.163 254.08 58.573c-13.33-13.331-13.33-35.145 0-48.475 13.33-13.33 35.143-13.33 48.473 0L776.38 483.925c13.33 13.33 13.33 35.143 0 48.473l-480.492 480.694c-6.665 6.665-15.551 10.099-24.236 10.099z' />
    </svg>
  )
}

export default ArrowRigthCarrucel
