import React from 'react';
import styled from 'styled-components/macro';

const Bar = styled.div`
  background-color: ${props => props.theme.color.primary};
  color: ${props => props.theme.color.secondary};
  width: 100vw;
  height: 60px;
  position: fixed;
  z-index: 99;
  left: 0;
  top: 0;
  padding: 15px 25px;
  font-size: 2.4rem;
`;

const Topbar = () => <Bar>Github repo</Bar>

export default React.memo(Topbar);