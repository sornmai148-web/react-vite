import { createFileRoute } from "@tanstack/react-router";
import { postsQueryOption } from "../api/queryOptions/post.option";
import { useSuspenseQuery } from "@tanstack/react-query";

export const Route = createFileRoute("/post")({
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(postsQueryOption()),
  component: RouteComponent,
});

function RouteComponent() {
  const { isLoading, isRefetching, data, refetch } =
    useSuspenseQuery(postsQueryOption());

  if (isLoading || isRefetching) return <div>loading...</div>;

  return (
    <div className="flex flex-col space-y-2.5 text-black">
      <button
        onClick={() => refetch()}
        className="text-red-500 bg-amber-500 w-fit px-4 py-2"
      >
        Refech
      </button>

      {(data || [])?.map((post) => (
        <div key={post?.id}>
          <p className="text-sm">Post id: {post?.userId}</p>
          <p className="font-bold">UserPost : {post?.userId}</p>
          <p className="font-bold">{post?.title}</p>
          <p>{post?.body}</p>
        </div>
      ))}
    </div>
  );
}
