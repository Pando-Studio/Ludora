import { Container, Heading, Wrap,Text } from '@chakra-ui/react'
import React from 'react'

const Team = () => {
  return (
    <Container maxWidth={'6xl'} pb={16}>
      <Heading textAlign={'center'} mb={8}>Team</Heading>
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