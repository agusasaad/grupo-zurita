'use client'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

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
        start: 'top 50%',
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
        start: 'top 50%',
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
      start: 'top 50%',
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
  buttonRightRef
) => {
  gsap.registerPlugin(ScrollTrigger)
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: containerProyectos,
      start: 'top 50%',
      end: 'bottom 100%',
    },
  })

  tl.fromTo(
    [subtitleRef, titleRef],
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
        buttonRef,
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

  tl.fromTo(
    buttonLeftRef,
    {
      x: -100,
    },
    {
      x: 0,
      duration: 0.4,
      ease: 'power3',
    }
  ).fromTo(
    buttonRightRef,
    {
      x: 100,
    },
    {
      x: 0,
      duration: 0.4,
      ease: 'power3',
    },
    '<'
  )
}

export const animateContactUs = (
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
        start: 'top 50%',
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
        start: 'top 50%',
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
        start: 'top 50%',
        end: 'bottom 100%',
      },
    }
  )
}
