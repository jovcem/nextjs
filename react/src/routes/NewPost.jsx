import Modal from "../components/Modal";
import { Link, Form, redirect } from "react-router-dom";

function NewPost(props) {
  return (
    <Modal>
      <Form method="post">
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" rows={3}></textarea>
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" required name="author" />
        </p>
        <p>
          <Link to="/" type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function action({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);

  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return redirect("/");
}
