import { Button } from "@mui/material";
import React, { ReactNode } from "react";
import { Link, useSearchParams } from "react-router-dom";

const Blog = (props:{children?:ReactNode}) => {
  let [searchParams, setSearchParams] = useSearchParams();
  return (
    <div>
      <h3>List Of Posts</h3>
      <Link to="/blog/123">Post 1</Link>
      {props.children}
    </div>
  );
};

export default Blog;
