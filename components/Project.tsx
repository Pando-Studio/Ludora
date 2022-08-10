import { Box, Container, Heading, Text } from '@chakra-ui/react'
import React, { useEffect, useRef } from 'react'
import { getRandomGradient } from '../utilities';
import gsap from 'gsap';

const Project = () => {

    const heading = useRef<HTMLHeadingElement>(null);
    useEffect(() => {
        setInterval(() => {
            gsap.to(heading.current, { backgroundImage: getRandomGradient })
        }, 4000)
    }, [heading])

    return (
        <Container maxWidth={'6xl'} pb={16}>
            <Heading ref={heading} className='gradient' textAlign={'center'} mb={8}>Le project</Heading>
            <Text mb={4}>
                L&apos;objectif du projet est de créer et de mettre à disposition de tous un protocole et un framework permettant à des organisations d&apos;interagir et de fédérer leurs communautés de manière ludique via des technologies web3 (blockchain, NFTs, dApp, DAO).
            </Text>
            <Text mb={4}>
                Ce protocole est basé sur la normalisation de création de collections NFT représentant des collections de cartes de Tarot. Chaque collection est un jeu complet de 78 cartes de Tarot (un deck).
            </Text>
            <Text mb={4}>
                Cette normalisation se fait par un standard de création de carte. Ce standard permet ensuite la création de différents jeux vidéos basés sur les cartes et sur une norme commune.
            </Text>
        </Container>
    )
}

export default Project