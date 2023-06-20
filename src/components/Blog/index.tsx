import React from "react";
import TabbedView from "../../TabbedView";
import { Stack } from "@mui/material";
import { useGetAllPostsQuery } from "../../services/api";
import { BlogPost } from "../../types";
import Post from "./Post";
import List from "./List";
import { useParams } from "react-router-dom";

const Blog = () => {
  const { pid } = useParams();
  const { data: posts } = useGetAllPostsQuery("");
  let post = null;

  if (pid && posts) {
    post = posts!.find((post: BlogPost) => post.id === pid)!;
  }

  return (
    <TabbedView>
      {post ? (
        <Post post={post} />
      ) : (
        <Stack direction={"column"} alignItems={"center"} spacing={2}>
          <List posts={posts ?? []} />
        </Stack>
      )}
    </TabbedView>
  );
};

export default Blog;
