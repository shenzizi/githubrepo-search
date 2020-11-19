import { useReducer } from 'react';
import { ThemeProvider } from 'styled-components/macro';
import theme from './config/theme';
import fetchData from './api/fetchData';
import useDebounce from './hooks/useDebounce';
import useAsync from './hooks/useAsync';
import Topbar from './components/topbar/topbar.component';
import Search from './components/search/search.component';
import SearchHint from './components/searchHint/searchHint.component';
import SearchResult from './components/searchResult/searchResult.component';
import {
  GlobalStyle,
  Main,
  TopButton
} from './components/UI';

function App() {
  const initState = {
    searchBy: 'topic',
    value: "",
    page: 1,
    newRequest: false
  }

  function infoReducer(state, action) {
    const { searchBy, value } = action;
    switch (action.type) {
      case 'LOAD_NEWREQUEST_BY_VALUE':
        return { ...state, value, page: 1, newRequest: true };
      case 'LOAD_NEWREQUEST_BY_SEARCHBY':
        return { ...state, searchBy, page: 1, newRequest: true };
      case 'LOAD_MORE':
        return { ...state, page: state.page + 1, newRequest: false };
      default:
        return state;
    }
  }

  const [info, dispatch] = useReducer(infoReducer, initState);

  const { data, loading, error, asyncDispatch } = useAsync(fetchData, info);

  const [val, handleInputChange] = useDebounce(
    {
      initialValue: "",
      delay: 1000,
      callback: (val) => dispatch({
        type: 'LOAD_NEWREQUEST_BY_VALUE',
        value: val
      }),
      inputChangeClearData: () => asyncDispatch({
        type: 'SET_DATA',
        data: null
      })
    }
  );

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Topbar />
      <Main>
        <Search
          info={info}
          val={val}
          dispatch={dispatch}
          handleInputChange={handleInputChange}
        />
        {data || error ? null : <SearchHint
          data={data}
          error={error}
          val={val}
        />}
        <SearchResult
          loading={loading}
          error={error}
          data={data}
          dispatch={dispatch}
        />
        <TopButton onClick={handleScrollToTop}>top</TopButton>
      </Main>
    </ThemeProvider>
  );
}

export default App; 
