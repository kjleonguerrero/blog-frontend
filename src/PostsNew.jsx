export function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form>
        <div className="text">
          TITLE: <input type="text" />
        </div>
        <div className="text">
          BODY: <input type="text" />
        </div>
        <div className="text">
          IMAGE: <input type="text" />
        </div>
      </form>
    </div>
  );
}
