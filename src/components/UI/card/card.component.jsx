import styled from 'styled-components/macro';

export const Card = styled.div`
  border: 1px solid ${props => props.theme.color.secondary};
  color: ${props => props.theme.color.primary};
  padding: 10px 15px;
  border-radius: 6px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 25px;
  div {
    width: 50%;
  }
  @media screen and (max-width:${props => props.theme.size.mobileBreakpoint}) {
    width: 100%;
    padding: 10px;
  }
`;

export const CardContent = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  a {
    color: ${props => props.theme.color.primary};
    &: hover {
      color: ${props => props.theme.color.secondary};
    }
  }

  span {
    padding-right: 5px;
  }
`;