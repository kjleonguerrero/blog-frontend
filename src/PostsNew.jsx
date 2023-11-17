export function PostsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    console.log("handle submit");
    props.onCreatePost(params);
    event.target.reset();
    window.location.href = "/posts";
  };

  return (
    <div id="posts-new">
      <h1>Create a New Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col">
            <input
              name="title"
              type="text"
              className="form-control"
              placeholder="Title Here"
              aria-label="First name"
            ></input>
          </div>
          <div className="col">
            <input
              name="body"
              type="text"
              className="form-control"
              placeholder="Body Here"
              aria-label="Last name"
            ></input>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input
              name="image"
              type="text"
              className="form-control"
              placeholder="Image URL Here"
              aria-label="First name"
            ></input>
          </div>
        </div>
        <button className="btn btn-danger" type="submit">
          Create a new post
        </button>
      </form>
    </div>
  );
}
