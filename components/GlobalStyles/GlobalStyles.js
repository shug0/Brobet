import { createGlobalStyle } from 'styled-components'
import theme from '../../constants/theme'

const GlobalStyles = createGlobalStyle`
  body, html, #__next {
    margin: 0;
    height: 100%;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    background: ${theme.colors.background};
    color: ${theme.colors.font};
  }
  
  h1, h2, h3 {
    font-weight: 100;
  }
  
  *, *:before, *:after {
    box-sizing: border-box;
  }
`

export default GlobalStyles
