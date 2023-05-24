import { extendTheme, ThemeConfig } from '@chakra-ui/react'

// Add color mode config
const config: ThemeConfig = {
  initialColorMode: 'dark',
} 

// extend the theme
const theme = extendTheme({ config })

export default theme