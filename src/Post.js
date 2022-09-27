import React, { Component } from 'react';
import Comment from './Comment';
class Post extends Component {
    render() {
        return (
            <div>
                <h3>Hello Post!!!!</h3>
                < Comment />
            </div>
        );
    }
}

export default Post;