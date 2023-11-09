import axios from "axios";

export function PostsNew() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handle submit");
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/posts.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
      })
      .catch((error) => {
        console.log(error.response.data.errors);
      });
  };
  return (
    <div id="posts-new">
      <h1>Create a New Post</h1>
      <form onSubmit={handleSubmit}>
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
            Image
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
        <button className="btn btn-danger" type="submit">
          Create a new post
        </button>
      </form>
    </div>
  );
}
