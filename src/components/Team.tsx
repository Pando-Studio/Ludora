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
    <Container id='team' maxWidth={'6xl'} mb={16}>
      <Heading ref={heading} className='gradient' textAlign={'center'} mb={16}>Team</Heading>
      <Wrap justify={'center'} align={'center'}>
        <Text>Yacine Arhaliass</Text>
        <Text>-</Text>
        <Text>Alexandre Mahé</Text>
        <Text>-</Text>
        <Text>Clément Verger</Text>
        <Text>-</Text>
        <Text>Thomas Aurain</Text>
        <Text>-</Text>
        <Text>Antonin Bouard</Text>
        <Text>-</Text>
        <Text>Justine Quirin</Text>
        <Text>-</Text>
        <Text>Julien</Text>
      </Wrap>
    </Container>
  )
}

export default Team