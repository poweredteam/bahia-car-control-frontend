import { accordionAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(accordionAnatomy.keys)

const baseStyle = definePartsStyle({
  root: {
    w: '100%'
  },
  container: {
    border: 'none'
  },
  button: {
    w: '100%',
    _hover: { bg: 'none' },
    fontSize: '2xl'
  },
  panel: {
    p: 0,
    bg: 'brand.primaryDarkVariant'
  }
})

export const accordionTheme = defineMultiStyleConfig({ baseStyle })
