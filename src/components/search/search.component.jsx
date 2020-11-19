import styled from 'styled-components/macro';
import Dropdown from './dropdown.component';
import { Input } from '../UI';

const Query = styled.div`
  display: flex;
  flex-flow: row nowrap;
  color: ${props => props.theme.color.primary};
  @media screen and (max-width:${props => props.theme.size.mobileBreakpoint}) {
    flex-flow: column;
  }
  @media screen and (max-width:${props => props.theme.size.smMobileBreakpoint}) {
    font-size: 1.4rem;
  }
`;

const Search = ({ info, dispatch, val, handleInputChange }) => (
  <Query>
    <Dropdown
      infoSearchBy={info.searchBy}
      dispatch={dispatch}
    />
    <Input
      value={val}
      placeholder={`key in the ${info.searchBy}`}
      onChange={handleInputChange}
    />
  </Query>
);

export default Search;