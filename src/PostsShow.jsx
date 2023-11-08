export function PostsShow(props) {
  console.log(props);

  return (
    <div id="posts-show" className="modal-text">
      <h1>Post Details</h1>
      <h2>{props.post.title}</h2>
      <p>{props.post.body}</p>
    </div>
  );
}
