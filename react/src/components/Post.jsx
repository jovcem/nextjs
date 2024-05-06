import classes from "./Post.module.css";
import { Link } from "react-router-dom";

function Post(props) {
  return (
    <li className={classes.post}>
      <Link to={"/post/" + props.id}>
        <p className={classes.author}>
          <b>{props.author}</b>
        </p>
        <p>{props.body}</p>
      </Link>
    </li>
  );
}

export default Post;
