import React, { useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([
    { name: "Drew", content: "dril tweets" },
    { name: "Garrett", content: "heaven-piercing giga drill" },
    { name: "Sam", content: "come see my show" },
  ]);

  const handleNameChange = (e) => setName(e.target.value);
  const handleContentChange = (e) => setContent(e.target.value);
  const handleClick = () => {
      const newPost = {
          name: name,
          content: content
      };

      setPosts([...posts, newPost])
  }

  return (
    <>
      <h1>Hello World</h1>

      <label htmlFor="username-input">Who are you?</label>
      <input
        type="text"
        name="username-input"
        id=""
        value={name}
        onChange={handleNameChange}
      />
      <label htmlFor="content-input">What do you want to say?</label>
      <textarea
        name="content-input"
        id=""
        cols="30"
        rows="10"
        value={content}
        onChange={handleContentChange}
      ></textarea>
      <button>Submit</button>

      <div id="timeline-container">
        {posts.map((post, index) => (
          <div key={index}>
            <div>{post.name}</div>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
