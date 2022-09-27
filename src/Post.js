import React, { Component } from 'react';
import Comment from './Comment';

const Post = (props) => {
    const myId = props.myId;
    const content = props.children;
    return (
        <div>
            <h3>author : {myId}</h3>
            <p>{content}</p>
        </div>
    )
}

export default Post;