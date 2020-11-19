import styled from 'styled-components/macro';

export const DropdownList = styled.div`
  position: relative;
  cursor: pointer;
`;

export const DropdownContent = styled.div`
  display: ${props => props.show ? 'block' : 'none'};
  background-color: ${props => props.theme.color.lightGray};
  width: 100%;
  position: absolute;
  top: 40px;
  left: 0;
  div {
    width: 100%;
    padding: 5px 10px;
    &: hover{
      background-color: ${props => props.theme.color.gray};
      color: ${props => props.theme.color.secondary};
    }
  }
`;

export const ArrowIcon = styled.span`
  display: inline-block;
  padding-left: 5px;
`;