import React, { useState } from "react";

import { Tab, Tabs, Box, styled } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import LocalizeButton from "./components/LocalizeButton";
import api from "./services/api";

interface TabLinkProps {
  to: string;
  label: string;
}

const TabbedView = (props: { children?: React.ReactNode }) => {
  const [t] = useTranslation();
  const { isLoading } = api.useGetAllPostsQuery("");

  const [currentTab, setCurrentTab] = useState<number>(
    window.location.toString().includes("blog") ? 1 : 0
  );

  function a11yProps(index: string) {
    return {
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
  };

  if (isLoading) {
    return <div></div>;
  }

  return (
    <>
      <StyledHeader
        className="App-header"
        sx={{
          direction: document.dir,
        }}
      >
        <Tabs
          sx={{ flex: 3 }}
          value={currentTab}
          onChange={handleChange}
          aria-label="esh test"
        >
          <TabLink label={t("home")} to={"/"} {...a11yProps("home")} />
          <TabLink label={t("blog")} to={"/blog"} {...a11yProps("blog")} />
        </Tabs>
        <LocalizeButton />
      </StyledHeader>
      <Box sx={{ p: 3, height: "100vh" }}>{props.children}</Box>
    </>
  );
};

const StyledHeader = styled("header")`
  background-color: transparent;
  display: flex;
  flex-direction: row;
  a {
    text-transform: none !important;
  }

  .MuiTabs-indicator {
    visibility: hidden !important;
  }
`;

export default TabbedView;
