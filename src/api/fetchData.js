const fetchData = (async (info) => {
  const resp = await fetch(`https://api.github.com/search/repositories?q=${info.searchBy}:${info.value}&per_page=100&page=${info.page}`);
  const data = await resp.json();
  const remainingRequests = resp.headers.get('X-Ratelimit-Remaining');
  if (resp.status === 200) {
    return { ...data, remainingRequests };
  } else {
    if (resp.status === 403) {
      throw new Error('API rate limit exceeded, please try later!');
    } else {
      throw new Error(`status: ${resp.status}, msg: ${data.message}`);
    }
  }
});


export default fetchData;