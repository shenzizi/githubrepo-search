# Github repo search

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


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
