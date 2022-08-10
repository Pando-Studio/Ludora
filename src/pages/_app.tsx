import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react"
import '@fontsource/montserrat'

function MyApp({ Component, pageProps }: AppProps) {

  const theme = extendTheme({
    fonts: {
      heading: 'Montserrat',
      body: 'Montserrat',
    },
    styles: {
      global: () => ({
        body: {
          bg: "#fff",
          color: "#000"
        },
      }),
    },
    colors: {
      black: {
        500: "#000000", 
      }
    }
  })

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
