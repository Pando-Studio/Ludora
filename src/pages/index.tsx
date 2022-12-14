import { Box, Container, Flex, Img, VStack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { createContext, useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Contact from '../components/Contact'
import Faq from '../components/Faq'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Project from '../components/Project'
import Team from '../components/Team'
export const GradientContext = createContext<string | undefined>(undefined);

const gradientTab = [
  'linear-gradient(90deg,#007CF0,#00DFD8)',
  'linear-gradient(90deg,#7928CA,#FF0080)',
  'linear-gradient(90deg,#FF4D4D,#F9CB28)',
]

const Home: NextPage = () => {

  const [gradient, setGradient] = useState<string>();

  let step = 0;
  useEffect(() => {
    setInterval(() => {
      setGradient(gradientTab[step]);
      if (step >= gradientTab.length) {
        step = 0;
      }
      else {
        step = step + 1;
      }
    }, 4000)
  }, [])

  return (
    <GradientContext.Provider value={gradient}>
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
        <Footer></Footer>
      </main>
    </GradientContext.Provider>
  )
}

export default Home
