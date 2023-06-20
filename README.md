# Esh Test

## Overview

### App structure
The app is a React js typescript with hooks. I chose MUI as component library, with the occasional styled component customization. App.js handles routing and wrapping with providers. Tabs are implemented in TabbedView which is used as a wrapper by all components below. 

### State keeping
I chose RTK-Query for this, It's new to me, but it seems to leverage the advantages from both `RTK` (streamlined but complete redux solution) and `react-query` (even more minimal to integrate, less complete).

## Available Scripts

In the project directory, you can run:
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`
