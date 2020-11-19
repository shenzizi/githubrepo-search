import styled from 'styled-components/macro';

export const Input = styled.input`
  border: 1px solid ${props => props.theme.color.secondary};
  color: ${props => props.theme.color.primary};
  width: ${props => props.theme.size.queryWidth};
  border-left: none;
  padding: 5px 10px;
  &:focus {
    outline: none;
  }
  @media screen and (max-width:${props => props.theme.size.mobileBreakpoint}) {
    height: 50px;
    border-left: 1px solid ${props => props.theme.color.secondary};
  }
  @media screen and (max-width:${props => props.theme.size.smMobileBreakpoint}) {
    width: ${props => props.theme.size.smQueryWidth};
  }
`;