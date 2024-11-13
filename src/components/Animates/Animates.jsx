'use client'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const start = 'top 50%'
const startMobile = 'top 80%'
export const animateInicio = (
  subtitleRef,
  titleRef,
  titleMobileRef,
  buttonRef
) => {
  if (window.innerWidth > 600) {
    gsap.fromTo(
      [subtitleRef, titleRef, buttonRef],
      {
        opacity: 0,
        y: 100,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: 'power3',
        stagger: 0.2,
      }
    )
  } else {
    gsap.fromTo(
      [subtitleRef, titleRef, titleMobileRef, buttonRef],
      {
        opacity: 0,
        y: 100,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3',
        stagger: 0.2,
      }
    )
  }
}
export const animateServices = (
  containerServices,
  cardContainerRef,
  subtitleRef,
  titleRef,
  descriptionRef,
  buttonRef
) => {
  gsap.registerPlugin(ScrollTrigger)

  gsap.fromTo(
    cardContainerRef,
    {
      opacity: 0,
      scale: 0,
    },
    {
      opacity: 1,
      scale: 1,
      duration: 0.9,
      ease: 'power3',
      scrollTrigger: {
        trigger: containerServices,
        start: () => (window.innerWidth > 600 ? start : startMobile),
        end: 'bottom 100%',
      },
    }
  )

  gsap.fromTo(
    [subtitleRef, titleRef, descriptionRef, buttonRef],
    {
      opacity: 0,
      x: 100,
    },
    {
      opacity: 1,
      x: 0,
      duration: 0.6,
      ease: 'power1',
      stagger: 0.1,
      scrollTrigger: {
        trigger: containerServices,
        start: () => (window.innerWidth > 600 ? start : startMobile),
        end: 'bottom 100%',
      },
    }
  )
}

export const animateAboutUs = (
  containerAboutRef,
  subtitleRef,
  titleRef,
  descriptionRef,
  buttonRef,
  imageRef,
  textCircularRef
) => {
  gsap.registerPlugin(ScrollTrigger)
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: containerAboutRef,
      start: () => (window.innerWidth > 600 ? start : startMobile),
      end: 'bottom 100%',
    },
  })

  tl.fromTo(
    [subtitleRef, titleRef, descriptionRef, buttonRef],
    {
      opacity: 0,
      x: -100,
    },
    {
      opacity: 1,
      x: 0,
      duration: 0.6,
      ease: 'power1',
      stagger: 0.1,
    }
  )
    .add(
      gsap.fromTo(
        imageRef,
        {
          opacity: 0,
          x: 100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: 'power1',
        }
      ),
      0
    )
    .add(
      gsap.fromTo(
        textCircularRef,
        {
          opacity: 0,
          scale: 0,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: 'power1',
        }
      ),
      0.6
    )
}

export const animateProyectos = (
  containerProyectos,
  subtitleRef,
  titleRef,
  buttonRef,
  cardsRef,
  buttonLeftRef,
  buttonRightRef,
  touchAnimationRef
) => {
  gsap.registerPlugin(ScrollTrigger)

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: containerProyectos,
      start: () => (window.innerWidth > 600 ? start : startMobile),
      end: 'bottom 100%',
    },
  })

  tl.fromTo(
    [subtitleRef, titleRef],
    { opacity: 0, x: -100 },
    {
      opacity: 1,
      x: 0,
      duration: 0.6,
      ease: 'power1',
      stagger: 0.1,
    }
  )
    .add(
      gsap.fromTo(
        buttonRef,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: 'power1',
        }
      ),
      0
    )
    .add(
      gsap.fromTo(
        cardsRef,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: 'power1',
          stagger: 0.1,
        }
      ),
      0.3
    )
    .add(
      gsap.fromTo(
        touchAnimationRef,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.5,
          ease: 'power1',
          onComplete: () => {
            gsap.to(touchAnimationRef, {
              display: 'none',
              opacity: 0,
              duration: 0.5,
              ease: 'power1',
              delay: 0.5,
            })
          },
        }
      ),
      '<'
    )

  // Animación para los botones izquierdo y derecho
  tl.fromTo(
    buttonLeftRef,
    { x: -100 },
    {
      x: 0,
      duration: 0.4,
      ease: 'power3',
    }
  ).fromTo(
    buttonRightRef,
    { x: 100 },
    {
      x: 0,
      duration: 0.4,
      ease: 'power3',
    },
    '<' // Comienza al mismo tiempo que la animación del botón izquierdo
  )
}

export const animateContactUs = (
  formContainerRef,
  subtitleRef,
  titleRef,
  descriptionRef,
  buttonRef
) => {
  gsap.registerPlugin(ScrollTrigger)

  gsap.fromTo(
    formContainerRef,
    {
      opacity: 0,
      scale: 0,
    },
    {
      opacity: 1,
      scale: 1,
      duration: 0.9,
      ease: 'power3',
      scrollTrigger: {
        trigger: '#contactUs',
        start: () => (window.innerWidth > 600 ? start : startMobile),
        end: 'bottom 100%',
      },
    }
  )

  gsap.fromTo(
    [subtitleRef, titleRef, descriptionRef, buttonRef],
    {
      opacity: 0,
      x: 100,
    },
    {
      opacity: 1,
      x: 0,
      duration: 0.6,
      ease: 'power1',
      stagger: 0.1,
      scrollTrigger: {
        trigger: '#contactUs',
        start: () => (window.innerWidth > 600 ? start : startMobile),
        end: 'bottom 100%',
      },
    }
  )
}

export const animateFooter = (
  containerFooter,
  logoRef,
  listNavigationRef,
  listInfoRef,
  listSocialRef,
  lineRef,
  copyrightRef
) => {
  gsap.registerPlugin(ScrollTrigger)
  gsap.fromTo(
    [
      logoRef,
      listNavigationRef,
      listInfoRef,
      listSocialRef,
      lineRef,
      copyrightRef,
    ],
    {
      opacity: 0,
      y: 100,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: 'power1',
      stagger: 0.1,
      scrollTrigger: {
        trigger: containerFooter,
        start: () => (window.innerWidth > 600 ? start : startMobile),
        end: 'bottom 100%',
        once: true,
      },
    }
  )
}

export const animateServiciosPage = (
  subtitleRef,
  titleRef,
  lineRef,
  cardsRef,
  buttonLeftRef,
  buttonRightRef
) => {
  gsap.registerPlugin(ScrollTrigger)
  gsap.fromTo(
    [subtitleRef, titleRef, lineRef],
    {
      opacity: 0,
      x: -100,
    },
    {
      opacity: 1,
      x: 0,
      duration: 0.6,
      ease: 'power1',
      stagger: 0.1,
      delay: 0.2,
    }
  )

  gsap.fromTo(
    cardsRef,
    { opacity: 0, y: 100 },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: 'power1',
      stagger: 0.2,
      delay: 0.4,
    }
  )

  gsap.fromTo(
    buttonLeftRef,
    {
      x: -100,
    },
    {
      x: 0,
      duration: 0.4,
      ease: 'power3',
      delay: 0.6,
    }
  )

  gsap.fromTo(
    buttonRightRef,
    {
      x: 100,
    },
    {
      x: 0,
      duration: 0.4,
      ease: 'power3',
      delay: 0.6,
    }
  )
}
