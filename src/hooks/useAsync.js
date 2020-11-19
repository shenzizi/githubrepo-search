import {
  useReducer,
  useEffect,
  useCallback
} from 'react';

const useAsync = (asyncFunction, info) => {
  const initState = {
    loading: false,
    data: null,
    error: null
  };

  function asyncReducer(state, action) {
    switch (action.type) {
      case 'START_LOADING':
        return { ...state, loading: true };
      case 'STOP_LOADING':
        return { ...state, loading: false };
      case 'SET_DATA':
        return { ...state, data: action.data };
      case 'SET_MORE_DATA':
        return {
          ...state,
          data: {
            ...state.data,
            items: [
              ...state.data.items,
              ...action.items
            ]
          }
        };
      case 'CLEAR_DATA':
        return { ...state, data: null };
      case 'SET_ERROR':
        return { ...state, error: action.error };
      default:
        return state;
    }
  }

  const [async, dispatch] = useReducer(asyncReducer, initState);

  const execute = useCallback(() => {
    dispatch({ type: 'START_LOADING' });
    dispatch({ type: 'SET_ERROR', error: null });

    return asyncFunction(info)
      .then(data => {
        dispatch({ type: 'STOP_LOADING' });
        if (info.newRequest) {
          dispatch({ type: 'SET_DATA', data });
        } else {
          dispatch({ type: 'SET_MORE_DATA', items: data.items });
        }
      })
      .catch(error => {
        dispatch({ type: 'STOP_LOADING' });
        dispatch({ type: 'SET_ERROR', error: error.message });
      });
  }, [asyncFunction, info]);

  useEffect(() => {
    if (!info.value || info.newRequest) {
      dispatch({ type: 'SET_DATA', data: null });
    }

    if (info.value) {
      dispatch({ type: 'START_LOADING' });
      execute();
    }

  }, [execute, info]);

  return {
    data: async.data,
    loading: async.loading,
    error: async.error,
    asyncDispatch: dispatch
  };
};

export default useAsync;