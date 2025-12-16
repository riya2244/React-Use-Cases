import React from "react";
import useFetch from "./useFetch";

function App() {
  const url = "https://jsonplaceholder.typicode.com/posts"; // Fake API
  const { data, loading, error } = useFetch(url); // Use custom hook

  if (loading) return <p>Loading...</p>; // Show loading message
  if (error) return <p>Error: {error}</p>; // Show error message

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
