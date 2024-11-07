import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const AnimateNav = (navRef) => {
  gsap.registerPlugin(ScrollTrigger)
  gsap.to(navRef, {
    backgroundColor: '#00000031',
    backdropFilter: 'blur(5px)',
    duration: 0.3,
    ease: 'power1',
    scrollTrigger: {
      trigger: '#servicios',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
  })
}
