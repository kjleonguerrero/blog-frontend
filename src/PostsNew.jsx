export function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form>
        <div className="text">
          TITLE: <input className="textbox" type="text" placeholder="title" />
        </div>
        <div className="text">
          BODY: <input className="textbox" type="text" placeholder="body" />
        </div>
        <div className="text">
          IMAGE: <input className="textbox" type="text" placeholder="image_url" />
        </div>
      </form>
    </div>
  );
}
