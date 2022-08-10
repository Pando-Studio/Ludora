import { Box, Container, Flex, Img, VStack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../components/Banner'
import Contact from '../components/Contact'
import Faq from '../components/Faq'
import Navbar from '../components/Navbar'
import Project from '../components/Project'
import Team from '../components/Team'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ludora</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Flex direction={'column'} minHeight={'100vh'}>
          <Navbar></Navbar>
          <Banner></Banner>
        </Flex>
        <Project></Project>
        <Faq></Faq>
        <Team></Team>
        <Contact></Contact>
      </main>
    </>
  )
}

export default Home
