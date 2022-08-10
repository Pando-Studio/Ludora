import { Box, Heading, HStack, VStack } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import * as THREE from 'three'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const Banner = () => {

    const textColored = useRef<HTMLHeadingElement>(null);
    const rdm = () => Math.floor(Math.random() * 200);
    useEffect(() => {
        setInterval(() => {
            const gradient = `linear-gradient(45deg, rgb(${rdm()},${rdm()},${rdm()}), rgb(${rdm()},${rdm()},${rdm()}))`;
            gsap.to(textColored.current, { backgroundImage: gradient })
        }, 4000)
    }, [textColored])

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

            //Object
            const geometry1 = new THREE.PlaneGeometry(1, 2, 1)
            const material1 = new THREE.MeshBasicMaterial({ map: colorTexture })
            const mesh1 = new THREE.Mesh(geometry1, material1)

            const geometry2 = new THREE.PlaneGeometry(1, 2, 1)
            const material2 = new THREE.MeshBasicMaterial({ map: colorTexture })
            const mesh2 = new THREE.Mesh(geometry2, material2)

            geometry2.applyMatrix4(new THREE.Matrix4().makeRotationY(Math.PI));

            scene.add(mesh1)
            scene.add(mesh2)

            // Sizes
            const sizes = {
                width: container.current.offsetWidth * 25 / 100,
                height: container.current.offsetHeight * 80 / 100,
            }

            window.addEventListener('resize', () => {
                sizes.width = window.innerWidth
                sizes.height = window.innerHeight
                camera.aspect = sizes.width / sizes.height
                camera.updateProjectionMatrix()
                renderer.setSize(sizes.width, sizes.height)
                renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
            })

            // Camera
            const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
            camera.position.x = 0
            camera.position.y = 0
            camera.position.z = 2
            scene.add(camera)

            // Controls
            const controls = new OrbitControls(camera, canvas.current)
            controls.enableDamping = true;
            controls.enableZoom = false;

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
                controls.update()
                renderer.render(scene, camera)
                window.requestAnimationFrame(animate)
            }
            animate()
        }
    }, [])

    return (
        <HStack ref={container} flexGrow={1} justify={'center'} spacing={8} paddingX={8}>
            <Heading ref={textColored} className='gradient' maxWidth={'30ch'}>Tisser des liens avec votre clientèle au travers d&apos;expériences inédites basé sur le jeux de tarot.</Heading>
            <canvas ref={canvas}></canvas>
        </HStack>
    )
}

export default Banner