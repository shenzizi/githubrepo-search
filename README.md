# Github repo search

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Demo
This project is deployed to firebase, find it here: \
https://githubrepo-search.web.app


## Implement the following features:
- User can search by the repository topic/name/description by selecting the dropdown menu and key in the search query
- Request will be sent after 1 second after user keys in query string(to do so for avoiding rate limitation)
- Implement infinite scrolling, load more data when user scrolls to the bottom of the page
- Show meta data including total results and the remaining requests after the api data comes back
- Show hints when user keys in the query string
- Show error message when API rate limit exceeded
- Show no result when there is no matching data
- Show no more data when the data length is equal to the total results
- RWD
  

## Notes
- Use custom hooks to separate critical logic
  - `useAsync.js` : deal with asynchronous requests. It is used to fetching data from github API, controlling the loading status and setting error message. 
  - `useIntersect.js` : use Intersection Observer API to detect visibility of an element. Implement infinite scrolling by executing the callback function(to load more data) when target is in intersect and use method disconnect() stops watching all of its target elements for visibility changes.
  - `useDebouce.js` : execute the callback after specific time delay
- Use `ThemeProvider` to injects the theme into all styled components anywhere beneath it in the component tree
- Folder structure
  - `config` : UI theme and options of intersection can be adjusted here
  - `components/UI` : extra components for further reuse