type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  });
  if (!response?.ok) return null;
  const data = response.json();
  return data as Promise<Array<Post>>;
}
