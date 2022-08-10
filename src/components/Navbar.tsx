import { Button, Container, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Flex, Heading, HStack, Link, useDisclosure, VStack, Box } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { HamburgerIcon } from '@chakra-ui/icons'

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef(null)
    return (
        <Box boxShadow={'inset 0 -1px 0 0 rgba(0,0,0,.1)'}>
            <Container maxWidth={'6xl'} display={'flex'} justifyContent={'space-between'} alignItems={'center'} paddingY={4}>
                <Heading as={'h1'}>Ludora</Heading>
                <HStack display={{ base: 'none', md: 'flex' }}>
                    <Link href='#project'>Project</Link>
                    <Link href='#faq'>Faq</Link>
                    <Link href='#team'>Team</Link>
                    <Link href='#contact'>Contact</Link>
                </HStack>
                <HStack display={{ base: 'none', md: 'flex' }}>
                    <Button sx={{ backgroundColor: 'black', color: 'white', _hover: { backgroundColor: 'black' }, _active: { backgroundColor: 'black' } }} disabled>Connect</Button>
                </HStack>
                <HamburgerIcon w={7} h={7} ref={btnRef} onClick={onOpen} display={{ base: 'inherit', md: 'none' }} cursor={'pointer'} />
                <Drawer
                    isOpen={isOpen}
                    placement='top'
                    onClose={onClose}
                    finalFocusRef={btnRef}
                >
                    <DrawerOverlay />
                    <DrawerContent background={'#fff'}>
                        <DrawerCloseButton top={4} right={4} size='lg' />
                        <DrawerBody>
                            <VStack py={8} spacing={8}>
                                <Link href='#project'>Project</Link>
                                <Link href='#faq'>Faq</Link>
                                <Link href='#team'>Team</Link>
                                <Link href='#contact'>Contact</Link>
                            </VStack>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Container>
        </Box>
    )
}

export default Navbar