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

## Getting Started

Run the following to start the app:
`npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
