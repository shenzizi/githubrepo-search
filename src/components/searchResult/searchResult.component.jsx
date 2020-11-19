import ResultList from './resultList';
import {
  WrapperSpinner,
  Panel
} from '../UI';
import spinner from '../UI/spinner/spinner.gif';

const SearchResult = ({ loading, error, data, dispatch }) => (
  <div>
    {loading ? <WrapperSpinner src={spinner} alt='loading...' /> : null}
    {error ? <Panel>{error}</Panel> : null}
    {data ? (
      <ResultList
        data={data}
        dispatch={dispatch}
        error={error}
      />
    ) : null}
  </div>
);


export default SearchResult;