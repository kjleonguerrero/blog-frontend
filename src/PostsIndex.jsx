/* eslint-disable react/prop-types */
import { useState } from "react";

export function PostsIndex(props) {
  console.log(props);

  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div id="posts-index">
      <h1 className="text">All Posts!</h1>
      Search filter:{" "}
      <input type="text" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} />
      {/* loop of defined recipe data props from the parent component */}
      {props.posts
        .filter((post) => post.title.toLowerCase().includes(searchFilter.toLowerCase()))
        .map((post) => (
          <div key={post.id}>
            <div className="card">
              <h2>{post.title}</h2>
              <img className="img-fluid" src={post.image} alt="post pics" />
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
          </div>
        ))}
    </div>
  );
}
