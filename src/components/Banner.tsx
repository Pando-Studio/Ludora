import { Box, Container, Flex, Grid, GridItem, Heading } from '@chakra-ui/react'
import React, { useContext, useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import * as THREE from 'three'
import { GradientContext } from '../pages';

const Banner = () => {

    const gradient = useContext(GradientContext);
    const heading = useRef<HTMLHeadingElement>(null);
    useEffect(() => {
        gsap.to(heading.current, { backgroundImage: gradient })
    }, [gradient])

    const canvas = useRef(null);
    const container = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (container.current && canvas.current) {
            const scene = new THREE.Scene();

            //Texture
            const textureLoader = new THREE.TextureLoader()
            const colorTexture = textureLoader.load('/card.jpg')

            colorTexture.minFilter = THREE.NearestFilter
            colorTexture.magFilter = THREE.NearestFilter

            //Geometry
            const geometry1 = new THREE.PlaneGeometry(1.2, 2, 1)
            const material1 = new THREE.MeshBasicMaterial({ map: colorTexture })
            const mesh1 = new THREE.Mesh(geometry1, material1)

            const geometry2 = new THREE.PlaneGeometry(1.2, 2, 1)
            const material2 = new THREE.MeshBasicMaterial({ map: colorTexture })
            const mesh2 = new THREE.Mesh(geometry2, material2)

            geometry2.applyMatrix4(new THREE.Matrix4().makeRotationY(Math.PI));

            scene.add(mesh1)
            scene.add(mesh2)

            // Sizes
            const sizes = {
                width: container.current.offsetWidth,
                height: container.current.offsetHeight,
            }

            // Camera
            const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
            camera.position.x = 0
            camera.position.y = 0
            camera.position.z = 2
            scene.add(camera)

            // Renderer
            const renderer = new THREE.WebGLRenderer({
                canvas: canvas.current
            })
            renderer.setClearColor(0xffffff, 0);
            renderer.setSize(sizes.width, sizes.height)
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

            // Animate
            const animate = () => {
                mesh1.rotation.y += 0.01;
                mesh2.rotation.y += 0.01;
                renderer.render(scene, camera)
                window.requestAnimationFrame(animate)
            }
            animate()
        }
    }, [])

    return (
        <Flex flexGrow={1} justify={'center'} align={'center'}>
            <Container maxWidth={'6xl'}>
                <Grid justifyItems={'center'} alignItems={'center'} templateColumns={{ base: "1fr", lg: "70% 30%" }}>
                    <GridItem>
                        <Heading ref={heading} className='gradient' maxWidth={'30ch'} marginTop={{ base: 8, lg: 0 }}>Tisser des liens avec votre clientèle au travers d&apos;expériences inédites basé sur le jeux de tarot.</Heading>
                    </GridItem>
                    <GridItem ref={container} minHeight={500}>
                        <canvas ref={canvas}></canvas>
                    </GridItem>
                </Grid>
            </Container>
        </Flex >
    )
}

export default Banner