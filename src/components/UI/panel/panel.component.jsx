import styled from 'styled-components/macro';

export const Panel = styled.div`
  color: ${props => props.light ? props.theme.color.gray : props.theme.color.primary};
  text-align: center;
  margin-top: 60px;
`;