# Subly Coding Challenge

## To Run Locally

In the project directory, you can run:

 `yarn start`

 open the browser to http://localhost:3000

## This React app has been built with the assumptions that

- It will be only used for desktop/laptop devices (width: `>1200px`). Therefore, no mobile responsive optimizations have been made.
- The cards will not scale for different desktop sizes.
- The incoming JSON data from the API will not change. Only the `error`, `transcribing` and `ready` statuses will be handled by the app. There is no specific accommodation for extra long names.
- The app does not show a different UI if the API request responds with anything other than `200` or with no media data (empty array).
- The `updatedAt` datetime values will not be under 1 month from the current date. Cases such as `1 day ago` or `1 week ago` are not handled. The function that handles the formatting was created for a simple functionality demonstration and not an extensive integration for all edge cases.
- There is no `onClick` functionality for any buttons present in the `MediaCards`. They only trigger a window alert.
- No specific performance optimizations need to be made (e.g. caching, memoization, etc).
- The media filters should be combined. E.g. if `ready` and `en` are both selected, the app should show only media that is ready and has english as a language.

## Decisions
- The app was initialized using the `create-react-app` cli tool with the `typescript` template to save setup time.
- NextJs was not used as there for no apparent need for Server Side Rendering.
- The app was built using `styled-components` to make the CSS easier to manage (no class name conflicts + simple prop injection for dynamic styling).
- The browser's built in `fetch` API was used to make the API calls. There was no apparent reason to add or create a custom fetch library (e.g. `react-query`) to handle, caching, retries, etc.
- The source code uses a simple filing structure to keep the code clean. However, if the project was  larger and had 10+ components I would have opted for an [atomic filing structure](https://atomicdesign.bradfrost.com/chapter-2/).
- A Constants directory was created to keep variables that would normally need to be reused throughout the codebase. This is not the case is this project. However, it is a good practice to keep constants in a separate file for manageability.
- The `filterOptions` in `App.tsx` don't technically need to be filtered for duplicates as the mock API data doesn't change. However, this is done for demonstration purposes in the case that multiple items with the same `status` are returned from the API.
