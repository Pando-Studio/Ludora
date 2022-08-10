import { Container, Heading, Wrap, Text } from '@chakra-ui/react'
import React, { useEffect, useRef } from 'react'
import { getRandomGradient } from '../utilities';
import gsap from 'gsap';

const Team = () => {

  const heading = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    setInterval(() => {
      gsap.to(heading.current, { backgroundImage: getRandomGradient })
    }, 4000)
  }, [heading])

  return (
    <Container maxWidth={'6xl'} pb={16}>
      <Heading ref={heading} className='gradient' textAlign={'center'} mb={8}>Team</Heading>
      <Wrap>
        <Text>Yacine Arhaliass</Text>
        <Text>Alexandre Mahé</Text>
        <Text>Clément Verger</Text>
        <Text>Thomas Aurain</Text>
        <Text>Antonin Bouard</Text>
      </Wrap>
    </Container>

  )
}

export default Team