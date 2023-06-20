import React from "react";
import "./App.css";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import Blog from "./components/Blog";
import Home from "./components/Home";
import api from "./services/api";
import { styled } from "@mui/material";

const ROUTES: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/blog/:pid",
    element: <Blog />,
  },
];

const router = createBrowserRouter(ROUTES);

function App() {
  return (
    <AppStyledDiv className="App">
      <ApiProvider api={api}>
        <RouterProvider router={router} />
      </ApiProvider>
    </AppStyledDiv>
  );
}

const AppStyledDiv = styled("div")`
  video {
    position: absolute;
    left: 0px;
    width: 100vw;
    top: 0;
    height: 100vh;
    object-fit: cover;
    z-index: -1;
  }
  
`;
export default App;
