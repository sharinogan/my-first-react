import React, { Component } from "react";

const Post = (props) => {
  return (
    <div>
      <h2>Post id : { props.id }</h2>
      <p>Comment : </p>
      <p>{ props.children }</p>
    </div>
  )
}

export default Post;
