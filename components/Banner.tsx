import { Button, Flex, Heading, HStack, VStack, Wrap } from '@chakra-ui/react'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const Banner = () => {

    const textColored = useRef<HTMLHeadingElement>(null);
    const rdm = () => Math.floor(Math.random() * 200);
    useEffect(() => {
        setInterval(() => {
            const gradient = `linear-gradient(45deg, rgb(${rdm()},${rdm()},${rdm()}), rgb(${rdm()},${rdm()},${rdm()}))`;
            gsap.to(textColored.current, { backgroundImage: gradient })
        }, 4000)
    }, [textColored])

    return (
        <VStack flexGrow={1} justify={'center'} spacing={8} paddingX={8}>
            <Heading ref={textColored} className='gradient' maxWidth={'30ch'} textAlign={'center'}>Nouer des liens avec votre clientèle au travers d'expériences inédites.</Heading>
            <Wrap justify={'center'} align={'center'}>
                <Button colorScheme='black' variant='ghost'>Start designing</Button>
                <Button colorScheme='black' variant='ghost'>Start developing</Button>
            </Wrap>
        </VStack>
    )
}

export default Banner