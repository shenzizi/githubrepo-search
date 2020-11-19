import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  text-align: center;
  width: 100%;
`;

export const Spinner = styled.img`
  width: 100px;
  height: 100px;
`;

export const WrapperSpinner = props => (
  <Wrapper {...props}>
    <Spinner {...props} />
  </Wrapper>
)
