import { Center, Container, Heading } from '@chakra-ui/react'
import React, { useEffect, useRef } from 'react'
import { getRandomGradient } from '../utilities';
import gsap from 'gsap';


const Contact = () => {

  const heading = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    setInterval(() => {
      gsap.to(heading.current, { backgroundImage: getRandomGradient })
    }, 4000)
  }, [heading])

  return (
    <Container>
      <Heading ref={heading} className='gradient' textAlign={'center'} mb={8}>Contact</Heading>
      <Center mb={8}>contact@blockness.com</Center>
    </Container>
  )
}

export default Contact