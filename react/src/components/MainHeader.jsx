import { Link } from "react-router-dom";

function MainHeader({}) {
  return (
    <header>
      <h1>React Poster</h1>
      <p>
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/create-post">
          New Post
        </Link>
        <Link className="link" to="/about">
          About Page
        </Link>
      </p>
    </header>
  );
}

export default MainHeader;
