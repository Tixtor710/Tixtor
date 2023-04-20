import React, { useState } from "react";

function Forum() {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form data to the backend using fetch or axios
    // Clear the form inputs
    setAuthor("");
    setTitle("");
    setBody("");
  };

  return (
    <div>
      <h1>Forum</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="author">Name:</label>
        <input
          type="text"
          id="author"
          name="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <label htmlFor="title">Query:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label htmlFor="body">Detail your query here:</label>
        <textarea
          id="body"
          name="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Forum;
