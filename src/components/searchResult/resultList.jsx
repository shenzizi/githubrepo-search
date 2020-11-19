import { useCallback } from 'react';
import useIntersect from '../../hooks/useIntersect';
import MetaResult from './metaResult';
import {
  Wrapper,
  Spinner,
  Card,
  CardContent,
  Panel
} from '../UI';
import spinner from '../UI/spinner/spinner.gif';
import intersectionOptions from '../../config/intersectionOptions';

const ResultList = ({ data, error, dispatch }) => {
  const loadMore = useCallback(() =>
    dispatch({
      type: 'LOAD_MORE'
    }), [dispatch]);

  const [ref] = useIntersect(intersectionOptions, loadMore);

  const FollowingContent = () => {
    if (error) {
      return <Panel>{error}</Panel>
    } else if (data.total_count <= data.items.length) {
      return <Panel>No more data</Panel>
    } else {
      return (
        <Wrapper>
          <Spinner src={spinner} alt='loading...' ref={ref} />
        </Wrapper>
      )
    }
  }


  if (data.items.length === 0) {
    return (
      <>
        <MetaResult data={data} />
        <Panel>No result</Panel>
      </>
    )
  }

  return (
    <>
      <MetaResult data={data} />
      {data.items.map(d => (
        <Card key={d.id}>
          <div>
            <CardContent>
              <span>Name:</span>
              {d.name}
            </CardContent>
            <CardContent>
              <span>Stars:</span>
              {d.stargazers_count}
            </CardContent>
            <CardContent>
              <span>Created at:</span>
              {d.created_at.slice(0, 10)}
            </CardContent>
          </div>
          <div>
            <CardContent>
              <span>Owner:</span>
              {d.owner.login}
            </CardContent>
            <CardContent>
              <span>Open issues:</span>
              {d.open_issues}
            </CardContent>
            <CardContent>
              <span>Link:</span>
              <a
                target='_blank'
                rel='noreferrer noopener'
                href={`${d.html_url}`}>
                go to {d.name}
              </a>
            </CardContent>
          </div>
        </Card>
      ))
      }
      {FollowingContent()}
    </>
  )
}

export default ResultList;