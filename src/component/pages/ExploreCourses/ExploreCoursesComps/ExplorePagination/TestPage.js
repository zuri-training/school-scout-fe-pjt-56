import React from "react";

const TestPage = ({ posts, loading }) => {
  if (loading) {
    return <h2>Please wait</h2>;
  }

  return (
    <>
      {posts.map((post) => (
        <div key={post.id}>
          {post.id}
          {post.body}
        </div>
      ))}
    </>
  );
};

export default TestPage;
