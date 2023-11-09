/* eslint-disable react/prop-types */
export function PostsIndex(props) {
  console.log(props);

  return (
    <div id="posts-index">
      <h1 className="text">All Posts!</h1>
      {/* loop of defined recipe data props from the parent component */}
      {props.posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <img src={post.image} alt="food pics" />
          {/* <p>{post.body} </p> */}
          <div>
            <button
              type="button"
              className="btn btn-primary btn-danger"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={() => props.onShowPost(post)}
            >
              More info!
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
