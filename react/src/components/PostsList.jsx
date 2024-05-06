import Post from "./Post";
import { useLoaderData } from "react-router-dom";

function PostsList({}) {
  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 && (
        <ul>
          {posts.map((x) => (
            <Post key={x.id} author={x.author} body={x.body} id={x.id}></Post>
          ))}
        </ul>
      )}
      {posts.length === 0 && <h1>No posts yet</h1>}
    </>
  );
}

export default PostsList;
