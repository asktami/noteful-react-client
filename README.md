# react-router-context-noteful

## Refactor to use context instead of prop drilling

- Implement two fetch requests to two endpoints when the application mounts: /folders and /notes. Store the response from these requests using a setState in whichever component you were keeping your dummy state.

- Implement the delete button for each note in the list in the main route and folder route.

- Implement the delete button on the note page, if the delete is successful, redirect to the / path.

- The API calls will be made to a local server called noteful-json-server that you'll need to have running separately to your noteful React application.

- You aren't required to implement the "add-folder" or "add-note" forms just yet.



## Original Requirements

There are 3 routes to build: the main route, the dynamic folder route and a dynamic note route. We'll supply you with 3 wireframes for each of these pages, you'll need to create the semantic (accessible) HTML for these as well as basic styling.

- Each route should have a header, main section, and a sidebar section

- Every route will have the same header section, the app's title should be a link to the main route.

- The state will be supplied below in a JSON object and contains an array of folders and an array of notes.
	- Set the state inside the main App component. (We'll use an API call to populate this state in a future checkpoint.)

- The main route:
	- Should be displayed when the path is /
	- The main section will display all of the available notes
	- - Each note should show it's name and modified date
	- The sidebar will display a list of folders with none selected

- The dynamic folder route:
	- Should be displayed when the path is /folder/<with-a-folder-id-here>
	- The folder-id will reference an id of one of the folders in state
	- The main section should display only the notes that are "in" the selected folder
	- The sidebar should display the folder list with the selected folder highlighted

- The dynamic note route:
	- Should be displayed when the path is /note/<with-a-note-id-here>
	- The note-id will reference an id of one of the notes in state
	- The main section should display the currently selected notes name, modified date and content
	- The sidebar should display the folder of the currently selected note as well as a "back" button.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
