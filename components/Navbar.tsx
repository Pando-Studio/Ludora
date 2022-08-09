import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Heading, HStack, Link, useDisclosure } from '@chakra-ui/react'
import React, { useRef } from 'react'
import NextLink from 'next/link'
import { HamburgerIcon } from '@chakra-ui/icons'

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef(null)
    return (
        <Flex justify={'space-between'} align={'center'} paddingX={8} paddingY={4} boxShadow={'inset 0 -1px 0 0 rgba(0,0,0,.1)'}>
            <Heading as={'h1'}>Ludora</Heading>
            <HStack display={{ base: 'none', md: 'flex' }}>
                <NextLink href='/project'><Link>Project</Link></NextLink>
                <NextLink href='/roadmap'><Link>Roadmap</Link></NextLink>
                <NextLink href='/team'><Link>Team</Link></NextLink>
                <NextLink href='/contact'><Link>Contact</Link></NextLink>
            </HStack>
            <HStack display={{ base: 'none', md: 'flex' }}>
                <Link sx={{ backgroundColor: 'black', color: 'white', paddingX: 4, paddingY: 2, borderRadius: '1rem' }}>Connect</Link>
            </HStack>
            <HamburgerIcon w={7} h={7} ref={btnRef} onClick={onOpen} display={{ base: 'inherit', md: 'none' }} cursor={'pointer'} />
            <Drawer
                isOpen={isOpen}
                placement='bottom'
                size='full'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent background={'#fff'}>
                    <DrawerCloseButton top={4} right={4} size='lg' />
                    <DrawerBody>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Flex>
    )
}

export default Navbar