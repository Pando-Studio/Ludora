import { Center, Container, Heading } from '@chakra-ui/react'
import React, { useContext, useEffect, useRef } from 'react'
import gsap from 'gsap';
import { GradientContext } from '../pages';


const Contact = () => {

  const gradient = useContext(GradientContext);
  const heading = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
      gsap.to(heading.current, { backgroundImage: gradient })
  }, [gradient])

  return (
    <Container>
      <Heading ref={heading} className='gradient' textAlign={'center'} mb={8}>Contact</Heading>
      <Center mb={8}>contact@blockness.com</Center>
    </Container>
  )
}

export default Contact