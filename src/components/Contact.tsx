import { Center, Container, Heading, Link } from '@chakra-ui/react'
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
    <Container id='contact' maxWidth={'6xl'}>
      <Heading ref={heading} className='gradient' fontSize={'5xl'} textAlign={'center'} mb={16}>Contact</Heading>
      <Center mb={16}><Link href="mailto:yacine@blockness.com">yacine@blockness.com</Link></Center>
    </Container>
  )
}

export default Contact