export default function BlogPostPage({ params }) {
  return (
    <main>
      <h1>Blog Post</h1>
      <h3>{params.slug}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
        aliquam.
      </p>
    </main>
  );
}
