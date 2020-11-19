import styled from 'styled-components/macro';

const Flex = styled.div`
  color: ${props => props.theme.color.gray};
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin-bottom: 30px;
  p {
    font-size: ${props => props.theme.size.hintText};
  }
`;

const MetaResult = ({ data }) => (
  <Flex>
    <p>Total results: {data.total_count}</p>
    <p>Remaining requests: {data.remainingRequests}</p>
  </Flex>
);

export default MetaResult;