/* eslint-disable react/prop-types */
import "./App.css";

function Header() {
  return (
    <header className="header">
      <a className="header" href="#">
        Home
      </a>{" "}
      |{" "}
      <a className="header" href="#posts-index">
        All posts
      </a>{" "}
      |{" "}
      <a className="header" href="#posts-new">
        New post
      </a>
    </header>
  );
}

function PostsNew() {
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

function PostsIndex(props) {
  console.log(props);

  return (
    <div id="posts-index">
      <h3 className="text">All Posts!</h3>
      {/* loop of defined recipe data props from the parent component */}
      {props.posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <img src={post.image} alt="food pics" />
          <p>{post.body} </p>
          <button className="button">More info!</button>
        </div>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>Copyright 20XX</p>
    </footer>
  );
}

function Content() {
  let posts = [
    {
      id: 1,
      title: "BLOG POST 1",
      body: "First Ever Blog!",
      image:
        "https://img.freepik.com/premium-photo/number-1-fire-flames-black-realistic-fire-effect-with-sparks_347169-114.jpg",
    },
    {
      id: 2,
      title: "BLOG POST 2",
      body: "Second Ever Blog!",
      image:
        "https://media.istockphoto.com/id/638099466/fr/photo/feu-num%C3%A9ro-2-deux-de-flamme-br%C3%BBlante.jpg?s=170667a&w=0&k=20&c=_rZNZGFkheRo610Ar1lWg2FDSzrGtt7y4dJ2dvwka4E=",
    },
    {
      id: 3,
      title: "BLOG POST 3",
      body: "Third Ever Blog!",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjdTziWm7cUORz1wy6QsmJ3BTNni_-XbKdJg&usqp=CAU",
    },
    {
      id: 4,
      title: "BLOG POST 4",
      body: "Fourth Ever Blog!",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY4RXlcmse6aljsIp3pTvo6Z_Sqnb1OuQf_Q&usqp=CAU",
    },
  ];
  return (
    <div>
      <PostsNew />
      <PostsIndex posts={posts} />
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
