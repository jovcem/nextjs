import { useLoaderData } from "react-router-dom";

export default function PostDetails() {
  const post = useLoaderData();
  return (
    <>
      <h1>{post.author}</h1>
      <p>{post.body}</p>
    </>
  );
}

export async function loader({ params }) {
  const response = await fetch("http://localhost:8080/posts/" + params.id);
  const resData = await response.json();
  return resData.post;
}
