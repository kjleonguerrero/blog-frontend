export function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form>
        TITLE: <input className="textbox" type="text" placeholder="title" />
        BODY: <input className="textbox" type="text" placeholder="body" />
        IMAGE: <input className="textbox" type="text" placeholder="image_url" />
      </form>
    </div>
  );
}
