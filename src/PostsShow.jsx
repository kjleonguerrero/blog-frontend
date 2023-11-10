export function PostsShow(props) {
  console.log(props);

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdatePost(props.post.id, params);
    event.target.reset();
  };

  const handleClick = () => {
    props.onDestroyPost(props.post);
  };

  return (
    <div id="posts-show" className="modal-text">
      <h1>Post Details</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input defaultValue={props.post.title} name="title" type="text" />
        </div>
        <div>
          Body: <input defaultValue={props.post.body} name="body" type="text" />
        </div>
        <div>
          Image: <input defaultValue={props.post.image} name="image" type="text" />
        </div>
        <button type="submit" data-bs-dismiss="modal" className="btn btn-secondary">
          Update Post
        </button>
      </form>
      <button onClick={handleClick} data-bs-dismiss="modal" className="btn btn-secondary">
        Delete Post
      </button>
    </div>
  );
}
