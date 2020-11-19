import styled from 'styled-components/macro';

export const TopButton = styled.div`
  background-color: ${props => props.theme.color.primary};
  color: ${props => props.theme.color.secondary};
  border-radius: 50%;
  border: none;
  width: 40px;
  height: 40px;
  position: fixed;
  right: 25px;
  bottom: 30px;
  cursor: pointer;
  text-align: center;
  line-height: 35px;

  &:hover {
    filter: brightness(1.2);
  }
`;

export const SearchButton = styled.div`
  width: ${props => props.theme.size.queryWidth};
  height: 40px;
  background-color: ${props => props.theme.color.secondary};
  padding: 10px;
  @media screen and (max-width:${props => props.theme.size.smMobileBreakpoint}) {
    width: 280px;
  }
`;