import styled, {
  createGlobalStyle
} from 'styled-components/macro';

export const GlobalStyle = createGlobalStyle`
  html {
    font-size:62.5%;
  }
  body {
    background-color: #f3f5f7;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
  }
  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }
`

export const Main = styled.div`
  padding: 30px;
  margin-top: 60px;
  @media screen and (max-width:${props => props.theme.size.smMobileBreakpoint}) {
    padding: 20px;
  }
`;