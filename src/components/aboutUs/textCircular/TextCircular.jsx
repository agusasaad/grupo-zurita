import { useRef } from 'react'
import styles from './TextCircular.module.css'
import logo from '@/assets/image/LogoZurita.png'

const TextCircular = ({ text }) => {
  const ref = useRef()
  const deg = 360 / text.length

  return (
    <div className={styles.container} ref={ref}>
      <div className={styles.circle}>
        <div className={styles.textContainer}>
          {text.split('').map((letter, index) => (
            <span
              key={index}
              className={styles.letter}
              style={{
                transform: `rotate(${deg * index}deg)`,
                transformOrigin: '0 100px',
              }}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
      <img src={logo.src} alt='Profile' className={styles.profileImage} />
    </div>
  )
}

export default TextCircular
