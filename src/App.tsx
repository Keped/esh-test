import React, { useState } from "react";
import "./App.css";
import { Tab, Tabs, Box, Paper } from "@mui/material";
import {
  createBrowserRouter,
  Link,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import Blog from "./Blog";
import Home from "./Home";
import Post from "./Blog/Post";

const ROUTES: RouteObject[] = [
  {
    path: "/",
    element: (
      <TabbedView>
        <Home />
      </TabbedView>
    ),
  },
  {
    path: "/blog",
    element: (
      <TabbedView>
        <Blog />
      </TabbedView>
    ),
  },
  {
    path: "/blog/:pid",
    element: (
      <Post
        post={{
          pid: "123",
          createdAt: "17/04/2023",
          byLine: "Team esh",
          title: "Kira is joining esh; announcing eshX",
          content: `We are happy to announce the appointment of Dr. Kira Radinsky as a member of the bank's board of directors and as head of eshX - the new laboratory for next-generation technologies.
Kira, who has a PhD in artificial intelligence, serves as CEO of Diagnostic Robotics, one of the leading artificial intelligence companies in the world of medicine, is a world-renowned expert in the field of machine learning and a two-time winner of the Israel Defense Award. Kira served as eBay's chief scientist and before that led the establishment of big-data systems at Microsoft.

Under her leadership, eshX will be engaged in the application of future technologies in the fields of banking. These technologies will be integrated into the activities of the group's technology platform, and into the bank's activities. This combination will make it possible to optimize the service and lower the costs for the bank's customers.

Alongside Kira, in the team that is recruiting people these days, will take part Colonel Moshe Wolf, the bank’s CIO, former commander in unit 8200, also a winner of the Israel Defense Award and former CEO of the national payment infrastructure companies MASAV and SHVA, this alongside the co-founder and group CTO, Mr. Alex Liverant.

With her appointment as a director, Kira joins the chairman of the bank's board of directors Prof. Shmuel Hauser, former chairman of the Israeli SEC, to the vice-chairman of the board Dr. Nadine Baudot-Trajtenberg, former deputy governor of the Central Bank of Israel, and to the bank's CEO, Mr. Kobi Malkin, former CEO of the Soldiers Treasury Bank.

Team esh.

`,
        }}
      />
    ),
  },
];

const router = createBrowserRouter(ROUTES);
interface TabLinkProps {
  to: string;
  label: string;
}
function TabbedView(props: { children?: React.ReactNode }) {
  const [currentTab, setCurrentTab] = useState<number>(
    window.location.toString().includes("blog") ? 1 : 0
  );

  function a11yProps(index: string) {
    return {
      sx: { fontWeight: 600 },
      index,
      id: `maim-tab-${index}`,
      "aria-controls": `maim-tabpanel-${index}`,
    };
  }

  const TabLink = (props: TabLinkProps) => {
    return <Tab component={Link} {...props} />;
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
    // router.navigate(event.currentTarget.getAttribute("href")!);
  };
  return (
    <>
      <header className="App-header">
        <Paper
          sx={{
            backgroundColor: "transparent",
            border: "none",
            boxShadow: "none",
          }}
        >
          <Tabs
            value={currentTab}
            onChange={handleChange}
            aria-label="esh test"
          >
            <TabLink label="Home" to={"/"} {...a11yProps("home")} />
            <TabLink label="Blog" to={"/blog"} {...a11yProps("blog")} />
          </Tabs>
        </Paper>
      </header>

      <Box sx={{ p: 3 }}>{props.children}</Box>
    </>
  );
}
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
