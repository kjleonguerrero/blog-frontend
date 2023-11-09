export function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form method="POST" action="http://localhost:3000/posts.json">
        <div className="input-group flex-nowrap">
          <span className="input-group-text" id="addon-wrapping">
            Title
          </span>
          <input
            name="title"
            type="text"
            className="form-control"
            placeholder="Title Here"
            aria-label="Username"
            aria-describedby="addon-wrapping"
          />
        </div>
        <div className="input-group flex-nowrap">
          <span className="input-group-text" id="addon-wrapping">
            Body
          </span>
          <input
            name="body"
            type="text"
            className="form-control"
            placeholder="Body Here"
            aria-label="Username"
            aria-describedby="addon-wrapping"
          />
        </div>
        <div className="input-group flex-nowrap">
          <span className="input-group-text" id="addon-wrapping">
            Image URL
          </span>
          <input
            name="image"
            type="text"
            className="form-control"
            placeholder="URL Here"
            aria-label="Username"
            aria-describedby="addon-wrapping"
          />
        </div>
        <button type="submit">Create a new post</button>
      </form>
    </div>
  );
}
