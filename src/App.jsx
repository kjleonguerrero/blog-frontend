import "./App.css";

function App() {
  return (
    <div>
      <header>
        <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
      </header>

      <div id="posts-new">
        <h1>New post</h1>
        <div>
          TITLE: <input type="text" />
          BODY: <input type="text" />
          IMAGE: <input type="text" />
        </div>
      </div>

      <div id="posts-index">
        <h1>All posts</h1>
      </div>
      {/* BlogPost2 */}
      <div>
        <h2>BLOG POST 2</h2>
        <p>Fish are friends not food!</p>
        <img
          src="https://scubadivingcostarica.com/wp-content/uploads/2015/03/fish-friends-not-food-large-msg-1131585409-2-300x225.jpg"
          alt="Fish are friends not food"
        />
      </div>
      {/* BlogPost1 */}
      <div>
        <h2>BLOG POST 1</h2>
        <p>Dog is a mans bestfriend!</p>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL7JNQWMixefJ6knA8yFatxnl-fce8BvGNwOxmdoSw2f0cBN1oL704HGX_uLgIc7InNgo&usqp=CAU"
          alt="Dog is a mans bestfriend"
        />
      </div>

      <footer>
        <p>Copyright 20XX</p>
      </footer>
    </div>
  );
}

export default App;
