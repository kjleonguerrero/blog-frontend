import { useState } from "react";
import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { Modal } from "./Modal";

export function Content() {
  const [isPostsShowVisible, setIsPostShowVisible] = useState(false);

  const handleShowPost = () => {
    setIsPostShowVisible(true);
  };

  const handleClose = () => {
    setIsPostShowVisible(false);
  };

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
      <PostsIndex posts={posts} onShowPost={handleShowPost} />
      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <p className="modal-text">TEST</p>
      </Modal>
    </div>
  );
}
