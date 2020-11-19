import { Panel } from '../UI';

const SearchHint = ({ data, error, val }) => (
  <Panel light>
    {!data && val ? <div>You are trying to search {val}...</div> : null}
    {!val && !error ? <p>Type your interested topic/name/description and start the journey !</p> : null}
  </Panel>
);

export default SearchHint;