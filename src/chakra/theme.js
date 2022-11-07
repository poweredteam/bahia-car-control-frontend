import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false
  },
  colors: {
    brand: {
      pri: '#E17614',
      sec: '#F09135',
      select: '#F88319',
      dark: '#353C4A',
      light: '#FFFFF7'
    }
  },
  styles: {
    global: (props) => ({
      '#root, html, body': {
        h: '100vh',
        w: '100%',
        color: mode('brand.dark', 'brand.light')(props)
      },
      '*::-webkit-scrollbar': {
        display: 'none'
      },
      body: {
        bg: mode('brand.light', 'brand.dark')(props)
      }
    })
  }
})

export default theme
