/* eslint-disable react/prop-types */
export function PostsIndex(props) {
  console.log(props);

  return (
    <div id="posts-index">
      <h3 className="text">All Posts!</h3>
      {/* loop of defined recipe data props from the parent component */}
      {props.posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <img src={post.image} alt="food pics" />
          {/* <p>{post.body} </p> */}
          <div>
            <button className="button" onClick={() => props.onShowPost(post)}>
              More info!
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
