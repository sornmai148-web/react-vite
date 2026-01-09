import { queryOptions } from "@tanstack/react-query";
import { fetchPosts } from "../queryResources/post.resource";

export const postsQueryOption = () =>
  queryOptions({
    queryKey: ["posts"],
    queryFn: () => fetchPosts(),
    staleTime: 900000,
  });
