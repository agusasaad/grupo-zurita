import styles from './../../components/servicios/Servicios.module.css'

const Window = ({
  width = '40px',
  height = '40px',
  color = 'var(--blood-orange)',
}) => {
  return (
    <svg
      className={styles.svg}
      fill={color}
      height={height}
      width={width}
      version='1.1'
      id='Layer_1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      viewBox='0 0 512 512'
      xmlSpace='preserve'
      transform='matrix(1, 0, 0, 1, 0, 0)'
    >
      <g id='SVGRepo_bgCarrier' strokeWidth={0} />
      <g
        id='SVGRepo_tracerCarrier'
        strokeLinecap='round'
        strokeLinejoin='round'
        stroke='#CCCCCC'
        strokeWidth='2.048'
      />
      <g id='SVGRepo_iconCarrier'>
        {' '}
        <g>
          {' '}
          <g>
            {' '}
            <path d='M490.667,448H480V10.667C480,4.8,475.2,0,469.333,0H42.667C36.8,0,32,4.8,32,10.667V448H21.333 c-5.867,0-10.667,4.8-10.667,10.667v42.667c0,5.867,4.8,10.667,10.667,10.667h469.333c5.867,0,10.667-4.8,10.667-10.667v-42.667 C501.333,452.8,496.533,448,490.667,448z M53.333,21.333h405.333V448h-21.333V53.333c0-5.867-4.8-10.667-10.667-10.667H85.333 c-5.867,0-10.667,4.8-10.667,10.667V448H53.333V21.333z M416,64v384H266.667V64H416z M245.333,64v384H96V64H245.333z M480,490.667 H32v-21.333h448V490.667z' />{' '}
          </g>{' '}
        </g>{' '}
      </g>
    </svg>
  )
}

export default Window
