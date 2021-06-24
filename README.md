# Megamarkets Refactor

Created by: Tim Mai

## Changes

- Moved the original project files to a React starter template I wrote for my company that includes the following packages:
  - ESLint (for code quality concerns)
  - Prettier (for code formatting concerns)
  - TypeScript (for static type checking)
  - lint-staged, pretty-quick, and husky (for pre-commit auto formatting and linting)
  - Figmagic (for accessing design tokens in Figma)
- Refactored code to use TypeScript
- Updated styling of app with components I built for my company's component library
  - Finding inspiration from Atomic Design, I created a number of subcomponents that were used to build more complex components. As this is a simple app, I did not find a need to build "templates" or "pages" (under Brad Frost's original definitions of them), but his general composition philosophy is still present.
- Moved content of MainContainer.jsx directly into App.tsx since App.tsx doesn't do anything except display MainContainer
- Moved Redux-related files into `redux` folder to clean up folder structure
- Refactor files to use React-Redux hooks
- Opted to pass selectors/dispatch/actions directly into components that need them instead of passing them to a parent container and then passing them down via props (i.e. avoid prop drilling)
- Moved content of MarketsContainer directly into App.tsx because it became a very simple component after refactoring to use Redux hooks, and the app structure would be clearer
- Replaced MarketDisplay with MarketCard
- Added functionality to reset input field value after creating new market

## Design Decisions

- I debated whether or not to use Redux Toolkit since it adds useful functionality like `createSlice`, but I opted to use vanilla Redux to show that I know how to use it.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
