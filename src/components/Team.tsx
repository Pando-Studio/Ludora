import { Container, Heading, Wrap, Text } from '@chakra-ui/react'
import React, { useContext, useEffect, useRef } from 'react'
import gsap from 'gsap';
import { GradientContext } from '../pages';

const Team = () => {

  const gradient = useContext(GradientContext);
  const heading = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
      gsap.to(heading.current, { backgroundImage: gradient })
  }, [gradient])

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