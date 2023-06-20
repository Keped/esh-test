import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { BlogPost } from "../types";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "",
    method: "GET",
    headers: {
    },
  }),
  endpoints: (builder) => ({
    getAllPosts: builder.query<BlogPost[], string>({
      query: () => `/posts.json`,
    }),
  }),
});

export const { useGetAllPostsQuery } = postsApi;
export default postsApi;
